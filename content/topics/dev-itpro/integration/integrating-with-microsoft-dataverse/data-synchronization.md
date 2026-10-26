---
id: topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-synchronization
type: topic
title: Data synchronization
summary: "Data synchronization between Business Central and Microsoft Dataverse: setting up bidirectional sync, customizing integration tables, field and option mappings, coupling records, and generating AL proxy tables. It answers how-to questions about extending or customizing the sync. It also has a Dataverse API subtopic."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.961Z"
  flags: []
generated:
  at: "2026-10-26T06:43:56.210Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8abf801553c5599e42d8d243789d348a79995034f15101da7071817b3cfe9780
evidence:
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-cds-integration
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-option-mapping
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-table-proxy-generator
    - https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service
  objects:
    - object/page/7214
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-dataverse
    - topic/dev-itpro/integration/integrating-with-microsoft-dataverse/data-synchronization/dataverse-api
  localizations: []
  videos:
    - video/-q8Gm7u7R2A
  posts:
    - post/yzhums-com/63916
    - post/yzhums-com/71914
  guidelines: []
  changes:
    - change/bcapps/12261
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
  code: 1
  video: 1
  blog: 2
  guideline: 0
bc_forms:
  - 7214
member_hash: 63ffde084218d42097e04bbf7e797aa9bac8a13a560d12bc4e6826efb193e042
narrative: generated
---

# Data synchronization

> Data synchronization between Business Central and Microsoft Dataverse: setting up bidirectional sync, customizing integration tables, field and option mappings, coupling records, and generating AL proxy tables. It answers how-to questions about extending or customizing the sync. It also has a Dataverse API subtopic.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Dataverse](../integrating-with-microsoft-dataverse.md) > Data synchronization · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers how Business Central exchanges data with Microsoft Dataverse and other Dynamics 365 applications such as Customer Engagement. The entry page explains bidirectional sync, entity mapping, the Base Integration Solution, currency synchronization, and company copying with integration.

The other pages cover customization. One page describes creating integration tables, pages, and mappings, and coupling and uncoupling records. A second page covers option mappings, which couple Business Central records with Dataverse option sets without bidirectional support. A third page describes the AL Table Proxy Generator, which creates proxy tables that represent Dataverse tables in Business Central.

Start with the "Integrate with Microsoft Dataverse via data sync" page for the basics. Then use the proxy table generator and the customization pages when you need to sync additional tables or fields. The Dataverse API subtopic (11 pages) holds further material on the API.

## Key points

- Business Central can synchronize data bidirectionally with Dataverse and other Dynamics 365 apps such as Customer Engagement.
- The basic integration uses entity mapping and the Base Integration Solution, and includes currency synchronization and company copying with integration.
- Customizing an integration means creating integration tables, pages, and table and field mappings.
- Records can be coupled and uncoupled, and the customization page also mentions deep linking.
- Option mappings couple Business Central records with Dataverse option sets, but without bidirectional support.
- Option mapping customization uses integration tables, pages, AL extensions, and temporary tables.
- The AL Table Proxy Generator creates integration or proxy tables for Dataverse tables, with field mapping, lookup relationships, and table type selection.
- A Dataverse API subtopic with 11 pages sits under this section.

## Subtopics

- [Dataverse API](data-synchronization/dataverse-api.md) (11 pages)

## More Learn pages

