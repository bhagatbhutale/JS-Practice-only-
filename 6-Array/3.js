// 👉 Searching and Finding Element 

// 1. find() --> Returns the first element that satisfies a condition.
let arr = [1,2,3,4,5, 2, 3];
let find = arr.find(num => num > 2);
console.log(find);

// 2. findIndex() --> Returns the index of the first element that satisfies a condition.
let findIndexFirst = arr.findIndex((num) => num > 2);
console.log(findIndexFirst)

// 3. indexOf()  --> Returns the first index of a given element.
index = arr.indexOf(3);
console.log(index)   // output : 2

// 4. lastIndexOf() --> Return the last index to given element

let lastIndex = arr.lastIndexOf(3);
console.log(lastIndex); // 6

// 5. includes() --> Checks if an array contains a specific element.
let containsElement = arr.includes(5)
console.log(containsElement);  // true



// 👉 Sorting and Reversing

// sort()
let arr2 = [3,1,2];
 arr2.sort()
console.log(arr2);

// reverse()
arr2.reverse();
console.log(arr2)








