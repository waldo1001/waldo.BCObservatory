---
id: guideline/microsoft/knowledge/scm/change-item-applications-through-posting-routines
type: guideline
title: Change item applications through posting routines
summary: An "Item Application Entry" connects quantity application to cost flow; changing its inbound entry number is not merely fixing a foreign key. Unapplication/reapplication also affects ledger remaining quantities, open states, valuation, and entries needing cost adjustment.
tier: official
language: en
tags:
  - item-application-entry
  - inbound-item-entry-no
  - unapply
  - reapply
  - redoapplications
  - costadjust
  - application-worksheet
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.034Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5b5443e56b47ace35bf8284689777723e358fcfe
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/change-item-applications-through-posting-routines.md
    title: "microsoft/BCQuality: Change item applications through posting routines"
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
    - to: object/table/339
      title: table 339 "Item Application Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/22
      title: codeunit 22 "Item Jnl.-Post Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/change-item-applications-through-posting-routines.md
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
  - UnApply
  - ReApply
  - RedoApplications
  - CostAdjust
  - ClearApplicationLog
---

# Change item applications through posting routines

> An "Item Application Entry" connects quantity application to cost flow; changing its inbound entry number is not merely fixing a foreign key. Unapplication/reapplication also affects ledger remaining quantities, open states, valuation, and entries needing cost adjustment.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/change-item-applications-through-posting-routines.md) · microsoft layer · scm · BC all · tier official · derived

## Description

An `"Item Application Entry"` connects quantity application to cost flow; changing its inbound entry number is not merely fixing a foreign key. Unapplication/reapplication also affects ledger remaining quantities, open states, valuation, and entries needing cost adjustment. Direct edits can leave a plausible application row attached to inconsistent inventory and costs.

## Best Practice

The Application Worksheet provides the interactive correction workflow. A narrowly controlled programmatic correction of an ordinary quantity application uses the same `"Item Jnl.-Post Line"` instance for `UnApply`, a reload of the affected outbound item entry, and `ReApply` to the compatible inbound entry. Its finalization lifecycle includes `RedoApplications`, `CostAdjust`, and `ClearApplicationLog`.

The posting routines enforce inventory-period, correction, transfer, and drop-shipment restrictions. Entries with `"Transferred-from Entry No."`, outbound transfers, and special application types are outside the ordinary-sales sample's scope. Application-check bypasses remove those protections, and the worksheet's multi-step recovery flags belong to its UI lifecycle rather than a standalone transaction.

`CostAdjust` honors automatic-cost-adjustment setup; calling it does not mean all costs are settled when adjustment is disabled or deferred. Scheduled/manual adjustment remains necessary in those configurations. Temporary application projections, extension metadata, and source-document reservation/order-tracking changes are not edits to the persistent item-application graph.

See sample: [`change-item-applications-through-posting-routines.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/change-item-applications-through-posting-routines.good.al).

## Anti Pattern

Independent `Modify`, `Delete`, or replacement `Insert` operations on persistent `"Item Application Entry"` rows can repoint a receipt/shipment application without updating remaining quantities or cost propagation. Valid item numbers, matching quantities, and running table triggers do not complete reapplication.

Omitting finalization or committing between unapply and reapply exposes an incomplete replacement. The standard posting/application workflow's internal table writes differ because they participate in that lifecycle.

See sample: [`change-item-applications-through-posting-routines.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/change-item-applications-through-posting-routines.bad.al).

## References

- [Item application design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-item-application)
- [Cost adjustment design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-cost-adjustment)
- [BaseApp application finalization sequence](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Ledger/ApplicationWorksheet.Page.al#L495-L503)
- [BaseApp reapplication and cost-adjustment lifecycle](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Posting/ItemJnlPostLine.Codeunit.al#L5464-L5538)

## Examples

- [Good: change-item-applications-through-posting-routines.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/change-item-applications-through-posting-routines.good.al)
- [Bad: change-item-applications-through-posting-routines.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/change-item-applications-through-posting-routines.bad.al)

## Names

- [table 339 "Item Application Entry"](../../../../objects/table/339.md) (possibly related: a code span names it)
- [codeunit 22 "Item Jnl.-Post Line"](../../../../objects/codeunit/22.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
