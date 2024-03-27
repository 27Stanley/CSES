const missingNumber = require("./missingNumber");

describe("missingNumber problem", () => {
  test("return missing number from array", () => {
    const input1 = 5;
    const input2 = [1, 2, 3, 5];
    const output = 4;
    expect(missingNumber(input1, input2)).toBe(output);
  });
});
