// Code inspired by matthew cranford's walk through and Alexandro Perez
// could have just used the dafault i guess
let staticCache = 'restaurant-static-v1';

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCache).then(function(cache) {
			return cache.addAll([
				'./',
				'./index.html',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/sw_register.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg'
			]);
		})
	);
});

/*Getter */
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('restaurant-') &&
						   cacheName != staticCache;
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
})

/* Fetches the cache from the SW */
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			return response || fetch(event.request);
		})
	);
});
