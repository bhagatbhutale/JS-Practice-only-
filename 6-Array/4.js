// 👉 Iterating Over Arrays

// forEach() --> Executes a function for each element in the array.
// map()    --> Creates a new array by applying a function to each element. (item)
// filter() --> Creates a new array with elements that pass a test.         (item)
// reduce() --> Reduces the array to a single value by applying a function. (acc, curr)
// reduceRight() --> similar to reduce but process is right to left

let arr = [1,2,3,4,5];
console.log(arr);

arr.forEach((item) => console.log(item));
console.log(arr);  // 1,2,3,4,5


let dblArr = arr.map((num) => num * 2);
console.log(dblArr) // [2 4 6 8 10]

let filterArr = dblArr.filter((num) => num < 5)
console.log(filterArr)  // [2 4]

let reduceElement = filterArr.reduce((acc, curr) => acc + curr, 0)
console.log(reduceElement);  // 6






