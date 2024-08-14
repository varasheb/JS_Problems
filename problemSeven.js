/*
7. Permute the diagonal of the square matrix
Given a NxN square matrix of integers where N is positive. Create new matrices by rearranging
the elements of the diagonal of the square matrix in all positive permutations (of the diagonal
elements). The program can permute either one of the top-left to bottom-right or top-right to
bottom-left diagonal. First take the input N and then take the input for the NxN matrix in row
major order.
Const int N=3
myFunction(int arr[]N){
—-------
Your code
—------
return (array of NxN matrix
}
Input:
1,2,3,4,5,6,7,8,9
Output:
1,2,3,4,5,6,7,8,9
1,2,3,4,9,6,7,8,5
5,2,3,4,1,6,7,8,9
5,2,3,4,9,6,7,8,1
9,2,3,4,1,6,7,8,5
9,2,3,4,5,6,7,8,1
Hint:(below are the permutation of the diagonal elements of matrix where n=3)
Top-left to bottom-right
1,5,9
1,9,5
5,9,1
5,1,9
9,1,5
9,5,1
Top-right to bottom-left
3,5,7
3,7,5
5,7,3
5,3,7
7,3,5
7,5,3 
*/

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
