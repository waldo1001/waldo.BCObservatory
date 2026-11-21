---
id: topic/business-central/integrate-with-other-applications/microsoft-dataverse
type: topic
title: Microsoft Dataverse
summary: "Microsoft Dataverse integration for Business Central: connecting, user accounts, ownership models, table and field mappings, manual and scheduled synchronization, Power Automate change notifications, and troubleshooting. It answers setup, sync configuration and error questions for linking with Dynamics 365 apps such as Sales and Field Service."
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
  input_hash: 2b7e39f29dbb04a486e8b8b833c779869c9bb100720d12c46861782999930e70
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-how-to-set-up-a-dynamics-crm-connection
    title: Connect to Microsoft Dataverse
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-cds-company-concept
    title: Dataverse data ownership models for synchronization
    date: "2026-10-14"
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
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manual-synchronization-of-table-mappings
    title: Manual Synchronization of Table Mappings | Microsoft Docs
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-how-to-modify-table-mappings-for-synchronization
    title: Mapping the tables and fields to synchronize
    date: "2026-03-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-setting-up-integration-with-dynamics-sales
    title: Setting Up User Accounts for Integrating with Microsoft Dataverse | Microsoft Docs
    date: "2024-01-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-synchronizing-business-central-and-sales
    title: Synchronization and data integration
    date: "2025-06-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-scheduled-synchronization-using-the-synchronization-job-queue-entries
    title: Synchronizing Business Central and Dataverse
    date: "2023-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-troubleshoot-sales-synchronization
    title: Troubleshooting Synchronization Errors
    date: "2024-04-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-power-automate-flow-dataverse
    title: Use a Power Automate flow to timely synchronize Dataverse entity changes
    date: "2022-09-05"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-how-to-set-up-a-dynamics-crm-connection
    - https://learn.microsoft.com/dynamics365/business-central/admin-cds-company-concept
    - https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview
    - https://learn.microsoft.com/dynamics365/business-central/admin-manual-synchronization-of-table-mappings
    - https://learn.microsoft.com/dynamics365/business-central/admin-how-to-modify-table-mappings-for-synchronization
    - https://learn.microsoft.com/dynamics365/business-central/admin-setting-up-integration-with-dynamics-sales
    - https://learn.microsoft.com/dynamics365/business-central/admin-synchronizing-business-central-and-sales
    - https://learn.microsoft.com/dynamics365/business-central/admin-scheduled-synchronization-using-the-synchronization-job-queue-entries
    - https://learn.microsoft.com/dynamics365/business-central/admin-troubleshoot-sales-synchronization
    - https://learn.microsoft.com/dynamics365/business-central/admin-power-automate-flow-dataverse
  objects:
    - object/page/7214
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integrate with other applications
  - Microsoft Dataverse
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications
children: []
coverage:
  learn: 11
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 7214
member_hash: 3063883be5c6be16d541708f458465d9dc6748b1362e6cfda79f9a8344248591
narrative: generated
---

# Microsoft Dataverse

> Microsoft Dataverse integration for Business Central: connecting, user accounts, ownership models, table and field mappings, manual and scheduled synchronization, Power Automate change notifications, and troubleshooting. It answers setup, sync configuration and error questions for linking with Dynamics 365 apps such as Sales and Field Service.

Path: [Integrate with other applications](../integrate-with-other-applications.md) > Microsoft Dataverse · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how Business Central connects to Microsoft Dataverse so data can be shared with Dynamics 365 apps like Sales and Field Service and with custom apps built on Dataverse. The overview pages describe the options: data synchronization, virtual tables, data change events, webhooks and business events. They also cover the Base Integration Solution and how currency differences are handled.

Setup follows a clear order. Start with the user accounts page (administrator and integration users, licenses, security roles). Then use the connection page to set up the Dataverse connection, and the ownership models page to choose Team or Person ownership for synchronized records.

