import { getLevels, getCurriculumStats } from '../lessonRegistry.js';

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

        const statusSummary = Object.entries(moduleStatuses)
          .map(([status, count]) => `${count} ${formatContentStatus(status)}`)
          .join(' · ');

        return `
        <a class="card" href="#/level/${level.id}">
          <h2>${level.title}</h2>
          <p>${level.modules.length} modules · ${level.modules.length * 15} leçons</p>
          <p>Statuts: ${statusSummary}</p>
        </a>`;
      }
    )
    .join('');

  return `
    <section class="page">
      <header class="hero">
        <p class="eyebrow">6e release candidate</p>
        <h1>LinguaeLab</h1>
        <p>6e est jouable et testée ; 5e, 4e et 3e restent scaffoldées.</p>
      </header>
      <section class="stats">
        <div class="stat"><strong>${stats.levelCount}</strong><span>niveaux</span></div>
        <div class="stat"><strong>${stats.moduleCount}</strong><span>modules</span></div>
        <div class="stat"><strong>${stats.lessonCount}</strong><span>leçons</span></div>
      </section>
      <section class="grid">${levelCards}</section>
    </section>`;
}
