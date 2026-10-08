---
id: topic/business-central/business-functionality/design-details/design-details-supply-planning
type: topic
title: "Design details: Supply planning"
summary: "Supply planning design details in Business Central: how the planning system balances supply and demand, applies reordering policies and planning parameters, and uses reservation, order tracking, action messaging, the planning assignment table and transfers. Answers how-it-works questions about planning logic."
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:00.486Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 541891c5133e2c3b992b5bd181008292dc9710241bcc012f320e3ee5b8ef3084
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-balancing-demand-and-supply
    title: Design details - Balancing supply and demand
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-central-concepts-of-the-planning-system
    title: Design details - central concepts of the planning system
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-handling-reordering-policies
    title: Design details - Handling reordering policies
    date: "2024-06-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-planning-assignment-table
    title: Design details - Planning assignment table
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-planning-parameters
    title: Design details - planning parameters
    date: "2025-09-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-reservation-order-tracking-and-action-messaging
    title: Design details - reservation, order tracking, and action messaging | Microsoft Docs
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-supply-planning
    title: Design Details - Supply Planning
    date: "2023-02-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-transfers-in-planning
    title: Design details - Transfers in planning
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/design-details-balancing-demand-and-supply
    - https://learn.microsoft.com/dynamics365/business-central/design-details-central-concepts-of-the-planning-system
    - https://learn.microsoft.com/dynamics365/business-central/design-details-handling-reordering-policies
    - https://learn.microsoft.com/dynamics365/business-central/design-details-planning-assignment-table
    - https://learn.microsoft.com/dynamics365/business-central/design-details-planning-parameters
    - https://learn.microsoft.com/dynamics365/business-central/design-details-reservation-order-tracking-and-action-messaging
    - https://learn.microsoft.com/dynamics365/business-central/design-details-supply-planning
    - https://learn.microsoft.com/dynamics365/business-central/design-details-transfers-in-planning
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/design-details
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10030
    - change/bcapps/10166
    - change/bcapps/11411
    - change/bcapps/12124
    - change/bcapps/12188
    - change/bcapps/9118
    - change/bcapps/9196
    - change/bcapps/9224
    - change/bcapps/9346
    - change/bcapps/9449
    - change/bcapps/9538
    - change/bcapps/9788
    - change/bcapps/9963
    - change/bcquality/192
learn_toc_path:
  - Business functionality
  - Design details
  - "Design details: Supply planning"
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/design-details
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: bcfeaf5dbb15f9c040435588b66114616504378d5d23151346d7aa417b8b0583
narrative: generated
---

# Design details: Supply planning

> Supply planning design details in Business Central: how the planning system balances supply and demand, applies reordering policies and planning parameters, and uses reservation, order tracking, action messaging, the planning assignment table and transfers. Answers how-it-works questions about planning logic.

Path: [Business functionality](../../business-functionality.md) > [Design details](../design-details.md) > Design details: Supply planning · tier official · system inventory · narrative reviewed (checked by Opus)

## Overview

This section explains the logic behind Business Central supply planning. It describes the central concepts (demand-driven planning, planning parameters, dynamic order tracking, sequencing by low-level code, and warnings) and how the system balances supply orders against demand to meet inventory goals.

The pages fit together in layers. The introductory Supply Planning page and the central concepts page give the overview. Planning parameters and reordering policies cover when and how much to reorder. Balancing supply and demand covers how the system prioritizes and matches orders. The planning assignment table, reservation and order tracking, and transfers pages cover the supporting mechanisms.

Start with the Supply Planning page and the central concepts page. Then read planning parameters and reordering policies if you are configuring items. Read the balancing page if you need to understand why the planning system proposes a certain result.

## Key points

- Central concepts include demand-driven planning, planning parameters, dynamic order tracking, sequencing by low-level code, and emergency and exception warnings.
- Four reordering policies are documented: Fixed Reorder Qty., Maximum Qty., Order, and Lot-for-Lot, monitored against reorder points.
- Planning parameters cover reorder point, safety stock, time bucket, safety lead time, and rescheduling period.
- Balancing supply and demand uses inventory profiles, demand prioritization, time buckets, and order tracking links.
- The Planning Assignment table monitors demand and supply events to flag items that need recalculation for MPS or MRP.
- Reservation, order tracking, and action messaging are interrelated systems that link demand and supply to keep the order network balanced.
- Transfer orders act as dependent demand and supply across locations and are processed in sequence by transfer level code.
- The central concepts page covers dynamic and optimized low-level code calculation, planning flexibility, and finite loading.

