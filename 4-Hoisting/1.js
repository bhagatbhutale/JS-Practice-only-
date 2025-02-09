// Hoisting 
// --> Hoisting is a JavaScript mechanism where variables and function declarations are moved (hoisted) to the top of their scope before execution.
//--> Only the declaration is hoisted, not the initialization.
//--> var, let, const, and functions are hoisted, but they behave differently.

// 1. Var --> var is hoisted but initilized with undefined

console.log(p);  // undefined
var p = 10;
console.log(p);  // 10



// Behiend the scence (How JS see it)
var a;  // Hoisted declaration
console.log(a);  // undefined
a = 10;  // Assignment happens here
console.log(a);  // 10


// 2. Hoisted With let & const with (TDZ)
// --> Reference error cannot access "b" before initilization
// console.log(b);  // reference error
let b = 10;
console.log(b); // 10
// --> Reference error cannot access "c" before initilization
// console.log(c);  // reference eoor
const c = 20;
console.log(c);   // 20



// 3. Hoisting with function --> Function can be fully hoisted

// 3.1 Function Decleration
abc()
function abc() {
    console.log("i am hoisting function")
}


// 3.2 Function Expression

// exp()    // Type Error --> exp is not a function
var exp = function() {
    console.log("F expression is Not Hoisted")
}



// 3.3 Function Expression with let & const 
// --> Reference Error --> Cannot access before initilization
// --> greet is hoisted but stuck in the TDZ, causing a ReferenceError.


greet1()
let greet1 = function() {
    console.log("Not hoisted using let");
}
// --> Reference Error --> Cannot access before initilization
greet2()
const greet2 = function() {
    console.log("Not hoisted using const")
}

