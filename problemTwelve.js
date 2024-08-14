/**
 * 12.Rotating Cipher
ROTN is a very basic letter substitution cipher. Each letter in the string is replaced by a letter
that is N positions further ahead in the alphabet. If the cipher has reached the end of the
alphabet before it moves N positions, it restarts from the beginning alphabet of that
respective case (lowercase or uppercase) continuing from where it left off.
For example, if you have reached it continues the rotation from 'a' from where the rotation left
off. If you have reached '1 it continues the rotation from 'A' from where the rotation left off.
For example, For N = 13, if you have completed 5 rotation steps by the time you reached 'z',
then the remaining 8 steps should be completed starting from 'a'. It applies the same logic for
uppercase 2' and 'A'.
Note: 1. Special characters, Whitespaces and Numbers are allowed in the input string but they
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
return cipher_str;
}
 */

function rotn(str, offset) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { 
        charCode = ((charCode - 65 + offset) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) { 
        charCode = ((charCode - 97 + offset) % 26) + 97;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }

console.log(rotn('Lorem ipsum',13));
console.log(rotn('test',13));
console.log(rotn('TesT',13));
console.log(rotn('Varshab kanthi',13));

