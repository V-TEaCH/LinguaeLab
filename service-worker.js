const CACHE_NAME = "atrium-francais-v0";
const URLS = ["./", "./index.html", "./assets/css/styles.css", "./assets/js/app.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
