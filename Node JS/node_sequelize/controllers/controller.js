const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
require("dotenv").config();
const db=require("../models/model");

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
    console.log(req.body);
    let token = jwt.sign(req.body, process.env.SECRET_KEY);
    res.cookie("key", token);
    res.redirect("/employees");
  },

  empget: async (req, res) => {
    let result= await db.emp_table.findAll();
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
    await db.emp_table.create(empobj);
    res.redirect("/employees");
  },

  empedit: (req, res) => {
    let id = req.params.id;
    let ind = emparr.findIndex((e) => Number(e.id) == Number(id));
    obj.id=id;
    obj.name=emparr[ind].name;
    obj.job=emparr[ind].job;
    obj.salary=emparr[ind].salary;
    obj.flag=true;
    console.log(id);
    console.log(obj);
    res.redirect("/employees");
  },

  empsave: async (req, res) => {
    await db.emp_table.update({name: req.body.name, job: req.body.job, salary: req.body.salary}, {where: {id: obj.id}});
    clear();
    res.redirect("/employees");
  },

  empdelete: async (req, res) => {
    let id = req.params.id;
    await db.emp_table.destroy({where: {id: id}});
    res.redirect("/employees");
  },

  empsearch: async (req, res) => {
    let result= await db.emp_table.findAll({where: {name: req.body.name, job: req.body.job, salary: req.body.salary}});
    emparr=[...result];
    obj.arr=emparr;
    res.render("index.ejs", obj);
  },
};