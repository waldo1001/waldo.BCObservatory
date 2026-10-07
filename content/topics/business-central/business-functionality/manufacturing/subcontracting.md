---
id: topic/business-central/business-functionality/manufacturing/subcontracting
type: topic
title: Subcontracting
summary: "Subcontracting in Business Central manufacturing: how to delegate production operations to vendors. It answers questions about subcontracting purchase orders, the worksheet, component supply and transfers, item charges on receipts, and WIP transfers between subcontractors."
tier: official
language: en
system: manufacturing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:24.212Z"
  flags: []
generated:
  at: "2026-10-07T16:30:41.512Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f4d10a0fc526fbcc1d4ecd6217c3d5622ca4cdc32940d4ef83a2635283c02c11
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-item-charges
    title: Assign item charges to subcontracting receipts
    date: "2026-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-components
    title: Manage components in subcontracting
    date: "2026-07-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-order
    title: Order subcontracting
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-subcontract-manufacturing
    title: Subcontracting overview
    date: "2026-07-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-wip-transfers
    title: Transfer WIP items between subcontractors
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-item-charges
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-components
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-order
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-subcontract-manufacturing
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-wip-transfers
  objects:
    - object/page/50
    - object/page/5805
    - object/page/99000788
    - object/page/99000818
    - object/page/99000831
    - object/page/99000886
  features: []
  topics:
    - topic/business-central/business-functionality/manufacturing
  localizations: []
  videos:
    - video/QdWPlIV3Avk
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10080
    - change/bcapps/10174
    - change/bcapps/10206
    - change/bcapps/10208
    - change/bcapps/10277
    - change/bcapps/10278
    - change/bcapps/10343
    - change/bcapps/10423
    - change/bcapps/10483
    - change/bcapps/10635
    - change/bcapps/10917
    - change/bcapps/11001
    - change/bcapps/11147
    - change/bcapps/11280
    - change/bcapps/11292
    - change/bcapps/11320
    - change/bcapps/11368
    - change/bcapps/11644
    - change/bcapps/11939
    - change/bcapps/11945
    - change/bcapps/12080
    - change/bcapps/12082
    - change/bcapps/12143
    - change/bcapps/8747
    - change/bcapps/8750
    - change/bcapps/8752
    - change/bcapps/8754
    - change/bcapps/8757
    - change/bcapps/8902
    - change/bcapps/9080
    - change/bcapps/9085
    - change/bcapps/9120
    - change/bcapps/9121
    - change/bcapps/9130
    - change/bcapps/9191
    - change/bcapps/9276
    - change/bcapps/9278
    - change/bcapps/9396
    - change/bcapps/9573
    - change/bcapps/9612
    - change/bcapps/9741
    - change/bcapps/9747
    - change/bcapps/9787
    - change/bcapps/9797
    - change/bcapps/9818
    - change/bcapps/9892
learn_toc_path:
  - Business functionality
  - Manufacturing
  - Subcontracting
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/manufacturing
children: []
coverage:
  learn: 5
  code: 6
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 50
  - 5805
  - 99000788
  - 99000818
  - 99000831
  - 99000886
  - 99001503
  - 99001504
  - 99001560
  - 99001561
member_hash: 8804d1e1e312778270052de9bb1bb419afd19d29bc6190f8ee024c281b5de3e0
narrative: generated
---

# Subcontracting

> Subcontracting in Business Central manufacturing: how to delegate production operations to vendors. It answers questions about subcontracting purchase orders, the worksheet, component supply and transfers, item charges on receipts, and WIP transfers between subcontractors.

Path: [Business functionality](../../business-functionality.md) > [Manufacturing](../manufacturing.md) > Subcontracting · tier official · system manufacturing · narrative reviewed by Opus

## Overview

Subcontracting covers manufacturing operations that a vendor performs on your behalf. You can work with basic tools, or use the extended Subcontracting app, which adds a worksheet, subcontractor prices, component management, item charges and location management.

Start with the Subcontracting overview to see which capabilities apply. Then read Order subcontracting to create purchase orders from production order routings, directly or through the worksheet. Manage components in subcontracting covers how components reach the vendor, and Assign item charges to subcontracting receipts covers extra costs. Transfer WIP items between subcontractors is for multi-stage processes with more than one subcontractor.

## Key points

