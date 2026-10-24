---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/overview
type: topic
title: Overview
summary: "Migration from on-premises Dynamics GP to Business Central online: the end-to-end process, which GP data moves, how to manage cloud migration runs, and how everyday GP work maps to Business Central. It answers questions about phases, migrated data, and migration management."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:22.256Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 068615248349d234b76523c85d4e377affc52e0735328f6b9294cff1a61e8c66
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp-videos
    title: Compare Work in Dynamics GP to Business Central
    date: "2022-07-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-gp
    title: Managing Dynamics GP cloud migration
    date: "2024-02-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    title: Migrate Dynamics GP data to the cloud
    date: "2026-01-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-overview
    title: Migrate on-premises GP data to Business Central online overview
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp-videos
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-gp
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-overview
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

> Migration from on-premises Dynamics GP to Business Central online: the end-to-end process, which GP data moves, how to manage cloud migration runs, and how everyday GP work maps to Business Central. It answers questions about phases, migrated data, and migration management.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Overview · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section introduces moving Dynamics GP on-premises data to Business Central online. The main overview page walks through the phases: assessment, preparation, cloud migration setup, data replication, upgrade, validation, and completion.

The other pages cover specific needs. One lists what data is migrated and how it maps, such as fiscal periods, chart of accounts, dimensions, customers, vendors, inventory, and checkbooks. Another explains how to run and track the migration from the Cloud Migration Management page or the cloud migration API. A video page compares daily GP work with Business Central for users making the switch.

Start with the end-to-end overview to understand the sequence. Then read the data migration page to check what will move, and use the management page while running the migration.

## Key points

- The overview covers the phases: assessment, preparation, cloud migration setup, data replication, data upgrade, validation, and completion.
- A migration assessment tool and an Intelligent Cloud permission set are part of the process.
- Migrated data includes fiscal periods (to accounting periods), chart of accounts, dimensions mapping, customer and vendor records, inventory, and checkbook transactions.
- The Cloud Migration Management page, or the cloud migration API, is used to set up, run, track, and manage migration.
- Management actions include Run Migration Now, Run Data Upgrade Now, Reset Cloud Data, and Disable Cloud Migration.
- The Migration Log and Migration Information tiles show migration status.
- Videos compare GP and Business Central work for receivables, payables, vendor payments, customer cash receipts, dimensions, journal entries, and reports.

## Learn pages

- [Compare Work in Dynamics GP to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp-videos): Get some tips and tricks for how to do things in Business Central online that you currently do in Dynamics GP.
  - Video series compares work processes between Dynamics GP and Business Central to help users transition.
  - Videos cover topics including receivables and payables transactions, vendor payments, cash receipts, dimensions, and journal entries.
  - Videos explain differences and similarities in setting up segments, dimension templates, classes, trial balances, and posting accounts.
- [Managing Dynamics GP cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-gp): Describes the Cloud Migration Management page in Business Central for migrating from Dynamics GP.
  - Cloud Migration Management page is a hub for managing data migration and migration services in Business Central online.
  - Migration Log shows status of all migration runs with timing and progress details.
  - Fields and tiles above the log show number of successfully migrated tables and tables with warnings or errors.
  - Tables with permissions from on-premises don't migrate because permissions work differently online.
  - Run Migration Now starts migration manually; on subsequent runs only changes since the previous migration are moved.
  - Limit: Migration tool cannot run if target environment is being upgraded; disable migration, upgrade, then set it up again.
  - Reset Cloud Data clears all cloud tenant data to restart the migration process from the beginning.
  - Both web client and cloud migration API offer options for managing migration setup and data movement.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Migrate Dynamics GP data to the cloud](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp): Learn how to migrate to the cloud from Dynamics GP using an assisted setup guide in Business Central online. Move historical data to Azure Data Lake.
  - Fiscal periods from Dynamics GP migrate to Business Central as accounting periods, with historical years becoming open and requiring closure.
  - Chart of Accounts account numbers map from the main segment; remaining segments become dimensions, with up to eight shortcut dimensions supported.
  - Customer addresses migrate as shipping addresses; vendor addresses migrate with Remit To as primary and others as order addresses.
  - Outstanding transactions migrate with remaining balance amounts, not original invoice amounts.
  - Unit of Measure Schedules from GP don't have direct equivalents; Business Central supports alternate units of measure per item instead.
  - Unreconciled bank transactions migrate; undeposited receipts do not migrate and must be deposited in GP before migration.
  - Historical snapshot data stores in extension tables including GL, Receivables, Payables, Sales, Purchase, and Inventory transaction records.
  - 1099 vendor information and box amounts migrate if selected, with the earliest supported year being 2024.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Table 40900 "Hist. G/L Account"](../../../../../objects/table/40900.md), [Table 40901 "Hist. Gen. Journal Line"](../../../../../objects/table/40901.md), [Table 40902 "Hist. Sales Trx. Header"](../../../../../objects/table/40902.md), [Table 40903 "Hist. Sales Trx. Line"](../../../../../objects/table/40903.md), [Table 40904 "Hist. Receivables Document"](../../../../../objects/table/40904.md)
- [Migrate on-premises GP data to Business Central online overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-overview): This article provides an overview of how the migration works and the necessary tasks for completing the migration from Dynamics GP on-premises.
  - Cloud migration uses Azure Data Factory to securely replicate data from on-premises SQL Server to Business Central online
  - Migrated data includes system setup, master data, transactional data, classes, vendor 1099, and historical data
  - Data migration is table-by-table with success and failure tracking; migration continues even if a table fails
  - On-premises solution remains operative environment until cloud migration is completed
  - Users without SUPER permissions are automatically assigned Intelligent Cloud permission set during migration
  - Data entry in online tenant during migration is limited to data not included in migration from on-premises
  - Limit: Cannot install or uninstall extensions during migration without disabling cloud migration first
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../../../objects/table/4001.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
