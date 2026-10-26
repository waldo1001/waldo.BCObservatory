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
  at: "2026-10-26T08:22:02.554Z"
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
  videos:
    - video/SdQVQLNXVS0
  posts:
    - post/yzhums-com/67269
    - post/yzhums-com/68786
    - post/yzhums-com/72006
    - post/yzhums-com/73895
  guidelines: []
  changes:
    - change/bcapps/10150
    - change/bcapps/10254
    - change/bcapps/10624
    - change/bcapps/10716
    - change/bcapps/10934
    - change/bcapps/12542
    - change/bcapps/12690
    - change/bcapps/13056
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
  video: 1
  blog: 4
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
  - In the observatory: [Page 6510 "Item Tracking Lines"](../../../../objects/page/6510.md), [Table 336 "Tracking Specification"](../../../../objects/table/336.md), [Table 337 "Reservation Entry"](../../../../objects/table/337.md)
- [Design details - Item tracking](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking): The item tracking system provides easy handling of serial and lot numbers, which may be needed for meeting legal requirements or assist with warranty handling.
- [Design details - Item tracking and planning](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-planning): Because they are stored in the reservation system, item tracking numbers are fully coordinated with order tracking records.
  - In the observatory: [Table 337 "Reservation Entry"](../../../../objects/table/337.md)
- [Design details - Item tracking and reservations](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-and-reservations): This topic talks about item tracking and reservations, and describes the concepts behind the two options.
  - In the observatory: [Page 498 "Reservation"](../../../../objects/page/498.md), [Page 6510 "Item Tracking Lines"](../../../../objects/page/6510.md)
- [Design details - Item tracking availability](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-availability): The Item Tracking Lines and Item Tracking Summary pages provide dynamic availability information for serial or lot numbers, increasing transparency for users.
  - In the observatory: [Page 6500 "Item Tracking Summary"](../../../../objects/page/6500.md), [Page 6510 "Item Tracking Lines"](../../../../objects/page/6510.md), [Table 32 "Item Ledger Entry"](../../../../objects/table/32.md), [Table 337 "Reservation Entry"](../../../../objects/table/337.md)
- [Design details - Item tracking design](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-design): This article describes the design behind item tracking in Business Central as it matures through product versions.
  - In the observatory: [Table 336 "Tracking Specification"](../../../../objects/table/336.md), [Table 337 "Reservation Entry"](../../../../objects/table/337.md)
- [Design details - Item tracking in the warehouse](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-in-the-warehouse): Inbound and outbound warehouse documents have standard functionality for assigning and selecting item tracking numbers.
  - In the observatory: [Page 498 "Reservation"](../../../../objects/page/498.md), [Page 6510 "Item Tracking Lines"](../../../../objects/page/6510.md)
- [Design details - Item Tracking Lines page](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-lines-window): Read about how to manage the flow of serial and lot numbers in your inventory using the Item Tracking Lines page.
  - In the observatory: [Page 6510 "Item Tracking Lines"](../../../../objects/page/6510.md), [Table 32 "Item Ledger Entry"](../../../../objects/table/32.md), [Table 336 "Tracking Specification"](../../../../objects/table/336.md), [Table 337 "Reservation Entry"](../../../../objects/table/337.md)
- [Design details - Item tracking posting structure](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure): Learn how to use item ledger entries as the primary carrier of item tracking numbers in the Item Tracking Posting Structure.
  - In the observatory: [Codeunit 22 "Item Jnl.-Post Line"](../../../../objects/codeunit/22.md), [Codeunit 80 "Sales-Post"](../../../../objects/codeunit/80.md), [Table 336 "Tracking Specification"](../../../../objects/table/336.md), [Table 337 "Reservation Entry"](../../../../objects/table/337.md), [Table 6507 "Item Entry Relation"](../../../../objects/table/6507.md), [Table 6508 "Value Entry Relation"](../../../../objects/table/6508.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10150 [Bug 617189] Clarify strict expiration posting tooltip](../../../../changes/bcapps/10150.md) (code change): "First-Expired-First-Out picking for tracked items, independent of the location"
