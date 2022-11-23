var from=document.getElementById("stnfrom");
var to=document.getElementById("stnto");
var mode=document.getElementById("payment");
var amt=document.getElementById("price");

function calculate(){
    let num=Math.abs(from.value-to.value)+1;
    let final=cost(num,mode.value);
    amt.innerText=`Final Price: ₹${final}`;
}

function cost(n, paymode){
    let res=0;
    switch(true){
        case (n<5):
            res=10;
            break;
        case (n<=8):
            res=20;
            break;
        case (n<=12):
            res=30;
            break;
        case (n<=16):
            res=40;
            break;
        case (n<=20):
            res=50;
            break;
        case (n<=26):
            res=60;
            break;
        default: alert("Invalid input!");
    }

    if(res==10)
        return res;
    else{
        if(paymode=="card"){
            res-=(res*0.1);
            return res;
        }
        return res;
    }
}