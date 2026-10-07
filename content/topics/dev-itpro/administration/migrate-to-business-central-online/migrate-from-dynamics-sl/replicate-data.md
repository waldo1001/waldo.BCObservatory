---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/replicate-data
type: topic
title: Replicate data
summary: Data replication from Dynamics SL to Business Central online. It explains how replication works (large and small table flows, Azure BLOB storage, Azure Data Factory, change tracking) and how to run, monitor and troubleshoot it on the Cloud Migration Management page.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:51.597Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f71d4d3c46269c3fb3be912f76f33eaea5a2db3d272e3c463d644ecea684512d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication
    title: Data replication overview
    date: "2023-01-15"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run
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
  - Replicate data
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
member_hash: 0ab15c5da299d3b1ab31b23fa5d18e1a931113c5566840f113fdfc46f7579aa3
narrative: generated
---

# Replicate data

> Data replication from Dynamics SL to Business Central online. It explains how replication works (large and small table flows, Azure BLOB storage, Azure Data Factory, change tracking) and how to run, monitor and troubleshoot it on the Cloud Migration Management page.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Replicate data · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers the replication step of migrating from Dynamics SL to Business Central online. It has two pages: one explains the concepts and one explains the hands-on tasks.

"Data replication overview" describes how data moves from the on-premises database to the online environment. It covers the large table and small table flows, Azure BLOB storage, Azure Data Factory, the integration runtime, company initialization, and how rerunning replication uses change tracking.

"Run and manage data replication" is the practical page. It uses the Cloud Migration Management page to create a diagnostics run, start replication, monitor progress, and review the Migration Log when errors occur. Start with the overview to understand the flow, then use the run page for the actual migration.

## Key points

- Replication moves data from the on-premises database to a Business Central online environment.
- Two flows exist: one for large tables and one for small tables, using Azure BLOB storage and Azure Data Factory.
- An integration runtime is part of the replication architecture.
- Company initialization is part of the process.
- Rerunning replication relies on change tracking.
- Cloud Migration Management page is used to create a diagnostics run and to run replication.
- Progress is monitored and errors are tracked through the Migration Log.
- A migration can be paused or abandoned from the management page.

## Learn pages

- [Data replication overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication): Learn how to replicate on-premises data to an online environment after setting up the cloud migration.
- [Run and manage data replication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run): This article explains how to run data replication to move data from Business Central on-premises database to on line.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
