// Transforming Array 
// 1. concat() --> Merges two or more arrays.
// 2. slice()  --> Returns a shallow copy of a portion of an array.
// 3. join() --> Joins all elements of an array into a string.
// 4. toString() --> Converts an array to a string.

// 1. concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let concatArr = arr1.concat(arr2);
console.log(concatArr) // [1,2,3,4,5,6]

// 2. slice()
let sliced = concatArr.slice(2,4);
console.log(sliced) // [3,4]

// 3. join()
let joinedStr = arr1.join("+");
console.log(joinedStr); // 1+2+3

// 4. toString()
let strToArr = concatArr.toString();
console.log(strToArr); // 1,2,3,4,5,6


