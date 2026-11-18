---
id: topic/business-central/business-functionality/fixed-assets/fixed-assets-analytics/legacy-reports-will-be-removed
type: topic
title: Legacy reports (will be removed)
summary: "Legacy fixed asset analytics reports in Business Central that are scheduled for removal: Fixed Asset Projected Value, Transaction Details, and Value Analysis. It answers questions about what each report shows and that they are obsolete from version 28.0 in favor of Excel report replacements."
tier: official
language: en
system: fixed-assets
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
  input_hash: 9ba716021fb0e5361491aae774c8ae24c8d93f00c1a0b174acc1f9041e4c82bf
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5607
    title: Fixed Asset Projected Value (report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5604
    title: Fixed Asset Transaction Details (report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-5600
    title: Fixed Asset Value Analysis (report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5607
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5604
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-5600
  objects:
    - object/report/5600
    - object/report/5604
    - object/report/5607
  features: []
  topics:
    - topic/business-central/business-functionality/fixed-assets/fixed-assets-analytics
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Fixed assets
  - Fixed assets analytics
  - Legacy reports (will be removed)
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/fixed-assets/fixed-assets-analytics
children: []
coverage:
  learn: 3
  code: 3
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5600
  - 5604
  - 5607
member_hash: bb2d1169c678ec2685acb1df44476a2493550dcdc79a07920877e423843274b6
narrative: generated
---

# Legacy reports (will be removed)

> Legacy fixed asset analytics reports in Business Central that are scheduled for removal: Fixed Asset Projected Value, Transaction Details, and Value Analysis. It answers questions about what each report shows and that they are obsolete from version 28.0 in favor of Excel report replacements.

Path: [Business functionality](../../../business-functionality.md) > [Fixed assets](../../fixed-assets.md) > [Fixed assets analytics](../fixed-assets-analytics.md) > Legacy reports (will be removed) · tier official · system fixed-assets · narrative **unreviewed** (model text not yet checked)

## Overview

This section documents three older fixed asset reports that sit under Fixed assets analytics and are going to be removed. Each page describes what the report does and, where stated, marks it as obsolete from version 28.0, with the Excel report as the replacement.

The reports cover different needs. Projected Value forecasts future depreciation and book value over a period. Transaction Details lists fixed asset ledger entries for a depreciation book. Value Analysis gives a configurable examination of assets for reconciliation, check reports, and budget projections.

Start here if you maintain existing processes that still use these reports, or need to understand what they did before moving to the Excel reports. For new work, use the Excel report replacements.

## Key points

- All three reports are legacy and will be removed; the pages reference version 28.0.
- Fixed Asset Projected Value and Transaction Details are marked obsolete from version 28.0, with Excel report replacements.
- Projected Value forecasts future depreciation and book value over a specified period, with several depreciation methods and interval breakdown.
- Projected Value can be used for budget creation and tracks accumulated depreciation.
- Transaction Details shows fixed asset ledger entries for a selected depreciation book, with transaction amounts, posting types, and G/L references.
- Transaction Details supports date filtering, reversed entries, and excluding inactive assets.
- Value Analysis offers configurable date columns and data columns for reconciliation, check reports, budget depreciation projection, and future value estimation.

## Learn pages

- [Fixed Asset Projected Value (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5607): Forecast fixed asset depreciation and book values for a future period, choose projection intervals, and optionally copy depreciation to a G/L budget.
- [Fixed Asset Transaction Details (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5604): Review posted fixed asset transactions for a selected depreciation book and FA posting date filter, with an option to include reversed ledger entries.
- [Fixed Asset Value Analysis (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-5600): Analyze fixed asset values with configurable date and amount columns, group totals, and optional future depreciation for a selected depreciation book.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Report 5600 "Fixed Asset - Analysis"](../../../../../objects/report/5600.md) · captioned "Fixed Asset Analysis (Obsolete)"
- [Report 5604 "Fixed Asset - Details"](../../../../../objects/report/5604.md) · captioned "Fixed Asset Details (Obsolete)"
- [Report 5607 "Fixed Asset - Projected Value"](../../../../../objects/report/5607.md) · captioned "Fixed Asset Projected Value (Obsolete)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
