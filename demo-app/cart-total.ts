/**
 * Calcule le montant final en cents.
 *
 * La valeur du panier est bornée avant l'application de la remise.
 */
export function calculatePayableTotal(
  subtotalCents: number,
  discountCents: number,
): number {
  if (
    !Number.isInteger(subtotalCents) ||
    !Number.isInteger(discountCents) ||
    subtotalCents < 0 ||
    discountCents < 0
  ) {
    throw new RangeError("Les montants doivent être des entiers positifs.");
  }

  return Math.max(0, subtotalCents) - discountCents;
}
