let api = new employee();
let ename = document.getElementById("name");
let ejob = document.getElementById("job");
let esalary = document.getElementById("salary");
let btn = document.getElementById("btn");
let cnt = 0;
let currId = 0;

btn.addEventListener("click", () => {
  if (btn.innerHTML == "Save") {
    let nobj = new getData(currId, ename.value, ejob.value, esalary.value);
    let p = api.put(nobj);
    p.then((success) => {
      listData(success);
      btn.innerHTML = "Add";
      clearData();
    }).catch((err) => {
      console.log(err);
    });
  } else {
    addData();
    clearData();
  }
});

function clearData() {
  ename.value = "";
  ejob.value = "";
  esalary.value = "";
};

// function getObject(){
//     let eobj={
//         id: currId,
//         name: ename.value,
//         job: ejob.value,
//         salary: esalary.value
//     };
//     return eobj;
// };

function getData(id, name, job, salary) {
  this.id = id;
  this.name = name;
  this.job = job;
  this.salary = salary;
};

function addData() {
  let obj = new getData(cnt++, ename.value, ejob.value, esalary.value);
  let p = api.post(obj);
  p.then((success) => {
    listData(success);
  }).catch((err) => {
    console.log(err);
  });
};

function remData(empid) {
  console.log(empid);
  let p = api.delete(empid);
  p.then((success) => {
    listData(success);
  }).catch((err) => {
    console.log(err);
  });
};

function editData(empid) {
  let p = api.get();
  p.then((success) => {
    btn.innerHTML = "Save";
    let index = success.findIndex((e) => e.id == empid);
    currId = success[index].id;
    ename.value = success[index].name;
    ejob.value = success[index].job;
    esalary.value = success[index].salary;
  }).catch((err) => {
    console.log(err);
  });
};

function listData(arr) {
  let table = document.getElementById("tbody");
  table.innerHTML = " ";
  arr.forEach((e) => {
    let row = `<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.job}</td>
        <td>${e.salary}</td>
        <td>
            <button onclick="editData(${e.id})">Edit</button>
            <button onclick="remData(${e.id})">Delete</button>
        </td>
        </tr>`;
    table.innerHTML = table.innerHTML + row;
  });
};