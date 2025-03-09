// Filter method 

// 1

const numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter((num) => num % 2 === 0);
console.log(even);


// 2
const users = [
  { name: "Bhagat", age: 21 },
  { name: "Rahul", age: 17 },
  { name: "Sneha", age: 25 },
];

let filter = users.filter((user) => user.age >= 18) 
console.log(filter);


// 3
const words = ["apple", "banana", "cherry", "kiwi", "grape"];
let filterWord = words.filter((word) => word.length > 5)
console.log(filterWord);


