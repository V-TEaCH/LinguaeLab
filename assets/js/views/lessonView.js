import { getLesson } from '../lessonRegistry.js';
import { checkAnswer } from '../engines/answerChecker.js';
import {
  buildRuntimeExercise,
  createRuntimeExercises,
  renderLessonExercise,
} from '../engines/exerciseRenderer.js';
import {
  applyExerciseResult,
  createLessonScoring,
  getLessonScore,
} from '../engines/scoring.js';
import {
  enqueueDeferredSpiralExercise,
  formatLocalScore,
  formatProgressStatus,
  getDeferredSpiralExercisesForLesson,
  getLessonProgress,
  markDeferredSpiralExerciseDone,
  upsertLessonProgress,
} from '../persistence/localProgress.js';

const lessonSessions = new Map();

export function __resetLessonSessionsForTests() {
  lessonSessions.clear();
}

function getOrCreateLessonSession(lesson) {
  const existingSession = lessonSessions.get(lesson.id);
  if (existingSession) {
    return existingSession;
  }

  const authoredRuntimeExercises = createRuntimeExercises(lesson.exerciseSlots, lesson.deliveryModel);
  authoredRuntimeExercises
    .filter((exercise) => exercise.phase === 'deferredSpiralPath' && exercise.deferredTo?.targetLessonId)
    .forEach((exercise) => {
      const deferredKey = `${lesson.id}::${exercise.id}`;
      enqueueDeferredSpiralExercise(exercise.deferredTo.targetLessonId, {
        deferredKey,
        sourceLessonId: lesson.id,
        sourceLessonTitle: lesson.title,
        exercise: {
          id: exercise.id,
          type: exercise.declaredType,
          instruction: exercise.prompt,
          prompt: exercise.prompt,
          acceptedAnswers: exercise.acceptedAnswers,
          expectedOrder: exercise.expectedOrder,
          options: exercise.options,
          unlockRules: exercise.unlockRules,
          deferredTo: exercise.deferredTo,
          phase: 'deferredSpiralPath',
          pedagogicalRole: exercise.pedagogicalRole,
          visibleByDefault: false,
        },
      });
    });

  const deferredReplayExercises = getDeferredSpiralExercisesForLesson(lesson.id)
    .map((entry, index) => {
      const runtimeExercise = buildRuntimeExercise(
        {
          ...entry.exercise,
          slotId: `deferred-${entry.deferredKey}`,
          phase: 'deferredSpiralPath',
          pedagogicalRole: 'spirale',
          visibleByDefault: false,
        },
        12 + index
      );

      return {
        ...runtimeExercise,
        deferredReplay: true,
        deferredKey: entry.deferredKey,
        sourceLessonId: entry.sourceLessonId,
        sourceLessonTitle: entry.sourceLessonTitle,
        countsTowardLessonProgress: false,
      };
    });
  const runtimeExercises = [...authoredRuntimeExercises, ...deferredReplayExercises];
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

function countProgressExercises(runtimeExercises) {
  return runtimeExercises.filter((exercise) => exercise.countsTowardLessonProgress !== false).length;
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
      selected: form.querySelector(`input[name="${exerciseId}"]:checked`)?.value ?? '',
    };
  }

  if (runtimeType === 'multipleChoice') {
    return {
      selected: Array.from(
        form.querySelectorAll(`input[name="${exerciseId}"]:checked`)
      ).map((input) => input.value),
    };
  }

  const textValue =
    form.querySelector(`input[name="${exerciseId}"]`)?.value ??
    form.querySelector(`textarea[name="${exerciseId}"]`)?.value ??
    '';

  return { text: textValue };
}

function getStandardExercises(runtimeExercises) {
  return runtimeExercises.filter((exercise) => exercise.phase === 'standardPath');
}

function computeRate(exercises, exerciseScores) {
  const max = exercises.reduce((sum, exercise) => sum + exercise.maxScore, 0);
  if (max <= 0) {
    return 0;
  }

  const score = exercises.reduce((sum, exercise) => {
    const result = exerciseScores.get(exercise.id);
    return sum + (Number.isFinite(result?.awarded) ? result.awarded : 0);
  }, 0);

  return score / max;
}

export function computeMasteryStatusFromRate(rate) {
  if (rate < 0.4) {
    return 'non_maîtrisé';
  }

  if (rate < 0.65) {
    return 'fragile';
  }

  if (rate < 0.85) {
    return 'maîtrisé';
  }

  return 'très_bien_maîtrisé';
}

