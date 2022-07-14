const translate = require("../src/translate");
describe("translate function", () => {
  test("words that start with vowels… write tests for several different starting vowel a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
});
