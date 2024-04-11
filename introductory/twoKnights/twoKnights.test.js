const twoKnights = require("./twoKnights");

describe("two Knights problem", () => {
  test("for n = 1, return 0", () => {
    const input = 1;
    const output = [0];
    expect(twoKnights(input)).toEqual(output);
  });
});
