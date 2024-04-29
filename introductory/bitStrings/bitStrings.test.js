const bitStrings = require("./bitStrings");

describe("bitstrings problem", () => {
  test("test case when n = 3", () => {
    const input = 3;
    const output = 8;
    expect(bitStrings(input)).toBe(output);
  });

  test("test case when n = 30", () => {
    const input = 30;
    const output = 1073741824;
    expect(bitStrings(input)).toBe(output);
  });
});
