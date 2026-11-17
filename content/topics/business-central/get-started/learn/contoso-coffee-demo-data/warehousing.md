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
  at: "2026-11-17T01:01:17.322Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b786e8a1c4c8db4fa66e3ced32b54b91f0df541e466dba93233eb541ac5ebf8b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-basic-flow-putaway-pick
    title: "Contoso Coffee: Basic Warehouse Flow Walkthrough"
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-directed-flow
    title: "Contoso Coffee: Directed Warehouse Flow Walkthrough"
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-mixed-flow-receive-pick-ship
    title: "Contoso Coffee: Mixed Warehouse Flow Walkthrough"
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/contoso-coffee-warehousing-intro
    title: Introduction to Contoso Coffee Warehousing
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-basic-flow-putaway-pick
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-directed-flow
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-mixed-flow-receive-pick-ship
    - https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/contoso-coffee-warehousing-intro
  objects:
    - object/page/4766
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
  - 4766
member_hash: e3b461b25ae1bc1a4bffc030efdee2744331894d0b5e9515c3823bc362a5ac09
narrative: generated
---

# Warehousing

> Contoso Coffee warehousing demo data in Business Central, covering three warehouse locations that show basic, mixed and advanced configurations. It answers questions about how receiving, put-away, picking, moving and shipping work in each setup.

Path: [Get started](../../../get-started.md) > [Learn](../../learn.md) > [Contoso Coffee demo data](../contoso-coffee-demo-data.md) > Warehousing · tier official · system none · narrative reviewed (checked by Opus)

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

- [Contoso Coffee: Basic Warehouse Flow Walkthrough](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-basic-flow-putaway-pick): Learn to receive, put away, pick, and ship Contoso Coffee items with inventory documents in a basic warehouse configuration in Business Central.
  - In the observatory: [Page 36957 "Locations"](../../../../../objects/page/36957.md), [Page 48 "Sales Orders"](../../../../../objects/page/48.md), [Page 56 "Purchase Orders"](../../../../../objects/page/56.md), [Page 7328 "Warehouse Employees"](../../../../../objects/page/7328.md), [Page 7390 "Posted Invt. Put-away"](../../../../../objects/page/7390.md), [Page 7392 "Posted Invt. Pick"](../../../../../objects/page/7392.md)
- [Contoso Coffee: Directed Warehouse Flow Walkthrough](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-directed-flow): Practice receiving, cross-docking, bin replenishment, picking, and shipping Contoso Coffee items with directed put-away and pick in Business Central.
  - In the observatory: [Page 48 "Sales Orders"](../../../../../objects/page/48.md), [Page 56 "Purchase Orders"](../../../../../objects/page/56.md), [Page 5768 "Warehouse Receipt"](../../../../../objects/page/5768.md), [Page 5770 "Warehouse Put-away"](../../../../../objects/page/5770.md), [Page 7335 "Warehouse Shipment"](../../../../../objects/page/7335.md), [Page 7374 "Bin Contents"](../../../../../objects/page/7374.md)
- [Contoso Coffee: Mixed Warehouse Flow Walkthrough](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-mixed-flow-receive-pick-ship): Practice receiving Contoso Coffee items with warehouse receipts, then picking and shipping combined sales orders in a mixed warehouse configuration.
  - In the observatory: [Page 36957 "Locations"](../../../../../objects/page/36957.md), [Page 48 "Sales Orders"](../../../../../objects/page/48.md), [Page 56 "Purchase Orders"](../../../../../objects/page/56.md), [Page 7328 "Warehouse Employees"](../../../../../objects/page/7328.md), [Page 7332 "Warehouse Receipts"](../../../../../objects/page/7332.md), [Page 9313 "Warehouse Picks"](../../../../../objects/page/9313.md)
- [Introduction to Contoso Coffee Warehousing](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/contoso-coffee-warehousing-intro): Overview of scenarios for how Contoso Coffee demo data can help you learn how to use the warehousing capabilities in Business Central.
  - In the observatory: [Page 5194 "Contoso Demo Tool"](../../../../../objects/page/5194.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4766 "Warehouse Module Setup"](../../../../../objects/page/4766.md) · on [Table 4764 "Warehouse Module Setup"](../../../../../objects/table/4764.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
