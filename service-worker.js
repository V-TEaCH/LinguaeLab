const CACHE_NAME = 'linguaelab-v1';
const URLS = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/styles.css',
  './assets/js/app.js',
  './assets/js/router.js',
  './assets/js/lessonRegistry.js',
  './assets/js/data/curriculumBlueprint.js',
  './assets/js/data/blueprintFactory.js',
  './assets/js/data/6e/blueprint.js',
  './assets/js/data/5e/blueprint.js',
  './assets/js/data/4e/blueprint.js',
  './assets/js/data/3e/blueprint.js',
  './assets/js/data/refs/officialRefs.js',
  './assets/js/views/dashboardView.js',
  './assets/js/views/levelView.js',
  './assets/js/views/moduleView.js',
  './assets/js/views/lessonView.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
