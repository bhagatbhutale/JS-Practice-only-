// 2. Closure with Private Variables

function outer() {
    let count = 0;  // declare private variable
    return function inner() {
        count++; // modify private Variable
        console.log(count)
    }
}
// --> The inner function remembers count, even after outer() has finished.
// --> Each call to increment() increases count and keeps track of its state
let increment = outer();
increment() // 1
increment() // 2
increment() // 3
