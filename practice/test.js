let arr=[1,2,3,4,5];
console.log(arr);

// function double(arr){
//     let arrd=[];
//     for(i=0; i<5; i++){
//         arrd[i]=(arr[i]*2);
//     }
//     console.log(arrd);
// }

// function square(arr){
//     let arrs=[];
//     for(i=0; i<5; i++){
//         arrs[i]=(arr[i]*arr[i]);
//     }
//     console.log(arrs);
// }
// double(arr);
// square(arr);

//transform is a higher order function.
function transform(arr, logic){
    let newarr=[];
    for(i=0; i<5; i++){
        newarr[i]=logic(arr[i]);
    }
    // console.log(newarr);
    return newarr;
}

//logic is a call back fn.
//this facilitates hifher order fn.
//call back fn are used to facilitate asynchronous functions
//call back fn are used to facilitate event driven programming
function logic(a){
    a=a+1;
    return a;
}
// transform(arr, logic);

let r=transform(arr, logic);
