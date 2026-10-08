---
id: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/move-items
type: topic
title: Move items
summary: Moving items inside and between warehouse locations in Business Central. It covers basic and advanced (directed put-away and pick) bin moves, unplanned internal movements, and transfers between locations. It answers which page or journal to use for each warehouse setup.
tier: official
language: en
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:52.381Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 356a2e5edb2f21ae1e0d106c2af03d4c90261d9033137ec9bf9be39929c9e5d8
evidence:
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
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-transfer-between-locations
    title: Transfer items between locations
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-move-items
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-in-advanced-warehousing
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-ad-hoc-in-basic-warehousing
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-transfer-between-locations
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
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10072
    - change/bcapps/10873
    - change/bcapps/10924
    - change/bcapps/9264
learn_toc_path:
  - Business functionality
  - Warehouse management
  - Internal warehouse processes
  - Move items
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes
children: []
coverage:
  learn: 4
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
member_hash: eefd57372fd0a77719b4b15aea8c5b36a55ba35ee124e37db311150bab184a36
narrative: generated
---

# Move items

> Moving items inside and between warehouse locations in Business Central. It covers basic and advanced (directed put-away and pick) bin moves, unplanned internal movements, and transfers between locations. It answers which page or journal to use for each warehouse setup.

Path: [Business functionality](../../../business-functionality.md) > [Warehouse management](../../warehouse-management.md) > [Internal warehouse processes](../internal-warehouse-processes.md) > Move items · tier official · system warehouse · narrative reviewed (checked by Opus)

## Overview

Item movement depends on how complex the warehouse configuration is, from simple bin moves to coordinated advanced workflows. Typical reasons include production orders, bin optimization, replenishment and warehouse restructuring. The section has one overview page and three task pages.

For basic warehouse configurations, unplanned moves without source document demand use the Internal Movement page or the Item Reclassification Journal. For warehouses with directed put-away and pick, moves use the Movement Worksheet, Warehouse Internal Pick, Warehouse Internal Put-away or the Warehouse Reclassification Journal. A separate page covers transfers between locations with transfer orders or item reclassification journals.

Start with the Move Items overview to see which approach matches your configuration. Then open the page for your setup: basic, directed put-away and pick, or location-to-location transfer.

## Key points

- The Move Items overview describes bin movement, the warehouse movement worksheet, internal picks and warehouse restructuring.
- Basic configurations: use Internal Movements, Create Inventory Movement and Inventory Movement, or the Item Reclassification Journal, for moves without source document demand.
- In basic setups, the Bin Contents List and Split Line help when reorganizing inventory and moving items to production areas.
- Directed put-away and pick: move items between bins with the Movement Worksheet, Warehouse Internal Pick, Warehouse Internal Put-away or Warehouse Reclassification Journal.
- The directed page also covers bin replenishment and FEFO picking.
- Transfers between locations use transfer orders or item reclassification journals.
- Transfers can be standard multi-step or direct, with optional in-transit location tracking.
- Transfer topics include posting, undoing a shipment, batch transfer posting, job queue scheduling and direct transfer posting methods.

## Learn pages

- [Move Items](https://learn.microsoft.com/dynamics365/business-central/warehouse-move-items): Learn about moving items between bins in your warehouse.
- [Move items in warehouses that use directed put-away and pick](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-in-advanced-warehousing): This article explains how to move items in locations that use directed put-away and pick.
- [Move Items Unplanned in Basic Warehouse Configurations](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-ad-hoc-in-basic-warehousing): This article explains unplanned internal movements between bins without a demand from a source document.
- [Transfer items between locations](https://learn.microsoft.com/dynamics365/business-central/inventory-how-transfer-between-locations): Learn how to transfer items, inventory, or stock between locations by using transfer orders or the item reclassification journal.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10072 [main] - Serial and Lot number mismatch when item is produced via Production Order and moved to inventory through an Internal Put-away](../../../../../changes/bcapps/10072.md) (code change): "Registering a warehouse put-away now checks each line"
- [#10873 [Master]-The Available to Take logic is incorrect or inaccurate in the Pick Worksheet as it includes Ship and Receive bin inventory](../../../../../changes/bcapps/10873.md) (code change): "The Available to Take logic is incorrect or inaccurate in the Pick Worksheet"
- [#10924 [main] Bug 648630 Movement Worksheet Creates Incorrect Warehouse Movement for FEFO Lot-Tracked Items](../../../../../changes/bcapps/10924.md) (code change): "Movement Worksheet Creates Incorrect Warehouse Movement for FEFO"
- [#9264 [master] Bin Capacity Policy "Prohibit More Than Max. Cap." fails and allows more than the maximum Capacity, when you split lines on Inventory Movement](../../../../../changes/bcapps/9264.md) (code change): "Bin Capacity Policy 'Prohibit More Than Max. Cap.' was incorrectly allowing overflow"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 393 "Item Reclass. Journal"](../../../../../objects/page/393.md) · captioned "Item Reclassification Journals" · on [Table 83 "Item Journal Line"](../../../../../objects/table/83.md)
- [Page 7315 "Warehouse Movement"](../../../../../objects/page/7315.md) · on [Table 5766 "Warehouse Activity Header"](../../../../../objects/table/5766.md)
- [Page 7349 "Registered Movement"](../../../../../objects/page/7349.md) · on [Table 5772 "Registered Whse. Activity Hdr."](../../../../../objects/table/5772.md)
- [Page 7351 "Movement Worksheet"](../../../../../objects/page/7351.md) · captioned "Movement Worksheets" · on [Table 7326 "Whse. Worksheet Line"](../../../../../objects/table/7326.md)
- [Page 7382 "Inventory Movement"](../../../../../objects/page/7382.md) · on [Table 5766 "Warehouse Activity Header"](../../../../../objects/table/5766.md)
- [Page 7384 "Registered Invt. Movement"](../../../../../objects/page/7384.md) · on [Table 7344 "Registered Invt. Movement Hdr."](../../../../../objects/table/7344.md)
- [Page 7386 "Registered Invt. Movement List"](../../../../../objects/page/7386.md) · captioned "Registered Inventory Movements" · on [Table 7344 "Registered Invt. Movement Hdr."](../../../../../objects/table/7344.md)
- [Page 7387 "Reg. Invt. Movement Lines"](../../../../../objects/page/7387.md) · on [Table 7345 "Registered Invt. Movement Line"](../../../../../objects/table/7345.md)
- [Page 7399 "Internal Movement"](../../../../../objects/page/7399.md) · on [Table 7346 "Internal Movement Header"](../../../../../objects/table/7346.md)
- [Page 7400 "Internal Movement List"](../../../../../objects/page/7400.md) · captioned "Internal Movements" · on [Table 7346 "Internal Movement Header"](../../../../../objects/table/7346.md)
- [Page 9314 "Warehouse Movements"](../../../../../objects/page/9314.md) · on [Table 5766 "Warehouse Activity Header"](../../../../../objects/table/5766.md)
- [Page 9330 "Inventory Movements"](../../../../../objects/page/9330.md) · on [Table 5766 "Warehouse Activity Header"](../../../../../objects/table/5766.md)
- [Page 9345 "Registered Whse. Movements"](../../../../../objects/page/9345.md) · captioned "Registered Warehouse Movement List" · on [Table 5772 "Registered Whse. Activity Hdr."](../../../../../objects/table/5772.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
