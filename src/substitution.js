// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  function substitution(input, alphabet, encode = true) {
    //Conditional check section
    if (!alphabet || alphabet.length !== 26) return false;
    for (char of alphabet) {
      if(alphabet.indexOf(char) !== alphabet.lastIndexOf(char)) return false; //Example alphabet.indexOf(x) = 0, alphabet.lastIndexOf(x) = 2, since 0 != 2, therefore false.
    }
    //Preparing section
    message = input.toLowerCase();
    const result = [];
    const originalAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const codedAlphabet = []; //>['x', 'o', 'y', 'q', 'm', 'c', 'g', 'r', 'u', 'k', 's', 'w', 'a', 'f', 'l', 'n', 't', 'h', 'd', 'j', 'p', 'z', 'i', 'b', 'e', 'v']
    for (let i = 0; i < alphabet.length; i++) {
      codedAlphabet.push(alphabet[i]);
    }
    //Encode section
    if (encode == true) {
      for (letter of message) {
        const letterPosition = originalAlphabet.indexOf(letter);
        if (!originalAlphabet.includes(letter)) {
          result.push(letter);
        } else {
          result.push(codedAlphabet[letterPosition]);
        }
      }
      return result.join("");
      //Decode section
    } else if (!encode) {
      for (char of input) { //input will be "jrufscpw" in the coded alphabet
        const charPosition = codedAlphabet.indexOf(char);
        if (!codedAlphabet.includes(char)) {
          result.push(char);
        } else {
          result.push(originalAlphabet[charPosition]);
        }
      }
      return result.join("");
    }
  }

  return {
    substitution,
  };
})();
//substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
module.exports = { substitution: substitutionModule.substitution };
