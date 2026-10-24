---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/set-up-cloud-migration
type: topic
title: Set up cloud migration
summary: "Setting up cloud migration from Dynamics GP to Business Central online: the connection and pipeline setup, running the setup, configuring GP company migration settings, and retaining user permissions. It answers questions on how the migration is wired and configured."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:27.041Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 629d97201a8a3b0ad62edd51f1cc96d4939456ff4f69544987ea8171f46a0a5f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Cloud migration setup overview
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-configure-companies
    title: Configure Dynamics GP company migration
    date: "2026-01-14"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-gp
    title: Run cloud migration setup for Dynamics GP migration
    date: "2024-02-29"
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

> Setting up cloud migration from Dynamics GP to Business Central online: the connection and pipeline setup, running the setup, configuring GP company migration settings, and retaining user permissions. It answers questions on how the migration is wired and configured.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Set up cloud migration · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers the setup work needed before data moves from Dynamics GP to Business Central online. The overview page explains the pieces: an integration runtime and Azure Data Factory preparation and replication pipelines that connect the on-premises and online databases, with compatibility checks and table mapping.

The practical pages follow in order. Running cloud migration setup configures the components and connections, including the SQL database connection, integration runtime, data pipeline and tenant setup, and includes delegated administrator approval. Configuring Dynamics GP company migration then sets options globally and per company. A separate page covers retaining user permissions during migration.

Start with the overview to understand the architecture, then run the setup, then configure the company settings. Read the permissions page before migrating if users must keep their permission sets.

## Key points

- Cloud migration setup creates the connection and pipelines between the on-premises and online databases using integration runtime and Azure Data Factory.
- Two pipelines are involved: a preparation pipeline and a replication pipeline, along with compatibility checks and table mapping.
- Running the setup covers the SQL database connection, integration runtime, data pipeline and tenant setup.
- Delegated administrator approval is part of running the setup for Dynamics GP migration.
- GP company migration settings can be set globally and per company: modules, dimensions, master data only, auto posting, inactive records and recurring records.
- Permissions can be retained during migration through the Cloud Migration Management page (Enable/Disable Removing Permissions from Users) or a custom extension.
- Retaining permissions relates to the Intelligent Cloud permission set and the OnBeforeResetUsersToIntelligentCloudPermissions event.

## Learn pages

- [Cloud migration setup overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview): Learn what happens when you set up cloud migration from on-premises to Business Central online, including the data pipeline and connection process.
  - Cloud migration setup establishes connection and pipeline between on-premises and online databases without migrating data.
  - Step: Run Cloud Migration Setup and specify SQL database connection and integration runtime.
  - Step: Integration runtime registers with Azure Data Factory using authentication key exchange.
  - Step: Preparation pipeline checks compatibility between source and destination databases and creates stored procedures.
  - Step: Replication pipeline is created and remains idle until data migration is initiated.
- [Configure Dynamics GP company migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-configure-companies): Learn how to specify the Dynamics GP company data for migrating to Business Central on-premises.
  - Prerequisite: Must complete cloud migration setup before configuring Dynamics GP company migration.
  - Step: Set global dimensions by selecting two segments from GP to use as global dimensions; remaining segments auto-configure as shortcut dimensions.
  - Step: Choose modules to migrate using module switches; disabling Payables automatically disables Open Purchase Orders.
  - Step: Specify Oldest GL Year field to determine which years migrate; if empty, all years migrate.
  - Master data only option allows migrating bank account information without bank transactions.
  - Limit: Multiple dimensions from GP require manual per-company configuration if companies use different segment counts.
  - Recurring sales and purchase lines auto-generate based on accounts assigned to customers, vendors, classes, or default posting setup.
  - Classes migrate as posting groups with matching names for customers, vendors, and items.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Retain permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions): Learn how to keep the permissions assigned to existing online users so they can continue to work as usual during cloud migration.
  - By default cloud migration removes all permission sets from existing online users except SUPER users.
  - Removed permissions are replaced with Intelligent Cloud permission set to prevent non-SUPER users from modifying data.
  - Step: Sign in to Business Central online and open Cloud Migration Management page.
  - Step: Select Show the rest, More options, Actions, then Enable/Disable Removing Permissions from Users.
  - Step: Create custom per-tenant extension with OnBeforeResetUsersToIntelligentCloudPermissions event handler to keep permissions.
  - Users can keep original permissions to continue working during data replication or for service-to-service apps.
  - In the observatory: [Codeunit 6060 "Hybrid Deployment"](../../../../../objects/codeunit/6060.md), [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Run cloud migration setup for Dynamics GP migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-gp): This article explains how to run the Cloud Migration Setup assisted setup guide to configure the components and connection for migrating data from a Dynamics GP on-premises database to Business Central online environment.
  - Prerequisite: Any delegated administrator running cloud migration setup must receive approval from a licensed SUPER user with Essentials or Premium license.
  - Prerequisite: User running setup must be signed in as administrator of both Microsoft Entra tenant and Business Central online.
  - Step: Sign in to Microsoft 365 tenant and Business Central online.
  - Step: Open Cloud Migration Setup assisted setup and accept the warning and privacy notice.
  - Step: Select Product matching the on-premises version being migrated.
  - Step: Fill in SQL database connection details and integration runtime information.
  - Step: Select one or more companies to migrate or enable All Companies.
  - Step: On GP Company Migration Configuration page select companies and enable Automatic Validation if desired.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
