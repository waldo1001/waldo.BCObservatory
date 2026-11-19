---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/replicate-data
type: topic
title: Replicate data
summary: Data replication in cloud migration from Business Central on-premises to Business Central online. It covers how the replication pipeline works, and how to run, monitor, pause, abandon and rerun replication. It answers questions about flows for large and small tables, company initialization and troubleshooting.
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
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/13676
  guidelines: []
  changes:
    - change/bcapps/13438
    - change/bcapps/13572
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 0ab15c5da299d3b1ab31b23fa5d18e1a931113c5566840f113fdfc46f7579aa3
narrative: generated
---

# Replicate data

> Data replication in cloud migration from Business Central on-premises to Business Central online. It covers how the replication pipeline works, and how to run, monitor, pause, abandon and rerun replication. It answers questions about flows for large and small tables, company initialization and troubleshooting.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Replicate data · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the replication step of a cloud migration, after setup is done. It explains how on-premises data is copied to Business Central online and how to operate the process.

The overview page describes the replication pipeline: table-based copying with separate flows for large and small tables, use of Azure Blob Storage and a self-hosted integration runtime, company initialization, and change tracking for later runs. The run and manage page is the practical guide. It covers starting replication, running diagnostics, watching progress in the migration log, and handling problems.

Start with the overview to understand what happens during a run. Then use the run and manage page when you start replication or need to pause, abandon or rerun it.

## Key points

- Replication runs after cloud migration setup is complete.
- The pipeline copies data table by table, with separate flows for large tables and small tables.
- Azure Blob Storage and a self-hosted integration runtime are part of the replication flow.
- Company initialization is part of the process, and change tracking is used for subsequent runs.
- A diagnostics run is available to check the migration before or alongside full replication.
- Progress is monitored through the migration log.
- You can pause a migration, abandon it, or rerun data replication.
- The section has two pages and no subtopics.

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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#13438 Fix Cloud Migration recovery when Tenant Media is unavailable](../../../../../changes/bcapps/13438.md) (code change): "Cloud migration recovery now handles Tenant Media read failures gracefully"
- [#13572 Fix cloud migration company delete removing the wrong hybrid company](../../../../../changes/bcapps/13572.md) (code change): "Cloud migration company deletion now removes the correct hybrid company"
- [Business Central Cloud Migration: be careful on reusing the same self-hosted runtime.](../../../../../posts/demiliani-com/13676.md) (community post): "Cloud migration in Dynamics 365 Business Central uses integration runtime to replicate data"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
