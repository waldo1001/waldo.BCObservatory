---
id: topic/business-central/business-functionality/inventory/inventory-analytics/legacy-reports-will-be-removed
type: topic
title: Legacy reports (will be removed)
summary: "Legacy inventory analytics reports in Business Central that are marked for removal: Inventory Availability Plan and Item Age Composition - Quantity. It answers what each report shows and how it is configured or filtered."
tier: official
language: en
system: inventory
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
  input_hash: 4ba328eb83aa1f90410844dc544d76e6e58dfe1415b76008eb92e2d9396fed0e
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
    date: "2026-11-13"
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

> Legacy inventory analytics reports in Business Central that are marked for removal: Inventory Availability Plan and Item Age Composition - Quantity. It answers what each report shows and how it is configured or filtered.

Path: [Business functionality](../../../business-functionality.md) > [Inventory](../../inventory.md) > [Inventory analytics](../inventory-analytics.md) > Legacy reports (will be removed) · tier official · system inventory · narrative **unreviewed** (model text not yet checked)

## Overview

This section holds two older inventory reports that are listed as going to be removed. Both sit under Inventory analytics and describe how inventory data was presented before replacements were offered.

The Inventory Availability Plan report shows accumulated values such as gross requirements, scheduled receipts and planned receipts, by item and by stockkeeping unit (SKU). The page notes that an Excel replacement is available. The Item Age Composition - Quantity report shows current inventory quantities aged by posting date. You can set the aging periods and filter by location and item. It is described as obsolete.

Start with the page for the report you are working with. If you plan new analysis, check the replacement noted for the availability plan rather than relying on these reports.

## Key points

- Both reports are legacy and scheduled for removal.
- Inventory Availability Plan shows accumulated gross requirements, scheduled receipts and planned receipts.
- Inventory Availability Plan works by item and by SKU.
- An Excel replacement exists for the Inventory Availability Plan report.
- Item Age Composition - Quantity ages current inventory quantities by posting date.
- Aging periods are configurable in Item Age Composition - Quantity.
- Item Age Composition - Quantity can be filtered by location and item and is described as obsolete.

## Learn pages

- [Inventory Availability Plan (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-707): Get an overview of specific items and stock-keeping units, and their availability.
- [Item Age Composition - Quantity (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5807): Review current inventory quantities by age using the legacy Item Age Composition - Quantity report. Find the replacement Excel report for aging analysis.
  - In the observatory: [Report 5809 "Item Expiration - Quantity"](../../../../../objects/report/5809.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Report 707 "Inventory - Availability Plan"](../../../../../objects/report/707.md) · captioned "Inventory - Availability Plan (Obsolete)"
- [Report 5807 "Item Age Composition - Qty."](../../../../../objects/report/5807.md) · captioned "Item Age Composition - Quantity (Obsolete)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