- Subcontracting purchase orders are created from production order routing operations, directly or via the subcontracting worksheet.
- Orders support comments, attachments, WIP tracking, and cost posting through the capacity ledger.
- Receiving can use inventory put-away or warehouse receipts.
- Component supply methods include vendor-supplied components, consignment at vendor, and transfer to vendor.
- Transfer orders, location assignment, flushing methods, and returns are part of component handling.
- Item charges such as transport, packaging, and testing can be assigned to subcontracting receipts, using the Get Receipt Lines function.
- Assigned item charges go into production order costs through capacity ledger entries rather than inventory.
- WIP items can be transferred between subcontractor locations using a Transfer WIP item flag, with WIP ledger entries, WIP quantity adjustment, transfer mode selection, and in-transit codes.

## Learn pages

- [Assign item charges to subcontracting receipts](https://learn.microsoft.com/dynamics365/business-central/subcontract-item-charges): Learn how to assign item charges such as transport and packaging costs to subcontracting purchase receipts for accurate production order costing.
- [Manage components in subcontracting](https://learn.microsoft.com/dynamics365/business-central/subcontract-components): Learn how component supply methods determine how you handle components, assign locations, create transfer orders and returns, and how flushing works.
- [Order subcontracting](https://learn.microsoft.com/dynamics365/business-central/subcontract-order): Learn how to create subcontracting purchase orders from production orders or by using the subcontracting worksheet, and how to print dispatch lists.
- [Subcontracting overview](https://learn.microsoft.com/dynamics365/business-central/production-how-to-subcontract-manufacturing): Get an overview of subcontracting capabilities for manufacturing, including subcontractor prices, component posting, transfer orders, and location management.
- [Transfer WIP items between subcontractors](https://learn.microsoft.com/dynamics365/business-central/subcontract-wip-transfers): Learn how to transfer work-in-progress (WIP) items between subcontractors using transfer orders, track WIP quantities in a dedicated ledger, and adjust or clean up WIP quantities.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10080 Bug 646141: Forward-port Subcontracting Dispatch List action from 28.x to main](../../../../changes/bcapps/10080.md) (code change): "Subcontracting app gains an app-owned Subcontractor Dispatch List action"
- [#10174 [Extensibility Request] issue 30137: allow overriding cost share application](../../../../changes/bcapps/10174.md) (code change): "Integration event added to ApplyShareOfCostToCostShareBuffer procedure"
- [#10206 Bug 646576: Preserve manually changed component Flushing Method on subcontracting transfers](../../../../changes/bcapps/10206.md) (code change): "Production order components in subcontracting transfers no longer lose their manually set Flushing Method"
- [#10208 [Subcontracting] Detect subcontracting purchase/transfer orders in legacy data check](../../../../changes/bcapps/10208.md) (code change): "legacy data check for subcontracting now detects production-order-linked purchase and transfer orders"
- [#10277 Slice 554749: Inventory put-away/pick support for subcontracting purchase lines and WIP item transfers](../../../../changes/bcapps/10277.md) (code change): "Enables warehouse put-away/pick operations for subcontracting purchase orders"
- [#10278 Subcontracting Operation Notes](../../../../changes/bcapps/10278.md) (code change): "Subcontracting operations now support dedicated comments at the standard task"
- [#10343 [Subcontracting] Bug 641241: Notify to install Subcontracting app in Subcontracting Worksheet](../../../../changes/bcapps/10343.md) (code change): "A notification now prompts users on SaaS to install the Subcontracting app"
- [#10423 Bug 620761: Move subconracting tests from base app to subcontracting app](../../../../changes/bcapps/10423.md) (code change): "Subcontracting-specific SCM and manufacturing tests moved from the base app"
- [#10483 [Subcontracting] Bug 647210 & 647791: Enable IT migration in production and keep Legacy Subcontracting on when app install is declined](../../../../changes/bcapps/10483.md) (code change): "Legacy Subcontracting to Subcontracting app migration now works in production environments"
- [#10635 [Subcontracting] (Bug: 638998) Add extensibility to Subcontracting app for IT partner migration](../../../../changes/bcapps/10635.md) (code change): "Subcontracting app gains integration events for report objects to support partner migration"
- [#10917 Bug 648535: Reprice subcontracting lines after scheduling](../../../../changes/bcapps/10917.md) (code change): "Subcontracting purchase lines are now repriced after backward scheduling finalizes the order date"
- [#11001 Bug 648577: [IT] Subcontracting migration does not precheck bin-mandatory locations](../../../../changes/bcapps/11001.md) (code change): "Subcontracting migration checks bin-mandatory locations for incompatible warehouse settings"
- [#11147 Bug 648962: Create transfer order shows generic error when existing transfers cover subcontracting demand](../../../../changes/bcapps/11147.md) (code change): "Create Transfer Order report now distinguishes between demand that is fully covered by existing transfers"
- [#11280 [Subcontracting] Bug 648949: Allow subcontracting direct transfers from warehouse locations](../../../../changes/bcapps/11280.md) (code change): "Subcontracting now allows direct transfers from warehouse-enabled source locations"
- [#11292 Bug 648535: Reprice subcontracting lines after scheduling](../../../../changes/bcapps/11292.md) (code change): "Reprice subcontracting lines after scheduling in multiple scenarios"
- [#11320 [Master]-[Subcontracting] Purchase Return Order cannot be posted for subcontracting, while Corrective Credit Memo works well](../../../../changes/bcapps/11320.md) (code change): "Purchase Return Orders for subcontracting can now be posted correctly"
- [#11368 [29.X]-[Subcontracting] Purchase Return Order cannot be posted for subcontracting, while Corrective Credit Memo works well](../../../../changes/bcapps/11368.md) (code change): "purchase return orders could not be posted for subcontracting operations"
- [#11644 [Subcontracting] Bug 648937: Transfer WIP Item is lost when production orders are created from Planning Worksheet](../../../../changes/bcapps/11644.md) (code change): "Transfer WIP Item is lost when production orders are created from Planning Worksheet"
- [#11939 Bug 650391: [Subcontracting] Show subcontracting transfer quantities](../../../../changes/bcapps/11939.md) (code change): "Show subcontracting transfer quantities for subcontracting components"
- [#11945 Bug 648959: [Subcontracting] Fix serial splitting for non-last subcontracting put-away lines](../../../../changes/bcapps/11945.md) (code change): "Fix serial splitting for non-last subcontracting put-away lines"
- [#12080 Bug 649448: [Subcontracting] [IT] Fully received WIP purchase orders block Disable Legacy Subcontracting](../../../../changes/bcapps/12080.md) (code change): "Fully received WIP purchase orders block Disable Legacy Subcontracting"
- [#12082 Bug 650429: [Repair Item] [Subcontracting] Show Document opens the wrong transfer order from Transfer Lines (Page 5749)](../../../../changes/bcapps/12082.md) (code change): "Transfer order page no longer opens incorrectly when accessing the subcontracting document from transfer lines"
- [#12143 Bug 649440: [Subcontracting] [IT] Disable Legacy Subcontracting leaves Component Supply Method empty after conversion](../../../../changes/bcapps/12143.md) (code change): "Italian subcontracting legacy migration now correctly maps the vendor's"
- [#8747 [Subcontracting] Disable "WIP Item Transfer" for Machine Center](../../../../changes/bcapps/8747.md) (code change): "Transfer WIP Item field on routing lines is now restricted"
- [#8750 [Bug Fix] #638688: Suppress availability warning for Transfer WIP Item lines](../../../../changes/bcapps/8750.md) (code change): "Transfer order lines flagged as WIP items now skip the"
- [#8752 [Bug Fix] #638531: Disable Open TO from PO actions on non-subcontracting lines](../../../../changes/bcapps/8752.md) (code change): "Open TO from PO actions on subcontracting purchase order lines"
- [#8754 [Bug Fix] #638815: Subcontracting: actionable error for blank Subc. Location Code on WIP transfers](../../../../changes/bcapps/8754.md) (code change): "Subcontracting: actionable error for blank Subc. Location Code on WIP transfers"
- [#8757 [Subcontracting] Bug 640115: Fix Subc. Order FlowField so subcontracting orders are visible in Purchase Order List](../../../../changes/bcapps/8757.md) (code change): "Fix Subc. Order FlowField so subcontracting orders are visible in Purchase Order List"
- [#8902 Bug 639568: Scope Subc. PO component location check to current prod order line](../../../../changes/bcapps/8902.md) (code change): "Scope Subc. PO component location check to current prod order line"
- [#9080 Bug 635072: Subcontracting order uses Prod. Order Line location, not Work Center](../../../../changes/bcapps/9080.md) (code change): "subcontracting order creation process now consistently uses the production order line location"
- [#9085 Bug 640958: Guided error for subcontracting direct transfer from whse-handling location](../../../../changes/bcapps/9085.md) (code change): "subcontracting transfer order creation report now provides a guided error when attempting direct transfer"
- [#9120 [Subcontracting] Bug 641399: Move Subcontracting Transfer Orders action out of Entries sub-group](../../../../changes/bcapps/9120.md) (code change): "Subcontracting Transfer Orders action moved from the Entries sub-group to the Order group level"
- [#9121 [Subcontracting] Bug 641405: Production Order actions in ILE page not clickable for transfer lines](../../../../changes/bcapps/9121.md) (code change): "Production Order actions on the Item Ledger Entries page are now clickable for subcontracting transfer-type items"
- [#9130 [Subcontracting] Refactor event subscriber for planning components and add test for Vendor-supplied components](../../../../changes/bcapps/9130.md) (code change): "Vendor-supplied components from generating separate planning demand while keeping them visible"
- [#9191 Bug 641232: [Subcontracting] Offer to install missing apps instead of hard error when disabling Legacy Subcontracting](../../../../changes/bcapps/9191.md) (code change): "disabling Legacy Subcontracting in Manufacturing Setup, the system now offers"
- [#9276 Add second subcontractor (Local Assembly) to Contoso Coffee manufacturing demo data](../../../../changes/bcapps/9276.md) (code change): "Renamed existing subcontractor to Bulk Assembly, Added second subcontractor Local Assembly"
- [#9278 Add Standard Tasks with work instructions to Contoso Coffee manufacturing demo data](../../../../changes/bcapps/9278.md) (code change): "Routing lines now reference Standard Task Codes, matching operations to tasks"
- [#9396 [Subcontracting] Fix subcontracting order opening wrong purchase order after creation](../../../../changes/bcapps/9396.md) (code change): "Fixed subcontracting order creation to open the newly created purchase order"
- [#9573 [Subcontracting] Fixed purchase order not opening the list of transfer orders when > 1 were created](../../../../changes/bcapps/9573.md) (code change): "Fixed subcontracting purchase orders to display all created transfer orders"
- [#9612 Fixing correct value for Legacy Subcontracting flag in Italy during u…](../../../../changes/bcapps/9612.md) (code change): "Italian customers upgrading to version 28.3 regain access to legacy subcontracting pages"
- [#9741 [Subcontracting] Bug 638816: Preserve Transfer WIP Item flag when toggling off Direct Transfer without a transit route](../../../../changes/bcapps/9741.md) (code change): "Preserve Transfer WIP Item flag when toggling off Direct Transfer"
- [#9747 [Subcontracting] Bug 641607: Fix misleading error message when disabling Legacy Subcontracting with open WIP purchase orders](../../../../changes/bcapps/9747.md) (code change): "Fix misleading error message when disabling Legacy Subcontracting"
- [#9787 [Subcontracting] Added actionable notification when a vendor does not have a subcontracting location code](../../../../changes/bcapps/9787.md) (code change): "Added actionable notification when a vendor does not have a subcontracting location code"
- [#9797 Bug 641388: Fix WIP transfer remainder over-creation when open line quantity is reduced](../../../../changes/bcapps/9797.md) (code change): "Fix WIP transfer remainder over-creation when open line quantity is reduced"
- [#9818 [Subcontracting] Added assisted setup guide for initial app configuration](../../../../changes/bcapps/9818.md) (code change): "Added assisted setup guide for initial app configuration"
- [#9892 [main] Bug 644283: Renumber Subcontracting app object ids as it clashes with partner range](../../../../changes/bcapps/9892.md) (code change): "Subcontracting app object IDs are renumbered to avoid conflicts with partner-reserved ranges"
- [What's new in SCM: Subcontracting (2026 release wave 2)](../../../../videos/QdWPlIV3Avk.md) (video): "Subcontracting extension; Component supply method; Vendor location tracking"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 50 "Purchase Order"](../../../../objects/page/50.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)
- [Page 5805 "Item Charge Assignment (Purch)"](../../../../objects/page/5805.md) · on [Table 5805 "Item Charge Assignment (Purch)"](../../../../objects/table/5805.md)
- [Page 99000788 "Production BOM Lines"](../../../../objects/page/99000788.md) · captioned "Lines" · on [Table 99000772 "Production BOM Line"](../../../../objects/table/99000772.md)
- [Page 99000818 "Prod. Order Components"](../../../../objects/page/99000818.md) · on [Table 5407 "Prod. Order Component"](../../../../objects/table/5407.md)
- [Page 99000831 "Released Production Order"](../../../../objects/page/99000831.md) · on [Table 5405 "Production Order"](../../../../objects/table/5405.md)
- [Page 99000886 "Subcontracting Worksheet"](../../../../objects/page/99000886.md) · captioned "Subcontracting Worksheets (Obsolete)" · on [Table 246 "Requisition Line"](../../../../objects/table/246.md)

Learn also names 4 objects with no object page: page/99001503, page/99001504, page/99001560, page/99001561.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
