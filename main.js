const fs = require("fs");
const buff = Buffer.alloc(1024);

// using open and read funcs
console.log("Opening a new file..!!");
fs.open("./files/main.txt", "r+", (err, data) => {
	if (err) return console.error(err);
	console.log("File opened succesfully..!");

	fs.read(data, buff, 0, buff.length, 0, (err, bytes) => {
		if (err) console.error(err);
		console.log(`${bytes} Bytes read`);

		if (bytes > 0) console.log(buff.slice(0, bytes).toString());
	});
});
