const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
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
  loginPage: (req, res) => {
    res.render("login.ejs");
  },

  jwt: (req, res) => {
    let token = jwt.sign(req.body, process.env.SECRET_KEY);
    res.cookie("key", token);
    res.redirect("/employees");
  },

  empget: async (req, res) => {
    let result= await emp.find({});
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
    await emp.create(empobj);
    res.redirect("/employees");
  },

  empedit: async (req, res) => {
    let id = req.params.id;
    empobj=await emp.findById(id);
    obj.id=empobj.id;
    obj.name=empobj.name;
    obj.job=empobj.job;
    obj.salary=empobj.salary;
    obj.flag=true;
    res.redirect("/employees");
  },

  empsave: async (req, res) => {
    await emp.updateOne({_id: obj.id}, {$set: {name: req.body.name, job: req.body.job, salary: req.body.salary}});
    clear();
    res.redirect("/employees");
  },

  empdelete: async (req, res) => {
    let id = req.params.id;
    await emp.remove({_id: id});
    res.redirect("/employees");
  },

  empsearch: async (req, res) => {
    let result= await emp.find({name: req.body.name, job: req.body.job, salary: req.body.salary});
    emparr=[...result];
    obj.arr=emparr;
    res.render("index.ejs", obj);
  },
};