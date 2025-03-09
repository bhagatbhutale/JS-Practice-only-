// Using Set Interval 
let count = 0;
const intervalCount = setInterval(() => {
    console.log("Interval execution ", count)
    count++
    if(count >= 5) {
        clearInterval (intervalCount)
    }
},1000)