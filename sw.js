const CACHE = 'doha-portfolio-v1';
const FILES = [
  '/dohajaafari04.github.io/',
  '/dohajaafari04.github.io/index.html',
  '/dohajaafari04.github.io/resume.html',
  '/dohajaafari04.github.io/portfolio.html',
  '/dohajaafari04.github.io/contact.html',
  '/dohajaafari04.github.io/Haven.html',
  '/dohajaafari04.github.io/Trade.html',
  '/dohajaafari04.github.io/TheEnd.html',
  '/dohajaafari04.github.io/Cherie.html',
  '/dohajaafari04.github.io/style.css',
  '/dohajaafari04.github.io/resume.css',
  '/dohajaafari04.github.io/portfolio.css',
  '/dohajaafari04.github.io/contact.css',
  '/dohajaafari04.github.io/Haven.css',
  '/dohajaafari04.github.io/Trade.css',
  '/dohajaafari04.github.io/TheEnd.css',
  '/dohajaafari04.github.io/Cherie.css',
  '/dohajaafari04.github.io/script.js',
  '/dohajaafari04.github.io/manifest.json',
  '/dohajaafari04.github.io/assets/logo.png',
  '/dohajaafari04.github.io/assets/heroImage.png',
  '/dohajaafari04.github.io/assets/Footer.png',
  '/dohajaafari04.github.io/assets/Haven.png',
  '/dohajaafari04.github.io/assets/Trade.png',
  '/dohajaafari04.github.io/assets/TheEnd.png',
  '/dohajaafari04.github.io/assets/Cherie.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    }))
  );
});
