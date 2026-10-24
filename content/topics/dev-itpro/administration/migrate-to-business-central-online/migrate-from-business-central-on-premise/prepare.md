---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/prepare
type: topic
title: Prepare
summary: "Preparation steps for migrating Business Central on-premises to online: planning, data scope, cleaning data, aligning SQL table definitions, estimating data size, tuning performance, and upgrade considerations. It answers what to check and fix before starting a cloud migration."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:21.848Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f80f0992723db520206def0be2aba1face27bbe11b2e0f7f181513c94ecebb51
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-align-table-definitions
    title: Align SQL Table Definitions
    date: "2022-11-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-clean-data
    title: Clean data
    date: "2023-03-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-estimate-compressed-data-size
    title: Estimating the data size in your Business Central online tenant
    date: "2023-11-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-companies-live-tenant
    title: Migrating Business Central companies into live tenants
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-optimize-replication
    title: Optimizing cloud migration performance
    date: "2023-03-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare
    title: Prepare and plan for cloud migration from Business Central on-premises
    date: "2026-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
    title: Upgrade Considerations
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-align-table-definitions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-clean-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-estimate-compressed-data-size
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-companies-live-tenant
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-optimize-replication
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Business Central on-premises
  - Prepare
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d6008910b1e44f71d138d63e8d51143ff477fe57adc35d763f9520fb88166b13
narrative: generated
---

# Prepare

> Preparation steps for migrating Business Central on-premises to online: planning, data scope, cleaning data, aligning SQL table definitions, estimating data size, tuning performance, and upgrade considerations. It answers what to check and fix before starting a cloud migration.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Prepare · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers the work to do before running a cloud migration from Business Central on-premises. It starts with planning: assessing the current state, deciding which company and extension data to migrate, preparing environments, and writing a governance runbook that includes dry runs.

The other pages deal with specific readiness tasks. You can clean data (invalid characters in code fields, corrupt company names, outdated data), align SQL table definitions between on-premises and online, and estimate the compressed data size of the online tenant. For large databases there is guidance on performance. There are also notes on upgrade considerations and on the risks of migrating companies into a tenant that is already live.

Start with "Prepare and plan for cloud migration from Business Central on-premises" to build the plan. Then work through data cleaning, table alignment and size estimation. Read the performance and upgrade pages if your database is large or runs an older version.

## Key points

- Planning covers data assessment, company and extension data migration, environment strategy, change tracking, dry run planning and a governance runbook.
- On-premises and online SQL table objects must have matching primary keys, field names and data types. Table mapping can handle different names and fields.
- Data cleaning includes sanitizing code fields with the Invoke-NAVSanitizeField cmdlet, fixing corrupt company names, and compressing or archiving old data.
- Online data size can be estimated with SQL Server data compression (page compression) and a SQL stored procedure.
- Performance tips for large databases: deploy to Azure SQL Database, monitor CPU and memory, migrate fewer companies per batch, optimize statistics and indexes, and skip API data upgrades where possible.
- Migrating companies into a live tenant after go-live is not officially supported. The page documents risks such as the Intelligent Cloud permission set, per-database replication, number sequences, schema modification and API integration setup.
- Upgrade considerations apply to Spring 2019 and later, including extension V1 to V2 conversion, CRM integration upgrade, MenuSuite search, profile customization and special characters in company names.

## Learn pages

- [Align SQL Table Definitions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-align-table-definitions): Learn what table properties need to be the same in on-premises and online database for cloud migration to work.
  - On-premises and online table objects must have identical definitions for successful migration.
  - Prerequisite: Primary keys must match between source and destination tables.
  - Prerequisite: Field names and data types must match between source and destination tables.
  - Limit: Different table names, missing fields, and extra fields can be handled by table mapping.
  - Limit: Different table IDs and secondary keys do not affect cloud migration.
