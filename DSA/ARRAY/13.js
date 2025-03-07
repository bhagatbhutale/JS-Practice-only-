// Shuffle the Array ?

function shuffle(arr, n) {
    
    let arrResult = new Array();

    for(let i = 0; i< n; i++) {
        arrResult.push(arr[i], arr[i+n])
    }
    return arrResult
}

console.log(shuffle([2, 5, 1,3, 4, 7], 3));