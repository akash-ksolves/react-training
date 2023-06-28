const { capitalize } = require(".");

function displayName(name) {
	return "Hello " + capitalize(name) + ", How are you?";
}

module.exports = { displayName };
