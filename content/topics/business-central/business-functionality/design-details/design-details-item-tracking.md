---
id: topic/business-central/business-functionality/design-details/design-details-item-tracking
type: topic
title: "Design details: Item tracking"
summary: "Item tracking design details in Business Central: how serial, lot and package numbers are tracked through the reservation system, posting, planning, warehouse and availability. It answers questions about the tables involved, how active and historic entries differ, and how tracking interacts with reservations and planning."
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:34.661Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 31182aca552f45627c1ec55a39cc9b88d71df729d0ca921de969c500428f95aa
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-active-versus-historic-item-tracking-entries
    title: Design details - Active versus historic item tracking entries
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking
    title: Design details - Item tracking
    date: "2026-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-planning
    title: Design details - Item tracking and planning
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-reservations
    title: Design details - Item tracking and reservations
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-availability
    title: Design details - Item tracking availability
    date: "2026-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-design
    title: Design details - Item tracking design
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-in-the-warehouse
    title: Design details - Item tracking in the warehouse
    date: "2026-03-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-lines-window
    title: Design details - Item Tracking Lines page
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure
    title: Design details - Item tracking posting structure
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/design-details-active-versus-historic-item-tracking-entries
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-planning
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-reservations
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-availability
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-design
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-in-the-warehouse
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-lines-window
    - https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/design-details
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10150
    - change/bcapps/10254
    - change/bcapps/10624
    - change/bcapps/10716
    - change/bcapps/10934
    - change/bcapps/8905
    - change/bcapps/9346
    - change/bcapps/9464
    - change/bcapps/9465
    - change/bcapps/9466
    - change/bcapps/9651
    - change/bcapps/9754
    - change/bcapps/9864
    - change/bcapps/9898
    - change/bcapps/9982
learn_toc_path:
  - Business functionality
  - Design details
  - "Design details: Item tracking"
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/design-details
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 888b74b93d1eeef22093ba36d001ab2c7bf2b77c2a4111f3091c847717c8cf31
narrative: generated
---

# Design details: Item tracking

> Item tracking design details in Business Central: how serial, lot and package numbers are tracked through the reservation system, posting, planning, warehouse and availability. It answers questions about the tables involved, how active and historic entries differ, and how tracking interacts with reservations and planning.

Path: [Business functionality](../../business-functionality.md) > [Design details](../design-details.md) > Design details: Item tracking · tier official · system inventory · narrative reviewed (checked by Opus)

## Overview

Item tracking lets you follow serial, lot and package numbers through the supply chain. The pages in this section describe the underlying design: how tracking data is stored in the Tracking Specification and Reservation Entry tables, how it is posted to item ledger entries, and how it links to posted documents.

The pages fit together by topic. The overview and design pages give the architecture. Separate pages cover the Item Tracking Lines page, availability calculation, reservations with late binding, planning and order tracking, warehouse documents, and the posting structure with its relation tables. A further page shows active versus historic entries with a purchase order example.

Start with "Design details - Item tracking" for the scope and links, then read "Item tracking design". After that, go to the page that matches your question, such as warehouse, planning or posting.

## Key points

- Item tracking is built on the reservation system and links to posted documents and item ledger entries. The Item tracking design page covers serial, lot and package numbers and is tagged with 2021 release wave 1.
- Tracking entries live in the Tracking Specification and Reservation Entry tables. The active versus historic page uses a purchase order example to show how quantities move through receiving and invoicing.
- Late binding lets serial or lot numbers be coupled to supply and demand later; nonspecific reservations are reshuffled at posting to match the items actually picked.
- Item tracking numbers affect planning and order tracking, including supply-demand matching and transfer planning for items needing specific tracking.
- The Item Tracking Lines and Item Tracking Summary pages show dynamic availability: Total Quantity, Total Requested Quantity, Current Pending Quantity, Total Available Quantity, with a Refresh Availability action.
- Warehouse coverage focuses on inbound and outbound warehouse documents, item tracking assignment, warehouse activity documents and the relationship with the reservation system.
- Posting uses Item Entry Relation and Value Entry Relation tables with one-to-many relations between item ledger entries and posted documents, including invoice posting.

## Learn pages

