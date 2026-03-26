import { getLevel, getModule } from '../lessonRegistry.js';
import {
  formatLocalScore,
  formatProgressStatus,
  getLessonProgress,
  getModuleProgressSummary,
  getMostRecentLessonProgress,
} from '../persistence/localProgress.js';

function formatStatus(status) {
  if (status === 'tested') {
    return 'tested (release candidate)';
  }

  return status;
}

export function renderModuleView(levelId, moduleId) {
  const level = getLevel(levelId);
  const module = getModule(moduleId);

  if (!level || !module || module.levelId !== levelId) {
    return '<section class="page"><p>Module introuvable.</p><p><a href="#/">Retour</a></p></section>';
  }

  const moduleProgress = getModuleProgressSummary(module);
  const resumeCandidate = getMostRecentLessonProgress(module.lessons);
  const resumeLessonId = resumeCandidate?.lessonId ?? module.lessons[0]?.id ?? null;
  const resumeLabel = resumeCandidate
    ? 'Reprendre la dernière leçon active'
    : 'Commencer la première leçon';

  const lessonItems = module.lessons
    .map(
      (lesson) => {
        const localProgress = getLessonProgress(lesson.id);
        const status = formatProgressStatus(localProgress?.status ?? 'not_started');
        const scoreSnippet = localProgress
          ? ` · ${formatLocalScore(localProgress.score, localProgress.maxScore)}`
          : ' · score non noté';

        return `
        <li>
          <a href="#/level/${levelId}/module/${moduleId}/lesson/${lesson.id}">${lesson.title}</a>
          <span>${lesson.exerciseSlots.length} exercices-cadres</span>
          <small>Statut local: ${status}${scoreSnippet}</small>
        </li>`;
      }
    )
    .join('');

  const resumeSnippet = resumeLessonId
    ? `<p><a href="#/level/${levelId}/module/${moduleId}/lesson/${resumeLessonId}">${resumeLabel}</a></p>`
    : '';
  const dnbScopeSnippet = module.id === '3e-m5'
    ? '<p><strong>Cadre DNB :</strong> entraînement guidé progressif (compréhension, langue, réécriture), sans simulation complète d’épreuve ; priorité actuelle sur les leçons 1 à 5.</p>'
    : '';

  return `
    <section class="page">
      <p><a href="#/level/${levelId}">← ${level.title}</a></p>
      <header class="hero">
        <p class="eyebrow">${level.title} · module ${module.order}</p>
        <h1>${module.title}</h1>
        <p>Statut contenu: ${formatStatus(module.contentStatus)}</p>
        <p>${module.focus}</p>
        ${dnbScopeSnippet}
        <p>
          <strong>Progression locale :</strong>
          ${moduleProgress.completed} terminées · ${moduleProgress.inProgress} en cours · ${moduleProgress.notStarted} non commencées
          <small>(${moduleProgress.completionRate}% terminé)</small>
        </p>
        ${resumeSnippet}
      </header>
      <ol class="lesson-list">${lessonItems}</ol>
    </section>`;
}
