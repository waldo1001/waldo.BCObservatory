---
id: topic/business-central/development-and-administration/migrate-to-business-central-online
type: topic
title: Migrate to Business Central online
summary: "Migration of on-premises data to Business Central online: the cloud migration process, supported source paths (Business Central, Dynamics GP, SL, NAV, custom SQL), GP data mapping, the Cloud Migration Management page, and an FAQ. It answers questions on how to plan, run, monitor and complete a migration."
tier: official
language: en
system: administration
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
  input_hash: 3242f53f292fe5bd2097b25494328d6c2ff8f34657aacde95d1ad49d68735c47
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    title: Business Central On-Premises to Online Migration Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data
    title: Business Central Online Data Migration Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    title: Dynamics GP Data Migration to Business Central Online
    date: "2026-11-17"
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
    title: Manage Business Central Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage
  objects:
    - object/page/4003
  features: []
  topics:
    - topic/business-central/development-and-administration
  localizations: []
  videos:
    - video/zE6uElxwSMQ
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
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 2502
  - 4003
member_hash: b98a82b3dddbd08536a0869f31b13b4a5a62e9f9c672dbbce34c2d62dfd508fc
narrative: generated
---

# Migrate to Business Central online

> Migration of on-premises data to Business Central online: the cloud migration process, supported source paths (Business Central, Dynamics GP, SL, NAV, custom SQL), GP data mapping, the Cloud Migration Management page, and an FAQ. It answers questions on how to plan, run, monitor and complete a migration.

Path: [Development and administration](../development-and-administration.md) > Migrate to Business Central online · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to move on-premises data to Business Central online. It starts with two overview pages. One covers the on-premises to online process: the components involved (Azure Data Factory, Integration Runtime, pipelines) and a five-phase roadmap of preparation, setup, data replication, upgrade and completion. The other compares the supported migration paths and tools, including configuration packages, the cloud migration tool, company configuration templates and custom migration from SQL.

Two pages cover specifics. The Dynamics GP page describes what is migrated and how it is configured on the GP Company Migration Configuration page. The Manage Cloud Migration page describes the Cloud Migration Management page, which is the working area for running and tracking a migration. The FAQ covers requirements, limits and common setup questions.

Start with the on-premises to online overview to understand the phases. Then read the source-specific page that matches your system. Use the management page and the FAQ while you run the migration.

## Key points

- The migration roadmap has five phases: preparation, setup, data replication, upgrade and completion.
- The process uses Azure Data Factory, Integration Runtime and pipelines. The FAQ covers the self-hosted integration runtime and the SQL connection string.
- Supported sources include Business Central, Dynamics GP, Dynamics SL, Dynamics NAV and custom SQL sources.
- Other approaches named are configuration packages, company configuration templates, master data migration and a Business Central 14 reimplementation.
- The Cloud Migration Management page offers actions to run data replication, run data upgrade, refresh status, complete, pause or abandon the migration. It also covers table and user mappings.
- The Intelligent Cloud permission set is relevant to migration permissions.
- GP migration covers fiscal periods (converted to accounting periods), chart of accounts segment mapping, dimensions, customers and vendors with outstanding transactions, inventory items, checkbook data and historical snapshots.
- The overview also covers record links and notes migration, and the FAQ covers extension data migration, data limits and data compression.

## Learn pages

- [Business Central On-Premises to Online Migration Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises): This article provides an overview of how the migration works from Business Central on-premises and the necessary tasks for completing the migration.
  - Azure Data Factory securely replicates data between on-premises and online, examining only SQL permissions, not application permissions.
  - System tables, users, and permissions are not migrated; record links and notes require a separate step using Migrate Record Links action.
  - Data is compressed using SQL Server compression in online, so migrated data size may differ from on-premises database size.
  - Data migration can run multiple times; initial migration takes longest, subsequent runs migrate only changed data.
  - On-premises solution remains operative environment until cloud migration is completed; existing online data gets overwritten during replication.
  - Intelligent Cloud permission set provides read-only access during migration; only SUPER users can modify system.
  - Step: Phase 1 involves planning, verifying prerequisites, reviewing data quality, and optimizing migration performance.
  - Step: Phase 2 establishes connection and pipeline through Cloud Migration Setup assisted guide without replicating data.
