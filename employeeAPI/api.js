/*create a array of employee objects.
Each object has id, name, job and salary fields.

create methods to perform foloowing operations:
1. to add an employee.
2. to remove an employee.
3. to to update an employee.
4. to list all employees.
All these methods should be defined using setTimeout() to simulate actual API i.e. each operation should be performed
after 2 sec delay.*/

let emparr=[];
let cnt=0;

add=(n, j, s)=>{
    let empobj={};
    empobj.id=cnt++;
    empobj.name=n;
    empobj.job=j;
    empobj.salary=s;
    emparr.push(empobj);
    console.log(emparr);
    console.log(empobj);
    return empobj;
};
// function remove(){

// };
// function update(){

// };
function list(empdata){
    let table=document.getElementById("emptable");
    let row=table.insertRow(table.length);

    cell1=row.insertCell(0);
    cell1=innerHTML=empdata.id;
    cell2=row.insertCell(1);
    cell2.innerHTML=empdata.name;
    cell3=row.insertCell(2);
    cell3=innerHTML=empdata.job;
};
