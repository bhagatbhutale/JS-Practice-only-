// 👉 Adding / Removing Elements :
// push() --> Adds one or more elements to the end of an array.
// pop() --> Removes the last element from an array.
// shift() --> : Removes the first element from an array
// unShift() --> Adds one or more elements to the beginning of an array.
// splice() --> Adds/removes elements from a specific index.

let arr = [1,2,3];
arr.push(5,6,7)
console.log(arr); // output : 1 2 3 5 6 7

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(1,0,1)
console.log(arr);

arr.splice(2,3,4,4,4)
console.log(arr)
