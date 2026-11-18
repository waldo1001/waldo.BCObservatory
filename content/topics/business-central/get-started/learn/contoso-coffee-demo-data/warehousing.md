---
id: topic/business-central/get-started/learn/contoso-coffee-demo-data/warehousing
type: topic
title: Warehousing
summary: Contoso Coffee warehousing demo data and walkthroughs in Business Central. It covers three locations (SILVER, YELLOW, WHITE) and answers questions about basic, mixed and directed warehouse flows, including receiving, put-away, picking, shipping, cross-docking and breakbulk.
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-18T01:00:22.250Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a796ada720420be16373bf679cd6593e2defdabfaff7834841ab3671e23b8fee
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

> Contoso Coffee warehousing demo data and walkthroughs in Business Central. It covers three locations (SILVER, YELLOW, WHITE) and answers questions about basic, mixed and directed warehouse flows, including receiving, put-away, picking, shipping, cross-docking and breakbulk.

Path: [Get started](../../../get-started.md) > [Learn](../../learn.md) > [Contoso Coffee demo data](../contoso-coffee-demo-data.md) > Warehousing · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section uses the Contoso Coffee demo data to teach warehouse management at three levels of complexity. Each level is tied to one demo location with its own configuration, so you can compare how the same inbound and outbound processes work with more or less structure.

The introduction page describes the three locations and the Contoso Demo Tool used for the data. Three walkthroughs follow: basic flow in SILVER, mixed flow in YELLOW, and directed flow in WHITE. Start with the introduction, then work through the walkthroughs in order from basic to directed, or go straight to the one that matches the setup you want to learn.

## Key points

- SILVER is the basic warehousing location. Its walkthrough uses the Require Put-away and Require Pick settings with inventory put-aways and inventory picks, and shows bin contents and order-by-order configuration.
- YELLOW is the mixed location. Inbound uses warehouse receipts, and outbound uses warehouse picks and shipments.
- The YELLOW walkthrough also covers over-receipt codes and creating a pick from a shipment.
- WHITE is the advanced, directed put-away and pick location. Its walkthrough covers warehouse receipts, warehouse put-away, warehouse picks and movements.
- The WHITE walkthrough also covers cross-dock bins, bin replenishment and breakbulk.
- The Contoso Demo Tool supplies the demo data for these locations.
- The section has four pages and no subtopics: one introduction and three walkthroughs.

## Learn pages

- [Contoso Coffee: Basic Warehouse Flow Walkthrough](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-basic-flow-putaway-pick): Learn to receive, put away, pick, and ship Contoso Coffee items with inventory documents in a basic warehouse configuration in Business Central.
  - In the observatory: [Page 36957 "Locations"](../../../../../objects/page/36957.md), [Page 7390 "Posted Invt. Put-away"](../../../../../objects/page/7390.md), [Page 7392 "Posted Invt. Pick"](../../../../../objects/page/7392.md), [Page 9315 "Inventory Put-aways"](../../../../../objects/page/9315.md), [Page 9316 "Inventory Picks"](../../../../../objects/page/9316.md)
- [Contoso Coffee: Directed Warehouse Flow Walkthrough](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-directed-flow): Practice receiving, cross-docking, bin replenishment, picking, and shipping Contoso Coffee items with directed put-away and pick in Business Central.
  - In the observatory: [Page 5770 "Warehouse Put-away"](../../../../../objects/page/5770.md), [Page 7332 "Warehouse Receipts"](../../../../../objects/page/7332.md), [Page 7335 "Warehouse Shipment"](../../../../../objects/page/7335.md), [Page 9313 "Warehouse Picks"](../../../../../objects/page/9313.md), [Page 9314 "Warehouse Movements"](../../../../../objects/page/9314.md)
- [Contoso Coffee: Mixed Warehouse Flow Walkthrough](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/warehouse-mixed-flow-receive-pick-ship): Practice receiving Contoso Coffee items with warehouse receipts, then picking and shipping combined sales orders in a mixed warehouse configuration.
  - In the observatory: [Page 7332 "Warehouse Receipts"](../../../../../objects/page/7332.md), [Page 9313 "Warehouse Picks"](../../../../../objects/page/9313.md)
- [Introduction to Contoso Coffee Warehousing](https://learn.microsoft.com/dynamics365/business-central/contoso-coffee/warehousing/contoso-coffee-warehousing-intro): Overview of scenarios for how Contoso Coffee demo data can help you learn how to use the warehousing capabilities in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4766 "Warehouse Module Setup"](../../../../../objects/page/4766.md) · on [Table 4764 "Warehouse Module Setup"](../../../../../objects/table/4764.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
