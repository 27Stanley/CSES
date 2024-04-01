const repetitions = require("./repetitions");

describe("mrepetitions problem", () => {
  test("return integer 1 when input is 'A' ", () => {
    const input = "A";
    const output = 1;
    expect(repetitions(input)).toBe(output);
  });
  test("return integer 1 when input is 'AC'", () => {
    const input = "AC";
    const output = 1;
    expect(repetitions(input).toBe(output));
  });
  test("return integer 1 when input is 'ACTG'", () => {
    const input = "ACTG";
    const output = 1;
    expect(repetitions(input).toBe(output));
  });
  test("return integer 3 when input is 'AAA'", () => {
    const input = "AAA";
    const output = 3;
    expect(repetitions(input).toBe(output));
  });
});
