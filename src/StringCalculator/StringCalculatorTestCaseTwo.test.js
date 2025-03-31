import { add } from "./calculator";

describe("String Calculator for a single number", () => {
    test("returns the given number for a single number", () => {
        expect(add("1")).toBe(1)
    });
})