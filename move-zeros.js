// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



var moveZeroes = function(nums) {
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === 0){
            let index = nums.indexOf(0)
            nums.splice(index, 1)
            nums.push(0)
            
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,2,3,4,1]))
console.log(moveZeroes([0,0,1]))
console.log(moveZeroes([0,1,0,2,9,0,7]))