---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/upgrade-data
type: topic
title: Upgrade data
summary: Upgrade data covers running data upgrade during cloud migration from earlier Business Central on-premises versions, and how to skip the API data upgrade to shorten upgrade time. It answers questions on prerequisites, process, error handling, monitoring, and per-company disabling of API upgrade.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:41.499Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0a342646d08f02686c41a0c4520ca4bb26f53500572af345474e6175153c6161
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade
    title: Run data upgrade
    date: "2023-02-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade
    title: Skip API data upgrade in cloud migration
    date: "2023-12-12"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade
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
  - Upgrade data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6253fe23963480b12c7b988cbdc780078c9ba6332c7a4a845e4e83995e5ee95e
narrative: generated
---

# Upgrade data

> Upgrade data covers running data upgrade during cloud migration from earlier Business Central on-premises versions, and how to skip the API data upgrade to shorten upgrade time. It answers questions on prerequisites, process, error handling, monitoring, and per-company disabling of API upgrade.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Upgrade data · tier official · system platform · narrative reviewed by Opus

## Overview

This section belongs to the migration path from Business Central on-premises to Business Central online. It deals with the data upgrade step, which upgrades platform-related data when you migrate from earlier Business Central versions.

Two pages make up the section. "Run data upgrade" describes the prerequisites, the process, how errors are handled, and how to monitor the upgrade, including telemetry and point-in-time restore. "Skip API data upgrade in cloud migration" is a focused option for cases where the upgrade runs too long.

Start with "Run data upgrade" to understand the full flow. Read the skip API page if long-running upgrade times are a concern, since it explains how to postpone the API upgrade until after go-live.

## Key points

- Data upgrade during cloud migration upgrades platform-related data when migrating from earlier Business Central versions.
- The Run data upgrade page covers prerequisites, process, error handling, and monitoring.
- Point-in-time restore and telemetry are mentioned in connection with running and monitoring the upgrade.
- Skipping API data upgrade reduces long-running upgrade times.
- With the skip option, the API upgrade is disabled during cloud migration and run after going live.
- In Business Central online, disable it through Cloud Migration Management.
- On-premises, disable it with SQL queries.
- The setting is applied on a per-company basis.

## Learn pages

- [Run data upgrade](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade): This article explains the process for running the data upgrade as part of cloud migration.
- [Skip API data upgrade in cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade): This article explains things you can skip the API data upgrade during cloud migration and complete it after going live

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
