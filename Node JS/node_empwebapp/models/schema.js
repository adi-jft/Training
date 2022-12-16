const mongoose=require("mongoose");

const empSchema=mongoose.Schema({
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

const userSchema=mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let empmodel=mongoose.model("employee", empSchema);
let usermodel=mongoose.model("user", userSchema);
module.exports={
    empmodel,
    usermodel
};