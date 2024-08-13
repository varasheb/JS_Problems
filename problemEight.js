/*
8. Find all n-digit numbers with a given sum of digits
Given two inputs n and sumN, where n<9, find all n digit numbers where the sum of their digits
is equal to sumN
Example : n=3 and sum =6
input :3,6
Output: 3-digit numbers with sum 6 are
105 114 123 132 141 150 204 213 222 231 240 303 312 321 330 402 411 420 501 510 600
*/

function findNumbersWithSum(n, sumN) {
    const results = [];
      //                     []             3               6
    function findNumbers(currentNumber, remainingDigits, remainingSum) {
        if (remainingDigits === 0) {
            if (remainingSum === 0) {
                results.push(currentNumber.join(''));
            }
            return;
        }

        let start = (currentNumber.length === 0) ? 1 : 0;

        for (let digit = start; digit <= 9; digit++) {
            if (remainingSum >= digit) {
                currentNumber.push(digit);
                //            [1]                 1                     5
                findNumbers(currentNumber, remainingDigits - 1, remainingSum - digit);
                currentNumber.pop();
            }
        }
    }

    findNumbers([], n, sumN);
    return results;
}


console.log(findNumbersWithSum(3, 6));
