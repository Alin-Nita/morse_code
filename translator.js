import {
  lettersNumbers
} from "./data";
// break the word/sentence into an array of letters
// with each letter, translate it to morse
// save each letter somehow
// so that we can then .join the array back into a string :) 


// const userInput = document.getElementById('user_input');

// const translate = document.getElementById('translate');

// const output = document.getElementById('translated');



export const translateLetter = (letter) => {
  let convert = lettersNumbers[letter];
  return convert;
};


export const translateWord = (word) => {

  let splittedWord = word.split("");
  let translatedWord = "";
  for (let i = 0; i < splittedWord.length; i++) {
    let translatedLetter = translateLetter(splittedWord[i]);
    translatedWord += translatedLetter;
  };
  return translatedWord
};

// translate.addEventListener("click", () => {
//   output.innerHTML = translateWord(userInput.value)
// });