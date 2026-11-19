---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/prepare
type: topic
title: Prepare
summary: Preparation steps for migrating Business Central on-premises to Business Central online. It covers planning, data cleaning, SQL table alignment, compressed size estimation, performance tuning, upgrade considerations and the risks of migrating into live tenants.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-19T01:01:35.036Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: acfed2c1f641b3e604fa95f2901afe7e353b34b307d73213cdec407eaf1a0c42
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-align-table-definitions
    title: Align SQL Table Definitions for Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
    title: Business Central Upgrade Planning and Considerations
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-clean-data
    title: Clean Business Central Data Before Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-estimate-compressed-data-size
    title: Estimate Compressed Data Size for Business Central Online
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-companies-live-tenant
    title: Migrate Business Central Companies into Live Tenants
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-optimize-replication
    title: Optimize Business Central Cloud Migration Performance
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare
    title: Plan and Prepare for Business Central Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-align-table-definitions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-clean-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-estimate-compressed-data-size
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-companies-live-tenant
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-optimize-replication
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare
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

> Preparation steps for migrating Business Central on-premises to Business Central online. It covers planning, data cleaning, SQL table alignment, compressed size estimation, performance tuning, upgrade considerations and the risks of migrating into live tenants.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Prepare · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section is the checklist to work through before running a cloud migration from Business Central on-premises. It starts with a planning page that helps you assess your current state, decide which company and extension data to migrate, estimate data size, prepare the database, and set up a governance plan with runbooks and a dry run cadence.

The other pages cover specific preparation tasks. They explain how to clean data (corrupted code fields and company names, compressing or archiving old data), how to make on-premises SQL table definitions match online ones, and how to estimate size with page compression, which all online tables use. Further pages cover upgrade considerations when coming from Dynamics NAV, performance tuning for large databases, and the risks of moving companies into a tenant that is already live.

Start with "Plan and Prepare for Business Central Cloud Migration", then use the task pages that apply to your database. Read the live tenant page before you plan any migration into a tenant that is already in use.

## Key points

- Planning covers assessing current state, choosing company and extension data to migrate, estimating size, and building a governance plan with runbooks and dry runs.
- Source and destination SQL tables must match on primary keys, field names, data types and field lengths for replication to work.
- Clean data first: the Invoke-NAVSanitizeField cmdlet fixes corrupted code fields, and corrupted company names should be identified. Compress or archive outdated data.
- All online tables use page compression, so on-premises database size can differ after migration. Use SQL Server compression estimates.
- Performance for large databases can improve by deploying to Azure SQL, upscaling the database, reducing companies per batch, reorganizing indexes, updating statistics, and managing API data upgrades.
- Migrating on-premises companies into live tenants after go-live is not officially supported and risks data loss, permission replacement (INTELLIGENT CLOUD permission set), per-database table issues, and duplicate upgrades.
- Upgrade planning from Dynamics NAV covers extension V1 to V2 conversion, upgrade codeunits, per-tenant extensions, and deprecated features such as MenuSuite and CRM integration upgrade.

## Learn pages

- [Align SQL Table Definitions for Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-align-table-definitions): Learn which SQL table definitions must match between Business Central on-premises and online databases before you run cloud migration.
  - Prerequisite: Source and destination tables must have matching primary keys and field names with identical data types.
  - Replication checks field lengths and reports incompatible lengths as column-mapping errors.
  - Table names can differ if handled by table mapping during cloud migration setup.
  - Limit: Table and field IDs do not have to match for SQL replication.
  - Limit: Secondary keys do not have to match for SQL replication.