- [Clean data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-clean-data): This article discusses tasks to do on data in Business Central on-premises database before you run cloud migration.
  - Code data type fields with lowercase characters and whitespace must be cleaned before cloud migration to prevent failures in the cloud.
  - Step: Run Invoke-NAVSanitizeField PowerShell cmdlet from Business Central Administration Shell against the on-premises database to delete invalid characters.
  - Cmdlet returns object containing number of rows modified, tables impacted, and potentially ignored records list.
  - Company names with trailing spaces, leading spaces, or carriage return characters prevent those companies from being picked up for migration.
  - Step: Use SQL query to identify corrupted company names instead of the sanitize field cmdlet, then manually correct them.
  - Compress and archive out-of-date data using Data Archive extension page 9035 to improve migration performance.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Estimating the data size in your Business Central online tenant](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-estimate-compressed-data-size): This article outlines how to estimate the data size in your Business Central online tenant
  - Online data is compressed using SQL Server page compression; on-premises size does not match migrated size.
  - All online tables use CompressionType set to Page.
  - Stored procedure estimate_page_compressed_table_sizes calculates compressed size of all or selected tables.
  - Stored procedure fails if table columns contain ampersand character; query identifies such tables to exclude.
  - Step: Create and run provided stored procedure with optional filters for specific tables or exclusions.
  - Step: Execute procedure against tenant database to get compression savings estimates.
- [Migrating Business Central companies into live tenants](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-companies-live-tenant): Learn about the risks when moving companies to live online tenants.
  - Status: Migrating companies into live tenants after going live is not officially supported and carries risk of data loss.
  - By default, cloud migration replaces permission sets with Intelligent Cloud permissions except for SUPER users.
  - Limit: Per-database table data in online tenant is at risk of being replaced by on-premises data.
  - Limit: Exclude all per-database tables except Tenant Media before replication to minimize data loss risk.
  - Upgrade tags must not be replaced; contact support immediately if they are.
  - Avoid running upgrade twice and monitor for business hours conflicts with large upgrades.
  - Reconfigure Dataverse mapping and API integrations after migration.
- [Optimizing cloud migration performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-optimize-replication): This article explains things you can do to improve the performance of the cloud migration, especially when migrating large databases.
  - Deploy source database to Azure SQL Database instead of on-premises SQL Server for faster data replication and easier self-hosted integration runtime setup.
  - Step: Monitor CPU and memory utilization in Azure portal using Metrics for SQL Database; upscale if high consumption occurs.
  - Cloud migration is optimized for batches of up to 250 companies; reduce companies in batch if database has hundreds.
  - Step: Update statistics and reorganize indexes on source database tables using sp_updatestats and index rebuild procedures.
  - Step: Skip API data upgrade on company basis during migration, then run it after going live if extended upgrade time occurs.
  - Limit: Large data sets in companies should be broken into separate migration runs; each large company may need individual handling.
  - Use Cloud Migration APIs for moving many companies; find samples in BC Tech GitHub repository for automation.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 9035 "Data Administration"](../../../../../objects/page/9035.md)
- [Prepare and plan for cloud migration from Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare): This article provides recommendations to help you define your cloud migration strategy and get environments and users ready for cloud migration.
  - Assess current state by reviewing version, database size, customization inventory, largest tables, and compliance requirements.
  - On-premises data in extension tables migrates only if extension is installed online and ReplicateData property is true.
  - Compressed data size in cloud may differ from on-premises size due to SQL Server data compression feature.
  - Step: Archive obsolete history, shrink oversized log tables, and validate schema changes before migration.
  - Per-database tables migrate regardless of company selection; plan batches for multi-company migration early.
  - Prerequisite: Use sandbox environment for dry runs and validation; do not set up migration for production already in use.
  - Step: Enable change tracking on on-premises database for expected days between backups; minimum three days enforced.
  - Create full backup of on-premises database; differential or partial backups not supported as they lack Change Tracking data.
- [Upgrade Considerations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations): This article provides tips and considerations to prepare a solution when you are planning to upgrade Microsoft Dynamics 365 Business Central.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
