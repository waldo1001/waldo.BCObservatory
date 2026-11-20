---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/set-up-cloud-migration
type: topic
title: Set up cloud migration
summary: "Setting up cloud migration from Dynamics GP to Business Central online: the Cloud Migration Setup connection and pipelines, GP company and module settings, and how user permissions are handled. It answers questions about configuring the migration and what happens to users and data during it."
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
  input_hash: a4b0de84909bd5ff3cbc61de96cc2c7c161332529af053c8625a33a0b03dbfa4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Business Central Cloud Migration Setup Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-configure-companies
    title: Dynamics GP Company Migration Configuration
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-gp
    title: Set Up Dynamics GP Cloud Migration to Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-configure-companies
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-gp
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
  - Set up cloud migration
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: bdb4f1b495e5407b348571551aa4eee9b4e37e810ba8e79a9e8dcdecd2514ba2
narrative: generated
---

# Set up cloud migration

> Setting up cloud migration from Dynamics GP to Business Central online: the Cloud Migration Setup connection and pipelines, GP company and module settings, and how user permissions are handled. It answers questions about configuring the migration and what happens to users and data during it.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Set up cloud migration · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the preparation work before data moves from Dynamics GP to Business Central online. Cloud Migration Setup creates the connection and pipelines between the on-premises and online tenant databases, creates the selected companies, and prepares the environment for replication. It does not migrate business data itself.

The pages fit together in order. Start with the overview of Cloud Migration Setup, then follow the GP-specific setup page, which walks through the assisted setup, the SQL database connection, the integration runtime, company selection, delegated administrator approval and automatic validation. Next, use the Dynamics GP company migration configuration page to set global and per-company options. Finally, review the permissions page to decide whether to keep the default permission behavior or retain users' original permissions.

## Key points

- Cloud Migration Setup connects the on-premises and online tenant databases, creates the selected companies and prepares replication, but does not migrate business data.
- Key components are the SQL database connection, the integration runtime, a preparation pipeline, a replication pipeline and compatibility checks.
- The GP setup runs as the Cloud Migration Setup assisted setup, with company selection, delegated administrator approval and Automatic Validation.
- GP migration settings can be global or per company: dimensions, modules to migrate, master data only migration, and disabling auto posting.
- Further GP options cover inactive records and discontinued items, and recurring sales and purchasing lines.
- By default, migration removes system-scope permission sets from non-SUPER users and assigns the INTELLIGENT CLOUD permission set.
- Administrators can retain original permissions through the Cloud Migration Management page settings or a custom extension using the OnBeforeResetUsersToIntelligentCloudPermissions event.
- The permissions page references Business Central 14.

## Learn pages

- [Business Central Cloud Migration Setup Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview): Learn what happens when you set up cloud migration from on-premises to Business Central online, including the data pipeline and connection process.
  - Cloud Migration Setup establishes connection and pipeline between on-premises and online tenant databases without replicating business data.
  - Setup creates selected companies not already existing in destination.
  - Preparation pipeline checks compatibility between databases, creates stored procedures, retrieves company list, creates migration table list.
  - Replication pipeline created after preparation pipeline succeeds; copies data and remains idle until replication initiated.
  - Load balancing automatically selects Azure Data Factory from available options.
  - Data upgrade required after replication for earlier major version migration; same major version requires no upgrade.
- [Dynamics GP Company Migration Configuration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-configure-companies): Configure the Dynamics GP modules, company options, dimensions, historical data, and validation settings to migrate to Business Central online.
  - Prerequisite: Complete Run cloud migration setup for Dynamics GP migration before configuring company migration.
  - GP Company Migration Configuration page opens automatically after Cloud Migration Setup; can open manually from Cloud Migration Management.
  - Global settings update all companies whose migration is not complete, overriding company-specific settings.
  - Step: Set dimensions using Set All Dimensions action to assign two segments from GP as global dimensions.
  - Step: Choose modules to migrate globally; turning off General Ledger automatically disables open purchase orders.
  - Step: Specify Master Data Only for modules where transactions should not migrate.
  - Step: Configure Oldest GL Year to select which historical years to migrate; if empty, all years migrate.
  - Per Company section allows separate configuration when migrating multiple companies.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Retain User Permissions During Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions): Learn how to keep the permissions assigned to existing online users so they can continue to work as usual during cloud migration.
  - By default, Business Central removes system-scope permission set assignments except SUPER, assigns INTELLIGENT CLOUD permission set.
  - LOCAL permission set is retained; INTELLIGENT CLOUD permission set assigned to prevent non-SUPER users from modifying data.
  - Status: Business Central 14 migration retains user permissions automatically.
  - Step: Before cloud migration setup, use SUPER account to open Cloud Migration Management, select Actions > Enable/Disable Removing Permissions from Users.
  - Step: Create per-tenant extension with event subscriber handling OnBeforeResetUsersToIntelligentCloudPermissions to retain permissions.
  - Changing permission retention setting before setup doesn't restore permissions already removed.
  - In the observatory: [Codeunit 6060 "Hybrid Deployment"](../../../../../objects/codeunit/6060.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Set Up Dynamics GP Cloud Migration to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-gp): Learn how to connect Dynamics GP to Business Central online, select companies, configure migration options, and obtain delegated administrator consent.
  - Prerequisite: SUPER permission set required in Business Central; review Dynamics GP cloud migration prerequisites.
  - Prerequisite: Delegated administrators must receive approval from licensed user with Essentials or Premium license and SUPER permission set.
  - Dynamics GP migration retains existing Business Central permissions rather than auto-assigning read-only permission set.
  - Step: Run assisted setup from company not being migrated; setup prevents selecting current company for migration.
  - Step: Complete Cloud Migration Setup, select product as Dynamics GP, fill SQL connection info, select companies, finish setup.
  - Storage capacity is 80 GB plus allowances per licensed Essentials or Premium user and any storage capacity licenses.
  - Rerunning setup allows adding tenants to existing runtime service using existing integration runtime name.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