- [Business Central Upgrade Planning and Considerations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations): Review application, customization, schema, and data considerations when upgrading a Dynamics NAV solution to Business Central on-premises.
- [Clean Business Central Data Before Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-clean-data): Prepare Business Central on-premises data for cloud migration by sanitizing code fields, checking company names, and compressing or archiving old data.
  - Step: Open Business Central Administration Shell as administrator and run Invoke-NAVSanitizeField cmdlet against on-premises database.
  - Corrupted code fields contain invalid characters like lowercase letters and whitespace that must be deleted before migration.
  - Invoke-NAVSanitizeField cmdlet returns object containing number of rows modified, tables impacted, and potentially ignored records.
  - Company names with invalid characters prevent tables from being picked up for cloud migration.
  - Step: Use SQL query to identify corrupted company names with trailing spaces, leading spaces, line feeds, or carriage returns.
  - Compress and archive outdated data using Data Administration page 9035 before migration.
  - In the observatory: [Page 9035 "Data Administration"](../../../../../objects/page/9035.md)
- [Estimate Compressed Data Size for Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-estimate-compressed-data-size): Estimate compressed data size for Business Central online before cloud migration by using SQL Server compression estimates for your source tables.
  - Data in Business Central online is compressed using SQL Server data compression feature.
  - All tables in online version compressed with CompressionType set to Page.
  - Data size in on-premises database may not match data size when migrated to online service.
  - Provided SQL stored procedure estimates compressed size of all or some tables in database.
  - Limit: Stored procedure sp_estimate_data_compression_savings fails if table has columns with ampersand in name.
- [Migrate Business Central Companies into Live Tenants](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-companies-live-tenant): Learn about data loss, permissions, and upgrade risks when migrating Business Central on-premises companies into live online tenants.
  - Limit: Migrating companies to live tenants after going live is not officially supported and may cause data loss.
  - INTELLIGENT CLOUD permission set replaces system-scope assignments; SUPER and LOCAL assignments are retained.
  - Per-database table data created online can be lost if replaced during migration; Tenant Media should be safely migrated incrementally.
  - Limit: Running upgrade twice on cloud migration must be avoided; it risks updating data twice including per-database data.
  - Modifying data in replicated companies while system is live creates risk; users, jobs, or APIs might change data during migration.
  - No schema changes or extension installations allowed during replication; this causes data integrity issues.
  - Dataverse mapping and API integrations must be reconfigured on migrated companies after migration completes.
- [Optimize Business Central Cloud Migration Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-optimize-replication): Learn how to improve Business Central cloud migration performance by managing company batches, source database resources, and API data upgrades.
  - Deploy source database to Azure SQL Database instead of on-premises SQL Server for faster data replication and easier self-hosted integration runtime setup.
  - Step: Monitor CPU and memory utilization in Azure portal using Metrics for SQL Database; upscale if high consumption occurs.
  - Cloud migration is optimized for batches of up to 250 companies; reduce companies in batch if database has hundreds.
  - Step: Update statistics and reorganize indexes on source database tables using sp_updatestats and index rebuild procedures.
  - Step: Skip API data upgrade on company basis during migration, then run it after going live if extended upgrade time occurs.
  - Limit: Large data sets in companies should be broken into separate migration runs; each large company may need individual handling.
  - Use Cloud Migration APIs for moving many companies; find samples in BC Tech GitHub repository for automation.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 9035 "Data Administration"](../../../../../objects/page/9035.md), [Page 9994 "API Data Upgrade List"](../../../../../objects/page/9994.md)
- [Plan and Prepare for Business Central Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare): This article provides recommendations to help you define your cloud migration strategy and get environments and users ready for cloud migration.
  - Step: Assess current on-premises environment including version, database size, customizations, and compliance requirements.
  - Per-database tables shared across companies and can be replicated regardless of which companies selected.
  - Prerequisite: Move all companies to tenant before going live; moving into live tenant can lead to data loss.
  - Extension data migrated only if extension installed in online environment and ReplicateData property set to true.
  - Limit: Data compression in online means on-premises database size may not match migrated data size.
  - Change tracking retention period should be at least three days for migration strategy.
  - Prerequisite: Keep environments on Business Central version used when cloud migration set up; do not update on-premises.
  - Create migration runbook documenting owners, dependencies, timelines, decision gates, and rollback options.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
