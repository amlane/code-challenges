/* 
Find the smallest missing multiple from a list of integers with a target of k. 

Where a multiple is divisible by k. 

With the set constraints of 100 max input for nums, hashtable is likely an overkill approach but still good practice for alternative approach.
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


var smallestMissingMultipleOfKSet = function(nums, k){
    let numsSet = new Set(nums);
    let num = k;
    
    while(true){
        if(!numsSet.has(num)) return num; 
        num += k;
    }
};

console.log(smallestMissingMultipleOfKSet([8,2,3,4,6], 2)) // 10
console.log(smallestMissingMultipleOfKSet([1,4,7,10,15], 5)) // 5
console.log(smallestMissingMultipleOfKSet([8,12,3,4,6], 2)) // 2