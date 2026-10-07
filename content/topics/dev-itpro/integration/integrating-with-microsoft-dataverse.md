---
id: topic/dev-itpro/integration/integrating-with-microsoft-dataverse
type: topic
title: Integrating with Microsoft Dataverse
summary: "Integration between Business Central and Microsoft Dataverse: data synchronization (bidirectional sync, integration tables, field and option mappings, coupling, AL proxy tables, Dataverse API) and data virtualization with virtual tables in Dataverse. It answers how-to questions about setting up, extending and managing these integrations."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:17:00.683Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c75100881cda9829c5c40f20c7df8904126e1d3a85ec794dd5b4d431e51cae01
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-table-proxy-generator
    title: AL Table Proxy Generator
    date: "2025-06-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-app-lifecycle-management
    title: Application lifecycle management for solutions that use virtual tables
    date: "2023-11-13"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/create-synthetic-relationships-virtual-tables
    title: Create Synthetic Virtual Table Relationships in Business Central
    date: "2025-09-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview
    title: Integrating with Microsoft Dataverse
    date: "2024-02-02"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/powerplat-entity-modeling
    title: Working with Virtual Tables
    date: "2025-09-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration
    - topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-synchronization
    - topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-virtualization
  localizations: []
  videos:
    - video/-q8Gm7u7R2A
    - video/auoHUd24Gfw
    - video/fIOnGEARkKs
    - video/ItuCEHpaI1E
    - video/YTA8c2XyTX4
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Dataverse
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children:
  - topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-synchronization
  - topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-virtualization
coverage:
  learn: 22
  code: 0
  video: 5
  blog: 0
  guideline: 0
bc_forms:
  - 7214
member_hash: bea7f77d13aa5948dc64af86ef89007295f05f4e26cbf4a3cfa914d19ac2cf36
narrative: generated
---

# Integrating with Microsoft Dataverse

> Integration between Business Central and Microsoft Dataverse: data synchronization (bidirectional sync, integration tables, field and option mappings, coupling, AL proxy tables, Dataverse API) and data virtualization with virtual tables in Dataverse. It answers how-to questions about setting up, extending and managing these integrations.

Path: [Integration](../integration.md) > Integrating with Microsoft Dataverse · tier official · system integration · narrative reviewed by Opus

## Overview

Integrating Business Central with Microsoft Dataverse connects Business Central to Dynamics 365 applications and custom apps built on Dataverse. The introductory page lists the available mechanisms: data synchronization, virtual tables, data change events, webhooks and business events.

The section has two subtopics. Data synchronization covers setting up bidirectional sync, customizing integration tables, field and option mappings, coupling records and generating AL proxy tables. It also includes a Dataverse API subtopic. Data virtualization covers Business Central virtual tables in Dataverse: how they expose Business Central data to Power Platform, how to model and relate them, how to manage them as solutions (ALM), and common FAQs.

Start with the overview page to choose between synchronizing data and virtualizing it. Then go to the matching subtopic for setup and customization.

## Key points

- Integration options named in the overview: data synchronization, virtual tables, data change events, webhooks and business events.
- Data synchronization supports bidirectional sync between Business Central and Dataverse.
- Sync can be tailored through integration table customization, field and option mappings, and coupling of records.
- AL proxy tables can be generated for Dataverse tables.
- The data synchronization subtopic has 15 pages and includes an 11-page Dataverse API subtopic.
- Data virtualization exposes Business Central data to Power Platform through virtual tables in Dataverse.
- Virtual tables can be modeled, related to other tables and managed as solutions (ALM).
- The data virtualization subtopic has 6 pages, including FAQs.

## Subtopics

- [Data synchronization](integrating-with-microsoft-dataverse/data-synchronization.md) (15 pages)
- [Data virtualization](integrating-with-microsoft-dataverse/data-virtualization.md) (6 pages)

## More Learn pages

- [Integrating with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview): Learn how to integrate Business Central with Microsoft Dataverse

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Business Central Integration with Dataverse (2024 release wave 1)](../../../videos/-q8Gm7u7R2A.md) (video): "dataverse integration; data synchronization; virtual tables; data change events"
- [What's New: Using Power Pages with Business Central (2024 release wave 1)](../../../videos/auoHUd24Gfw.md) (video): "power pages; virtual tables; multi-company support; dataverse"
- [What's New: Dataverse & Dynamics 365 App Integration (2023 release wave 2) Part 1](../../../videos/fIOnGEARkKs.md) (video): "Multi-company and multi-environment synchronization; virtual tables visibility"
- [What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)](../../../videos/ItuCEHpaI1E.md) (video): "Auto-Applying Templates in Integration with Dataverse; configuration templates; data synchronization"
- [What's New: Dataverse & Dynamics 365 App Integration (2023 release wave 2) Part 2](../../../videos/YTA8c2XyTX4.md) (video): "Dataverse integration; virtual tables; power pages; data synchronization; business events"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 7214.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
