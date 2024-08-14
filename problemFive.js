
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
