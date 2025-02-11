// Constructor --> Class --> Prototype

// 1. Constructor
// --> normal function "new" keyword --> create Object

// --> this keyword points to newly created Object
function Sam(name, age, surname) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    // method
    this.greet = function() {
        console.log(`Hi Good Morning from ${this.name}`)
    }
    Sam.prototype.greet2 = function() {
        console.log("this greet2 function inside a Prototype")
    } 
}
let g1 = new Sam("Bhagat", "Bhutale", 0);
let g2 = new Sam("Ajay", "Bhutale", 18);
// output : sam { name: 'Bhagat', surname: 0, age: 'Bhutale' }
console.log(g1);
g1.greet()

console.log(g2);

