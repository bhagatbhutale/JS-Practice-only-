// Checking Array 
// every()
// some()
// Array.isArray()


// every() --> Checks if all elements satisfy a condition
let arr = [1,2,3,4];

let satisfyAll = arr.every((item) => item < 4)
console.log(satisfyAll)  // false

// some() --> Checks if at least one element satisfies a condition.

let checkOne = arr.some((item) => item > 3)
console.log(checkOne)  // true

// Array.isArray() --> Checks if a value is an array

let arrCheck = Array.isArray(arr);
console.log(arrCheck)  // true



