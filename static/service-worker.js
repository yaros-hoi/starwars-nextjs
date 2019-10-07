const CACHE = `app-cache-v3h`;
const FILES = ['/static/favicon.ico', '/static/logo.svg', '/static/logo.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      }

      return fetch(event.request).then(response => {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        const responseClone = response.clone();

        caches.open(CACHE).then(cache => {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    })
  );
});
