---
id: topic/dev-itpro/business-central-on-premises/upgrade/related-articles/migrating-tables-and-fields-between-exte
type: topic
title: Migrating tables and fields between extensions
summary: Migrating tables and fields between Business Central extensions using migration.json, in both directions along the dependency graph, plus the India Data Migration Toolkit for upgrading from Dynamics NAV 2016 India. It answers questions about moving table ownership, ordering, and constraints.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:40.654Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a86d255e5f695597678b29a4003b462dff2d5feed83b36811d415865fc8b9acc
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/india-data-migration-toolkit-overview
    title: India Data migration Toolkit Overview
    date: "2022-02-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields
    title: Migrating Tables and Fields Between Extensions
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down
    title: Moving Tables and Fields to Extensions Down the Dependency Graph
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up
    title: Moving Tables and Fields to Extensions Up the Dependency Graph
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/india-data-migration-toolkit-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade/related-articles
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Related articles
  - Migrating tables and fields between extensions
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade/related-articles
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 19010
member_hash: 684e364b87fe0d8cc297c12a7c0b1fca2797bd655843debfdcaaf88d8f1f61c7
narrative: generated
---

# Migrating tables and fields between extensions

> Migrating tables and fields between Business Central extensions using migration.json, in both directions along the dependency graph, plus the India Data Migration Toolkit for upgrading from Dynamics NAV 2016 India. It answers questions about moving table ownership, ordering, and constraints.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Upgrade](../../upgrade.md) > [Related articles](../related-articles.md) > Migrating tables and fields between extensions · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers how to move table and field data from one extension to another during development and deployment. The general page explains the constraints, the roles of the releasing and receiving extensions, the direction of the dependency graph, how the migration.json file is used, and the order of synchronization.

Two task pages follow from that. One covers moving tables and fields to an extension down the dependency graph, where ownership goes to an extension lower in the dependency chain. The other covers moving them up the dependency graph, which needs a transition extension and a two-stage deployment. Start with the general page, then pick the page that matches the direction of your move.

A separate page describes the India Data Migration Toolkit, which supports upgrading from Dynamics NAV 2016 India version to Business Central 2021 release wave 2 in two steps. It covers localization data, not customizations.

## Key points

- The general page defines the releasing and receiving extensions, dependency direction, and synchronization ordering for table and field migration.
- migration.json is the file used to describe the transfer of table ownership between extensions.
- Moving down the dependency graph transfers ownership to an extension lower in the dependency chain; it involves table extension objects, data preservation, and field renames (2020 release wave 1 version 16.5).
- Moving up the dependency graph uses a transition extension and a two-stage deployment, and mentions enum type fields (2020 release wave 1 version 16.5).
- The India Data Migration Toolkit upgrades Dynamics NAV 2016 India version to Business Central 2021 release wave 2.
- The India toolkit uses a two-step migration, covers localization data but not customizations, and involves deprecated table handling and permissions reconfiguration.

## Learn pages

- [India Data migration Toolkit Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/india-data-migration-toolkit-overview): Specifies India Data Migration Toolkit Overview
- [Migrating Tables and Fields Between Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields): Explains how to migrate tables and fields from one extension to another.
- [Moving Tables and Fields to Extensions Down the Dependency Graph](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down): Explains how to move tables and fields from an extension to another extension that is down the dependency graph.
- [Moving Tables and Fields to Extensions Up the Dependency Graph](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up): Explains how to move tables and fields from an extension to another extension that is up the dependency graph

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/19010.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
