// 2. Pyramid Arrangement
// Given to you is an unordered / unsorted integer array of size n. Reorder the
// array in such a way that the largest number of the array is in the middle
// index of the array and the remaining numbers which are lesser than or equal
// to the previous element should be arranged in descending order as we move
// to the edges of the array ((0, n-1) index).
// Note that as we move to the edges of the array, you will need to arrange
// the elements in the descending order starting from the middle index.
// You have to place the next largest after the largest element (the middle
// element) on either side of the middle element.
// If n is even, you can consider either of the n/2-1'^ or n/2t^ index as
// your middle element and place the largest element in either of those
// indexes and move towards edges from there.
// Do in-place rearrangement of the elements. Do not use another/extra
// array. At max use one or two non-loop variables. Programs not
// following this rule will not be considered.
// Example:
// Input:
// 1, 4, 3, 6, 8, 7, 9, 2, 5, 0, 12, 23, -1
// Output:
// -1, 1, 3, 5, 7, 9, 23, 12, 8, 6, 4, 2, 0
// int [ ] pyramid(int arr[ ], int
// n) {
// ……………..
// your code
// ……………
// return arr [ ]
// }

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
