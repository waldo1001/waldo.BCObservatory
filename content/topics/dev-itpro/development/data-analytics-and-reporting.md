---
id: topic/dev-itpro/development/data-analytics-and-reporting
type: topic
title: Data analytics and reporting
summary: Data analytics and reporting in Business Central covers data analysis on lists and queries, queries as datasets and OData web services, Excel layout reports, and Power BI integration and embedding. It answers questions about choosing an analysis option and building or embedding reports.
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:29.221Z"
  flags: []
generated:
  at: "2026-10-07T16:30:41.512Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 53ff12af71c01ebea528fb00ccc3819d1d01095e55a791173cad2ae771d3f402
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/analysis-mode
    title: Analyze list page and query data using data analysis
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reporting-options-overview
    title: Analyzing, pivoting, and sharing data in Business Central
    date: "2024-02-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-howto-excel-report-layout
    title: Creating an Excel layout report
    date: "2025-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts
    title: Embed Power BI reports in pages
    date: "2025-05-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    title: Introduction to Business Central and Power BI
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-overview
    title: Query Overview
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
    title: Working with Excel layouts
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/analysis-mode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reporting-options-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-howto-excel-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-overview
    - https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
  objects:
    - object/page/16
    - object/page/22
    - object/page/25
    - object/page/26
    - object/page/27
    - object/page/31
    - object/page/143
    - object/page/144
    - object/page/456
    - object/page/457
    - object/page/458
    - object/page/459
    - object/page/460
    - object/page/461
    - object/page/6316
    - object/page/6317
    - object/page/9300
    - object/page/9301
    - object/page/9303
    - object/page/9304
    - object/page/9305
    - object/page/9306
    - object/page/9307
    - object/page/9309
    - object/page/9310
    - object/page/9311
    - object/page/9650
    - object/page/9652
  features: []
  topics:
    - topic/dev-itpro/development
  localizations: []
  videos:
    - video/jqVt0hYDfz0
    - video/qmLVKyHRhNc
  posts:
    - post/aardvarklabs-blog/1822
    - post/aardvarklabs-blog/2936
  guidelines: []
learn_toc_path:
  - Development
  - Data analytics and reporting
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development
children: []
coverage:
  learn: 7
  code: 28
  video: 2
  blog: 2
  guideline: 0
bc_forms:
  - 16
  - 22
  - 25
  - 26
  - 27
  - 31
  - 143
  - 144
  - 456
  - 457
  - 458
  - 459
  - 460
  - 461
  - 6316
  - 6317
  - 9300
  - 9301
  - 9303
  - 9304
  - 9305
  - 9306
  - 9307
  - 9309
  - 9310
  - 9311
  - 9650
  - 9652
member_hash: e697587d1818c505736d570405bafb81e35b187cc4d1c0f4ff8e040c993ebee3
narrative: generated
---

# Data analytics and reporting

> Data analytics and reporting in Business Central covers data analysis on lists and queries, queries as datasets and OData web services, Excel layout reports, and Power BI integration and embedding. It answers questions about choosing an analysis option and building or embedding reports.

Path: [Development](../development.md) > Data analytics and reporting · tier official · system reporting · narrative reviewed by Opus

## Overview

This area describes the ways to analyze and share Business Central data. Options differ by role: Power BI reports, data analysis mode on list pages and queries, Excel with APIs (Power Query and PowerPivot), and report objects with Excel layouts.

Start with "Analyzing, pivoting, and sharing data in Business Central" to compare the options. For interactive work without running a report, see the data analysis page, which covers columns, filters, row groups, pivot mode and date hierarchies. "Query Overview" explains queries that combine tables, aggregate data and can be exposed as OData web services.

For Excel reporting, "Working with Excel layouts" covers creating, configuring and working with Excel layouts that use formulas, PivotTables, PivotCharts and multiple worksheets. "Creating an Excel layout report" covers the data contract, system worksheets, translations and named formulas. For Power BI, read the introduction first, then the page on embedding reports in Business Central pages.

## Key points

- Data analysis mode lets you analyze list page and query data interactively with a Columns pane, Analysis Filters pane, row groups, pivot mode and multiple analysis views, without running a report.
- Analysis views can include fields from related tables and date hierarchies, and can be bookmarked to your Role Center.
- Queries retrieve and combine records from one or more tables, can calculate and aggregate data, and can be exposed as OData web services. Types include normal and API queries.
- Excel layout reports use an Excel layout data contract, with ExcelLayoutMultipleDataSheets, system worksheets, translation support, named formulas and drillthrough.
- Excel layouts can include formulas, PivotTables, PivotCharts, multiple worksheets and a data sheet, using built-in Office features.
- Power BI integration includes built-in Power BI apps, Power BI Desktop integration, KPI tracking and report embedding.
- Power BI reports, scorecards and dashboards can be embedded in pages using the Power BI embed framework, with pages such as Power BI Embedded Report Part and Power BI Element Addin Host, and context set through SetCurrentListSelection and SetPageContext.
- Version notes: the data analysis page references 2026 release wave 2. The Excel layout report page covers 2023 release wave 1 to 2025 release wave 1 and versions 23.3 to 26.0. The Power BI embedding page covers 2022 release wave 2 to 2025 release wave 1.

