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
  at: "2026-10-07T15:52:42.721Z"
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

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Overview · tier official · system administration · narrative reviewed by Opus

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
- [Managing Dynamics GP cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage-gp): Describes the Cloud Migration Management page in Business Central for migrating from Dynamics GP.
- [Migrate Dynamics GP data to the cloud](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-dynamics-gp): Learn how to migrate to the cloud from Dynamics GP using an assisted setup guide in Business Central online. Move historical data to Azure Data Lake.
- [Migrate on-premises GP data to Business Central online overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-overview): This article provides an overview of how the migration works and the necessary tasks for completing the migration from Dynamics GP on-premises.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4003 "Intelligent Cloud Management"](../../../../../objects/page/4003.md) · captioned "Cloud Migration Management" · on [Table 4001 "Hybrid Replication Summary"](../../../../../objects/table/4001.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
