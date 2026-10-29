---
id: guideline/microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision
type: guideline
title: Code that calculates a unit price rounds it to the currency's Unit-Amount Rounding Precision
summary: Business Central rounds a unit price only where its own code computes one, above all in the standard price calculation. Price Calculation Buffer Mgt.
tier: official
language: en
tags:
  - unit-price
  - direct-unit-cost
  - rounding
  - unit-amount-rounding-precision
  - currency
  - price-calculation
  - ishandled
  - onupdateunitpriceonbeforefindprice
  - line-amount
  - e-invoicing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:26.099Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ca52f518d7f9b9922486ef85f408a457e5843ac2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision.md
    title: "microsoft/BCQuality: Code that calculates a unit price rounds it to the currency's Unit-Amount Rounding Precision"
    date: "2026-10-19"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/223
  related:
    - to: object/codeunit/7008
      title: codeunit 7008 "Price Calculation Buffer Mgt."
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision.md
layer: microsoft
kind: rule
domain: data-modeling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - RoundPrice
  - OnValidate
  - DecimalPlaces
  - AutoFormatType
  - UpdateAmounts
  - OnUpdateUnitPriceOnBeforeFindPrice
  - OnUpdateDirectUnitCostOnBeforeFindPrice
  - CalcUnitPriceUsingUOMCoef
  - OnUpdateUnitPriceByFieldOnAfterFindPrice
  - ExchangeAmtLCYToFCY
  - ExchangeAmtFCYToLCY
  - CalcUnitAmountRoundingPrecision
  - ConvertAmount
  - UpdateUnitPriceByField
  - UpdateDirectUnitCostByField
  - InitRoundingPrecision
---

# Code that calculates a unit price rounds it to the currency's Unit-Amount Rounding Precision

> Business Central rounds a unit price only where its own code computes one, above all in the standard price calculation. Price Calculation Buffer Mgt.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision.md) · microsoft layer · data-modeling · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Business Central rounds a unit price only where its own code computes one, above all in the standard price calculation. `Price Calculation Buffer Mgt.` converts a price list amount by tax, unit of measure, and currency, then calls `RoundPrice`, which rounds to the currency's `Unit-Amount Rounding Precision`, or to the one in `General Ledger Setup` when the currency code is blank. Assigning or validating the field does not round it. The `OnValidate` of `Sales Line`."Unit Price" and `Purchase Line`."Direct Unit Cost" only re-validates `Line Discount %`. `DecimalPlaces` and `AutoFormatType` format the value for display but do not round a value that code assigns or validates. A computed price is therefore stored with every decimal it has.

The line amount is rounded: `UpdateAmounts` computes `Round(Quantity * "Unit Price", Currency."Amount Rounding Precision")`. Say a stored price of 49.7536 is displayed as 49.75. Four units then give a line amount of 199.01, while the printed document implies 4 × 49.75 = 199.00. Business Central reports no error. The difference shows up at the receiver, in an e-invoice validator, a customs declaration, or an EDI partner that recomputes quantity × price.

