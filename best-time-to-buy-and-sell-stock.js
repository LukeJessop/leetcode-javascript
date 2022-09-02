// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


//everything commented below is my code, and the rest after that is the solution

// var maxProfit = function(prices) {
//     let min = {
//         num: Math.max(...prices),
//         index: 0
//     }   
//     let max = {
//         num: 0,
//         index: 1
//     }
//     for(let i = 1; i < prices.length; i++){
//         if(max.num < prices[i]){
//             max.num = prices[i]
//             if(max.index < i){
//                 max.index = i
//             }
//         }
        
//         if(min.num > prices[i - 1]){
//             min.num = prices[i-1]
//             if(min.index < i){
//                 min.index = i - 1
//             }
//         }
//     console.log(min, max)
//     }
//     if(min.index > max.index || min.num > max.num){
//         return 0
//     }else if(min.index < max.index || min.num <= max.num){
//         return max.num - min.num 
//     }
    
// };



var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER;  //not too sure why they did this, i looked up what MAX_SAFE_NUMBER was and its a very large number, maybe its to just make sure there are no numbers bigger than "min" before reading the array. I did something similar, using Math.min()
    var max = 0;
    for (var i = 0; i < prices.length; i++) {//he iterates through the array, and every time he checks the current number with the min value and assigns min the smaller value, doing the same thing with max but just subtracting min from it and returning max
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};