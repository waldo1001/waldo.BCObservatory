---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/overview
type: topic
title: Overview
summary: Overview of migrating Business Central on-premises data to Business Central online. It covers the migration process and components, the five-phase roadmap, managing a migration run from the Cloud Migration Management page, and the version 14 reimplementation tool. Use it to answer how migration works and how to run or control it.
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
  input_hash: eb9cbdb9cb4ff4601e10221bd1fe63ef1f1280bdb7d52552d056f5b728d20578
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-bc14-reimplementation
    title: Business Central 14 Reimplementation for Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    title: Business Central On-Premises to Online Migration Overview
    date: "2026-11-17"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-bc14-reimplementation
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage
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
  - Overview
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 93d8e66255026c1746525216d0b89686bd4656ae4c930c7c13a4026dfa6a349b
narrative: generated
---

# Overview

> Overview of migrating Business Central on-premises data to Business Central online. It covers the migration process and components, the five-phase roadmap, managing a migration run from the Cloud Migration Management page, and the version 14 reimplementation tool. Use it to answer how migration works and how to run or control it.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Overview · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section introduces cloud migration from Business Central on-premises to online. The main overview page explains the process, the components involved (Azure Data Factory, Integration Runtime, pipelines) and a five-phase roadmap: preparation, setup, data replication, upgrade and completion. It also mentions Cloud Migration Setup, the Intelligent Cloud permission set, and migration of record links and notes.

The management page describes the Cloud Migration Management page, the central place to run and track a migration. From it you run data replication and data upgrade, refresh status, work with table and user mappings, resolve errors, and finish, pause or abandon the migration.

A separate page covers the Business Central 14 Reimplementation tool. It is for version 14 customers who want a clean start and migrate only selected business data rather than all legacy data and customizations. Start with the on-premises to online overview, then use the management page while running the migration. Read the reimplementation page if you are on version 14 and do not want a full migration.

## Key points

- Migration uses Azure Data Factory, Integration Runtime and pipelines to move data from on-premises to online.
- The roadmap has five phases: preparation, setup, data replication, upgrade and completion.
- Cloud Migration Setup configures the migration, and an Intelligent Cloud permission set is part of the process.
- Record links and notes can be migrated.
- Cloud Migration Management page actions: run data replication, run data upgrade, refresh status, complete migration, pause migration, abandon migration.
- The same page provides table mappings and user mappings, and is used to track runs and resolve errors.
- The Business Central 14 Reimplementation tool is for version 14 customers who want a clean start with selected data.
- The reimplementation tool can migrate master data, transactional data, opening balances, setup data and historical data, and has migration module configuration.

## Learn pages

- [Business Central 14 Reimplementation for Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-bc14-reimplementation): Learn how to migrate selected Business Central 14 data to Business Central online, configure migration options, and extend the reimplementation tool.
  - Business Central 14 Reimplementation tool migrates selected business data for clean start without legacy customizations.
  - Status: Only supports Business Central version 14; for other versions use standard cloud migration.
  - Migrates master data, transactional data, opening balances, setup data, and historical data based on enabled modules.
  - Limit: Built-in migrators do not migrate open sales orders or purchase orders.
  - Limit: Legacy C/AL customizations and extension data not migrated by built-in migrators.
  - More than 40 migrators included for transferring defined sets of business data.
  - Step: Complete preparation steps, run cloud migration setup, and select Dynamics 365 Business Central Re-implementation v.14 as Product.
  - Tool is open source and extensible for partners to add modules or customize transformation logic.
- [Business Central On-Premises to Online Migration Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises): This article provides an overview of how the migration works from Business Central on-premises and the necessary tasks for completing the migration.
  - Azure Data Factory securely replicates data between on-premises and online, examining only SQL permissions, not application permissions.
  - System tables, users, and permissions are not migrated; record links and notes require a separate step using Migrate Record Links action.
  - Data is compressed using SQL Server compression in online, so migrated data size may differ from on-premises database size.
  - Data migration can run multiple times; initial migration takes longest, subsequent runs migrate only changed data.
  - On-premises solution remains operative environment until cloud migration is completed; existing online data gets overwritten during replication.
  - Intelligent Cloud permission set provides read-only access during migration; only SUPER users can modify system.
  - Step: Phase 1 involves planning, verifying prerequisites, reviewing data quality, and optimizing migration performance.
  - Step: Phase 2 establishes connection and pipeline through Cloud Migration Setup assisted guide without replicating data.
- [Manage Business Central Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage): Learn which actions are available on the Cloud Migration Management page in Business Central to replicate data, track progress, and complete migration.
  - Cloud Migration Management page in the web client serves as the central hub for configuring and tracking data migration runs and services.
  - Data replication can be rerun after initial migration, moving only changes since the last run using change tracking.
  - User mapping renames the Name field on the User Card to match on-premises user names; perform this only once per migration.
  - Step: Create diagnostic run to test data replication without migrating data, allowing issues to be identified and fixed first.
  - Step: Reset cloud data clears all cloud tenant data and enables restarting the entire migration from the beginning.
  - Limit: Cloud migration cannot run if the target environment is undergoing upgrade; must disable it, upgrade, then reconfigure.
  - Setup checklist displays recommended steps to prepare tables not migrated for use as the primary system going live.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 9807 "User Card"](../../../../../objects/page/9807.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
