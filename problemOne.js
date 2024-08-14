

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

  
  console.log(pairIntersection([11, 16], [14, 21])); 
  console.log(pairIntersection([11, 42], [14, 21])); 
  console.log(pairIntersection([1, 5], [6, 10]));     
  console.log(pairIntersection([1, 6], [6, 10]));   
  console.log(pairIntersection([1, 10], [6, 9]));    



  let arr=[23,4,3,44,5]

  console.log(Math.min(...arr),Math.max(...arr));