---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
type: topic
title: Migrate from Dynamics SL
summary: "Migration of Dynamics SL on-premises data to Business Central online: overview, preparation, cloud migration setup, data replication, data upgrade, and completion. It answers questions about the end-to-end process, setup steps, running and monitoring replication, and post-migration tasks such as users and permissions."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:06.493Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3d6ec81646d1bd0ea7f4e94e7a61922c10aa6a7e37d833ddabb626c9da6b29c8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-sl
    title: Cloud Migration Prerequisites for Dynamics SL
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Cloud migration setup overview
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl-videos
    title: Compare work processes in Dynamics SL to Business Central
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-finish-sl
    title: Complete cloud migration for Dynamics SL
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies
    title: Configure Dynamics SL company migration
    date: "2026-04-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication
    title: Data replication overview
    date: "2023-01-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl
    title: Dynamics SL Data Migrated to Business Central Online
    date: "2025-08-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-overview
    title: Dynamics SL migration to Business Central online End-to-end overview
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-sl
    title: Managing Dynamics SL cloud migration
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-sl
    title: Prepare and plan for cloud migration from Dynamics SL
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run
    title: Run and manage data replication
    date: "2024-12-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl
    title: Run cloud migration setup for Dynamics SL migration
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade-sl
    title: Upgrade data for Dynamics SL cloud migration
    date: "2024-12-13"
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

> Migration of Dynamics SL on-premises data to Business Central online: overview, preparation, cloud migration setup, data replication, data upgrade, and completion. It answers questions about the end-to-end process, setup steps, running and monitoring replication, and post-migration tasks such as users and permissions.

Path: [Administration](../../administration.md) > [Migrate to Business Central online](../migrate-to-business-central-online.md) > Migrate from Dynamics SL · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers moving from Dynamics SL on-premises to Business Central online using cloud migration. The pages follow the order of the project: an overview of the process and data mapping, preparation and planning, cloud migration setup, data replication, data upgrade, and completion.

Start with the Overview subtopic to see which SL data is migrated, how it is mapped, and how SL work processes compare to Business Central. Then use Prepare to check prerequisites and plan data selection, approach and schedule. Set up cloud migration covers the connection and pipeline architecture and the Cloud Migration Setup guide. Replicate data explains how data moves and how to monitor it.

The section's own pages cover the last two steps. One runs the data upgrade, which transforms Dynamics SL tables into Business Central tables. The other covers completing the migration: disabling cloud migration, setting up users and permissions, and a post-migration checklist.

## Key points

- Overview explains the end-to-end process, which SL data is migrated, how it is mapped, and how to track a cloud migration.
- Prepare lists prerequisites for the destination, source system and database, and planning topics: assessment tools, data selection, migration approaches and scheduling.
- Set up cloud migration covers connection and pipeline architecture, the Cloud Migration Setup guide, and global and per-company settings.
- Replication uses large and small table flows, Azure BLOB storage, Azure Data Factory and change tracking, and is run and monitored on the Cloud Migration Management page.
- Data upgrade transforms Dynamics SL tables into Business Central tables during cloud migration.
- Completing the migration includes disabling cloud migration and setting up user accounts and permissions in Business Central online.
- The completion page also mentions Microsoft 365 integration, the self-hosted Integration Runtime and a post-migration checklist.

## Subtopics

- [Overview](migrate-from-dynamics-sl/overview.md) (4 pages)
- [Prepare](migrate-from-dynamics-sl/prepare.md) (2 pages)
- [Set up cloud migration](migrate-from-dynamics-sl/set-up-cloud-migration.md) (3 pages)
- [Replicate data](migrate-from-dynamics-sl/replicate-data.md) (2 pages)

## More Learn pages

- [Complete cloud migration for Dynamics SL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-finish-sl): Learn how to complete the data migration from Dynamics SL to Business Central online.
- [Upgrade data for Dynamics SL cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade-sl): Discover the process for running the data upgrade as part of Dynamics SL cloud migration.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../../objects/table/4001.md) · via [Overview](migrate-from-dynamics-sl/overview.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
