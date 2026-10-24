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
  at: "2026-10-24T00:57:10.969Z"
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
  posts:
    - post/demiliani-com/13676
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 08adf00c4cd019fa8d5fff8514c6681f2de215ea78b4744e6e5d7a0a4370e9ae
narrative: generated
---

# Set up cloud migration

> Setting up cloud migration from Business Central on-premises to Business Central online: running Cloud Migration Setup, the integration runtime and pipelines, table mappings, replication settings, and permission retention. It answers how to configure and adjust a migration.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Set up cloud migration · tier official · system administration · narrative reviewed (checked by Opus)

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
  - Change how data is replicated feature allows including or excluding tables and choosing whether to replace or update only missing records.
  - Prerequisite: Cloud migration setup must be completed before changing replication settings.
  - Limit: Do not modify Permissions-related tables because on-premises and online permissions are incompatible.
  - Losing permissions access may require deleting and recreating environment or using point-in-time restore.
  - Step: Open Cloud Migration Management page, select Show the rest, More options, Actions, then Change how the data is replicated.
  - Replicate data checkbox includes or excludes table from migration; Preserve the cloud data checkbox controls whether existing online records are kept.
  - View changed records action shows tables not using default settings; Reset to default action reverts custom settings.
  - Show history action displays all changes made to replication settings.
- [Cloud migration setup overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview): Learn what happens when you set up cloud migration from on-premises to Business Central online, including the data pipeline and connection process.
  - Cloud migration setup establishes connection and pipeline between on-premises and online databases without migrating data.
  - Step: Run Cloud Migration Setup and specify SQL database connection and integration runtime.
  - Step: Integration runtime registers with Azure Data Factory using authentication key exchange.
  - Step: Preparation pipeline checks compatibility between source and destination databases and creates stored procedures.
  - Step: Replication pipeline is created and remains idle until data migration is initiated.
- [Define migration table mappings](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-table-mapping): Learn how to use migration table mapping to rename the table during the cloud migration or to move a subset of fields to a different table or table extension.
  - Table mapping lets you rename tables during cloud migration or move fields to a different table or extension.
  - Limit: Multiple source tables cannot map to the same destination table; each target table needs one on-premises source.
  - Step: Sign in to Business Central online, search for Cloud Migration Management, and select Manage Custom Tables.
  - Step: Set Target Type, Extension Names, and Table Name to specify the target table.
  - Step: Enter the Source Table Name as it appears in SQL, such as with company name and extension ID.
  - Prerequisite: Keys in the on-premises and online tables must match for table renaming.
  - Prerequisite: The online target table must have ReplicateData property set to true.
  - You can use Import and Export actions to manage table mapping definitions.
  - In the observatory: [Codeunit 4001 "Hybrid Cloud Management"](../../../../../objects/codeunit/4001.md), [Page 4009 "Migration Table Mapping"](../../../../../objects/page/4009.md)
- [Retain permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions): Learn how to keep the permissions assigned to existing online users so they can continue to work as usual during cloud migration.
  - By default cloud migration removes all permission sets from existing online users except SUPER users.
  - Removed permissions are replaced with Intelligent Cloud permission set to prevent non-SUPER users from modifying data.
  - Step: Sign in to Business Central online and open Cloud Migration Management page.
  - Step: Select Show the rest, More options, Actions, then Enable/Disable Removing Permissions from Users.
  - Step: Create custom per-tenant extension with OnBeforeResetUsersToIntelligentCloudPermissions event handler to keep permissions.
  - Users can keep original permissions to continue working during data replication or for service-to-service apps.
  - In the observatory: [Codeunit 6060 "Hybrid Deployment"](../../../../../objects/codeunit/6060.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Run Cloud Migration Setup](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup): This article explains how to run the Cloud Migration Setup assisted setup guide to configure the components and connection for migrating data from a Business Central on-premises database to Business Central online environment.
  - Cloud Migration Setup guided wizard configures components for migrating data from on-premises to Business Central online.
  - Prerequisite: User running setup must have Microsoft 365 tenant admin and Business Central admin rights.
  - Prerequisite: Delegated administrators need approval from licensed user with SUPER permissions.
  - Step: Review cloud migration prerequisites and create table mappings if needed.
  - Step: Sign into Microsoft 365 tenant and Business Central online environment.
  - Step: Open Cloud Migration Setup and accept warnings, then select product version.
  - Step: Define SQL database connection and integration runtime settings.
  - Step: Select companies to migrate or choose all companies.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central Cloud Migration: be careful on reusing the same self-hosted runtime.](../../../../../posts/demiliani-com/13676.md) (community post): "Cloud migration requires self-hosted integration runtime for SQL Server databases"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
