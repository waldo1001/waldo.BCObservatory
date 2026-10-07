---
id: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes
type: topic
title: Internal warehouse processes
summary: "Internal warehouse processes in Business Central: handling production, assembly and job components and output, moving items within and between locations, and counting and adjusting warehouse inventory. It answers which page, journal or setup applies in basic versus advanced warehouse configurations."
tier: official
language: en
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:50.308Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b09f7f54c9aeac76b612c6978adde01631acec6e74fb9bf8dfc628ae8f2b2f7c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-inventory-with-documents
    title: Count and adjust inventory
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify
    title: Count, adjust, and reclassify inventory
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-internal-warehouse-flows
    title: Design details - flows for production, assembly, and projects
    date: "2024-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-integration-with-inventory
    title: Design Details - Integration with Inventory
    date: "2021-06-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-move-items
    title: Move Items
    date: "2023-01-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-in-advanced-warehousing
    title: Move items in warehouses that use directed put-away and pick
    date: "2024-04-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-ad-hoc-in-basic-warehousing
    title: Move Items Unplanned in Basic Warehouse Configurations
    date: "2022-12-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-internal-operations-in-advanced-warehousing
    title: Pick for internal operations in advanced warehouse configurations
    date: "2025-03-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-production
    title: Pick or move items for production, assembly, or projects in basic warehouse configurations
    date: "2025-03-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-away-production-output
    title: Put away production output
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-transfer-between-locations
    title: Transfer items between locations
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/page/393
    - object/page/7315
    - object/page/7349
    - object/page/7351
    - object/page/7382
    - object/page/7384
    - object/page/7386
    - object/page/7387
    - object/page/7399
    - object/page/7400
    - object/page/9314
    - object/page/9330
    - object/page/9345
  features: []
  topics:
    - topic/business-central/business-functionality/warehouse-management
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/production-assembly-and-job-activities
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/move-items
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/warehouse-counting
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10072
    - change/bcapps/10518
    - change/bcapps/10522
    - change/bcapps/10924
    - change/bcapps/11823
    - change/bcapps/11947
    - change/bcapps/9437
learn_toc_path:
  - Business functionality
  - Warehouse management
  - Internal warehouse processes
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/warehouse-management
children:
  - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/production-assembly-and-job-activities
  - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/move-items
  - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/warehouse-counting
coverage:
  learn: 11
  code: 13
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 393
  - 7315
  - 7349
  - 7351
  - 7382
  - 7384
  - 7386
  - 7387
  - 7399
  - 7400
  - 9314
  - 9330
  - 9345
member_hash: e258e513fc2af58df5d1b320c88422a5aab7390d833039aff04ae84d26a84052
narrative: generated
---

# Internal warehouse processes

> Internal warehouse processes in Business Central: handling production, assembly and job components and output, moving items within and between locations, and counting and adjusting warehouse inventory. It answers which page, journal or setup applies in basic versus advanced warehouse configurations.

Path: [Business functionality](../../business-functionality.md) > [Warehouse management](../warehouse-management.md) > Internal warehouse processes · tier official · system warehouse · narrative reviewed by Opus

## Overview

This area covers warehouse work that happens inside and between locations. It has three subtopics: production, assembly and job activities; moving items; and warehouse counting.

The production, assembly and job pages explain how components are picked or moved to the work area, how output is put away, and how basic and advanced warehouse setups differ. The move items pages cover bin moves, unplanned internal movements and transfers between locations. The warehouse counting pages cover physical inventory counts, adjustments and reclassification.

The hub has no pages of its own. Start with the subtopic that matches the task. First check whether the location uses a basic or an advanced (directed put-away and pick) setup, because the page or journal to use depends on it.

## Key points

- Production, assembly and job flows include picking or moving components and putting away output.
- Basic and advanced warehouse configurations handle these flows differently.
- Move items covers bin moves in basic and advanced (directed put-away and pick) setups.
- Unplanned internal movements and transfers between locations are covered under moving items.
- Warehouse counting uses orders, recordings and journals for physical inventory, adjustments and reclassification.
- Counting topics include cycle counting, bin-level counts and adjustment bins.
- Warehouse adjustments are reconciled with the item ledger.

## Subtopics

