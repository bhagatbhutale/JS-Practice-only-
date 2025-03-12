
let count = 0

let counterFn = setInterval(() => {
    count++
    console.log("Counter :", count);
    
    if(count === 5) {
        clearInterval(counterFn)
    console.log("Counter is Stopped !");
        }

}, 2000)

