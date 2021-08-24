// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift = 0, encode = true) {
    if (shift === 0 || shift <= -25 || shift >= 25) return false; //Return false early if conditions are not met

    const encryptedArray = [];  //Empty array to store the encrypted message

    const message = input.toLowerCase(); //Convert the message into lower-case.

    if (encode == false) { //This will invert the shift to decode the message
      shift *= -1;
    };

  //An index of alphabets for reference
    let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //This will create a loop in the alphabet where 'a' wil come after 'z' so that the [letterPosition + shift] can go beyond 24
  //This solve the missing letters problem where if [letterPosition + shift] is greater than 24, the letter will be undefined.
    const numberToLetter = [...alphabetArray,...alphabetArray,...alphabetArray];

    for (letter of message) { //Going through individual lower-cased letters in the message.
      const letterPosition = alphabetArray.indexOf(letter); //Translate the message into numbers based on the position of each characters in the alphabet using .indexOf
      if (!alphabetArray.includes(letter)) { //If a letter is not in the alphabet, push it to the empty array.
        encryptedArray.push(letter);
      } else { //Move the numbers that represent each letter into another position based on the value of 'shift'
        encryptedArray.push(numberToLetter[letterPosition + 26 + shift]); //Using the numberToLetter to represent the letters in the alphabet, using [letterPosition + shift] as an index guide for each letter.
      } //The '+26' will default the numberToLetter function to search in the middle alphabetArray. While the first one served as a backward shift overlap and the third one served as a forward shift overlap.
    }


    return encryptedArray.join("");
  }
  return {
    caesar,
  };
})();
caesarModule.caesar("Hello World", 4);

module.exports = { caesar: caesarModule.caesar };
