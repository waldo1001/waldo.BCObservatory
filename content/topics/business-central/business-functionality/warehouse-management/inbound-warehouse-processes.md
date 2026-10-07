---
id: topic/business-central/business-functionality/warehouse-management/inbound-warehouse-processes
type: topic
title: Inbound warehouse processes
summary: "Inbound warehouse processes in Business Central: receiving items, putting them away, and cross-docking, in both basic and advanced warehouse configurations. It answers questions about warehouse receipts, inventory put-aways, warehouse put-aways, finding assignments, and the inbound flow design."
tier: official
language: en
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:35.324Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a7cb8250d2a086c040a5336b10411c5f1d866a79471015bb24dfc33194cf2f97
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-cross-dock-items
    title: Cross-Dock Items
    date: "2023-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-inbound-warehouse-flow
    title: Design Details - Inbound Warehouse Flow
    date: "2023-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-find-your-warehouse-assignments
    title: Find Your Warehouse Assignments
    date: "2021-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-items-away-with-inventory-put-aways
    title: How to Put Items Away with Inventory Put-aways
    date: "2023-09-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-items-away-with-warehouse-put-aways
    title: How to put items away with warehouse put-aways
    date: "2024-04-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-receive-items
    title: Receive items
    date: "2025-01-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/walkthrough-receiving-and-putting-away-in-advanced-warehousing
    title: Receiving and Putting Away in Advanced Warehousing
    date: "2021-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/walkthrough-receiving-and-putting-away-in-basic-warehousing
    title: Walkthrough - Receive and put away in basic warehouse configurations
    date: "2023-02-27"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-cross-dock-items
    - https://learn.microsoft.com/dynamics365/business-central/design-details-inbound-warehouse-flow
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-find-your-warehouse-assignments
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-items-away-with-inventory-put-aways
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-items-away-with-warehouse-put-aways
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-receive-items
    - https://learn.microsoft.com/dynamics365/business-central/walkthrough-receiving-and-putting-away-in-advanced-warehousing
    - https://learn.microsoft.com/dynamics365/business-central/walkthrough-receiving-and-putting-away-in-basic-warehousing
  objects:
    - object/page/15
    - object/page/5703
    - object/page/5768
    - object/page/7302
    - object/page/7330
    - object/page/7332
    - object/page/7333
    - object/page/7342
    - object/page/7363
    - object/page/8510
    - object/page/9000
    - object/page/9008
  features: []
  topics:
    - topic/business-central/business-functionality/warehouse-management
  localizations: []
  videos:
    - video/QdWPlIV3Avk
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10125
learn_toc_path:
  - Business functionality
  - Warehouse management
  - Inbound warehouse processes
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/warehouse-management
children: []
coverage:
  learn: 8
  code: 12
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 15
  - 5703
  - 5768
  - 7302
  - 7330
  - 7332
  - 7333
  - 7342
  - 7363
  - 8510
  - 9000
  - 9008
member_hash: b07578998b77b0aeddd4e0bb55e601af3895a3db5471337673f0fdb4450eee2f
narrative: generated
---

# Inbound warehouse processes

> Inbound warehouse processes in Business Central: receiving items, putting them away, and cross-docking, in both basic and advanced warehouse configurations. It answers questions about warehouse receipts, inventory put-aways, warehouse put-aways, finding assignments, and the inbound flow design.

Path: [Business functionality](../../business-functionality.md) > [Warehouse management](../warehouse-management.md) > Inbound warehouse processes · tier official · system warehouse · narrative reviewed by Opus

## Overview

This area covers how items come into a warehouse and reach their bins. The right path depends on warehouse complexity. Basic configurations use inventory put-away documents. Advanced configurations use warehouse receipts and warehouse put-away documents, with directed put-away and pick.
The pages fit together as concept, how-to and walkthrough. "Design Details - Inbound Warehouse Flow" explains the four receipt and put-away methods and is a good place to start. "Receive items" covers warehouse receipts and how they are created from source documents. Two how-to pages cover putting away, one for inventory put-aways and one for warehouse put-aways. Two walkthroughs, one basic and one advanced, show the full receive and put-away cycle.
Supporting pages cover cross-docking, which moves items through cross-dock bins and zones without full storage, and how to find the warehouse assignments given to a user.

## Key points

