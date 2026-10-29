---
id: guideline/microsoft/knowledge/upgrade/first-install-dataversion-zero-check
type: guideline
title: Detect first install with `DataVersion() = Version.Create('0.0.0.0')`
summary: "On the first install of an extension on a tenant the platform records a zero data version: AppInfo.DataVersion() returns Version.Create('0.0.0.0'). During reinstall, DataVersion() identifies the previously installed data version."
tier: official
language: en
tags:
  - dataversion
  - first-install
  - on-install-app-per-company
  - moduleinfo
  - zero-version
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.196Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5cbdec8c4f890de44c906c742309f2f4babedf2d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/first-install-dataversion-zero-check.md
    title: "microsoft/BCQuality: Detect first install with `DataVersion() = Version.Create('0.0.0.0')`"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/moduleinfo/moduleinfo-dataversion-method
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
repo_path: microsoft/knowledge/upgrade/first-install-dataversion-zero-check.md
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
  - OnInstallAppPerCompany
  - ModuleInfo
  - DataVersion
---

# Detect first install with `DataVersion() = Version.Create('0.0.0.0')`

> On the first install of an extension on a tenant the platform records a zero data version: AppInfo.DataVersion() returns Version.Create('0.0.0.0'). During reinstall, DataVersion() identifies the previously installed data version.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/first-install-dataversion-zero-check.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

On the first install of an extension on a tenant the platform records a zero data version: `AppInfo.DataVersion()` returns `Version.Create('0.0.0.0')`. During reinstall, `DataVersion()` identifies the previously installed data version. The `OnInstallAppPerCompany` trigger uses this distinction to separate a brand-new install from a reinstall. Ordinary version upgrades do not run install code.

## Best Practice

In `OnInstallAppPerCompany`, fetch the current `ModuleInfo` via `NavApp.GetCurrentModuleInfo`, compare `AppInfo.DataVersion()` to `Version.Create('0.0.0.0')`, and run first-install seed logic only when they match. On a non-zero data version, follow the reinstall path or exit.

See sample: [`first-install-dataversion-zero-check.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/first-install-dataversion-zero-check.good.al).

## Anti Pattern

Treating `OnInstallAppPerCompany` as if it always implies "fresh tenant". The trigger also fires when reinstalling over an existing data set; without the `0.0.0.0` guard, first-install seed code can run again and duplicate rows.

See sample: [`first-install-dataversion-zero-check.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/first-install-dataversion-zero-check.bad.al).

## See also

- `use-upgrade-tags-not-version-checks.md` — for upgrade steps after first install, use upgrade tags rather than `DataVersion`.
- `install-code-does-not-run-on-version-upgrade.md` — ordinary version upgrades invoke upgrade code, not install code.

## Examples

- [Good: first-install-dataversion-zero-check.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/first-install-dataversion-zero-check.good.al)
- [Bad: first-install-dataversion-zero-check.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/first-install-dataversion-zero-check.bad.al)

## Names

- [ModuleInfo.DataVersion() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/moduleinfo/moduleinfo-dataversion-method) (names DataVersion)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
