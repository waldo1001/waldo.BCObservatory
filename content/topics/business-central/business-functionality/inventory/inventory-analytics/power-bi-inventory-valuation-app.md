---
id: topic/business-central/business-functionality/inventory/inventory-analytics/power-bi-inventory-valuation-app
type: topic
title: Power BI inventory valuation app
summary: The Power BI inventory valuation app covers the reports and semantic model measures for analyzing inventory value in Business Central. It answers questions about beginning, net change and ending balance values, comparison with general ledger cost, variance, and breakdowns by item and location.
tier: official
language: en
system: inventory
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T01:01:22.016Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b8590e03743b4656ae66c3c9c6dde0c49cce3def8a4b2974563e9d2c35e673f9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-item
    title: Inventory Valuation by Item Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-location
    title: Inventory Valuation by Location Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-kpis
    title: Inventory Valuation KPIs and Measures (Power BI)
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-overview
    title: Inventory Valuation Overview Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-app
    title: Inventory Valuation Power BI App Reports
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-item
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-location
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-kpis
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-overview
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-app
  objects:
    - object/page/37056
    - object/page/37057
    - object/page/37058
    - object/page/37065
  features: []
  topics:
    - topic/business-central/business-functionality/inventory/inventory-analytics
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10285
learn_toc_path:
  - Business functionality
  - Inventory
  - Inventory analytics
  - Power BI inventory valuation app
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/inventory/inventory-analytics
children: []
coverage:
  learn: 5
  code: 4
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 37056
  - 37057
  - 37058
  - 37065
member_hash: b1de54b4b41d6ccd9d3fc1ed933d6c6f20345f3e4d782c190f4cc8d5744357a3
narrative: generated
---

# Power BI inventory valuation app

> The Power BI inventory valuation app covers the reports and semantic model measures for analyzing inventory value in Business Central. It answers questions about beginning, net change and ending balance values, comparison with general ledger cost, variance, and breakdowns by item and location.

Path: [Business functionality](../../../business-functionality.md) > [Inventory](../../inventory.md) > [Inventory analytics](../inventory-analytics.md) > Power BI inventory valuation app · tier official · system inventory · narrative **unreviewed** (model text not yet checked)

## Overview

The Inventory Valuation Power BI app gives executives and managers a view of inventory costing and value. It contains three reports: an Overview, a report by Item and a report by Location. A reference page describes the KPIs and measures behind them.

The Overview report is the high-level starting point. It shows Ending Balance Value, Ending Balance Posted to G/L and Variance, with variance over time and value by location. The by Item and by Location reports show beginning balance value, net change in value and ending balance value, so you can find high-value items or locations and watch value change over time.

Start with the app reports page to see how the reports fit together. Then open the report that matches your question. Use the KPIs and measures page when you need the formulas and data sources behind a figure.

## Key points

- The app includes three reports: Inventory Valuation Overview, Inventory Valuation by Item and Inventory Valuation by Location.
- The Overview report shows the Ending Balance Value, Ending Balance Posted to G/L and Variance KPIs.
- The Overview report also covers variance over time, inventory value by location and comparison with general ledger cost.
- The by Item report shows beginning balance, net change and ending balance value for each item, plus Ending Balance Posted to G/L.
- The by Location report shows beginning balance, net change and ending balance value by location, to identify high-value locations.
- The KPIs and measures reference lists the semantic model measures with formulas and data sources, such as Beginning Balance G/L, Cost Amount, Cost Posted to G/L, Invoiced Quantity and Variance.
- The reports are meant for executives and managers who make decisions about inventory costs.

## Learn pages

- [Inventory Valuation by Item Power BI Report](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-item): Review beginning and ending inventory values and changes during a selected period by item with the Inventory Valuation by Item Power BI report.
  - In the observatory: [Table 27 "Item"](../../../../../objects/table/27.md)
- [Inventory Valuation by Location Power BI Report](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-location): Compare inventory values across locations and review beginning balances, net changes, and ending balances with this Power BI report in Business Central.
- [Inventory Valuation KPIs and Measures (Power BI)](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-kpis): Understand inventory valuation balances, actual and expected costs, quantities, and general ledger variances in the Power BI Inventory Valuation app.
  - In the observatory: [Table 5802 "Value Entry"](../../../../../objects/table/5802.md)
- [Inventory Valuation Overview Power BI Report](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-overview): Compare inventory value with costs posted to the general ledger, review variances, and analyze value by location with the Inventory Valuation Overview report.
- [Inventory Valuation Power BI App Reports](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-app): Explore inventory value by item and location, compare balances with costs posted to the general ledger, and choose Inventory Valuation Power BI reports.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10285 [Extensibility Request] issue 29642: add Inventory Valuation events](../../../../../changes/bcapps/10285.md) (code change): "Inventory Valuation report 10139 now exposes two integration events to let extensions skip items"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 37056 "Inventory Valuation Overview"](../../../../../objects/page/37056.md) · captioned "Inventory Valuation Overview (Power BI)"
- [Page 37057 "Inventory Valuation by Item"](../../../../../objects/page/37057.md) · captioned "Inventory Valuation by Item (Power BI)"
- [Page 37058 "Inventory Valuation by Loc."](../../../../../objects/page/37058.md) · captioned "Inventory Valuation by Location (Power BI)"
- [Page 37065 "Inventory Valuation Report"](../../../../../objects/page/37065.md) · captioned "Inventory Valuation Report (Power BI)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
