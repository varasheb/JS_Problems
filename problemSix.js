
function increasingDigits(n, start = 1) {//4   
  const results = [];
  
  if (n === 0) {
    return [[]];
  }

  for (let i = start; i <= n; i++) {
    const combinations = increasingDigits(n - i, i);
    
    for (const combination of combinations) {
      results.push([i, ...combination]);   [[1,1]]
    }
  }

  return results;
}

let results=increasingDigits(10);
results.forEach(ele => {
  console.log(...ele);
});
console.log(results.length);