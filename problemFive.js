// 5. Pick Squares
// Write a function for picking up the numbers which are squares of positive integers from a given
// array and do a sort which is not a brute force sort or a bubble sort. Basically the complexity of
// the algorithm should be lease than O(n2)
// Example 1:
// Input: [169,145,225,211,121,183,100,111,196,214,275]
// Output: [100,121,169,196,225]

function findSquare(arr) {
    function isPerfectSquare(num) {
        const sqrt = Math.sqrt(num);
        return sqrt === Math.floor(sqrt);
    }

    let squares = arr.filter(isPerfectSquare);
    
    squares.sort((a, b) => a - b);

    return squares;
}

console.log(findSquare([169,145,225,211,121,183,100,111,196,214,275]));
