
function x()
{
    var a=3;
    function y()
    {
        console.log(a);
    }
    return y;
}

let res=x();
console.log(res);
