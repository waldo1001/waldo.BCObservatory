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
  at: "2026-10-08T00:04:31.553Z"
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
- [Configure Dynamics GP company migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-gp-configure-companies): Learn how to specify the Dynamics GP company data for migrating to Business Central on-premises.
- [Retain permissions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-retain-permissions): Learn how to keep the permissions assigned to existing online users so they can continue to work as usual during cloud migration.
- [Run cloud migration setup for Dynamics GP migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-gp): This article explains how to run the Cloud Migration Setup assisted setup guide to configure the components and connection for migrating data from a Dynamics GP on-premises database to Business Central online environment.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