export function resolveAdaptiveLessonState(runtimeExercises, exerciseScores) {
  const standardExercises = getStandardExercises(runtimeExercises);
  const answeredStandard = standardExercises.filter((exercise) => exerciseScores.has(exercise.id));
  const standardCompleted = standardExercises.length > 0 && answeredStandard.length === standardExercises.length;
  const standardRate = computeRate(standardExercises, exerciseScores);
  const masteryStatus = computeMasteryStatusFromRate(standardRate);

  const baseRules = runtimeExercises[0]?.unlockRules ?? {
    reinforcementMaxStandardRate: 0.74,
    masteryMinStandardRate: 0.75,
  };

  let unlockedPaths = ['standardPath'];

  if (standardCompleted) {
    if (standardRate >= baseRules.masteryMinStandardRate) {
      unlockedPaths.push('masteryPath');
    } else if (standardRate <= baseRules.reinforcementMaxStandardRate) {
      unlockedPaths.push('reinforcementPath');
    }
  }

  const visibleExercises = runtimeExercises.filter((exercise) => {
    if (exercise.phase === 'deferredSpiralPath') {
      return false;
    }

    return unlockedPaths.includes(exercise.phase);
  });
  const deferredSpiralExercises = runtimeExercises.filter(
    (exercise) => exercise.phase === 'deferredSpiralPath'
  );
  const deferredReplayExercises = deferredSpiralExercises.filter((exercise) => exercise.deferredReplay);

  return {
    visibleExercises,
    unlockedPaths,
    masteryStatus,
    standardCompleted,
    standardRate,
    standardAnsweredCount: answeredStandard.length,
    standardTotalCount: standardExercises.length,
    deferredSpiralExercises,
    deferredReplayExercises,
  };
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

      const beforeAdaptive = resolveAdaptiveLessonState(
        session.scoringSession.runtimeExercises,
        session.scoringSession.exerciseScores
      );
      const beforePaths = beforeAdaptive.unlockedPaths.join('|');

      const userAnswer = readUserAnswer(form, runtimeType, exerciseId);
      const result = checkAnswer(runtimeExercise, userAnswer);
      applyExerciseResult(session.scoringSession, exerciseId, result);

      const feedbackNode = rootElement.querySelector(`[data-feedback-for="${exerciseId}"]`);
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
        countProgressExercises(session.scoringSession.runtimeExercises)
      );
      const progressStatusNode = lessonContainer?.querySelector('[data-lesson-progress-status]');
      if (progressStatusNode) {
        progressStatusNode.textContent = formatProgressStatus(status);
      }

      const adaptiveState = resolveAdaptiveLessonState(
        session.scoringSession.runtimeExercises,
        session.scoringSession.exerciseScores
      );
      if (runtimeExercise.deferredReplay && result.isCorrect) {
        markDeferredSpiralExerciseDone(lessonId, runtimeExercise.deferredKey);
      }

      upsertLessonProgress(lessonId, {
        status,
        score,
        maxScore,
        answeredCount,
        masteryStatus: adaptiveState.masteryStatus,
        unlockedPaths: adaptiveState.unlockedPaths,
        exerciseResults: Object.fromEntries(session.scoringSession.exerciseScores.entries()),
      });

      const afterPaths = adaptiveState.unlockedPaths.join('|');
      if (beforePaths !== afterPaths) {
        try {
          window.dispatchEvent(new HashChangeEvent('hashchange'));
        } catch {
          // no-op in non-browser tests
        }
      }
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
  const adaptiveState = resolveAdaptiveLessonState(
    session.scoringSession.runtimeExercises,
    session.scoringSession.exerciseScores
  );
  const exercisesHtml = adaptiveState.visibleExercises
    .map((exercise, index) => renderLessonExercise(exercise, index))
    .join('');
  const lessonScore = getLessonScore(session.scoringSession);
  const persistedProgress = getLessonProgress(lesson.id);
  const answeredCount = session.scoringSession.exerciseScores.size;
  const lessonStatus = computeLessonProgressStatus(
    answeredCount,
    countProgressExercises(session.scoringSession.runtimeExercises)
  );
  const resumeHint = persistedProgress?.status && persistedProgress.status !== 'not_started'
    ? `<p><small>Reprise automatique active : progression locale restaurée (${formatProgressStatus(persistedProgress.status)}).</small></p>`
    : '';

  const unlockedLabels = adaptiveState.unlockedPaths
    .map((path) => {
      if (path === 'standardPath') {
        return 'parcours standard';
      }
      if (path === 'reinforcementPath') {
        return 'renforcement';
      }
      if (path === 'masteryPath') {
        return 'maîtrise';
      }
      return path;
    })
    .join(' + ');
  const deferredReplayHtml = adaptiveState.deferredReplayExercises
    .map((exercise, index) => renderLessonExercise(exercise, index))
    .join('');

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
          <small> (${answeredCount}/${countProgressExercises(session.scoringSession.runtimeExercises)} exercices validés)</small>
        </p>
        <p>
          <strong>Niveau de maîtrise (standard) :</strong>
          ${adaptiveState.masteryStatus}
          <small> (${adaptiveState.standardAnsweredCount}/${adaptiveState.standardTotalCount} standard validés)</small>
        </p>
        <p><strong>Parcours actif :</strong> ${unlockedLabels}</p>
        <p><small>Spirale différée : ${adaptiveState.deferredSpiralExercises.length} exercice(s) liés à cette leçon.</small></p>
        ${resumeHint}
      </header>
      <ul class="exercise-list">${exercisesHtml}</ul>
      ${
        deferredReplayHtml
          ? `<section class="card">
        <h2>Réactivation différée à traiter</h2>
        <p><small>Ces exercices proviennent d’une leçon antérieure et servent à la spirale inter-leçons.</small></p>
        <ul class="exercise-list">${deferredReplayHtml}</ul>
      </section>`
          : ''
      }
    </section>`;
}
