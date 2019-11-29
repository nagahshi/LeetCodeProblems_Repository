/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
           count++;

        }

        else{
            let inte=nums[i]
           for(let j=i;j>i-count;j--){
               nums[j]=nums[j-1];
           }
            nums[i-count]=inte;
        }
    }
};