---
id: guideline/microsoft/knowledge/upgrade/upgrade-codeunit-subtype
type: guideline
title: Upgrade logic must live in a codeunit with `Subtype = Upgrade`
summary: A codeunit only participates in the upgrade pipeline when it sets Subtype = Upgrade. The platform then permits and dispatches the OnUpgradePerCompany and OnUpgradePerDatabase triggers on that codeunit during upgrade.
tier: official
language: en
tags:
  - upgrade-codeunit
  - subtype
  - on-upgrade-per-company
  - on-upgrade-per-database
  - trigger
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:15.405Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8bf558dc8f0d3e92d54670aa1652ccd7a8894280
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/upgrade-codeunit-subtype.md
    title: "microsoft/BCQuality: Upgrade logic must live in a codeunit with `Subtype = Upgrade`"
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
    - change/bcquality/93
repo_path: microsoft/knowledge/upgrade/upgrade-codeunit-subtype.md
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
  - OnUpgradePerCompany
  - OnUpgradePerDatabase
  - RunUpgrade
---

# Upgrade logic must live in a codeunit with `Subtype = Upgrade`

> A codeunit only participates in the upgrade pipeline when it sets Subtype = Upgrade. The platform then permits and dispatches the OnUpgradePerCompany and OnUpgradePerDatabase triggers on that codeunit during upgrade.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/upgrade-codeunit-subtype.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

A codeunit only participates in the upgrade pipeline when it sets `Subtype = Upgrade`. The platform then permits and dispatches the `OnUpgradePerCompany` and `OnUpgradePerDatabase` triggers on that codeunit during upgrade. A normal codeunit can contain an upgrade-like `RunUpgrade` procedure, but the platform does not discover or invoke it automatically. Conversely, any procedure invoked transitively from an `OnUpgrade...` trigger of an upgrade codeunit is upgrade code regardless of where the helper lives, and the upgrade rules apply to it.

## Best Practice

Place every piece of upgrade logic in a codeunit declared with `Subtype = Upgrade;` and expose entry points via the two triggers `OnUpgradePerCompany` and `OnUpgradePerDatabase`. Helper procedures may live in normal codeunits, but they inherit the upgrade-context rules (guarded reads, no external calls, upgrade tags, etc.) when called from an upgrade trigger.

See sample: [`upgrade-codeunit-subtype.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/upgrade-codeunit-subtype.good.al).

## Anti Pattern

Putting upgrade-style logic in a regular codeunit that the platform never invokes during upgrade — for example a normal codeunit with a manually invented "RunUpgrade" procedure that nothing wires to the upgrade pipeline. The migration code will simply not run.

See sample: [`upgrade-codeunit-subtype.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/upgrade-codeunit-subtype.bad.al).

## Examples

- [Good: upgrade-codeunit-subtype.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/upgrade-codeunit-subtype.good.al)
- [Bad: upgrade-codeunit-subtype.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/upgrade-codeunit-subtype.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
