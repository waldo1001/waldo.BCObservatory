---
id: topic/business-central/business-functionality/sales/sales-analytics/legacy-reports-will-be-removed
type: topic
title: Legacy reports (will be removed)
summary: "Legacy sales analytics reports in Business Central that are slated for removal: Customer - Sales list, Customer - Top 10 List, Customer List, Sales Reservation Avail., and Sales Statistics. It answers questions about what each report shows, its filters, and which one is already obsolete."
tier: official
language: en
system: sales
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-17T01:01:17.322Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 496e1eebf98391ba92d34c4184e3c9cdbf54c7ec1e7474aaf3d13943a4b671cb
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-119
    title: Customer - Sales list (report)
    date: "2026-02-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-111
    title: Customer - Top 10 List (Report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-101
    title: Customer List (report)
    date: "2026-02-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-209
    title: Sales Reservation Avail. (report)
    date: "2026-02-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-112
    title: Sales Statistics (report)
    date: "2026-02-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-119
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-111
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-101
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-209
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-112
  objects:
    - object/report/101
    - object/report/111
    - object/report/112
    - object/report/119
    - object/report/209
  features: []
  topics:
    - topic/business-central/business-functionality/sales/sales-analytics
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Sales
  - Sales analytics
  - Legacy reports (will be removed)
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/sales/sales-analytics
children: []
coverage:
  learn: 5
  code: 5
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 101
  - 111
  - 112
  - 119
  - 209
member_hash: 42daad5e79c2ba6b14c7d2c5f0fc9f56bc9e524e64a4d4eebb3ca034e6b8064b
narrative: generated
---

# Legacy reports (will be removed)

> Legacy sales analytics reports in Business Central that are slated for removal: Customer - Sales list, Customer - Top 10 List, Customer List, Sales Reservation Avail., and Sales Statistics. It answers questions about what each report shows, its filters, and which one is already obsolete.

Path: [Business functionality](../../../business-functionality.md) > [Sales](../../sales.md) > [Sales analytics](../sales-analytics.md) > Legacy reports (will be removed) · tier official · system sales · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects five older sales reports that Learn lists under Sales analytics with the note that they will be removed. They cover customer sales over a period, customer rankings, basic customer data, item availability for sales orders, and per-customer sales and profit.

The pages are independent report descriptions with no subtopics. Read the page for the report you use to see its purpose and filters. If you rely on the Customer - Top 10 List report, note that it was marked obsolete in version 28 and the page points to Customer Top List Excel (report) as the replacement.

## Key points

- Customer - Sales list shows customer sales for a period in local currency, with a minimum sales amount filter and optional address details.
- Customer - Top 10 List ranks customers by Sales (LCY) or Balance (LCY), with Date Filter, Number of Customers, and bar or pie chart views.
- Customer - Top 10 List was marked obsolete in version 28; use Customer Top List Excel (report) instead.
- Customer List shows basic customer data: posting groups, discount groups, finance charge and payment information.
- Sales Reservation Avail. shows item availability for shipment on sales documents based on inventory reservations, and lets you update quantities to ship when printed.
- Sales Statistics shows sales amounts, profit, invoice and payment discounts, and profit percentage per customer across three selectable periods.
- Sales Statistics shows original and adjusted costs and profits, reflecting item cost changes.

## Learn pages

- [Customer - Sales list (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-119): Get an overview of customer sales for a period. You can use the information to report to customs and tax authorities.
- [Customer - Top 10 List (Report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-111): Rank customers by sales amount or current balance in local currency, select how many to show, and find the replacement Excel report.
- [Customer List (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-101): Get an overview of basic information for your customers.
- [Sales Reservation Avail. (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-209): Get an overview of which items are available to fulfill sales orders, and help ensure that inventory reservations are accurate.
- [Sales Statistics (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-112): Analyze earnings from an individual customer or earnings trends.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Report 101 "Customer - List"](../../../../../objects/report/101.md) · captioned "Customer List"
- [Report 111 "Customer - Top 10 List"](../../../../../objects/report/111.md) · captioned "Customer - Top 10 List (Obsolete)"
- [Report 112 "Sales Statistics"](../../../../../objects/report/112.md)
- [Report 119 "Customer - Sales List"](../../../../../objects/report/119.md)
- [Report 209 "Sales Reservation Avail."](../../../../../objects/report/209.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
