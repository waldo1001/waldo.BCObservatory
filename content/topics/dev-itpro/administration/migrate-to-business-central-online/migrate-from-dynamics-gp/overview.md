---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/overview
type: topic
title: Overview
summary: Overview of migrating Dynamics GP on-premises data to Business Central online. It covers the end-to-end migration process, which GP data is migrated and how it maps, how to manage runs on the Cloud Migration Management page, and how GP work processes compare to Business Central.
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
  input_hash: a87e3aef819767889c506f2bab5b627c4e6b76f2f3de0a7b67262d07384eb676
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp-videos
    title: Compare Work in Dynamics GP to Business Central
    date: "2022-07-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    title: Dynamics GP Data Migration to Business Central Online
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-overview
    title: Dynamics GP Migration to Business Central Online
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-gp
    title: Manage Dynamics GP Cloud Migration in Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp-videos
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-gp
  objects:
    - object/page/4003
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
  - Overview
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp
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
member_hash: cf1d00c01d5e99160e4e4e3582e7742c5e52e2383ec569c2803cb3f72825fca5
narrative: generated
---

# Overview

> Overview of migrating Dynamics GP on-premises data to Business Central online. It covers the end-to-end migration process, which GP data is migrated and how it maps, how to manage runs on the Cloud Migration Management page, and how GP work processes compare to Business Central.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Overview · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section introduces moving Dynamics GP data into Business Central online. The main migration page describes the whole process: assessment, preparation, setup, data replication, upgrade, validation, and completion. It also mentions Azure Data Factory integration.

The data migration page explains what comes across: fiscal periods (converted to accounting periods), chart of accounts with segment mapping, dimensions and shortcut dimensions, statistical accounts, customer and vendor master records with outstanding transactions, inventory items, checkbook data, and historical snapshots. These are configured on the GP Company Migration Configuration page.

The management page covers the Cloud Migration Management page, where you monitor migration runs, track progress and replication statistics, run data replication and upgrade, and manage the runtime service key. A video compares everyday GP work with Business Central for users making the switch. Start with the migration overview, then read the data migration page before you configure anything.

## Key points

- The migration process has phases: assessment, preparation, setup, data replication, upgrade, validation, and completion.
- Azure Data Factory is part of the migration integration.
- GP fiscal periods are converted to accounting periods, and chart of accounts segments are mapped.
- Dimensions, shortcut dimensions, and statistical accounts are set up as part of the migration.
- Customer and vendor master records come with outstanding transactions; inventory items, checkbook data, and historical snapshots are also migrated.
- The GP Company Migration Configuration page controls what is migrated.
- The Cloud Migration Management page tracks migration runs and replication statistics, and runs replication and upgrade. It also manages the runtime service key.
- A video compares GP and Business Central work for receivables, payables, cash receipts, dimensions, journals, and reporting.

## Learn pages

- [Compare Work in Dynamics GP to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp-videos): Compare everyday work in Dynamics GP and Business Central online through videos about transactions, vendor payments, dimensions, journals, and reports.
  - Video series compares work processes between Dynamics GP and Business Central to help users transition.
  - Videos cover topics including receivables and payables transactions, vendor payments, cash receipts, dimensions, and journal entries.
  - Videos explain differences and similarities in setting up segments, dimension templates, classes, trial balances, and posting accounts.
- [Dynamics GP Data Migration to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp): Learn which Dynamics GP master records, outstanding transactions, and historical data you can migrate to Business Central online and how to select them.
  - Fiscal periods in Dynamics GP migrate to Business Central as accounting periods; historical years come over as open.
  - Chart of accounts main segment becomes GL account; remaining segments become dimensions or shortcut dimensions.
  - GP unit accounts migrate to Business Central statistical accounts automatically with balances.
  - Active customers can be migrated exclusively; all customer addresses become shipping addresses in Business Central.
  - Outstanding receivables transactions migrate with remaining balance amounts, not full invoice amounts.
  - Inactive customers default excluded; temporary vendors default included in migration configuration.
  - Recurring sales and purchase lines can be automatically generated based on customer or vendor accounts.
  - Vendor 1099 information migrates in US environments with tax type, box number, and Federal ID mapped correctly.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Table 40900 "Hist. G/L Account"](../../../../../objects/table/40900.md), [Table 40901 "Hist. Gen. Journal Line"](../../../../../objects/table/40901.md), [Table 40902 "Hist. Sales Trx. Header"](../../../../../objects/table/40902.md), [Table 40903 "Hist. Sales Trx. Line"](../../../../../objects/table/40903.md)
- [Dynamics GP Migration to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-overview): Understand how Dynamics GP cloud migration works, from assessment and setup through data replication, transformation, validation, and going live online.
  - Azure Data Factory is managed cloud service that migrates large raw data volumes across data sources and controls integration projects.
  - Self-hosted integration runtime installed on-premises network for SQL Server; Azure Integration Runtime used for Azure SQL Database.
  - Data includes system setup, master data, transactional data, classes, vendor 1099, and historical data.
  - Data replicates table by table with success and failure tracked per table; failures captured without stopping process.
  - Step: Complete migration assessment using cloud migration assessment tool before starting process.
  - Step: After data replication, configure Dynamics GP company migration settings and review automatic transformation setting.
  - Dynamics GP migration retains existing BC user permissions; does not automatically assign Intelligent Cloud permission set.
  - Avoid entering data in online companies during migration; entered data can be overwritten by rerunning migration.
- [Manage Dynamics GP Cloud Migration in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-gp): Learn how to monitor Dynamics GP cloud migration, investigate errors, configure companies, and manage replication, data upgrade, and runtime service keys.
  - Cloud Migration Management page is a hub for managing data migration and migration services in Business Central online.
  - Migration Log shows status of all migration runs with timing and progress details.
  - Fields and tiles above the log show number of successfully migrated tables and tables with warnings or errors.
  - Tables with permissions from on-premises don't migrate because permissions work differently online.
  - Run Migration Now starts migration manually; on subsequent runs only changes since the previous migration are moved.
  - Limit: Migration tool cannot run if target environment is being upgraded; disable migration, upgrade, then set it up again.
  - Reset Cloud Data clears all cloud tenant data to restart the migration process from the beginning.
  - Both web client and cloud migration API offer options for managing migration setup and data movement.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 4009 "Migration Table Mapping"](../../../../../objects/page/4009.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../../../objects/table/4001.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
