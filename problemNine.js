
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
