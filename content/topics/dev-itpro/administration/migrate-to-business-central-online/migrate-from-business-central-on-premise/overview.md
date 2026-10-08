---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/overview
type: topic
title: Overview
summary: Overview of migrating from Business Central on-premises to online. It covers the end-to-end cloud migration process and its five phases, the Cloud Migration Management page, and the version 14 reimplementation tool for essential data only. Use it to understand the process and choose an approach.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:55.605Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8c3aedca66548c7356522dc1a0a895e132935b401b295a6df9827ea7a6f976b2
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-bc14-reimplementation
    title: Business Central 14 Reimplementation tool for cloud migration
    date: "2026-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    title: Business Central on-premises to online migration overview
    date: "2026-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage
    title: Managing cloud migration
    date: "2023-07-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-bc14-reimplementation
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage
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
  - Overview
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 93d8e66255026c1746525216d0b89686bd4656ae4c930c7c13a4026dfa6a349b
narrative: generated
---

# Overview

> Overview of migrating from Business Central on-premises to online. It covers the end-to-end cloud migration process and its five phases, the Cloud Migration Management page, and the version 14 reimplementation tool for essential data only. Use it to understand the process and choose an approach.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Overview · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section introduces moving data from Business Central on-premises to Business Central online. The main overview page explains the components, the data flow and the five phases, from preparation through completion and go-live. It mentions cloud migration setup, data replication, data upgrade, Azure Data Factory pipelines, a self-hosted integration runtime and the intelligent cloud permission set.

The Managing cloud migration page describes the Cloud Migration Management page, where you run data replication and data upgrade, edit the cloud migration setup, map users, and use troubleshooting actions such as a diagnostic run and resetting cloud data.

The third page covers a separate option for version 14 on-premises: the reimplementation tool. It moves only essential business data and does not require converting customizations. Start with the end-to-end overview, then read the management page, and consider the reimplementation tool if you are on version 14 and want a lighter path.

## Key points

- The end-to-end migration has five phases, from preparation through completion and go-live.
- Key components include Azure Data Factory pipelines, a self-hosted integration runtime and the intelligent cloud permission set.
- The process includes cloud migration setup, data replication and data upgrade.
- The Cloud Migration Management page lets you run replication and upgrade, and map users.
- Troubleshooting actions include a diagnostic run and resetting cloud data.
- The version 14 reimplementation tool migrates only essential business data and needs no customization conversion.
- The reimplementation tool covers master data, opening balances, setup data and custom tables, with module disable settings.

## Learn pages

- [Business Central 14 Reimplementation tool for cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-bc14-reimplementation): Learn about the Business Central 14 reimplementation tool that migrates only essential data from Business Central 14 on-premises to Business Central online.
- [Business Central on-premises to online migration overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-business-central-on-premises): This article provides an overview of how the migration works from Business Central on-premises and the necessary tasks for completing the migration.
- [Managing cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-manage): Describes the Cloud Migration Management page in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
