// 👉 Compositions in js 

function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val
}

// function composeToFnc( fn1, fn2 ) {
//     return function(a, b) {
//         return fn2(fn1(a, b));
//     }
// }

// const task = composeToFnc(add, square);

const cf2 = (fn1, fn2) => (a , b) => fn2(fn1( a, b));

const task = cf2(add, square);

console.log(task(3,5))

// const addResult = add(3,5);
// console.log(square(addResult));  // 64


