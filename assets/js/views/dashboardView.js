import { getLevels, getCurriculumStats } from '../lessonRegistry.js';

export function renderDashboardView() {
  const stats = getCurriculumStats();
  const levelCards = getLevels()
    .map(
      (level) => `
        <a class="card" href="#/level/${level.id}">
          <h2>${level.title}</h2>
          <p>${level.modules.length} modules · ${level.modules.length * 15} leçons</p>
        </a>`
    )
    .join('');

  return `
    <section class="page">
      <header class="hero">
        <p class="eyebrow">Scaffold collège</p>
        <h1>ATRIUM-Français</h1>
        <p>Base statique prête pour une rédaction progressive module par module.</p>
      </header>
      <section class="stats">
        <div class="stat"><strong>${stats.levelCount}</strong><span>niveaux</span></div>
        <div class="stat"><strong>${stats.moduleCount}</strong><span>modules</span></div>
        <div class="stat"><strong>${stats.lessonCount}</strong><span>leçons</span></div>
      </section>
      <section class="grid">${levelCards}</section>
    </section>`;
}