- [Production, assembly, and job activities](internal-warehouse-processes/production-assembly-and-job-activities.md) (4 pages)
- [Move items](internal-warehouse-processes/move-items.md) (4 pages)
- [Warehouse counting](internal-warehouse-processes/warehouse-counting.md) (3 pages)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10072 [main] - Serial and Lot number mismatch when item is produced via Production Order and moved to inventory through an Internal Put-away](../../../../changes/bcapps/10072.md) (code change): "Warehouse activity registration now validates lot and serial number tracking"
- [#10518 [Extensibility Request] issue 30338: expose internal put-away line event](../../../../changes/bcapps/10518.md) (code change): "New event OnAfterWhseInternalPutAwayLineOnPreDataItem provides access to the internal put-away line record"
- [#10522 [main] Bug 647499 Bin Replenishment with Pick by FEFO Creates Incorrect Inventory Movements](../../../../changes/bcapps/10522.md) (code change): "Fixed bin replenishment with FEFO-based picking to correctly calculate quantities"
- [#10924 [main] Bug 648630 Movement Worksheet Creates Incorrect Warehouse Movement for FEFO Lot-Tracked Items](../../../../changes/bcapps/10924.md) (code change): "Movement Worksheet Creates Incorrect Warehouse Movement for FEFO Lot-Tracked Items"
- [#11823 [Main]-Create Movement from Movement Worksheet doesn't respect Quantity nor Qty. to Handle if we Get Bin Content](../../../../changes/bcapps/11823.md) (code change): "Create Movement from Movement Worksheet doesn't respect Quantity nor Qty. to Handle"
- [#11947 [29x]-Create Movement from Movement Worksheet doesn't respect Quantity nor Qty. to Handle if we Get Bin Content](../../../../changes/bcapps/11947.md) (code change): "Create Movement from Movement Worksheet doesn't respect Quantity nor Qty. to Handle"
- [#9437 [Extensibility Request] issue 30339: add OnAfterCalcAvailableQtyBase event to Whse. Worksheet Line](../../../../changes/bcapps/9437.md) (code change): "An integration event was added to the warehouse worksheet line calculation"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 393 "Item Reclass. Journal"](../../../../objects/page/393.md) · captioned "Item Reclassification Journals" · on [Table 83 "Item Journal Line"](../../../../objects/table/83.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7315 "Warehouse Movement"](../../../../objects/page/7315.md) · on [Table 5766 "Warehouse Activity Header"](../../../../objects/table/5766.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7349 "Registered Movement"](../../../../objects/page/7349.md) · on [Table 5772 "Registered Whse. Activity Hdr."](../../../../objects/table/5772.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7351 "Movement Worksheet"](../../../../objects/page/7351.md) · captioned "Movement Worksheets" · on [Table 7326 "Whse. Worksheet Line"](../../../../objects/table/7326.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7382 "Inventory Movement"](../../../../objects/page/7382.md) · on [Table 5766 "Warehouse Activity Header"](../../../../objects/table/5766.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7384 "Registered Invt. Movement"](../../../../objects/page/7384.md) · on [Table 7344 "Registered Invt. Movement Hdr."](../../../../objects/table/7344.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7386 "Registered Invt. Movement List"](../../../../objects/page/7386.md) · captioned "Registered Inventory Movements" · on [Table 7344 "Registered Invt. Movement Hdr."](../../../../objects/table/7344.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7387 "Reg. Invt. Movement Lines"](../../../../objects/page/7387.md) · on [Table 7345 "Registered Invt. Movement Line"](../../../../objects/table/7345.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7399 "Internal Movement"](../../../../objects/page/7399.md) · on [Table 7346 "Internal Movement Header"](../../../../objects/table/7346.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 7400 "Internal Movement List"](../../../../objects/page/7400.md) · captioned "Internal Movements" · on [Table 7346 "Internal Movement Header"](../../../../objects/table/7346.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 9314 "Warehouse Movements"](../../../../objects/page/9314.md) · on [Table 5766 "Warehouse Activity Header"](../../../../objects/table/5766.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 9330 "Inventory Movements"](../../../../objects/page/9330.md) · on [Table 5766 "Warehouse Activity Header"](../../../../objects/table/5766.md) · via [Move items](internal-warehouse-processes/move-items.md)
- [Page 9345 "Registered Whse. Movements"](../../../../objects/page/9345.md) · captioned "Registered Warehouse Movement List" · on [Table 5772 "Registered Whse. Activity Hdr."](../../../../objects/table/5772.md) · via [Move items](internal-warehouse-processes/move-items.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
