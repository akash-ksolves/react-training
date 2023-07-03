// 3)
// Write a function called 'transformGeekData' that transforms some set of data from one format to another.

// Input (Array):
// var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
// Output:
// [
// {firstName: 'Vasanth', lastName: 'Raja', age: 24, role: 'JSWizard'},
// {firstName: 'Sri', lastName: 'Devi', age: 28, role: 'Coder'}
// ]

var array = [
	[
		["firstName", "Vasanth"],
		["lastName", "Raja"],
		["age", 24],
		["role", "JSWizard"],
	],
	[
		["firstName", "Sri"],
		["lastName", "Devi"],
		["age", 28],
		["role", "Coder"],
	],
];

function transformGeekData(array) {
	return array.map(fromListToObject);
}

function fromListToObject(arr) {
	var obj = {};

	arr.forEach(function (data) {
		obj[data[0]] = data[1];
	});

	return obj;
}

console.log(transformGeekData(array));

// Output: -

// [
//     { firstName: 'Vasanth', lastName: 'Raja', age: 24, role: 'JSWizard' },
//     { firstName: 'Sri', lastName: 'Devi', age: 28, role: 'Coder' }
//   ]
