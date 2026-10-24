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
  at: "2026-10-24T00:57:10.969Z"
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
  objects:
    - object/page/4003
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
  code: 1
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

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Overview · tier official · system administration · narrative reviewed (checked by Opus)

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
  - Videos compare work processes between Dynamics SL and Business Central for user training
  - Topics covered include receivables, payables, customer receipts, dimensions, general journals, and posting accounts
- [Dynamics SL Data Migrated to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl): Learn how to migrate to the cloud from Dynamics SL using an assisted setup guide in Business Central online.
  - Dynamics SL fiscal periods migrate as Business Central accounting periods; historical years come over as open and must be manually closed.
  - Dynamics SL subaccount segments map to Business Central dimensions; main segment defines Global Dimension 1, second segment defines Global Dimension 2, additional segments become shortcut dimensions…
  - Customer and vendor master records migrate with Receivables and Payables outstanding transactions at remaining balance amounts; inactive customers and vendors can be excluded.
  - Inventory items migrate with cost valuation method, location information, quantity on hand, and serial or lot tracking information from Dynamics SL.
  - Historical snapshot data from GL, Receivables, Payables, Sales Orders, Purchase Orders, and Inventory transactions migrates to extension tables for Power BI and Power Apps reporting.
  - Project Controller master data including Projects, Tasks, and Resources migrate if in Active, Plan, or On Hold status based on configuration settings.
- [Dynamics SL migration to Business Central online End-to-end overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-overview): Learn about the migration process and the necessary tasks for completing the migration from Dynamics SL on-premises.
  - Cloud migration securely moves data from on-premises SQL Server to Business Central online using Azure Data Factory pipelines.
  - Data migrated includes system setup, master data for accounts and items, open document amounts, account balances, and historical data.
  - Data migrates table by table, with errors captured for failed tables; migration continues to next table.
  - On-premises solution remains operative until migration completes; existing online data gets overwritten by on-premises data.
  - Existing users without SUPER permissions are automatically assigned Intelligent Cloud permission set to restrict data entry during migration.
  - Limit: Users assigned Intelligent Cloud permission set have read-only access; insert, modify, or delete permissions could negatively impact data.
  - Prerequisite: At least one user in each company must have SUPER permissions before configuring connection from on-premises to online.
- [Managing Dynamics SL cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-sl): Learn about the Cloud Migration Management page in Business Central for migrating from Dynamics SL.
  - Cloud Migration Management page provides central hub for managing migration with status tracking and error details.
  - Migration Log shows status of all runs including time and progress; tiles display migrated table counts.
  - Configure SL Migration action sets up migration settings for migrating company data from Dynamics SL.
  - Run data replication starts migration manually; subsequent runs migrate only changes since previous run using change tracking.
  - Complete migration action completes cloud migration setup from menu options.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 4009 "Migration Table Mapping"](../../../../../objects/page/4009.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../../../objects/table/4001.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
