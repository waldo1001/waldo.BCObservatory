---
id: guideline/microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging
type: guideline
title: Stage obsoletion `Pending → Removed`; write upgrade code on removal
summary: ObsoleteState has a deliberate two-step lifecycle. Pending keeps the element compilable and present — callers still find it but receive a deprecation warning.
tier: official
language: en
tags:
  - obsolete-state
  - pending
  - removed
  - lifecycle
  - clean-flag
  - upgrade-code-timing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.990Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 64a54f264cbf7ce17aa94ebeb36e457fce20f381
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging.md
    title: "microsoft/BCQuality: Stage obsoletion `Pending → Removed`; write upgrade code on removal"
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
repo_path: microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging.md
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
  - ObsoleteState
---

# Stage obsoletion `Pending → Removed`; write upgrade code on removal

> ObsoleteState has a deliberate two-step lifecycle. Pending keeps the element compilable and present — callers still find it but receive a deprecation warning.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

`ObsoleteState` has a deliberate two-step lifecycle. `Pending` keeps the element compilable and present — callers still find it but receive a deprecation warning. `Removed` marks the element as gone from the contract; the body may be empty or wrapped in `#if not CLEAN<version>` so the symbol survives only for binary compatibility. Upgrade code that migrates persisted data away from the obsolete element is normally written when the element moves to `Removed`, not when it goes `Pending`. `ObsoleteState = Pending` without accompanying upgrade code is the expected steady state during the deprecation window; reviewers should not flag that combination as missing migration.

## Best Practice

Stage the deprecation across releases. Step 1: mark `Pending` with reason and tag; consumers are warned but data and code keep working. Step 2: in a later release, transition to `Removed` and (if persisted data references the element) ship an upgrade procedure that migrates that data — gated by an upgrade tag. The standard mechanic for retiring the actual implementation body is to remove the `#if not CLEAN<version>` block in the same release that flips the state to `Removed`.

See sample: [`obsolete-pending-to-removed-staging.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging.good.al).

## Anti Pattern

Jumping straight to `ObsoleteState = Removed` without a prior `Pending` release. Consumers have no deprecation window to migrate and any data still referencing the element is stranded. Equally wrong: leaving an element `Pending` indefinitely and never staging its removal — the deprecation never completes.

See sample: [`obsolete-pending-to-removed-staging.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging.bad.al).

## Examples

- [Good: obsolete-pending-to-removed-staging.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging.good.al)
- [Bad: obsolete-pending-to-removed-staging.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsolete-pending-to-removed-staging.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
