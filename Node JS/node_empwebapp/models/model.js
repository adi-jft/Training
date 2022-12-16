const mongoose=require("mongoose");

const db="mongodb+srv://aditya:adityadb@cluster0.vdwnru4.mongodb.net/employee_db?retryWrites=true&w=majority";
let connect = async ()=>{
  try {
    await mongoose.connect(db);
    console.log("connected to mongodb")
  } catch (err) {
    console.log(err)
  }
};

module.exports = connect;