---
id: topic/business-central/business-functionality/local-functionality/india/gate-entry
type: topic
title: Gate entry
summary: Gate entry in the India localization of Business Central records the physical movement of goods into and out of company premises. It answers questions about setting up gate entry tracking and about creating and attaching inward and outward gate entries to purchase, sales, and transfer documents.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:41.985Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a3fde16ec92aa4524aa16739d9f8d1549754e897c3ce0f700fb83ce25dca88b3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-Inward_Transactions
    title: Create and Attach Inward Gate Entries
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-Outward_Transactions
    title: Create and Attach Outward Gate Entries
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-001-Basic-Setup
    title: Set Up Gate Entry Tracking
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-Inward_Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-Outward_Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-001-Basic-Setup
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - Gate entry
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/india
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6dc005b0053ea9467e913cf9fd6b4bdfc018f8cbe332c0dbac2f5f0111ad5c81
narrative: generated
---

# Gate entry

> Gate entry in the India localization of Business Central records the physical movement of goods into and out of company premises. It answers questions about setting up gate entry tracking and about creating and attaching inward and outward gate entries to purchase, sales, and transfer documents.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Gate entry · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

Gate entry tracking in the India localization records goods entering and leaving organizational premises. It supports audit trails and links each movement to purchase, sales, and transfer documents. The section has no subtopics, only three pages.

Start with Set Up Gate Entry Tracking, which covers inward and outward gate entry number series and posted gate entry records. Then use Create and Attach Inward Gate Entries for goods coming in (purchase orders, transfer receipts, sales returns). Use Create and Attach Outward Gate Entries for goods going out (posted sales shipments, transfer shipments, purchase return shipments).

## Key points

- Gate entry tracking is part of the India localization and records physical goods movement in and out of premises.
- Setup involves the Inward Gate Entry Nos. and Outward Gate Entry Nos. number series.
- Gate entries can be posted, which produces posted gate entry records for audit trails.
- Inward gate entries can be attached to purchase orders, transfer receipts, and sales return orders.
- Inward entries use a get gate entry lines action to bring lines into the document.
- Outward gate entries can be attached to posted sales shipments, transfer shipments, and purchase return shipments.
- Outward entries capture fields such as Location Code, Station To, LR/RR No., Vehicle No., Challan No., and Source Type.

## Learn pages

- [Create and Attach Inward Gate Entries](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-Inward_Transactions): Create, post, and attach inward gate entries to purchase receipts, transfer receipts, and sales returns in Business Central for India.
  - In the observatory: [Page 18606 "Inward Gate Entry List (IN)"](../../../../../objects/page/18606-in.md), [Page 18615 "Posted Inward Gate Entry List (IN)"](../../../../../objects/page/18615-in.md), [Page 56 "Purchase Orders"](../../../../../objects/page/56.md), [Page 5742 "Transfer Orders"](../../../../../objects/page/5742.md), [Page 6633 "Sales Return Orders"](../../../../../objects/page/6633.md), [Page 7332 "Warehouse Receipts"](../../../../../objects/page/7332.md)
- [Create and Attach Outward Gate Entries](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-Outward_Transactions): Learn how to create and manage outward gate entries for tracking the exit of goods from your organization in Business Central (India localization).
  - In the observatory: [Page 142 "Posted Sales Shipments"](../../../../../objects/page/142.md), [Page 18610 "Outward Gate Entry List (IN)"](../../../../../objects/page/18610-in.md), [Page 18618 "Posted Outward Gate Entry List (IN)"](../../../../../objects/page/18618-in.md), [Page 5752 "Posted Transfer Shipments"](../../../../../objects/page/5752.md), [Page 6652 "Posted Return Shipments"](../../../../../objects/page/6652.md)
- [Set Up Gate Entry Tracking](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Gate-Entry-001-Basic-Setup): Specifies basic setups required to keep track of entrance and exit of materials or other entities, to and from the organization’s premises.
  - In the observatory: [Table 313 "Inventory Setup"](../../../../../objects/table/313.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
