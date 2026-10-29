---
id: guideline/microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals
type: guideline
title: Post item ledger changes through item journals
summary: An item ledger entry is not an independently insertable stock balance.
tier: official
language: en
tags:
  - item-ledger-entry
  - value-entry
  - item-journal-line
  - item-jnl-post-line
  - runwithcheck
  - inventory-posting
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.207Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0df6dac25adcb22d2fd40468a8d0f6ec1624aac8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals.md
    title: "microsoft/BCQuality: Post item ledger changes through item journals"
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
    - to: object/table/32
      title: table 32 "Item Ledger Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5802
      title: table 5802 "Value Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals.md
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
  - IsHandled
---

# Post item ledger changes through item journals

> An item ledger entry is not an independently insertable stock balance.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals.md) · microsoft layer · scm · BC all · tier official · derived

## Description

An item ledger entry is not an independently insertable stock balance. Posting connects its quantity to item applications, reservations, tracking, and one or more value entries; expected cost, invoicing, revaluation, and later cost adjustment can produce different value entries for the same item entry. Running a table's insert trigger does not run this posting workflow or its configured inventory-to-G/L integration.

## Best Practice

The posting entry point for a prepared standalone item-journal movement is `"Item Jnl.-Post Line".RunWithCheck`. Persisted journal batches use `"Item Jnl.-Post Batch"`; sales, purchase, transfer, assembly, and production transactions retain their owning document/posting orchestration. Those workflows create the ledger, value, and application records together with their required checks.

Supported posting events enrich validated journal/source data within the owning workflow. Read-only ledger queries, temporary ledger previews, extension-owned metadata fields, and publisher parameters consumed by the poster are not independent ledger posting. A temporary item-journal buffer can still produce persistent entries when passed to a posting codeunit. A publisher's `var` parameter or `IsHandled` flag alone does not supply the missing quantity/cost coordination; the normal engine's own inserts operate within that coordination.

Not every value entry points to an item ledger entry: capacity and production WIP have their own supported posting relationships. Assembly and manufacturing posting retain order/component/routing and capacity context; one bare output/consumption call is not full order completion.

The clean sample takes an already prepared positive-adjustment journal line. It is not a substitute for journal preparation, batch revaluation, warehouse reconciliation, or source-document posting.

See sample: [`post-item-ledger-changes-through-item-journals.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals.good.al).

## Anti Pattern

Independent inserts/deletes of persistent `"Item Ledger Entry"` or `"Value Entry"` transaction rows, or overwrites of posted quantity, remaining quantity, application identity, or cost amounts, bypass the coordinated receipt, shipment, adjustment, or cost-correction workflow. `Insert(true)`, `Modify(true)`, and balanced-looking quantities do not supply that orchestration: stock can change without the corresponding application/value graph, or downstream cost flow can remain stale.

A table declaration or custom annotation-field update does not change inventory quantities or costs and is outside this transaction-state concern.

See sample: [`post-item-ledger-changes-through-item-journals.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals.bad.al).

## References

- [Inventory posting design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-inventory-posting)
- [Item application design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-item-application)
- [BaseApp item-journal posting entry point](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Posting/ItemJnlPostLine.Codeunit.al#L162-L179)
- [Assembly-order posting context](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-assembly-order-posting)
- [Production-order posting context](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-production-order-posting)

## Examples

- [Good: post-item-ledger-changes-through-item-journals.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals.good.al)
- [Bad: post-item-ledger-changes-through-item-journals.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-item-ledger-changes-through-item-journals.bad.al)

## Names

- [codeunit 23 "Item Jnl.-Post Batch"](../../../../objects/codeunit/23.md) (possibly related: a code span names it)
- [table 32 "Item Ledger Entry"](../../../../objects/table/32.md) (possibly related: a code span names it)
- [table 5802 "Value Entry"](../../../../objects/table/5802.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
