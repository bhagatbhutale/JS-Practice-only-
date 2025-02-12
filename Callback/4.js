// Callback in setTimeout()(Asynchronous Example)


// setTimeout(callback, 2000) waits 2 seconds before running the callback.
// This simulates an asynchronous operation.
console.log("Start");
setTimeout(function() {
    console.log("Executed after 2 s");
}, 2000);

console.log("End");


