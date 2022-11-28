let arr=["gtr","supra"];

arr.push("mustang","hellcat");
console.log(arr);

let popped=arr.pop() //removes last element
console.log("popped->",popped);
console.log(arr);
//now arr=["gtr","supra","mustang"]

arr.push(1,2,3);
console.log(arr);
console.log(typeof arr);
console.log(arr[0],"type:", typeof arr[0], arr[4],"type:", typeof arr[4]);
//now arr=["gtr","supra","mustang",1,2,3]

let shifted=arr.shift(); //removes first element
console.log("shifted->",shifted);
console.log(arr);
//now arr=['supra', 'mustang', 1, 2, 3]

arr.unshift("70 charger rt") //adds element in the beginning
console.log(arr);
//now arr=['70 charger rt', 'supra', 'mustang', 1, 2, 3]

let nums=[2, 3, 9, 1];

//passing entire function as parameters
let bin=nums.map((x)=> x.toString(2));
//could even us ethe conventioanl method as follows:
// let bin=nums.map(function binary(binary);
// function binary(x){
//     return x.toString(2);
// };

console.log(bin);
console.log(nums);
// converted every element of nums array to its binary value

let fil=nums.filter((x)=> x>5);
console.log(fil);
//filtered elements greater than 5