- [Customizing an integration with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-cds-integration): Learn how to integrate your extension with Microsoft Dataverse. This walkthrough takes you through each step.
  - Prerequisite: Microsoft Dataverse must include the Worker table from the Talent Core HR solution.
  - Prerequisite: Business Central sandbox environment with CRONUS demo data and working Dataverse integration enabled.
  - Prerequisite: Visual Studio Code with AL Language extension installed for developing extensions.
  - Step: Create an integration table in Business Central using the AL Table Proxy Generator tool to map a Dataverse table to a Business Central record type.
  - Step: Create a page using the integration table as data source to display Dataverse data in Business Central.
  - Step: Subscribe to OnGetCDSTableNo event in CRM Setup Defaults codeunit to enable coupling between Business Central and Dataverse records.
  - Step: Create integration table mappings linking Business Central tables to integration tables, then add integration field mappings for specific fields.
  - Custom uncoupling can be enabled by specifying an uncoupling codeunit in integration table mapping to run custom logic before or after removing couplings.
  - In the observatory: [Codeunit 5330 "CRM Integration Management"](../../../../objects/codeunit/5330.md), [Codeunit 5331 "CRM Coupling Management"](../../../../objects/codeunit/5331.md), [Codeunit 5332 "Lookup CRM Tables"](../../../../objects/codeunit/5332.md), [Codeunit 5334 "CRM Setup Defaults"](../../../../objects/codeunit/5334.md), [Codeunit 5336 "Integration Record Synch."](../../../../objects/codeunit/5336.md), [Codeunit 5341 "CRM Int. Table. Subscriber"](../../../../objects/codeunit/5341.md)
- [Customizing option mappings with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-custom-option-mapping): Learn how to customize option mappings in an integration with Microsoft Dataverse.
  - Prerequisite: Dataverse integration must be enabled with default synchronization setup and working connection.
  - Prerequisite: Feature switch Map to option sets in Dataverse without code must be enabled.
  - Prerequisite: CRONUS International Ltd. demonstration data and sandbox environment required.
  - Prerequisite: Visual Studio Code with AL Language extension for development.
  - Step: Create temporary integration table in Business Central based on Dataverse option set schema.
  - Step: Create list page using temporary table as data source and call Load procedure.
  - Step: Subscribe to integration events in codeunits to enable coupling, synchronization, and field mapping.
  - Step: Create integration table and field mappings to sync Dataverse options with Business Central records.
  - In the observatory: [Codeunit 5330 "CRM Integration Management"](../../../../objects/codeunit/5330.md), [Codeunit 5332 "Lookup CRM Tables"](../../../../objects/codeunit/5332.md), [Codeunit 5334 "CRM Setup Defaults"](../../../../objects/codeunit/5334.md), [Codeunit 5340 "CRM Integration Table Synch."](../../../../objects/codeunit/5340.md), [Codeunit 5342 "CRM Synch. Helper"](../../../../objects/codeunit/5342.md), [Codeunit 5364 "Int. Option Synch. Invoke"](../../../../objects/codeunit/5364.md)
- [Generate AL Proxy Tables for Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-table-proxy-generator): Use the AL Table Proxy Generator to create Business Central integration tables from Microsoft Dataverse tables and their relationships.
- [Integrate with Microsoft Dataverse via data sync](https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service): Introduction to how to integrate and use Microsoft Dataverse and its components to connect to other Dynamics 365 applications.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12261 Stop repeated rescheduling of Dataverse synch jobs on bulk changes](../../../../changes/bcapps/12261.md) (code change): "Dataverse synchronization job reschedule logic now checks both"
- [Dynamics 365 Business Central Blog Series: Integrate with Microsoft Dataverse](../../../../posts/yzhums-com/63916.md) (community post): "Standard Dataverse connector uses scheduled job queue entries and does not guarantee real-time data consistency"
- [Business Central 2026 release wave 1 (BC28): Map new Dataverse fields (New and custom Dataverse tables are readily available for mapping from the lookup on Integration Table column)](../../../../posts/yzhums-com/71914.md) (community post): "New fields added to Dataverse can now be mapped through the Integration Table Mappings page"
- [What's New: Business Central Integration with Dataverse (2024 release wave 1)](../../../../videos/-q8Gm7u7R2A.md) (video): "Data synchronization; field mappings; table mappings"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 7214 "CDS Companies"](../../../../objects/page/7214.md) · captioned "Dataverse Companies" · on [Table 5393 "CDS Company"](../../../../objects/table/5393.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
