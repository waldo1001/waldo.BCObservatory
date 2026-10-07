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
  at: "2026-10-07T02:32:59.251Z"
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
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development
  localizations: []
  videos:
    - video/jqVt0hYDfz0
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
  code: 0
  video: 1
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

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 16, 22, 25, 26, 27, 31, 143, 144, 456, 457, 458, 459, 460, 461, 6316, 6317, 9300, 9301, 9303, 9304, 9305, 9306, 9307, 9309, 9310, 9311, 9650, 9652.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
