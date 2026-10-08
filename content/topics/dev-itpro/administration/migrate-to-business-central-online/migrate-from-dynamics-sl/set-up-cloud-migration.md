---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/set-up-cloud-migration
type: topic
title: Set up cloud migration
summary: Cloud migration setup for Dynamics SL to Business Central online. It covers the connection and pipeline architecture, running the Cloud Migration Setup guide, and configuring global and per-company migration settings. It answers questions about setup steps, connections and migration options.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:01.195Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b6b29dbca0a83a74002ef053484511d6e5ea32a60cd260ab90be8846962591d6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Cloud migration setup overview
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies
    title: Configure Dynamics SL company migration
    date: "2026-04-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl
    title: Run cloud migration setup for Dynamics SL migration
    date: "2024-12-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Dynamics SL
  - Set up cloud migration
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a657122b48c3b1dcdc1c46e856c668b1c075a41c650bda632c46cac154d1a0bd
narrative: generated
---

# Set up cloud migration

> Cloud migration setup for Dynamics SL to Business Central online. It covers the connection and pipeline architecture, running the Cloud Migration Setup guide, and configuring global and per-company migration settings. It answers questions about setup steps, connections and migration options.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Set up cloud migration · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section explains how to prepare a migration from Dynamics SL to Business Central online. It starts with an overview of how the connection between the on-premises and online databases is built: an integration runtime plus Azure Data Factory preparation and replication pipelines, with compatibility checks and table mapping.

The practical steps are split across two pages. One runs the Cloud Migration Setup guide, which handles delegated administrator approval, the SQL database connection, integration runtime configuration, company selection and storage capacity. The other configures the Dynamics SL company migration, with global and per-company settings.

Start with the overview to understand the components, then run the setup guide, then configure the company migration settings.

## Key points

- Setup connects on-premises and online databases through an integration runtime and Azure Data Factory pipelines.
- Two pipelines are used: a preparation pipeline and a replication pipeline.
- Compatibility checks and table mapping are part of the setup process.
- The Cloud Migration Setup guide configures components and connections, including the SQL database connection and integration runtime.
- The guide covers delegated administrator approval, company selection and storage capacity management.
- Company migration settings include module selection, dimension mapping and master data migration.
- Settings also control auto-posting, historical snapshots and 1099 information.
- Settings are applied at global and per-company levels.

## Learn pages

- [Cloud migration setup overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview): Learn what happens when you set up cloud migration from on-premises to Business Central online, including the data pipeline and connection process.
- [Configure Dynamics SL company migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies): Learn how to use the Business Central cloud migration tools to specify the Dynamics SL company data for migrating to Business Central on-premises.
- [Run cloud migration setup for Dynamics SL migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl): Learn how to run Cloud Migration Setup to configure the components and connection to migrate from a Dynamics SL on-premises to Business Central online.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
