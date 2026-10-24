---
id: topic/business-central/development-and-administration/migrate-to-business-central-online
type: topic
title: Migrate to Business Central online
summary: Migration of on-premises data (Business Central, Dynamics GP, SL, NAV) to Business Central online. It answers questions about the migration process and phases, choosing between full migration and reimplementation, running and managing cloud migration, GP-specific data mapping, and common requirements and FAQs.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:33.183Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 237e43543bc2b1cf792aac87e5ebeb4542016e1fb87a904f5f66873915ed8f97
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    title: Business Central on-premises to online migration overview
    date: "2026-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data
    title: FAQ about Migrating to Business Central Online
    date: "2026-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage
    title: Managing cloud migration
    date: "2023-07-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    title: Migrate Dynamics GP data to the cloud
    date: "2026-01-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data
    title: Migrate on-premises data to Business Central online
    date: "2026-05-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data
  objects:
    - object/page/4003
  features: []
  topics:
    - topic/business-central/development-and-administration
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development and administration
  - Migrate to Business Central online
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration
children: []
coverage:
  learn: 5
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2502
  - 4003
member_hash: b98a82b3dddbd08536a0869f31b13b4a5a62e9f9c672dbbce34c2d62dfd508fc
narrative: generated
---

# Migrate to Business Central online

> Migration of on-premises data (Business Central, Dynamics GP, SL, NAV) to Business Central online. It answers questions about the migration process and phases, choosing between full migration and reimplementation, running and managing cloud migration, GP-specific data mapping, and common requirements and FAQs.

Path: [Development and administration](../development-and-administration.md) > Migrate to Business Central online · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section explains how to move from an on-premises system to Business Central online. It starts with the choice of approach: a full data migration, a custom migration, or a reimplementation that brings over only essential data, for example with configuration packages. Source systems named are Business Central, Dynamics GP, Dynamics SL and Dynamics NAV.

The overview page describes the end-to-end process in five phases, from preparation through completion and go-live. It also covers the components involved: cloud migration setup, data replication, data upgrade, Azure Data Factory pipelines, the self-hosted integration runtime and the intelligent cloud permission set. The "Managing cloud migration" page then covers day-to-day work on the Cloud Migration Management page.

Start with the on-premises migration page to pick an approach, then read the overview for the process. Use the FAQ for requirements, data limits, SQL connection strings and permissions. If you come from Dynamics GP, the GP page covers how data such as fiscal periods, chart of accounts and inventory is carried over.

## Key points

- Approaches: full data migration, custom migration, or reimplementation with essential data only (configuration packages).
- The migration runs in five phases, from preparation through completion and go-live.
- Key components: Azure Data Factory pipelines, self-hosted integration runtime, and the intelligent cloud permission set.
- The Cloud Migration Management page runs data replication and data upgrade, and handles cloud migration setup and user mapping.
- Troubleshooting actions include a diagnostic run and resetting cloud data.
- The FAQ covers system requirements, data limits, SQL connection strings, extension data migration and data compression.
- GP migration maps fiscal periods to accounting periods and covers chart of accounts, dimensions, customers, vendors, inventory and checkbook transactions.
- Supported on-premises sources: Business Central, Dynamics GP, Dynamics SL and Dynamics NAV.

## Learn pages

- [Business Central on-premises to online migration overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises): This article provides an overview of how the migration works from Business Central on-premises and the necessary tasks for completing the migration.
  - Status: Generally available.
  - Cloud migration transfers business data from on-premises SQL Server or Azure SQL to Business Central online using Azure Data Factory.
  - Integration Runtime connects the on-premises database directly to Azure Data Factory; self-hosted runtime used for SQL Server, Azure Integration Runtime for Azure SQL.
  - Limit: System tables, users, permissions, and record links are not migrated.
  - Online data is compressed using SQL Server compression, so data size may differ from on-premises size.
  - After cloud migration setup, online tenant is read-only; non-SUPER users get Intelligent Cloud permission set automatically.
  - Step: Phase 1: Verify prerequisites, review data quality, and optimize performance.
  - Step: Phase 2: Run Set up Cloud Migration assisted setup to establish connection and pipeline.
