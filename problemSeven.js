
function permute(array) {
    let result = [];
    
    function generatePermutations(arr, memo = []) {  //[1,5,9]
        if (arr.length === 0) {
            result.push(memo);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let current = arr.slice(); 
                let next = current.splice(i, 1);
                generatePermutations(current.slice(), memo.concat(next));
            }
        }
    }
    
    generatePermutations(array);
    return result;
}

function permuteMatrixDiagonals(N, matrix) {
    const getMainDiagonal = (matrix) => {
        let diagonal = [];
        for (let i = 0; i < N; i++) {
            diagonal.push(matrix[i * N + i]);//1,5,9
        }
        return diagonal;
    };

    const getAntiDiagonal = (matrix) => {
        let diagonal = [];
        for (let i = 0; i < N; i++) {
            diagonal.push(matrix[i * N + (N - 1 - i)]);// 3,5,7
        }
        return diagonal;
    };

    const setMainDiagonal = (matrix, diagonal) => {
        let newMatrix = [...matrix];
        for (let i = 0; i < N; i++) {
            newMatrix[i * N + i] = diagonal[i];
        }
        return newMatrix;
    };

    const setAntiDiagonal = (matrix, diagonal) => {
        let newMatrix = [...matrix];
        for (let i = 0; i < N; i++) {
            newMatrix[i * N + (N - 1 - i)] = diagonal[i];
        }
        return newMatrix;
    };

    let results = [];

    // Permute main diagonal
    let mainDiagonal = getMainDiagonal(matrix);
    let mainPermutations = permute(mainDiagonal);
    mainPermutations.forEach(diagonal => {
        results.push(setMainDiagonal(matrix, diagonal));
    });
        results.push(["Anti-Diagonal"])

    // Permute anti-diagonal
    let antiDiagonal = getAntiDiagonal(matrix);
    let antiPermutations = permute(antiDiagonal);
    antiPermutations.forEach(diagonal => {
        results.push(setAntiDiagonal(matrix, diagonal));
    });

    return results;
}
//
const N = 3;
const matrix = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];

const permutedMatrices = permuteMatrixDiagonals(N, matrix);
permutedMatrices.forEach(mat => {
    console.log(mat.join(','));
});
