---
id: guideline/microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits
type: guideline
title: Post transfers through shipment and receipt codeunits
summary: A two-step transfer order preserves a continuous quantity, reservation, and cost/application lineage from the source through in-transit to the destination. Its shipment and receipt workflows also own posted documents and derived lines for partial receipt.
tier: official
language: en
tags:
  - transfer-header
  - transfer-line
  - transferorder-post-shipment
  - transferorder-post-receipt
  - in-transit-code
  - last-shipment-no
  - item-application-entry
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.244Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b541dbab91352ab4fae86af0e2539608ce38dfb1
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits.md
    title: "microsoft/BCQuality: Post transfers through shipment and receipt codeunits"
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
    - to: object/table/5740
      title: table 5740 "Transfer Header"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits.md
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

# Post transfers through shipment and receipt codeunits

> A two-step transfer order preserves a continuous quantity, reservation, and cost/application lineage from the source through in-transit to the destination. Its shipment and receipt workflows also own posted documents and derived lines for partial receipt.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits.md) · microsoft layer · scm · BC all · tier official · derived

## Description

A two-step transfer order preserves a continuous quantity, reservation, and cost/application lineage from the source through in-transit to the destination. Its shipment and receipt workflows also own posted documents and derived lines for partial receipt. Posting an item-journal movement and manually marking a transfer header or line as shipped is not equivalent, even if the total quantities balance.

## Best Practice

A prepared non-direct transfer order without required warehouse documents uses `"TransferOrder-Post Shipment".Run` at shipment and `"TransferOrder-Post Receipt".Run` at receipt, with the actual `"Transfer Header"`. Validated source quantities to ship/receive prepare the operation; posted quantity counters are results of posting.

Required warehouse shipment or receipt enters the warehouse document posting workflow, which invokes the transfer poster with its real source context. Direct transfers have their configured standard workflow; the two-step sample's in-transit guard is not a universal requirement.

Standalone item reclassification journals and bin movements are legitimate separate operations, not completion of an existing transfer order. Tracking/application splits and average-cost handling mean transfers do not have one fixed item-entry count or a nonzero `"Transferred-from Entry No."` on every application.

See sample: [`post-transfers-through-shipment-and-receipt-codeunits.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits.good.al).

## Anti Pattern

Ad-hoc item postings, independent positive/negative adjustments, manually created posted-transfer rows, and direct shipment/receipt-counter changes cannot substitute for transfer-order posting. Updating `"Last Shipment No."` after a bare item-journal call does not create the posted shipment, source-line progress, or transfer application lineage.

Changing an existing item ledger entry's location or inventing application links does not repair that missing workflow. Metadata enrichment within the normal shipment/receipt or direct-transfer workflow is distinct from replacing the posting operation.

See sample: [`post-transfers-through-shipment-and-receipt-codeunits.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits.bad.al).

## References

- [Transfer inventory between locations](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-transfer-between-locations)
- [Item application design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-item-application)
- [Cost adjustment design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-cost-adjustment)
- [BaseApp shipment journal/source linkage](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Transfer/TransferOrderPostShipment.Codeunit.al#L292-L336)
- [Partial-receipt derived-line handling](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Transfer/TransferOrderPostReceipt.Codeunit.al#L457-L529)
- [Transfer application and average-cost branches](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Posting/ItemJnlPostLine.Codeunit.al#L1911-L1976)

## Examples

- [Good: post-transfers-through-shipment-and-receipt-codeunits.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits.good.al)
- [Bad: post-transfers-through-shipment-and-receipt-codeunits.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/post-transfers-through-shipment-and-receipt-codeunits.bad.al)

## Names

- [table 5740 "Transfer Header"](../../../../objects/table/5740.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
