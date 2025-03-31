import { add } from './calculator';

describe("String Calculator", () => {
    test("return the sum of multiple numbers", () => {
        expect(add("1,2,3,4")).toBe(10)
    });
})