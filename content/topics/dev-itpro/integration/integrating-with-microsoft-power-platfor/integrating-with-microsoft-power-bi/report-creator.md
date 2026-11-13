---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi/report-creator
type: topic
title: Report creator
summary: Report creator covers building Power BI reports from Business Central data in Power BI Desktop, and embedding custom reports in Business Central list pages through the Power BI FactBox. It answers questions about connecting via APIs or OData web services, customizing Power Query, filtering by primary keys, and troubleshooting connections.
tier: official
language: en
system: reporting
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
  input_hash: b2b395c34b9bf7b2c717f3a54d3fb7aa8278fba5af693d8e8ba21574132eabd1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi
    title: Build Power BI Reports with Business Central Data
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox
    title: Display Custom Power BI Reports in Business Central
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi
  localizations: []
  videos: []
  posts:
    - post/yzhums-com/68178
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Power Platform
  - Integrating with Microsoft Power BI
  - Report creator
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: acba99b7a835774b9db004cb2de8d0c52c89c8b48fa9c781fec1d37fc1b9bde2
narrative: generated
---

# Report creator

> Report creator covers building Power BI reports from Business Central data in Power BI Desktop, and embedding custom reports in Business Central list pages through the Power BI FactBox. It answers questions about connecting via APIs or OData web services, customizing Power Query, filtering by primary keys, and troubleshooting connections.

Path: [Integration](../../../integration.md) > [Integrating with Microsoft Power Platform](../../integrating-with-microsoft-power-platfor.md) > [Integrating with Microsoft Power BI](../integrating-with-microsoft-power-bi.md) > Report creator · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for people who create their own Power BI reports on Business Central data. It has two pages that cover two directions: getting data out of Business Central into Power BI Desktop, and bringing finished reports back into Business Central.

The first page explains how to use Business Central as a data source in Power BI Desktop. It covers connecting through APIs or web services, adjusting the Power Query code, read-only replica configuration, cross-company reporting, and common connection problems. The second page explains how to create a custom report, set up filters with primary keys, and show the report in the Power BI FactBox on list pages. It mentions version 27.

Start with the first page to build and publish a report. Then use the second page to embed it in Business Central.

## Key points

- Power BI Desktop can use Business Central as a data source through the Business Central connector.
- Data can be pulled from API data sources or OData web services.
- Power Query code can be customized after connecting.
- The build guide covers read-only replica configuration and cross-company reporting.
- The build guide includes troubleshooting for common connection issues.
- Custom reports can be embedded in Business Central list pages through the Power BI FactBox.
- Report filtering for embedded reports uses primary keys.
- The embedding page covers multi-page reports, report sizing and colors, and mentions version 27.

## Learn pages

- [Build Power BI Reports with Business Central Data](https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi): Connect Power BI Desktop to Business Central data, build accessible reports, publish and share them, and configure advanced connection options.
- [Display Custom Power BI Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox): Create and configure custom Power BI reports for Business Central list pages, with report filters and layouts that work in the Power BI FactBox.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central 2025 wave 2 (BC27): Access open-sourced Power BI apps](../../../../../posts/yzhums-com/68178.md) (community post): "Developers can access source code through PowerBIReports in Business Central"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
