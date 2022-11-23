
var g="global";

function a()
{
    var g="local of a"
    function b()
    {
        console.log(g); //b() looks for g in its local mem. if NOT present then it refers to lexical env. of parent a()
    } 
    //a() looks for g in its local mem. if not present then it refers to lexical env. of parent GEC
    b();
    console.log(g);
}
//for GEC refrence to its parent's lexical env. points towards null 

// b();
a();
console.log(g);