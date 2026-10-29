---
id: guideline/microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers
type: guideline
title: Keep upgrade validation checks bounded
summary: Triggers such as OnValidateUpgradePerCompany run on every upgrade pass. A full-table scan or cross-table validation therefore adds cost to every upgrade of every tenant. Validation is a read-only lifecycle check, so it cannot make itself one-time by writing an upgrade tag.
tier: official
language: en
tags:
  - on-validate-upgrade-per-company
  - performance-impact
  - bounded-query
  - justification
  - read-only-check
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.839Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3095655d3ddc8f20fd9b48de587641fc1bf23f3c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers.md
    title: "microsoft/BCQuality: Keep upgrade validation checks bounded"
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
repo_path: microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers.md
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
  - OnValidateUpgradePerCompany
  - IsEmpty
---

# Keep upgrade validation checks bounded

> Triggers such as OnValidateUpgradePerCompany run on every upgrade pass. A full-table scan or cross-table validation therefore adds cost to every upgrade of every tenant. Validation is a read-only lifecycle check, so it cannot make itself one-time by writing an upgrade tag.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Triggers such as `OnValidateUpgradePerCompany` run on every upgrade pass. A full-table scan or cross-table validation therefore adds cost to every upgrade of every tenant. Validation is a read-only lifecycle check, so it cannot make itself one-time by writing an upgrade tag.

## Best Practice

Filter directly to invalid rows and use `IsEmpty` or another bounded existence check where possible. If a broad validation is unavoidable, document the invariant that requires it and keep all data changes in `OnUpgrade...`.

See sample: [`minimize-onvalidate-upgrade-triggers.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers.good.al).

## Anti Pattern

Reading every record in `OnValidateUpgradePerCompany` when a filtered existence check can prove the same invariant. The scan repeats on every upgrade.

See sample: [`minimize-onvalidate-upgrade-triggers.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers.bad.al).

## Examples

- [Good: minimize-onvalidate-upgrade-triggers.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers.good.al)
- [Bad: minimize-onvalidate-upgrade-triggers.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/minimize-onvalidate-upgrade-triggers.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
