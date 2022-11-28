let api=new employee();
let ename=document.getElementById("name");
let ejob=document.getElementById("job");
let esalary=document.getElementById("salary");
let btn=document.getElementById("btn");
let cnt=0;
let currId=0;

btn.addEventListener("click", ()=>{
    if(btn.innerHTML=="Save"){
        let nobj=getObject();
        api.put(nobj, listData);
        btn.innerHTML="Add";
    }
    else{
        addData();
    }
});

function getObject(){
    let eobj={
        id: currId,
        name: ename.value,
        job: ejob.value,
        salary: esalary.value
    };
    return eobj;
};

function getData(){
    let empobj={
        id: cnt++,
        name: ename.value,
        job: ejob.value,
        salary: esalary.value
    };
    return empobj;
};

function addData(){
    let obj=getData();
    api.post(obj, listData);
};

function remData(empid){
    api.delete(empid, listData);
};

function editData(empid){
    api.get((arr)=>{
    btn.innerHTML="Save";
    let index=arr.findIndex((e)=> e.id==empid);
    currId = arr[index].id;
    ename.value=arr[index].name;
    ejob.value=arr[index].job;
    esalary.value=arr[index].salary;
    }); 
};

function listData(arr){
    let table=document.getElementById("tbody");
    table.innerHTML=" ";
    arr.forEach((e)=>{
        let row=`<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.job}</td>
        <td>${e.salary}</td>
        <td>
            <button onclick="editData(${e.id})">Edit</button>
            <button onclick="remData(${e.id})">Delete</button>
        </td>
        </tr>`
        table.innerHTML=table.innerHTML+row;
    });
};