- [FAQ about Migrating to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data): Get answers to frequently asked questions about migrating to Business Central online from on-premises solutions, including supported versions and data limits.
  - Prerequisite: On-premises solution must use SQL Server 2016 or later with database compatibility level 130 or higher.
  - Data migrates using Azure Data Factory service with self-hosted integration runtime managing communication between cloud and on-premises SQL Server.
  - Limit: No restrictions on data type; database storage limit applies; less than 30 GB per migration run recommended to avoid 80 GB threshold disabling admin tasks.
  - SQL connection string is encrypted and passed to Azure Data Factory for use during data replication process.
  - Only tables available in both on-premises and online migrate; customizations must be converted to extensions and installed in both systems.
  - On-premises users are added to Intelligent Cloud user group; online environment is read-only during migration.
  - Data replication is one way only from on-premises to Business Central online; must stop using on-premises after going live.
  - Limit: On-premises users and permissions do not replicate; users must be manually added and permissions granted in cloud tenant.
- [Managing cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage): Describes the Cloud Migration Management page in Business Central.
  - Cloud Migration Management page in the web client serves as the central hub for configuring and tracking data migration runs and services.
  - Data replication can be rerun after initial migration, moving only changes since the last run using change tracking.
  - User mapping renames the Name field on the User Card to match on-premises user names; perform this only once per migration.
  - Step: Create diagnostic run to test data replication without migrating data, allowing issues to be identified and fixed first.
  - Step: Reset cloud data clears all cloud tenant data and enables restarting the entire migration from the beginning.
  - Limit: Cloud migration cannot run if the target environment is undergoing upgrade; must disable it, upgrade, then reconfigure.
  - Setup checklist displays recommended steps to prepare tables not migrated for use as the primary system going live.
- [Migrate Dynamics GP data to the cloud](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp): Learn how to migrate to the cloud from Dynamics GP using an assisted setup guide in Business Central online. Move historical data to Azure Data Lake.
  - Fiscal periods from Dynamics GP migrate to Business Central as accounting periods, with historical years becoming open and requiring closure.
  - Chart of Accounts account numbers map from the main segment; remaining segments become dimensions, with up to eight shortcut dimensions supported.
  - Customer addresses migrate as shipping addresses; vendor addresses migrate with Remit To as primary and others as order addresses.
  - Outstanding transactions migrate with remaining balance amounts, not original invoice amounts.
  - Unit of Measure Schedules from GP don't have direct equivalents; Business Central supports alternate units of measure per item instead.
  - Unreconciled bank transactions migrate; undeposited receipts do not migrate and must be deposited in GP before migration.
  - Historical snapshot data stores in extension tables including GL, Receivables, Payables, Sales, Purchase, and Inventory transaction records.
  - 1099 vendor information and box amounts migrate if selected, with the earliest supported year being 2024.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../objects/page/118.md), [Table 40900 "Hist. G/L Account"](../../../objects/table/40900.md), [Table 40901 "Hist. Gen. Journal Line"](../../../objects/table/40901.md), [Table 40902 "Hist. Sales Trx. Header"](../../../objects/table/40902.md), [Table 40903 "Hist. Sales Trx. Line"](../../../objects/table/40903.md), [Table 40904 "Hist. Receivables Document"](../../../objects/table/40904.md)
- [Migrate on-premises data to Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data): Learn to set up cloud data migration to Business Central online from supported Dynamics versions and Business Central on-premises, managed by Azure Data Factory.
  - Status: Generally available.
  - Customers from non-SQL sources can use configuration packages to migrate to on-premises first, then to online.
  - QuickBooks customers can use Microsoft apps to migrate directly to Business Central online.
  - Migration paths exist for Business Central, Dynamics GP, Dynamics SL, and Dynamics NAV.
  - Business Central 14 reimplementation tool migrates only master data, opening balances, and setup.
  - Custom migration from any SQL source is supported.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../objects/table/4001.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
