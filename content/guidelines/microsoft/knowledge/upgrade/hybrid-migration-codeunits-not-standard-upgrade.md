---
id: guideline/microsoft/knowledge/upgrade/hybrid-migration-codeunits-not-standard-upgrade
type: guideline
title: Hybrid migration codeunits are not standard upgrade codeunits
summary: Codeunits like HybridBC14, HybridSL, HybridGP, and HybridBaseDeployment implement one-time migration paths from a specific source system into Business Central.
tier: official
language: en
tags:
  - hybrid-migration
  - hybrid-bc14
  - hybrid-sl
  - hybrid-gp
  - hybrid-base-deployment
  - one-time-migration
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.771Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2d047ac0ad95b836365d8c8caf092539c049487a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/hybrid-migration-codeunits-not-standard-upgrade.md
    title: "microsoft/BCQuality: Hybrid migration codeunits are not standard upgrade codeunits"
    date: "2026-05-21"
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
  changes: []
repo_path: microsoft/knowledge/upgrade/hybrid-migration-codeunits-not-standard-upgrade.md
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
identifiers:
  - HybridBC14
  - HybridSL
  - HybridGP
  - HybridBaseDeployment
  - DataTransfer
  - OnUpgradePerCompany
---

# Hybrid migration codeunits are not standard upgrade codeunits

> Codeunits like HybridBC14, HybridSL, HybridGP, and HybridBaseDeployment implement one-time migration paths from a specific source system into Business Central.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/hybrid-migration-codeunits-not-standard-upgrade.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Codeunits like `HybridBC14`, `HybridSL`, `HybridGP`, and `HybridBaseDeployment` implement one-time migration paths from a specific source system into Business Central. They run in a different pipeline from the standard per-company / per-database upgrade triggers and follow patterns shaped by that source — staging tables, schema-mapped imports, and per-source post-processing. The rules that apply to standard upgrade codeunits — guarded reads, no external calls, `DataTransfer` for bulk init, `Subtype = Upgrade`, upgrade tags — are not the right yardstick for these migration codeunits.

## Best Practice

Treat a hybrid migration codeunit as a domain of its own. If you need to add or modify migration logic, follow the conventions of the surrounding hybrid migration codebase (which has its own dispatcher, its own way of recording progress, and its own error handling) rather than imposing standard upgrade conventions on it. Conversely, do not borrow hybrid-migration patterns into standard upgrade codeunits — the platform contract is different.

When reviewing changes inside a hybrid migration codeunit, do not flag missing upgrade tags, missing `Subtype = Upgrade`, or missing `OnUpgradePerCompany` wiring. None of those apply.

## Anti Pattern

Reviewing a change inside `HybridBC14` / `HybridSL` / `HybridGP` / `HybridBaseDeployment` against standard upgrade rules and flagging the absence of `Subtype = Upgrade` or upgrade-tag plumbing.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
