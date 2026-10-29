---
id: guideline/microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch
type: guideline
title: Post calculated revaluation through the item journal batch
summary: A calculated revaluation line with nonblank "Inventory Value Per" represents an aggregate, not a finalized posting against one item ledger entry. Codeunit "Item Jnl.-Post Batch" distributes that value over eligible entries, handles rounding, and coordinates Item/SKU standard-cost updates.
tier: official
language: en
tags:
  - revaluation
  - inventory-value-per
  - partial-revaluation
  - item-jnl-post-batch
  - item-journal-line
  - runwithcheck
  - standard-cost
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.226Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9730c2dc79e929fc51da607a3e13c3bbae8d59dd
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch.md
    title: "microsoft/BCQuality: Post calculated revaluation through the item journal batch"
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
    - to: object/codeunit/23
      title: codeunit 23 "Item Jnl.-Post Batch"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/83
      title: table 83 "Item Journal Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/22
      title: codeunit 22 "Item Jnl.-Post Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5802
      title: table 5802 "Value Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch.md
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

# Post calculated revaluation through the item journal batch

> A calculated revaluation line with nonblank "Inventory Value Per" represents an aggregate, not a finalized posting against one item ledger entry. Codeunit "Item Jnl.-Post Batch" distributes that value over eligible entries, handles rounding, and coordinates Item/SKU standard-cost updates.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch.md) · microsoft layer · scm · BC all · tier official · derived

## Description

A calculated revaluation line with nonblank `"Inventory Value Per"` represents an aggregate, not a finalized posting against one item ledger entry. Codeunit `"Item Jnl.-Post Batch"` distributes that value over eligible entries, handles rounding, and coordinates Item/SKU standard-cost updates. Calling the line poster directly skips that batch work even though the input is a valid `"Item Journal Line"`.

## Best Practice

Posting a prepared revaluation batch through `"Item Jnl.-Post Batch"` preserves the calculated line's valuation date, aggregation scope, location/variant filters, and revaluation fields. The batch expands summarized values into per-entry postings and checks that the eligible inventory has not changed; for partial revaluation it also rechecks remaining quantity before posting.

The public `"Item Jnl.-Post Line".RunWithCheck` API does not replace that orchestration. It remains legitimate for finalized individual-entry revaluation lines within a workflow that already supplies the necessary checks; the batch itself uses the line poster. Ordinary quantity journals and finalized per-entry revaluations are distinct from this summarized/partial-revaluation case.

The samples explicitly require `"Value Entry Type" = Revaluation` and a nonblank `"Inventory Value Per"` in an existing calculated journal batch. They demonstrate posting, not how to calculate a new valuation or choose a standard cost.

See sample: [`post-revaluation-through-the-item-journal-batch.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch.good.al).

## Anti Pattern

A loop that sends calculated aggregate revaluation lines straight to `"Item Jnl.-Post Line"` skips distribution over the underlying item entries. A partial-revaluation workflow without the remaining-quantity recheck can post a valuation against inventory that no longer matches the calculation.

Directly editing existing `"Value Entry"` cost amounts or the Item's unit cost does not repair those allocation and adjustment relationships. Their correction belongs to the revaluation/cost-adjustment workflow.

See sample: [`post-revaluation-through-the-item-journal-batch.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch.bad.al).

## References

- [Revaluation design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-revaluation)
- [Inventory posting design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-inventory-posting)
- [BaseApp summarized revaluation and remaining-quantity checks](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Posting/ItemJnlPostBatch.Codeunit.al#L510-L714)

## Examples

- [Good: post-revaluation-through-the-item-journal-batch.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch.good.al)
- [Bad: post-revaluation-through-the-item-journal-batch.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-revaluation-through-the-item-journal-batch.bad.al)

## Names

- [codeunit 23 "Item Jnl.-Post Batch"](../../../../objects/codeunit/23.md) (possibly related: a code span names it)
- [table 83 "Item Journal Line"](../../../../objects/table/83.md) (possibly related: a code span names it)
- [codeunit 22 "Item Jnl.-Post Line"](../../../../objects/codeunit/22.md) (possibly related: a code span names it)
- [table 5802 "Value Entry"](../../../../objects/table/5802.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
