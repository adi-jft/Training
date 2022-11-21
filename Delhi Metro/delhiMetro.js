var from=document.getElementById("stnfrom");
var to=document.getElementById("stnto");
var mode=document.getElementById("payment");
var amt=document.getElementById("price");

function calculate()
{
    let num=Math.abs(from.value-to.value)+1;
    let final=cost(num,mode.value);

    amt.innerText=`Final Price: ₹${final}`;
}

function cost(n, paymode)
{
    let res=0;

    switch(true)
    {
        case (n<5):
            res=10;
            break;
        case (n>=5 && n<=8):
            res=20;
            break;
        case (n>=9 && n<=12):
            res=30;
            break;
        case (n>=13 && n<=16):
            res=40;
            break;
        case (n>=17 && n<=20):
            res=50;
            break;
        case (n>=21 && n<=24):
            res=60;
            break;
        case (n>24 && n<=26):
            res=70;
            break;
        default: alert("Invalid input!");
    }

    if(res==10)
    {
        return res;
    }
    else{
        if(paymode=="card")
        {
            res=res-(res*0.1);
            if(res>60)
            {
                res=60;
            }
            return res;
        }
        else{
            if(res>60)
            {
                res=60;
            }
            return res;
        }
    }
}

// calculate();
// var res=from.charCodeAt(1)-96;
// console.log(res);