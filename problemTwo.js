
function pyramid(arr){
    let n=arr.length
    arr.sort((a,b)=>a-b)
    console.log(arr);
    for(let i=1;n/2>i;i++){
        temp=arr[i]
        index=n-i+1;
        arr.splice(index,0,temp)
        arr.splice(i,1)
    }
}


let arr=[ 1, 4, 3, 6, 8, 7, 9, 2, 5, 0, 12, 23, -1, 67, 125,-23]
let b=[1, 4, 3, 6, 8, 7, 9, 2, 5, 0, 12, 23, -1]
pyramid(arr)
pyramid(b)
console.log(arr,b);
