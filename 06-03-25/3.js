// 👉  Using Promises Handling Asycchronous tasks :-

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise Resolved")
    }, 3000);
})

console.log("before Promise ");

myPromise.then((message) => {
    console.log(message)
})

console.log("after promise ");