---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/prepare
type: topic
title: Prepare
summary: Preparation for migrating Dynamics GP on-premises data to Business Central online. It covers prerequisites (tenant, permissions, apps, source and SQL Server requirements, integration runtime) and planning (readiness assessment, choosing companies and data, minimizing downtime).
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
  input_hash: 8405bb2af01d29e77206c7fde92d99f7ea2f20ad1bb1da5ab717e1f738b9b316
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-gp
    title: Dynamics GP Migration Prerequisites for Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-gp
    title: Plan Dynamics GP Cloud Migration to Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-gp
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-gp
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Dynamics GP
  - Prepare
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a5c68536afa3a568ccb743ff87ea4d2d0c6a92ea7cba1c95ed9e082ea9fe6f8f
narrative: generated
---

# Prepare

> Preparation for migrating Dynamics GP on-premises data to Business Central online. It covers prerequisites (tenant, permissions, apps, source and SQL Server requirements, integration runtime) and planning (readiness assessment, choosing companies and data, minimizing downtime).

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Prepare · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section is the starting point for anyone moving Dynamics GP data to Business Central online. It has two pages: one on prerequisites and one on planning the migration.

The prerequisites page lists what must be in place before you begin. It covers the destination tenant, the permission sets needed, the migration apps, the source environment specifications, SQL Server database requirements, and integration runtime setup. The planning page covers the decisions: assessing readiness, deciding which companies and data to migrate, and building a strategy that keeps downtime low.

Read the planning page first to decide scope and approach. Then use the prerequisites page as a checklist to prepare the tenant, the source environment and the runtime before you configure the migration.

## Key points

- The destination tenant needs the SUPER permission set and the Intelligent Cloud permission set for the migration.
- The Intelligent Cloud Base app and Cloud Migration Setup are part of the migration tooling.
- A self-hosted integration runtime must be set up for the migration.
- The source SQL Server databases must meet requirements, and SQL Server authentication is part of the setup.
- A migration assessment tool helps check readiness before you migrate.
- Planning means choosing which companies and data to migrate, through company migration configuration.
- The planning page covers replication, data upgrade and data validation, and an Azure Data Lake copy.
- The planning goal is a migration strategy that minimizes downtime.

## Learn pages

- [Dynamics GP Migration Prerequisites for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-gp): Check Dynamics GP source database, SQL Server, Business Central permissions, migration apps, and integration runtime requirements before cloud migration.
  - Prerequisite: Customer has Business Central online tenant.
  - Prerequisite: At least one user has SUPER permission set in target company.
  - Dynamics GP migration retains existing Business Central user permissions; users not automatically reassigned to Intelligent Cloud.
  - Prerequisite: Install Intelligent Cloud Base, Dynamics GP Intelligent Cloud, Dynamics GP Intelligent Cloud US, and Dynamics GP History SmartLists apps.
  - Status: Supported for United States, Canada, United Kingdom, and Australia markets only.
  - Prerequisite: Dynamics GP 2015 or later on-premises.
  - Prerequisite: SQL Server 2016 SP1 or later with compatibility level 130 or higher.
  - Prerequisite: Login account must have sysadmin role at server level and db_owner role at database level.
- [Plan Dynamics GP Cloud Migration to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-gp): Plan your Dynamics GP migration to Business Central online, select company data, test replication, and schedule the final backup, upgrade, and validation.
  - Migration assessment tool provides insight into readiness and detects potential migration issues.
  - Data migrated determined on per-company basis, can migrate all companies or only specific ones.
  - More companies replicated in single operation means longer migration time.
  - Most migrations can run from on-premises production database with minimal downtime for end users.
  - Large migrations benefit from running from backup of on-premises database to improve speeds and minimize downtime.
  - Prerequisite: Keep Dynamics GP source version and Business Central online version unchanged during cloud migration setup.
  - Schedule online environment updates for date after cloud migration completes.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
