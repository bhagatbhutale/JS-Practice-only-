// Arrow Function -->
// --> The arrow function is one of the features introduced in the ES6 version of JS. It allows you to create function in a clear way compared to regular functions. Here are some of the valid syntax for arrow function.
//--> Fetching data from the server
//--> Reading a file
//--> Timers
//--> parameter :- count

const greet = (count) => {
    for(let i = 0; i < count; i++) {
         console.log("this is a Arrow Function");
    }
}
greet(4)

// direct expression 
// only one expression
const square = (num) => num * num;
console.log(square(25))

const square1 = (num1) => {
    return num1 * num1
}

// Normal function 
function greet1() {
    console.log("Normal Function...")
}