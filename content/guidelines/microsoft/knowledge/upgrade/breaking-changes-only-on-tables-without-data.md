---
id: guideline/microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data
type: guideline
title: Primary-key and field-type changes are safe only on tables without existing data
summary: Primary-key changes and field-type changes (for example widening Integer to BigInteger) rewrite the on-disk layout of every row in the table. On a new feature table that ships in the same change as the modification, no rows exist and the change is free.
tier: official
language: en
tags:
  - primary-key
  - field-type
  - breaking-change
  - integer-to-biginteger
  - existing-data
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:08.476Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5efc751f78eb90c6b715550a6ca65d3ab406cab2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data.md
    title: "microsoft/BCQuality: Primary-key and field-type changes are safe only on tables without existing data"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data.md
layer: microsoft
kind: rule
domain: upgrade
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - BigInteger
  - DataTransfer
---

# Primary-key and field-type changes are safe only on tables without existing data

> Primary-key changes and field-type changes (for example widening Integer to BigInteger) rewrite the on-disk layout of every row in the table. On a new feature table that ships in the same change as the modification, no rows exist and the change is free.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Primary-key changes and field-type changes (for example widening `Integer` to `BigInteger`) rewrite the on-disk layout of every row in the table. On a new feature table that ships in the same change as the modification, no rows exist and the change is free. On an existing table that already holds tenant data — base-app tables, ledger entries, anything that has been live across releases — the same change can fail outright (key uniqueness violations, value overflow on conversion) or require a full table rewrite during the upgrade window. Either way, the change needs an explicit migration design, not just a metadata edit.

## Best Practice

Treat primary-key and field-type changes as restricted to tables introduced in the same change. For changes on tables with existing data, design and ship the corresponding upgrade procedure (typically backed by `DataTransfer` and an upgrade tag) that guarantees the new layout is achievable for every row, and verify with concrete evidence that the existing values fit the new constraint (no PK collisions, no value-range overflow).

See sample: [`breaking-changes-only-on-tables-without-data.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data.good.al).

## Anti Pattern

Changing the primary key on a base-app table, or widening / narrowing a field type on a table that has been shipping for releases, with no accompanying upgrade plan. The change compiles cleanly and may even deploy on an empty-ish tenant, then fails on customers who actually have data.

See sample: [`breaking-changes-only-on-tables-without-data.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data.bad.al).

## Examples

- [Good: breaking-changes-only-on-tables-without-data.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data.good.al)
- [Bad: breaking-changes-only-on-tables-without-data.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/breaking-changes-only-on-tables-without-data.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
