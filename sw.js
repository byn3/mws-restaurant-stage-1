// Code inspired by matthew cranford's walk through and Alexandro Perez

const cacheName = "restaurant-review-app";
const staticCacheName = cacheName + "v1.0";
const imgCache = cacheName + "img";

let allCaches = [
    staticCacheName,
    imgCache
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                "/img/1.jpg",
                "/img/2.jpg",
                "/img/3.jpg",
                "/img/4.jpg",
                "/img/5.jpg",
                "/img/6.jpg",
                "/img/7.jpg",
                "/img/8.jpg",
                "/img/9.jpg",
                "/img/10.jpg",
                "/index.html",
                "/restaurant.html",
                "/css/styles.css",
                "/js/dbhelper.js",
                "/js/main.js",
                "/js/restaurant_info.js",
                "/data/restaurants.json"
            ]);
        })
    );
});

self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (names) {
            return Promise.all(
                names.filter(function (cache) {
                    return cache.startsWith(cacheName) &&
                        !cacheV.includes(cache);
                }).map(function (cache) {
                    return caches.delete(cache);
                })
            );
        })
    );
});

self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
