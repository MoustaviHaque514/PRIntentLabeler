# Démonstration 1 — correction valide

Cette démonstration crée une PR réellement classifiable comme `bug`. La branche
cible doit d'abord contenir la version défectueuse; la PR remplace ensuite cette
version par la correction de `demo-1`.

## Configuration

Configurer l'expert Gemini dans `.env` :

```env
GEMINI_REVIEW_API_KEY=votre-cle
GEMINI_REVIEW_MODEL=gemini-3.5-flash-lite
```

Si `.env` contient déjà `GEMINI_API_KEY`, il n'est pas nécessaire de définir
`GEMINI_REVIEW_API_KEY`.

Le dépôt GitHub utilisé pour la démonstration doit posséder un label `bug`.

## 1. Préparer la branche cible

Depuis la branche qui servira de base à la PR :

```powershell
New-Item -ItemType Directory -Force demo-app | Out-Null
Copy-Item demo/bug-review/baseline/cart-total.ts demo-app/cart-total.ts
git add demo-app/cart-total.ts
git commit -m "chore(demo): add cart total baseline"
```

Cette étape installe volontairement le bug : une remise supérieure au
sous-total produit un montant payable négatif.

## 2. Créer la PR correcte

Créer une branche depuis la branche cible préparée :

```powershell
git switch -c demo/bug-fix-correct
Copy-Item demo/bug-review/demo-1/cart-total.ts demo-app/cart-total.ts
Copy-Item demo/bug-review/demo-1/cart-total.test.ts demo-app/cart-total.test.ts
git add demo-app
git commit -m "fix: prevent negative payable cart totals"
```

Titre conseillé :

```text
fix: prevent negative payable cart totals
```

Description conseillée :

```text
When a discount exceeds the cart subtotal, the payable total becomes negative.
This change clamps the payable amount to zero and adds regression coverage for
discounts equal to or greater than the subtotal.
```

## Résultat attendu

1. Le classifieur existant suggère le label `bug`.
2. Le routeur appelle l'expert Gemini spécialisé.
3. Gemini ne retourne aucun constat bloquant.
4. Le commentaire de la section Conversation affiche
   `Verdict : correction validée` et indique qu'aucun changement supplémentaire
   n'est demandé.
