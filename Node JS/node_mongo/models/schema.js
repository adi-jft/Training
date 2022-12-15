const mongoose=require("mongoose");

const dbSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});
module.exports=mongoose.model("employee", dbSchema);