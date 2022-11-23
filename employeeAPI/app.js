function empadd(){
    let name=document.getElementById("name");
    let job=document.getElementById("job");
    let salary=document.getElementById("salary");
    let btn=document.getElementById("addbtn");
    btn.addEventListener("click", add(name.value, job.value, salary.value));
    list(add(name.value, job.value, salary.value));
};