After connecting, define what to synchronize with the mapping page (integration table mappings, field mappings, transformation rules, coupling, filtering). Run synchronization manually (full, modified records, or per table mapping) or schedule it with job queue entries. A Power Automate flow can notify Business Central of Dataverse changes. The troubleshooting page covers permission, coupling, timeout and administration mode errors.

## Key points

- The connection setup covers match-based coupling, certificate-based authentication, currency synchronization, ownership model selection and data encryption (introduced in 2020 release wave 1 version 16.5).
- User setup needs an administrator user with the System Administrator role and an integration user with the Business Central Dataverse Integration role, plus the required licenses.
- Ownership model is Team or Person. It controls who owns new synchronized records and works with security roles and the business unit hierarchy.
- Integration table mappings and field mappings define what syncs, with transformation rules, record coupling, filtering and conflict resolution.
- Manual synchronization has three methods: full synchronization, synchronize all modified records, and synchronize individual table mappings.
- Scheduled synchronization uses job queue entries for customers, vendors, contacts, currencies and salespeople, with configurable frequency and an inactivity timeout.
- A Power Automate flow template notifies Business Central when Dataverse records are added, modified or deleted.
- Troubleshooting covers permission problems, coupled record issues, connection timeouts and administration mode restrictions.

## Learn pages

- [Connect to Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-set-up-a-dynamics-crm-connection): Set up a connection between Business Central and Dataverse. Businesses typically create the connection to integrate data with another Dynamics 365 app.
  - In the observatory: [Page 36954 "Customers"](../../../objects/page/36954.md)
- [Dataverse data ownership models for synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-cds-company-concept): Choose a data ownership model for Business Central and Dataverse synchronization, and learn how companies, business units, and teams control access.
- [Integrate with Microsoft Dataverse via data sync](https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service): Introduction to how to integrate and use Microsoft Dataverse and its components to connect to other Dynamics 365 applications.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../objects/page/118.md), [Page 483 "Currency Exchange Rates"](../../../objects/page/483.md), [Page 5 "Currencies"](../../../objects/page/5.md)
- [Integrating with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview): Learn how to integrate Business Central with Microsoft Dataverse
- [Manual Synchronization of Table Mappings \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-manual-synchronization-of-table-mappings): The synchronization copies data between Microsoft Dataverse tables and Business Central to keep both systems up-to-date.
- [Mapping the tables and fields to synchronize](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-modify-table-mappings-for-synchronization): Learn how to map tables and fields for synchronizing data between Business Central and Microsoft Dataverse.
  - In the observatory: [Table 5336 "Integration Field Mapping"](../../../objects/table/5336.md)
- [Setting Up User Accounts for Integrating with Microsoft Dataverse \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-setting-up-integration-with-dynamics-sales): Learn how to set up the user accounts that the apps use to exchange data, and that people use to access and synchronize data in the apps.
- [Synchronization and data integration](https://learn.microsoft.com/dynamics365/business-central/admin-synchronizing-business-central-and-sales): Synchronization copies data between Microsoft Dataverse tables and Business Central records to align data in both systems.
- [Synchronizing Business Central and Dataverse](https://learn.microsoft.com/dynamics365/business-central/admin-scheduled-synchronization-using-the-synchronization-job-queue-entries): Learn about synchronizing data between Business Central and Dataverse.
  - In the observatory: [Page 672 "Job Queue Entries"](../../../objects/page/672.md)
- [Troubleshooting Synchronization Errors](https://learn.microsoft.com/dynamics365/business-central/admin-troubleshoot-sales-synchronization): This article provides guidance for identifying, troubleshooting, and resolving synchronization errors.
- [Use a Power Automate flow to timely synchronize Dataverse entity changes](https://learn.microsoft.com/dynamics365/business-central/admin-power-automate-flow-dataverse): Learn how to create a flow in Power Automate that will alert you when an entity is changed in Dataverse environment.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 7214 "CDS Companies"](../../../objects/page/7214.md) · captioned "Dataverse Companies" · on [Table 5393 "CDS Company"](../../../objects/table/5393.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
