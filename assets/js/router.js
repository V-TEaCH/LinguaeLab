import { renderDashboardView } from './views/dashboardView.js';
import { renderLevelView } from './views/levelView.js';
import { renderModuleView } from './views/moduleView.js';
import { renderLessonView } from './views/lessonView.js';

function normalizeHash(hash) {
  return hash.replace(/^#?\/?/, '').split('/').filter(Boolean);
}

export function resolveRoute(hash = window.location.hash) {
  const segments = normalizeHash(hash);

  if (segments.length === 0) {
    return renderDashboardView();
  }

  if (segments[0] !== 'level' || !segments[1]) {
    return renderDashboardView();
  }

  const levelId = segments[1];

  if (segments.length === 2) {
    return renderLevelView(levelId);
  }

  if (segments[2] === 'module' && segments[3] && segments.length === 4) {
    return renderModuleView(levelId, segments[3]);
  }

  if (
    segments[2] === 'module' &&
    segments[3] &&
    segments[4] === 'lesson' &&
    segments[5] &&
    segments.length === 6
  ) {
    return renderLessonView(levelId, segments[3], segments[5]);
  }

  return renderDashboardView();
}
