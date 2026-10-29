---
id: guideline/microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag
type: guideline
title: Give every obsolete element a reason and tag
summary: "AL has two obsoletion mechanisms, depending on the symbol:"
tier: official
language: en
tags:
  - obsolete-state
  - obsolete-reason
  - obsolete-tag
  - deprecation
  - metadata
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.870Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b4684373ca09b5dcdba9a71f988487bbc3323e09
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag.md
    title: "microsoft/BCQuality: Give every obsolete element a reason and tag"
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
    - change/bcquality/93
repo_path: microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag.md
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
  - ObsoleteReason
  - ObsoleteTag
---

# Give every obsolete element a reason and tag

> AL has two obsoletion mechanisms, depending on the symbol:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

AL has two obsoletion mechanisms, depending on the symbol:

- Objects, fields, enum types, and enum values use the `ObsoleteState`, `ObsoleteReason`, and `ObsoleteTag` properties. `Pending` warns while the element remains available; `Removed` blocks references.
- Methods, variables, events, and other symbols use `[Obsolete('reason', 'tag')]`. They do not have an `ObsoleteState` property.

In both forms, the reason should name the replacement and the tag should identify when the element became obsolete. Empty or missing guidance leaves consumers without an actionable migration path.

## Best Practice

For an object or field, set all three properties together. For a method, variable, or event, provide both `[Obsolete]` arguments. Keep the original tag stable through the lifecycle rather than changing it to a planned removal version.

See sample: [`obsoletion-requires-reason-and-tag.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag.good.al).

## Anti Pattern

Setting only `ObsoleteState = Pending`/`Removed` on an object or field, or using `[Obsolete('', '')]` on a method, variable, or event. Both forms produce deprecation metadata without useful replacement guidance or traceability.

See sample: [`obsoletion-requires-reason-and-tag.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag.bad.al).

## See also

- `obsolete-pending-to-removed-staging.md` — when to advance `Pending` to `Removed` and write upgrade code.

## Examples

- [Good: obsoletion-requires-reason-and-tag.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag.good.al)
- [Bad: obsoletion-requires-reason-and-tag.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletion-requires-reason-and-tag.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
