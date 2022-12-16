const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const alert=require("alert");
require("dotenv").config();
const db=require("../models/model");
const emp=require("../models/schema");

let emparr = [];
let obj={
    id: "",
    name: "",
    job: "",
    salary: "",
    arr: emparr,
    flag: false
};

clear= () => {
    obj.id="";
    obj.name="";
    obj.job="";
    obj.salary="";
    obj.flag=false;
  };

module.exports = {
  registerPage: (req, res) => {
    res.render("register.ejs");
  },

  register: async (req, res) => {
    let userobj={
      email: req.body.email,
      password: req.body.password
    };
    let exist=await emp.usermodel.findOne({email: req.body.email});
    if(exist){
      alert("User already exists! Please Login");
      res.redirect("/loginPage");
    }
    else{
      alert("User Registered!")
      await emp.usermodel.create(userobj);
      res.redirect("/loginPage");
    }
  },

  loginPage: (req, res) => {
    res.render("login.ejs");
  },

  login: async (req, res) => {
    let user = await emp.usermodel.find({email: req.body.email});
    if(user.length!=0){
      if(user[0].password==req.body.password){
        let token = jwt.sign(req.body, process.env.SECRET_KEY);
        res.cookie("key", token);
        res.redirect("/employees");
      }
      else{
        alert("Wrong Password! Try again...");
        res.redirect("/loginPage");
      }
    }
    else{
      alert("User not found! Please register");
      res.redirect("/registerPage");
    }
  },

  logout: (req, res) => {
    res.clearCookie("key");
    res.redirect("/loginPage");
  },

  empget: async (req, res) => {
    let result= await emp.empmodel.find({});
    emparr=[...result];
    obj.arr=emparr;
    res.render("index.ejs", obj);
  },

  emppost: async (req, res) => {
    let empobj = {
      name: req.body.name,
      job: req.body.job,
      salary: req.body.salary,
    };
    await emp.empmodel.create(empobj);
    res.redirect("/employees");
  },

  empedit: async (req, res) => {
    let id = req.params.id;
    empobj=await emp.empmodel.findById(id);
    obj.id=empobj.id;
    obj.name=empobj.name;
    obj.job=empobj.job;
    obj.salary=empobj.salary;
    obj.flag=true;
    res.redirect("/employees");
  },

  empsave: async (req, res) => {
    await emp.empmodel.updateOne({_id: obj.id}, {$set: {name: req.body.name, job: req.body.job, salary: req.body.salary}});
    clear();
    res.redirect("/employees");
  },

  empdelete: async (req, res) => {
    let id = req.params.id;
    await emp.empmodel.remove({_id: id});
    res.redirect("/employees");
  },

  empsearch: async (req, res) => {
    let result= await emp.empmodel.find({name: req.body.name, job: req.body.job, salary: req.body.salary});
    emparr=[...result];
    obj.arr=emparr;
    res.render("index.ejs", obj);
  },
};