---
id: guideline/microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations
type: guideline
title: "`OnUpgradePerCompany` / `OnUpgradePerDatabase` should call helpers, not inline logic"
summary: The OnUpgradePerCompany and OnUpgradePerDatabase triggers on an upgrade codeunit are dispatch points, not implementation slots. They should contain only calls to named local procedures — one call per feature being upgraded.
tier: official
language: en
tags:
  - on-upgrade-per-company
  - on-upgrade-per-database
  - trigger-body
  - helper-procedure
  - structure
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:10.528Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 078e10903cba4552a165d49dfaaa598a22a1c938
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations.md
    title: "microsoft/BCQuality: `OnUpgradePerCompany` / `OnUpgradePerDatabase` should call helpers, not inline logic"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations.md
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
  - ModifyAll
---

# `OnUpgradePerCompany` / `OnUpgradePerDatabase` should call helpers, not inline logic

> The OnUpgradePerCompany and OnUpgradePerDatabase triggers on an upgrade codeunit are dispatch points, not implementation slots. They should contain only calls to named local procedures — one call per feature being upgraded.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

The `OnUpgradePerCompany` and `OnUpgradePerDatabase` triggers on an upgrade codeunit are dispatch points, not implementation slots. They should contain only calls to named local procedures — one call per feature being upgraded. Putting `ModifyAll`, record loops, or any business logic directly inside the trigger body makes the upgrade impossible to read, impossible to selectively skip via upgrade tags per feature, and impossible to extend without touching the trigger itself.

Empty `OnUpgradePerCompany` / `OnUpgradePerDatabase` triggers are acceptable — they may be placeholders for future use or artifacts from cleanup.

## Best Practice

Each upgrade trigger contains an ordered list of procedure calls, one per feature: `UpgradeFeatureA();` `UpgradeFeatureB();`. Each procedure handles its own upgrade tag, its own data work, and can be added or removed independently.

See sample: [`triggers-call-helpers-not-implementations.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations.good.al).

## Anti Pattern

Implementing record loops, `ModifyAll`, or other data work directly in the trigger body. The trigger then mixes orchestration with implementation, and adding a second feature requires editing the trigger rather than appending one line.

See sample: [`triggers-call-helpers-not-implementations.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations.bad.al).

## Examples

- [Good: triggers-call-helpers-not-implementations.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations.good.al)
- [Bad: triggers-call-helpers-not-implementations.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/triggers-call-helpers-not-implementations.bad.al)

## Names

- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
