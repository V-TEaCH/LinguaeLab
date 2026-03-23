import { getLesson } from '../lessonRegistry.js';

export function renderLessonView(levelId, moduleId, lessonId) {
  const lesson = getLesson(lessonId);

  if (!lesson || lesson.levelId !== levelId || lesson.moduleId !== moduleId) {
    return '<section class="page"><p>Leçon introuvable.</p><p><a href="#/">Retour</a></p></section>';
  }

  const exerciseSlots = lesson.exerciseSlots
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

  const spiralReview = Array.isArray(lesson.spiralReview) && lesson.spiralReview.length
    ? `<p><strong>Réactivation :</strong> ${lesson.spiralReview.join(' · ')}</p>`
    : '';

  return `
    <section class="page">
      <p><a href="#/level/${levelId}/module/${moduleId}">← ${lesson.moduleTitle}</a></p>
      <header class="hero">
        <p class="eyebrow">${lesson.levelTitle}</p>
        <h1>${lesson.title}</h1>
        <p>${lesson.objective ?? lesson.notion}</p>
        ${spiralReview}
      </header>
      <ul class="exercise-list">${exerciseSlots}</ul>
    </section>`;
}
