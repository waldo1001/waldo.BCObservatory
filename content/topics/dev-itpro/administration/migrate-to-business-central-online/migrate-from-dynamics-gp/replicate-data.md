---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/replicate-data
type: topic
title: Replicate data
summary: Replicate data covers how data moves from an on-premises Dynamics GP database to Business Central online, how to run and manage replication from the Cloud Migration Management page, and how to validate migrated data. It answers process, monitoring, troubleshooting and validation questions.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:06.446Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4a7260e23a074c63c73016394baf9afcfefafd23a790c0d468bc7163a2bb00fd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication
    title: Data replication overview
    date: "2023-01-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-validation
    title: Migration validation overview
    date: "2025-01-09"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-validation
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run
  objects: []
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
  - Replicate data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: e0418368fda1faaa43dca07c3cb17348e99ebd0cebf7e382b0325d7c2f138ba7
narrative: generated
---

# Replicate data

> Replicate data covers how data moves from an on-premises Dynamics GP database to Business Central online, how to run and manage replication from the Cloud Migration Management page, and how to validate migrated data. It answers process, monitoring, troubleshooting and validation questions.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Replicate data · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section describes the replication step of a Dynamics GP to Business Central online migration. It explains how replication works, how to run and control it, and how to check the result.

Start with the Data replication overview to understand the large table and small table flows, Azure BLOB storage, Azure Data Factory, the integration runtime, company initialization, and how rerunning replication uses change tracking. Then use Run and manage data replication for the hands-on steps on the Cloud Migration Management page. Finish with Migration validation overview to compare source and migrated data.

## Key points

- Replication has separate large table and small table flows, using Azure BLOB storage and Azure Data Factory with an integration runtime.
- Company initialization is part of the replication process.
- Rerunning replication uses change tracking.
- Replication is run and managed from the Cloud Migration Management page.
- You can create a diagnostics run before running data replication.
- Progress is monitored and tracked in the Migration Log; you can pause or abandon a migration.
- Migration validation compares source and migrated data for entities such as G/L accounts, customers, and vendors.
- Validation can be automatic or manual, and shows results, discrepancies, and record-level details.

## Learn pages

- [Data replication overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication): Learn how to replicate on-premises data to an online environment after setting up the cloud migration.
  - Data replication copies on-premises data to Business Central online as part of cloud migration.
  - Large tables use flow with compression to Azure BLOB storage then decompression to online database.
  - Smaller tables are optimized by serializing, compressing, and merging into single table before storage.
  - When replication completes, you initialize non-initialized companies to ensure accessibility.
  - First replication is full; subsequent runs replicate only changed data using SQL change tracking.
  - Limit: If change tracking retention expires, full replication of affected tables occurs again.
  - Migration log displays replication results after process completes.
  - In the observatory: [Page 4005 "Hybrid Companies"](../../../../../objects/page/4005.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Migration validation overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-validation): Learn about the migration validation feature that verifies data migrated from Dynamics GP to Business Central.
  - Migration validation feature compares source Dynamics GP data with migrated data in Business Central
  - Validation can run automatically after migration or be triggered manually from Cloud Migration Management page
  - Validation results show count of failed records per test and drill-down details for investigation
  - You can exclude specific validation tests from future runs by marking them as Ignore
  - Limit: Only validates entities relevant to Dynamics GP migration, not all Business Central data
- [Run and manage data replication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-data-replication-run): This article explains how to run data replication to move data from Business Central on-premises database to on line.
  - Prerequisite: Cloud migration setup must be completed before data replication can run
  - Step: Run diagnostics first to identify and fix issues before actual replication starts
  - Step: Open Cloud Migration Management page and select Run data replication to start migrating data
  - Step: Monitor progress by checking Migration Log list and status fields on Cloud Migration Management page
  - When data replication is stopped, any data already migrated remains in the online database
  - Generally only changed data since last replication is replicated on rerun
  - Limit: Data replication cannot stop mid-table, waits until current table completes
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
