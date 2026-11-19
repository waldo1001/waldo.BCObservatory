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
  at: "2026-11-19T01:01:35.036Z"
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
  - Cloud migration setup establishes connection and pipeline between on-premises and online databases without migrating data.
  - Step: Run Cloud Migration Setup and specify SQL database connection and integration runtime.
  - Step: Integration runtime registers with Azure Data Factory using authentication key exchange.
  - Step: Preparation pipeline checks compatibility between source and destination databases and creates stored procedures.
  - Step: Replication pipeline is created and remains idle until data migration is initiated.
- [Change Cloud Migration Replication in Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-change-replication): Learn how to include or exclude tables from Business Central cloud migration and control whether replication preserves or replaces online data.
  - Change how data is replicated feature allows including or excluding specific tables from cloud migration.
  - Can specify whether to replace full table or update and insert only missing records.
  - Prerequisite: Run cloud migration setup and use supported migration from Business Central.
  - Limit: Cannot enable Preserve data for per-company tables or clear it for Tenant Media table.
  - Some system tables do not allow changes to replication settings, identified by View only field.
  - Can view history of changes to replication settings and reset tables to default settings.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Define Cloud Migration Table Mappings in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-table-mapping): Learn how to use cloud migration table mapping to rename a table during cloud migration or to move a subset of fields to a different table or table extension.
  - Table mapping lets you rename tables during cloud migration or move fields to a different table or extension.
  - Limit: Multiple source tables cannot map to the same destination table; each target table needs one on-premises source.
  - Step: Sign in to Business Central online, search for Cloud Migration Management, and select Manage Custom Tables.
  - Step: Set Target Type, Extension Names, and Table Name to specify the target table.
  - Step: Enter the Source Table Name as it appears in SQL, such as with company name and extension ID.
  - Prerequisite: Keys in the on-premises and online tables must match for table renaming.
  - Prerequisite: The online target table must have ReplicateData property set to true.
  - You can use Import and Export actions to manage table mapping definitions.
  - In the observatory: [Codeunit 4001 "Hybrid Cloud Management"](../../../../../objects/codeunit/4001.md), [Page 40010 "Add Migration Table Mappings"](../../../../../objects/page/40010.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 4009 "Migration Table Mapping"](../../../../../objects/page/4009.md)
- [Retain User Permissions During Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions): Learn how to keep the permissions assigned to existing online users so they can continue to work as usual during cloud migration.
  - By default cloud migration removes all permission sets from existing online users except SUPER users.
  - Removed permissions are replaced with Intelligent Cloud permission set to prevent non-SUPER users from modifying data.
  - Step: Sign in to Business Central online and open Cloud Migration Management page.
  - Step: Select Show the rest, More options, Actions, then Enable/Disable Removing Permissions from Users.
  - Step: Create custom per-tenant extension with OnBeforeResetUsersToIntelligentCloudPermissions event handler to keep permissions.
  - Users can keep original permissions to continue working during data replication or for service-to-service apps.
  - In the observatory: [Codeunit 6060 "Hybrid Deployment"](../../../../../objects/codeunit/6060.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Run Business Central Cloud Migration Setup](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup): Run the Cloud Migration Setup guide to connect a Business Central on-premises database to an online environment and select the companies to migrate.
  - Cloud Migration Setup guided wizard configures components for migrating data from on-premises to Business Central online.
  - Prerequisite: User running setup must have Microsoft 365 tenant admin and Business Central admin rights.
  - Prerequisite: Delegated administrators need approval from licensed user with SUPER permissions.
  - Step: Review cloud migration prerequisites and create table mappings if needed.
  - Step: Sign into Microsoft 365 tenant and Business Central online environment.
  - Step: Open Cloud Migration Setup and accept warnings, then select product version.
  - Step: Define SQL database connection and integration runtime settings.
  - Step: Select companies to migrate or choose all companies.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
