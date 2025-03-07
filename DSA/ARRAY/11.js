// Find common element in Between Two Arrays ?

function findCommoninBoth(num1, num2) {

    let set1 = new Set(num1);
    let set2 = new Set(num2);

    let find1 = 0
    let find2 = 0

    for( let num of set1) {
        if(set2.has(num)) {
            find1++
        }
    }
    
    for(let num of set2) {
        if(set1.has(num)) {
            find2++
        }
    }
    return [find1, find2]
}

let arr1 = [8, 2, 4, 2, 11];
let arr2 = [2, 11, 4, 11, 3];

const result = findCommoninBoth(arr1, arr2);
console.log(result);