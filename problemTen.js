/**
 * 
 * 10. Permutations of a string
Write a program to find all permutations of a given string using recursion.
For Example, given a string “XYZ”, this program will print all 6 possible permutations of
Input : “XYZ”
Output : Array of strings [“XYZ”,”XZY”,”ZYX”,”ZXY”,”YXZ”,”YZX”]

 */


function getPermutations(str) {
    function permute(s) {
        if (s.length <= 1) return [s];
        
        let result = [];
        for (let i = 0; i < s.length; i++) {
            let currentChar = s[i];
            let remainingChars = s.slice(0, i) + s.slice(i + 1);
            let remainingPermutation = permute(remainingChars);
            
            for (let permutation of remainingPermutation) {
                result.push(currentChar + permutation);
            }
        }
        return result;
    }
    
    return permute(str);
}

console.log(getPermutations("XYZ"));
