function add()
{
    let a,b,sum;
    a=parseFloat(document.getElementById("first").value);
    b=parseFloat(document.getElementById("second").value);
    if( isNaN(a) || isNaN(b))
    {   
        alert("Please enter valid values!");
    }
    else
    {
        // sum=parseFloat(a)+parseFloat(b);
        sum=a+b;
    }
    document.getElementById("answer").value=sum;
}