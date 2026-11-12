---
id: topic/dev-itpro/integration/integrating-with-microsoft-fabric
type: topic
title: Integrating with Microsoft Fabric
summary: "Integrating Business Central with Microsoft Fabric: data extraction options, mirroring Business Central online data into Fabric OneLake, administrator setup and monitoring, and connecting Copilot Studio agents. It answers questions about choosing an extraction method, configuring and troubleshooting mirroring, and agent access."
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 48173ba3fcb1705bcebcc761fe5047b9e9f917d66527c85dfc5d35040bc0d418
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
    - post/bertverbeek-nl/1209
    - post/bertverbeek-nl/1318
    - post/bertverbeek-nl/1342
    - post/bertverbeek-nl/1353
    - post/demiliani-com/15981
    - post/thinkaboutit-be/8229
    - post/waldo-be/318707
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
  blog: 7
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

> Integrating Business Central with Microsoft Fabric: data extraction options, mirroring Business Central online data into Fabric OneLake, administrator setup and monitoring, and connecting Copilot Studio agents. It answers questions about choosing an extraction method, configuring and troubleshooting mirroring, and agent access.

Path: [Integration](../integration.md) > Integrating with Microsoft Fabric · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how to move Business Central data into analytics platforms and how to connect it to Copilot Studio. It starts with an overview of extraction methods, including ETL, API-based delta extraction with read scale-out, Azure Data Factory, Power BI dataflows, and BACPAC export, so you can compare approaches.

The main managed option is data mirroring to Microsoft Fabric. It replicates an initial snapshot and then ongoing changes from Business Central online into OneLake, without repeatedly reading from APIs. The Administrator subtopic covers the practical work: initial setup, choosing which companies and tables synchronize, and monitoring and troubleshooting runs.

A separate subtopic covers Microsoft Copilot Studio integration: configuring the Business Central MCP Server and building agents that connect through the connector or MCP server.

Start with the data extraction methods page to decide on an approach. If you pick mirroring, read the mirroring page and then the Administrator pages.

## Key points

- Extraction methods page compares ETL, API-based delta extraction with read scale-out, Azure Data Factory, Power BI dataflows, and BACPAC export.
- Delta extraction can filter on systemModifiedAt.
- Mirroring replicates Business Central online data into Microsoft Fabric OneLake.
- Mirroring supports multiple companies and up to 1,000 selected tables.
- It does an initial snapshot, then incremental synchronization, stored in Delta Parquet format.
- A configuration package with standard tables is available.
- Administrator pages cover setup, managing companies and tables, and monitoring and troubleshooting.
- Copilot Studio integration covers the Business Central MCP Server and agents using the connector or MCP server.

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

- [Migrate bc2adls from PTE to appsource extension](../../../posts/bertverbeek-nl/1209.md) (community post): "bc2adls extension for exporting Business Central data to Azure Data Lake Storage"
- [Native connection with Fabric in Business Central](../../../posts/bertverbeek-nl/1318.md) (community post): "Business Central introduces native integration with Microsoft Fabric for data synchronization"
- [Business Central to Microsoft Fabric is a mirror. But what if you want to know what actually changed?](../../../posts/bertverbeek-nl/1342.md) (community post): "Business Central data mirrored to Microsoft Fabric appears as static copies by default"
- [Credentials setup on Microsoft Fabric Mirroring in Business Central](../../../posts/bertverbeek-nl/1353.md) (community post): "Setting up credentials for Microsoft Fabric Mirroring in Business Central"
- [Dynamics 365 Business Central: data mirroring to Microsoft Fabric announced.](../../../posts/demiliani-com/15981.md) (community post): "data mirroring for Dynamics 365 Business Central to Microsoft Fabric"
- [Business Central Data Mirroring to Microsoft Fabric Is Coming](../../../posts/thinkaboutit-be/8229.md) (community post): "Business Central 2026 release wave 2 introduces data mirroring to Microsoft Fabric"
- [Business Central data in Fabric: the way it should be](../../../posts/waldo-be/318707.md) (community post): "Business Central now supports native data mirroring to Microsoft Fabric"
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
