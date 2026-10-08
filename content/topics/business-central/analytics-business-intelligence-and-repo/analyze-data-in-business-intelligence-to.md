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
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 89fae4cdc52182963e0568e74f8e606d93de62daf48fd6a5824dc049c00b48e9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis
    title: Analyze Data in Business Intelligence Tools
    date: "2025-01-27"
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
    url: https://learn.microsoft.com/dynamics365/business-central/about-intelligent-cloud
    title: Intelligent insights and cloud migration (on-premises only)
    date: "2024-03-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-fabric
    title: Introduction to Microsoft Fabric and Business Central
    date: "2024-04-24"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/
    - https://learn.microsoft.com/dynamics365/business-central/about-intelligent-cloud
    - https://learn.microsoft.com/dynamics365/business-central/admin-fabric
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
  objects:
    - object/page/4010
    - object/page/6316
    - object/page/6317
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo
  localizations: []
  videos: []
  posts:
    - post/bertverbeek-nl/1318
    - post/thinkaboutit-be/8229
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Analyze data in business intelligence tools
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo
children: []
coverage:
  learn: 5
  code: 3
  video: 0
  blog: 2
  guideline: 0
bc_forms:
  - 4010
  - 6316
  - 6317
member_hash: f0ca77f87ce130d1a582fbea2edeac4c01a20ade3e1db0f27be1cb8510a495bb
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

## Learn pages

- [Analyze Data in Business Intelligence Tools](https://learn.microsoft.com/dynamics365/business-central/reports-external-analysis): Provides an overview of how external Business Intelligence tools can interact with Business Central data.
- [API (v2.0) for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/): Reference content for the API (v2.0) endpoint for integration with Dynamics 365 Business Central.
- [Intelligent insights and cloud migration (on-premises only)](https://learn.microsoft.com/dynamics365/business-central/about-intelligent-cloud): In Business Central online, you have access to other online services, and you can get intelligent insights that are based on Azure AI, for example. Read on if you're considering to migrate from on-premises to the cloud.
- [Introduction to Microsoft Fabric and Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-fabric): Get an overview of using Microsoft Fabric to get insight, business intelligence, and KPIs from your Business Central data.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Native connection with Fabric in Business Central](../../../posts/bertverbeek-nl/1318.md) (community post): "Business Central introduces native integration with Microsoft Fabric for data synchronization"
- [Business Central Data Mirroring to Microsoft Fabric Is Coming](../../../posts/thinkaboutit-be/8229.md) (community post): "simplifies analytics architecture for enterprise data platforms"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4010 "Intelligent Cloud"](../../../objects/page/4010.md)
- [Page 6316 "Sustainability Report Power BI"](../../../objects/page/6316.md) · captioned "Sustainability Report (Power BI)"
- [Page 6317 "To Net Zero Carbon Power BI"](../../../objects/page/6317.md) · captioned "Journey to Net Zero Carbon (Power BI)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
