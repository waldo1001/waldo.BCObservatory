---
id: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to
type: topic
title: Analyze data in business intelligence tools
summary: "Analyzing Business Central data in external BI tools: exporting data to Microsoft Fabric, Power BI, data warehouses and data lakes, using the API v2.0, mirroring to Fabric OneLake (preview), and performance guidance for AL developers. It answers questions about getting data out of Business Central for reporting."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-26T01:05:31.204Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d7af4654d2104ca17ee54faf86229c000d5a4340fd4d409dc662aee510da6735
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis
    title: Analyze Data in Business Intelligence Tools
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/
    title: API (v2.0) for Dynamics 365 Business Central
    date: "2026-08-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-fabric
    title: Business Central Data Mirroring to Microsoft Fabric
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fabric-faq
    title: Business Central Mirroring to Microsoft Fabric FAQ
    date: "2026-11-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export
    title: Manage Business Central Synchronization with Microsoft Fabric
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export
    title: Monitor and Troubleshoot Microsoft Fabric Synchronization
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
    title: Performance Articles for AL Developers
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring
    title: Set Up Business Central Data Mirroring to Microsoft Fabric
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
  objects:
    - object/page/48508
    - object/page/48509
    - object/page/48510
    - object/page/48511
    - object/page/48512
    - object/page/48513
    - object/page/48515
    - object/page/48519
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo
    - topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric-preview
  localizations: []
  videos:
    - video/6zj34hjbpGU
    - video/B9VbZzC2p7E
  posts: []
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Analyze data in business intelligence tools
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo
children:
  - topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric-preview
coverage:
  learn: 8
  code: 8
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 48508
  - 48509
  - 48510
  - 48511
  - 48512
  - 48513
  - 48515
  - 48519
member_hash: 4b9dc6eaf3993586de7d990fa1648e51dd93d2b0c3a9bbb4e94bd4b366aada7e
narrative: generated
---

# Analyze data in business intelligence tools

> Analyzing Business Central data in external BI tools: exporting data to Microsoft Fabric, Power BI, data warehouses and data lakes, using the API v2.0, mirroring to Fabric OneLake (preview), and performance guidance for AL developers. It answers questions about getting data out of Business Central for reporting.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Analyze data in business intelligence tools · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to move Business Central data into external business intelligence tools. The entry page gives the options: mirror data to Microsoft Fabric, connect Power BI, or extract data to a data warehouse or data lake through the Business Central API.

The API (v2.0) page is the reference for building connect apps with REST APIs, including API pages, operations, code examples and the transition from v1.0. The Microsoft Fabric (preview) subtopic covers mirroring online data into OneLake, from setup and service principal authentication to choosing companies and tables, managing synchronization, monitoring, troubleshooting, licensing and availability.

The Performance Articles for AL Developers page covers tuning pages, web services, reports, AL coding patterns and data access, which matters when analytics or integrations put load on the system. Start with the overview page to pick an approach, then go to the Fabric subtopic or the API reference.

## Key points

- Export targets named: Microsoft Fabric, Power BI, data warehouses and data lakes.
- Business Central data can be mirrored into Microsoft Fabric OneLake (preview, online data only).
- Fabric mirroring topics include service principal authentication, choosing companies and tables, managing synchronization, monitoring and troubleshooting.
- The Fabric subtopic also covers licensing and availability.
- API v2.0 supports connect apps built with REST APIs to integrate with third-party services.
- The API page includes guidance on transitioning from v1.0 and code examples.
- Performance guidance for AL developers covers page background tasks, Edit-in-Excel performance, query objects, partial records, table extension impact and event subscriptions.
- Performance articles reference 2021 release wave 2, 2023 release wave 1 and 2023 release wave 2.

## Subtopics

- [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md) (5 pages)

## More Learn pages

- [Analyze Data in Business Intelligence Tools](https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis): Provides an overview of how external Business Intelligence tools can interact with Business Central data.
- [API (v2.0) for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/): Reference content for the API (v2.0) endpoint for integration with Dynamics 365 Business Central.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [How Business Central Integrates with Microsoft Excel (2025)](../../../videos/6zj34hjbpGU.md) (video): "Pivot table creation; Pivot chart visualization; Data connection refresh"
- [Use an Agent to SQL Query data inside your Spreadsheet with Business Central (Advanced Spreadsheets)](../../../videos/B9VbZzC2p7E.md) (video): "AI Agent SQL Query Generation; Advanced Spreadsheets with Agent Integration"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 48508 "Fabric Platform Companies"](../../../objects/page/48508.md) · captioned "Fabric Company Configuration" · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)
- [Page 48509 "Fabric Platform Export Details"](../../../objects/page/48509.md) · captioned "Fabric Synchronization Details" · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)
- [Page 48510 "Fabric Platform Export Summary"](../../../objects/page/48510.md) · captioned "Fabric Synchronization Overview" · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)
- [Page 48511 "Fabric Platform Setup"](../../../objects/page/48511.md) · captioned "Microsoft Fabric Mirroring Setup (Preview)" · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)
- [Page 48512 "Fabric Platform Tables"](../../../objects/page/48512.md) · captioned "Fabric Table Configuration" · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)
- [Page 48513 "Fabric Config Package Card"](../../../objects/page/48513.md) · captioned "Fabric Config Package" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)
- [Page 48515 "Fabric Config Packages"](../../../objects/page/48515.md) · captioned "Fabric Configuration Packages" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)
- [Page 48519 "Fabric Platform Setup Wizard"](../../../objects/page/48519.md) · captioned "Set Up Microsoft Fabric Mirroring (Preview)" · via [Microsoft Fabric (preview)](analyze-data-in-business-intelligence-to/microsoft-fabric-preview.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
