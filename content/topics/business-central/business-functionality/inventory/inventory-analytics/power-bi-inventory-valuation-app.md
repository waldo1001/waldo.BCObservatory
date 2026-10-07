---
id: topic/business-central/business-functionality/inventory/inventory-analytics/power-bi-inventory-valuation-app
type: topic
title: Power BI inventory valuation app
summary: The Power BI inventory valuation app shows inventory value across an organization, by overview, item and location. It answers questions about what each report shows, which balance and variance measures it uses, and how they are calculated.
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:04.115Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6c2013ee701e1f2073b4104ed194e5c956dbb0452370d30c005956fd41946650
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-item
    title: Inventory Valuation by Item (Power BI report)
    date: "2024-10-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-location
    title: Inventory Valuation by Location (Power BI report)
    date: "2024-10-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-kpis
    title: Inventory Valuation KPIs and measures (Power BI)
    date: "2024-11-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-app
    title: Inventory valuation landing page (Power BI report)
    date: "2024-10-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-overview
    title: Inventory Valuation Overview (Power BI report)
    date: "2024-10-30"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-item
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-location
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-kpis
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-app
    - https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-overview
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

> The Power BI inventory valuation app shows inventory value across an organization, by overview, item and location. It answers questions about what each report shows, which balance and variance measures it uses, and how they are calculated.

Path: [Business functionality](../../../business-functionality.md) > [Inventory](../../inventory.md) > [Inventory analytics](../inventory-analytics.md) > Power BI inventory valuation app · tier official · system inventory · narrative reviewed by Opus

## Overview

The Power BI Inventory Valuation app gives executives and managers a view of inventory value across the organization. It helps them find the locations and items that hold the most stock value and make cost decisions based on that.

The section has a landing page that introduces the app, three reports, and one reference page. The Overview report gives a high-level view of total inventory value and movements. The by Item and by Location reports break value down item by item or location by location. Each shows beginning balance value, increases and decreases, and ending balance value for a chosen period.

Start with the landing page for the scope of the app, then open the report page that matches your question. Use the KPIs and measures page when you need the formulas and data sources behind the numbers in the semantic model.

## Key points

- The app has three reports: Inventory Valuation Overview, Inventory Valuation by Item, and Inventory Valuation by Location.
- The Overview report shows Ending Balance Value, Ending Balance Posted to G/L, Variance, Invoiced Quantity, Increases Quantity and Decrease Qty.
- The by Item report shows beginning balance value, increases, decreases and ending balance value per item, to identify high-value items.
- The by Location report shows the same period values per location, to identify high-value locations.
- The KPIs and measures page lists the semantic model measures with formulas and data sources, such as Beginning Balance G/L, Cost Amount, Cost Posted to G/L and Variance.
- The by Item and by Location reports show values for a specified period.
- The intended audience is executives and managers making strategic and cost decisions.

## Learn pages

- [Inventory Valuation by Item (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-item): The Inventory Valuation by Item report shows item values on an item by item basis.
- [Inventory Valuation by Location (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-by-location): The Inventory Valuation by Location report shows the item values on a location by location basis.
- [Inventory Valuation KPIs and measures (Power BI)](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-kpis): The Inventory Valuation App KPIs provides a page to clearly identify all KPIs and Measures used in the Inventory Valuation Report.
- [Inventory valuation landing page (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-app): The Inventory Landing Page gives an overview of how the Inventory Report works.
- [Inventory Valuation Overview (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/inventory-valuation-powerbi-inventory-valuation-overview): The Inventory Valuation Overview report shows item values on a location by location basis.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 37056 "Inventory Valuation Overview"](../../../../../objects/page/37056.md) · captioned "Inventory Valuation Overview (Power BI)"
- [Page 37057 "Inventory Valuation by Item"](../../../../../objects/page/37057.md) · captioned "Inventory Valuation by Item (Power BI)"
- [Page 37058 "Inventory Valuation by Loc."](../../../../../objects/page/37058.md) · captioned "Inventory Valuation by Location (Power BI)"
- [Page 37065 "Inventory Valuation Report"](../../../../../objects/page/37065.md) · captioned "Inventory Valuation Report (Power BI)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
