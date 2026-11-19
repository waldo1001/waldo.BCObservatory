---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/prepare
type: topic
title: Prepare
summary: Preparation steps for migrating Dynamics SL on-premises data to Business Central online. It answers questions about prerequisites for the destination environment, source database and integration runtime, and about planning the migration with the assessment, analysis and repair tools.
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
  input_hash: 535524969a650e77f32d9b29b110d1c329f47dbf9056cc3d2b8111dfbcd1c8a2
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-sl
    title: Dynamics SL Migration Prerequisites for Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-sl
    title: Plan Dynamics SL Cloud Migration to Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-sl
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-sl
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Dynamics SL
  - Prepare
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 9851a05875236de5bad8d6ce60f375909a9656723e9ee7fbe633867ca64dedc1
narrative: generated
---

# Prepare

> Preparation steps for migrating Dynamics SL on-premises data to Business Central online. It answers questions about prerequisites for the destination environment, source database and integration runtime, and about planning the migration with the assessment, analysis and repair tools.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Prepare · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers what to do before running a Dynamics SL to Business Central cloud migration. It has two pages: one on prerequisites and one on planning.

The prerequisites page covers the destination environment (the SUPER permission set and installing the migration apps), the source database (SQL Server authentication and change tracking) and the integration runtime. The planning page covers the assessment tools, the data migration strategy and the migration approach steps.

Start with the planning page to decide on scope and approach, including the per-company migration model. Then work through the prerequisites page to prepare both environments before you start the migration.

## Key points

- The user running the migration needs the SUPER permission set in the destination Business Central environment.
- The destination needs the Business Central migration apps, including the Intelligent Cloud Base app and the Dynamics SL Migration app.
- The source database must use SQL Server authentication and have change tracking set up.
- The prerequisites also include configuring the integration runtime.
- Planning uses three tools: the Migration Assessment Tool, the Analysis Tool and the Repair Tool.
- The migration is done per company.
- The migration approach covers data replication and data upgrade.

## Learn pages

- [Dynamics SL Migration Prerequisites for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-sl): Check Dynamics SL source database, SQL Server, Business Central permissions, migration apps, and integration runtime requirements before cloud migration.
  - Prerequisite: Customer has Business Central online tenant.
  - Prerequisite: At least one user has SUPER permission set in target company.
  - Dynamics SL migration retains existing Business Central user permissions; users not automatically reassigned to Intelligent Cloud.
  - Prerequisite: Install Intelligent Cloud Base, Dynamics SL Migration, Dynamics SL Migration US, and Dynamics SL Historical Data apps.
  - Status: Supported for United States, Canada, United Kingdom, and Australia markets only.
  - Prerequisite: Dynamics SL 2015 or later on-premises.
  - Prerequisite: SQL Server 2016 SP1 or later with compatibility level 130 or higher.
  - Step: Download SL database preparation scripts and run procedures to enable change tracking on application database.
- [Plan Dynamics SL Cloud Migration to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-sl): Plan your Dynamics SL migration to Business Central online, select company data, test replication, and schedule the final backup, upgrade, and validation.
  - Migration Assessment Tool provides insight into readiness and detects potential issues with Dynamics SL system.
  - Analysis Tool generates report examining data that can be migrated and modules in use.
  - Repair Tool validates Dynamics SL data and identifies issues requiring repair before migration.
  - Data migrated determined on per-company basis, can migrate all companies or only specific ones.
  - Most migrations can run from on-premises production database with minimal downtime for end users.
  - Prerequisite: Keep Dynamics SL source version and Business Central online version unchanged during cloud migration setup.
  - Schedule online environment updates for date after cloud migration completes.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
