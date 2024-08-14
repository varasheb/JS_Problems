
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

