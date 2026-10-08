---
id: topic/dev-itpro/development/extension-lifecycle/migration/migrating-tables-and-fields-between-exte
type: topic
title: Migrating tables and fields between extensions (on-premises)
summary: "Migrating tables and fields between extensions in on-premises Business Central: how to move table and field data from a releasing extension to a receiving extension. It answers questions about the migration.json file, dependency graph direction, transition extensions, and synchronization ordering."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:44.415Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c5f0ae5348e9cff7583e387127cf4bf5adc0a772024029e46f0e8e364d72b745
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields
    title: Migrating Tables and Fields Between Extensions
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file
    title: Migration JSON file
    date: "2025-05-02"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle/migration
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Extension lifecycle
  - Migration
  - Migrating tables and fields between extensions (on-premises)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle/migration
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 26bf8c4ba23f33a230e074e6506cbc550b9b0ed59dfbbe95e6875d3c4bd9e68d
narrative: generated
---

# Migrating tables and fields between extensions (on-premises)

> Migrating tables and fields between extensions in on-premises Business Central: how to move table and field data from a releasing extension to a receiving extension. It answers questions about the migration.json file, dependency graph direction, transition extensions, and synchronization ordering.

Path: [Development](../../../development.md) > [Extension lifecycle](../../extension-lifecycle.md) > [Migration](../migration.md) > Migrating tables and fields between extensions (on-premises) · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This area explains how to move table and field data from one extension to another during development and deployment. The main page sets out the constraints, the roles of the releasing and receiving extensions, the direction of the dependency graph, and the order in which extensions are synchronized.

The other pages split the work by direction. One covers moving tables and fields to extensions down the dependency graph. The other covers moving them up the dependency graph, which needs a two-stage process with a transition extension. A separate page describes the migration.json file, which names the target app ID and drives the data migration. Both direction pages reference 2020 release wave 1 version 16.5.

Start with the overview page to understand the constraints and ordering. Then read the migration.json page, and finish with the page for the direction you need.

## Key points

- Data migration moves table and field data across extensions during development and deployment.
- The releasing extension gives up the table or field, and the receiving extension takes it over.
- The direction of the dependency graph decides which migration approach to use.
- The migration.json file specifies the target app ID to enable the migration.
- Moving down the dependency graph uses migration.json to transfer table ownership to a lower extension, with data preservation and field renames covered.
- Moving up the dependency graph is a two-stage deployment through a transition extension, and enum type fields are covered.
- Synchronization ordering between extensions is a documented constraint.
- The down and up pages both reference 2020 release wave 1 version 16.5.

## Learn pages

- [Migrating Tables and Fields Between Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields): Explains how to migrate tables and fields from one extension to another.
- [Migration JSON file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file): Description of the JSON file for data migration for AL in Business Central.
- [Moving Tables and Fields to Extensions Down the Dependency Graph](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-down): Explains how to move tables and fields from an extension to another extension that is down the dependency graph.
- [Moving Tables and Fields to Extensions Up the Dependency Graph](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-table-fields-up): Explains how to move tables and fields from an extension to another extension that is up the dependency graph

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
