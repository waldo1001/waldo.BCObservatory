---
id: topic/business-central/business-functionality/manufacturing/manufacturing-analytics/obsolete-reports-will-be-removed
type: topic
title: Obsolete reports (will be removed)
summary: Obsolete manufacturing analytics reports in Business Central that will be removed. It covers cost reports (calculation, cost shares, BOM compare), and machine center and work center list and load reports. Use it to identify what each retiring report shows.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:42.379Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a88e12cd2f96cd33102c22b48faa0d5bbb9f71d07b963d48bacc5f9c26c52fc5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000756
    title: Detailed Calculation (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000758
    title: Item BOM Compare list (report)
    date: "2024-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000760
    title: Machine Center List (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000784
    title: Machine Center Load (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000786
    title: Machine Center Load/Bar (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000767
    title: Prod. Order - Calculation (report)
    date: "2024-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000754
    title: Rolled-up Cost Shares (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000755
    title: Single-Level Cost Shares (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000759
    title: Work Center List (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000783
    title: Work Center Load (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-99000785
    title: Work Center Load/Bar (report)
    date: "2024-11-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000756
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000758
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000760
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000784
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000786
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000767
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000754
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000755
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000759
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000783
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-99000785
  objects:
    - object/report/99000754
    - object/report/99000755
    - object/report/99000756
    - object/report/99000758
    - object/report/99000759
    - object/report/99000760
    - object/report/99000767
    - object/report/99000783
    - object/report/99000784
    - object/report/99000786
  features: []
  topics:
    - topic/business-central/business-functionality/manufacturing/manufacturing-analytics
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Manufacturing
  - Manufacturing analytics
  - Obsolete reports (will be removed)
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/manufacturing/manufacturing-analytics
children: []
coverage:
  learn: 11
  code: 10
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 99000754
  - 99000755
  - 99000756
  - 99000758
  - 99000759
  - 99000760
  - 99000767
  - 99000783
  - 99000784
  - 99000786
  - 990000785
member_hash: 03ec5b2f1fbf13f07f9a003a7d7b72441b0cef8150f86e4c808cdc773cd65dd0
narrative: generated
---

# Obsolete reports (will be removed)

> Obsolete manufacturing analytics reports in Business Central that will be removed. It covers cost reports (calculation, cost shares, BOM compare), and machine center and work center list and load reports. Use it to identify what each retiring report shows.

Path: [Business functionality](../../../business-functionality.md) > [Manufacturing](../../manufacturing.md) > [Manufacturing analytics](../manufacturing-analytics.md) > Obsolete reports (will be removed) · tier official · system platform · narrative reviewed by Opus

## Overview

This section lists eleven manufacturing reports marked as obsolete and scheduled for removal. Each page describes one report: what it shows and which filters or fields it uses. There are no subtopics.

The reports fall into three groups. Cost reports: Detailed Calculation, Prod. Order - Calculation, Single-Level Cost Shares, Rolled-up Cost Shares and Item BOM Compare list. Capacity setup lists: Machine Center List and Work Center List. Capacity load reports: Machine Center Load, Machine Center Load/Bar, Work Center Load and Work Center Load/Bar.

Start here if you rely on one of these reports and need to know what it covers, or if you are checking which reports to replace before they are removed. The summaries do not name replacements.

## Key points

- Detailed Calculation shows a single-level cost breakdown for items: BOM components, routing operations (setup and run times, work center types) and scrap costs.
- Item BOM Compare list compares components, costs and quantities between two production BOMs, including cost share and difference cost.
- Single-Level Cost Shares breaks unit cost into material, capacity, subcontract and overhead, with the unit cost calculation date.
- Rolled-up Cost Shares shows how BOM item costs accumulate to the parent item by BOM structure and cost type.
- Prod. Order - Calculation lists production orders with expected operation costs, component costs and total manufacturing cost.
- Machine Center List and Work Center List show setup data such as capacity, efficiency and work center assignment, with filtering. The work center list also shows unit cost, base calendar code and alternate work center.
- Machine Center Load and Work Center Load show workload as the sum of planned and actual orders over a chosen period.
- The Load/Bar reports for machine centers and work centers show overloaded ones according to production plans, with efficiency bars and configurable overload thresholds.

## Learn pages

- [Detailed Calculation (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000756): Analyze the manufacturing costs for an item, including details from bills of materials, routing operations, and associated expenses. Scrap costs are accounted for, which gives you an accurate total cost for producing items.
- [Item BOM Compare list (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000758): Compare similar final products with respect to their costs.
- [Machine Center List (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000760): Get a list of the machine center setup in your company, which can help you manage and schedule production activities efficiently.
- [Machine Center Load (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000784): Analyze the load on a machine center.
- [Machine Center Load/Bar (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000786): Get a list of machine centers that are overloaded according to the plan.
- [Prod. Order - Calculation (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000767): Get a list of your production orders and their costs.
- [Rolled-up Cost Shares (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000754): Get a comprehensive view of the costs associated with manufactured items, broken down into different cost components such as material, capacity, capacity overhead, subcontracting, and manufacturing overhead.
- [Single-Level Cost Shares (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000755): Get a detailed breakdown of the costs associated with manufactured items at each level of the bill of materials (BOM). The report shows the cost contributions of materials, labor, and overheads for each individual component within the BOM.
- [Work Center List (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000759): Get a list of work center setup in your company, which can help you manage and schedule production activities efficiently.
- [Work Center Load (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000783): Analyze the load on a work center.
- [Work Center Load/Bar (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-99000785): Get a list of work centers that are overloaded according to the plan.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Report 99000754 "Rolled-up Cost Shares"](../../../../../objects/report/99000754.md)
- [Report 99000755 "Single-level Cost Shares"](../../../../../objects/report/99000755.md)
- [Report 99000756 "Detailed Calculation"](../../../../../objects/report/99000756.md)
- [Report 99000758 "Compare List"](../../../../../objects/report/99000758.md) · captioned "Item BOM Compare List (Obsolete)"
- [Report 99000759 "Work Center List"](../../../../../objects/report/99000759.md)
- [Report 99000760 "Machine Center List"](../../../../../objects/report/99000760.md)
- [Report 99000767 "Prod. Order - Calculation"](../../../../../objects/report/99000767.md) · captioned "Prod. Order - Calculation (Obsolete)"
- [Report 99000783 "Work Center Load"](../../../../../objects/report/99000783.md) · captioned "Work Center Load (obsolete)"
- [Report 99000784 "Machine Center Load"](../../../../../objects/report/99000784.md) · captioned "Machine Center Load (obsolete)"
- [Report 99000786 "Machine Center Load/Bar"](../../../../../objects/report/99000786.md) · captioned "Machine Center Load/Bar (obsolete)"

Learn also names 1 object with no object page: report/990000785.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
