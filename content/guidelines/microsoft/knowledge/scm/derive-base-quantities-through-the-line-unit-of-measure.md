---
id: guideline/microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure
type: guideline
title: Derive base quantities through the line's unit of measure
summary: Inventory, item ledger entries, reservations, item tracking, and warehouse quantities are measured in the item's base unit of measure. Document and journal lines hold Quantity in the line's "Unit of Measure Code", together with "Qty.
tier: official
language: en
tags:
  - quantity-base
  - qty-per-unit-of-measure
  - unit-of-measure-code
  - unit-of-measure-management
  - calcbaseqty
  - getqtyperunitofmeasure
  - qty-rounding-precision
  - item-journal-line
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:51.918Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3f3d3a0ffcf2f5c4f5c07fecee90d3a30f93f90b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure.md
    title: "microsoft/BCQuality: Derive base quantities through the line's unit of measure"
    date: "2026-09-29"
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
    - change/bcquality/196
repo_path: microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure.md
layer: microsoft
kind: rule
domain: scm
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
  - CalcBaseQty
  - CalcQtyFromBase
---

# Derive base quantities through the line's unit of measure

> Inventory, item ledger entries, reservations, item tracking, and warehouse quantities are measured in the item's base unit of measure. Document and journal lines hold Quantity in the line's "Unit of Measure Code", together with "Qty.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure.md) · microsoft layer · scm · BC all · tier official · derived

## Description

Inventory, item ledger entries, reservations, item tracking, and warehouse quantities are measured in the item's base unit of measure. Document and journal lines hold `Quantity` in the line's `"Unit of Measure Code"`, together with `"Qty. per Unit of Measure"` and base-unit fields such as `"Quantity (Base)"`. Ten boxes of twelve pieces are 120 base units, not 10. When a line's `Quantity` is validated, the table derives the base quantity through its `CalcBaseQty` procedure. That procedure calls `"Unit of Measure Management".CalcBaseQty` with the line's quantity rounding precision and raises an error when rounding would turn a non-zero quantity into a zero base quantity. Code that bypasses this conversion creates a line whose quantity and base quantity disagree, or makes a stock decision in the wrong unit.

## Best Practice

On a document or journal line, validate `"Unit of Measure Code"` before `Quantity`, and validate both. Validating the unit of measure sets `"Qty. per Unit of Measure"` from the item unit of measure; validating the quantity then fills the base fields with the correct rounding. Compare line quantities with inventory or availability in base units, for example `"Quantity (Base)"` or `"Outstanding Qty. (Base)"`.

Outside a line, get the factor with `"Unit of Measure Management".GetQtyPerUnitOfMeasure(Item, UnitOfMeasureCode)` and convert with its `CalcBaseQty` or `CalcQtyFromBase` procedures instead of multiplying by hand. Pass the item unit's quantity rounding precision where the available overload accepts it.

Reading these fields for display, reporting, or a temporary buffer that is never posted is not a conversion defect. Code that proves the line uses the base unit of measure (`"Qty. per Unit of Measure"` equal to 1) is also correct, but don't assume this from the item alone, because a line can use another unit.

See sample: [`derive-base-quantities-through-the-line-unit-of-measure.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure.good.al).

## Anti Pattern

Assigning `Quantity` directly on an item journal, sales, purchase, or transfer line and then inserting, modifying, or posting it. Also assigning a base field such as `"Quantity (Base)" := Quantity`, multiplying by a hard-coded or separately looked-up factor without the line's rounding, or comparing a line's `Quantity` with `Item.Inventory` or another base-unit value. Detection signal: a direct `:=` to `Quantity`, `"Qty. per Unit of Measure"`, or a `(Base)` quantity field on a persisted or posted line, or a comparison between a non-base line quantity and an inventory quantity.

See sample: [`derive-base-quantities-through-the-line-unit-of-measure.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure.bad.al).

## References

- [Set up units of measure, including quantity rounding precision](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-setup-units-of-measure)
- [BCApps: Unit of Measure Management conversions](https://github.com/microsoft/BCApps/blob/4abbb8ff848cdcb4e1187fc7a3e2da0612dd0d2b/src/Layers/W1/BaseApp/Foundation/UOM/UnitofMeasureManagement.Codeunit.al)
- [BCApps: Item Journal Line quantity validation and CalcBaseQty](https://github.com/microsoft/BCApps/blob/4abbb8ff848cdcb4e1187fc7a3e2da0612dd0d2b/src/Layers/W1/BaseApp/Inventory/Journal/ItemJournalLine.Table.al)
- [BCApps: Sales Line quantity validation and CalcBaseQty](https://github.com/microsoft/BCApps/blob/4abbb8ff848cdcb4e1187fc7a3e2da0612dd0d2b/src/Layers/W1/BaseApp/Sales/Document/SalesLine.Table.al)

## Examples

- [Good: derive-base-quantities-through-the-line-unit-of-measure.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure.good.al)
- [Bad: derive-base-quantities-through-the-line-unit-of-measure.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/derive-base-quantities-through-the-line-unit-of-measure.bad.al)

## Changed by

- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
