/* 
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


var twoSumNaive = function(nums, target) {
  const arrLen = nums.length;
  let answer = null;
  
  nums.forEach((num, i) => {
     nums.forEach((num, j) => {
         if(i !== j && nums[i] + nums[j] === target){
           answer = [i, j]
         }
     })
  })

  return answer;
}

console.log(twoSumNaive([2,7,11,15], 9)) // [0,1]
console.log(twoSumNaive([3,2,4], 6)) // [1,2]
console.log(twoSumNaive([3,3], 6)) // [0,1]
console.log(twoSumNaive([3,3,8,7,6,4], 12)) // [2,5]

var twoSum = function(nums, target) {
  const map = {};
  let answer = [];

  nums.forEach((num, i) => {
      if(Object.hasOwn(map, target - num)){
        answer = [i, map[target - num]]
      }
      map[num] = i;
  })
  
  return answer;
}

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]
console.log(twoSum([3,3,8,7,6,4], 12)) // [2,5]