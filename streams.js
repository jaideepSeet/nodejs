const fs = require("fs");

const readableStream = fs.createReadStream("Hugefile.text", "utf-8");
const writableStream = fs.createWriteStream("Hugefile_copy.text");

readableStream.on("data", (buffer) => {
    writableStream.write(buffer);
});
readableStream.on("end", () => {
    writableStream.end();
});
writeableStream.on("error", (err) => {
    console.log(err.message);
});