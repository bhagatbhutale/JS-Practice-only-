// Q.3 Find common Elements from two Array



// var findIntersectionValues = function (nums1, nums2) {
//   let result1 = nums1.filter((element) => nums2.includes(element));


//   console.log(result1)
// };


// let arr1 = [2,3,2];
// let arr2 = [1,2];

// const result = findIntersectionValues(arr1, arr1);
// console.log(result);

function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(element => set2.has(element));
}

// Example Usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
