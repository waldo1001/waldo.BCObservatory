---
id: topic/dev-itpro/integration/integrating-with-microsoft-fabric
type: topic
title: Integrating with Microsoft Fabric
summary: Integrating Business Central with Microsoft Fabric covers mirroring Business Central online data into OneLake, administrator setup and monitoring, and other data extraction methods. It also covers Copilot Studio integration through the MCP server. It answers questions about choosing an extraction approach, configuring mirroring, and connecting agents.
tier: official
language: en
system: integration
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
  input_hash: f2b18e96b472d0e91eb30a124cec9f269fba14b72607be9ca359b61eb6f9f08f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extract-data
    title: Business Central Data Extraction Methods
    date: "2026-10-28"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server
    title: Configure Business Central MCP Server
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio
    title: Create Agents in Copilot Studio that Connect to Business Central
    date: "2026-10-02"
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
    url: https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring
    title: Set Up Business Central Data Mirroring to Microsoft Fabric
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extract-data
    - https://learn.microsoft.com/dynamics365/business-central/admin-fabric
  objects:
    - object/page/8350
    - object/page/8351
    - object/page/8359
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
    - topic/dev-itpro/integration
    - topic/dev-itpro/integration/integrating-with-microsoft-fabric/administrator
    - topic/dev-itpro/integration/integrating-with-microsoft-fabric/integrating-with-microsoft-copilot-studi
  localizations: []
  videos:
    - video/kOCiyVql0go
  posts:
    - post/bertverbeek-nl/1143
    - post/bertverbeek-nl/1196
    - post/bertverbeek-nl/1209
    - post/bertverbeek-nl/1318
    - post/bertverbeek-nl/1342
    - post/bertverbeek-nl/1353
    - post/demiliani-com/15981
    - post/thinkaboutit-be/8229
    - post/waldo-be/318707
    - post/yzhums-com/77184
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Fabric
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children:
  - topic/dev-itpro/integration/integrating-with-microsoft-fabric/administrator
  - topic/dev-itpro/integration/integrating-with-microsoft-fabric/integrating-with-microsoft-copilot-studi
coverage:
  learn: 7
  code: 11
  video: 1
  blog: 10
  guideline: 0
bc_forms:
  - 8350
  - 8351
  - 8359
  - 48508
  - 48509
  - 48510
  - 48511
  - 48512
  - 48513
  - 48515
  - 48519
member_hash: 42cc0d988f0156676d6a3cfcee8d9329385994d3755fd37b882900698b93107d
narrative: generated
---

# Integrating with Microsoft Fabric

> Integrating Business Central with Microsoft Fabric covers mirroring Business Central online data into OneLake, administrator setup and monitoring, and other data extraction methods. It also covers Copilot Studio integration through the MCP server. It answers questions about choosing an extraction approach, configuring mirroring, and connecting agents.

Path: [Integration](../integration.md) > Integrating with Microsoft Fabric · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section is about getting Business Central data into analytics platforms, mainly Microsoft Fabric. The data mirroring page describes the managed option: Business Central online replicates an initial snapshot and then ongoing changes into OneLake, so analytics do not need to read repeatedly from APIs. Data is stored in Delta Parquet format.

The extraction methods page is the best starting point if you are still deciding on an approach. It compares ETL processes, API-based delta extraction with read scale-out, tools such as Azure Data Factory and Power BI dataflows, and Fabric mirroring. It also mentions BACPAC export and systemModifiedAt filtering. Once you pick mirroring, the Administrator subtopic explains setup on the Microsoft Fabric Mirroring Setup page, choosing companies and tables, managing synchronization, and monitoring and troubleshooting runs.

A second subtopic covers integration with Microsoft Copilot Studio. It explains how to configure the Business Central MCP Server and build agents that connect to Business Central through the connector or the MCP server, including which APIs and operations agents can use.

## Key points

- Data mirroring replicates Business Central online data to Microsoft Fabric OneLake as an initial snapshot plus incremental synchronization.
- Mirroring supports multiple Business Central companies and up to 1,000 selected tables.
- Mirrored data is stored in Delta Parquet format, and a configuration package with standard tables is available.
- Administrators set up and manage mirroring on the Microsoft Fabric Mirroring Setup page, using the sync overview and detail views to monitor and troubleshoot.
- The data extraction methods page covers ETL, API-based delta extraction with read scale-out, Azure Data Factory, Power BI dataflows, and BACPAC export.
- Delta extraction through APIs can filter on systemModifiedAt; the extraction page references 2023 release wave 2 and 2024 release wave 1.
- Copilot Studio integration uses the Business Central MCP Server or the connector to let agents work with Business Central APIs and operations.

## Subtopics

- [Administrator](integrating-with-microsoft-fabric/administrator.md) (3 pages)
- [Integrating with Microsoft Copilot Studio](integrating-with-microsoft-fabric/integrating-with-microsoft-copilot-studi.md) (2 pages)

## More Learn pages

