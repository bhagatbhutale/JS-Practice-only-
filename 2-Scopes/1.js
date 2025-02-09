// Scopes in js :- 
// it is a Accessibility of Variables 

// Global Scope
// Function Scope
// Block Scope
// Lexical Scope


// Global scope 
// --> variables Declerad outside of any function or Block are in a Global scope
// --> they can be accessed anywhere
// ---> Global variables can be modified anywhere which can lead to unexpected bug


var a = "I am a Global";  // Global Scope

function showGlobal() {
    console.log(a);  // Accessible inside
}

showGlobal()
console.log(a);  // Accessible Outside



// Function Scope 
// --> Variables Declared inside a function can not be acced the outside the function
// --> var , let , const is a funcitonn scoped when declared inside a funciton

function showFunction() {
    var b = "i am a function scope"
    console.log(b);
}

showFunction()
// ReferenceError : b is not defined
// console.log(b);
// -----------------------------------------------
// ----------------------------



// Block Scope :
// --> with (let & const) inside { block }

if(true) {
    let c = "i am a block";
    console.log(c);
}

// ReferenceError : c is ot defined
// console.log(c);


// Example with var
if(true){
    var d  = "using var block";
    console.log(d);
}

console.log(d);  // accessible only var

// ----------------------------------------
// ----------------------------------------




// Lexical Scope (Closure scope)
// --> inner function can access the varibles of the outer function 
// -- this is known as lexical scoping 


function outerFunction() {
    let outervalue = "i am Lexical"
    // accessible 

    function innerFunction() {
        console.log(outervalue);
    }

    innerFunction()
}
outerFunction();
