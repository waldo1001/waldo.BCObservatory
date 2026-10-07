---
id: topic/business-central/business-functionality/inventory/inventory-analytics/legacy-reports-will-be-removed
type: topic
title: Legacy reports (will be removed)
summary: "Legacy inventory reports in Business Central that are marked for removal: Inventory Availability Plan and Item Age Composition - Quantity. It answers questions about what each report shows, how it is filtered, and what it is used for."
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:35.768Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1c8892b475eeafd284d15b6dee72f1b49dbf044ccd15002d6c2cb402a71df7a3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-707
    title: Inventory Availability Plan (report)
    date: "2026-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5807
    title: Item Age Composition - Quantity (report)
    date: "2024-10-18"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-707
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5807
  objects:
    - object/report/707
    - object/report/5807
  features: []
  topics:
    - topic/business-central/business-functionality/inventory/inventory-analytics
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Inventory
  - Inventory analytics
  - Legacy reports (will be removed)
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/inventory/inventory-analytics
children: []
coverage:
  learn: 2
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 707
  - 5807
member_hash: 5ccc14c6acee49401a203323d81e398740deca3d26f5f6d566f5b677f3702488
narrative: generated
---

# Legacy reports (will be removed)

> Legacy inventory reports in Business Central that are marked for removal: Inventory Availability Plan and Item Age Composition - Quantity. It answers questions about what each report shows, how it is filtered, and what it is used for.

Path: [Business functionality](../../../business-functionality.md) > [Inventory](../../inventory.md) > [Inventory analytics](../inventory-analytics.md) > Legacy reports (will be removed) · tier official · system inventory · narrative reviewed by Opus

## Overview

This section lists inventory analytics reports that Microsoft Learn labels as legacy and will be removed. It has no subtopics and two pages, one for each report.

The Inventory Availability Plan report shows accumulated values such as gross requirements, scheduled receipts, and planned receipts by item and SKU. The page notes that an Excel replacement is available. The Item Age Composition - Quantity report shows on-hand inventory aged by receipt date in three equal-length periods, so you can find unused or slow-moving stock. You can filter it by warehouse and by item.

Start here if you still use either report and need to know what it does. Both reports are slated for removal, so avoid building new processes on them. For Inventory Availability Plan, use the Excel replacement instead. The sources do not name a replacement for Item Age Composition - Quantity.

## Key points

- The whole section is marked as legacy and will be removed.
- Inventory Availability Plan shows accumulated gross requirements, scheduled receipts, and planned receipts.
- Inventory Availability Plan reports by item and by SKU.
- An Excel replacement is available for the Inventory Availability Plan report.
- Item Age Composition - Quantity ages on-hand inventory by receipt date.
- Aging uses three periods of equal length.
- Item Age Composition - Quantity can be filtered by warehouse and by item.
- Item Age Composition - Quantity helps identify unused or slow-moving inventory.

## Learn pages

- [Inventory Availability Plan (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-707): Get an overview of specific items and stock-keeping units, and their availability.
- [Item Age Composition - Quantity (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5807): Review the age of stock in your warehouse by quantity and identify unused or slow moving inventory.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Report 707 "Inventory - Availability Plan"](../../../../../objects/report/707.md) · captioned "Inventory - Availability Plan (Obsolete)"
- [Report 5807 "Item Age Composition - Qty."](../../../../../objects/report/5807.md) · captioned "Item Age Composition - Quantity (Obsolete)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
