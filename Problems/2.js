// Q 2 : given two array find differents elements in both ?

let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];
// Using Higher order funciton
const diffEleArray = arr1.filter((item) => !arr2.includes(item))
console.log(diffEleArray)  //[ 1, 2 ]


// using for Loop
let Result = []
for(i = 0; i<arr1.length; i++) {
    if(!arr2.includes(arr1[i])) {
        Result.push(arr1[i])
    }
}
console.log(Result)