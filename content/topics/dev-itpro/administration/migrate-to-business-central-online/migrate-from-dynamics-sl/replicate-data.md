---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/replicate-data
type: topic
title: Replicate data
summary: Replicating Dynamics SL data to Business Central online during cloud migration. It covers how the replication pipeline works (large and small table flows, company initialization, change tracking) and how to run, monitor, pause, abandon and rerun replication.
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
  input_hash: 76ffe67af4be45d9c64c0f02613763dc34aaf1ffb9666c4c0b2282b0b20e3fcd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication
    title: Cloud Migration Data Replication Overview
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

> Replicating Dynamics SL data to Business Central online during cloud migration. It covers how the replication pipeline works (large and small table flows, company initialization, change tracking) and how to run, monitor, pause, abandon and rerun replication.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Replicate data · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes the replication step of a Dynamics SL migration to Business Central online. It applies after cloud migration setup is complete. It has two pages: one explains how replication works, and one explains how to run and manage it.

Start with the overview page. It describes the replication pipeline and the table-based copying flows, which are split into a large table flow and a small table flow. It also mentions Azure Blob Storage, the self-hosted integration runtime, company initialization, and the change tracking used for later runs.

Then use the run and manage page for the practical work. It covers running a diagnostics run, running data replication, watching progress in the migration log, pausing or abandoning a migration, and rerunning replication when you need to troubleshoot.

## Key points

- Replication happens after cloud migration setup and copies on-premises data to Business Central online.
- The pipeline uses table-based copying flows, with separate large table and small table flows.
- Azure Blob Storage and a self-hosted integration runtime are part of the replication pipeline.
- Company initialization is part of the process.
- Change tracking is used for subsequent replication runs.
- A diagnostics run is available before or alongside a full data replication run.
- Progress is monitored in the migration log.
- You can pause a migration, abandon it, or rerun data replication when troubleshooting.

## Learn pages

- [Cloud Migration Data Replication Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication): Learn how cloud migration data replication moves on-premises data to Business Central online, initializes companies, and handles subsequent replication runs.
  - Step: Select Run data replication on Cloud Migration Management page to start data replication.
  - Large tables are copied via self-hosted runtime to Azure Blob Storage then to online database; smaller tables are serialized into JSON first.
  - Azure Blob Storage acts as temporary regional store so data does not move outside the region.
  - When replication completes, you are prompted to initialize noninitialized companies to ensure they are accessible and functional.
  - Prerequisite: Do not use a company until it is initialized, as setup data could be missing.
  - Subsequent replication runs use SQL change tracking to replicate only data that changed since last replication.
  - If change tracking retention period expires, the entire table is fully replicated again.
  - In the observatory: [Page 40015 "Hybrid Companies List"](../../../../../objects/page/40015.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Run and Manage Cloud Migration Data Replication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run): Learn how to run and monitor cloud migration data replication from an on-premises database to Business Central online and resolve replication errors.
  - Prerequisite: Cloud migration must be set up before running data replication.
  - Prerequisite: User must have SUPER permission set in online environment.
  - Step: Before replication, run a diagnostic run to identify and fix issues without migrating data.
  - Step: Open Cloud Migration Management page and select Run data replication to start replicating data.
  - Generally only changed data is replicated on reruns; this makes subsequent replications faster than initial migration.
  - Pause migration or Abandon migration cannot stop in-progress replication; must wait for completion first.
  - Migrated data remains in online database after pausing or abandoning migration.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
