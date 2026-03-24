import { getLevel, getModule } from '../lessonRegistry.js';
import {
  formatProgressStatus,
  getLessonProgress,
  getModuleProgressSummary,
} from '../persistence/localProgress.js';

function formatStatus(status) {
  if (status === 'tested') {
    return 'tested (release candidate)';
  }

  return status;
}

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

  const lessonItems = module.lessons
    .map(
      (lesson) => {
        const localProgress = getLessonProgress(lesson.id);
        const status = formatProgressStatus(localProgress?.status ?? 'not_started');
        const scoreSnippet = localProgress
          ? ` · score ${localProgress.score}/${localProgress.maxScore}`
          : '';

        return `
        <li>
          <a href="#/level/${levelId}/module/${moduleId}/lesson/${lesson.id}">${lesson.title}</a>
          <span>${lesson.exerciseSlots.length} exercices-cadres</span>
          <small>Statut local: ${status}${scoreSnippet}</small>
        </li>`;
      }
    )
    .join('');

  return `
    <section class="page">
      <p><a href="#/level/${levelId}">← ${level.title}</a></p>
      <header class="hero">
        <p class="eyebrow">${level.title} · module ${module.order}</p>
        <h1>${module.title}</h1>
        <p>Statut contenu: ${formatStatus(module.contentStatus)}</p>
        <p>${module.focus}</p>
        <p>
          <strong>Progression locale :</strong>
          ${moduleProgress.completed} terminées · ${moduleProgress.inProgress} en cours · ${moduleProgress.notStarted} non commencées
        </p>
      </header>
      <ol class="lesson-list">${lessonItems}</ol>
    </section>`;
}
