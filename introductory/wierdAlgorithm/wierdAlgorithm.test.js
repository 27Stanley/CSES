const wierdAlgorithm = require("./wierdAlgorithm");

describe("wierdAlgorithm", () => {
  test("return 1 when input is 2", () => {
    const input = 2;
    const output = 1;
    expect(wierdAlgorithm(input)).toBe(output);
  });

  test("return 1 when input is 3", () => {
    const input = 3;
    const output = 1;
    expect(wierdAlgorithm(input)).toBe(output);
  });
  test("return 1 when input is 2 digit number", () => {
    const input = 25;
    const output = 1;
    expect(wierdAlgorithm(input)).toBe(output);
  });
  test("return 1 when input is 3 digit number", () => {
    const input = 252;
    const output = 1;
    expect(wierdAlgorithm(input)).toBe(output);
  });
});
