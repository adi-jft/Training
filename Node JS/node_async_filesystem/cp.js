const fs=require("fs");
const process=require("process");

let cpf=process.argv[3];
fs.copyFile(process.argv[2], process.argv[3], (err) => {
    if(err){
        throw err;
    }
    console.log("File Copied!");
});

fs.readFile(cpf, "utf-8", (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
});