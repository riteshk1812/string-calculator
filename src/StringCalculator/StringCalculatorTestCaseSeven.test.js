import { add } from './calculator';

describe("String Calculator", () => {
    test("throws an error for negative numbers", () => {
        expect(() => add("1,-2,3,-4")).toThrow("Negative numbers are not allowed -2,-4");
    });
})