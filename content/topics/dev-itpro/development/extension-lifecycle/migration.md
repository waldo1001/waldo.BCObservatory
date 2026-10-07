---
id: topic/dev-itpro/development/extension-lifecycle/migration
type: topic
title: Migration
summary: "Migration in the Business Central extension lifecycle: generating .delta files with Compare-NAVApplicationObject for conversion to extensions, and moving table and field data between extensions on-premises. It answers questions about delta generation, migration.json, dependency direction, transition extensions and synchronization order."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:51.613Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: fae3662aa0b355610e04522de7a8dceff0d4fed25085e982b3c65b8e05b2ef62
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-generating-delta-files
    title: Generating Delta files
    date: "2021-04-01"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-generating-delta-files
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle
    - topic/dev-itpro/development/extension-lifecycle/migration/migrating-tables-and-fields-between-exte
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Extension lifecycle
  - Migration
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle
children:
  - topic/dev-itpro/development/extension-lifecycle/migration/migrating-tables-and-fields-between-exte
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 4d474caeded31ac5afc7d7c82e64c4359ea65d4a650817182d41771c8d0731c4
narrative: generated
---

# Migration

> Migration in the Business Central extension lifecycle: generating .delta files with Compare-NAVApplicationObject for conversion to extensions, and moving table and field data between extensions on-premises. It answers questions about delta generation, migration.json, dependency direction, transition extensions and synchronization order.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Migration · tier official · system development · narrative reviewed by Opus

## Overview

This section covers two migration tasks in the extension lifecycle. The first is producing delta files from application object versions, using the Compare-NAVApplicationObject PowerShell cmdlet. The second, in a subtopic, is moving table and field data from a releasing extension to a receiving extension in on-premises Business Central.

Start with the "Generating Delta files" page if you are converting existing application objects to extensions, since the delta output feeds the Txt2Al conversion tool. Go to the subtopic on migrating tables and fields between extensions when data must move from one extension to another. It explains the migration.json file, the direction of the dependency graph, transition extensions and synchronization ordering.

## Key points

- Compare-NAVApplicationObject generates .delta files from application object versions.
- The ExportToNewSyntax flag is required when the deltas will be converted to extensions with the Txt2Al conversion tool.
- The subtopic covers moving table and field data from a releasing extension to a receiving extension.
- Table and field migration between extensions applies to on-premises Business Central.
- The subtopic explains the migration.json file, dependency graph direction, transition extensions and synchronization ordering.
- The subtopic has 4 pages; the hub has 1 own page on delta files.

## Subtopics

- [Migrating tables and fields between extensions (on-premises)](migration/migrating-tables-and-fields-between-exte.md) (4 pages)

## More Learn pages

- [Generating Delta files](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-generating-delta-files): Description of how to generate delta files with the ExportToNewSyntax flag.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
