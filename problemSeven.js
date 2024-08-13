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



1 2 3
4 9 6
7 8 5
*/



