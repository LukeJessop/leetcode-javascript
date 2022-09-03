// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// var majorityElement = function(nums) {
//     let sortedNums = nums.sort() //i sort the array so all duplicate numbers are next to eachother
    
//     let beginning = sortedNums[0] //i set variables to be the first item, middle item, and last item
//     let middle = sortedNums[Math.floor(sortedNums.length/2)]
//     let end = sortedNums[sortedNums.length - 1]
    
    
//     if(beginning === middle){ //i check if the beginning and middle === eachother, and if i do then i log the beginning
//         return beginning
//     }else if(end === middle){
//         return end
//     }else{
//         return middle
//     }
// };

// console.log(majorityElement([1,1,1,2,2,2,2]))



//as i was getting the code above all commented and things, i realised that i can be doing this in a much simpler way. So here is that solution instead

var majorityElement = function(nums) {
        let sortedNums = nums.sort() //sorts array to get all like numbers next to eachother
        let middle = sortedNums[Math.floor(sortedNums.length/2)] //takes the middle most number (since there will always be a number that is the majority, the middle will always contain the majority number) and i used Math.floor() to get rid of any decimal points there may be when dividing an odd number
        return middle //log that number
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))