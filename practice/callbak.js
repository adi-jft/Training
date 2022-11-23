
function a(x){
    console.log("a");
    x();
}

a(function x(){
    console.log("x");
});

let clk=document.getElementById("btn");
clk.addEventListener("click", function clickBtn(){
    console.log("Button in clicked");
})