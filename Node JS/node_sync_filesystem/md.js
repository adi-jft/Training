const fs=require("fs");
const process=require("process");

fs.mkdirSync(process.argv[2]);
console.log("Directory Created!");