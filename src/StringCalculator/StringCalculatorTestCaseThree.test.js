import { add } from './calculator';

describe("String Calculator", () => {
    test("return the sum of two numbers", () => {
        expect(add("1,5")).toBe(6)
    });
})