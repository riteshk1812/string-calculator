import { add } from './calculator';

describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    test("returns the given number for a single number", () => {
        expect(add("1")).toBe(1)
    });

    test("return the sum of two numbers", () => {
        expect(add("1,5")).toBe(6)
    });

    test("return the sum of multiple numbers", () => {
        expect(add("1,2,3,4")).toBe(10)
    });

    test("handles new lines as delimeters", () => {
        expect(add("1\n2,3")).toBe(6)
    });

    test("custom delimeters", () => {
        expect(add("//;\n1;2")).toBe(3)
    });

    test("throws an error for negative numbers", () => {
        expect(() => add("1,-2,3,-4")).toThrow("Negative numbers are not allowed -2,-4");
    });
})