let emparr = [];
let currId;

// if(document.cookie==null){
//   window.open("./login.html","_self");
// }

get();
function clear(){
  $("#name").val("");
  $("#job").val("");
  $("#salary").val("");
};

$("#btn").click(async ()=>{
  if($("#btn").html()=="Add"){
    if($("#name").val()==""||$("#job").val()==""||$("#salary").val()==""){
      alert("Invalid input");
    }
    else{
      let obj={
        id: emparr.length+1,
        name: $("#name").val(),
        job: $("#job").val(),
        salary: $("#salary").val()
      };
      console.log(obj);
  
      let request = $.ajax({
        url: `http://localhost:3000/employees/post`,
        method: "POST",
        data: obj,
        // headers: {
        //   "authorization": "Bearer " + sessionStorage.getItem("key")
        // }
      });
  
      request.done(function(req){
        console.log(req);
      });
  
      request.fail(function(req){
        alert("Request failed "+req);
      });
      get();
      clear();
    }
  }
  else{
    save(currId);
    clear();
  }
});

$(`#search`).on("click", function(){
  let empfilter=[];
  let flag=0;
  let iobj={
    name: $(`#name`).val(),
    job: $(`#job`).val(),
    salary: $(`#salary`).val()
  };

  for(let i=0; i<emparr.length; i++){
    let eobj={
      name: emparr[i].name,
      job: emparr[i].job,
      salary: emparr[i].salary
    };
    if(_.isEqual(iobj, eobj)){
      flag=1;
      break;
    }
  }
  
  if(flag==1){
    empfilter.push(iobj);
    display(empfilter);
    clear();
  }
  else{
    alert("Employee Not Found!");
    clear();
  }
});

// $(`#search`).on("click", function(){
//   let empfilter=[];
//   if($("#name").val()==""||$("#job").val()==""||$("#salary").val()==""){
//     alert("Invalid input");
//   }
//   else{
//     iname=$("#name").val().toLowerCase();
//     ijob=$(`#job`).val().toLowerCase();
//     isalary=Number($(`#salary`).val());
//     let flag=0;

//     empfilter=emparr.filter((e)=>{
//       if(e.name==iname && e.job==ijob && e.salary==isalary){
//         flag=1;
//         return e;
//       }
//     });

//     if(flag==1){
//       display(empfilter);
//       clear();
//     }
//     else{
//       alert("Employee Not Found!");
//       clear();
//     }
//   }
// });

$(`#emptable`).on("click", ".btn" ,function (){
  let text=$(this).html();
  if(this.value=="name"){
    if(this.order=="asc"){
      this.order="desc";
      emparr.sort((a, b)=> a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
      text="&#9650";
    }
    else{
      this.order="asc";
      emparr.sort((a, b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      text="&#9660";
    }
  }

  else if(this.value=="job"){
    if(this.order=="asc"){
      this.order="desc";
      emparr.sort((a, b)=> a.job.toLowerCase() < b.job.toLowerCase() ? 1 : -1);
      text="&#9650";
    }
    else{
      this.order="asc";
      emparr.sort((a, b)=> a.job.toLowerCase() > b.job.toLowerCase() ? 1 : -1);
      text="&#9660";
    }
  }

  else{
    if(this.order=="asc"){
      this.order="desc";
      emparr.sort((a, b)=> Number(a.salary) < Number(b.salary) ? 1 : -1);
      text="&#9650";
    }
    else{
      this.order="asc";
      emparr.sort((a, b)=> Number(a.salary) > Number(b.salary) ? 1 : -1);
      text="&#9660";
    }
  }
  $(this).html(text);
  display(emparr);
});

async function get() {
  let request = $.ajax({
    url: `http://localhost:3000/employees`,
    method: "GET",
    // headers: {
    //   "authorization": "Bearer " + sessionStorage.getItem("key")
    // }
  });

  request.done(function (req){
    emparr=[...req];
    display(emparr);
  });

  request.fail(function(req){
    alert("Request failed "+req);
  });
};

async function del(emp){
  let request = $.ajax({
    url: `http://localhost:3000/employees/delete/${emp}`,
    method: "DELETE",
    // headers: {
    //   "authorization": "Bearer " + sessionStorage.getItem("key")
    // }
  });

  request.done(function(req){
    get();
  });

  request.fail(function(req){
    alert("Request failed "+req);
  });
};

function edit(emp){
  $("#btn").html("Edit");
  let obj=emparr.find(e=>e.id==emp);
  currId=emp;
  $("#name").val(obj.name);
  $("#job").val(obj.job);
  $("#salary").val(obj.salary);
};

async function save(emp){
  let obj={
    id: emp,
    name: $("#name").val(),
    job: $("#job").val(),
    salary: $("#salary").val()
  };

  let request = $.ajax({
    url: `http://localhost:3000/employees/put/${emp}`,
    method: "PUT",
    data: obj,
    // headers: {
    //   "authorization": "Bearer " + sessionStorage.getItem("key")
    // }
  });

  request.done(function(req){
    get();
  });
  console.log(obj);

  request.fail(function(req){
    alert("Request failed "+req);
  });

  $("#btn").html("Add");
  clear();
};

function display(arr){
  $("#tbody").html(" ");
  arr.forEach((e) => {
    let row = `<tr>
        <td>${e.name}</td>
        <td>${e.job}</td>
        <td>${e.salary}</td>
        <td>
            <button class="btn btn-warning" onclick="edit(${e.id})">Edit</button>
            <button class="btn btn-danger" onclick="del(${e.id})">Delete</button>
        </td>
        </tr>`;
    $("#tbody").append(row);
  });
};