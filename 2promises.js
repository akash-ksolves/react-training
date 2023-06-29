// promises
function fetchData() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			const data = "data from api or server"; // data from external source
			resolve(data);
		}, 5000);
	});
}

fetchData()
	.then(function (data) {
		console.log("Data recieved: ", data);
	})
	.catch(function (err) {
		console.error("Error: ", err);
	});

console.log("Fetching data....");
