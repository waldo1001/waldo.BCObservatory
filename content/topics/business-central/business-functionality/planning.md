---
id: topic/business-central/business-functionality/planning
type: topic
title: Planning
summary: Planning in Business Central covers how the planning system balances supply and demand. It answers questions about forecasts, MPS and MRP runs, order-by-order planning, production orders from sales orders, replanning, location effects, and order tracking.
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:38.666Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1076309ad2f38a9c48fe9ef1621ee79b673bb8fadecb9321ade29fbbe0b2ede4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-about-planning-functionality
    title: About planning functionality
    date: "2026-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-create-a-forecast
    title: Create a demand forecast
    date: "2026-07-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-create-production-orders-from-sales-orders
    title: Create Production Orders from Sales Orders
    date: "2023-02-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-plan-for-new-demand
    title: Plan for New Demand Order by Order
    date: "2026-06-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-planning-with-without-locations
    title: Planning With or Without Locations
    date: "2022-09-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-replan-refresh-production-orders
    title: Replan or refresh production orders directly
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-run-mps-and-mrp
    title: Run Full Planning, MPS, or MRP
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-planning
    title: Supply Planning
    date: "2026-07-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-track-demand-supply
    title: Track Relations Between Demand and Supply
    date: "2021-06-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/production-about-planning-functionality
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-create-a-forecast
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-create-production-orders-from-sales-orders
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-plan-for-new-demand
    - https://learn.microsoft.com/dynamics365/business-central/production-planning-with-without-locations
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-replan-refresh-production-orders
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-run-mps-and-mrp
    - https://learn.microsoft.com/dynamics365/business-central/production-planning
    - https://learn.microsoft.com/dynamics365/business-central/production-how-track-demand-supply
  objects:
    - object/page/291
    - object/page/292
    - object/page/293
    - object/page/295
    - object/page/517
    - object/page/5430
    - object/page/5522
    - object/page/5524
    - object/page/5526
    - object/page/5830
    - object/page/9010
    - object/page/9038
    - object/page/9101
    - object/page/99000822
    - object/page/99000842
    - object/page/99000843
    - object/page/99000852
    - object/page/99000855
    - object/page/99000860
    - object/page/99000861
    - object/page/99000862
    - object/page/99000863
    - object/page/99000883
    - object/page/99000884
    - object/page/99000921
    - object/page/99000922
  features: []
  topics:
    - topic/business-central/business-functionality
  localizations: []
  videos: []
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-7334878023159275001--89079995d0
    - post/thedynamicsexplorer-com/7097
  guidelines: []
  changes:
    - change/bcapps/10030
    - change/bcapps/10166
    - change/bcapps/11522
    - change/bcapps/11994
    - change/bcapps/9538
learn_toc_path:
  - Business functionality
  - Planning
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality
children: []
coverage:
  learn: 9
  code: 26
  video: 0
  blog: 3
  guideline: 0
bc_forms:
  - 291
  - 292
  - 293
  - 295
  - 517
  - 5430
  - 5522
  - 5524
  - 5526
  - 5830
  - 9010
  - 9038
  - 9101
  - 9245
  - 99000822
  - 99000842
  - 99000843
  - 99000852
  - 99000855
  - 99000860
  - 99000861
  - 99000862
  - 99000863
  - 99000883
  - 99000884
  - 99000919
  - 99000921
  - 99000922
member_hash: 2c0efdb54fdf8b9ca586037daec2328e07f0bc0440cd110faedfb108ce1c8654
narrative: generated
---

# Planning

> Planning in Business Central covers how the planning system balances supply and demand. It answers questions about forecasts, MPS and MRP runs, order-by-order planning, production orders from sales orders, replanning, location effects, and order tracking.

Path: [Business functionality](../business-functionality.md) > Planning · tier official · system inventory · narrative reviewed (checked by Opus)

## Overview

Planning is the area that calculates what to buy, produce, assemble, or transfer to meet demand. The pages start with concepts: "About planning functionality" explains planning parameters, worksheets, regenerative and net change plans, and warnings. "Supply Planning" describes balancing demand and supply with MPS and MRP.

Practical pages cover the main workflows. You can create demand forecasts, run full planning, MPS, or MRP, or plan manually with Order Planning. You can also create production orders directly from sales orders and replan or refresh production orders after changes.

Supporting pages explain behavior that affects results. "Planning With or Without Locations" describes how location codes and SKU setup change which parameters apply. "Track Relations Between Demand and Supply" covers order tracking, reservations, and untracked planning elements. Start with "About planning functionality", then pick the workflow you need.

## Key points

