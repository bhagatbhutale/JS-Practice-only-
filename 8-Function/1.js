//👉 Function --> 
//--> Piece of Code
//-> reused
//--> return something (Nature)

// Syntax:- function nameF() {}

// function greet() {
// console.log("i am greet function")
// }
// greet()

// ------------------------------------------------------


// 2.
//--> if you dont return anything form the functon by default "undefined" is return 

function example1(a, b) {  // parameter
    let c = a + b;
    // undefined :- not returning anything
    // return c  // 30
    return c
}
let returnValue = example1(3,5); // argument
let returnValue2 = example1(5);  // undefine b Output is NaN (Not a Number)
console.log(returnValue)
console.log(returnValue2)


