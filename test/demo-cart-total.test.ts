import { describe, expect, it } from "vitest";
import { calculatePayableTotal } from "../demo/bug-review/demo-1/cart-total.js";

describe("calculatePayableTotal — scénario correct de la démo 1", () => {
  it("empêche une remise de produire un total négatif", () => {
    expect(calculatePayableTotal(500, 800)).toBe(0);
  });

  it("conserve le calcul normal et la validation existante", () => {
    expect(calculatePayableTotal(1_000, 250)).toBe(750);
    expect(() => calculatePayableTotal(-1, 0)).toThrow(RangeError);
  });
});
