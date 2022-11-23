
console.log(a); //give undefined because memory allocation is done even before actual code execution 
fn(); //shows hoisting for function 'fn'
var a; //shows hoisting for variable 'a'


function fn()
{
    let b=10;
    const c=3;
    a=5;

    console.log(b);
    console.log(c);
    console.log(a);
}
console.log(a); //value of a is changed to 5

var x=10;

console.log("x in f1:");
f1();

console.log("x in f2:");
f2();

console.log("global x:");
console.log(x);

function f1()
{
    var x=2;
    console.log(x);
}

function f2(){
    var x=3;
    console.log(x);
}