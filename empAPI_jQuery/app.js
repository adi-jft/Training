let api = new employee();
let ename = $("#name");
let ejob = $("#job");
let esalary = $("#salary");
let arr = JSON.parse(localStorage.getItem("obj")) || [];
let cnt = 0;

if (arr.length > 0) {
  cnt = arr[arr.length - 1].id;
}
let currId = 0;

$("#btn").click(async () => {
  if ($("#btn").html() == "Save") {
    let nobj = getObject();
    let p = await api.put(nobj);
    try {
      listData(p);
      $("#btn").html("Add");
      clearData();
    } catch (err) {
      console.log(err);
    }
  } else {
    addData();
    clearData();
  }
});

function clearData() {
  ename.val("");
  ejob.val("");
  esalary.val("");
}

function getObject() {
  let eobj = {
    id: currId,
    name: ename.val(),
    job: ejob.val(),
    salary: esalary.val(),
  };
  return eobj;
}

function getData() {
  let empobj = {
    id: ++cnt,
    name: ename.val(),
    job: ejob.val(),
    salary: esalary.val(),
  };
  return empobj;
}

async function addData() {
  let obj = getData();
  let p = await api.post(obj);
  try {
    listData(p);
  } catch (err) {
    console.log(err);
  }
}

async function remData(empid) {
  console.log(empid);
  let p = await api.delete(empid);
  try {
    listData(p);
  } catch (err) {
    console.log(err);
  }
}

async function editData(empid) {
  let p = await api.get();
  try {
    $("#btn").html("Save");
    let index = p.findIndex((e) => e.id == empid);
    currId = p[index].id;
    ename.val(p[index].name);
    ejob.val(p[index].job);
    esalary.val(p[index].salary);
  } catch (err) {
    console.log(err);
  }
}

function listData(arr) {
  $("#tbody").html(" ");
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
    $("#tbody").append(row);
  });
};