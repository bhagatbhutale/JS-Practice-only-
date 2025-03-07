// Binary Search :-

let arr = [-5, -4, 0, 3, 6, 9, 10, 11, 16];
let target = 11;

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length-1;
  

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if(arr[mid] === target) {
            return mid;
        }
        if(arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid -1;
        }
    }

    return -1;
}

const result = binarySearch(arr, target);
(result == -1) ? console.log("Element is Not Present in Array") : console.log("Element is Present at Index :", result)