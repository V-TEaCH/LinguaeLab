import { resolveRoute } from './router.js';

function renderApp() {
  const appElement = document.querySelector('#app');

  if (!appElement) {
    return;
  }

  appElement.innerHTML = resolveRoute();
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
