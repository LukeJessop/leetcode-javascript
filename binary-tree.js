var inorderTraversal = function (root) {
    let arr = [];
    function traverse(cur) {
        if (cur) {
            traverse(cur.left);// traverse(cur.left) creates a new instance of the "traverse()" function in the stack and runs this same function again on the left node and keeps doing that until left node is null            
            arr.push(cur.val);//javascript then executes the stack of functions from top to bottom
            traverse(cur.right);
        }
    }
    traverse(root);
    return arr;
};


console.log([1,2,3,4,5,6,7])