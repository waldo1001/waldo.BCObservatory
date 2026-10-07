---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/replicate-data
type: topic
title: Replicate data
summary: "Data replication from Business Central on-premises to Business Central online: how the replication process works (large and small table flows, Azure BLOB storage, Azure Data Factory, change tracking) and how to run, monitor, pause, or troubleshoot it in Cloud Migration Management."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:47.056Z"
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
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Business Central on-premises
  - Replicate data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
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

> Data replication from Business Central on-premises to Business Central online: how the replication process works (large and small table flows, Azure BLOB storage, Azure Data Factory, change tracking) and how to run, monitor, pause, or troubleshoot it in Cloud Migration Management.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Replicate data · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers the replication step of a cloud migration from Business Central on-premises to an online environment. It has two pages: one explaining how replication works, and one explaining how to operate it.

Start with Data replication overview. It describes the large table flow and the small table flow, the use of Azure BLOB storage and Azure Data Factory, the integration runtime, company initialization, and how replication can be rerun using change tracking.

Then use Run and manage data replication for the hands-on steps. It uses the Cloud Migration Management page to create a diagnostics run, start replication, follow progress, check the Migration Log, and handle problems by pausing or abandoning a migration.

## Key points

- Replication moves data from an on-premises database to an online Business Central environment.
- Tables follow either a large table flow or a small table flow.
- Azure BLOB storage and Azure Data Factory, with an integration runtime, take part in the process.
- Company initialization is part of the replication process.
- Replication can be rerun, and change tracking is used for reruns.
- Cloud Migration Management is the page used to run and manage replication.
- You can create a diagnostics run before running replication.
- Progress is monitored in Cloud Migration Management and the Migration Log, and you can pause or abandon a migration.

## Learn pages

- [Data replication overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication): Learn how to replicate on-premises data to an online environment after setting up the cloud migration.
- [Run and manage data replication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run): This article explains how to run data replication to move data from Business Central on-premises database to on line.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
