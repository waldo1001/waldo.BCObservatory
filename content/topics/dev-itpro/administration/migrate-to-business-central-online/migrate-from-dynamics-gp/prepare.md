---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/prepare
type: topic
title: Prepare
summary: Preparation for migrating from Dynamics GP on-premises to Business Central online. Covers prerequisites for the destination environment, the source system and the self-hosted integration runtime infrastructure. Also covers planning recommendations on migration strategy, the migration assessment tool, data scope, and a migration approach that includes backup, replication and upgrade steps. Use it to check what is needed before starting and how to plan.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:51.387Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d7150ef39f5aa8ee2e71fdd67f99ffca83735d54f86129482b4d6bd481a9f20c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-gp
    title: Cloud Migration Prerequisites for Dynamics GP
    date: "2024-02-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-gp
    title: Prepare and plan for cloud migration from Dynamics GP
    date: "2024-02-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-gp
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-gp
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
  - Prepare
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a5c68536afa3a568ccb743ff87ea4d2d0c6a92ea7cba1c95ed9e082ea9fe6f8f
narrative: generated
---

# Prepare

> Preparation for migrating from Dynamics GP on-premises to Business Central online. Covers prerequisites for the destination environment, the source system and the self-hosted integration runtime infrastructure. Also covers planning recommendations on migration strategy, the migration assessment tool, data scope, and a migration approach that includes backup, replication and upgrade steps. Use it to check what is needed before starting and how to plan.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Prepare · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section sits under Migrate from Dynamics GP in the Business Central online migration documentation. It has two pages: one on prerequisites and one on preparing and planning the migration.\n\nThe planning page gives recommendations for defining a migration strategy, using the migration assessment tool, determining data scope, and planning the migration approach, including backup, replication and upgrade steps. The prerequisites page covers setup of the destination environment, source system requirements, and infrastructure needs for a self-hosted integration runtime.

## Key points

- Prerequisites cover the destination Business Central environment, the source GP system, and infrastructure for the self-hosted integration runtime.
- The Intelligent Cloud Base app and the Dynamics GP Intelligent Cloud app appear on the prerequisites page.
- SQL Server authentication and data backup migration are also covered on the prerequisites page.
- The planning page gives recommendations on defining a migration strategy and on using the migration assessment tool.
- Planning includes determining data scope. Company-based data migration is one of the topics on the planning page.
- The planned migration approach includes backup, replication and data upgrade steps.
- Azure Data Lake backup is covered on the planning page.

## Learn pages

- [Cloud Migration Prerequisites for Dynamics GP](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-gp): This article outlines requirements on the Dynamics GP on-premises and online environments for cloud migration.
- [Prepare and plan for cloud migration from Dynamics GP](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-gp): This article provides recommendations to help you define your cloud migration strategy and get environments and users ready for Dynamics GP cloud migration.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
