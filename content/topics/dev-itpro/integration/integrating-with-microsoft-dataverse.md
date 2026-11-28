---
id: topic/dev-itpro/integration/integrating-with-microsoft-dataverse
type: topic
title: Integrating with Microsoft Dataverse
summary: "Integration of Business Central with Microsoft Dataverse: data synchronization (setup, Base Integration Solution, mappings, coupling, AL proxy tables) and data virtualization (virtual tables, type mapping, synthetic relationships, solutions, Power Apps use). It helps choose and configure an integration approach."
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-28T01:08:05.989Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4087eaad3dc7c413cbe4f68454fccf20efc68bd7deaa9afeaefc1d14e3472462
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
    date: "2026-11-17"
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
    date: "2026-11-18"
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
    - video/YTA8c2XyTX4
  posts:
    - post/wingate365-com/https-blog-wingate365-com-2025-05-business-central-power-pages-true-html--3e063897e5
    - post/yzhums-com/63730
    - post/yzhums-com/63916
    - post/yzhums-com/64775
    - post/yzhums-com/71914
    - post/yzhums-com/76918
    - post/yzhums-com/76990
  guidelines: []
  changes:
    - change/bcapps/10207
    - change/bcapps/10480
    - change/bcapps/10526
    - change/bcapps/10578
    - change/bcapps/10753
    - change/bcapps/11626
    - change/bcapps/12196
    - change/bcapps/12261
    - change/bcapps/12328
    - change/bcapps/13623
    - change/bcapps/14203
    - change/bcapps/14400
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
  video: 4
  blog: 7
  guideline: 0
bc_forms:
  - 7214
member_hash: bea7f77d13aa5948dc64af86ef89007295f05f4e26cbf4a3cfa914d19ac2cf36
narrative: generated
---

# Integrating with Microsoft Dataverse

> Integration of Business Central with Microsoft Dataverse: data synchronization (setup, Base Integration Solution, mappings, coupling, AL proxy tables) and data virtualization (virtual tables, type mapping, synthetic relationships, solutions, Power Apps use). It helps choose and configure an integration approach.

Path: [Integration](../integration.md) > Integrating with Microsoft Dataverse · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

Integrating Business Central with Microsoft Dataverse connects Business Central to Dynamics 365 applications and to custom apps built on Dataverse. The landing page names the main mechanisms: data synchronization, virtual tables, data change events, webhooks, and business events.

The section has two subtopics. Data synchronization (15 pages) covers setting up sync, the Base Integration Solution, customizing integration tables, field and option mappings, coupling records, and generating AL proxy tables. It includes a deeper Dataverse API subtopic of 11 pages. Data virtualization (6 pages) covers Business Central virtual tables in Dataverse, including how they are generated, how data types, keys, relations and enums map, and how to use the data in Power Apps.

Start with the landing page to see which mechanism fits your scenario. Go to data synchronization if you need to copy and couple records between the two systems. Go to data virtualization if you want Dataverse and Power Apps to read Business Central data through virtual tables.

## Key points

- The landing page lists data synchronization, virtual tables, data change events, webhooks and business events as integration options.
- Data synchronization has 15 pages on setup, the Base Integration Solution, and customizing integration tables.
- Sync customization includes field and option mappings, coupling records, and generating AL proxy tables.
- A Dataverse API subtopic (11 pages) sits under data synchronization for deeper detail.
- Data virtualization (6 pages) explains how virtual tables are generated in Dataverse from Business Central.
- Virtual table pages cover mapping of data types, keys, relations and enums, and building synthetic relationships.
- Virtual table pages also cover managing solutions across environments and using the data in Power Apps.

## Subtopics

- [Data synchronization](integrating-with-microsoft-dataverse/data-synchronization.md) (15 pages)
- [Data virtualization](integrating-with-microsoft-dataverse/data-virtualization.md) (6 pages)

## More Learn pages

