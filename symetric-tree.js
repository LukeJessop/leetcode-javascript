// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

//this is all my code. I feel like this makes a lot more sense after going over it with Harry. BTrees are kinda fun to work with an problem solve
var isSymmetric = function(root) {
    let left = []
    let right = []
    
    function traverseLeft(cur){
        if(cur){
            traverseLeft(cur.left)
            left.push(cur.val)
            traverseLeft(cur.right)
            if(cur.left === null && cur.right){
                left.push(null)
            }
        }
    }
    function traverseRight(cur){
        if(cur){
            traverseRight(cur.right)
            right.push(cur.val)
            traverseRight(cur.left)
            if(cur.right === null && cur.left){
                right.push(null)
            }
        }
    }
    traverseLeft(root)
    traverseRight(root)
    if(left.length === right.length){
        for(let i = 0; i < left.length; i++){
            if(left[i] !== right[i]){
                return false
            }
        }
        return true
    }else{
        return false
    }
};




console.log(isSymmetric([1,2,2,3,4,4,3]))
console.log(isSymmetric([1,2,2,null,3,null,3]))
