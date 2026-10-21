import { describe, expect, it } from "vitest";
import { calculatePayableTotal } from "./cart-total.js";

describe("calculatePayableTotal", () => {
  it("soustrait une remise normale", () => {
    expect(calculatePayableTotal(10_00, 2_50)).toBe(7_50);
  });

  it("rejette les montants négatifs", () => {
    expect(() => calculatePayableTotal(-1, 0)).toThrow(RangeError);
    expect(() => calculatePayableTotal(100, -1)).toThrow(RangeError);
  });
});
