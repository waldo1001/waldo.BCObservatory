---
id: guideline/microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade
type: guideline
title: Install code does not run during a version upgrade
summary: An install codeunit runs when an extension is installed for the first time or an uninstalled version is installed again. Installing a higher extension version through the data-upgrade operation does not invoke OnInstallAppPerCompany or OnInstallAppPerDatabase.
tier: official
language: en
tags:
  - install-codeunit
  - subtype-install
  - on-install-app
  - version-upgrade
  - upgrade-codeunit
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.743Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 52c39891c1161bd6960e9b9b23c76505dd30def1
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.md
    title: "microsoft/BCQuality: Install code does not run during a version upgrade"
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
repo_path: microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.md
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
  - OnInstallAppPerDatabase
  - OnUpgradePerCompany
  - OnUpgradePerDatabase
---

# Install code does not run during a version upgrade

> An install codeunit runs when an extension is installed for the first time or an uninstalled version is installed again. Installing a higher extension version through the data-upgrade operation does not invoke OnInstallAppPerCompany or OnInstallAppPerDatabase.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

An install codeunit runs when an extension is installed for the first time or an uninstalled version is installed again. Installing a higher extension version through the data-upgrade operation does not invoke `OnInstallAppPerCompany` or `OnInstallAppPerDatabase`. Ordinary version-to-version migration is dispatched only through upgrade codeunits.

## Best Practice

Use `Subtype = Install` for first-install and reinstall initialization. Put version migration in a separate `Subtype = Upgrade` codeunit and enter it from `OnUpgradePerCompany` or `OnUpgradePerDatabase`.

See sample: [`install-code-does-not-run-on-version-upgrade.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.good.al).

## Anti Pattern

Putting a schema or data migration only in an install trigger and expecting it to run when a higher app version is upgraded. The migration is never invoked on that path.

See sample: [`install-code-does-not-run-on-version-upgrade.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.bad.al).

## Examples

- [Good: install-code-does-not-run-on-version-upgrade.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.good.al)
- [Bad: install-code-does-not-run-on-version-upgrade.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
