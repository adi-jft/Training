const fs=require("fs");
const process=require("process");

let data=fs.readFileSync(process.argv[2], {encoding: "utf-8", flag: "r"});
console.log(data);    