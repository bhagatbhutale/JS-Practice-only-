// Kida with Greatest Number Candier

var kidsWithCandies = function(candies, extraCandies) {
    let maxNum = Math.max(...candies)
    let result = []

    for (let i = 0; i < candies.length; i++) {

        candiesAndExtraCandies = candies[i] + extraCandies

        if(candiesAndExtraCandies >= maxNum) {
            result[i] =  true
        }
        else {
            result[i] = false
        }
        
    }
    return result
};


let candi = [2,3,5,1,3]
let extraCandies = 3;

let result  = kidsWithCandies(candi, extraCandies)
console.log(result)