---
id: guideline/microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits
type: guideline
title: Transfer item tracking through source reservation codeunits
summary: Moving lot/serial tracking between document lines is a source-ownership operation, not a copy of visible tracking fields. Partial movement must retain the old source's remainder, destination units of measure, quantities to handle/invoice, status, sign, and any reservation counterpart.
tier: official
language: en
tags:
  - reservation-entry
  - tracking-specification
  - sales-line-reserve
  - transfersalelinetosalesline
  - transferreserventry
  - copyitemtracking
  - quantity-base
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.370Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8bc42ccdcc5af437f8aed143d422b0669bde867c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits.md
    title: "microsoft/BCQuality: Transfer item tracking through source reservation codeunits"
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
    - to: object/table/337
      title: table 337 "Reservation Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/336
      title: table 336 "Tracking Specification"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits.md
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

# Transfer item tracking through source reservation codeunits

> Moving lot/serial tracking between document lines is a source-ownership operation, not a copy of visible tracking fields. Partial movement must retain the old source's remainder, destination units of measure, quantities to handle/invoice, status, sign, and any reservation counterpart.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits.md) · microsoft layer · scm · BC all · tier official · derived

## Description

Moving lot/serial tracking between document lines is a source-ownership operation, not a copy of visible tracking fields. Partial movement must retain the old source's remainder, destination units of measure, quantities to handle/invoice, status, sign, and any reservation counterpart. Repointing a `"Reservation Entry"` loses this coordination; inserting a `"Tracking Specification"` row alone does not book the destination's source tracking.

## Best Practice

Reservation codeunits provide source-specific tracking workflows. For the tracking portion of blanket-sales-order or quote conversion to a sales order, `"Sales Line-Reserve".TransferSaleLineToSalesLine` takes the existing source line, prepared destination line, and quantity to transfer in **base units**. It delegates the source/status and quantity movement to `"Create Reserv. Entry".TransferReservEntry`.

The caller still owns document conversion and destination-line preparation; this method does not create a sales order. The source and destination must have compatible item, variant, location, and source identity. Purchases, transfers, assembly, and production have their own source-specific wrappers rather than sharing the sales conversion contract.

`"Item Tracking Management".CopyItemTracking` serves a different purpose: it creates Prospect copies, not a transfer of reservation ownership. That is valid for its intended copy workflow. Temporary Tracking Specification processing and persisted historical tracking specifications are also normal; the working/historic representation differs from the current source booking.

See sample: [`transfer-item-tracking-through-source-reservation-codeunits.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits.good.al).

## Anti Pattern

Direct rewrites of persistent `"Reservation Entry"` source type/subtype, ID, reference number, or quantities do not perform the source-line conversion or partial tracking-transfer workflow. Changing only `"Quantity (Base)"` and source keys can drop the remainder or leave the other tracking/reservation quantities attached to the wrong source.

A tracking copy cannot replace movement of an existing binding reservation. Legitimate Prospect copying, temporary tracking buffers, historical tracking reads, and source-specific engine calls serve distinct purposes and are not independent reservation transfers.

See sample: [`transfer-item-tracking-through-source-reservation-codeunits.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits.bad.al).

## References

- [Item Tracking Lines window design](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-item-tracking-lines-window)
- [Active versus historic item-tracking entries](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-active-versus-historic-item-tracking-entries)
- [Item tracking and reservations](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-item-tracking-and-reservations)
- [BaseApp sales tracking transfer](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Sales/Document/SalesLineReserve.Codeunit.al#L532-L578)
- [Base-unit conversion caller](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Sales/Document/BlanketSalesOrdertoOrder.Codeunit.al#L195-L198)
- [Prospect-copy API](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Tracking/ItemTrackingManagement.Codeunit.al#L575-L657)

## Examples

- [Good: transfer-item-tracking-through-source-reservation-codeunits.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits.good.al)
- [Bad: transfer-item-tracking-through-source-reservation-codeunits.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/transfer-item-tracking-through-source-reservation-codeunits.bad.al)

## Names

- [table 337 "Reservation Entry"](../../../../objects/table/337.md) (possibly related: a code span names it)
- [table 336 "Tracking Specification"](../../../../objects/table/336.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
