import { getLevels, getCurriculumStats } from '../lessonRegistry.js';
import { getModuleProgressSummary } from '../persistence/localProgress.js';

function formatContentStatus(status) {
  const labels = {
    scaffold: 'scaffold',
    authored: 'authored',
    tested: 'tested',
    released: 'released',
  };

  return labels[status] ?? status;
}

export function renderDashboardView() {
  const stats = getCurriculumStats();
  const levelCards = getLevels()
    .map(
      (level) => {
        const moduleStatuses = level.modules.reduce((acc, module) => {
          acc[module.contentStatus] = (acc[module.contentStatus] ?? 0) + 1;
          return acc;
        }, {});
        const progressTotals = level.modules.reduce(
          (acc, module) => {
            const moduleProgress = getModuleProgressSummary(module);
            acc.completed += moduleProgress.completed;
            acc.inProgress += moduleProgress.inProgress;
            acc.notStarted += moduleProgress.notStarted;
            return acc;
          },
          { completed: 0, inProgress: 0, notStarted: 0 }
        );

        const statusSummary = Object.entries(moduleStatuses)
          .map(([status, count]) => `${count} ${formatContentStatus(status)}`)
          .join(' · ');

        return `
        <a class="card" href="#/level/${level.id}">
          <h2>${level.title}</h2>
          <p>${level.modules.length} modules · ${level.modules.length * 15} leçons</p>
          <p>Statuts: ${statusSummary}</p>
          <p>Progression locale: ${progressTotals.completed} terminées · ${progressTotals.inProgress} en cours · ${progressTotals.notStarted} non commencées</p>
        </a>`;
      }
    )
    .join('');

  return `
    <section class="page">
      <header class="hero">
        <p class="eyebrow">État des contenus: 6e testée · 5e testée · 4e testée · 3e générale testée · DNB authored</p>
        <h1>LinguaeLab</h1>
        <p>6e, 5e, 4e et 3e générale sont testées (release candidate) ; le module DNB (3e-m5) reste authored avec les leçons 1 à 5 priorisées en entraînement guidé (pas simulation complète).</p>
      </header>
      <section class="stats">
        <div class="stat"><strong>${stats.levelCount}</strong><span>niveaux</span></div>
        <div class="stat"><strong>${stats.moduleCount}</strong><span>modules</span></div>
        <div class="stat"><strong>${stats.lessonCount}</strong><span>leçons</span></div>
      </section>
      <section class="grid">${levelCards}</section>
    </section>`;
}
