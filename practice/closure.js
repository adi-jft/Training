
function z()
{
    let b=5;
    function x()
    {
        let a=3;

        function y()
        {
            console.log(a, b);
        }
        y();
    }
    x();
}
z(); //this fn shows closure property of js