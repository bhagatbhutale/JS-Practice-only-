// 1. Closures in Loops using ( let )

// Ex. 1
// --> let creates a new block-scoped variable for each iteration, so each function remembers the correct value of i.
for(let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)   // output 1,2,3,4,5
}


// 2. Closures in Loops (Using var - Fix with IIFE)

for (var i = 0; i<= 5; i++) {
    setTimeout(() => {
        console.log(i)
    },1000) 
}
// output : 6 6 6 6 6 6 


// 3 Fix using an IIFE (Immediately Invoked Function Expression):
// --> The IIFE (function(x) { ... })(i) creates a new scope where x stores the correct value of i.
for(var i = 0; i<=5; i++) {
    (function(x) {
        setTimeout(function() {
            console.log(x);
        },1000)
    })(i)    // output 1 2 3 4 5
}

