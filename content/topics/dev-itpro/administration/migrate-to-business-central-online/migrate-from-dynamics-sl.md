---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
type: topic
title: Migrate from Dynamics SL
summary: "Migrating Dynamics SL on-premises data to Business Central online: preparation, cloud migration setup, data replication, data upgrade and post-migration completion. It answers questions on prerequisites, connecting the databases, running and monitoring replication, fixing errors, and finishing in the new environment."
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
  input_hash: be25a1a3f28ec860ca9bb361dfea2a9124611fb2d0c06889612531c61fd3c412
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Business Central Cloud Migration Setup Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication
    title: Cloud Migration Data Replication Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl-videos
    title: Compare Work in Dynamics SL and Business Central
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-finish-sl
    title: Complete Dynamics SL Migration to Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl
    title: "Dynamics SL Cloud Migration: Supported Data"
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies
    title: Dynamics SL Company Migration Configuration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-sl
    title: Dynamics SL Migration Prerequisites for Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-overview
    title: Dynamics SL Migration to Business Central Online
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-sl
    title: Manage Dynamics SL Cloud Migration in Business Central
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run
    title: Run and Manage Cloud Migration Data Replication
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl
    title: Set Up Dynamics SL Cloud Migration to Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade-sl
    title: Upgrade Dynamics SL Data During Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-finish-sl
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade-sl
  objects:
    - object/page/4003
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/overview
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/prepare
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/set-up-cloud-migration
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/replicate-data
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Dynamics SL
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online
children:
  - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/overview
  - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/prepare
  - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/set-up-cloud-migration
  - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/replicate-data
coverage:
  learn: 13
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2502
  - 4003
member_hash: 76aa641df0c1015c64d0456ba18cc45f5f28aa0fc64370df21f23b206cb25b46
narrative: generated
---

# Migrate from Dynamics SL

> Migrating Dynamics SL on-premises data to Business Central online: preparation, cloud migration setup, data replication, data upgrade and post-migration completion. It answers questions on prerequisites, connecting the databases, running and monitoring replication, fixing errors, and finishing in the new environment.

Path: [Administration](../../administration.md) > [Migrate to Business Central online](../migrate-to-business-central-online.md) > Migrate from Dynamics SL · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes the full path from Dynamics SL on-premises to Business Central online. It starts with an overview of the migration process, phases, supported data and how everyday work compares between the two products. Then it moves through the stages in order: Prepare, Set up cloud migration, Replicate data, upgrade, and complete.

Preparation covers prerequisites for the destination environment, the source database and the integration runtime, plus planning with the assessment, analysis and repair tools. Setup uses the Cloud Migration Setup guide, the SQL connection and integration runtime, company selection, and the SL Company Migration Configuration page. Replication then copies the data, and you can run, monitor, pause, abandon and rerun it.

After replication finishes, the upgrade transforms Dynamics SL tables into Business Central tables. It is run from the Cloud Migration Management page. The last page covers disabling cloud migration, resolving errors, and setting up users and permissions. Start with the Overview, then follow Prepare.

## Key points

- The Overview covers migration phases, supported data, managing runs and errors, and how daily work compares between Dynamics SL and Business Central.
- Prepare covers prerequisites for the destination environment, source database and integration runtime.
- Planning uses the assessment, analysis and repair tools.
- Setup uses the Cloud Migration Setup guide, which includes the SQL connection, integration runtime and company selection.
- Migration settings are chosen on the SL Company Migration Configuration page.
- Replication uses large and small table flows, company initialization and change tracking. You can run, monitor, pause, abandon and rerun it.
- Data upgrade runs from the Cloud Migration Management page after replication is complete, and it covers background tasks, error recovery and posting errors.
- To complete the migration, disable cloud migration, resolve errors (SL Cloud Migration Errors), and set up user accounts and permission sets.

## Subtopics

- [Overview](migrate-from-dynamics-sl/overview.md) (4 pages)
- [Prepare](migrate-from-dynamics-sl/prepare.md) (2 pages)
- [Set up cloud migration](migrate-from-dynamics-sl/set-up-cloud-migration.md) (3 pages)
- [Replicate data](migrate-from-dynamics-sl/replicate-data.md) (2 pages)

## More Learn pages

- [Complete Dynamics SL Migration to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-finish-sl): Learn how to review Dynamics SL migration results, disable cloud migration, and set up Business Central online users and permissions before going live.
  - Step: Select Complete migration with SUPER permission set, then on Cloud Ready Checklist page turn on the confirmation switch.
  - Step: Select Disable Cloud Migration and confirm with Yes to end the migration.
  - Integration runtime remains installed after completing cloud migration; cloud registration auto-cleans if unused for weeks.
  - Step: Set up users by creating Microsoft 365 accounts with Business Central licenses for each user.
  - Step: Create Business Central accounts associated with Microsoft 365 email and assign proper permissions to data.
  - Dynamics SL user accounts and permissions are not migrated to Business Central online.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../objects/page/40063.md), [Page 4020 "Post Migration Checklist"](../../../../objects/page/4020.md)
- [Upgrade Dynamics SL Data During Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade-sl): Learn how to transform replicated Dynamics SL data into Business Central data, monitor company-level background upgrades, and recover from failed migrations.
  - Prerequisite: Run data replication on companies to migrate before starting data upgrade.
  - Prerequisite: Have the SUPER permission set and complete company setup and resolve replication errors.
  - Dynamics SL migration transforms data for individual companies in background tasks without environment-wide user disconnection.
  - Complete final replication before starting data upgrade, as Dynamics SL waits for manual upgrade start.
  - Step: Open Cloud Migration Management page and select Run data upgrade to schedule the data upgrade.
  - Step: Use Refresh status to update progress and select SL Cloud Migration Errors or Failed Companies to investigate failures.
  - Limit: Failed Dynamics SL company upgrade cannot be restarted by selecting Run data upgrade again; must delete company and migrate again.
  - In the observatory: [Page 1799 "Data Migration Overview"](../../../../objects/page/1799.md), [Page 40063 "Cloud Migration Management"](../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../../objects/table/4001.md) · via [Overview](migrate-from-dynamics-sl/overview.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
