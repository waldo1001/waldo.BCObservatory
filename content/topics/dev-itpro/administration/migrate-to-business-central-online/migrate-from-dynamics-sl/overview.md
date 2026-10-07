---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/overview
type: topic
title: Overview
summary: Migration overview for moving from Dynamics SL on-premises to Business Central online. It answers questions about the end-to-end process, which SL data is migrated and how it is mapped, how to manage and track a cloud migration, and how SL work processes compare to Business Central.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:24.979Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f4a9882ed27511c3d0f5f52476c4633e38dfa37e1e814f4b54693c6f85690178
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl-videos
    title: Compare work processes in Dynamics SL to Business Central
    date: "2024-12-13"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl-videos
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-sl
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
  - Overview
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2502
  - 4003
member_hash: b09a1e5d6a69d7fdea09d70dbbce4c55042e22d3b74f38b8732ea6b566562f7a
narrative: generated
---

# Overview

> Migration overview for moving from Dynamics SL on-premises to Business Central online. It answers questions about the end-to-end process, which SL data is migrated and how it is mapped, how to manage and track a cloud migration, and how SL work processes compare to Business Central.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Overview · tier official · system administration · narrative reviewed by Opus

## Overview

This section introduces the migration from Dynamics SL to Business Central online. The end-to-end overview explains the phases: assessment, setup, data replication and data upgrade, plus environment management. It also mentions Azure Data Factory, the Integration Runtime and the Intelligent Cloud permission set.

The data page describes what is migrated and how it is mapped when you use the SL Company Migration Configuration. It covers fiscal periods, chart of accounts, dimension setup, customers, vendors, inventory items and projects. The management page explains how to use the Cloud Migration Management page and the cloud migration API to set up, run and track a migration.

The last page is a set of video tutorials comparing everyday work in the two products. Start with the end-to-end overview, then check the data mapping, then use the management page while running the migration.

## Key points

- The end-to-end overview covers assessment, setup, replication, upgrade phases and environment management.
- Migration uses Azure Data Factory and an Integration Runtime to replicate data.
- An Intelligent Cloud permission set is part of the setup.
- Mapped data includes fiscal periods, chart of accounts, dimension setup, customers, vendors, inventory items and projects.
- Data mapping is driven by the SL Company Migration Configuration.
- The Cloud Migration Management page lets you run data replication, run data upgrade, refresh migration status and manage custom tables.
- The Migration Log tracks progress, and a cloud migration API is also available.
- Video tutorials compare SL and Business Central for receivables, payables, customer receipts, dimensions, general journals and trial balance reports.

## Learn pages

- [Compare work processes in Dynamics SL to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl-videos): Get tips and tricks for how to do things in Business Central online that you currently do in Dynamics SL.
- [Dynamics SL Data Migrated to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl): Learn how to migrate to the cloud from Dynamics SL using an assisted setup guide in Business Central online.
- [Dynamics SL migration to Business Central online End-to-end overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-overview): Learn about the migration process and the necessary tasks for completing the migration from Dynamics SL on-premises.
- [Managing Dynamics SL cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-sl): Learn about the Cloud Migration Management page in Business Central for migrating from Dynamics SL.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 2502, 4003.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
