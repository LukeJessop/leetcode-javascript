//Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


//everthing commented below this line is my code, the actual answer is after the commented code ---

// var maxDepth = function(root) {
//     var depthArr = []
//     var counterL = 0
//     var counterR = 0
//     var traverseLeft = function(cur){
//         if(cur){
//             counterL++
//             traverseLeft(cur.left)
//             if(!cur.left){
//                 depthArr.push(counterL)
//                 counterL = 0
//             }
//         }
        
//     }
//     var traverseRight = function(cur){
//         if(cur){
//             counterR++
//             traverseRight(cur.right)
//             if(!cur.left){
//                 depthArr.push(counterR)
//                 counterR = 0
//             }
//         }
        
//     }
    
//     traverseLeft(root)
//     traverseRight(root)
//     console.log(depthArr)
//     for(let i = 0; i < depthArr.length; i++){
//         if(depthArr.length < 1){
//             return depthArr[0]
//         }else if(depthArr[0] >= depthArr[1]){
//             return depthArr[0]
//         }else{
//             return depthArr[1]
//         }
//     }
//     return 0
// };



var maxDepth = function(root) {
    if(root === undefined || root===null){ //checks if the root exists and if it doesnt, it returns 0
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;//using a method on the Math class he takes the maxDepth of left and right, adds 1 to it, and returns that value. I didnt know these functions existed so that can be a mental note to myself to utilize google a little more when im stuck on a problem
};
