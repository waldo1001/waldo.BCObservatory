---
id: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to
type: topic
title: Analyze data in business intelligence tools
summary: "Analyzing Business Central data in external BI tools: exporting data to Microsoft Fabric, Power BI, data warehouses and data lakes, using the v2.0 REST API, and AL performance guidance. It answers questions on mirroring setup, API integration and tuning."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-21T01:00:52.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4545c038a3f82065aa7524a99b8274dd00a9b6c48c97d9922793a767963ba2f4
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
    date: "2026-10-29"
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
    - topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric
  localizations: []
  videos:
    - video/B9VbZzC2p7E
  posts: []
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Analyze data in business intelligence tools
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo
children:
  - topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric
coverage:
  learn: 8
  code: 8
  video: 1
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

> Analyzing Business Central data in external BI tools: exporting data to Microsoft Fabric, Power BI, data warehouses and data lakes, using the v2.0 REST API, and AL performance guidance. It answers questions on mirroring setup, API integration and tuning.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Analyze data in business intelligence tools · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to get Business Central data into external business intelligence tools. The entry page lists the main routes: mirroring data to Microsoft Fabric, connecting Power BI, and extracting data to a data warehouse or data lake through the Business Central API.

The Microsoft Fabric subtopic is the most detailed part. It covers mirroring Business Central online data into OneLake, including setup, choosing tables and companies, scheduling, monitoring synchronization, limits, troubleshooting and FAQ. The API v2.0 reference page covers building connect apps with REST APIs, API operations and pages, and the transition from v1.0.

The performance page for AL developers is relevant when exports or integrations load the system. It covers page design, web services, reports, data access, Edit-in-Excel and testing. Start with the entry page to choose a route, then go to the Fabric pages for mirroring or the API reference for custom extraction.

## Key points

- The entry page names the export routes: Fabric mirroring, Power BI, data warehousing, data lake extraction and the Business Central API.
- Fabric mirroring replicates Business Central online data into OneLake.
- Fabric pages cover setup, table and company selection, scheduling, monitoring, limits, troubleshooting and FAQ.
- API v2.0 uses REST APIs to build connect apps that integrate with third-party services.
- The API v2.0 page includes API operations, API pages, code examples and guidance on moving from v1.0.
- Performance articles for AL developers cover page background tasks, Edit-in-Excel performance, query object optimization and partial records.
- The performance guidance also covers table extension impact analysis and event subscription performance, with notes tied to 2021 wave 2, 2023 wave 1 and 2023 wave 2.

## Subtopics

- [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md) (5 pages)

## More Learn pages

- [Analyze Data in Business Intelligence Tools](https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis): Provides an overview of how external Business Intelligence tools can interact with Business Central data.
- [API (v2.0) for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/): Reference content for the API (v2.0) endpoint for integration with Dynamics 365 Business Central.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Use an Agent to SQL Query data inside your Spreadsheet with Business Central (Advanced Spreadsheets)](../../../videos/B9VbZzC2p7E.md) (video): "AI Agent SQL Query Generation; Advanced Spreadsheets with Agent Integration"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 48508 "Fabric Platform Companies"](../../../objects/page/48508.md) · captioned "Fabric Company Configuration" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48509 "Fabric Platform Export Details"](../../../objects/page/48509.md) · captioned "Fabric Synchronization Details" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48510 "Fabric Platform Export Summary"](../../../objects/page/48510.md) · captioned "Fabric Synchronization Overview" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48511 "Fabric Platform Setup"](../../../objects/page/48511.md) · captioned "Microsoft Fabric Mirroring Setup (Preview)" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48512 "Fabric Platform Tables"](../../../objects/page/48512.md) · captioned "Fabric Table Configuration" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48513 "Fabric Config Package Card"](../../../objects/page/48513.md) · captioned "Fabric Config Package" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48515 "Fabric Config Packages"](../../../objects/page/48515.md) · captioned "Fabric Configuration Packages" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48519 "Fabric Platform Setup Wizard"](../../../objects/page/48519.md) · captioned "Set Up Microsoft Fabric Mirroring (Preview)" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
