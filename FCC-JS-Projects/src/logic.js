const palindromeChecker = (str) => {
    const regEx = /[a-z]/ig;
    const orgStr = str.toLowerCase().match(regEx).join("");
    const newStr = str.toLowerCase().match(regEx).reverse().join("");
    return newStr === orgStr
};

const convertToRoman = (num) => {
    const convertionTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1, 
    }
    let transformed = "";
      //We iterate through all the values in our table starting from the biggest
    for(let value in convertionTable) {
        //We check if the num is lower than the current value, if so, loop until the result of the / is different from 0
        // When the result is different from 0, we repeat the property * result and add it to transformed
        transformed += value.repeat(Math.floor(num / convertionTable[value]));
        //Once we've added values to transformed, we make the number smaller
        num %= convertionTable[value]
    }
    return transformed;
};

export {palindromeChecker, convertToRoman}