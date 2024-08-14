

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
