const CACHE = 'anchor-v3';
const BASE = self.location.pathname.replace(/sw\.js$/, '');
const PRECACHE = [BASE, BASE + 'index.html', BASE + 'manifest.json', BASE + 'icon-192.png', BASE + 'icon-512.png'];
const CDN = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://unpkg.com',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const isCDN = CDN.some(d => e.request.url.startsWith(d));

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(BASE + 'index.html'))
    );
    return;
  }

  if (isCDN) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
