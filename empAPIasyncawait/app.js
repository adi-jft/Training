let api=new employee();
let ename=document.getElementById("name");
let ejob=document.getElementById("job");
let esalary=document.getElementById("salary");
let btn=document.getElementById("btn");
let cnt=0;
let currId=0;

btn.addEventListener("click", async ()=>{
    if(btn.innerHTML=="Save"){
        let nobj=getObject();
        let p=await api.put(nobj);
        try{
            listData(p);
            btn.innerHTML="Add";
            clearData();
        }
        catch(err){
            console.log(err);
        }      
    }
    else{
        addData();
        clearData();
    }
});

function clearData(){
    ename.value="";
    ejob.value="";
    esalary.value="";
}

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

async function addData(){
    let obj=getData();
    let p=await api.post(obj);
    try{
        listData(p);
    }
    catch(err){
        console.log(err);
    }
};

async function remData(empid){
    console.log(empid);
    let p=await api.delete(empid);
    try{
        listData(p);
    }
    catch(err){
        console.log(err);
    }
};

async function editData(empid){
    let p=await api.get();
    try{
    btn.innerHTML="Save";
    let index=p.findIndex((e)=> e.id==empid);
    currId = p[index].id;
    ename.value=p[index].name;
    ejob.value=p[index].job;
    esalary.value=p[index].salary;
    }
    catch(err){
        console.log(err);
    }
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