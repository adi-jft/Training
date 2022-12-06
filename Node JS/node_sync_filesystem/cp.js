const fs=require("fs");
const process=require("process");

let cpf=process.argv[3];
fs.copyFileSync(process.argv[2], process.argv[3]);
console.log("File Copied!");

let data=fs.readFileSync(cpf, {encoding: "utf-8", flag: "r"});
console.log(data);
