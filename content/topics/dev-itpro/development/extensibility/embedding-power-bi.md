---
id: topic/dev-itpro/development/extensibility/embedding-power-bi
type: topic
title: Embedding Power BI
summary: "Embedding Power BI covers how Business Central works with Power BI: getting Business Central data into dashboards and reports, and embedding Power BI reports, scorecards, and dashboards in Business Central pages. It answers questions about the embed framework, the pages involved, and the data connection options."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-05T00:55:36.087Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 62703e1576b3d8c63dcbea0c19d28cb8db2bf9c9a9d7b6fb555120574557ee55
evidence:
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
  objects:
    - object/page/6316
    - object/page/6317
  features: []
  topics:
    - topic/dev-itpro/development/extensibility
  localizations: []
  videos:
    - video/hSJW3LiOBxg
    - video/RU3D3RMAvVI
  posts:
    - post/aardvarklabs-blog/2063
  guidelines: []
learn_toc_path:
  - Development
  - Extensibility
  - Embedding Power BI
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extensibility
children: []
coverage:
  learn: 2
  code: 2
  video: 2
  blog: 1
  guideline: 0
bc_forms:
  - 6316
  - 6317
member_hash: fd666723dde183299bb13c34badea087732eb72ba3120874e1447b01c0595e26
narrative: generated
---

# Embedding Power BI

> Embedding Power BI covers how Business Central works with Power BI: getting Business Central data into dashboards and reports, and embedding Power BI reports, scorecards, and dashboards in Business Central pages. It answers questions about the embed framework, the pages involved, and the data connection options.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Embedding Power BI · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section has two pages. The introduction explains the overall Power BI integration: how to retrieve Business Central data, build dashboards and reports, and create custom reports for analysis. It mentions Power BI apps for Business Central, Power BI Desktop, dataflows and datamarts, the Power Query connector, and data exposure through API pages and OData.

The second page is the developer-focused part. It describes how to embed Power BI reports, scorecards, and dashboards in Business Central pages using the Power BI embed framework, with pages such as Power BI Embedded Report Part and Power BI Element Addin Host. It also covers context handling with keywords, SetCurrentListSelection, and SetPageContext.

Start with the introduction to see the data and reporting options, then move to the embedding page when you need to place a report on a page or pass page context to it.

## Key points

- Business Central data can be retrieved for Power BI through API pages and OData, the Power Query connector, dataflows, and datamarts.
- Power BI apps for Business Central and Power BI Desktop are options for building dashboards and custom reports.
- Reports, scorecards, and dashboards can be embedded in Business Central pages through the Power BI embed framework.
- Relevant pages include Power BI Embedded Report Part and Power BI Element Addin Host.
- Context can be passed to embedded content with context keywords, SetCurrentListSelection, and SetPageContext.
- The embedding page references changes in 2022 release wave 2, 2023 release wave 2, and 2025 release wave 1.
- Embedded content types include the Power BI Report part, dashboard tiles, and report visuals.

## Learn pages

- [Embed Power BI reports in pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts): Explains how to display Power BI reports on pages in Business Central
  - In the observatory: [Page 6323 "Power BI Element Card"](../../../../objects/page/6323.md), [Page 6324 "Power BI Element Addin Host"](../../../../objects/page/6324.md), [Page 6325 "Power BI Embedded Report Part"](../../../../objects/page/6325.md), [Page 6327 "Power BI Embed Setup Wizard"](../../../../objects/page/6327.md), [Table 6312 "Power BI Displayed Element"](../../../../objects/table/6312.md), [Table 6314 "Power BI Context Settings"](../../../../objects/table/6314.md)
- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Understanding User Control Host in Business Central](../../../../posts/aardvarklabs-blog/2063.md) (community post): "User Control Host enables embedding web pages and Power BI reports directly"
- [What's New: Power BI and Reporting for Developers (2023 release wave 2)](../../../../videos/hSJW3LiOBxg.md) (video): "Power BI Scorecards embedding"
- [What's New: Power BI Embedding (For Developers) (2025 release wave 1)](../../../../videos/RU3D3RMAvVI.md) (video): "power bi embedding; user control host; page type; control addin"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 6316 "Sustainability Report Power BI"](../../../../objects/page/6316.md) · captioned "Sustainability Report (Power BI)"
- [Page 6317 "To Net Zero Carbon Power BI"](../../../../objects/page/6317.md) · captioned "Journey to Net Zero Carbon (Power BI)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
