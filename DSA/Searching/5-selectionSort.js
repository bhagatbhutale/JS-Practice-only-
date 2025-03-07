// Selection Sort --> O(n^2)

let arr = [78, 64, 35, 38, 40];
let n = arr.length;
let temp;

function selectionSort(arr, n) {
    for(let i = 0; i< n; i++) {
        
        let min_index = i;

        for(let j = i +1; j<n; j++) {

            if(arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = arr[min_index];

    }
}

const result = selectionSort(arr, n);
console.log(result)