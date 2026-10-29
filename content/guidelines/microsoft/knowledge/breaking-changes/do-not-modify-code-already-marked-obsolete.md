---
id: guideline/microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete
type: guideline
title: Do not build on code already marked obsolete
summary: "A member carrying [Obsolete], or wrapped in a #if not CLEANxx conditional-compilation block, is already scheduled for deletion — the CLEANxx symbol is flipped on in a future release to strip that code out."
tier: official
language: en
tags:
  - obsolete
  - clean-flag
  - conditional-compilation
  - deprecation
  - replacement
  - do-not-extend
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:19.764Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4609ae330cfe8aa0f668518109bf9ab965ade966
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete.md
    title: "microsoft/BCQuality: Do not build on code already marked obsolete"
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
repo_path: microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete.md
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
examples: 2
identifiers:
  - CLEANxx
  - GetUnitPrice
  - GetPrice
---

# Do not build on code already marked obsolete

> A member carrying [Obsolete], or wrapped in a #if not CLEANxx conditional-compilation block, is already scheduled for deletion — the CLEANxx symbol is flipped on in a future release to strip that code out.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete.md) · microsoft layer · breaking-changes · BC all · tier official · derived

## Description

A member carrying `[Obsolete]`, or wrapped in a `#if not CLEANxx` conditional-compilation block, is already scheduled for deletion — the `CLEANxx` symbol is flipped on in a future release to strip that code out. Adding logic, raising new events, or taking fresh dependencies on such a member ties live behavior to something the platform is about to remove. When the deprecation completes, everything layered on top breaks. The obsolete marker is a one-way signal: it means "migrate off," never "safe to extend." LLMs frequently edit whatever procedure is nearest to the change, including obsolete ones, and add `#if not CLEANxx` branches without understanding that the block is transient.

## Best Practice

Leave obsolete members exactly as they are and implement against the current, supported replacement. New logic — a surcharge calculation, an event publisher, a hook — belongs on the live API (`GetUnitPrice`), never inside the deprecated `GetPrice` or behind a `#if not CLEAN25` guard. If the replacement does not yet exist, create it as a first-class member and build there. The obsolete code should only shrink over time, not accrete new behavior.

See sample: [`do-not-modify-code-already-marked-obsolete.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete.good.al).

## Anti Pattern

Adding a surcharge calculation inside the `[Obsolete]` `GetPrice` procedure, or behind a `#if not CLEAN25` block, so the new behavior is wired to code that will be removed when `CLEAN25` is enabled. Detection: new statements, event declarations, or dependencies introduced inside an `[Obsolete]`-marked member or a `#if not CLEANxx` region. Move the logic onto the supported replacement instead.

See sample: [`do-not-modify-code-already-marked-obsolete.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete.bad.al).

## Examples

- [Good: do-not-modify-code-already-marked-obsolete.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete.good.al)
- [Bad: do-not-modify-code-already-marked-obsolete.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-modify-code-already-marked-obsolete.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