- [Integrating with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview): Learn how to integrate Business Central with Microsoft Dataverse

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10207 [Dataverse] Use Truncate for CRM Integration Record cleanup during environment copy](../../../changes/bcapps/10207.md) (code change): "Environment copy cleanup of CRM Integration Records now uses bulk truncate"
- [#10480 [Bug Fix] #250: Honor ImportFSSolution TryFunction result in FS setup wizard](../../../changes/bcapps/10480.md) (code change): "Field Service connection setup wizard now properly checks"
- [#10526 Use BaseApp's new PO Matching module in E-Documents](../../../changes/bcapps/10526.md) (code change): "E-Documents now leverages BaseApp's new PO Matching module"
- [#10578 [Extensibility Request] issue 30429: add events to disambiguate CRM integration table mappings](../../../changes/bcapps/10578.md) (code change): "Four integration events are added to allow extensions to select"
- [#10753 Cross-environment Master Data synchronization (same tenant)](../../../changes/bcapps/10753.md) (code change): "Cross-environment Master Data Management now allows subsidiary environments to synchronize master data"
- [#11626 [Master Data Management] Fixing synchronization of contacts, media, date, datetime, source watermarking, permission issue and minor UX issues](../../../changes/bcapps/11626.md) (code change): "Master Data Management synchronization is fixed to handle contacts, media caching, date/datetime values"
- [#12196 [Master Data Management] Disable cross-env setup action OnPrem and fix field visibility issues](../../../changes/bcapps/12196.md) (code change): "Master Data Management cross-environment setup action is now disabled"
- [#12261 Stop repeated rescheduling of Dataverse synch jobs on bulk changes](../../../changes/bcapps/12261.md) (code change): "Dataverse synchronization job reschedule logic now checks both the"
- [#12328 [Master Data Management] Fix usage telemetry and make it emit max once per day](../../../changes/bcapps/12328.md) (code change): "Master Data Management usage telemetry distinguishing cross-environment and same-environment synchronizations"
- [#13623 [Dataverse] Fix duplicate sales line numbers with automatic recurring lines](../../../changes/bcapps/13623.md) (code change): "creating a Business Central sales order from Dynamics 365 Sales"
- [#14203 [Dataverse] Use commercial endpoints in Business Central online](../../../changes/bcapps/14203.md) (code change): "Business Central online now always uses commercial Dataverse endpoints regardless of the selected cloud"
- [#14400 [Master Data Management] User-friendly errors for cross-environment connection and permission failures](../../../changes/bcapps/14400.md) (code change): "HTTP errors are mapped to actionable guidance about source environment names"
- [#9127 Add Dataverse Cloud endpoints override for sovereign clouds](../../../changes/bcapps/9127.md) (code change): "New interface and enum enable partners to override Dataverse endpoints for sovereign cloud environments"
- [#9322 [FS Integration] SVCITEM-CUSTASSET mapping ignores "Convert to Customer Asset" flag — every Service Item synced to FS unconditionally](../../../changes/bcapps/9322.md) (code change): "Field Service Integration now respects the Dataverse Product setting Convert to Customer Asset"
- [Business Central + Power Pages = TRUE - ColorCloud 2025](../../../posts/wingate365-com/https-blog-wingate365-com-2025-05-business-central-power-pages-true-html--3e063897e5.md) (community post): "Virtual Tables in Dataverse, supported in Power Pages"
- [Dynamics 365 Business Central Blog Series: Preview files directly in the web client](../../../posts/yzhums-com/63730.md) (community post): "SharePoint-hosted files; sharepoint integration; document preview"
- [Dynamics 365 Business Central Blog Series: Integrate with Microsoft Dataverse](../../../posts/yzhums-com/63916.md) (community post): "Three integration approaches exist: standard connector (scheduled sync), integration tables (CDS TableType), and direct Dataverse API calls."
- [Dynamics 365 Business Central: Integrate with Microsoft Dataverse via APIs (Not using the standard Dataverse connector)](../../../posts/yzhums-com/64775.md) (community post): "Integrate Dynamics 365 Business Central with Microsoft Dataverse using direct REST APIs instead of the standard connector."
- [Business Central 2026 release wave 1 (BC28): Map new Dataverse fields (New and custom Dataverse tables are readily available for mapping from the lookup on Integration Table column)](../../../posts/yzhums-com/71914.md) (community post): "New fields added to Dataverse can now be mapped through the Integration Table Mappings page"
- [Dynamics 365 Business Central: The AL Table Proxy Generator is distributed in the Microsoft.Dynamics.BusinessCentral.Development.Tools.Altpgen NuGet package (altpgen.exe missing from AL Language extension)](../../../posts/yzhums-com/76918.md) (community post): "AL Table Proxy Generator tool generates proxy tables for integrating Microsoft Dataverse tables"
- [Dynamics 365 Business Central: An error occurred when communicating with Dataverse (User does not have required privileges to access the org when it is in Admin Only mode)](../../../posts/yzhums-com/76990.md) (community post): "An error occurred when communicating with Dataverse User does not have"
- [What's New: Business Central Integration with Dataverse (2024 release wave 1)](../../../videos/-q8Gm7u7R2A.md) (video): "Linked Environments for Dataverse Integration; Table Mappings for Existing Integration Tables"
- [What's New: Using Power Pages with Business Central (2024 release wave 1)](../../../videos/auoHUd24Gfw.md) (video): "Multi-company support through Dataverse shared execution variable"
- [What's New: Dataverse & Dynamics 365 App Integration (2023 release wave 2) Part 1](../../../videos/fIOnGEARkKs.md) (video): "multi-company synchronization; multi-environment integration; dataverse"
- [What's New: Dataverse & Dynamics 365 App Integration (2023 release wave 2) Part 2](../../../videos/YTA8c2XyTX4.md) (video): "Virtual Tables General Availability; Power Pages Support via Virtual Tables"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 7214 "CDS Companies"](../../../objects/page/7214.md) · captioned "Dataverse Companies" · on [Table 5393 "CDS Company"](../../../objects/table/5393.md) · via [Data synchronization](integrating-with-microsoft-dataverse/data-synchronization.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
