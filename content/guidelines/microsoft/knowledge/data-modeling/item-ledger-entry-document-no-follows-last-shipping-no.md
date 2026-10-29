---
id: guideline/microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no
type: guideline
title: After Ship-and-Invoice posting, Item Ledger Entry carries the shipment document number
summary: Posting a sales order with both Ship and Invoice in one call creates the Item Ledger Entry during the shipment leg of that combined post, so the entry's Document No. is stamped with the value assigned to the shipment — Sales Header."Last Shipping No."
tier: official
language: en
tags:
  - item-ledger-entry
  - document-no
  - last-shipping-no
  - ship-and-invoice
  - posting
  - sales-order
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.293Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3b5d93998553637713ad0219570e1cf9cf3b3fd9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no.md
    title: "microsoft/BCQuality: After Ship-and-Invoice posting, Item Ledger Entry carries the shipment document number"
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
    - change/bcquality/158
repo_path: microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no.md
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
  - SetRange
  - FindSet
---

# After Ship-and-Invoice posting, Item Ledger Entry carries the shipment document number

> Posting a sales order with both Ship and Invoice in one call creates the Item Ledger Entry during the shipment leg of that combined post, so the entry's Document No. is stamped with the value assigned to the shipment — Sales Header."Last Shipping No."

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

Posting a sales order with both Ship and Invoice in one call creates the Item Ledger Entry during the shipment leg of that combined post, so the entry's `Document No.` is stamped with the value assigned to the shipment — `Sales Header."Last Shipping No."` — not the posted sales invoice number the posting call returns. Code that filters Item Ledger Entry by the invoice number instead finds nothing: `SetRange`/`FindSet` simply return zero rows, with no error to signal the mistake.

## Best Practice

After posting a sales order with Ship and Invoice together, read `SalesHeader."Last Shipping No."` (populated during the post) and filter Item Ledger Entry by that value, not by the invoice number the posting routine returns.

See sample: [`item-ledger-entry-document-no-follows-last-shipping-no.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no.good.al).

## Anti Pattern

Filtering Item Ledger Entry by the posted sales invoice number after a combined Ship-and-Invoice post. The filter compiles and runs without error but matches zero rows, because the entry belongs to the shipment leg of the posting, not the invoice leg.

See sample: [`item-ledger-entry-document-no-follows-last-shipping-no.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no.bad.al).

## Examples

- [Good: item-ledger-entry-document-no-follows-last-shipping-no.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no.good.al)
- [Bad: item-ledger-entry-document-no-follows-last-shipping-no.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/item-ledger-entry-document-no-follows-last-shipping-no.bad.al)

## Changed by

- [#158 3 AL/BC patterns from CURABIS's internal automated-testing training material](../../../../changes/bcquality/158.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
