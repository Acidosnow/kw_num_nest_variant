const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([121, 235, 334]) should be 230", () => {
    expect(lib.avg([121, 235, 334])).toBe(230);
});

test("avg([-200, -122, -157, -49]) should be -132", () => {
    expect(lib.avg([-200, -122, -157, -49])).toBe(-132);
});

test("avg([-200, 200]) should be -132", () => {
    expect(lib.avg([-200, 200])).toBe(0);
});

test("prime(-20) should be -1", () => {
    expect(lib.prime(-20)).toBe(-1);
});

test("prime(0) should be -1", () => {
    expect(lib.prime(0)).toBe(-1);
});

test("prime(1) should be false", () => {
    expect(lib.prime(1)).toBe(false);
});

test("prime(2) should be true", () => {
    expect(lib.prime(2)).toBe(true);
});

test("prime(257) should be false", () => {
    expect(lib.prime(257)).toBe(true);
});

test("factorial(-10) should be -1", () => {
    expect(lib.factorial(-10)).toBe(-1);
});

test("factorial(0) should be 1", () => {
    expect(lib.factorial(0)).toBe(1);
});

test("factorial(10) should be 3628800", () => {
    expect(lib.factorial(10)).toBe(3628800);
});

test("factorial(16) should be -1", () => {
    expect(lib.factorial(16)).toBe(-1);
});