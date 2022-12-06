const fs=require("fs");
const process=require("process");

fs.mkdir(process.argv[2], (err) => {
    if(err){
        throw err;
    }
    console.log("Directory Created!");
});