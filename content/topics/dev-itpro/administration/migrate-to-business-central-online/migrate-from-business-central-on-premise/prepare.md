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
  at: "2026-10-08T00:04:31.553Z"
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
- [Clean data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-clean-data): This article discusses tasks to do on data in Business Central on-premises database before you run cloud migration.
- [Estimating the data size in your Business Central online tenant](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-estimate-compressed-data-size): This article outlines how to estimate the data size in your Business Central online tenant
- [Migrating Business Central companies into live tenants](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-companies-live-tenant): Learn about the risks when moving companies to live online tenants.
- [Optimizing cloud migration performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-optimize-replication): This article explains things you can do to improve the performance of the cloud migration, especially when migrating large databases.
- [Prepare and plan for cloud migration from Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare): This article provides recommendations to help you define your cloud migration strategy and get environments and users ready for cloud migration.
- [Upgrade Considerations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/Upgrade-Considerations): This article provides tips and considerations to prepare a solution when you are planning to upgrade Microsoft Dynamics 365 Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
