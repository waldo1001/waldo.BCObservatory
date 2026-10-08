---
id: topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-virtualization
type: topic
title: Data virtualization
summary: Data virtualization covers Business Central virtual tables in Microsoft Dataverse. It answers questions about how virtual tables expose Business Central data to Power Platform, how to model and relate them, how to manage them as solutions (ALM), and common FAQs.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:37.894Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a0e55ecfe35ecb1f62492e8b2845fc797e3107d5d34d53e9f09aa79359e987ef
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-app-lifecycle-management
    title: Application lifecycle management for solutions that use virtual tables
    date: "2023-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-admin-reference
    title: Business Central Virtual Table for Microsoft Dataverse admin reference
    date: "2025-09-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-faq
    title: Business Central Virtual Tables FAQ
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/create-synthetic-relationships-virtual-tables
    title: Create Synthetic Virtual Table Relationships in Business Central
    date: "2025-09-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-overview
    title: Microsoft Power Platform integration with Business Central via Virtual Tables
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-entity-modeling
    title: Working with Virtual Tables
    date: "2025-09-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-app-lifecycle-management
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-admin-reference
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-faq
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/create-synthetic-relationships-virtual-tables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-entity-modeling
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-dataverse
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Dataverse
  - Data virtualization
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-dataverse
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: b5202f852d1ae800b32f335efd90bf720387a9fbc53cc45d1a2152a25a6d817e
narrative: generated
---

# Data virtualization

> Data virtualization covers Business Central virtual tables in Microsoft Dataverse. It answers questions about how virtual tables expose Business Central data to Power Platform, how to model and relate them, how to manage them as solutions (ALM), and common FAQs.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Dataverse](../integrating-with-microsoft-dataverse.md) > Data virtualization · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

Business Central virtual tables let Power Platform makers work with Business Central data in Dataverse through APIs, with direct CRUD access and without copying the data into Dataverse. The section explains this integration and how to build on it.

Start with the Power Platform integration page for the overall idea. Then read "Working with Virtual Tables" for how tables are generated and how data types, primary keys, relations, enums and OData actions are handled. The page on synthetic relationships shows how to link native and virtual tables. The ALM page covers solution structure, dependencies and connection setup. The FAQ collects short answers on visibility, users, prefixes and defaults.

## Key points

- Virtual tables give Power Platform apps CRUD access to Business Central data through APIs, with no data copied to Dataverse.
- Custom APIs can be consumed, and virtual table columns and relationships can be used.
- Working with Virtual Tables covers data type mapping, primary key handling, 1:n and n:1 relations, enum to OptionSet conversion, OData actions and error handling.
- Synthetic relationships connect native and virtual tables in Dataverse using foreign keys and table mapping (2024 wave 1).
- ALM uses the MicrosoftBusinessCentralERPVE solution, the MicrosoftBusinessCentralERPCatalog and MicrosoftBusinessCentralVESupport, plus the virtual table provider and a connection setup (version 17 or later).
- The FAQ covers API-managed solutions, table visibility, user authentication requirements, the table catalog, solution prefixes, default values and plugin version checks.

## Learn pages

- [Application lifecycle management for solutions that use virtual tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-app-lifecycle-management): Lifecycle management for Microsoft Dataverse tables end-to-end solutions
- [Business Central Virtual Table for Microsoft Dataverse admin reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-admin-reference): The admin reference for working with Business Central and Microsoft Dataverse tables.
- [Business Central Virtual Tables FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-faq): Frequently asked questions for working with Business Central virtual tables.
- [Create Synthetic Virtual Table Relationships in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/create-synthetic-relationships-virtual-tables): Learn to configure and validate links between Dataverse native tables and Business Central virtual tables.
- [Microsoft Power Platform integration with Business Central via Virtual Tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-overview): Learn about integration of Power Platform with Business Central via virtual tables.
- [Working with Virtual Tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-entity-modeling): Relational modeling between Microsoft Dataverse tables used in Business Central

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
