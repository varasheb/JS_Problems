// 6. Increasing digits
// Sum
// Given an input number N. Print all the numbers which are formed by the combinations of digits
// where the sum of all the digits of the equal to the number N (your Input). Also note that the
// digits of the number must be in increasing order from left to right.
// Note: Exclude zeros as digits in your number.
// Example 1: Input N=3
// 1 1 1
// 1 2
// 3
// Example 2: Input N=4
// 1 1 1 1
// 1 1 2
// 1 3
// 2 2
// 4

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