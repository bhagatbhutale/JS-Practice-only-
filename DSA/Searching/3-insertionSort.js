// Sorting algorithm 

// Insertion Sort --> O(n^2)
// sorted :- O(n)

const arr = [19, 2, 3, 17, 23, 10];
console.log(arr);
let n = arr.length;

function insertionSort(arr, n) {
    let key, j;

    for(let i = 1; i< n; i++) {
        key = arr[i];
        j = i -1;

        while( j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = key;
    }

    return arr;
}

const result = insertionSort(arr, n);
console.log("sorted array is :", result)

