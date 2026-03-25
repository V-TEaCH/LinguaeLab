import { resolveRoute } from './router.js';
import { bindLessonExercisePassation } from './views/lessonView.js';

function renderApp() {
  const appElement = document.querySelector('#app');

  if (!appElement) {
    return;
  }

  appElement.innerHTML = resolveRoute();
  bindLessonExercisePassation(appElement);
}

window.addEventListener('hashchange', renderApp);
window.addEventListener('DOMContentLoaded', () => {
  renderApp();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {
      // Échec silencieux pour préserver un bootstrap statique minimal.
    });
  }
});
