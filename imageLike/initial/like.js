let btn=document.getElementsByTagName("button");
let lab=document.getElementsByTagName("label");
let count= new Array(lab.length).fill(0);

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", like=()=>{
    // console.log(btn[i]);
    // console.log(lab[i]);
    count[i]++;
    // console.log(count[i]);
    lab[i].innerHTML=count[i];
    });
}