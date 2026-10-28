---
id: topic/business-central/integrate-with-other-applications/microsoft-dataverse
type: topic
title: Microsoft Dataverse
summary: Microsoft Dataverse integration for Business Central covers connecting to Dataverse, setting up user accounts, mapping and synchronizing tables and fields, ownership models, and troubleshooting sync errors. It answers setup, sync configuration, and error-resolution questions.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:06.001Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: db4873981796292fcedd065b3bebe081954ad9b29f9b0b5c05135f5cc1127e57
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-how-to-set-up-a-dynamics-crm-connection
    title: Connect to Microsoft Dataverse
    date: "2025-06-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-cds-company-concept
    title: Data ownership models for synchronization
    date: "2026-10-22"
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

> Microsoft Dataverse integration for Business Central covers connecting to Dataverse, setting up user accounts, mapping and synchronizing tables and fields, ownership models, and troubleshooting sync errors. It answers setup, sync configuration, and error-resolution questions.

Path: [Integrate with other applications](../integrate-with-other-applications.md) > Microsoft Dataverse · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section explains how to integrate Business Central with Microsoft Dataverse so data can flow to and from other Dynamics 365 applications such as Customer Engagement and custom apps built on Dataverse. Overview pages describe the options: data synchronization, virtual tables, data change events, webhooks, and business events.

A typical path starts with the integration overview pages, then user account setup (administrator and integration users with the needed licenses and security roles), then the connection page covering authentication, ownership, and coupling. Next come table and field mapping, manual and scheduled synchronization through job queue entries, and the Power Automate flow for timely change notifications.

The data ownership page helps choose between team and person ownership and the business unit that owns synchronized records. The troubleshooting page covers permission problems, coupled record issues, timeouts, and administration mode when synchronization fails.

## Key points

- Integration options include bidirectional data sync, virtual tables, data change events, webhooks, and business events.
- User setup needs an administrator and an integration user, with the System Administrator role and the Business Central Dataverse Integration role plus licenses.
- The connection page covers certificate-based authentication, match-based coupling, the ownership model, and multi-currency support.
- Ownership can follow a team model or a person model, with a default owning team, business unit selection, and security roles that affect data visibility.
- Table mappings define integration tables, field mappings, transformation rules, coupling, and filtering, with conflict resolution.
- Manual sync has three methods: full synchronization, all modified records, and individual table mappings, each controlling whether new records are created and coupled.
- Scheduled sync uses job queue entries for customers, vendors, contacts, currencies, and salespeople, with configurable frequency and inactivity timeout.
- A Power Automate flow template notifies Business Central when Dataverse records are added, modified, or deleted.

## Learn pages

- [Connect to Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-set-up-a-dynamics-crm-connection): Set up a connection between Business Central and Dataverse. Businesses typically create the connection to integrate data with another Dynamics 365 app.
  - In the observatory: [Page 36954 "Customers"](../../../objects/page/36954.md), [Page 483 "Currency Exchange Rates"](../../../objects/page/483.md), [Page 5 "Currencies"](../../../objects/page/5.md)
- [Data ownership models for synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-cds-company-concept): Companies are both a legal and business constructs, and they are used to secure and visualize business data.
- [Integrate with Microsoft Dataverse via data sync](https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service): Introduction to how to integrate and use Microsoft Dataverse and its components to connect to other Dynamics 365 applications.
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
