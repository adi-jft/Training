let arr=[1,2,3,4,5];
console.log(arr);

// function double(arr){
//     let arrd=[];
//     for(i=0; i<5; i++){
//         arrd[i]=(arr[i]*2);
//     }
//     console.log(arrd);
// };
// function square(arr){
//     let arrs=[];
//     for(i=0; i<5; i++){
//         arrs[i]=(arr[i]*arr[i]);
//     }
//     console.log(arrs);
// };
// double(arr);
// square(arr);

//transform is a higher order function
//this is a Generic fn. that gives a generalised solution
function transform(array, logic){
    let newarr=[];
    for(i=0; i<5; i++){
        newarr.push(logic(array[i]));
    }
    // console.log(newarr);
    return newarr;
};

//following are the logic fns.
//these are call back fn.
//it can be used to facilitates higher order fn.
//it can be used to facilitate asynchronous functions
//it can be used to facilitate event driven programming
//it can be used to create generic functionality
function plusone(a){
    a=a+1;
    return a;
};

function square(b){
    b*=b;
    return b;
};

function double(c){
    c*=2;
    return c;
};

let r=transform(arr, plusone);
console.log(r);

let s=transform(arr, square);
console.log(s);

let d=transform(arr, double);
console.log(d);