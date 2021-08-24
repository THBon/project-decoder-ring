// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    const encryptedChar = ["11","21","31","41","51","12","22","32","42","52","13","23","33","43","53","14","24","34","44","54","15","25","35","45","55","00"]; //length: 25 + space[26]
    const alphabetChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i/j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']; //length: 25 + ' '[26]

    if (encode) { //encode
      const result = [];
      const message = input.toLowerCase();
      for (letter of message) {
        const letterPosition = alphabetChar.indexOf(letter) //Example b = [1] = "21"
        if (letter === "i" || letter === "j") { //if the letter is i and j fix
          result.push(42);
        } else if (!alphabetChar.includes(letter) || letter === " ") { //if the char is not in the alphabet such as "!" or ","
          result.push(letter);
        } else {
          result.push(encryptedChar[letterPosition]); //translating letters to numbers
        }
      }
      return result.join("");
    } else if (!encode) { //decode //Each number need to be a pair, such as "11" or "53". input need to be change to something else.
        const decodeResult = [];
        const decodeInput = input.replace(/ /g,"00"); //Using / /g to replace every single space in the input string with a "00"
        if (decodeInput.length % 2 !== 0) return false; //If the input is still odd after these process, return false.

        for (let i = 0; i < decodeInput.length; i+=2) { //Loop through the number string two step at a time.
          const numberPair = decodeInput[i] + decodeInput[i+1]; //In each step, take the current number and pair it with the next number. Creating a number pair.
          const numberPosition = encryptedChar.indexOf(numberPair); //Using those number pair to find its own index position in custom Char array.
          decodeResult.push(alphabetChar[numberPosition]); //Using those position to fill in the letter that correspond with its position.
        }
        return decodeResult.join("");
    }
  }
  return {
    polybius,
  };
})();
//Current problem: decodeInput only replace the first space it meet.
//using / /g to mark globally
polybiusModule.polybius("3251131343 2543241341", false);
module.exports = { polybius: polybiusModule.polybius };