## Learn pages

- [Analyze list page and query data using data analysis](https://learn.microsoft.com/dynamics365/business-central/analysis-mode): Learn how to use the analysis mode in Business Central to analyze data.
- [Analyzing, pivoting, and sharing data in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reporting-options-overview): Introducing the options you have for creating Business Central reports that analyze, pivot, and share data.
- [Creating an Excel layout report](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-howto-excel-report-layout): Learn how to create an Excel layout report.
- [Embed Power BI reports in pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts): Explains how to display Power BI reports on pages in Business Central
- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.
- [Query Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-overview): Description of the query object.
- [Working with Excel layouts](https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts): Learn how to create and modify report layouts that are built using Excel.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central Queries: Simplifying Complex Data](../../../posts/aardvarklabs-blog/1822.md) (community post): "Queries simplify complex data retrieval by defining linked data items"
- [Integrating Analysis Views in Business Central Extensions](../../../posts/aardvarklabs-blog/2936.md) (community post): "package and deploy Analysis Views in extensions"
- [What's Cooking in Business Central: Delivering Analysis Views in AL Extensions](../../../videos/jqVt0hYDfz0.md) (video): "Delivering Analysis Views in AL Extensions. Topics: analysis views; al extensions"
- [Introducing: Analyze Data on Lists and Queries (2023 release wave 2)](../../../videos/qmLVKyHRhNc.md) (video): "AL Queries for analytics; Data sets for Excel layouts"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 16 "Chart of Accounts"](../../../objects/page/16.md) · on [Table 15 "G/L Account"](../../../objects/table/15.md)
- [Page 22 "Customer List"](../../../objects/page/22.md) · captioned "Customers" · on [Table 18 "Customer"](../../../objects/table/18.md)
- [Page 25 "Customer Ledger Entries"](../../../objects/page/25.md) · on [Table 21 "Cust. Ledger Entry"](../../../objects/table/21.md)
- [Page 26 "Vendor Card"](../../../objects/page/26.md) · on [Table 23 "Vendor"](../../../objects/table/23.md)
- [Page 27 "Vendor List"](../../../objects/page/27.md) · captioned "Vendors" · on [Table 23 "Vendor"](../../../objects/table/23.md)
- [Page 31 "Item List"](../../../objects/page/31.md) · captioned "Items" · on [Table 27 "Item"](../../../objects/table/27.md)
- [Page 143 "Posted Sales Invoices"](../../../objects/page/143.md) · on [Table 112 "Sales Invoice Header"](../../../objects/table/112.md)
- [Page 144 "Posted Sales Credit Memos"](../../../objects/page/144.md) · on [Table 114 "Sales Cr.Memo Header"](../../../objects/table/114.md)
- [Page 456 "No. Series"](../../../objects/page/456.md) · on [Table 308 "No. Series"](../../../objects/table/308.md)
- [Page 457 "No. Series Lines"](../../../objects/page/457.md) · on [Table 309 "No. Series Line"](../../../objects/table/309.md)
- [Page 458 "No. Series Relationships"](../../../objects/page/458.md) · on [Table 310 "No. Series Relationship"](../../../objects/table/310.md)
- [Page 459 "Sales & Receivables Setup"](../../../objects/page/459.md) · on [Table 311 "Sales & Receivables Setup"](../../../objects/table/311.md)
- [Page 460 "Purchases & Payables Setup"](../../../objects/page/460.md) · on [Table 312 "Purchases & Payables Setup"](../../../objects/table/312.md)
- [Page 461 "Inventory Setup"](../../../objects/page/461.md) · on [Table 313 "Inventory Setup"](../../../objects/table/313.md)
- [Page 6316 "Sustainability Report Power BI"](../../../objects/page/6316.md) · captioned "Sustainability Report (Power BI)"
- [Page 6317 "To Net Zero Carbon Power BI"](../../../objects/page/6317.md) · captioned "Journey to Net Zero Carbon (Power BI)"
- [Page 9300 "Sales Quotes"](../../../objects/page/9300.md) · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9301 "Sales Invoice List"](../../../objects/page/9301.md) · captioned "Sales Invoices" · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9303 "Blanket Sales Orders"](../../../objects/page/9303.md) · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9304 "Sales Return Order List"](../../../objects/page/9304.md) · captioned "Sales Return Orders" · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9305 "Sales Order List"](../../../objects/page/9305.md) · captioned "Sales Orders" · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9306 "Purchase Quotes"](../../../objects/page/9306.md) · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9307 "Purchase Order List"](../../../objects/page/9307.md) · captioned "Purchase Orders" · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9309 "Purchase Credit Memos"](../../../objects/page/9309.md) · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9310 "Blanket Purchase Orders"](../../../objects/page/9310.md) · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9311 "Purchase Return Order List"](../../../objects/page/9311.md) · captioned "Purchase Return Orders" · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9650 "Custom Report Layouts"](../../../objects/page/9650.md) · on [Table 9650 "Custom Report Layout"](../../../objects/table/9650.md)
- [Page 9652 "Report Layout Selection"](../../../objects/page/9652.md) · on [Table 9651 "Report Layout Selection"](../../../objects/table/9651.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
