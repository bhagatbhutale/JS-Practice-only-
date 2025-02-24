// Count Numbers Pairs With Absolute Difference 

var countDifference = function(num, k) {
    let result = 0;

    for (let i = 0; i<=num.length; i++) {

        for(let j = 0; j <=num.length; j++) {
            if(num[i] - num[j] == k) {
                result++
            }
        }
    }

    return result
}

console.log(countDifference([1,2,2,1], 1));
console.log(countDifference([1,3], 3));
console.log(countDifference([3, 2, 1, 5, 4], 2));
