// Indirect calling :
// call(), apply(), bind()
// Indirect calling in JavaScript refers to invoking a function in a way that is different from a direct function call. This is usually done using methods like .call(), .apply(), or .bind(), or by referencing a function through an intermediary (like assigning it to a variable or passing it as an argument)

// 1. The call() method invokes a function with a specified this value and arguments passed individually.
// ex 
function greet() {
    console.log(`Hello, ${this.name}`)
}
const person = { name : "Bhagat"};
greet.call(person);

//2. The apply() method works like call(), but it takes an array of arguments instead of individual arguments.
function introduce(age, city) {
    console.log(`Hi, I am ${this.name}. i am ${age} years old from ${city}`);
}

const user = { name : "Ajay"}

introduce.apply(user, [18, "raigad"])


// 3. The bind() method creates a new function that, when called, has its this value set to the provided object.

function sayHello() {
    console.log(`Hi ${this.name}`);
    
}
const person1 = {name : "Bhagat"};
const boundFunction = sayHello.bind(person1)
boundFunction()
