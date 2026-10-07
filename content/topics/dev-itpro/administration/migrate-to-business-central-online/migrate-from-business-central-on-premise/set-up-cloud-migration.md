---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/set-up-cloud-migration
type: topic
title: Set up cloud migration
summary: "Setting up cloud migration from Business Central on-premises to Business Central online: running Cloud Migration Setup, the integration runtime and pipelines, table mappings, replication settings, and permission retention. It answers how to configure and adjust a migration."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:45.872Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9dbbfe2868beacd69775b0b0ed99d424fa7b8e85b2bd32c6f9acb32e854a798d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-change-replication
    title: Change the way data is replicated to Business Central online
    date: "2023-12-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Cloud migration setup overview
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-table-mapping
    title: Define migration table mappings
    date: "2023-03-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions
    title: Retain permissions
    date: "2024-02-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup
    title: Run Cloud Migration Setup
    date: "2024-03-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-change-replication
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-table-mapping
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup
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
  - Set up cloud migration
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 08adf00c4cd019fa8d5fff8514c6681f2de215ea78b4744e6e5d7a0a4370e9ae
narrative: generated
---

# Set up cloud migration

> Setting up cloud migration from Business Central on-premises to Business Central online: running Cloud Migration Setup, the integration runtime and pipelines, table mappings, replication settings, and permission retention. It answers how to configure and adjust a migration.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Set up cloud migration · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers the setup work needed before and during a cloud migration from Business Central on-premises to online. Setup establishes the connection and pipelines between the two databases, using an integration runtime and Azure Data Factory preparation and replication pipelines, with compatibility checks and table mapping.

Start with the overview page to understand the components, then follow Run Cloud Migration Setup, which configures the connection and supports delegated administrators and migrating multiple companies. After that, the other pages cover optional adjustments: changing which tables are replicated and whether existing online data is preserved, defining table mappings, and retaining user permissions.

## Key points

- Cloud migration setup creates the connection and pipeline between on-premises and online databases using integration runtime and Azure Data Factory pipelines.
- The preparation pipeline and replication pipeline, plus compatibility checks, are part of the setup described in the overview.
- Run Cloud Migration Setup supports delegated administrator approval and selecting multiple companies to migrate.
- Replication settings can be changed to choose which tables are migrated and whether to preserve existing cloud data.
- Table mappings let you rename tables and move fields to table extensions; they can be imported and exported.
- Mapping development uses the ReplicateData property and the OnInsertDefaultTableMappings event.
- Permissions can be retained via the Cloud Migration Management page (enable or disable removing permissions from users) or a custom extension.
- The OnBeforeResetUsersToIntelligentCloudPermissions event and the Intelligent Cloud permission set relate to permission handling.

## Learn pages

- [Change the way data is replicated to Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-change-replication): Learn how to use the replication properties to include or exclude specific tables from cloud migration.
- [Cloud migration setup overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview): Learn what happens when you set up cloud migration from on-premises to Business Central online, including the data pipeline and connection process.
- [Define migration table mappings](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-table-mapping): Learn how to use migration table mapping to rename the table during the cloud migration or to move a subset of fields to a different table or table extension.
- [Retain permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions): Learn how to keep the permissions assigned to existing online users so they can continue to work as usual during cloud migration.
- [Run Cloud Migration Setup](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup): This article explains how to run the Cloud Migration Setup assisted setup guide to configure the components and connection for migrating data from a Business Central on-premises database to Business Central online environment.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
