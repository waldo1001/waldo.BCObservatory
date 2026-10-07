---
id: topic/business-central/business-functionality/warehouse-management/outbound-warehouse-processes
type: topic
title: Outbound warehouse processes
summary: Outbound warehouse processes in Business Central cover picking and shipping items for sales orders, transfer orders, purchase returns and service orders. The pages answer questions about the four outbound methods, inventory picks, warehouse picks and shipments, cross-docking, and finding assigned warehouse work.
tier: official
language: en
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:12.483Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 827fe56a91dfbbaafb649d09aed447b555cf771bc319cad9c54105fc100b9712
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-cross-dock-items
    title: Cross-Dock Items
    date: "2023-10-09"
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
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-items-with-inventory-picks
    title: How to pick items with inventory picks
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-outbound-warehouse-flow
    title: Outbound warehouse process overview
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-items-for-warehouse-shipment
    title: Pick items for warehouse shipment
    date: "2024-04-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/walkthrough-picking-and-shipping-in-basic-warehousing
    title: Picking and Shipping in Basic Warehouse Configurations
    date: "2023-02-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-ship-items
    title: Ship items
    date: "2024-06-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-cross-dock-items
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-find-your-warehouse-assignments
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-items-with-inventory-picks
    - https://learn.microsoft.com/dynamics365/business-central/design-details-outbound-warehouse-flow
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-items-for-warehouse-shipment
    - https://learn.microsoft.com/dynamics365/business-central/walkthrough-picking-and-shipping-in-basic-warehousing
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-ship-items
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/warehouse-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10127
    - change/bcapps/10277
    - change/bcapps/10795
    - change/bcapps/11511
    - change/bcapps/9297
    - change/bcapps/9333
    - change/bcapps/9451
    - change/bcapps/9532
learn_toc_path:
  - Business functionality
  - Warehouse management
  - Outbound warehouse processes
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/warehouse-management
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 15
  - 5703
  - 5768
  - 7302
  - 7332
  - 7335
  - 7337
  - 7339
  - 7340
  - 7341
  - 7362
  - 9000
  - 9008
member_hash: 7cd292b13ff6612b4bb067c1be5b2784ea9f4056b2c99dac6be027820439f938
narrative: generated
---

# Outbound warehouse processes

> Outbound warehouse processes in Business Central cover picking and shipping items for sales orders, transfer orders, purchase returns and service orders. The pages answer questions about the four outbound methods, inventory picks, warehouse picks and shipments, cross-docking, and finding assigned warehouse work.

Path: [Business functionality](../../business-functionality.md) > [Warehouse management](../warehouse-management.md) > Outbound warehouse processes · tier official · system warehouse · narrative reviewed by Opus

## Overview

This section describes how items leave the warehouse. It starts with an overview of outbound picking and shipping, which lays out four methods that range from basic order-by-order handling to advanced setups that separate picks from shipments. The method you use depends on how the location is configured, for example whether it requires pick, shipment, or bin management.

For basic setups, the inventory pick pages and the basic walkthrough (method B) show how to record and post picking and shipping in one step per order. For advanced setups, the Ship items page covers warehouse shipments and the Pick items for warehouse shipment page covers warehouse pick documents and the pick worksheet. Cross-Dock Items and Find Your Warehouse Assignments are supporting topics for specific needs.

Start with the outbound process overview to choose a method. Then go to the page that matches your configuration: inventory picks for basic setups, or warehouse shipments and warehouse picks for advanced ones.

## Key points

- Outbound processes cover sales orders, transfer orders, purchase returns and service orders, with four methods from basic to advanced.
- Inventory picks record and post picking and shipping from the Inventory Pick page when a location requires pick but not shipment processing.
- Inventory picks can be created from source documents or by batch job, and the Split line action and assemble-to-order handling are supported.
- Warehouse shipments can be created in push or pull fashion, using Get Source Documents or filters, and Create Pick starts the picking.
- Warehouse picks in advanced setups can be made manually or from the pick worksheet, with sorting and consolidation options and bin ranking.
- Cross-docking uses cross-dock bins and zones, with Use Cross-Docking, Calculate Cross-Dock and Cross-Dock Due Date Calc. fields. Cross-docked items are picked first.
- Warehouse assignments can be found from item cards or from the put-away, pick and movement pages, filtered by location and assigned user ID.
- A basic walkthrough shows method B: bin setup, warehouse release, inventory picks and shipment posting.

## Learn pages

- [Cross-Dock Items](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-cross-dock-items): Learn how to receive and ship items without putting them in storage.
- [Find Your Warehouse Assignments](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-find-your-warehouse-assignments): This topic explains how to find the warehouse assignments assigned to you on the Item Card page when instructions have been created for you.
- [How to pick items with inventory picks](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-items-with-inventory-picks): Learn how to use inventory picks to record and post picking and shipping info for source documents.
- [Outbound warehouse process overview](https://learn.microsoft.com/dynamics365/business-central/design-details-outbound-warehouse-flow): This article describes the outbound warehouse workflow.
- [Pick items for warehouse shipment](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-items-for-warehouse-shipment): Learn about using warehouse pick documents to create and process pick information prior to posting a warehouse shipment.
- [Picking and Shipping in Basic Warehouse Configurations](https://learn.microsoft.com/dynamics365/business-central/walkthrough-picking-and-shipping-in-basic-warehousing): This article describes various levels of complexity in picking and shipping processes.
- [Ship items](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-ship-items): This article describes how to ship items from your warehouse.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10127 [Extensibility Request] issue 30379: enable grouped pick printing](../../../../changes/bcapps/10127.md) (code change): "Report 5754 now exposes pick headers before printing through an event"
- [#10277 Slice 554749: Inventory put-away/pick support for subcontracting purchase lines and WIP item transfers](../../../../changes/bcapps/10277.md) (code change): "Inventory put-away and pick functionality is now supported for subcontracting"
- [#10795 [master] Discrepancy in inventory picks when the quantity exceeds the available inventory.](../../../../changes/bcapps/10795.md) (code change): "Fixed a calculation error in inventory pick creation that was incorrectly dropping shortage lines"
- [#11511 [29.x]Bug 647991 Assembly-to-Order Item Incorrectly Blocks Shipment of Unrelated Sales Order Line](../../../../changes/bcapps/11511.md) (code change): "posting an inventory pick for a non-ATO sales line could fail when an unrelated ATO line"
- [#9297 [Main]- Error The Bin Content does not exist.Not able to post an Inventory Pick for Assemble to Order](../../../../changes/bcapps/9297.md) (code change): "Fixed a bug preventing posting of inventory picks for assemble-to-order items"
- [#9333 [Main]-Bin content Block Movement does not prevent outbound posting for negative adjustments and sales orders](../../../../changes/bcapps/9333.md) (code change): "Bin content blocks are now checked during sales order posting to restrict movements"
- [#9451 [Extensibility Request] issue 30292: add temporary Warehouse Activity Line parameter to OnBeforeCreateWhseActivHeader](../../../../changes/bcapps/9451.md) (code change): "The OnBeforeCreateWhseActivHeader event in the Create Pick codeunit now includes"
- [#9532 [Master]Error when creating a Pick "Nothing to handle. The quantity to be picked is in bin W-09-0002, which is not set up for picking."](../../../../changes/bcapps/9532.md) (code change): "Fixes warehouse pick creation by checking all ship-type bins for picked-not-shipped quantities"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 15, 5703, 5768, 7302, 7332, 7335, 7337, 7339, 7340, 7341, 7362, 9000, 9008.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
