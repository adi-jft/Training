let emparr = [];
let currId;

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
        name: $("#name").val(),
        job: $("#job").val(),
        salary: $("#salary").val()
      };
      console.log(obj);
  
      let request = $.ajax({
        url: `http://localhost:3000/employees`,
        method: "POST",
        data: obj
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
  if($("#name").val()==""||$("#job").val()==""||$("#salary").val()==""){
    alert("Invalid input");
  }
  else{
    iname=$("#name").val().toLowerCase();
    ijob=$(`#job`).val().toLowerCase();
    isalary=Number($(`#salary`).val());
    let flag=0;

    empfilter=emparr.filter((e)=>{
      if(e.name==iname && e.job==ijob && e.salary==isalary){
        flag=1;
        return e;
      }
    });

    if(flag==1){
      display(empfilter);
      clear();
    }
    else{
      alert("Employee Not Found!");
      clear();
    }
  }
});

$(`#emptable`).on("click", ".btn" ,function (){
  let text=$(this).html();
  if(this.value=="name"){
    if(this.order=="asc"){
      this.order="desc";
      emparr.sort((a, b)=> a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
      text="&#9660";
    }
    else{
      this.order="asc";
      emparr.sort((a, b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      text="&#9650";
    }
  }

  else if(this.value=="job"){
    if(this.order=="asc"){
      this.order="desc";
      emparr.sort((a, b)=> a.job.toLowerCase() < b.job.toLowerCase() ? 1 : -1);
      text="&#9660";
    }
    else{
      this.order="asc";
      emparr.sort((a, b)=> a.job.toLowerCase() > b.job.toLowerCase() ? 1 : -1);
      text="&#9650";
    }
  }

  else{
    if(this.order=="asc"){
      this.order="desc";
      emparr.sort((a, b)=> Number(a.salary) < Number(b.salary) ? 1 : -1);
      text="&#9660";
    }
    else{
      this.order="asc";
      emparr.sort((a, b)=> Number(a.salary) > Number(b.salary) ? 1 : -1);
      text="&#9650";
    }
  }
  $(this).html(text);
  display(emparr);
});

async function get() {
  let request = $.ajax({
    url: `http://localhost:3000/employees`,
    method: "GET"
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
    url: `http://localhost:3000/employees/${emp}`,
    method: "DELETE"
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
    url: `http://localhost:3000/employees/${emp}`,
    method: "PUT",
    data: obj
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
            <button class="btn btn-outline-secondary" onclick="edit(${e.id})">Edit</button>
            <button class="btn btn-outline-secondary" onclick="del(${e.id})">Delete</button>
        </td>
        </tr>`;
    $("#tbody").append(row);
  });
};