// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// @param {string} s
// @return {boolean}
 
var isValid = function(s) {
    let halfStrArr = s.split('', s.length/2)//take half of the string and turn it into an array
    let strArr = s.split('')
    let otherHalf = []
    let parenth = '()'
    let brack = '[]'
    let curl = '{}'



    for(let i = 0; i < halfStrArr.length; i++){ //push the items to the empty array
        otherHalf.push(halfStrArr[i])
    }

    otherHalf.reverse()//reverse new array

    for(let i = 0; i < otherHalf.length; i++){//change the opening brackets to closing brackets
        if(otherHalf[i] === '('){
            otherHalf[i] = ')'
        }else if(otherHalf[i] === '{'){
            otherHalf[i] = '}'
        }else if(otherHalf[i] === '['){
            otherHalf[i] = ']'
        }
    }

    halfStrArr.push(otherHalf.join('')) //add the reversed array to the original array and turn it back into a string
    let final = halfStrArr.join('')
    if(final === s){ //check if the string matches the string passed to it
        return true
    }if(s === parenth || s === brack || s === curl || s === parenth + brack + curl){
        return true
    }else if (strArr.length % 2 !== 0){
        return false
    }else{
        return false
    }
}
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("{()}"))
console.log(isValid("({)}"))