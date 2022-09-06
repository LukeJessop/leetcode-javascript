//return the value of the roman numerals in integer format

var romanToInt = function(s) {
    let numerals ={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sArr = s.split('')
    for(let i = 0; i < sArr.length; i++){ //change roman numerals into actual numbers
        for(const property in numerals){
            if(sArr[i] === property){
                sArr[i] = numerals[property]
            }
        }
        finalNum = sArr[0]
    }
    let value = 0;
    for(let i = 0; i < sArr.length; i+=1){
        if(sArr[i] < sArr[i + 1]){
            value -= sArr[i]
        }else{
            value += sArr[i]
        }
    }
    return value
};


console.log(romanToInt('XCII'))
console.log(romanToInt('II'))
console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('MMXCV'))