import { getLesson } from '../lessonRegistry.js';
import { checkAnswer } from '../engines/answerChecker.js';
import {
  createRuntimeExercises,
  renderLessonExercise,
} from '../engines/exerciseRenderer.js';
import {
  applyExerciseResult,
  createLessonScoring,
  getLessonScore,
} from '../engines/scoring.js';
import {
  formatLocalScore,
  formatProgressStatus,
  getLessonProgress,
  upsertLessonProgress,
} from '../persistence/localProgress.js';

const lessonSessions = new Map();

function getOrCreateLessonSession(lesson) {
  const existingSession = lessonSessions.get(lesson.id);
  if (existingSession) {
    return existingSession;
  }

  const runtimeExercises = createRuntimeExercises(lesson.exerciseSlots);
  const scoringSession = createLessonScoring(runtimeExercises);
  const session = {
    scoringSession,
    runtimeExerciseMap: new Map(runtimeExercises.map((exercise) => [exercise.id, exercise])),
  };
  const persistedProgress = getLessonProgress(lesson.id);
  if (persistedProgress?.exerciseResults) {
    Object.entries(persistedProgress.exerciseResults).forEach(([exerciseId, result]) => {
      if (session.runtimeExerciseMap.has(exerciseId)) {
        applyExerciseResult(scoringSession, exerciseId, result);
      }
    });
  }

  lessonSessions.set(lesson.id, session);
  return session;
}

function computeLessonProgressStatus(answeredCount, totalExercises) {
  if (answeredCount <= 0) {
    return 'not_started';
  }

  if (answeredCount >= totalExercises) {
    return 'completed';
  }

  return 'in_progress';
}

function renderScaffoldExerciseSlots(lesson) {
  return lesson.exerciseSlots
    .map(
      (exercise) => `
        <li>
          <strong>${exercise.slotId}</strong>
          <span>${exercise.type}</span>
          <p>${exercise.instruction}</p>
          <em>${exercise.status}</em>
        </li>`
    )
    .join('');
}

function readUserAnswer(form, runtimeType, exerciseId) {
  if (runtimeType === 'singleChoice') {
    return {
      selected: form.querySelector(`input[name=\"${exerciseId}\"]:checked`)?.value ?? '',
    };
  }

  if (runtimeType === 'multipleChoice') {
    return {
      selected: Array.from(
        form.querySelectorAll(`input[name=\"${exerciseId}\"]:checked`)
      ).map((input) => input.value),
    };
  }

  const textValue =
    form.querySelector(`input[name=\"${exerciseId}\"]`)?.value ??
    form.querySelector(`textarea[name=\"${exerciseId}\"]`)?.value ??
    '';

  return { text: textValue };
}

export function bindLessonExercisePassation(rootElement = document) {
  if (!rootElement?.querySelectorAll) {
    return;
  }

  const forms = rootElement.querySelectorAll('[data-exercise-form]');
  forms.forEach((form) => {
    if (form.dataset.bound === 'true') {
      return;
    }

    form.dataset.bound = 'true';
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const exerciseId = form.dataset.exerciseId;
      const runtimeType = form.dataset.runtimeType;
      const lessonContainer = form.closest('[data-lesson-id]');
      const lessonId = lessonContainer?.dataset.lessonId;
      const session = lessonId ? lessonSessions.get(lessonId) : null;
      const runtimeExercise = session?.runtimeExerciseMap.get(exerciseId);

      if (!session || !runtimeExercise) {
        return;
      }

      const userAnswer = readUserAnswer(form, runtimeType, exerciseId);
      const result = checkAnswer(runtimeExercise, userAnswer);
      applyExerciseResult(session.scoringSession, exerciseId, result);

      const feedbackNode = rootElement.querySelector(`[data-feedback-for=\"${exerciseId}\"]`);
      if (feedbackNode) {
        feedbackNode.textContent = result.feedback;
      }

      const { score, maxScore } = getLessonScore(session.scoringSession);
      const scoreNode = lessonContainer?.querySelector('[data-lesson-score]');
      const maxNode = lessonContainer?.querySelector('[data-lesson-max]');

      if (scoreNode) {
        scoreNode.textContent = String(score);
      }

      if (maxNode) {
        maxNode.textContent = String(maxScore);
      }

      const answeredCount = session.scoringSession.exerciseScores.size;
      const status = computeLessonProgressStatus(
        answeredCount,
        session.scoringSession.runtimeExercises.length
      );
      const progressStatusNode = lessonContainer?.querySelector('[data-lesson-progress-status]');
      if (progressStatusNode) {
        progressStatusNode.textContent = formatProgressStatus(status);
      }

      upsertLessonProgress(lessonId, {
        status,
        score,
        maxScore,
        answeredCount,
        exerciseResults: Object.fromEntries(session.scoringSession.exerciseScores.entries()),
      });
    });
  });
}

