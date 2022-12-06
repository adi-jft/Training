// const prompt = require("prompt-sync")({sigint: true});
// const fs = require("fs");
// const process = require("process");

// let fname = process.argv[2];
// fs.writeFileSync(fname, "")
// console.log("File Created!");

// let txt = prompt();
// fs.appendFileSync(fname, txt);
// console.log("Data Saved!");

// process.on('SIGINT', function() {

// });

// const path=require("path");
const readline = require("readline");
const fs = require("fs");
const process = require("process");

const rl = readline.createInterface(process.stdin, process.stdout);
let fname = process.argv[2];

fs.writeFileSync(fname, "")

rl.on("line", (data) => {
    fs.appendFileSync(fname, data+"\n");
});

rl.on("SIGINT", () => {
  console.log("File Created!");
  rl.close();
});
