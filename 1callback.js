// callbacks
function fetchData(callback) {
	setTimeout(function () {
		const data = "data from api or server"; // data from external source
		callback(data);
	}, 5000);
}

function processData(data) {
	console.log("Data recieved: ", data);
}

fetchData(processData);

console.log("Fetching data....");
