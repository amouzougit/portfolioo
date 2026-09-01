/**
 * Service Worker - Kevo Amouzou Portfolio
 *
 * Objectif : un visiteur deja venu ne doit jamais voir une version perimee du site
 * ni un CV perime. La fraicheur prime sur la vitesse, le cache ne sert que de repli
 * hors ligne ou d'affichage immediat pour les ressources ou une version d'avance
 * est sans consequence.
 *
 * Strategies :
 *  - documents HTML et CV PDF : network-first, en contournant le cache HTTP du
 *    navigateur. Repli sur le cache uniquement si le reseau echoue.
 *  - autres ressources de meme origine (images, icones) : stale-while-revalidate,
 *    servies depuis le cache et rafraichies en arriere-plan.
 *  - ressources d'autres origines (polices, icones CDN) : non interceptees.
 *
 * Incrementer CACHE_VERSION apres toute modification d'un fichier de PRECACHE.
 */

const CACHE_VERSION = 'v30';
const CACHE_NAME = `kevo-portfolio-${CACHE_VERSION}`;

const PRECACHE = [
    '/',
    '/index.html',
    '/projets',
    '/styles.css',
    '/images/kevo.jpeg',
    '/CV_Kevo_Amouzou_Industriel.pdf'
];

// Ressources dont une version perimee n'est pas acceptable.
// styles.css est ici volontairement : depuis la session 007 il porte tout le style du
// site. Une version perimee servie a cote d'un HTML frais afficherait une page nue.
const ALWAYS_FRESH = ['/CV_Kevo_Amouzou_Industriel.pdf', '/styles.css'];

// Installation : precache tolerant, un fichier manquant ne doit pas faire echouer
// l'installation et laisser l'ancien worker en place.
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => Promise.all(
                PRECACHE.map((url) => cache.add(url).catch(() => null))
            ))
            .then(() => self.skipWaiting())
    );
});

// Activation : suppression des anciens caches, puis prise de controle immediate.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(
                names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
            ))
            .then(() => self.clients.claim())
    );
});

/**
 * Network-first. On refetch par URL plutot qu'en reutilisant la Request : une
 * requete de navigation ne peut pas etre reconstruite en JavaScript, et
 * cache: 'reload' est indispensable pour court-circuiter le cache HTTP du
 * navigateur, sinon une reponse perimee peut etre servie sans toucher le reseau.
 */
function networkFirst(request) {
    return fetch(request.url, { cache: 'reload', credentials: 'same-origin' })
        .then((response) => {
            // Un service worker n'a pas le droit de renvoyer une reponse redirigee a
            // une requete de navigation : la specification en fait une erreur reseau,
            // que Chrome affiche en ERR_FAILED, page blanche a l'appui. Or Cloudflare
            // Pages redirige en 308 tout chemin en .html vers sa version sans
            // extension, /index.html vers / par exemple. Un signet, un lien externe ou
            // une URL tapee a la main suffisent donc a casser la page. On reconstruit
            // une reponse identique mais sans marque de redirection.
            const clean = response && response.redirected
                ? new Response(response.body, {
                      status: response.status,
                      statusText: response.statusText,
                      headers: response.headers
                  })
                : response;
            if (clean && clean.ok) {
                const copy = clean.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return clean;
        })
        .catch(() => caches.match(request)
            .then((cached) => cached || caches.match('/index.html'))
            .then((cached) => cached || Response.error()));
}

/**
 * Stale-while-revalidate : reponse immediate depuis le cache, mise a jour en
 * arriere-plan pour le chargement suivant.
 */
function staleWhileRevalidate(request) {
    return caches.match(request).then((cached) => {
        const network = fetch(request)
            .then((response) => {
                if (response && response.ok && response.type === 'basic') {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                }
                return response;
            })
            .catch(() => cached);

        return cached || network;
    });
}

self.addEventListener('fetch', (event) => {
    const request = event.request;

    if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) {
        return;
    }

    const isDocument = request.mode === 'navigate' || request.destination === 'document';
    const path = new URL(request.url).pathname;

    if (isDocument || ALWAYS_FRESH.includes(path)) {
        event.respondWith(networkFirst(request));
        return;
    }

    event.respondWith(staleWhileRevalidate(request));
});