- [#10254 Fix 644744: Undo subcontracting receipt keys Item Entry Relation with Capacity Ledger Entry No.](../../../../changes/bcapps/10254.md) (code change): "item entry relations from the actual posted Output Item Ledger Entry"
- [#10624 [MAIN]-Bug 647352 Issue with lot no assignment after posting a transfer order](../../../../changes/bcapps/10624.md) (code change): "Transfer shipments for tracked items now correctly consume the matching lot"
- [#10716 [Main] [ALL-E] "Item tracking is defined for item 1000 in the Requisition Line. You must delete the existing item tracking before modifying or deleting the Requisition line" err when creating a Purchase Order from a Sales Order including DROP Shipment Bug 643358](../../../../changes/bcapps/10716.md) (code change): "Fixes the item tracking error raised for the requisition line"
- [#10934 [29.x][REPAIR] [ALL-E] Item tracking validation when lot numbers are assigned concerns the warehouse pick level rather than at the sales order level](../../../../changes/bcapps/10934.md) (code change): "Changes how Item Tracking Data Collection validates assigned lot numbers"
- [#12542 [Main]Incorrect Calculation of Remaining Prod. Order Comp.](../../../../changes/bcapps/12542.md) (code change): "Incorrect calculation of remaining production order component quantities"
- [#12690 [Master]-You must assign a serial number for item xxx" when trying to reverse Capacity Ledger Entry](../../../../changes/bcapps/12690.md) (code change): "Disabled item tracking for reversing capacity ledger entries that have zero output quantity"
- [#13056 [QM] Tracking specification quantity now is used properly](../../../../changes/bcapps/13056.md) (code change): "tracking specification quantity now is used properly"
- [#9465 [Extensibility Request] issue 30350: add OnBeforeTestFirstApplyItemLedgerEntryTracking event](../../../../changes/bcapps/9465.md) (code change): "A new integration event OnBeforeTestFirstApplyItemLedgerEntryTracking was added to codeunit 22 so extensions can validate item tracking"
- [#9466 [Extensibility Request] issue 30351: extend OnCheckExpirationDateOnBeforeAssignExpirationDate event](../../../../changes/bcapps/9466.md) (code change): "extend OnCheckExpirationDateOnBeforeAssignExpirationDate event"
- [#9651 [Extensibility Request] issue 30352: add SkipNewExpirationDateCheck to OnCheckExpirationDateOnAfterCalcSumLot](../../../../changes/bcapps/9651.md) (code change): "add SkipNewExpirationDateCheck to OnCheckExpirationDateOnAfterCalcSumLot"
- [#9754 [Extensibility Request] issue 30380: add OnSplitPostedWhseReceiptLineOnNotFindWhseItemEntryRelation event](../../../../changes/bcapps/9754.md) (code change): "Item Tracking Management, allowing extensions to customize the handling of posted warehouse receipt lines"
- [#9864 [Extensibility Request] issue 29078: Add OnBeforeTestTransferLine event](../../../../changes/bcapps/9864.md) (code change): "An OnBeforeTestTransferLine integration event was added to the TestTransferLine"
- [#9898 [Main]-The Reservation Entry does not exist error when creating a Purchase Order from a Sales Order](../../../../changes/bcapps/9898.md) (code change): "Reservation Entry does not exist error when creating a Purchase Order from a Sales Order"
- [#9982 [Main] Item tracking validation when lot numbers are assigned concerns the warehouse pick level rather than at the sales order levelInitial Commit](../../../../changes/bcapps/9982.md) (code change): "item tracking validation for assigned lot numbers was evaluated at the warehouse pick level"
- [Dynamics 365 Business Central: Automatically create Lot/Serial No. Information card on posting (No customization)](../../../../posts/yzhums-com/67269.md) (community post): "automatically create Lot and Serial Number Information cards during purchase order posting"
- [Dynamics 365 Business Central: How to record extra serial or lot number information (Item Tracking Comments)](../../../../posts/yzhums-com/68786.md) (community post): "Recording extra information for serial or lot numbers using the Item Tracking Comments feature"
- [Business Central 2026 release wave 1 (BC28): Experience improved usability in manufacturing](../../../../posts/yzhums-com/72006.md) (community post): "serial-tracked items get one line with quantity 1 per serial number while lot-tracked items"
- [Dynamics 365 Business Central: How to merge multiple lots (Lot No.) into one](../../../../posts/yzhums-com/73895.md) (community post): "tracking items via Item Tracking Lines, selecting lot numbers to consolidate"
- [What's New in Manufacturing: Order Processing (2025 release wave 1)](../../../../videos/SdQVQLNXVS0.md) (video): "Item tracking in consumption and output journals; Barcode label printing for tracked items"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
