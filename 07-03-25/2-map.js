// Map method 

// 1.
let arr = [3, 4, 5, 6,7];
let doubled = arr.map((item) => item * 2)
console.log(doubled); 


// 2.

const users = [
  { name: "Bhagat", age: 21 },
  { name: "Rahul", age: 22 },
  { name: "Sneha", age: 20 },
];

let names = users.map((user) => user.name)
console.log(names);


// 3
const fruits = ["apple", "banana", "cherry"];

let upperCase = fruits.map((fruit) => fruit.toUpperCase())
console.log(upperCase);