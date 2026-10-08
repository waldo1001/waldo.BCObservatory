---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi
type: topic
title: Integrating with Microsoft Power BI
summary: "Power BI integration with Business Central: enabling it, building reports on Business Central data, embedding reports in pages, extracting data for ETL, and improving dataset load performance. It answers setup, report authoring, embedding and data-loading questions."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:50.663Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0dc61f8c427b71b1f30248ccf4cb3093afd4303157112e0ea16a0958ecd7c177
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi
    title: Building reports in Power BI Desktop to display Business Central data
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox
    title: Display custom Power BI reports
    date: "2025-10-16"
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
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup
    title: Enabling Power BI integration with Business Central
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extract-data
    title: Extract data from Business Central
    date: "2025-12-23"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-pbi-performance
    title: Power BI Dataset Load Performance
    date: "2023-08-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview
    title: Power BI integration component and architecture overview for Business Central| Microsoft Docs
    date: "2024-04-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extract-data
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-pbi-performance
  objects:
    - object/page/6316
    - object/page/6317
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi/administrator
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi/report-creator
  localizations: []
  videos:
    - video/6Zb7VAvLVm4
  posts:
    - post/thinkaboutit-be/7753
    - post/thinkaboutit-be/7943
    - post/thinkaboutit-be/7995
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Power Platform
  - Integrating with Microsoft Power BI
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
children:
  - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi/administrator
  - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi/report-creator
coverage:
  learn: 8
  code: 2
  video: 1
  blog: 3
  guideline: 0
bc_forms:
  - 6316
  - 6317
member_hash: 7d129f356f2d15787f437575bbb4ce0feb3529fb5b9f4df947be4742e33d335e
narrative: generated
---

# Integrating with Microsoft Power BI

> Power BI integration with Business Central: enabling it, building reports on Business Central data, embedding reports in pages, extracting data for ETL, and improving dataset load performance. It answers setup, report authoring, embedding and data-loading questions.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Power Platform](../integrating-with-microsoft-power-platfor.md) > Integrating with Microsoft Power BI · tier official · system reporting · narrative reviewed (checked by Opus)

## Overview

This area covers how Business Central works with Power BI. It includes the built-in Power BI apps, reports built in Power BI Desktop, and reports shown inside Business Central pages. The introduction page gives the overall picture and the roles involved.

The subtopics split the work by role. Administrators enable the integration (licensing, API pages, OData web services, online and on-premises setup) and learn how the components fit together. Report creators build reports with the connector, APIs and OData web services, and prepare them for Power BI FactBoxes on list pages.

Further pages cover embedding reports, scorecards and dashboards with the Power BI embed framework, extracting data with ETL patterns, and tuning dataset load performance. Start with the introduction, then go to the Administrator or Report creator subtopic that matches your role.

## Key points

- The introduction page describes built-in Power BI apps, Power BI Desktop integration, report embedding and KPI tracking across roles.
- Administrators enable the integration, covering licensing, API pages, OData web services, and online and on-premises setup.
- Report creators build reports in Power BI Desktop using the connector, APIs and OData web services.
- Reports can be prepared to appear in Power BI FactBoxes on list pages.
- Embedding uses the Power BI embed framework with pages such as Power BI Embedded Report Part and Power BI Element Addin Host; context is set with SetCurrentListSelection and SetPageContext.
- Data extraction covers ETL, historical and delta loads using API queries filtered on SystemModifiedAt, read scale-out, Azure Data Factory and Power BI dataflows.
- Dataset load performance improves by loading only the data you need through APIs and web service endpoints.
- Web service telemetry can monitor usage, performance and errors.

## Subtopics

- [Administrator](integrating-with-microsoft-power-bi/administrator.md) (2 pages)
- [Report creator](integrating-with-microsoft-power-bi/report-creator.md) (2 pages)

## More Learn pages

- [Embed Power BI reports in pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts): Explains how to display Power BI reports on pages in Business Central
- [Extract data from Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extract-data): Explains how to extract data from Business Central with different tools
- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.
- [Power BI Dataset Load Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-pbi-performance): Learn about how to tune the performance of Power BI dataset load time based on Business Central web services and APIs

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Which Power BI License Do You Need for Business Central?](../../../../posts/thinkaboutit-be/7753.md) (community post): "Power BI Pro is required for any practical use of Power BI"
- [Quick Tip: How Can You Download the Standard Business Central Power BI Reports?](../../../../posts/thinkaboutit-be/7943.md) (community post): "Standard Power BI reports for Business Central are available through official Microsoft Power BI template apps"
- [Quick Tip: Troubleshooting Business Central Power BI Reports: My 5-Minute Checklist](../../../../posts/thinkaboutit-be/7995.md) (community post): "Most Business Central Power BI issues stem from configuration problems"
- [What's New: Business Central Integration with Power Platform including Power BI(2024 release wave 2)](../../../../videos/6Zb7VAvLVm4.md) (video): "Power BI Embedded Reports with Full Capabilities; Power BI Report Page Bookmarking"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 6316 "Sustainability Report Power BI"](../../../../objects/page/6316.md) · captioned "Sustainability Report (Power BI)"
- [Page 6317 "To Net Zero Carbon Power BI"](../../../../objects/page/6317.md) · captioned "Journey to Net Zero Carbon (Power BI)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
