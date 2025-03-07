// Kids with Greatest Number of Candies ?

function kidsWithCandies(candies, extraCandies) {
    let maximum = Math.max(...candies);
    let result = []

    for(let i = 0; i< candies.length; i++) {
        let mixUpCandi = candies[i] + extraCandies
        if(mixUpCandi >= maximum) {
            result[i] = true;
        }
        else {
            result[i] = false;
        } 
    }
    return result
}


let arr = [2, 3, 5, 1, 3];
let extraCandi = 3;

const result = kidsWithCandies(arr, extraCandi);
console.log(result)