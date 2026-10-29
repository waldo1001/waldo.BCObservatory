---
id: guideline/microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger
type: guideline
title: Reconcile warehouse adjustments with the item ledger
summary: At a Directed Put-away and Pick location, registering an ordinary warehouse quantity or physical-inventory adjustment and synchronizing it to inventory are distinct steps. The warehouse registration balances quantity through the adjustment bin.
tier: official
language: en
tags:
  - warehouse-adjustment
  - calculate-whse-adjustment
  - adjustment-bin-code
  - directed-put-away-and-pick
  - item-journal-line
  - warehouse-entry
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.522Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 06230e7559baf7853e34fa10f90c4401ca4ce06d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger.md
    title: "microsoft/BCQuality: Reconcile warehouse adjustments with the item ledger"
    date: "2026-09-21"
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
    - change/bcquality/192
    - change/bcquality/57
  related:
    - to: object/report/7315
      title: report 7315 "Calculate Whse. Adjustment"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/23
      title: codeunit 23 "Item Jnl.-Post Batch"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger.md
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
identifiers: []
---

# Reconcile warehouse adjustments with the item ledger

> At a Directed Put-away and Pick location, registering an ordinary warehouse quantity or physical-inventory adjustment and synchronizing it to inventory are distinct steps. The warehouse registration balances quantity through the adjustment bin.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger.md) · microsoft layer · scm · BC all · tier official · derived

## Description

At a Directed Put-away and Pick location, registering an ordinary warehouse quantity or physical-inventory adjustment and synchronizing it to inventory are distinct steps. The warehouse registration balances quantity through the adjustment bin. An additional ordinary item-journal increase/decrease is not the same as consuming that pending warehouse adjustment.

## Best Practice

After warehouse registration, `"Calculate Whse. Adjustment"` prepares item-journal lines for the intended item/location and batch; `"Item Jnl.-Post Batch"` posts those lines. The calculation derives the reconciliation by location, variant, units of measure, and tracking, marks the lines `"Warehouse Adjustment"`, and accounts for already prepared unposted adjustments.

Reconciliation is separate from source-document posting: warehouse receipts/shipments use their document workflows. Intentional warehouse-only staging is valid when a separately owned reconciliation step completes the process; registration need not perform both phases in one call.

Bin movements need not change total inventory, and warehouse tracking/expiration reclassification has a standard batch path that can also post item-journal entries. Standard reclassification and basic-location item adjustments are not this ordinary advanced-warehouse quantity-adjustment case.

The samples start after warehouse quantity registration and report whether inventory reconciliation completed. The clean sample calculates and posts into an empty dedicated batch; it is not a complete warehouse physical-count workflow.

See sample: [`reconcile-warehouse-adjustments-with-the-item-ledger.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger.good.al).

## Anti Pattern

A manually mirrored ordinary item-journal line does not reconcile a registered advanced-warehouse quantity adjustment. Likewise, a reconciliation function that returns completion after only registration or adjustment calculation leaves any generated adjustment lines unposted. Calculation prepares journal lines; it does not post them.

Invented positive/negative quantities or flipping `"Warehouse Adjustment"` on an arbitrary line does not establish the required relationship to the adjustment-bin balance and tracked quantities. That relationship comes from the calculation step.

See sample: [`reconcile-warehouse-adjustments-with-the-item-ledger.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger.bad.al).

## References

- [Synchronize adjusted warehouse entries with item ledger entries](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify#to-synchronize-the-adjusted-warehouse-entries-with-the-related-item-ledger-entries)
- [BaseApp warehouse-adjustment calculation](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Warehouse/Journal/CalculateWhseAdjustment.Report.al#L298-L384)
- [Warehouse reclassification exception](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Warehouse/Journal/WhseJnlRegisterBatch.Codeunit.al#L196-L210)

## Examples

- [Good: reconcile-warehouse-adjustments-with-the-item-ledger.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger.good.al)
- [Bad: reconcile-warehouse-adjustments-with-the-item-ledger.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/reconcile-warehouse-adjustments-with-the-item-ledger.bad.al)

## Names

- [report 7315 "Calculate Whse. Adjustment"](../../../../objects/report/7315.md) (possibly related: a code span names it)
- [codeunit 23 "Item Jnl.-Post Batch"](../../../../objects/codeunit/23.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
