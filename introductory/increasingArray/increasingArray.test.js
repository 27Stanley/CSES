const increasingArray = require("./increasingArray");

describe("increasingArray problem", () => {
  test("returns 0 if single element array passed", () => {
    const arraySizeInput = 1;
    const arrayInput = [1];
    const output = 0;
    expect(increasingArray(arraySizeInput, arrayInput)).toBe(output);
  });
  test("returns 0 if increasing two element array passed", () => {
    const arraySizeInput = 2;
    const arrayInput = [1, 2];
    const output = 0;
    expect(increasingArray(arraySizeInput, arrayInput)).toBe(output);
  });
  test("returns 0 if all elements in the array are the same value", () => {
    const arraySizeInput = 2;
    const arrayInput = [2, 2];
    const output = 0;
    expect(increasingArray(arraySizeInput, arrayInput)).toBe(output);
  });
  test("returns correct increment if two element array passed is not increasing", () => {
    const arraySizeInput = 2;
    const arrayInput = [2, 1];
    const output = 1;
    expect(increasingArray(arraySizeInput, arrayInput)).toBe(output);
  });

  test("returns correct increment if three element array passed is not increasing", () => {
    const arraySizeInput = 3;
    const arrayInput = [2, 1, 3];
    const output = 1;
    expect(increasingArray(arraySizeInput, arrayInput)).toBe(output);
  });
  test("returns correct increment if five element array passed is not increasing", () => {
    const arraySizeInput = 5;
    const arrayInput = [2, 1, 1, 3, 5];
    const output = 2;
    expect(increasingArray(arraySizeInput, arrayInput)).toBe(output);
  });
});
