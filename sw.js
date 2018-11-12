// Code inspired by matthew cranford's walk through

var cacheV = 'restaurant-reviews-v2';

const cacheFiles = [
    '/',
    '/restaurant.html',
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    // '/js/sw_register.js',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/data/restaurants.json'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheV).then(function(cache) {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service worker working, for now...');
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            if(response) {
                return response;
            }
            else {
                //request no exist in cache
                return fetch(event.request)
                .then(function(response) {
                    const cloneResponse = response.clone();
                    caches.open(cacheV).then(function(cache) {
                        cache.put(event.request, cloneResponse);
                    })
                    return response;
                })
                .catch(function() {
                    console.log('Error with Service Worker!!!');
                });
            }
        })
    );
});
