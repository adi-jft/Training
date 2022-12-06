const fs=require("fs");
const process=require("process");

fs.stat(process.argv[2], (err, stats) => {
    if(err){
        throw err;
    }
    else{
        if(stats.isFile()){
            fs.unlink(process.argv[2], (err) => {
                if(err){
                    throw err;
                }
                console.log("File Removed!");
            });
        }
        else{
            fs.rmdir(process.argv[2], {recursive: true}, (err) => {
                if(err){
                    throw err;
                }
                console.log("Directory Removed!");
            });
        }
    }
});