- [Business Central Data Extraction Methods](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extract-data): Compare Business Central data extraction options, including Microsoft Fabric mirroring, API-based delta loads, and custom ETL pipelines.
- [Business Central Data Mirroring to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-fabric): Learn how Business Central mirrors selected company data to Microsoft Fabric for analytics, engineering, and business intelligence scenarios.
  - Status: Data mirroring to Microsoft Fabric is in preview as of February 2025.
  - Data mirroring replicates an initial snapshot and ongoing changes from selected Business Central companies and tables into OneLake in Delta Parquet format.
  - Limit: You can select up to 1,000 Business Central tables across manual selections and configuration packages.
  - The mirrored data in Fabric supports analytics with Fabric IQ, Power BI, Data Factory, and other experiences without repeatedly calling Business Central APIs.
  - Prerequisite: An administrator must create an open mirrored database in a Fabric workspace, set up a service principal, and connect Business Central to that workspace and database.
  - Setup and synchronization operations run asynchronously. Business Central records overview and details for each run.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [[Preview] bc2adls and Fabric Open Mirroring](../../../posts/bertverbeek-nl/1143.md) (community post): "bc2adls and Fabric Open Mirroring; Business Central data files go to a Fabric Landing Zone"
- [Data agent inside Fabric ask question on your Business Central Data](../../../posts/bertverbeek-nl/1196.md) (community post): "Data Agents in Microsoft Fabric enable users to ask natural language questions about Business Central data"
- [Migrate bc2adls from PTE to appsource extension](../../../posts/bertverbeek-nl/1209.md) (community post): "bc2adls extension for exporting Business Central data to Azure Data Lake Storage"
- [Native connection with Fabric in Business Central](../../../posts/bertverbeek-nl/1318.md) (community post): "Business Central introduces native integration with Microsoft Fabric for data synchronization"
- [Business Central to Microsoft Fabric is a mirror. But what if you want to know what actually changed?](../../../posts/bertverbeek-nl/1342.md) (community post): "Business Central data mirrored to Microsoft Fabric appears as static copies by default"
- [Credentials setup on Microsoft Fabric Mirroring in Business Central](../../../posts/bertverbeek-nl/1353.md) (community post): "Setting up credentials for Microsoft Fabric Mirroring in Business Central"
- [Dynamics 365 Business Central: data mirroring to Microsoft Fabric announced.](../../../posts/demiliani-com/15981.md) (community post): "data mirroring for Dynamics 365 Business Central to Microsoft Fabric"
- [Business Central Data Mirroring to Microsoft Fabric Is Coming](../../../posts/thinkaboutit-be/8229.md) (community post): "Business Central 2026 release wave 2 introduces data mirroring to Microsoft Fabric"
- [Business Central data in Fabric: the way it should be](../../../posts/waldo-be/318707.md) (community post): "Business Central now supports native data mirroring to Microsoft Fabric"
- [Business Central 2026 release wave 2 (BC29.1): Data mirroring to Microsoft Fabric (No APIs or OData Needed)](../../../posts/yzhums-com/77184.md) (community post): "data mirroring replicates Business Central data to Microsoft Fabric's OneLake"
- [Introducing: Business Central Integration with Microsoft Fabric (2026 release wave 2)](../../../videos/kOCiyVql0go.md) (video): "Business Central Fabric mirroring; Mirror database in OneLake; Fabric integration APIs"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 48511 "Fabric Platform Setup"](../../../objects/page/48511.md) · captioned "Microsoft Fabric Mirroring Setup (Preview)"
- [Page 48519 "Fabric Platform Setup Wizard"](../../../objects/page/48519.md) · captioned "Set Up Microsoft Fabric Mirroring (Preview)"
- [Page 8350 "MCP Config List"](../../../objects/page/8350.md) · captioned "Model Context Protocol (MCP) Server Configurations" · via [Integrating with Microsoft Copilot Studio](integrating-with-microsoft-fabric/integrating-with-microsoft-copilot-studi.md)
- [Page 8351 "MCP Config Card"](../../../objects/page/8351.md) · captioned "Model Context Protocol (MCP) Server Configuration" · via [Integrating with Microsoft Copilot Studio](integrating-with-microsoft-fabric/integrating-with-microsoft-copilot-studi.md)
- [Page 8359 "MCP Config Warning List"](../../../objects/page/8359.md) · captioned "MCP Configuration Warnings" · on [Table 8352 "MCP Config Warning"](../../../objects/table/8352.md) · via [Integrating with Microsoft Copilot Studio](integrating-with-microsoft-fabric/integrating-with-microsoft-copilot-studi.md)
- [Page 48508 "Fabric Platform Companies"](../../../objects/page/48508.md) · captioned "Fabric Company Configuration" · via [Administrator](integrating-with-microsoft-fabric/administrator.md)
- [Page 48509 "Fabric Platform Export Details"](../../../objects/page/48509.md) · captioned "Fabric Synchronization Details" · via [Administrator](integrating-with-microsoft-fabric/administrator.md)
- [Page 48510 "Fabric Platform Export Summary"](../../../objects/page/48510.md) · captioned "Fabric Synchronization Overview" · via [Administrator](integrating-with-microsoft-fabric/administrator.md)
- [Page 48512 "Fabric Platform Tables"](../../../objects/page/48512.md) · captioned "Fabric Table Configuration" · via [Administrator](integrating-with-microsoft-fabric/administrator.md)
- [Page 48513 "Fabric Config Package Card"](../../../objects/page/48513.md) · captioned "Fabric Config Package" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Administrator](integrating-with-microsoft-fabric/administrator.md)
- [Page 48515 "Fabric Config Packages"](../../../objects/page/48515.md) · captioned "Fabric Configuration Packages" · on [Table 48501 "Fabric Config Package"](../../../objects/table/48501.md) · via [Administrator](integrating-with-microsoft-fabric/administrator.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
