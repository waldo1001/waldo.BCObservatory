---
id: topic/dev-itpro/deprecated-features/deprecated-tables
type: topic
title: Deprecated tables
summary: Deprecated tables in Business Central covers tables that were deprecated, with mappings to new table names for code rewrites from 2020 release wave 1 onward, plus a list of deprecated tables in the India version for 2021 release wave 2. It answers which tables are obsolete, what replaces them, and when data migration may be needed.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:05.439Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: fda01e4053609688fb6b999b04532384c8e2269be60b6263453173cbb5f876b7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-tables
    title: Deprecated Tables
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/india-data-migration-list-of-deprecated-tables
    title: List of deprecated tables
    date: "2021-09-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-tables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/india-data-migration-list-of-deprecated-tables
  objects: []
  features: []
  topics:
    - topic/dev-itpro/deprecated-features
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Deprecated features
  - Deprecated tables
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/deprecated-features
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 741d69d143d74743e9d341ad77d8103e91ad249ec10cc2fd7144f6e3c01e4b81
narrative: generated
---

# Deprecated tables

> Deprecated tables in Business Central covers tables that were deprecated, with mappings to new table names for code rewrites from 2020 release wave 1 onward, plus a list of deprecated tables in the India version for 2021 release wave 2. It answers which tables are obsolete, what replaces them, and when data migration may be needed.

Path: [Deprecated features](../deprecated-features.md) > Deprecated tables · tier official · system none · narrative reviewed by Opus

## Overview

This section lists tables that Business Central has deprecated. It has two pages. The general page maps old table names to new ones, so developers know which code must be rewritten. It covers changes from 2020 release wave 1 and later, including 2021 release wave 2, and refers to the ObsoleteState values Pending and Removed.

The second page is specific to the India version in 2021 release wave 2. It gives the table numbers and names of deprecated tables. It notes that manual data migration may be needed if custom fields were added to those tables.

Start with the general Deprecated Tables page to find the replacement for a table your code uses. If you work with the India localization, then check the India list to see whether your customizations are affected.

## Key points

- The Deprecated Tables page maps old table names to new table names for code that must be rewritten.
- Coverage starts with 2020 release wave 1 and includes 2021 release wave 2.
- Deprecation is tracked with ObsoleteState values such as Pending and Removed.
- A separate list covers deprecated tables in the India version of 2021 release wave 2.
- The India list shows table numbers and names.
- Custom fields added to deprecated India tables may require manual data migration.

## Learn pages

- [Deprecated Tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-tables): Shows the tables that have been marked as removed in the various versions of Business Central.
- [List of deprecated tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/india-data-migration-list-of-deprecated-tables): Specifies list of deprecated tables

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
