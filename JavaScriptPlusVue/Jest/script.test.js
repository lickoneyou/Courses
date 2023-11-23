const mult = require("./script");

describe("test mult fn", () => {
  test("2 * 2 = 4", () => {
    expect(mult(2, 2)).toBe(4);
  });
  test("none parms", () => {
    expect(mult()).toBe(0);
  });
  test("type return", () => {
    expect(typeof mult(3, 3)).toBe("number");
  });
  test("'a' not a number", () => {
    expect(mult("qwer", 3)).toBe("use number");
  });
  test("'b' not a number", () => {
    expect(mult(3, "qwer")).toBe("use number");
  });
});
