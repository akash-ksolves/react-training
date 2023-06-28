// for REST API
const restBtn = document.getElementById("rest-btn");

restBtn.addEventListener("click", fetchRESTAndSetData);

function fetchRESTAndSetData() {
	fetch("http://demo6876280.mockable.io/rest-data")
		.then((res) => res.json())
		.then((data) => {
			const dataContainer = document.getElementById("dataContainer");
			addData(dataContainer, data);
		})
		.catch((err) => console.error(err));
}

function addData(listElm, data) {
	data.forEach(({ message }) => {
		const listItem = document.createElement("li");
		listItem.textContent = message;
		listItem.classList.add("list-group-item");
		listElm.appendChild(listItem);
	});
}

// for SOAP API
const soapBtn = document.getElementById("soap-btn");

soapBtn.addEventListener("click", fetchSOAPAndSetData);

async function fetchSOAPAndSetData() {
	// TO DO for soap api call

	// const soapEnvelope = `<?xml version="1.0" encoding="utf-8"?>
	// <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
	//   <soap:Body>
	//     <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
	//       <ubiNum>500</ubiNum>
	//     </NumberToWords>
	//   </soap:Body>
	// </soap:Envelope>`;

	// fetch("https://www.dataaccess.com/webservicesserver/NumberConversion.wso", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/soap+xml",
	// 		"Content-Length": soapEnvelope.length.toString(),
	// 		"Content-Type": "text/xml; charset=utf-8",
	// 	},
	// 	body: soapEnvelope,
	// })
	// 	.then((res) => res.json())
	// 	.then((data) => console.log(data))
	// 	.catch((err) => console.error(err));

	const dataContainer = document.getElementById("dataSOAPContainer");

	const listItem = document.createElement("li");
	listItem.textContent = "SOAP API data";
	listItem.classList.add("list-group-item");
	dataContainer.appendChild(listItem);
}
