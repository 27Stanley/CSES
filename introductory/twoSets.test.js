const twoSets = require("./twoSets");

describe("two Sets problem", () => {
  test("if n = 1, return no", () => {
    const input = 1;
    const output = "NO";
    expect(twoSets(input)).toBe(output);
  });
  test("if n = 5, return no as sum of numbers are odd", () => {
    const input = 5;
    const output = "NO";
    expect(twoSets(input)).toBe(output);
  });
  test("if n = 10, return no as sum of numbers are odd", () => {
    const input = 10;
    const output = "NO";
    expect(twoSets(input)).toBe(output);
  });
  test.only("if n = 4, return yes and show answer lines", () => {
    const input = 4;
    const output = "YES";
    const output2 = (2, [1, 4]);
    const output3 = (2, [3, 2]);
    expect(twoSets(input)).toBe(output);
  });
});
