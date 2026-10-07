---
id: topic/business-central/integrate-with-other-applications/microsoft-dataverse
type: topic
title: Microsoft Dataverse
summary: "Microsoft Dataverse integration for Business Central: connecting to Dataverse, setting up user accounts, ownership models, table and field mappings, manual and scheduled synchronization, Power Automate flows, and troubleshooting sync errors. It answers setup, configuration and error questions for syncing with other Dynamics 365 apps."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:54.909Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a65770b9126135b35ae119a722fc81fceabaa48a50e4fa5b97d686b81385a5e4
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
    date: "2021-04-01"
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
  objects: []
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
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 7214
member_hash: 3063883be5c6be16d541708f458465d9dc6748b1362e6cfda79f9a8344248591
narrative: generated
---

# Microsoft Dataverse

> Microsoft Dataverse integration for Business Central: connecting to Dataverse, setting up user accounts, ownership models, table and field mappings, manual and scheduled synchronization, Power Automate flows, and troubleshooting sync errors. It answers setup, configuration and error questions for syncing with other Dynamics 365 apps.

Path: [Integrate with other applications](../integrate-with-other-applications.md) > Microsoft Dataverse · tier official · system integration · narrative reviewed by Opus

## Overview

This section describes how Business Central integrates with Microsoft Dataverse so it can exchange data with Dynamics 365 applications such as Customer Engagement and with custom apps built on Dataverse. The overview pages list the integration options: data synchronization, virtual tables, data change events, webhooks and business events.

For setup, start with the connection page and the user account page. The user account page covers the administrator and integration users, their licenses and security roles. The ownership model page explains Team Ownership and Person Ownership, including business unit mapping and data visibility.

Once connected, the mapping pages explain integration table mappings, field mappings, transformation rules, coupling and conflict resolution. Synchronization can be run manually (full, modified records, or per table mapping) or scheduled with job queue entries. A Power Automate flow can push Dataverse changes to Business Central in a timely way. The troubleshooting page covers permission, coupling, timeout and administration mode errors.

## Key points

- Integration options include data synchronization, virtual tables, data change events, webhooks and business events.
- The connection page covers authentication (including certificate-based), record coupling, the ownership model and multi-currency support.
- User setup needs an administrator with the System Administrator role and an integration user with the Business Central Dataverse Integration role, plus required licenses.
- Two ownership models exist: Team Ownership and Person Ownership, which involve business unit mapping and owner team assignment.
- Manual synchronization offers three methods: full synchronization, all modified records, and individual table mappings, each controlling whether new records are created and coupled.
- Scheduled synchronization uses job queue entries for customers, vendors, contacts, currencies and salespeople, with configurable frequency and inactivity timeout.
- Table mappings use integration tables, field mappings, transformation rules, filtering and conflict resolution.
- A Power Automate flow template notifies Business Central when Dataverse records are added, modified or deleted.

## Learn pages

- [Connect to Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-set-up-a-dynamics-crm-connection): Set up a connection between Business Central and Dataverse. Businesses typically create the connection to integrate data with another Dynamics 365 app.
- [Data ownership models for synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-cds-company-concept): Companies are both a legal and business constructs, and they are used to secure and visualize business data.
- [Integrate with Microsoft Dataverse via data sync](https://learn.microsoft.com/dynamics365/business-central/admin-common-data-service): Introduction to how to integrate and use Microsoft Dataverse and its components to connect to other Dynamics 365 applications.
- [Integrating with Microsoft Dataverse](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/dataverse-integration-overview): Learn how to integrate Business Central with Microsoft Dataverse
- [Manual Synchronization of Table Mappings \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-manual-synchronization-of-table-mappings): The synchronization copies data between Microsoft Dataverse tables and Business Central to keep both systems up-to-date.
- [Mapping the tables and fields to synchronize](https://learn.microsoft.com/dynamics365/business-central/admin-how-to-modify-table-mappings-for-synchronization): Learn how to map tables and fields for synchronizing data between Business Central and Microsoft Dataverse.
- [Setting Up User Accounts for Integrating with Microsoft Dataverse \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-setting-up-integration-with-dynamics-sales): Learn how to set up the user accounts that the apps use to exchange data, and that people use to access and synchronize data in the apps.
- [Synchronization and data integration](https://learn.microsoft.com/dynamics365/business-central/admin-synchronizing-business-central-and-sales): Synchronization copies data between Microsoft Dataverse tables and Business Central records to align data in both systems.
- [Synchronizing Business Central and Dataverse](https://learn.microsoft.com/dynamics365/business-central/admin-scheduled-synchronization-using-the-synchronization-job-queue-entries): Learn about synchronizing data between Business Central and Dataverse.
- [Troubleshooting Synchronization Errors](https://learn.microsoft.com/dynamics365/business-central/admin-troubleshoot-sales-synchronization): This article provides guidance for identifying, troubleshooting, and resolving synchronization errors.
- [Use a Power Automate flow to timely synchronize Dataverse entity changes](https://learn.microsoft.com/dynamics365/business-central/admin-power-automate-flow-dataverse): Learn how to create a flow in Power Automate that will alert you when an entity is changed in Dataverse environment.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 7214.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
