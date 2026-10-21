import { describe, expect, it } from "vitest";
import { calculatePayableTotal } from "./cart-total.js";

describe("calculatePayableTotal — démo 1", () => {
  it("soustrait une remise normale", () => {
    expect(calculatePayableTotal(10_00, 2_50)).toBe(7_50);
  });

  it("borne le total à zéro lorsque la remise dépasse le sous-total", () => {
    expect(calculatePayableTotal(5_00, 8_00)).toBe(0);
  });

  it("accepte une remise égale au sous-total", () => {
    expect(calculatePayableTotal(5_00, 5_00)).toBe(0);
  });

  it("rejette les montants négatifs", () => {
    expect(() => calculatePayableTotal(-1, 0)).toThrow(RangeError);
    expect(() => calculatePayableTotal(100, -1)).toThrow(RangeError);
  });
});
