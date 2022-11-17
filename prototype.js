let a=5;
let b=10;

Array.prototype.cube=function cube(n)
{
    for(let i =0;i<this.length;i++){
        this[i] = this[i] ** 3
    }
    return this;
}

console.log(Array.prototype.cube(2));

// let res=Array.prototype.cube(b);
// console.log(res);

let arr=[1,2,3];

console.log(arr.cube());