- [Design details - Active versus historic item tracking entries](https://learn.microsoft.com/dynamics365/business-central/design-details-active-versus-historic-item-tracking-entries): When parts of a document line quantity are posted, only that quantity is transferred to the item ledger entries and its item tracking numbers.
- [Design details - Item tracking](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking): The item tracking system provides easy handling of serial and lot numbers, which may be needed for meeting legal requirements or assist with warranty handling.
- [Design details - Item tracking and planning](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-planning): Because they are stored in the reservation system, item tracking numbers are fully coordinated with order tracking records.
- [Design details - Item tracking and reservations](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-reservations): This topic talks about item tracking and reservations, and describes the concepts behind the two options.
- [Design details - Item tracking availability](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-availability): The Item Tracking Lines and Item Tracking Summary pages provide dynamic availability information for serial or lot numbers, increasing transparency for users.
- [Design details - Item tracking design](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-design): This article describes the design behind item tracking in Business Central as it matures through product versions.
- [Design details - Item tracking in the warehouse](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-in-the-warehouse): Inbound and outbound warehouse documents have standard functionality for assigning and selecting item tracking numbers.
- [Design details - Item Tracking Lines page](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-lines-window): Read about how to manage the flow of serial and lot numbers in your inventory using the Item Tracking Lines page.
- [Design details - Item tracking posting structure](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure): Learn how to use item ledger entries as the primary carrier of item tracking numbers in the Item Tracking Posting Structure.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10150 [Bug 617189] Clarify strict expiration posting tooltip](../../../../changes/bcapps/10150.md) (code change): "First-Expired-First-Out picking for tracked items, independent of the location"
- [#10254 Fix 644744: Undo subcontracting receipt keys Item Entry Relation with Capacity Ledger Entry No.](../../../../changes/bcapps/10254.md) (code change): "item entry relations from the actual posted Output Item Ledger Entry"
- [#10624 [MAIN]-Bug 647352 Issue with lot no assignment after posting a transfer order](../../../../changes/bcapps/10624.md) (code change): "Transfer shipments for tracked items now correctly consume the matching lot"
- [#10716 [Main] [ALL-E] "Item tracking is defined for item 1000 in the Requisition Line. You must delete the existing item tracking before modifying or deleting the Requisition line" err when creating a Purchase Order from a Sales Order including DROP Shipment Bug 643358](../../../../changes/bcapps/10716.md) (code change): "Item tracking is defined for item 1000 in the Requisition Line"
- [#10934 [29.x][REPAIR] [ALL-E] Item tracking validation when lot numbers are assigned concerns the warehouse pick level rather than at the sales order level](../../../../changes/bcapps/10934.md) (code change): "Item tracking validation for lot numbers now occurs at the sales order level"
- [#8905 [Master] Different source reference on reservation entries created directly from Job Planning Line and via a warehouse pick.](../../../../changes/bcapps/8905.md) (code change): "Reservation entries from job planning lines maintain consistent source references"
- [#9346 [master]-Cannot delete Project Planning Line due to incorrect reservation entries](../../../../changes/bcapps/9346.md) (code change): "correctly handles reservation entries when deleting project planning"
- [#9464 [Extensibility Request] issue 30349: add OnBeforeCheckTrackingIfRequired event to Item Journal Line](../../../../changes/bcapps/9464.md) (code change): "add OnBeforeCheckTrackingIfRequired event to Item Journal Line"
- [#9465 [Extensibility Request] issue 30350: add OnBeforeTestFirstApplyItemLedgerEntryTracking event](../../../../changes/bcapps/9465.md) (code change): "add OnBeforeTestFirstApplyItemLedgerEntryTracking event"
- [#9466 [Extensibility Request] issue 30351: extend OnCheckExpirationDateOnBeforeAssignExpirationDate event](../../../../changes/bcapps/9466.md) (code change): "extend OnCheckExpirationDateOnBeforeAssignExpirationDate event"
- [#9651 [Extensibility Request] issue 30352: add SkipNewExpirationDateCheck to OnCheckExpirationDateOnAfterCalcSumLot](../../../../changes/bcapps/9651.md) (code change): "A new parameter SkipNewExpirationDateCheck was added to the OnCheckExpirationDateOnAfterCalcSumLot event"
- [#9754 [Extensibility Request] issue 30380: add OnSplitPostedWhseReceiptLineOnNotFindWhseItemEntryRelation event](../../../../changes/bcapps/9754.md) (code change): "Item Tracking Management, allowing extensions to customize the handling of posted warehouse receipt lines"
- [#9864 [Extensibility Request] issue 29078: Add OnBeforeTestTransferLine event](../../../../changes/bcapps/9864.md) (code change): "TestTransferLine procedure on the Transfer Header table, enabling extensions to observe or extend transfer line testing logic"
- [#9898 [Main]-The Reservation Entry does not exist error when creating a Purchase Order from a Sales Order](../../../../changes/bcapps/9898.md) (code change): "Reservation Entries from being created when generating a Purchase Order from a Sales Order"
- [#9982 [Main] Item tracking validation when lot numbers are assigned concerns the warehouse pick level rather than at the sales order levelInitial Commit](../../../../changes/bcapps/9982.md) (code change): "Item tracking validation for lot numbers now occurs at the warehouse pick level"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
