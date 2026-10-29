---
id: guideline/microsoft/knowledge/upgrade/appversion-meaning-depends-on-execution-context
type: guideline
title: "`ModuleInfo.AppVersion` changes meaning with execution context"
summary: ModuleInfo.AppVersion() is the installed version during normal operation, the version being installed inside install code, and the target version inside upgrade code. It is therefore not the source data version during an upgrade.
tier: official
language: en
tags:
  - appversion
  - dataversion
  - moduleinfo
  - install-codeunit
  - upgrade-codeunit
  - version-context
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:08.419Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 61e742269c55b9ca14cd47e7aaa54d960365d1e1
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/appversion-meaning-depends-on-execution-context.md
    title: "microsoft/BCQuality: `ModuleInfo.AppVersion` changes meaning with execution context"
    date: "2026-09-21"
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
    - change/bcquality/195
    - change/bcquality/57
repo_path: microsoft/knowledge/upgrade/appversion-meaning-depends-on-execution-context.md
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

# `ModuleInfo.AppVersion` changes meaning with execution context

> ModuleInfo.AppVersion() is the installed version during normal operation, the version being installed inside install code, and the target version inside upgrade code. It is therefore not the source data version during an upgrade.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/appversion-meaning-depends-on-execution-context.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

`ModuleInfo.AppVersion()` is the installed version during normal operation, the version being installed inside install code, and the target version inside upgrade code. It is therefore not the source data version during an upgrade. In upgrade code, `DataVersion()` describes the version of the existing data, whether from the currently installed app or the version most recently uninstalled.

## Best Practice

Interpret `AppVersion()` as the code package entering the context and `DataVersion()` as the existing data state. Prefer upgrade tags for controlling individual migration steps; when version information is needed for diagnostics or preconditions, name variables so target app version and source data version cannot be confused.

## Anti Pattern

Reading `AppVersion()` from an upgrade codeunit and treating it as the version being upgraded from. The comparison actually observes the target package and can skip or misroute migration logic.

## Reference

[Create proper installation and upgrade codeunits](https://learn.microsoft.com/en-us/training/modules/easy-application-upgrade/3-installation-upgrade-codeunits)

## Changed by

- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