The widest gap is a subscriber that takes over the price lookup: `Sales Line`'s `OnUpdateUnitPriceOnBeforeFindPrice` or `Purchase Line`'s `OnUpdateDirectUnitCostOnBeforeFindPrice` with `IsHandled := true`. This skips the price calculation and its rounding together. The subscriber takes over the guarantees of the calculation it replaces (compare `events/do-not-bypass-critical-operations-with-ishandled`, which looks at the same pattern from the publisher's side). Microsoft Learn says a currency's unit-amount precision rounds "all unit amounts in the currency". That describes the standard calculation and does not cover a price that code sets.

**Not affected:**
- A value copied unchanged from a field that is already rounded, for example another document line. BaseApp copies a blanket order line's price this way.
- A price taken unchanged from an authoritative external document, such as an EDI order or a vendor invoice with four decimals. Rounding it would change the agreed price, so keep it and make the document layout show the full precision. An exact change of representation, such as minor currency units divided by 100, stays in this category.
- BaseApp's `CalcUnitPriceUsingUOMCoef`. For a credit memo copied from a posted invoice, it rescales the invoiced price to another unit of measure without rounding, to reproduce the posted price.
- A price returned by the standard price calculation.

## Best Practice

Round once, at the end, after every factor: markup, customer factor, unit of measure, and currency conversion. Use the precision of the document's currency. `Currency.Initialize(SalesHeader."Currency Code")` loads the currency, and for a blank code it takes the precisions from `General Ledger Setup`. Then assign `Round(Price, Currency."Unit-Amount Rounding Precision")`. Rounding intermediate results adds rounding error. BaseApp follows the same rule when it computes a price itself: the `Prices Including VAT` conversion on `Sales Header` and the `Unit Cost` conversion on `Sales Line` both round to `Unit-Amount Rounding Precision`.

Prefer adjusting the standard result to replacing it. Let the price calculation run, change its price in `OnUpdateUnitPriceByFieldOnAfterFindPrice`, and round the adjusted value. BaseApp validates `Unit Price` after that event. A subscriber that must set `IsHandled := true` rounds the price before it assigns it. It also skips the standard conversion to the header's VAT basis, so it either limits itself to documents without `Prices Including VAT` and leaves those to the standard calculation, as the sample does, or converts the price to the header's basis before the single final `Round` (see `data-modeling/document-line-prices-follow-prices-including-vat`).

See sample: [`round-calculated-unit-prices-to-unit-amount-precision.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision.good.al).

## Anti Pattern

These shapes are the anti-pattern:
- Assigning or validating `Unit Price` or `Direct Unit Cost` with a value computed by `*`, `/`, `ExchangeAmtLCYToFCY`, or `ExchangeAmtFCYToLCY`, without a `Round` to the unit-amount precision of the line's currency.
- An `OnUpdateUnitPriceOnBeforeFindPrice` or `OnUpdateDirectUnitCostOnBeforeFindPrice` subscriber that sets `IsHandled := true` and assigns a price that is not rounded. This includes a price copied from a custom price table whose stored values are not rounded.

A hardcoded precision such as `Round(Price, 0.01)` is wrong for a currency whose unit-amount precision differs.

Do not report the cases listed under **Not affected**. Do not report code that already rounds the final price to `Unit-Amount Rounding Precision`.

See sample: [`round-calculated-unit-prices-to-unit-amount-precision.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision.bad.al).

## References

- [BCApps: `Price Calculation Buffer Mgt.` `CalcUnitAmountRoundingPrecision`, `RoundPrice`, `ConvertAmount`](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculationBufferMgt.Codeunit.al#L109-L169).
- [BCApps: `Sales Line` field 22 `Unit Price` `OnValidate`](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesLine.Table.al#L933-L950), [`UpdateUnitPriceByField`](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesLine.Table.al#L5328-L5380), [`UpdateAmounts` line amount](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesLine.Table.al#L5884), [`Unit Cost` rounding](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesLine.Table.al#L993-L1003), [`CalcUnitPriceUsingUOMCoef`](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesLine.Table.al#L11043-L11055).
- [BCApps: `Purchase Line` field 22 `Direct Unit Cost` `OnValidate`](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Purchases/Document/PurchaseLine.Table.al#L785-L801), [`UpdateDirectUnitCostByField`](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Purchases/Document/PurchaseLine.Table.al#L5242-L5304).
- [BCApps: `Sales Header` `Prices Including VAT` conversion rounds the price](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesHeader.Table.al#L1054-L1055).
- [BCApps: `Currency.Initialize` and `InitRoundingPrecision`](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Finance/Currency/Currency.Table.al#L1237-L1257).
- [Set up currencies: unit-amount rounding](https://learn.microsoft.com/dynamics365/business-central/finance-set-up-currencies#unit-amount-rounding): "The unit-amount rounding feature is used automatically every time you enter an item or resource number on a sales line."
- [DecimalPlaces property](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-decimalplaces-property): "This setting is evaluated on text boxes and fields during validation."

## Examples

- [Good: round-calculated-unit-prices-to-unit-amount-precision.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision.good.al)
- [Bad: round-calculated-unit-prices-to-unit-amount-precision.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-calculated-unit-prices-to-unit-amount-precision.bad.al)

## Names

- [codeunit 7008 "Price Calculation Buffer Mgt."](../../../../objects/codeunit/7008.md) (possibly related: a code span names it)

## Changed by

- [#223 knowledge(data-modeling): code that calculates a unit price rounds it to the currency's Unit-Amount Rounding Precision](../../../../changes/bcquality/223.md), 2026-10-19

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
