import { add } from './calculator';

describe("String Calculator", () => {
    test("handles new lines as delimeters", () => {
        expect(add("1\n2,3")).toBe(6)
    });
})