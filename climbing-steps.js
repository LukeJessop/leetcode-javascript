//I was trying to use if statements to figure this out, but I was stumped. so i looked at the solutions page and there
//was a solution that used a single for loop vv

//the comments is my best explanation on what is going on in this code

var climbStairs = function(n, arr = [0,1,2]) {// he creates an array that has how many steps you can take up the stairs
    for(let i = 3; i <= n; i++){ //in this loop he is making i = 3 to start because thats how many items he has in "arr"
        arr[i] = arr[i-1] + arr[i-2]   //every time this loop iterates, it takes the sum of arr[i-1] + arr[i-2] and applies it to arr[i] until arr[n] exists
    }
    return arr[n]
};

console.log(climbStairs(10))