export function renderLessonView(levelId, moduleId, lessonId) {
  const lesson = getLesson(lessonId);

  if (!lesson || lesson.levelId !== levelId || lesson.moduleId !== moduleId) {
    return '<section class="page"><p>Leçon introuvable.</p><p><a href="#/">Retour</a></p></section>';
  }

  const isScaffoldLesson = lesson.status === 'scaffold';

  const spiralReview = Array.isArray(lesson.spiralReview) && lesson.spiralReview.length
    ? `<p><strong>Réactivation :</strong> ${lesson.spiralReview.join(' · ')}</p>`
    : '';

  if (isScaffoldLesson) {
    const scaffoldExerciseSlots = renderScaffoldExerciseSlots(lesson);

    return `
      <section class="page">
        <p><a href="#/level/${levelId}/module/${moduleId}">← ${lesson.moduleTitle}</a></p>
        <header class="hero">
          <p class="eyebrow">${lesson.levelTitle}</p>
          <h1>${lesson.title}</h1>
          <p>${lesson.objective ?? lesson.notion}</p>
          ${spiralReview}
          <p><strong>Statut :</strong> scaffold (cadre éditorial non encore jouable).</p>
        </header>
        <ul class="exercise-list">${scaffoldExerciseSlots}</ul>
      </section>`;
  }

  const session = getOrCreateLessonSession(lesson);
  const exercisesHtml = session.scoringSession.runtimeExercises
    .map((exercise, index) => renderLessonExercise(exercise, index))
    .join('');
  const lessonScore = getLessonScore(session.scoringSession);
  const persistedProgress = getLessonProgress(lesson.id);
  const answeredCount = session.scoringSession.exerciseScores.size;
  const lessonStatus = computeLessonProgressStatus(
    answeredCount,
    session.scoringSession.runtimeExercises.length
  );
  const resumeHint = persistedProgress?.status && persistedProgress.status !== 'not_started'
    ? `<p><small>Reprise automatique active : progression locale restaurée (${formatProgressStatus(persistedProgress.status)}).</small></p>`
    : '';

  return `
    <section class="page" data-lesson-id="${lesson.id}">
      <p><a href="#/level/${levelId}/module/${moduleId}">← ${lesson.moduleTitle}</a></p>
      <header class="hero">
        <p class="eyebrow">${lesson.levelTitle}</p>
        <h1>${lesson.title}</h1>
        <p>${lesson.objective ?? lesson.notion}</p>
        ${spiralReview}
        <p>
          <strong>Score :</strong>
          <span data-lesson-score>${lessonScore.score}</span> /
          <span data-lesson-max>${lessonScore.maxScore}</span>
          <small>(${formatLocalScore(lessonScore.score, lessonScore.maxScore)})</small>
        </p>
        <p>
          <strong>Statut local :</strong>
          <span data-lesson-progress-status>${formatProgressStatus(lessonStatus)}</span>
          <small> (${answeredCount}/${session.scoringSession.runtimeExercises.length} exercices validés)</small>
        </p>
        ${resumeHint}
      </header>
      <ul class="exercise-list">${exercisesHtml}</ul>
    </section>`;
}
