module.exports = function search(arr, n){
    let flag=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==n){
              flag=1;
              ind=i;
              break;
        }
    }
    if(flag==1){
        console.log("Search Successful! at: ", ind);
    }
    else{
        console.log("Search UNsuccessful!");
    }
};