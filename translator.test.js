//WE NEED TO WRITE SOME TEST TO TRANSLATE
//MORSE CODE PROJECT

import {
  translateLetter,
  translateWord
} from "./translator.js";

import {
  it,
  expect
}
from '@jest/globals';

// make user's input lowercase to match the keys inside the object where all the values are stored

it("should translate sos to ...---...", () => {
  const result = translateWord("sos");
  expect(result).toBe("...---...");
});

it("should translate bye to -...-.--.", () => {
  const result = translateWord("bye");
  expect(result).toBe("-...-.--.");
});

it("should translate red to .-..-..", () => {
  const result = translateWord("red");
  expect(result).toBe(".-..-..");
});

it("should translate help to ......-...--.", () => {
  const result = translateWord("help");
  expect(result).toBe("......-...--.");
});

it("should translate j to .---", () => {
  const result = translateLetter("j");
  expect(result).toBe(".---");
});