const jwt = require("jsonwebtoken");
require("dotenv").config();
let emparr = [
  {
    id: "1",
    name: "Aditya",
    job: "SDE",
    salary: "500000",
  },
  {
    id: "2",
    name: "Surya",
    job: "Analyst",
    salary: "200000",
  },
  {
    id: "3",
    name: "Ganesh",
    job: "Manager",
    salary: "800000",
  },
];

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
    res.send(token);
  },
  empget: (req, res) => {
    res.render("index.ejs", obj);
  },
  emppost: function (req, res) {
    let emp = {
      id: emparr.length + 1,
      name: req.body.name,
      job: req.body.job,
      salary: req.body.salary,
    };
    emparr.push(emp);
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
  empsave: (req, res) => {
    let ind = emparr.findIndex((e) => Number(e.id) == Number(obj.id));
    let emp = {
        id: obj.id,
        name: req.body.name,
        job: req.body.job,
        salary: req.body.salary,
      };
    emparr[ind]=emp;
    clear();
    res.redirect("/employees");
  },
  empdelete: (req, res) => {
    let id = req.params.id;
    let ind = emparr.findIndex((e) => Number(e.id) == Number(id));
    emparr.splice(ind, 1);
    res.redirect("/employees");
  },
};
