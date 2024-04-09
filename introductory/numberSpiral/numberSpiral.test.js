const numberSpiral = require("./numberSpiral");

describe("number spiral problem", () => {
  test("if x and y are equal", () => {
    const inputRow = 5;
    const inputCol = 5;
    const output = 21;
    expect(numberSpiral(inputRow, inputCol)).toBe(output);
  });

  test("if x > y and x is odd", () => {
    const inputRow = 5;
    const inputCol = 4;
    const output = 20;
    expect(numberSpiral(inputRow, inputCol)).toBe(output);
  });

  test("if x > y and x is even", () => {
    const inputRow = 4;
    const inputCol = 3;
    const output = 14;
    expect(numberSpiral(inputRow, inputCol)).toBe(output);
  });
  test("if y > x and y is even", () => {
    const inputRow = 3;
    const inputCol = 4;
    const output = 12;
    expect(numberSpiral(inputRow, inputCol)).toBe(output);
  });
  test("if y > x and y is odd", () => {
    const inputRow = 3;
    const inputCol = 5;
    const output = 23;
    expect(numberSpiral(inputRow, inputCol)).toBe(output);
  });
  test("if x and y are 1", () => {
    const inputRow = 1;
    const inputCol = 1;
    const output = 1;
    expect(numberSpiral(inputRow, inputCol)).toBe(output);
  });
});
