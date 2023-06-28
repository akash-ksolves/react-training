// function that return power
function getPower(num) {
	return 10 ** num;
}

// function to capital first letter of string
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

// function that rounds the value
function roundToDecimal(number, decimal = 2) {
	// here decimal 2 is default
	return Math.round(number * getPower(decimal)) / getPower(decimal);
}
module.exports = { capitalize, roundToDecimal }; // exports the function so we can use it elsewere
