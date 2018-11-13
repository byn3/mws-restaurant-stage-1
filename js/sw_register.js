/* code credit to Alexandro Perez and his walkthroughh */

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('SW registration worked!');
	})
	.catch(function() {
		console.log('SW registration failed!');
	});
}
