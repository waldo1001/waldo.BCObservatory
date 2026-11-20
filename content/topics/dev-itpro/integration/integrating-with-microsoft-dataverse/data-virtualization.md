---
id: topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-virtualization
type: topic
title: Data virtualization
summary: Data virtualization covers Business Central virtual tables in Microsoft Dataverse. It answers questions about how virtual tables are generated, how data types, keys, relations and enums map, how to build synthetic relationships, how to manage solutions across environments, and how to use the data in Power Apps.
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b5014c774f61437d291f46c60bfa64f89f698ee04cd0fc04f2ecb55f8a25763d
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
    date: "2026-11-18"
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

> Data virtualization covers Business Central virtual tables in Microsoft Dataverse. It answers questions about how virtual tables are generated, how data types, keys, relations and enums map, how to build synthetic relationships, how to manage solutions across environments, and how to use the data in Power Apps.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Dataverse](../integrating-with-microsoft-dataverse.md) > Data virtualization · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

Virtual tables expose Business Central data in Dataverse without copying it. Power Apps and other Power Platform tools can then work with that data, including full CRUD operations and custom APIs, using API v2.0.

The section has no subtopics, only five pages. The Power Platform integration page is the best starting point for the overall picture. "Working with Virtual Tables" explains the modeling concepts: data type mapping, primary keys, 1:n and n:1 relations, enum to OptionSet conversion, OData actions and error handling. The synthetic relationships page shows how to link native and virtual tables.

For deployment and operations, the application lifecycle management page describes the solution structure, dependencies, managed solutions and connection setup. The FAQ covers recurring questions such as ALM dependencies, table visibility, user requirements, solution prefixes and default values.

## Key points

- Virtual tables let Power Apps work directly with Business Central data through Dataverse, with no data copied.
- They support full CRUD operations, consume API v2.0 and can use custom APIs.
- Working with Virtual Tables covers data type mapping, primary key handling, 1:n and n:1 relations, enum to OptionSet conversion, OData actions and error handling.
- Synthetic relationships connect native and virtual tables in Dataverse using foreign keys and table mapping (2024 wave 1).
- The ALM page names the solutions MicrosoftBusinessCentralERPVE, MicrosoftBusinessCentralERPCatalog and MicrosoftBusinessCentralVESupport. It also covers the virtual table provider and connection setup, for version 17 or later.
- The FAQ covers API-managed solutions, virtual table visibility, user authentication, the table catalog, default values and plugin version verification.

## Learn pages

- [Application lifecycle management for solutions that use virtual tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-app-lifecycle-management): Lifecycle management for Microsoft Dataverse tables end-to-end solutions
- [Business Central Virtual Table for Microsoft Dataverse admin reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-admin-reference): The admin reference for working with Business Central and Microsoft Dataverse tables.
- [Business Central Virtual Tables FAQ](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-faq): Frequently asked questions for working with Business Central virtual tables.
- [Create Synthetic Virtual Table Relationships in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/create-synthetic-relationships-virtual-tables): Learn to configure and validate links between Dataverse native tables and Business Central virtual tables.
- [Microsoft Power Platform integration with Business Central via Virtual Tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-overview): Learn about integration of Power Platform with Business Central via virtual tables.
- [Working with Virtual Tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-entity-modeling): Relational modeling between Microsoft Dataverse tables used in Business Central

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
