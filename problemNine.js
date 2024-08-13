/*
9. Longest common Prefix
Write a program to find the longest common prefix among all the input string. So the longest
common prefix in the below example will be “intelli” as all the above strings in the array start
with “intelli”.( Your Program should work for any input, not just the one given in
example)
Example 1:
Input: [“intelliBlue”,”intelliFeeder”,”intelliAuth”]
Output: longest prefix = “intelli”
*/

function findLongestPrefix(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            console.log(prefix);
            prefix = prefix.slice(0, -1);
            console.log(prefix);
            if (prefix === "") {
                return "";
            }
        }
    }
    return prefix;
}

const input = ["intelliBlue", "intelliFeeder", "intelliAuth"];
const result = findLongestPrefix(input);

console.log(result);
