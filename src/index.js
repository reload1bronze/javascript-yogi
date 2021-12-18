console.log("Hello world!");
console.log(`__dirname: ${__dirname}`);
console.log(`process.cwd(): ${process.cwd()}`);
console.log(`__filename: ${__filename}`);

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/pictures");

fs.mkdirSync(dirPath);
