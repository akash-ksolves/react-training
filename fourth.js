// 4) Write a function called 'convertObjectToList' which converts an object literal into an array of arrays.
// Input (Object):
// var object = {name: 'ISRO', age: 35, role: 'Scientist'};
// Output:
// [['name', 'ISRO'], ['age', 35], ['role', 'Scientist']]

var object = { name: "ISRO", age: 35, role: "Scientist" };

function convertObjectToList(obj) {
	return Object.keys(obj).map((key) => [key, obj[key]]);
}

console.log(convertObjectToList(object));

// Output:-
// [ [ 'name', 'ISRO' ], [ 'age', 35 ], [ 'role', 'Scientist' ] ]
