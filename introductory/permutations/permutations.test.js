const permutations = require("./permutations");

describe("permutations problem", () => {
  test("returns no solution if input is 3", () => {
    const input = 3;
    const output = "No solution";
    expect(permutations(input)).toBe(output);
  });

  test("returns a valid solution if input is 5", () => {
    const input = 5;
    const output = [1, 3, 5, 2, 4];
    expect(permutations(input)).toEqual(output);
  });

  test("returns a valid solution if input is 10", () => {
    const input = 10;
    const output = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
    expect(permutations(input)).toEqual(output);
  });
});
