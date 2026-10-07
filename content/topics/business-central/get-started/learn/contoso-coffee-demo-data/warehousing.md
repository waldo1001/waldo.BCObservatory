---
id: topic/business-central/get-started/learn/contoso-coffee-demo-data/warehousing
type: topic
title: Warehousing
summary: Contoso Coffee warehousing demo data in Business Central, covering three warehouse locations that show basic, mixed and advanced configurations. It answers questions about how receiving, put-away, picking, moving and shipping work in each setup.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:17.872Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b786e8a1c4c8db4fa66e3ced32b54b91f0df541e466dba93233eb541ac5ebf8b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/contoso-coffee-warehousing-intro
    title: Introduction to Contoso Coffee
    date: "2022-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-basic-flow-putaway-pick
    title: Receiving, Puting-away, Picking and Shipping in Basic Warehouse Configuration
    date: "2024-02-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-mixed-flow-receive-pick-ship
    title: Receiving, puting-away, picking, and shipping in a mixed warehouse configuration
    date: "2025-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-directed-flow
    title: Receiving, putting-away, moving, picking and shipping in advanced warehouse configuration
    date: "2023-12-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/contoso-coffee-warehousing-intro
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-basic-flow-putaway-pick
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-mixed-flow-receive-pick-ship
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-directed-flow
  objects:
    - object/page/4764
  features: []
  topics:
    - topic/business-central/get-started/learn/contoso-coffee-demo-data
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Learn
  - Contoso Coffee demo data
  - Warehousing
toc_file: business-central/TOC.md
parent: topic/business-central/get-started/learn/contoso-coffee-demo-data
children: []
coverage:
  learn: 4
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 4764
member_hash: e3b461b25ae1bc1a4bffc030efdee2744331894d0b5e9515c3823bc362a5ac09
narrative: generated
---

# Warehousing

> Contoso Coffee warehousing demo data in Business Central, covering three warehouse locations that show basic, mixed and advanced configurations. It answers questions about how receiving, put-away, picking, moving and shipping work in each setup.

Path: [Get started](../../../get-started.md) > [Learn](../../learn.md) > [Contoso Coffee demo data](../contoso-coffee-demo-data.md) > Warehousing · tier official · system none · narrative reviewed by Opus

## Overview

This section uses the Contoso Coffee demo data to walk through warehouse processes in three configurations. An introduction page describes the three demo locations: one basic with bins, one advanced without bins, and one advanced with directed put-away and pick.

Three walkthroughs follow. The SILVER location shows the basic configuration (Order-by-Order) with inventory put-away and inventory pick. The YELLOW location shows a mixed setup with basic inbound and advanced outbound flows. The WHITE location shows the advanced configuration with directed put-away and pick.

Start with the introduction to see which location fits your scenario, then open the walkthrough for that location.

## Key points

- The demo data provides three warehouse locations for different configuration scenarios.
- SILVER: basic warehouse configuration (Order-by-Order) with bins, default bins, inventory put-away and inventory pick.
- YELLOW: mixed configuration with basic inbound and advanced outbound flows.
- YELLOW walkthrough covers an over-receipt code, warehouse receipts, warehouse shipments and warehouse picks.
- WHITE: advanced configuration with directed put-away and pick.
- WHITE walkthrough covers cross-dock, bin replenishment, break-bulk, warehouse receipts, put-aways and picks.
- The introduction page covers demo data setup, location configuration and bin management.

## Learn pages

- [Introduction to Contoso Coffee](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/contoso-coffee-warehousing-intro): Overview of scenarios for how Contoso Coffee demo data can help you learn how to use the warehousing capabilities in Business Central.
- [Receiving, Puting-away, Picking and Shipping in Basic Warehouse Configuration](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-basic-flow-putaway-pick): In Business Central, the inbound and outbound processes can be performed in different ways depending on the warehouse complexity level.
- [Receiving, puting-away, picking, and shipping in a mixed warehouse configuration](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-mixed-flow-receive-pick-ship): In Business Central, the inbound and outbound processes can be done in different ways depending on the warehouse complexity level.
- [Receiving, putting-away, moving, picking and shipping in advanced warehouse configuration](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-directed-flow): Inbound and outbound processes can be performed in different ways depending on the warehouse complexity level.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4764 "Jobs Module Setup"](../../../../../objects/page/4764.md) · captioned "Contoso Coffee Project Demo Data" · on [Table 4771 "Jobs Module Setup"](../../../../../objects/table/4771.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
