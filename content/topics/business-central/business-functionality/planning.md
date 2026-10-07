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
  at: "2026-10-07T02:32:59.251Z"
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
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality
  localizations: []
  videos: []
  posts:
    - post/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-7334878023159275001
    - post/olofsimren-com/3779
    - post/thedynamicsexplorer-com/7097
  guidelines: []
learn_toc_path:
  - Business functionality
  - Planning
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality
children: []
coverage:
  learn: 9
  code: 0
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

Path: [Business functionality](../business-functionality.md) > Planning · tier official · system inventory · narrative reviewed by Opus

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

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Create Purchase Orders from Drop Shipments](../../../posts/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-7334878023159275001.md) (community post): "Drop shipment lines are now visible and included in order planning calculations"
- [Approval Workflows in Planning Worksheet](../../../posts/olofsimren-com/3779.md) (community post): "approval workflow support to planning, requisition, and subcontracting worksheets"
- [Dynamics 365 Business Central – How to use the “Recurring Requisition Worksheet” for Recurring Purchase Orders](../../../posts/thedynamicsexplorer-com/7097.md) (community post): "Recurring Requisition Worksheet automates repeated purchases of the same items"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 291, 292, 293, 295, 517, 5430, 5522, 5524, 5526, 5830, 9010, 9038, 9101, 9245, 99000822, 99000842, 99000843, 99000852, 99000855, 99000860, 99000861, 99000862, 99000863, 99000883, 99000884, 99000919, 99000921, 99000922.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
