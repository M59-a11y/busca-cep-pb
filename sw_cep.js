const CACHE_NAME = 'cep-pb-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest_cep.json',
  './icon_cep.png'
];

// Instalação e Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responde offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});