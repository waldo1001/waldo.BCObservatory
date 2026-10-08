---
id: topic/business-central/business-functionality/sales/sales-analytics/legacy-reports-will-be-removed
type: topic
title: Legacy reports (will be removed)
summary: "Legacy sales analytics reports in Business Central that are marked for removal: Customer - Sales list, Customer - Top 10 list, Customer List, Sales Reservation Avail., and Sales Statistics. Use it to find what each report shows, which filters it offers, and what it is used for."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:32.865Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 45d3ab70abe103c317eb8c6df449f0830effd7c5c5f372476181291ca3d5a568
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
    title: Customer - Top 10 list (report)
    date: "2024-10-03"
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

> Legacy sales analytics reports in Business Central that are marked for removal: Customer - Sales list, Customer - Top 10 list, Customer List, Sales Reservation Avail., and Sales Statistics. Use it to find what each report shows, which filters it offers, and what it is used for.

Path: [Business functionality](../../../business-functionality.md) > [Sales](../../sales.md) > [Sales analytics](../sales-analytics.md) > Legacy reports (will be removed) · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section holds reference pages for five older reports under Sales analytics. The section title says they will be removed, so treat them as existing functionality that may not be available later.

Three reports cover customers. Customer List shows basic customer data such as posting groups, discount groups, finance charge and payment details. Customer - Sales list shows sales per customer for a period in local currency. Customer - Top 10 list ranks customers by sales and balance and can show the result as a bar or pie chart. The other two cover sales documents and results. Sales Reservation Avail. shows whether items can be shipped given inventory reservations. Sales Statistics shows sales, profit, discounts and profit percentage per customer over three selectable periods.

There are no subtopics. Each page describes one report, so start with the page that matches the question: customer master data, period sales, ranking, shipment availability or profit.

## Key points

- Customer - Sales list shows customer sales for a period in local currency, can filter by a minimum sales amount, and can include address details.
- Customer - Top 10 list ranks top customers by sales transactions and balances within a period, with bar or pie chart output.
- Customer List shows posting groups, discount groups, finance charge and payment information, for maintaining customer data and preparing account summaries or sales reports.
- Sales Reservation Avail. shows item availability for shipment on sales documents based on inventory reservations; when printed it allows updating quantities to ship.
- Sales Reservation Avail. helps decide which sales orders to fulfill based on inventory.
- Sales Statistics shows sales amounts, profit, invoice and payment discounts, and profit percentage per customer across three selectable periods.
- Sales Statistics shows original and adjusted costs and profits, reflecting item cost changes.
- All five reports are listed as legacy and will be removed.

## Learn pages

- [Customer - Sales list (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-119): Get an overview of customer sales for a period. You can use the information to report to customs and tax authorities.
- [Customer - Top 10 list (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-111): Review customers with the most transactions within a selected period to identify sales trends and manage collectable debts.
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
