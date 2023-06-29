// async await

function fetchData() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			const data = "data from api or server";
			resolve(data);
		}, 5000);
	});
}

async function processData() {
	try {
		const data = await fetchData();
		console.log("Data recieved: ", data);
	} catch (error) {
		console.error("Error: ", error);
	}
}

processData();
console.log("Fetching data....");
