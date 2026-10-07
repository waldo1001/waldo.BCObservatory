---
id: topic/dev-itpro/business-central-on-premises/upgrade/related-articles
type: topic
title: Related articles
summary: "Related upgrade articles for Business Central on-premises: converting version 14 C/AL code to AL with the Txt2Al tool, and migrating tables and fields between extensions with migration.json. It answers questions about code conversion steps, table ownership moves, ordering and constraints, and the India Data Migration Toolkit."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:50.629Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 826f0c8e314c3a468d8744bced8c2f9ba84facd9b2a835002255b1e5aece2cf5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/devenv-code-conversion
    title: Code Conversion from C/AL to AL
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/devenv-code-conversion
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/upgrade
    - topic/dev-itpro/business-central-on-premises/upgrade/related-articles/migrating-tables-and-fields-between-exte
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Upgrade
  - Related articles
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/upgrade
children:
  - topic/dev-itpro/business-central-on-premises/upgrade/related-articles/migrating-tables-and-fields-between-exte
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 19010
member_hash: 64160df9ab2b04c1113c3e3223f59ef8f21a2cdfc59645055b656076c6ebce97
narrative: generated
---

# Related articles

> Related upgrade articles for Business Central on-premises: converting version 14 C/AL code to AL with the Txt2Al tool, and migrating tables and fields between extensions with migration.json. It answers questions about code conversion steps, table ownership moves, ordering and constraints, and the India Data Migration Toolkit.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Upgrade](../upgrade.md) > Related articles · tier official · system platform · narrative reviewed by Opus

## Overview

This section collects supporting articles for upgrading Business Central on-premises. They cover two tasks: turning customized C/AL code into AL, and moving tables and fields from one extension to another.

The code conversion page explains how to convert customized version 14 C/AL solutions to AL with the Txt2Al conversion tool, as part of upgrading to later versions. It covers object export, AL project setup, .NET interoperability, assembly declarations and test library conversion. It also references versions 18, 19 and 20.

The subtopic on migrating tables and fields describes using migration.json to move table ownership between extensions, in both directions along the dependency graph, including ordering and constraints. It also covers the India Data Migration Toolkit for upgrading from Dynamics NAV 2016 India. Start with the code conversion page if you still have C/AL code, and use the migration subtopic when restructuring extensions.

## Key points

- Code conversion targets customized on-premises version 14 C/AL solutions, converting them to AL as part of upgrading to later versions.
- The Txt2Al conversion tool performs the C/AL to AL conversion.
- The conversion page covers object export, AL project setup, .NET interoperability, assembly declarations and test library conversion.
- Versions 18, 19 and 20 are referenced in the code conversion guidance.
- migration.json is used to migrate tables and fields between extensions.
- Table migration works in both directions along the extension dependency graph, with rules on ordering and constraints.
- The India Data Migration Toolkit supports upgrading from Dynamics NAV 2016 India.

## Subtopics

- [Migrating tables and fields between extensions](related-articles/migrating-tables-and-fields-between-exte.md) (4 pages)

## More Learn pages

- [Code Conversion from C/AL to AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/devenv-code-conversion): Description of the conversion process from C/AL to AL.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/19010.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
