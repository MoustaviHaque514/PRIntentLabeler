/**
 * Version de base à installer sur la branche cible avant la démonstration.
 *
 * Bug connu : une remise supérieure au sous-total produit un montant négatif.
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

  return subtotalCents - discountCents;
}
