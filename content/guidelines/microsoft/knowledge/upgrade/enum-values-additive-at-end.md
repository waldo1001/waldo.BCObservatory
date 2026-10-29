---
id: guideline/microsoft/knowledge/upgrade/enum-values-additive-at-end
type: guideline
title: Add new enum values only at the end
summary: An AL enum is a fixed list of ordinal-named values. Persisted rows reference enum members by ordinal, not by name. The only enum mutation that preserves the meaning of every existing row is appending a new value at the end — every previously valid ordinal still maps to the same member.
tier: official
language: en
tags:
  - enum
  - ordinal
  - additive
  - append
  - backward-compatible
  - breaking-change
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.046Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 332efa6b91d5116a01f184e8540e9e907ee647a0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/enum-values-additive-at-end.md
    title: "microsoft/BCQuality: Add new enum values only at the end"
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
repo_path: microsoft/knowledge/upgrade/enum-values-additive-at-end.md
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
  - ObsoleteReason
  - ObsoleteTag
  - NewMiddleValue
---

# Add new enum values only at the end

> An AL enum is a fixed list of ordinal-named values. Persisted rows reference enum members by ordinal, not by name. The only enum mutation that preserves the meaning of every existing row is appending a new value at the end — every previously valid ordinal still maps to the same member.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/enum-values-additive-at-end.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

An AL `enum` is a fixed list of ordinal-named values. Persisted rows reference enum members by ordinal, not by name. The only enum mutation that preserves the meaning of every existing row is **appending a new value at the end** — every previously valid ordinal still maps to the same member. Inserting a new value in the middle, renumbering existing values, or removing a value without obsoletion all shift ordinals: rows written with the old layout silently take on the new member at their saved ordinal.

## Best Practice

When adding an enum value, place it after the last existing `value(N; ...)` entry, with an ordinal strictly greater than every existing one. Never renumber existing entries. To retire a value, do not delete it: mark it `ObsoleteState = Pending` (and later `Removed`) with `ObsoleteReason` and `ObsoleteTag` so the ordinal remains taken.

See sample: [`enum-values-additive-at-end.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/enum-values-additive-at-end.good.al).

## Anti Pattern

Inserting a value between existing entries ("just put `NewMiddleValue` between `First` and `Second`"), or removing a value from the enum without first going through `ObsoleteState = Pending` → `Removed`. Every row whose persisted ordinal matched the removed or shifted value now reads as a different member.

See sample: [`enum-values-additive-at-end.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/enum-values-additive-at-end.bad.al).

## See also

- `obsoletion-requires-reason-and-tag.md` — how to retire an enum member correctly.
- `obsolete-pending-to-removed-staging.md` — the `Pending → Removed` lifecycle.

## Examples

- [Good: enum-values-additive-at-end.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/enum-values-additive-at-end.good.al)
- [Bad: enum-values-additive-at-end.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/enum-values-additive-at-end.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
