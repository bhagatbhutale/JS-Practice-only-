// Count Numbers of Pairs with absolute difference in JS ?

function countDiff(nums, k) {
    let countResult = 0;
    for(let i = 0; i<= nums.length; i++) {
        for(let j = 0; j <= nums.length; j++) {
            if(nums[i] - nums[j] == k) {
                countResult++
            }
        }
    }
    return countResult
}
let nums = [1,  2, 2, 1];
let k = 1;

const result = countDiff(nums, k);
console.log(result);