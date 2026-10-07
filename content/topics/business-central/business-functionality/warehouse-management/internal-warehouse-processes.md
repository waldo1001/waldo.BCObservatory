---
id: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes
type: topic
title: Internal warehouse processes
summary: "Internal warehouse processes in Business Central: handling production, assembly and job components and output, moving items within and between locations, and counting and adjusting warehouse inventory. It answers which page, journal or setup applies in basic versus advanced warehouse configurations."
tier: official
language: en
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:50.308Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b09f7f54c9aeac76b612c6978adde01631acec6e74fb9bf8dfc628ae8f2b2f7c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-inventory-with-documents
    title: Count and adjust inventory
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify
    title: Count, adjust, and reclassify inventory
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-internal-warehouse-flows
    title: Design details - flows for production, assembly, and projects
    date: "2024-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-integration-with-inventory
    title: Design Details - Integration with Inventory
    date: "2021-06-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-move-items
    title: Move Items
    date: "2023-01-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-in-advanced-warehousing
    title: Move items in warehouses that use directed put-away and pick
    date: "2024-04-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-move-items-ad-hoc-in-basic-warehousing
    title: Move Items Unplanned in Basic Warehouse Configurations
    date: "2022-12-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-internal-operations-in-advanced-warehousing
    title: Pick for internal operations in advanced warehouse configurations
    date: "2025-03-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-production
    title: Pick or move items for production, assembly, or projects in basic warehouse configurations
    date: "2025-03-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-away-production-output
    title: Put away production output
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-transfer-between-locations
    title: Transfer items between locations
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/warehouse-management
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/production-assembly-and-job-activities
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/move-items
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/warehouse-counting
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Warehouse management
  - Internal warehouse processes
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/warehouse-management
children:
  - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/production-assembly-and-job-activities
  - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/move-items
  - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/warehouse-counting
coverage:
  learn: 11
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 393
  - 7315
  - 7349
  - 7351
  - 7382
  - 7384
  - 7386
  - 7387
  - 7399
  - 7400
  - 9314
  - 9330
  - 9345
member_hash: e258e513fc2af58df5d1b320c88422a5aab7390d833039aff04ae84d26a84052
narrative: generated
---

# Internal warehouse processes

> Internal warehouse processes in Business Central: handling production, assembly and job components and output, moving items within and between locations, and counting and adjusting warehouse inventory. It answers which page, journal or setup applies in basic versus advanced warehouse configurations.

Path: [Business functionality](../../business-functionality.md) > [Warehouse management](../warehouse-management.md) > Internal warehouse processes · tier official · system warehouse · narrative reviewed by Opus

## Overview

This area covers warehouse work that happens inside and between locations. It has three subtopics: production, assembly and job activities; moving items; and warehouse counting.

The production, assembly and job pages explain how components are picked or moved to the work area, how output is put away, and how basic and advanced warehouse setups differ. The move items pages cover bin moves, unplanned internal movements and transfers between locations. The warehouse counting pages cover physical inventory counts, adjustments and reclassification.

The hub has no pages of its own. Start with the subtopic that matches the task. First check whether the location uses a basic or an advanced (directed put-away and pick) setup, because the page or journal to use depends on it.

## Key points

- Production, assembly and job flows include picking or moving components and putting away output.
- Basic and advanced warehouse configurations handle these flows differently.
- Move items covers bin moves in basic and advanced (directed put-away and pick) setups.
- Unplanned internal movements and transfers between locations are covered under moving items.
- Warehouse counting uses orders, recordings and journals for physical inventory, adjustments and reclassification.
- Counting topics include cycle counting, bin-level counts and adjustment bins.
- Warehouse adjustments are reconciled with the item ledger.

## Subtopics

- [Production, assembly, and job activities](internal-warehouse-processes/production-assembly-and-job-activities.md) (4 pages)
- [Move items](internal-warehouse-processes/move-items.md) (4 pages)
- [Warehouse counting](internal-warehouse-processes/warehouse-counting.md) (3 pages)

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 393, 7315, 7349, 7351, 7382, 7384, 7386, 7387, 7399, 7400, 9314, 9330, 9345.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
