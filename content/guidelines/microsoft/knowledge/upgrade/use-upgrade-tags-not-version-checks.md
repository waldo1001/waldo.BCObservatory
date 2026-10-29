---
id: guideline/microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks
type: guideline
title: Control upgrade execution with upgrade tags, not version checks
summary: "Each piece of upgrade logic must run exactly once per company (or database) across the lifetime of an extension. The platform mechanism for that is the Upgrade Tag codeunit: a procedure asks HasUpgradeTag(MyTag()) at entry, performs its work, then calls SetUpgradeTag(MyTag()) to record completion."
tier: official
language: en
tags:
  - upgrade-tag
  - version-check
  - dataversion
  - has-upgrade-tag
  - set-upgrade-tag
  - control-flow
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:15.374Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bb7649f5c2d1eed9ede06d9f3f5eaca7435c6cb3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks.md
    title: "microsoft/BCQuality: Control upgrade execution with upgrade tags, not version checks"
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
  related:
    - to: object/codeunit/9999
      title: codeunit 9999 "Upgrade Tag"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks.md
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
  - HasUpgradeTag
  - SetUpgradeTag
---

# Control upgrade execution with upgrade tags, not version checks

> Each piece of upgrade logic must run exactly once per company (or database) across the lifetime of an extension. The platform mechanism for that is the Upgrade Tag codeunit: a procedure asks HasUpgradeTag(MyTag()) at entry, performs its work, then calls SetUpgradeTag(MyTag()) to record completion.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Each piece of upgrade logic must run exactly once per company (or database) across the lifetime of an extension. The platform mechanism for that is the `Upgrade Tag` codeunit: a procedure asks `HasUpgradeTag(MyTag())` at entry, performs its work, then calls `SetUpgradeTag(MyTag())` to record completion. Subsequent upgrades on the same tenant see the tag and skip the work. Hand-rolled `if MyApp.DataVersion().Major < N then ...` chains are the wrong tool: they are version-coupled, accumulate stale branches over time, and break when a tenant skips a version.

## Best Practice

Every upgrade procedure starts with a `HasUpgradeTag` guard and ends with `SetUpgradeTag` once the work is committed. Each feature gets its own tag string so features can be re-run independently if needed.

See sample: [`use-upgrade-tags-not-version-checks.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks.good.al).

## Anti Pattern

Branching on `MyApp.DataVersion().Major > N`, or chains of `< N` / `< M` to decide which upgrade step to run. Such code becomes unmaintainable after a few releases and silently does the wrong thing on tenants that skip versions.

See sample: [`use-upgrade-tags-not-version-checks.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks.bad.al).

## See also

- `first-install-dataversion-zero-check.md` — the one situation where reading `DataVersion()` is the right call.
- `register-upgrade-tags-with-subscribers.md` — how to make a tag known to the platform.

## Examples

- [Good: use-upgrade-tags-not-version-checks.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks.good.al)
- [Bad: use-upgrade-tags-not-version-checks.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/use-upgrade-tags-not-version-checks.bad.al)

## Names

- [codeunit 9999 "Upgrade Tag"](../../../../objects/codeunit/9999.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
