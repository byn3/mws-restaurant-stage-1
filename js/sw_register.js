if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("./sw.js")
	.then(function() {
		console.log("Success!!!!");
	})
	.catch(function() {
		console.log("POOP THE SW FAILED!!");
	});
