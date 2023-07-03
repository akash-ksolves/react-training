// 2) Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// Input (Array):
// var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// Output:
// var object = {
// make : 'Ford'
// model : 'Mustang',
// year : 1964
// }

var array = [
	["make", "Ford"],
	["model", "Mustang"],
	["year", 1964],
];

function fromListToObject(arr) {
	var obj = {};

	arr.forEach(function (data) {
		obj[data[0]] = data[1];
	});

	return obj;
}

console.log(fromListToObject(array));

// Output:-
// { make: 'Ford', model: 'Mustang', year: 1964 }
