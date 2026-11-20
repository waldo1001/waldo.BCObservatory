---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/overview
type: topic
title: Overview
summary: Overview of migrating from Dynamics SL on-premises to Business Central online. It covers the migration process and phases, which data is supported, how to manage migration runs and errors in Business Central, and how everyday work compares between the two products.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 38224669353a15f2f55aa7df83f2c6ebcc3cd39e01febd2fa3d81fa4dfce271e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl-videos
    title: Compare Work in Dynamics SL and Business Central
    date: "2024-12-13"
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

> Overview of migrating from Dynamics SL on-premises to Business Central online. It covers the migration process and phases, which data is supported, how to manage migration runs and errors in Business Central, and how everyday work compares between the two products.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Overview · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section is the entry point for moving from Dynamics SL to Business Central online. It explains the basics of cloud migration: the components involved, the end-to-end phases (setup, assessment, preparation, data replication, data upgrade, completion) and how to work with environments during migration.

The supported data page lists what moves over: general ledger, customers, vendors, inventory, projects, purchase and sales orders, and cash accounts. It also describes configuration options per company. Read it before you plan the migration to check that your data is covered.

Once a migration is running, the Cloud Migration Management page is the place to track it. The last page is a set of video comparisons for Dynamics SL users, covering receivables, payables, cash receipts, dimensions, journals and reporting. Start with the migration overview, then read the supported data page, then use the management page during the run.

## Key points

- The migration overview describes the phases: cloud migration setup, assessment, preparation, data replication, data upgrade and completion.
- Supported data includes general ledger, customers, vendors, inventory items, projects, purchase and sales orders, and cash accounts.
- Fiscal periods are migrated. Subaccount segments are migrated to dimensions.
- Customer and vendor master records and outstanding transactions are migrated, with configuration options per company.
- The Cloud Migration Management page shows the migration log and replication results. Results include tables successful, remaining and failed.
- Errors can be investigated through SL Cloud Migration Errors, Failed Companies, and Posting Errors and Warnings.
- From the management page you can run data replication, upgrade and completion actions.
- Video comparisons show how receivables, payables, vendor payments, customer cash receipts, dimensions and journals work in Dynamics SL and in Business Central.

## Learn pages

- [Compare Work in Dynamics SL and Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl-videos): Compare everyday work in Dynamics SL and Business Central online through videos about transactions, vendor payments, dimensions, journals, and reports.
  - Videos compare work processes between Dynamics SL and Business Central for user training
  - Topics covered include receivables, payables, customer receipts, dimensions, general journals, and posting accounts
- [Dynamics SL Cloud Migration: Supported Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-sl): Learn which Dynamics SL data migrates to Business Central online, including accounting periods, customers, vendors, inventory, projects, and history.
  - Fiscal periods in Dynamics SL migrate to Business Central as accounting periods; historical years come over as open.
  - SL account numbers map to BC GL accounts; subaccount segments become dimensions or shortcut dimensions.
  - Active customers default for migration; customer addresses become shipping addresses in Business Central.
  - Default customer posting group created by SL migration is called SL; customer classes update this.
  - Outstanding receivables migrate with remaining balance; only released documents with nonzero balance migrate.
  - Vendor primary address becomes main address; other addresses become order addresses or remit-to addresses.
  - Active vendor EFT bank information migrates as preferred bank account on vendor record.
  - Inventory costing methods FIFO, LIFO, average, and standard map directly; specific identification maps to FIFO.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Table 42800 "SL Hist. APAdjust"](../../../../../objects/table/42800.md), [Table 42803 "SL Hist. ARAdjust"](../../../../../objects/table/42803.md), [Table 42806 "SL Hist. Batch"](../../../../../objects/table/42806.md), [Table 42809 "SL Hist. POReceipt"](../../../../../objects/table/42809.md)
- [Dynamics SL Migration to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-overview): Understand how Dynamics SL cloud migration works, from assessment and setup through data replication, company-level transformation, testing, and going live.
  - Data migration securely moves data from on-premises SQL Server to Business Central online via Azure Data Factory.
  - Azure Data Factory uses self-hosted integration runtime to securely copy data from on-premises to cloud, checking only SQL permissions.
  - Migrated data includes system setup, master data for accounts and customers, open document amounts, account balances, and historical data.
  - Status: On-premises solution remains operative until cloud migration completes.
  - Dynamics SL Analysis and Repair tools help evaluate readiness and detect migration issues before starting.
  - Users added during migration should not have Intelligent Cloud permission set automatically assigned.
  - Limit: Avoid entering data in online companies during migration, as rerunning migration can overwrite it.
- [Manage Dynamics SL Cloud Migration in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-sl): Learn how to monitor Dynamics SL cloud migration, investigate errors, configure companies and table mappings, and manage replication and data upgrade.
  - Cloud Migration Management page provides central hub for managing Dynamics SL cloud data migration.
  - Permissions: SUPER permission set required for most management actions.
  - Migration log shows status of migration runs with time and progress; statistics display tables successful, remaining, failed, and warnings.
  - SL Cloud Migration Errors and Failed Companies help investigate company migration failures.
  - Change tracking identifies changes for tables supporting incremental replication in subsequent runs.
  - Pause migration disables cloud migration for later resumption without stopping in-progress replication.
  - Abandon migration disables cloud migration permanently without stopping in-progress replication or removing migrated data.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 4009 "Migration Table Mapping"](../../../../../objects/page/4009.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../../../objects/table/4001.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
