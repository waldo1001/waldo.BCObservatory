---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/replicate-data
type: topic
title: Replicate data
summary: "Replicating Dynamics GP data to Business Central online: how the replication pipeline works, how to run and manage replication runs, and how to validate migrated data. It answers questions about running, monitoring, pausing, rerunning and checking a cloud migration."
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
  input_hash: 35928595e30e908dd47f5a148cba53d566708e625572222310f864cfd4af9986
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-replication
    title: Cloud Migration Data Replication Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-validation
    title: Dynamics GP Migration Validation Overview
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

> Replicating Dynamics GP data to Business Central online: how the replication pipeline works, how to run and manage replication runs, and how to validate migrated data. It answers questions about running, monitoring, pausing, rerunning and checking a cloud migration.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Replicate data · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the step after cloud migration setup: moving data from Dynamics GP into Business Central online. It explains the replication pipeline, including the large table and small table flows, Azure Blob Storage, the self-hosted integration runtime, company initialization, and change tracking for later runs.

The pages fit together in the order of a migration. Start with the data replication overview to understand how data is copied. Then use the run and manage page to start a replication, run diagnostics, follow the migration log, and pause, abandon or rerun the migration. Finish with the validation overview, which compares the replicated source data with the migrated data so you can fix discrepancies before using Business Central.

## Key points

- Replication copies on-premises data to Business Central online after setup is complete.
- The pipeline uses large table and small table flows, Azure Blob Storage and a self-hosted integration runtime.
- Company initialization and change tracking support the first run and subsequent runs.
- You can run a diagnostics run, run replication, and monitor progress in the migration log.
- A migration can be paused, abandoned, or rerun when troubleshooting.
- Dynamics GP validation compares source and migrated data for entities such as G/L accounts, customers, vendors and items.
- Validation runs automatically during data upgrade or manually after migration.
- You can review a results summary, investigate detailed errors, suppress validation tests, and check 1099 vendor data.

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
- [Dynamics GP Migration Validation Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-validation): Validate Dynamics GP data migrated to Business Central, review failed tests and record details, and configure automatic or manual validation.
  - Migration validation compares replicated GP source data with migrated BC data to identify discrepancies.
  - Validation checks G/L accounts, customers, vendors, items, purchase orders, bank accounts, and addresses.
  - Automatic validation runs during data upgrade if enabled in GP Migration Settings; turned on by default.
  - Step: Enable automatic validation in GP Migration Settings to automatically check data during upgrade.
  - Step: Run manual validation from Cloud Migration Management after migration by selecting Run All Validation.
  - Validation results show entities tested, validation test descriptions, and count of failed records per test.
  - Individual validation tests can be ignored if relevant to business requirements; test still runs but does not log failures.
  - Validation errors can optionally cause data upgrade to fail; controlled by Validation Errors Should Fail Migration.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 40065 "Migration Validation Errors"](../../../../../objects/page/40065.md), [Page 40067 "Migration Validation Results"](../../../../../objects/page/40067.md)
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
