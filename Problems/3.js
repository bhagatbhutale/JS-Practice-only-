// Q 3 : Find Frequency of each element 

let arr = ["apple", "banana", "chery", "abc", "ab", "banana", "apple", "apple"];

let frequencyOfaARR = arr.reduce((acc, curr) => {
    if(acc[curr]) {
        acc[curr]++
    }
    else {
        acc[curr] = 1;
    }
    return acc;
}, {})
console.log(frequencyOfaARR)

// using simple method

let frequencyNewArray = {}

for(i = 0; i<arr.length; i++) {
    if(frequencyNewArray[arr[i]]){
        frequencyNewArray[arr[i]]++
    }
    else {
        frequencyNewArray[arr[i]] = 1
    }
}
console.log(frequencyNewArray)