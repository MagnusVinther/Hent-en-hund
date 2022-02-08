let CACHE_NAME = 'my-site-cache';

let urlsToCache = [
    './',
    './assets/css/styles.css',
    './assets/css/info.css',
    './assets/images/outline-dog192.png',
    './assets/images/outline-dog512.png',
    './assets/images/samoyed2.png',
    './index.htm',
    './info.htm'
];


// alle elementer til at skabe appen skal caches


self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)

        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {

    console.log('intercept req: '+e.request.url);

    // Caching strategier hér
})