- Four methods exist for receiving and putting away items, chosen by warehouse configuration complexity.
- Warehouse receipts can be created by push or pull from source documents such as purchase orders, using Get Source Documents and filters.
- Receipt pages cover Qty. to Receive, Over-Receipt Quantity and zone and bin code assignment.
- Inventory put-aways serve basic configurations and can be created from source documents, by batch job, or manually after releasing a source document.
- Warehouse put-aways serve advanced configurations and are created from warehouse receipts or the put-away worksheet, using put-away templates, bin ranking and a breakbulk filter.
- Cross-docking uses cross-dock bins and zones, with settings such as Use Cross-Docking, Calculate Cross-Dock, Cross-Dock Due Date Calc. and Qty. to Cross-Dock.
- Warehouse assignments can be found from item cards or from put-away, pick and movement pages, filtered by location and assigned user ID.
- Separate basic and advanced walkthroughs cover default and fixed bins, bin content setup, receiving bins and split put-away lines.

## Learn pages

- [Cross-Dock Items](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-cross-dock-items): Learn how to receive and ship items without putting them in storage.
- [Design Details - Inbound Warehouse Flow](https://learn.microsoft.com/dynamics365/business-central/design-details-inbound-warehouse-flow): Learn how to receive items at your warehouse, and register and match them to inbound source documents.
- [Find Your Warehouse Assignments](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-find-your-warehouse-assignments): This topic explains how to find the warehouse assignments assigned to you on the Item Card page when instructions have been created for you.
- [How to Put Items Away with Inventory Put-aways](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-items-away-with-inventory-put-aways): Learn how to use inventory put-away documents to record and post put-away and receipt information.
- [How to put items away with warehouse put-aways](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-items-away-with-warehouse-put-aways): Learn about the different ways to use warehouse put-aways to put away received items.
- [Receive items](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-receive-items): This article is an overview of the different ways to receive items at a warehouse with a warehouse receipt.
- [Receiving and Putting Away in Advanced Warehousing](https://learn.microsoft.com/dynamics365/business-central/walkthrough-receiving-and-putting-away-in-advanced-warehousing): The inbound processes for receiving and putting away can be performed in four ways using different functionalities depending on the warehouse complexity level.
- [Walkthrough - Receive and put away in basic warehouse configurations](https://learn.microsoft.com/dynamics365/business-central/walkthrough-receiving-and-putting-away-in-basic-warehousing): Learn about the different ways to handle inbound processes for receiving and putting away.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10125 [Extensibility Request] issue 30395: expose production pick grouping number](../../../../changes/bcapps/10125.md) (code change): "New event enables extensions to modify the warehouse pick grouping number"
- [What's new in SCM: Subcontracting (2026 release wave 2)](../../../../videos/QdWPlIV3Avk.md) (video): "Warehouse receipt for subcontracting operations; Inventory put-away for basic warehouse locations"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 15 "Location List"](../../../../objects/page/15.md) · captioned "Locations" · on [Table 14 "Location"](../../../../objects/table/14.md)
- [Page 5703 "Location Card"](../../../../objects/page/5703.md) · on [Table 14 "Location"](../../../../objects/table/14.md)
- [Page 5768 "Warehouse Receipt"](../../../../objects/page/5768.md) · on [Table 7316 "Warehouse Receipt Header"](../../../../objects/table/7316.md)
- [Page 7302 "Bins"](../../../../objects/page/7302.md) · on [Table 7354 "Bin"](../../../../objects/table/7354.md)
- [Page 7330 "Posted Whse. Receipt"](../../../../objects/page/7330.md) · on [Table 7318 "Posted Whse. Receipt Header"](../../../../objects/table/7318.md)
- [Page 7332 "Warehouse Receipts"](../../../../objects/page/7332.md) · on [Table 7316 "Warehouse Receipt Header"](../../../../objects/table/7316.md)
- [Page 7333 "Posted Whse. Receipt List"](../../../../objects/page/7333.md) · captioned "Posted Warehouse Receipts" · on [Table 7318 "Posted Whse. Receipt Header"](../../../../objects/table/7318.md)
- [Page 7342 "Whse. Receipt Lines"](../../../../objects/page/7342.md) · on [Table 7317 "Warehouse Receipt Line"](../../../../objects/table/7317.md)
- [Page 7363 "Posted Whse. Receipt Lines"](../../../../objects/page/7363.md) · on [Table 7319 "Posted Whse. Receipt Line"](../../../../objects/table/7319.md)
- [Page 8510 "Over-Receipt Codes"](../../../../objects/page/8510.md) · on [Table 8510 "Over-Receipt Code"](../../../../objects/table/8510.md)
- [Page 9000 "Whse. WMS Role Center"](../../../../objects/page/9000.md) · captioned "Shipping and Receiving - Warehouse Management System"
- [Page 9008 "Whse. Basic Role Center"](../../../../objects/page/9008.md) · captioned "Inventory Manager"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
