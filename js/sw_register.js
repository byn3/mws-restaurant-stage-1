/* code credit to Alexandro Perez and his walkthroughh */

if (navigator.serviceWorker) {
    navigator.serviceWorker.register("../sw.js").then(function (reg) {
        console.log("SW has been registered!");
    }).catch((e) => {
        console.log("Couldn't register SW \n", e);
    });
}
