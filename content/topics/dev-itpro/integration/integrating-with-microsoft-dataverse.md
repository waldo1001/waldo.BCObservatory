---
id: topic/dev-itpro/integration/integrating-with-microsoft-dataverse
type: topic
title: Integrating with Microsoft Dataverse
summary: Integration of Business Central with Microsoft Dataverse, covering data synchronization and data virtualization with virtual tables. It answers questions about setting up and customizing sync, coupling records, mapping fields, and exposing Business Central data to Power Platform.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.950Z"
  flags: []
generated:
  at: "2026-10-07T21:13:11.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6d0bd8e4e6545ede7107d63bfc4c93c88246230f38bcd5db32eab187b9436d1a
evidence:
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-table-proxy-generator
    title: Generate AL Proxy Tables for Dataverse
    date: "2026-10-07"
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
  objects:
    - object/page/7214
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
  changes:
    - change/bcapps/10207
    - change/bcapps/10578
    - change/bcapps/10753
    - change/bcapps/11626
    - change/bcapps/12196
    - change/bcapps/12261
    - change/bcapps/9127
    - change/bcapps/9322
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
  code: 1
  video: 5
  blog: 0
  guideline: 0
bc_forms:
  - 7214
member_hash: bea7f77d13aa5948dc64af86ef89007295f05f4e26cbf4a3cfa914d19ac2cf36
narrative: generated
---

# Integrating with Microsoft Dataverse

> Integration of Business Central with Microsoft Dataverse, covering data synchronization and data virtualization with virtual tables. It answers questions about setting up and customizing sync, coupling records, mapping fields, and exposing Business Central data to Power Platform.

Path: [Integration](../integration.md) > Integrating with Microsoft Dataverse · tier official · system integration · narrative reviewed by Opus

## Overview

Integrating Business Central with Microsoft Dataverse connects Business Central to Dynamics 365 applications and custom apps built on Dataverse. The landing page lists the main mechanisms: data synchronization, virtual tables, data change events, webhooks, and business events.

The section has two subtopics. Data synchronization (15 pages) covers bidirectional sync setup, customizing integration tables, field and option mappings, coupling records, and generating AL proxy tables. It also includes a Dataverse API subtopic. Data virtualization (6 pages) covers Business Central virtual tables in Dataverse: how they expose data to Power Platform, how to model and relate them, how to manage them as solutions (ALM), and common FAQs.

Start with the landing page to pick the approach. Then go to data synchronization if you need to copy and keep data in step, or to data virtualization if you want Dataverse and Power Platform to read Business Central data through virtual tables.

## Key points

- Integration options named on the landing page: data synchronization, virtual tables, data change events, webhooks, and business events.
- Data synchronization supports setting up bidirectional sync between Business Central and Dataverse.
- Sync can be customized through integration tables, field mappings, and option mappings.
- Records can be coupled between the two systems, and AL proxy tables can be generated.
- The data synchronization subtopic also includes a Dataverse API subtopic.
- Data virtualization uses Business Central virtual tables in Dataverse to expose data to Power Platform.
- Virtual tables can be modeled, related to other tables, and managed as solutions (ALM).
- The data virtualization pages include FAQs.

## Subtopics

- [Data synchronization](integrating-with-microsoft-dataverse/data-synchronization.md) (15 pages)
- [Data virtualization](integrating-with-microsoft-dataverse/data-virtualization.md) (6 pages)

## More Learn pages

- [Integrating with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview): Learn how to integrate Business Central with Microsoft Dataverse

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10207 [Dataverse] Use Truncate for CRM Integration Record cleanup during environment copy](../../../changes/bcapps/10207.md) (code change): "Environment copy cleanup of CRM Integration Records now uses bulk truncate"
- [#10578 [Extensibility Request] issue 30429: add events to disambiguate CRM integration table mappings](../../../changes/bcapps/10578.md) (code change): "Four integration events are added to allow extensions to select the correct CRM integration table mapping"
- [#10753 Cross-environment Master Data synchronization (same tenant)](../../../changes/bcapps/10753.md) (code change): "Cross-environment Master Data Management now allows subsidiary environments to synchronize master data"
- [#11626 [Master Data Management] Fixing synchronization of contacts, media, date, datetime, source watermarking, permission issue and minor UX issues](../../../changes/bcapps/11626.md) (code change): "Master Data Management synchronization is fixed to handle contacts"
- [#12196 [Master Data Management] Disable cross-env setup action OnPrem and fix field visibility issues](../../../changes/bcapps/12196.md) (code change): "Master Data Management cross-environment setup action is now disabled"
- [#12261 Stop repeated rescheduling of Dataverse synch jobs on bulk changes](../../../changes/bcapps/12261.md) (code change): "Stop repeated rescheduling of Dataverse synch jobs on bulk changes"
- [#9127 Add Dataverse Cloud endpoints override for sovereign clouds](../../../changes/bcapps/9127.md) (code change): "A new interface and enum enable partners to override Dataverse endpoints for sovereign cloud environments"
- [#9322 [FS Integration] SVCITEM-CUSTASSET mapping ignores "Convert to Customer Asset" flag — every Service Item synced to FS unconditionally](../../../changes/bcapps/9322.md) (code change): "Field Service Integration now respects the Dataverse Product setting Convert to Customer Asset"
- [What's New: Business Central Integration with Dataverse (2024 release wave 1)](../../../videos/-q8Gm7u7R2A.md) (video): "dataverse integration; data synchronization; virtual tables; data change events"
- [What's New: Using Power Pages with Business Central (2024 release wave 1)](../../../videos/auoHUd24Gfw.md) (video): "power pages; virtual tables; multi-company support; dataverse"
- [What's New: Dataverse & Dynamics 365 App Integration (2023 release wave 2) Part 1](../../../videos/fIOnGEARkKs.md) (video): "Multi-company and multi-environment synchronization; virtual tables visibility"
- [What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)](../../../videos/ItuCEHpaI1E.md) (video): "Auto-Applying Templates in Integration with Dataverse; configuration templates; data synchronization"
- [What's New: Dataverse & Dynamics 365 App Integration (2023 release wave 2) Part 2](../../../videos/YTA8c2XyTX4.md) (video): "Dataverse integration; virtual tables; power pages; data synchronization; business events"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 7214 "CDS Companies"](../../../objects/page/7214.md) · captioned "Dataverse Companies" · on [Table 5393 "CDS Company"](../../../objects/table/5393.md) · via [Data synchronization](integrating-with-microsoft-dataverse/data-synchronization.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
