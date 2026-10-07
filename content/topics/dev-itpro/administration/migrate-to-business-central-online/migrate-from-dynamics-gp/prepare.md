---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-gp/prepare
type: topic
title: Prepare
summary: Preparation for migrating from Dynamics GP on-premises to Business Central online. It covers prerequisites for the destination and source systems, plus planning guidance on strategy, assessment, data scope, and migration approach. It answers what is needed before starting and how to plan.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
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

> Preparation for migrating from Dynamics GP on-premises to Business Central online. It covers prerequisites for the destination and source systems, plus planning guidance on strategy, assessment, data scope, and migration approach. It answers what is needed before starting and how to plan.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics GP](../migrate-from-dynamics-gp.md) > Prepare · tier official · system administration · **unreviewed** (machine-generated narrative)

## Overview

This section is the first step of the Dynamics GP to Business Central online migration path. It has two pages: one on prerequisites and one on preparing and planning the migration.

Start with the planning page to define the migration strategy, run the migration assessment tool, and decide which data to move. Then use the prerequisites page to check the destination environment, the source system requirements, and the infrastructure needed for a self-hosted integration runtime.

## Key points

- Prerequisites cover the destination Business Central environment, the source GP system, and infrastructure for the self-hosted integration runtime.
- The Intelligent Cloud Base app and the Dynamics GP Intelligent Cloud app are part of the setup requirements.
- SQL Server authentication is among the source system requirements.
- The planning page recommends using the migration assessment tool to help define strategy.
- Data scope is determined with company-based data migration in mind.
- Planning covers the migration approach, including backup, replication, and data upgrade steps.
- Azure Data Lake backup and data backup migration are covered as part of planning and prerequisites.

## Learn pages

- [Cloud Migration Prerequisites for Dynamics GP](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-prerequisites-gp): This article outlines requirements on the Dynamics GP on-premises and online environments for cloud migration.
- [Prepare and plan for cloud migration from Dynamics GP](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-plan-prepare-gp): This article provides recommendations to help you define your cloud migration strategy and get environments and users ready for Dynamics GP cloud migration.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
