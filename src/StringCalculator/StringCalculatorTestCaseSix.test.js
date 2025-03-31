import { add } from './calculator';

describe("String Calculator", () => {
    test("custom delimeters", () => {
        expect(add("//;\n1;2")).toBe(3)
    });
})