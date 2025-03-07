// Number of Good Pairs ?

function goodPairs(arr) {
    
    let count = 0;
    for(let i = 0; i< arr.length; i++) {
        for(let j = 1; j< arr.length; j++) {
            if(arr[j] > arr[j+1] && arr[i] < arr[j]) {
                count++
            }
        }
    }
    return count
}

console.log(goodPairs([1, 2, 3, 1, 1, 3]))