## Learn pages

- [Design details - Balancing supply and demand](https://learn.microsoft.com/dynamics365/business-central/design-details-balancing-demand-and-supply): This article describes how to prioritized goals by balancing supply with demand.
- [Design details - central concepts of the planning system](https://learn.microsoft.com/dynamics365/business-central/design-details-central-concepts-of-the-planning-system): Planning suggests actions for the user to take based on the demand/supply situation and the items' planning parameters.
- [Design details - Handling reordering policies](https://learn.microsoft.com/dynamics365/business-central/design-details-handling-reordering-policies): This article gives an overview of the reordering policies you can use in supply planning.
- [Design details - Planning assignment table](https://learn.microsoft.com/dynamics365/business-central/design-details-planning-assignment-table): This topic provides insight into what happens when a change in the demand or supply patterns requires that you calculate how you plan for an item.
- [Design details - planning parameters](https://learn.microsoft.com/dynamics365/business-central/design-details-planning-parameters): This article describes the different planning parameters that you can use and how they affect the planning system.
- [Design details - reservation, order tracking, and action messaging \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/design-details-reservation-order-tracking-and-action-messaging): The reservation system is comprehensive and includes the interrelated and parallel features of Order Tracking and Action Messaging.
- [Design Details - Supply Planning](https://learn.microsoft.com/dynamics365/business-central/design-details-supply-planning): This article describes the concepts and principles in the supply planning features in Business Central.
- [Design details - Transfers in planning](https://learn.microsoft.com/dynamics365/business-central/design-details-transfers-in-planning): Learn how to use transfer orders as a source of supply when planning inventory levels.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10030 [main]planning worksheet requires second runof calculate regenerative plan](../../../../changes/bcapps/10030.md) (code change): "planning worksheets generate all required planning lines in a single run"
- [#10166 [Extensibility Request] issue 29643: enable split transfer demand profiles](../../../../changes/bcapps/10166.md) (code change): "Transfer demand profile handling now supports an event that allows extensions"
- [#11411 [Master]-Item Availability by BOM Level Produces Inconsistent Able-to-Make Results When G-TOP-BOM-02 Replenishment Changes from Assembly to Purchase - 2606050050002529](../../../../changes/bcapps/11411.md) (code change): "Fixed inconsistent able-to-make calculations in BOM analysis when a component's"
- [#12124 Fix default bin assignment when creating purchase orders for drop shipments](../../../../changes/bcapps/12124.md) (code change): "Fixed default bin assignment for drop shipments when creating purchase orders"
- [#12188 [Master]-Reserved quantities do not match the expected quantities after planning - regression due to correction](../../../../changes/bcapps/12188.md) (code change): "reserved quantities did not match the expected quantities after planning"
- [#9118 Bugs/master GitHub event batch 1745](../../../../changes/bcapps/9118.md) (code change): "planning, availability check and item budget Excel reports"
- [#9196 [Master] - What If Impact on Planning and Supply](../../../../changes/bcapps/9196.md) (code change): "supply what-if analysis to analyze the negative impact of supply changes on demand"
- [#9224 [main] GitHub event batch 1746](../../../../changes/bcapps/9224.md) (code change): "Calculate Plan - Plan. Wksh. and Whse.-Source - Create Document"
- [#9346 [master]-Cannot delete Project Planning Line due to incorrect reservation entries](../../../../changes/bcapps/9346.md) (code change): "Fixes a bug where a Project Planning Line could not be deleted because incorrect reservation entries existed"
- [#9449 [Extensibility Request] issue 30334: fix OnAfterCarryOutToReqWksh record order](../../../../changes/bcapps/9449.md) (code change): "OnAfterCarryOutToReqWksh integration event now passes the target requisition"
- [#9538 [main]- Requests to Approve: Open Record shows wrong Requisition Worksheet batch after viewing a different batch](../../../../changes/bcapps/9538.md) (code change): "Req. Worksheet page now correctly displays the intended requisition batch"
- [#9788 [Master]-Incorrect Reservation Split Generated After Replanning a Replenishment Production Order Created by MRP Planning Run](../../../../changes/bcapps/9788.md) (code change): "replanning production orders with multiple component lines using the same item"
- [#9963 [Extensibility Request] issue 30384: expose planning suggestions variable](../../../../changes/bcapps/9963.md) (code change): "Item Availability by Event page is now accessible"
- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md) (code change): "SCM functional knowledge domain added with nine scoped rules"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
