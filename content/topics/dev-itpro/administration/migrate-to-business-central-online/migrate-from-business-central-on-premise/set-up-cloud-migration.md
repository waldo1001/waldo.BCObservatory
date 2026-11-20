---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/set-up-cloud-migration
type: topic
title: Set up cloud migration
summary: Setting up cloud migration from Business Central on-premises to Business Central online. It answers questions about running the Cloud Migration Setup guide, changing table replication, mapping tables and fields, and keeping user permissions during migration.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: de620d094517e9079659795f288115b9c78cf00e15bfab1eea0436468af3c591
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Business Central Cloud Migration Setup Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-change-replication
    title: Change Cloud Migration Replication in Business Central Online
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-table-mapping
    title: Define Cloud Migration Table Mappings in Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions
    title: Retain User Permissions During Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup
    title: Run Business Central Cloud Migration Setup
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-change-replication
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

> Setting up cloud migration from Business Central on-premises to Business Central online. It answers questions about running the Cloud Migration Setup guide, changing table replication, mapping tables and fields, and keeping user permissions during migration.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Set up cloud migration · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the configuration work done before and around data replication from an on-premises Business Central database to an online tenant. Cloud Migration Setup creates the connection and pipeline between the two databases and creates the selected companies. It prepares the environment for replication but does not migrate business data itself.

Start with the overview page and the page on running the Cloud Migration Setup assisted setup guide. The guide covers the SQL database connection, the integration runtime, company selection, and delegated administrator approval. After that, use the other pages to adjust the migration. These pages cover how specific tables are replicated, how tables are renamed or fields moved to table extensions, and how user permissions are handled.

## Key points

- Cloud Migration Setup sets up the connection and pipeline between on-premises and online databases, creates selected companies, and prepares for replication without migrating business data.
- The Cloud Migration Setup assisted setup guide configures the SQL database connection, integration runtime, company selection, and delegated administrator approval.
- The setup involves a preparation pipeline, a replication pipeline, and compatibility checks.
- Replication can be changed per table: include or exclude tables, replace full table data, or preserve existing cloud data. You can view changed records and reset to defaults.
- Table mappings let you rename tables or move fields to table extensions. Multiple source tables cannot map to the same destination.
- Mapping definitions can be imported and exported, and default mappings can be restored. The ReplicateData property and the OnInsertDefaultTableMappings event are supported.
- By default, migration removes system-scope permission sets from non-SUPER users and assigns the INTELLIGENT CLOUD permission set.
- Original permissions can be retained through Cloud Migration Management page settings or a custom extension using the OnBeforeResetUsersToIntelligentCloudPermissions event.

## Learn pages

- [Business Central Cloud Migration Setup Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview): Learn what happens when you set up cloud migration from on-premises to Business Central online, including the data pipeline and connection process.
  - Cloud Migration Setup establishes connection and pipeline between on-premises and online tenant databases without replicating business data.
  - Setup creates selected companies not already existing in destination.
  - Preparation pipeline checks compatibility between databases, creates stored procedures, retrieves company list, creates migration table list.
  - Replication pipeline created after preparation pipeline succeeds; copies data and remains idle until replication initiated.
  - Load balancing automatically selects Azure Data Factory from available options.
  - Data upgrade required after replication for earlier major version migration; same major version requires no upgrade.
- [Change Cloud Migration Replication in Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-change-replication): Learn how to include or exclude tables from Business Central cloud migration and control whether replication preserves or replaces online data.
  - Change how data is replicated feature allows including or excluding specific tables from cloud migration.
  - Can specify whether to replace full table or update and insert only missing records.
  - Prerequisite: Run cloud migration setup and use supported migration from Business Central.
  - Limit: Cannot enable Preserve data for per-company tables or clear it for Tenant Media table.
  - Some system tables do not allow changes to replication settings, identified by View only field.
  - Can view history of changes to replication settings and reset tables to default settings.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Define Cloud Migration Table Mappings in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-table-mapping): Learn how to use cloud migration table mapping to rename a table during cloud migration or to move a subset of fields to a different table or table extension.
  - Table mapping allows renaming tables during cloud migration or moving subset of fields to table extension.
  - Limit: Multiple source tables cannot map to same destination table; each destination requires single on-premises source table.
  - Prerequisite: Keys in on-premises and online tables must match; online target table must have ReplicateData property set to true.
  - Step: Open Migration Table Mapping from Cloud Migration Management, set Target Table Type to Table or Table Extension, fill source and target table names.
  - Source table names entered as SQL format: C/AL example [CRONUS COMPANY$Table Name], AL example with GUID.
  - Table extension mapping only supported for Business Central cloud migrations; Dynamics GP and SL do not support table extensions.
  - Subscribe to OnInsertDefaultTableMappings event from codeunit 4001 Hybrid Cloud Management to provide table mappings programmatically.
  - In the observatory: [Codeunit 4001 "Hybrid Cloud Management"](../../../../../objects/codeunit/4001.md), [Page 40010 "Add Migration Table Mappings"](../../../../../objects/page/40010.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 4009 "Migration Table Mapping"](../../../../../objects/page/4009.md)
- [Retain User Permissions During Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions): Learn how to keep the permissions assigned to existing online users so they can continue to work as usual during cloud migration.
  - By default, Business Central removes system-scope permission set assignments except SUPER, assigns INTELLIGENT CLOUD permission set.
  - LOCAL permission set is retained; INTELLIGENT CLOUD permission set assigned to prevent non-SUPER users from modifying data.
  - Status: Business Central 14 migration retains user permissions automatically.
  - Step: Before cloud migration setup, use SUPER account to open Cloud Migration Management, select Actions > Enable/Disable Removing Permissions from Users.
  - Step: Create per-tenant extension with event subscriber handling OnBeforeResetUsersToIntelligentCloudPermissions to retain permissions.
  - Changing permission retention setting before setup doesn't restore permissions already removed.
  - In the observatory: [Codeunit 6060 "Hybrid Deployment"](../../../../../objects/codeunit/6060.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Run Business Central Cloud Migration Setup](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup): Run the Cloud Migration Setup guide to connect a Business Central on-premises database to an online environment and select the companies to migrate.
  - Prerequisite: Person setting up cloud migration must be signed in as administrator of Microsoft Entra tenant and Business Central online.
  - Prerequisite: Run assisted setup from company not being migrated; setup prevents selecting current company for migration.
  - Prerequisite: Other users must be signed out of target companies before replication starts.
  - Delegated administrators need approval from licensed user with Essentials or Premium license and SUPER permission set to run setup.
  - Step: Open Cloud Migration Setup, read information and consent by switching on acceptance, select product version matching on-premises source.
  - Step: Fill SQL database connection info on Define Your SQL Database Connection page, select Next to create pipeline in Azure.
  - Step: Select one or more companies to migrate or enable Migrate All Companies option, then select Next.
  - Rerunning setup allows adding more companies or changing companies via Cloud Migration Management Select Companies to Migrate action.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
