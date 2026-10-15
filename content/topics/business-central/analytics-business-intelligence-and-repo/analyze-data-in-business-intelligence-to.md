---
id: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to
type: topic
title: Analyze data in business intelligence tools
summary: "Analyzing Business Central data in business intelligence tools: options include Microsoft Fabric and OneLake, Power BI, data warehouse extraction, and the v2.0 REST API for connect apps. Also covers which cloud insights are missing on-premises without cloud migration, and performance guidance for AL developers."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:40.443Z"
  flags: []
generated:
  at: "2026-10-15T01:08:34.842Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 89fae4cdc52182963e0568e74f8e606d93de62daf48fd6a5824dc049c00b48e9
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
    title: Data Mirroring to Microsoft Fabric from Business Central
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fabric-faq
    title: FAQ About Mirroring Business Central Data to Microsoft Fabric
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/about-intelligent-cloud
    title: Intelligent insights and cloud migration (on-premises only)
    date: "2024-03-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export
    title: Manage Business Central Synchronization with Microsoft Fabric
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export
    title: Monitor and Troubleshoot Microsoft Fabric Synchronization
    date: "2026-10-08"
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
    title: Set up Business Central data mirroring to Microsoft Fabric
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/
    - https://learn.microsoft.com/dynamics365/business-central/about-intelligent-cloud
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
  objects:
    - object/page/4010
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
  videos: []
  posts:
    - post/thinkaboutit-be/8229
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Analyze data in business intelligence tools
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo
children:
  - topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric
coverage:
  learn: 9
  code: 9
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 4010
  - 48508
  - 48509
  - 48510
  - 48511
  - 48512
  - 48513
  - 48515
  - 48519
member_hash: 95608ddb0e2b7f483c9c4f281fe1960fa9222a2f9c4629a876b1cb4b83b53aec
narrative: generated
---

# Analyze data in business intelligence tools

> Analyzing Business Central data in business intelligence tools: options include Microsoft Fabric and OneLake, Power BI, data warehouse extraction, and the v2.0 REST API for connect apps. Also covers which cloud insights are missing on-premises without cloud migration, and performance guidance for AL developers.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Analyze data in business intelligence tools · tier official · system reporting · narrative reviewed (checked by Opus)

## Overview

Analyzing Business Central data in business intelligence tools means getting the data into external tools. The main guide lists the options: Microsoft Fabric, Power BI, data warehouse extraction, and API access. Start there to choose an approach.

Supporting pages go deeper. One introduces Fabric integration and OneLake as a unified data lake with automatic data governance. Another is the API v2.0 reference, which describes building connect apps on REST APIs and moving from v1.0. A third explains that on-premises installations don't get the cloud KPIs and Power BI insights of the online version unless they migrate to the cloud.

The section also has performance articles for AL developers. They cover page design, web services, reports, AL coding patterns, data access and testing, and they help developers tune Business Central applications.

## Key points

- The main guide lists four routes for analysis: Microsoft Fabric, Power BI, data warehouse extraction, and API access.
- Fabric integration uses OneLake as a unified data lake, with data lineage, data protection, certification and catalog integration.
- API v2.0 is a REST API for building connect apps with third-party services. The reference covers API pages, operations, code examples and the transition from v1.0.
- On-premises Business Central lacks the cloud-based KPIs and Power BI insights of the online version. Cloud migration is needed to get them.
- AL performance articles cover page background tasks, Edit-in-Excel performance, query object optimization and partial records.
- They also cover table extension impact analysis and event subscription performance.
- Some performance guidance is tied to 2021 release wave 2 and 2023 release waves 1 and 2.

## Subtopics

- [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md) (5 pages)

## More Learn pages

- [Analyze Data in Business Intelligence Tools](https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis): Provides an overview of how external Business Intelligence tools can interact with Business Central data.
- [API (v2.0) for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/): Reference content for the API (v2.0) endpoint for integration with Dynamics 365 Business Central.
- [Intelligent insights and cloud migration (on-premises only)](https://learn.microsoft.com/dynamics365/business-central/about-intelligent-cloud): In Business Central online, you have access to other online services, and you can get intelligent insights that are based on Azure AI, for example. Read on if you're considering to migrate from on-premises to the cloud.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central Data Mirroring to Microsoft Fabric Is Coming](../../../posts/thinkaboutit-be/8229.md) (community post): "simplifies analytics architecture for enterprise data platforms"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4010 "Intelligent Cloud"](../../../objects/page/4010.md)
- [Page 48508 "Fabric Platform Companies"](../../../objects/page/48508.md) · captioned "Fabric Company Configuration" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48509 "Fabric Platform Export Details"](../../../objects/page/48509.md) · captioned "Fabric Synchronization Details" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48510 "Fabric Platform Export Summary"](../../../objects/page/48510.md) · captioned "Fabric Synchronization Overview" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48511 "Fabric Platform Setup"](../../../objects/page/48511.md) · captioned "Microsoft Fabric Mirroring Setup" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48512 "Fabric Platform Tables"](../../../objects/page/48512.md) · captioned "Fabric Table Configuration" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48513 "Fabric Config Package Card"](../../../objects/page/48513.md) · captioned "Fabric Config Package" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48515 "Fabric Config Packages"](../../../objects/page/48515.md) · captioned "Fabric Configuration Packages" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)
- [Page 48519 "Fabric Platform Setup Wizard"](../../../objects/page/48519.md) · captioned "Set Up Microsoft Fabric Mirroring" · via [Microsoft Fabric](analyze-data-in-business-intelligence-to/microsoft-fabric.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
