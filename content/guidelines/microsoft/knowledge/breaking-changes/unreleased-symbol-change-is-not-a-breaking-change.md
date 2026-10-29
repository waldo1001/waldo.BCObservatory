---
id: guideline/microsoft/knowledge/breaking-changes/unreleased-symbol-change-is-not-a-breaking-change
type: guideline
title: Changing an unreleased symbol is not a breaking change
summary: Breaking-change rules protect contracts that have already shipped to customers or are exposed to external extensions.
tier: official
language: en
tags:
  - released-baseline
  - unreleased
  - rename
  - renumber
  - obsolete
  - api-stability
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:17.715Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fc39c130b2ecba716d701ea8bd6a9e6cae72b51c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/unreleased-symbol-change-is-not-a-breaking-change.md
    title: "microsoft/BCQuality: Changing an unreleased symbol is not a breaking change"
    date: "2026-07-17"
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
    - change/bcquality/112
repo_path: microsoft/knowledge/breaking-changes/unreleased-symbol-change-is-not-a-breaking-change.md
layer: microsoft
kind: rule
domain: breaking-changes
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

# Changing an unreleased symbol is not a breaking change

> Breaking-change rules protect contracts that have already shipped to customers or are exposed to external extensions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/unreleased-symbol-change-is-not-a-breaking-change.md) · microsoft layer · breaking-changes · BC all · tier official · derived

## Description

Breaking-change rules protect contracts that have already shipped to customers or are exposed to external extensions. A symbol — an object, field, key, enum value, or procedure — that is new in this app, was introduced and then changed within the same still-unreleased development cycle, or belongs to an app that has no released version yet, can be renamed, renumbered, or removed freely. There is no shipped contract to break, so the change is not a breaking change.

Release status is established from the diff, the app's `app.json` version, or a released baseline. An app whose `app.json` version has no corresponding released baseline (for example a `1.0.0.0` app that has never shipped) has no protected surface.

## Best Practice

Before treating a rename, renumber, or removal as breaking, establish that the affected symbol was present in a released baseline. Do not flag changes to symbols that are new in the current unreleased cycle or that belong to an app with no released version. When release status cannot be established from the diff, `app.json`, or a released baseline, omit the finding rather than assert a break.

## Anti Pattern

Reporting a breaking change for a rename, renumber, or removal without confirming the symbol shipped in a released version — for example flagging a break on an app whose `app.json` version has no released baseline.

## Changed by

- [#112 Add precision guards for systematic agent false-positive patterns](../../../../changes/bcquality/112.md), 2026-07-17

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
