import { describe, expect, it } from "vitest";
import { add2Nums } from "./index.js";

describe("add2Nums", () => {
  it("should return the sum of two numbers", () => {
    expect(add2Nums(2, 3)).toBe(5);
    expect(add2Nums(-1, 5)).toBe(4);
    expect(add2Nums(0, 0)).toBe(0);
  });
});
