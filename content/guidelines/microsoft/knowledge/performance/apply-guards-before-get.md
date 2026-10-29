---
id: guideline/microsoft/knowledge/performance/apply-guards-before-get
type: guideline
title: Apply early-exit guards before calling Get
summary: A Get (or any other database call) executed before a guard that may exit the procedure does a round-trip the procedure never uses. Per the upstream guidance, "Flag Get() calls that execute before a guard condition that may exit early — the DB lookup is wasted."
tier: official
language: en
tags:
  - get
  - guard
  - early-exit
  - conditional
  - lookup
  - wasted-query
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:34.534Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8d4a87667497285a5db6a495287445e45734df9d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-guards-before-get.md
    title: "microsoft/BCQuality: Apply early-exit guards before calling Get"
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
repo_path: microsoft/knowledge/performance/apply-guards-before-get.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Apply early-exit guards before calling Get

> A Get (or any other database call) executed before a guard that may exit the procedure does a round-trip the procedure never uses. Per the upstream guidance, "Flag Get() calls that execute before a guard condition that may exit early — the DB lookup is wasted."

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-guards-before-get.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A `Get` (or any other database call) executed before a guard that may exit the procedure does a round-trip the procedure never uses. Per the upstream guidance, "Flag `Get()` calls that execute before a guard condition that may exit early — the DB lookup is wasted." The fix is structural: order the procedure body so cheap checks (parameter validation, in-memory field comparisons, enum tests) run first, and the database call runs only after the guards pass.

## Best Practice

Read the procedure top-to-bottom and place every condition that can short-circuit ahead of every database call. The check `if SomeNo = '' then exit;` belongs above `Header.Get(...)`, not below. Each guard moved upward saves one wasted query on the path that exits.

See sample: [`apply-guards-before-get.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-guards-before-get.good.al).

## Anti Pattern

`Record.Get(...)` at the top of a procedure followed by `if SomeField = '' then exit;`. The code reads top-down as "load the record, then decide whether we needed it" — exactly the order that wastes the query. The pattern is easy to introduce when guards are added later, defensively, without re-checking call ordering.

See sample: [`apply-guards-before-get.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-guards-before-get.bad.al).

## Examples

- [Good: apply-guards-before-get.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-guards-before-get.good.al)
- [Bad: apply-guards-before-get.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-guards-before-get.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
