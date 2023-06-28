// imported modules from other files
const { roundToDecimal } = require("./modules");
const { displayName } = require("./modules/display");

// to capital first letter

console.log(displayName("akash")); // Hello Akash, How are you?

// to round to decimal

console.log(roundToDecimal(12.2559, 2)); //12.26
console.log(roundToDecimal(12.2559, 3)); //12.256
console.log(roundToDecimal(19.849)); //19.85
console.log(roundToDecimal(19.84)); //19.84