- [Business Central Online Data Migration Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data): Learn to set up cloud data migration to Business Central online from supported Dynamics versions and Business Central on-premises, managed by Azure Data Factory.
  - Supported migration paths include Business Central on-premises, Dynamics GP, Dynamics SL, and Dynamics NAV to online.
  - Non-SQL source data can be migrated using configuration packages and templates to on-premises first.
  - QuickBooks customers can use Microsoft apps to migrate to Business Central online.
  - Business Central 14 reimplementation tool migrates selected business data for fresh start without legacy customizations.
- [Dynamics GP Data Migration to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp): Learn which Dynamics GP master records, outstanding transactions, and historical data you can migrate to Business Central online and how to select them.
  - Fiscal periods in Dynamics GP migrate to Business Central as accounting periods; historical years come over as open.
  - Chart of accounts main segment becomes GL account; remaining segments become dimensions or shortcut dimensions.
  - GP unit accounts migrate to Business Central statistical accounts automatically with balances.
  - Active customers can be migrated exclusively; all customer addresses become shipping addresses in Business Central.
  - Outstanding receivables transactions migrate with remaining balance amounts, not full invoice amounts.
  - Inactive customers default excluded; temporary vendors default included in migration configuration.
  - Recurring sales and purchase lines can be automatically generated based on customer or vendor accounts.
  - Vendor 1099 information migrates in US environments with tax type, box number, and Federal ID mapped correctly.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../objects/page/118.md), [Page 40063 "Cloud Migration Management"](../../../objects/page/40063.md), [Table 40900 "Hist. G/L Account"](../../../objects/table/40900.md), [Table 40901 "Hist. Gen. Journal Line"](../../../objects/table/40901.md), [Table 40902 "Hist. Sales Trx. Header"](../../../objects/table/40902.md), [Table 40903 "Hist. Sales Trx. Line"](../../../objects/table/40903.md)
- [FAQ about Migrating to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/faq-migrate-data): Get answers to frequently asked questions about migrating to Business Central online from on-premises solutions, including supported versions and data limits.
  - Prerequisite: On-premises solution must use SQL Server 2016 or later with database compatibility level 130 or higher.
  - Data migrates using Azure Data Factory service with self-hosted integration runtime managing communication between cloud and on-premises SQL Server.
  - Limit: No restrictions on data type; database storage limit applies; less than 30 GB per migration run recommended to avoid 80 GB threshold disabling admin tasks.
  - SQL connection string is encrypted and passed to Azure Data Factory for use during data replication process.
  - Only tables available in both on-premises and online migrate; customizations must be converted to extensions and installed in both systems.
  - On-premises users are added to Intelligent Cloud user group; online environment is read-only during migration.
  - Data replication is one way only from on-premises to Business Central online; must stop using on-premises after going live.
  - Limit: On-premises users and permissions do not replicate; users must be manually added and permissions granted in cloud tenant.
- [Manage Business Central Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage): Learn which actions are available on the Cloud Migration Management page in Business Central to replicate data, track progress, and complete migration.
  - Cloud Migration Management page centralizes managing cloud data migration from on-premises to Business Central online.
  - Permissions: SUPER permission set required for most actions; replication actions require completed cloud migration setup.
  - Migration Log displays status of all runs including time and progress; fields show migrated tables and those with warnings or errors.
  - Change tracking identifies data moved in subsequent runs; full replication occurs if retention period expired.
  - Complete migration blocked if failed tables, unfinished data repair, or required data upgrade not completed.
  - Define user mappings renames online User Name to match on-premises user name; not all tables included in rename process.
  - Migrate record links and notes moves replicated links and notes from buffer to record-link table after final replication.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../objects/page/40063.md), [Page 9807 "User Card"](../../../objects/page/9807.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Carglass Sweden](../../../videos/zE6uElxwSMQ.md) (video): "cloud migration; booking management; customer satisfaction; data access"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../objects/table/4001.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
