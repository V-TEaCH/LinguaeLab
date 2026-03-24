import { getLevel, getModule } from '../lessonRegistry.js';

export function renderModuleView(levelId, moduleId) {
  const level = getLevel(levelId);
  const module = getModule(moduleId);

  if (!level || !module || module.levelId !== levelId) {
    return '<section class="page"><p>Module introuvable.</p><p><a href="#/">Retour</a></p></section>';
  }

  const lessonItems = module.lessons
    .map(
      (lesson) => `
        <li>
          <a href="#/level/${levelId}/module/${moduleId}/lesson/${lesson.id}">${lesson.title}</a>
          <span>${lesson.exerciseSlots.length} exercices-cadres</span>
        </li>`
    )
    .join('');

  return `
    <section class="page">
      <p><a href="#/level/${levelId}">← ${level.title}</a></p>
      <header class="hero">
        <p class="eyebrow">${level.title} · module ${module.order}</p>
        <h1>${module.title}</h1>
        <p>Statut contenu: ${module.contentStatus}</p>
        <p>${module.focus}</p>
      </header>
      <ol class="lesson-list">${lessonItems}</ol>
    </section>`;
}
