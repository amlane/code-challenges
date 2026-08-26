/* 
Find the smallest missing multiple from a list of integers with a target of k. 

Where a multiple is divisible by k. 
*/

var smallestMissingMultipleOfK = function(nums, k){
    let num = k;
    
    while(true){
        if(nums.indexOf(num) < 0) return num;
        num += k;
    }
};

console.log(smallestMissingMultipleOfK([8,2,3,4,6], 2)) // 10
console.log(smallestMissingMultipleOfK([1,4,7,10,15], 5)) // 5
console.log(smallestMissingMultipleOfK([8,12,3,4,6], 2)) // 2