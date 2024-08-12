// 1. Pair Intersection
// Write a function that accepts two pairs of numbers [ a, b ] and [ c, d ] where
// each pair represents the range a to b and c to d respectively. The function
// upon execution returns another pair [ x, y ] which is the intersection of the
// above two pairs.
// int [ ] pair_intersection( [ a, b
// ], [ c, d ] ) {
// ……..
// your code
// …….
// return [x, y ]
// }
// Example:
// Input:
// [ a, b ] = [ 11, 16 ] ( which means [11, 12, 13, 14, 15, 16])
// [ c, d ] = [ 14, 21 ] (which means [14, 15, 16, 17, 18, 19, 20, 21]
// Output:
// [ x, y ] = [ 14, 15, 16 ]
// Note:
// 1. This function should take 2 pairs as its arguments (each pair is an array or
// tuple of exactly two numbers)
// 2. Return element should be a pair (each pair is an array or tuple of exactly two numbers)
// 3. Function complexity should be linear (should not have loop within a loop)

// function pairIntersection(pairOne,pairTwo){
//   let n=pairOne[1]-pairTwo[0]
//   if(n>0 && pairOne[1]<pairTwo[1])
//     return [pairTwo[0],pairOne[1]]
//   else if(pairOne[1]>pairTwo[1])
//     return pairTwo
//   else
//     return[]
// }

// console.log(pairIntersection([11,16],[14,21]))
// console.log(pairIntersection([11,42],[14,21]))


function pairIntersection(pairOne, pairTwo) {
    const [a, b] = pairOne;
    const [c, d] = pairTwo;
    
    const start = Math.max(a, c);
    const end = Math.min(b, d);
    
    if (start <= end) {
      return [start, end];
    } else {
      return [];
    }
  }

  
  console.log(pairIntersection([11, 16], [14, 21])); // Output: [14, 16]
  console.log(pairIntersection([11, 42], [14, 21])); // Output: [14, 21]
  console.log(pairIntersection([1, 5], [6, 10]));    // Output: []
  console.log(pairIntersection([1, 6], [6, 10]));    // Output: [6,6]
  console.log(pairIntersection([1, 10], [6, 9]));    // Output: [6,9]



  let arr=[23,4,3,44,5]

  console.log(Math.min(...arr),Math.max(...arr));