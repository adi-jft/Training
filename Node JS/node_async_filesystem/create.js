// const prompt = require("prompt-sync")({sigint: true});
const readline = require("readline");
const fs = require("fs");
const process = require("process");

const rl = readline.createInterface(process.stdin, process.stdout);

let fname = process.argv[2];
fs.writeFile(fname, "", (err) => {
  if (err) {
    throw err;
  }
});

// let txt = prompt();
// fs.appendFile(fname, txt, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Data Saved!");
// });

// process.on('SIGINT', function() {

// });

rl.on("line", (data) => {
  fs.appendFile(fname, data + "\n", (err) => {
    if (err) {
      throw err;
    }
  });
});

rl.on("SIGINT", () => {
  console.log("File Created!");
  rl.close();
});
