const jwt = require("jsonwebtoken");
const mysql=require("mysql2");
require("dotenv").config();

const connection=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees"
});
connection.connect((err) => {
  if(err){
    throw err;
  }
  else{
    console.log("mysql connection established!");
  }
})

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

  // jwt: (req, res) => {
  //   console.log(req.body);
  //   let token = jwt.sign(req.body, process.env.SECRET_KEY);
  //   res.send(token);
  // },

  empget: (req, res) => {
    connection.query("SELECT * FROM employee_table", (err, result) => {
      if(err){
        throw err;
      }
      else{
        emparr=[...result];
        obj.arr=emparr;
        res.render("index.ejs", obj);
      }
    })
  },

  emppost: (req, res) => {
    let emp = {
      name: req.body.name,
      job: req.body.job,
      salary: req.body.salary,
    };
    connection.query("INSERT INTO employee_table (name, job, salary) values(?, ?, ?)", [emp.name, emp.job, emp.salary], (err, result) => {
      if(err){
        throw err;
      }
      else{
        console.log(emp);
        res.redirect("/employees");
      }
    });
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
    let emp = {
        id: obj.id,
        name: req.body.name,
        job: req.body.job,
        salary: req.body.salary,
      };
    clear();
    connection.query("UPDATE employee_table SET name=?, job=?, salary=? WHERE id=?", [emp.name, emp.job, emp.salary, emp.id], (err, result) => {
      if(err){
        throw err;
      }
      else{
        console.log("data UPDATED in table");
        res.redirect("/employees");
      }
    });
  },

  empdelete: (req, res) => {
    let id = req.params.id;
    connection.query("DELETE FROM employee_table WHERE id=?", [id], (err, result) => {
      if(err){
        throw err;
      }
      else{
        console.log("data DELETED from table");
        res.redirect("/employees");
      }
    });
  },

  empsearch: (req, res) => {
    connection.query("SELECT * FROM employee_table WHERE name=? AND job=? AND salary=?", [req.body.name, req.body.job, req.body.salary], (err, result) => {
      if(err){
        throw err;
      }
      else{
        emparr=[...result];
        console.log(emparr);
        obj.arr = emparr
        res.render("index.ejs", obj);
      }
    })
  },
};
