//WE NEED TO WRITE SOME TEST TO TRANSLATE
//FRENCH TO ENGLISH
import {
  translate
} from "./translator.js";
import {
  it,
  expect
}
from '@jest/globals';
//should translate hello to bonjour(english to french)

it("should translate bonjour to hello", () => {
  const result = translate("bonjour");
  expect(result).toBe("hello");
});

//translate je m'appelle to my name is(french to english)

it("should translate je m'appelle to my name is", () => {
  const result = translate("je m'appelle");
  expect(result).toBe("my name is");
});

//translate qui to yes
it("should translate qui to yes", () => {
  const result = translate("qui");
  expect(result).toBe("yes");
});
//translate non to no
it("should translate non to no", () => {
  const result = translate("non");
  expect(result).toBe("no");
});

// a .-
// translate ! to unavailable
// . to ??