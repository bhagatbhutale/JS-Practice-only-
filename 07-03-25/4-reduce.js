// Reduce method 

// 1
let arr = [1,2, 3, 4];

let sumArr = arr.reduce((acc, curr) => {
    acc = acc * curr;
    return acc;
}, 1)
console.log(sumArr);
