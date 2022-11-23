let arr=["gtr","supra"];

arr.push("mustang","hellcat");
console.log(arr);

let popped=arr.pop() //removes last element
console.log("popped->",popped);
console.log(arr);

//now arr=["gtr","supra","mustang"]

arr.push(1,2,3);
console.log(arr);
console.log(arr[0],"type:", typeof arr[0], arr[4],"type:", typeof arr[4]);

//now arr=["gtr","supra","mustang",1,2,3]

let shifted=arr.shift(); //removes first element
console.log("shifted->",shifted);
console.log(arr);

//now arr=['supra', 'mustang', 1, 2, 3]

arr.unshift("70 charger rt") //adds element in the beginning
console.log(arr);

//now arr=['70 charger rt', 'supra', 'mustang', 1, 2, 3]
