/**
 * Service Worker - Kevo Amouzou Portfolio
 *
 * Strategie :
 *  - documents HTML : network-first, avec repli sur le cache hors ligne.
 *    Indispensable pour qu'une mise a jour du site soit visible immediatement
 *    par les visiteurs deja venus.
 *  - autres ressources de meme origine : cache-first.
 *
 * A chaque deploiement modifiant index.html, incrementer CACHE_VERSION.
 */

const CACHE_VERSION = 'v3';
const CACHE_NAME = `kevo-portfolio-${CACHE_VERSION}`;

const urlsToCache = [
    '/',
    '/index.html',
    '/images/kevo.jpeg',
    '/CV_Kevo_Amouzou_Industriel.pdf'
];

// Installation : precache des ressources essentielles
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

// Activation : suppression des anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;

    if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) {
        return;
    }

    const isDocument = request.mode === 'navigate' || request.destination === 'document';

    if (isDocument) {
        // Network-first : le contenu a jour prime toujours sur le cache
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() => caches.match(request).then((cached) => cached || caches.match('/index.html')))
        );
        return;
    }

    // Cache-first pour les ressources statiques
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) {
                return cached;
            }
            return fetch(request).then((response) => {
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                return response;
            });
        })
    );
});
