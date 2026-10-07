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
  at: "2026-10-07T02:32:59.251Z"
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

Path: [Business functionality](../../business-functionality.md) > [Design details](../design-details.md) > Design details: Supply planning · tier official · system inventory · narrative reviewed by Opus

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

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
