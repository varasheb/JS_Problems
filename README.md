# JS_Problems
===========================================================
Problem Statement
===========================================================

1. Pair Intersection

Write a function that accepts two pairs of numbers [ a, b ] and [ c, d ] where
each pair represents the range a to b and c to d respectively. The function
upon execution returns another pair [ x, y ] which is the intersection of the
above two pairs.
int [ ] pair_intersection( [ a, b
], [ c, d ] ) {
……..
your code
…….
return [x, y ]
}
Example:
Input:
[ a, b ] = [ 11, 16 ] ( which means [11, 12, 13, 14, 15, 16])
[ c, d ] = [ 14, 21 ] (which means [14, 15, 16, 17, 18, 19, 20, 21]
Output:
[ x, y ] = [ 14, 15, 16 ]
Note:
1. This function should take 2 pairs as its arguments (each pair is an array or
tuple of exactly two numbers)
2. Return element should be a pair (each pair is an array or tuple of exactly two numbers)
3. Function complexity should be linear (should not have loop within a loop)
--------------------------------------------------------------------------------------------------
2. Pyramid Arrangement

Given to you is an unordered / unsorted integer array of size n. Reorder the
array in such a way that the largest number of the array is in the middle
index of the array and the remaining numbers which are lesser than or equal
to the previous element should be arranged in descending order as we move
to the edges of the array ((0, n-1) index).
Note that as we move to the edges of the array, you will need to arrange
the elements in the descending order starting from the middle index.
You have to place the next largest after the largest element (the middle
element) on either side of the middle element.
If n is even, you can consider either of the n/2-1'^ or n/2t^ index as
your middle element and place the largest element in either of those
indexes and move towards edges from there.
Do in-place rearrangement of the elements. Do not use another/extra
array. At max use one or two non-loop variables. Programs not
following this rule will not be considered.
Example:
Input:
1, 4, 3, 6, 8, 7, 9, 2, 5, 0, 12, 23, -1
Output:
-1, 1, 3, 5, 7, 9, 23, 12, 8, 6, 4, 2, 0
int [ ] pyramid(int arr[ ], int
n) {
……………..
your code
……………
return arr [ ]
}
-------------------------------------------------------------------------------------------------
3. The vending machine

Write a program to calculate the change returned by a vending machine
when you buy something from it. The coins are numbered by their value in
paise.
[1, 5, 10, 25, 50, 100]
1 being 1 paise & 100 being 100 paise or 1 Rupee.
If a person inserted 5 Rs and bought something worth 2.99 Rs then he would get one 1 paise join
& two 100 paise coins. So the answer will be.
[1, 0,0, 0, 0, 2]
Complete the following function
function getChange(price_of_item. money_given_to_purchase) {
// write code here
// return change
// return [0, 0, 0, 0, 0, 0]
}
-----------------------------------------------------------------------------------------------
4. Time slot calculator

Write a function to calculate available time slots for the purpose of booking an
appointment.I. Given an input which is an array of arrays of existing
appointments, calculate the available time slots for the day. The input will be an
array containing:
[[from_time_1,to_time_1],[from_time_2,to_time_2],[from_time_3,to_time_3
]]
The available time slots start from 0 hours to 24 hours. From and To times are
always integers( not fraction and net floating point).
Input (appointments)
[[10, 12], [14, 15], [16, 20]]
Which means there is an appointment from 10 to 12 & so on.
Outputs (available slots)
[[0, 10],[12, 14], [15, 16], [20, 24]]
Now negating the input from 24 hours, you have four free time slots till the start of next day.
-----------------------------------------------------------------------------------------------
5. Pick Squares

Write a function for picking up the numbers which are squares of positive integers from a given
array and do a sort which is not a brute force sort or a bubble sort. Basically the complexity of
the algorithm should be lease than O(n2)
Example 1:
Input: [169,145,225,211,121,183,100,111,196,214,275]
Output: [100,121,169,196,225]
--------------------------------------------------------------------------------------------
6. Increasing digits Sum

Given an input number N. Print all the numbers which are formed by the combinations of digits
where the sum of all the digits of the equal to the number N (your Input). Also note that the
digits of the number must be in increasing order from left to right.
Note: Exclude zeros as digits in your number.
Example 1: Input N=3
1 1 1
1 2
3
Example 2: Input N=4
1 1 1 1
1 1 2
1 3
2 2
4
----------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
8. Find all n-digit numbers with a given sum of digits

Given two inputs n and sumN, where n<9, find all n digit numbers where the sum of their digits
is equal to sumN
Example : n=3 and sum =6
input :3,6
Output: 3-digit numbers with sum 6 are
105 114 123 132 141 150 204 213 222 231 240 303 312 321 330 402 411 420 501 510 600
----------------------------------------------------------------------------------------------
9. Longest common Prefix

Write a program to find the longest common prefix among all the input string. So the longest
common prefix in the below example will be “intelli” as all the above strings in the array start
with “intelli”.( Your Program should work for any input, not just the one given in
example)
Example 1:
Input: [“intelliBlue”,”intelliFeeder”,”intelliAuth”]
Output: longest prefix = “intelli”
----------------------------------------------------------------------------------------------
10. Permutations of a string

Write a program to find all permutations of a given string using recursion.
For Example, given a string “XYZ”, this program will print all 6 possible permutations of
Input : “XYZ”
Output : Array of strings [“XYZ”,”XZY”,”ZYX”,”ZXY”,”YXZ”,”YZX”]
----------------------------------------------------------------------------------------------
11. Reverse Polish Notation (PostFix)

Write a function to calculate reverse polish notations or postfix notation. In reverse Polish
notation, the operators follow their operands; for instance, to add 3 and 4 together, one would
write 3 4 + rather than 3 + 4. If there are multiple operations, operators are given immediately
after their second operands, so the expression written 3 - 4+5 in conventional notation would be
written 3 4 - 5 + in reverse polish notation.
Note : You can consider only simple binary operators(+,-,*,/) for this question and no
parenthesis and functions in your input
3 4 + means 4+4
3 5 + 7 2 means (3+5)*(7-2)
3 4 + 5 * means (3+4)* 5
Function calculateRPN(exp){
—------------
—----------
}
-------------------------------------------------------------------------------------------------
12. Rotating Cipher

ROTN is a very basic letter substitution cipher. Each letter in the string is replaced by a letter
that is N positions further ahead in the alphabet. If the cipher has reached the end of the
alphabet before it moves N positions, it restarts from the beginning alphabet of that
respective case (lowercase or uppercase) continuing from where it left off.
For example, if you have reached it continues the rotation from 'a' from where the rotation left
off. If you have reached '1 it continues the rotation from 'A' from where the rotation left off.
For example, For N = 13, if you have completed 5 rotation steps by the time you reached 'z',
then the remaining 8 steps should be completed starting from 'a'. It applies the same logic for
uppercase 2' and 'A'.
Note: 
1. Special characters, Whitespaces and Numbers are allowed in the input string but they
should remain unchanged.
2. The return string should preserve the original case (upper or lower). That is while rotating
the lowercase should not become upper case.
This is a special case of the Caesar cipher which was developed in ancient Rome. Because there
are 26 letters in the basic Latin alphabet, the same algorithm that is used for encoding can be
used for decoding.
Your task is to write a function in either C / Java / Javascript / Python called rotn which
implements the ROTN cipher. The function takes a string literal and the rotation offset as
its arguments and returns the ciphered string. Read the coding general instructions 5, 6, 7,
8, 9 carefully before writing the code.
Examples C Function Signature
Input: "Lorem ipsum"
Output: "Yberz vcfhz"
Input: "test"
Output: "grfg"
Input: "TesT"
Output: "GrfG"
char* rotl 3( char* input_str, unsigned offset )
{
/* your code */
return cipher_str;
}
--------------------------------------------------------------------------------------------
13. Convert Binary Search Tree to Linked List in Ascending order

Given any Binary Search Tree with a pointer to the root node and a given node structure.
Write a function in either C / Java / Javascript / Python to convert the Binary Search Tree to
Linked List in such a way that the values of the linked list nodes are arranged in ascending
order. Consider the structure of each node as below.
struct tree_node{
struct val;
struct node* left_child;
struct node* right_child;
}
struct list_node{
struct node* val;
struct node* next;
}
Your function signature:
struct list_node* convert_to_linked_list(struct tree_node* bst){
—---
return list_head;
—---
}