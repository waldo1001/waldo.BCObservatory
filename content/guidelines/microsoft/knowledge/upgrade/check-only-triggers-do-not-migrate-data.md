---
id: guideline/microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data
type: guideline
title: Upgrade check triggers do not migrate data
summary: OnCheckPreconditionsPerCompany/PerDatabase run before the upgrade to verify that it can start. OnValidateUpgradePerCompany/PerDatabase run after upgrade logic to verify that it succeeded. Treat both phases as read-only checks.
tier: official
language: en
tags:
  - on-check-preconditions
  - on-validate-upgrade
  - on-upgrade
  - read-only-check
  - data-migration
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:08.415Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8770f93710816552149c2efdbfab71456c992853
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data.md
    title: "microsoft/BCQuality: Upgrade check triggers do not migrate data"
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
    - change/bcquality/99
repo_path: microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data.md
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
  - OnCheckPreconditionsPerCompany
  - PerDatabase
  - OnValidateUpgradePerCompany
  - OnUpgradePerCompany
  - DataTransfer
---

# Upgrade check triggers do not migrate data

> OnCheckPreconditionsPerCompany/PerDatabase run before the upgrade to verify that it can start. OnValidateUpgradePerCompany/PerDatabase run after upgrade logic to verify that it succeeded. Treat both phases as read-only checks.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

`OnCheckPreconditionsPerCompany`/`PerDatabase` run before the upgrade to verify that it can start. `OnValidateUpgradePerCompany`/`PerDatabase` run after upgrade logic to verify that it succeeded. Treat both phases as read-only checks. The `OnUpgradePerCompany`/`PerDatabase` phase is where the platform expects actual data transformation.

## Best Practice

Have check triggers call query-only helpers that raise an error when an invariant fails. Put every `Insert`, `Modify`, `Delete`, `Rename`, `DataTransfer`, and other migration write behind helpers called from the matching `OnUpgrade...` trigger.

See sample: [`check-only-triggers-do-not-migrate-data.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data.good.al).

## Anti Pattern

Repairing data in `OnCheckPreconditions...` or finishing migration in `OnValidateUpgrade...`. Those writes blur the phase contract and make a check alter the state it is supposed to assess.

See sample: [`check-only-triggers-do-not-migrate-data.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data.bad.al).

## Examples

- [Good: check-only-triggers-do-not-migrate-data.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data.good.al)
- [Bad: check-only-triggers-do-not-migrate-data.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/check-only-triggers-do-not-migrate-data.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
