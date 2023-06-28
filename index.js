const fs = require("fs");

// create a file //
const data = "sample text data that inserts into file";

//asynchronous
fs.writeFile("./files/file.txt", data, "utf-8", (err) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log("File has been writeen successfully..!");
});

//Synchronous
fs.writeFileSync("./files/asyncFile.txt", data); // this will create first because of async behavior

// read file //

//asynchronouss
fs.readFile(
	"./files/file.txt",
	{
		encoding: "utf-8",
	},
	(err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("Data from file is:");
		console.log("1st", data);
	}
);

//Synchronous
const fileData = fs.readFileSync("./files/asyncFile.txt", {
	encoding: "utf-8",
}); // this will read first because of async behavior

console.log("data from second file:");
console.log("2nd", fileData);

// create or update file

//asynchronous
fs.appendFile(
	"./files/appendFile.txt",
	"This text is for appendfile",
	(err) => {
		if (err) console.error(err);
		console.log("Updated or created..!");
	}
);

// rename a file

//asynchronous
fs.rename("./files/asyncFile.txt", "secondFile.txt", (err) => {
	if (err) console.error(err);
	console.log("File renamed..!!");
	// in this file is renamed and also moves it to new path if path is diffent
});

//Synchronous
fs.renameSync("./files/appendFile.txt", "./files/secondFile.txt");

// delete a file

//asynchronous
fs.unlink("./files/file.txt", (err) => {
	if (err) console.error(err);
	console.log("File is deleted..!!");
});

//Synchronous
fs.unlinkSync("./files/secondFile.txt");
