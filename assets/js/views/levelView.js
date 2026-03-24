import { getLevel } from '../lessonRegistry.js';
import { getModuleProgressSummary } from '../persistence/localProgress.js';

function formatStatus(status) {
  if (status === 'tested') {
    return 'tested (release candidate)';
  }

  return status;
}

export function renderLevelView(levelId) {
  const level = getLevel(levelId);

  if (!level) {
    return '<section class="page"><p>Niveau introuvable.</p><p><a href="#/">Retour</a></p></section>';
  }

  const moduleCards = level.modules
    .map(
      (module) => {
        const progress = getModuleProgressSummary(module);

        return `
        <a class="card" href="#/level/${level.id}/module/${module.id}">
          <h2>${module.title}</h2>
          <p>Module ${module.order} · ${module.lessons.length} leçons</p>
          <p>Statut contenu: ${formatStatus(module.contentStatus)}</p>
          <p>Progression locale: ${progress.completed} terminées · ${progress.inProgress} en cours · ${progress.notStarted} non commencées</p>
          <p>Avancement module: ${progress.completionRate}%</p>
          <p>${module.focus}</p>
        </a>`;
      }
    )
    .join('');

  return `
    <section class="page">
      <p><a href="#/">← Dashboard</a></p>
      <header class="hero">
        <p class="eyebrow">Niveau</p>
        <h1>${level.title}</h1>
        <p>${level.officialRefs.map((ref) => ref.source).join(' · ')}</p>
      </header>
      <section class="grid">${moduleCards}</section>
    </section>`;
}
