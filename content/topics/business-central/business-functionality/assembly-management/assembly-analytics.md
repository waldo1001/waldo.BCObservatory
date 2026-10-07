---
id: topic/business-central/business-functionality/assembly-management/assembly-analytics
type: topic
title: Assembly analytics
summary: "Assembly analytics covers the Business Central reports and analytics for assembly activity: BOM listings, sub-assemblies, end items, raw materials, where-used, cost share, item availability over time, and assemble-to-order sales. It answers questions about what each report shows and when to use it."
tier: official
language: en
system: assembly
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:22.627Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a8e1dbc418abddca97b1944113d54d6ab479254b09640a07ac89c67fb7ac8fc6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-915
    title: About Assemble to order - Sales (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-811
    title: About the BOM - Sub-Assemblies (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-812
    title: Assembly BOM - End Items (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-801
    title: Assembly BOMs (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/assembly-reports
    title: Assembly Reports and Analytics in Business Central
    date: "2021-06-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-810
    title: BOM - Raw Materials (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5872
    title: BOM Cost Share Distribution (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5871
    title: Item - Able to Make (Time) (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-809
    title: Where-used list (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-915
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-811
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-812
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-801
    - https://learn.microsoft.com/dynamics365/business-central/assembly-reports
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-810
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5872
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5871
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-809
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/assembly-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Assembly management
  - Assembly analytics
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/assembly-management
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 801
  - 809
  - 810
  - 811
  - 812
  - 900
  - 901
  - 902
  - 903
  - 904
  - 905
  - 907
  - 910
  - 914
  - 915
  - 916
  - 920
  - 921
  - 922
  - 923
  - 930
  - 931
  - 932
  - 940
  - 941
  - 942
  - 5871
  - 5872
member_hash: 5da4afc5701a12d6696e1f7e1c2dfd24a47d055977d077ccfd1717b3ff6c85dc
narrative: generated
---

# Assembly analytics

> Assembly analytics covers the Business Central reports and analytics for assembly activity: BOM listings, sub-assemblies, end items, raw materials, where-used, cost share, item availability over time, and assemble-to-order sales. It answers questions about what each report shows and when to use it.

Path: [Business functionality](../../business-functionality.md) > [Assembly management](../assembly-management.md) > Assembly analytics · tier official · system assembly · narrative reviewed by Opus

## Overview

Assembly analytics is the reporting area for assembly management in Business Central. It gives production and business professionals insight into current and past assembly activity, assembly bills of materials (BOMs), component usage, cost and availability.

The pages fit together as one overview page plus one page per report. The reports fall into groups. BOM structure reports are Assembly BOMs, Assembly BOM - End Items, BOM - Sub-Assemblies, BOM - Raw Materials and Where-used list. Cost and sales reports are BOM Cost Share Distribution and Assemble to order - Sales. Availability is covered by Item - Able to Make (Time).

Start with "Assembly Reports and Analytics in Business Central" for the overview, then open the page for the specific report you need.

## Key points

- Assembly Reports and Analytics in Business Central is the overview page for assembly reporting and analytics.
- Assembly BOMs lists assembly BOMs with component names, BOM numbers, quantities, units of measure and nested BOMs.
- Assembly BOM - End Items lists items or BOMs that are not components in other BOMs, with filtering by replenishment system.
- BOM - Sub-Assemblies shows subassembly components with base unit of measure, inventory, unit costs and alternative items.
- BOM - Raw Materials shows components with inventory levels, units of measure, vendors and lead times.
- Where-used list shows which BOMs contain selected items as components.
- BOM Cost Share Distribution uses pie charts to show material/labor and direct/indirect cost proportions of an item's cost.
- Item - Able to Make (Time) tracks BOM item availability over time from supply, demand and component availability; Assemble to order - Sales shows component sales figures and profit margin.

## Learn pages

- [About Assemble to order - Sales (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-915): Analyze the quantity, cost, sales, and profit figures of assembly components. Analyses can support decisions such as whether to price a kit differently, or to stop or start using a particular item in assemblies.
- [About the BOM - Sub-Assemblies (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-811): Get an overview of the components in a subassembly bill of materials, for both assembly and production.
- [Assembly BOM - End Items (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-812): Get a list of items or bill of materials (BOMs) that are not components of any other BOMs.
- [Assembly BOMs (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-801): Get an overview of Assembly Bill of Materials (BOMs), including BOMs that are part of the main BOM.
- [Assembly Reports and Analytics in Business Central](https://learn.microsoft.com/dynamics365/business-central/assembly-reports): See which assembly reports and analytics are available in the standard version of Business Central so that you can keep track of your business.
- [BOM - Raw Materials (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-810): Get an overview about the needed components for an items bill of material (BOM), both for assembly and for production.
- [BOM Cost Share Distribution (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5872): This report helps you decide whether to change component suppliers, or replace internal resources with outsourced labor (or vice versa). It also helps you review and modify an item's bill of materials.
- [Item - Able to Make (Time) (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5871): Check whether you can fulfill a sales order for an item by a specified date. Look at its current availability in combination with quantities that its components can supply if someone starts an assembly order.
- [Where-used list (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-809): Get a list of the bill of materials (BOMs) that the selected items are components of. Use the report in case you must change a component in a BOM. For example, if your vendor can no longer deliver a specific item that you used for your assembly/production.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 801, 809, 810, 811, 812, 900, 901, 902, 903, 904, 905, 907, 910, 914, 915, 916, 920, 921, 922, 923, 930, 931, 932, 940, 941, 942, 5871, 5872.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
