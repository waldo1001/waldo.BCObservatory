---
id: guideline/microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip
type: guideline
title: IsEmpty immediately before FindSet is an extra round-trip
summary: IsEmpty is the right API when the caller only needs existence — see microsoft/knowledge/performance/use-isempty-for-existence-check.md. It is not a cheap guard in front of a loop that will FindSet anyway.
tier: official
language: en
tags:
  - isempty
  - findset
  - extra-round-trip
  - existence-check
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:38.505Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cdbd8ae5ca94072e12c3a6044ce0150f80ec27f6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip.md
    title: "microsoft/BCQuality: IsEmpty immediately before FindSet is an extra round-trip"
    date: "2026-09-29"
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
    - change/bcquality/198
    - change/bcquality/174
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip.md
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
identifiers:
  - IsEmpty
  - FindSet
---

# IsEmpty immediately before FindSet is an extra round-trip

> IsEmpty is the right API when the caller only needs existence — see microsoft/knowledge/performance/use-isempty-for-existence-check.md. It is not a cheap guard in front of a loop that will FindSet anyway.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`IsEmpty` is the right API when the caller only needs existence — see `microsoft/knowledge/performance/use-isempty-for-existence-check.md`. It is not a cheap guard in front of a loop that will `FindSet` anyway. `FindSet` already returns false when the filter matches nothing; an extra `IsEmpty` is unnecessary AL work and can issue a second database request, depending on caching. Agents and reviewers often insert `if not Rec.IsEmpty() then` "for performance" and duplicate a result the iterator already provides.

## Best Practice

When the body iterates, open with `if Rec.FindSet() then repeat ... until Next() = 0`. Do not flag a bare `FindSet` loop as missing an `IsEmpty` precondition. Reserve `IsEmpty` for branches that never materialize the row set. An early check before a *bulk write* or lock is a different, workload-dependent decision: it can help when the filtered set is usually empty, but adds work when rows exist and does not lock the set against change.

See sample: [`isempty-before-findset-is-extra-round-trip.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip.good.al).

## Anti Pattern

`if not Rec.IsEmpty() then if Rec.FindSet() then repeat`. Also a false-positive review comment that asks to add that guard. The second read does not avoid the first; it duplicates it.

See sample: [`isempty-before-findset-is-extra-round-trip.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip.bad.al).

## Examples

- [Good: isempty-before-findset-is-extra-round-trip.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip.good.al)
- [Bad: isempty-before-findset-is-extra-round-trip.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/isempty-before-findset-is-extra-round-trip.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