- Planning calculates supply and demand using planning parameters, worksheets, and multilevel production order management.
- Plan calculation methods include regenerative plan, net change plan, and get action messages, for MPS, MRP, or combined.
- Demand forecasts can be sales, production, or component forecasts, by location or variant, and feed MPS and MRP.
- Order Planning handles new demand order by order from sales orders, production components, and service orders, with purchase, production, or transfer supply.
- Sales Order Planning creates production orders for produced items, with Item Order or Project Order types.
- Replan and Refresh actions recalculate components and routings of production orders, with a scheduling direction option.
- Location setup (Components at Location, Location Mandatory) and SKU parameters determine which planning parameters apply.
- Order tracking, order-to-order links, and untracked planning elements (such as safety stock and reorder point) show how demand and supply relate.

## Learn pages

- [About planning functionality](https://learn.microsoft.com/dynamics365/business-central/production-about-planning-functionality): Learn how planning uses demand and supply data to suggest how to balance supply to meet demand.
- [Create a demand forecast](https://learn.microsoft.com/dynamics365/business-central/production-how-to-create-a-forecast): Learn about the demand forecasting features, and how you can create sales and production forecasts.
- [Create Production Orders from Sales Orders](https://learn.microsoft.com/dynamics365/business-central/production-how-to-create-production-orders-from-sales-orders): Learn different ways to create production orders for produced items directly from sales orders.
- [Plan for New Demand Order by Order](https://learn.microsoft.com/dynamics365/business-central/production-how-to-plan-for-new-demand): This planning task can be performed on the Order Planning page, which displays all new demand along with availability information and suggestions for supply, including item substitution.
- [Planning With or Without Locations](https://learn.microsoft.com/dynamics365/business-central/production-planning-with-without-locations): In this topic learn about production and manufacturing, including supply planning, in Business Central.
- [Replan or refresh production orders directly](https://learn.microsoft.com/dynamics365/business-central/production-how-to-replan-refresh-production-orders): This article outlines the procedures for how to replan production orders and refresh production orders directly.
- [Run Full Planning, MPS, or MRP](https://learn.microsoft.com/dynamics365/business-central/production-how-to-run-mps-and-mrp): The planning system can calculate either Master Production Schedule (MPS) or Material Requirements Planning (MRP) on request, or both at the same time.
- [Supply Planning](https://learn.microsoft.com/dynamics365/business-central/production-planning): Prepare a detailed executable plan and the final-assembly production schedule for sales and production demand.
- [Track Relations Between Demand and Supply](https://learn.microsoft.com/dynamics365/business-central/production-how-track-demand-supply): This topic explains the different ways to track relations between demand and supply such as tracking linked items and dealing with untracked planing elements.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10030 [main]planning worksheet requires second runof calculate regenerative plan](../../../changes/bcapps/10030.md) (code change): "Calculate Regenerative Plan twice for SKU-only multi-level BOM structures"
- [#10166 [Extensibility Request] issue 29643: enable split transfer demand profiles](../../../changes/bcapps/10166.md) (code change): "preserving distinct cable and cut-length requirements instead of aggregating quantities"
- [#11522 [main] [Order Planning] Production copy allows Req. worksheet templates that cannot create production orders](../../../changes/bcapps/11522.md) (code change): "Production order copying in Order Planning now restricts the destination to nonrecurring Planning-type worksheets"
- [#11994 [Master]- [Planning Worksheet] Production Copy to Req. Wksh fails because destination fields are missing](../../../changes/bcapps/11994.md) (code change): "Carry Out Action Message - Planning report failed to copy production orders to requisition worksheets"
- [#9538 [main]- Requests to Approve: Open Record shows wrong Requisition Worksheet batch after viewing a different batch](../../../changes/bcapps/9538.md) (code change): "Requisition Worksheet batch after viewing a different batch"
- [Approval Workflows for Item Journals and Requisition Worksheets](../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5164599344222477027--9edacb0c44.md) (community post): "Requisition and planning worksheets can require approval before converting"
- [Create Purchase Orders from Drop Shipments](../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-7334878023159275001--89079995d0.md) (community post): "drop shipment lines are now visible and included in order planning calculations"
- [Dynamics 365 Business Central – How to use the “Recurring Requisition Worksheet” for Recurring Purchase Orders](../../../posts/thedynamicsexplorer-com/7097.md) (community post): "Recurring Requisition Worksheet automates repeated purchases of the same items by preserving worksheet lines"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 291 "Req. Worksheet"](../../../objects/page/291.md) · captioned "Requisition Worksheets" · on [Table 246 "Requisition Line"](../../../objects/table/246.md)
- [Page 292 "Req. Worksheet Template List"](../../../objects/page/292.md) · on [Table 244 "Req. Wksh. Template"](../../../objects/table/244.md)
- [Page 293 "Req. Worksheet Templates"](../../../objects/page/293.md) · captioned "Requisition Worksheet Templates" · on [Table 244 "Req. Wksh. Template"](../../../objects/table/244.md)
- [Page 295 "Req. Wksh. Names"](../../../objects/page/295.md) · on [Table 245 "Requisition Wksh. Name"](../../../objects/table/245.md)
- [Page 517 "Requisition Lines"](../../../objects/page/517.md) · on [Table 246 "Requisition Line"](../../../objects/table/246.md)
- [Page 5430 "Planning Error Log"](../../../objects/page/5430.md) · on [Table 5430 "Planning Error Log"](../../../objects/table/5430.md)
- [Page 5522 "Order Planning"](../../../objects/page/5522.md) · on [Table 246 "Requisition Line"](../../../objects/table/246.md)
- [Page 5524 "Get Alternative Supply"](../../../objects/page/5524.md) · on [Table 246 "Requisition Line"](../../../objects/table/246.md)
- [Page 5526 "Make Supply Orders"](../../../objects/page/5526.md) · on [Table 5525 "Manufacturing User Template"](../../../objects/table/5525.md)
- [Page 5830 "Demand Overview"](../../../objects/page/5830.md) · on [Table 5830 "Availability Calc. Overview"](../../../objects/table/5830.md)
- [Page 9010 "Production Planner Role Center"](../../../objects/page/9010.md) · captioned "Manufacturing Manager"
- [Page 9038 "Production Planner Activities"](../../../objects/page/9038.md) · captioned "Activities" · on [Table 9056 "Manufacturing Cue"](../../../objects/table/9056.md)
- [Page 9101 "Untracked Plng. Elements Part"](../../../objects/page/9101.md) · captioned "Untracked Planning Elements" · on [Table 99000855 "Untracked Planning Element"](../../../objects/table/99000855.md)
- [Page 99000822 "Order Tracking"](../../../objects/page/99000822.md) · on [Table 99000799 "Order Tracking Entry"](../../../objects/table/99000799.md)
- [Page 99000842 "Prod. Order Comp. Cmt. Sheet"](../../../objects/page/99000842.md) · captioned "Comment List" · on [Table 5416 "Prod. Order Comp. Cmt Line"](../../../objects/table/5416.md)
- [Page 99000843 "Prod. Order BOM Cmt List"](../../../objects/page/99000843.md) · captioned "Comment List" · on [Table 5416 "Prod. Order Comp. Cmt Line"](../../../objects/table/5416.md)
- [Page 99000852 "Planning Worksheet"](../../../objects/page/99000852.md) · captioned "Planning Worksheets" · on [Table 246 "Requisition Line"](../../../objects/table/246.md)
- [Page 99000855 "Untracked Planning Elements"](../../../objects/page/99000855.md) · on [Table 99000855 "Untracked Planning Element"](../../../objects/table/99000855.md)
- [Page 99000860 "Planning Worksheet Line List"](../../../objects/page/99000860.md) · on [Table 246 "Requisition Line"](../../../objects/table/246.md)
- [Page 99000861 "Planning Component List"](../../../objects/page/99000861.md) · on [Table 99000829 "Planning Component"](../../../objects/table/99000829.md)
- [Page 99000862 "Planning Components"](../../../objects/page/99000862.md) · on [Table 99000829 "Planning Component"](../../../objects/table/99000829.md)
- [Page 99000863 "Planning Routing"](../../../objects/page/99000863.md) · on [Table 99000830 "Planning Routing Line"](../../../objects/table/99000830.md)
- [Page 99000883 "Sales Order Planning"](../../../objects/page/99000883.md) · on [Table 99000800 "Sales Planning Line"](../../../objects/table/99000800.md)
- [Page 99000884 "Create Order From Sales"](../../../objects/page/99000884.md) · on [Table 27 "Item"](../../../objects/table/27.md)
- [Page 99000921 "Demand Forecast Names"](../../../objects/page/99000921.md) · captioned "Demand Forecasts" · on [Table 99000851 "Production Forecast Name"](../../../objects/table/99000851.md)
- [Page 99000922 "Demand Forecast Entries"](../../../objects/page/99000922.md) · on [Table 99000852 "Production Forecast Entry"](../../../objects/table/99000852.md)

Learn also names 2 objects with no object page: page/9245, page/99000919.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
