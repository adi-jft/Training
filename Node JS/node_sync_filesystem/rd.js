const fs=require("fs");
const process=require("process");

let status=fs.statSync(process.argv[2]);
if(status.isFile()){
    fs.unlinkSync(process.argv[2]);
    console.log(process.argv[2], "File Removed!");
}
else{
    fs.rmdirSync(process.argv[2], {recursive: true});
    console.log("Directory Removed!");
}