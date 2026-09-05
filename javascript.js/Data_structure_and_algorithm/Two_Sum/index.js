//You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

nums = [2,4,6,7,8,9,10];
target = 10;
function twoSum(nums,target){

   for(let i = 0; i < nums.length; i++){
    let complement = target - nums[i]//2;
    
    if (nums.includes(complement)) {
    let j = nums.indexOf(complement);
    
    if (j !== i){
        return [i,j]
    }
    
    }
   }
}
console.log(twoSum([2, 4, 6, 7, 8, 9, 10], 10));