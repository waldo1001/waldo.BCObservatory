---
id: topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-synchronization
type: topic
title: Data synchronization
summary: "Data synchronization between Business Central and Microsoft Dataverse: setting up bidirectional sync, customizing integration tables, field and option mappings, coupling records, and generating AL proxy tables. It answers how-to questions about extending and tailoring the sync. A Dataverse API subtopic (11 pages) is also included."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:18:30.757Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f17fe23bd8b365efd6e38b8f09abb66a582cf549218a09e7ed1f5f8f39d6a9d8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-table-proxy-generator
    title: AL Table Proxy Generator
    date: "2025-06-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/dynamics-dataverse-api
    title: Business Central Dataverse API Overview
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/resources/dynamics_company
    title: Company Resource for the Business Central Dataverse API
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/api/dynamics_subscriptions_create
    title: Create a Business Central Dataverse API Subscription
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/api/dynamics_dataverseentitychange_create
    title: Create a Dataverse Entity Change in Business Central
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-cds-integration
    title: Customizing an integration with Microsoft Dataverse
    date: "2024-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-option-mapping
    title: Customizing option mappings with Microsoft Dataverse
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/resources/dynamics_dataverseentitychange
    title: Dataverse Entity Change Resource for Business Central
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/api/dynamics_subscriptions_delete
    title: Delete a Business Central Dataverse API Subscription
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/api/dynamics_company_get
    title: Get a Company with the Business Central Dataverse API
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/api/dynamics_dataverseentitychange_get
    title: Get Dataverse Entity Change Details
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service
    title: Integrate with Microsoft Dataverse via data sync
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/api/dynamics_subscriptions_get
    title: Retrieve Business Central Dataverse API Subscriptions
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/resources/dynamics_subscriptions
    title: Subscription Resource for the Business Central Dataverse API
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-dataverse/api/dynamics_subscriptions_update
    title: Update a Business Central Dataverse API Subscription
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-table-proxy-generator
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-cds-integration
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-option-mapping
    - https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-dataverse
    - topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-synchronization/dataverse-api
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Dataverse
  - Data synchronization
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-dataverse
children:
  - topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-synchronization/dataverse-api
coverage:
  learn: 15
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 7214
member_hash: 63ffde084218d42097e04bbf7e797aa9bac8a13a560d12bc4e6826efb193e042
narrative: generated
---

# Data synchronization

> Data synchronization between Business Central and Microsoft Dataverse: setting up bidirectional sync, customizing integration tables, field and option mappings, coupling records, and generating AL proxy tables. It answers how-to questions about extending and tailoring the sync. A Dataverse API subtopic (11 pages) is also included.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Dataverse](../integrating-with-microsoft-dataverse.md) > Data synchronization · tier official · system integration · narrative reviewed by Opus

## Overview

This section covers how Business Central synchronizes data with Microsoft Dataverse, so it can share data with other Dynamics 365 applications such as Customer Engagement. The entry page describes the bidirectional data sync, entity mapping, the Base Integration Solution, currency synchronization, and copying companies with integration enabled.

The remaining pages are about customization. One covers creating integration tables, pages, table and field mappings, coupling and uncoupling records, and deep linking. Another covers option mappings, where Business Central records are coupled to Dataverse option sets, using AL extensions and temporary tables. The AL Table Proxy Generator page describes a tool that creates proxy tables in Business Central to represent Dataverse tables.

Start with the data sync integration page to understand the basic setup. Then move to the customization pages if you need to sync additional tables or options. The Dataverse API subtopic has 11 pages for working with Dataverse through its API.

## Key points

- Data sync supports bidirectional synchronization between Business Central and Dataverse, including with Customer Engagement apps.
- The entry page covers entity mapping, the Base Integration Solution, currency synchronization, and company copying with integration.
- Customizing an integration involves creating integration tables and pages, table and field mappings, and coupling or uncoupling records.
- Deep linking is covered as part of customizing the integration.
- Option mappings couple Business Central records with Dataverse option sets, use AL extensions and temporary tables, and do not support bidirectional sync.
- The AL Table Proxy Generator creates proxy (integration) tables in Business Central that represent Dataverse tables.
- A Dataverse API subtopic with 11 pages sits under this section.

## Subtopics

- [Dataverse API](data-synchronization/dataverse-api.md) (11 pages)

## More Learn pages

- [AL Table Proxy Generator](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-table-proxy-generator): Tool for creating integration or proxy tables for integration with Microsoft Dataverse from Business Central
- [Customizing an integration with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-cds-integration): Learn how to integrate your extension with Microsoft Dataverse. This walkthrough takes you through each step.
- [Customizing option mappings with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-option-mapping): Learn how to customize option mappings in an integration with Microsoft Dataverse.
- [Integrate with Microsoft Dataverse via data sync](https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service): Introduction to how to integrate and use Microsoft Dataverse and its components to connect to other Dynamics 365 applications.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 7214.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
