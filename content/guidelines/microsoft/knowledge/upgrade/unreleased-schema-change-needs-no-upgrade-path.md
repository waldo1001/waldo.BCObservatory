---
id: guideline/microsoft/knowledge/upgrade/unreleased-schema-change-needs-no-upgrade-path
type: guideline
title: Unreleased schema changes need no upgrade or migration path
summary: Upgrade and migration findings protect data and schema that have already shipped to customers.
tier: official
language: en
tags:
  - released-baseline
  - unreleased
  - schema
  - migration
  - obsolete
  - data-loss
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:18.169Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 248943fe9a981500b125229b0925ef5f6325438c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/unreleased-schema-change-needs-no-upgrade-path.md
    title: "microsoft/BCQuality: Unreleased schema changes need no upgrade or migration path"
    date: "2026-07-17"
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
    - change/bcquality/112
repo_path: microsoft/knowledge/upgrade/unreleased-schema-change-needs-no-upgrade-path.md
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
examples: 0
identifiers: []
---

# Unreleased schema changes need no upgrade or migration path

> Upgrade and migration findings protect data and schema that have already shipped to customers.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/unreleased-schema-change-needs-no-upgrade-path.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Upgrade and migration findings protect data and schema that have already shipped to customers. A schema element — a table, field, key, or enum — that is new in this app, or was added and then changed within the same still-unreleased development cycle, needs no upgrade code or migration path: no customer has data in it yet, so there is nothing to preserve or migrate. Such a change is not an obsoletion, data-loss, or breaking-migration defect.

Release status is established from the diff, the app's `app.json` version, or a released baseline. A schema element with no released baseline has no persisted customer data to protect.

## Best Practice

Before asserting an obsoletion, data-loss, or breaking-migration defect, establish that the affected table, field, key, or enum existed in a released version. Do not require upgrade or migration code for schema that never shipped. When release status cannot be established from the diff, `app.json`, or a released baseline, omit the finding rather than demand a migration path.

## Anti Pattern

Demanding an upgrade codeunit, migration path, or data-preservation step, or flagging data loss, for a table, field, key, or enum that is new in the current unreleased cycle and has no released baseline.

## Changed by

- [#112 Add precision guards for systematic agent false-positive patterns](../../../../changes/bcquality/112.md), 2026-07-17

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
