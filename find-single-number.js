// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


var singleNumber = function(nums) {
    if(nums.length < 1){
        return nums[0]
    }
    let sortedArr = nums.sort()
    let counter = 1
    let currentNum
    let repeatNum
    let lastNum
    console.log(sortedArr)
    for(let i = 0; i < sortedArr.length; i++){
        currentNum = sortedArr[i]
        if(i > 0){ 
            counter++ 
            lastNum = sortedArr[i - 1]
            if(currentNum === lastNum){
                repeatNum = currentNum
            }
            if(currentNum !== lastNum){
                if(counter <= 1){
                    counter = 0
                    console.log(lastNum, ' ln 28')
                    return lastNum
                }
                counter = 0
                if(lastNum === repeatNum){
                    let nextNum = sortedArr[i + 1]
                    if(nextNum !== currentNum){
                        if(nextNum === undefined){
                            console.log('ln 36')
                            return currentNum
                        }else{
                            console.log('ln 39')
                            if(sortedArr[i + 2] === nextNum){
                                return currentNum
                            }
                            return nextNum
                        }
                    }
                }else if(lastNum !== repeatNum){
                    console.log(lastNum, ' ln 39')
                    return lastNum
                }
            }
        }else if (sortedArr.length === 1){
            return sortedArr[0]
        }
    }

};

console.log(singleNumber([1,2,2,3,3]))
console.log(singleNumber([4,5,4,5,6]))
console.log(singleNumber([-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,354]))