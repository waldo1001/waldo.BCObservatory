---
id: guideline/microsoft/knowledge/performance/pair-findset-with-next-loop
type: guideline
title: Use FindSet with repeat..Next; do not pair FindFirst/FindLast/Get with Next
summary: Two CodeCop rules carve out the loop pattern. AA0181 says FindSet()/Find() "must be used with Next() method" — these are the multi-row APIs that the runtime sets up for forward iteration.
tier: official
language: en
tags:
  - findset
  - findfirst
  - findlast
  - get
  - next
  - repeat-until
  - aa0181
  - aa0233
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.120Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 12d3bd4cb5956a21f75ff16a8d0c74c3854ac16d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pair-findset-with-next-loop.md
    title: "microsoft/BCQuality: Use FindSet with repeat..Next; do not pair FindFirst/FindLast/Get with Next"
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
repo_path: microsoft/knowledge/performance/pair-findset-with-next-loop.md
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
  - FindSet
  - FindFirst
  - FindLast
---

# Use FindSet with repeat..Next; do not pair FindFirst/FindLast/Get with Next

> Two CodeCop rules carve out the loop pattern. AA0181 says FindSet()/Find() "must be used with Next() method" — these are the multi-row APIs that the runtime sets up for forward iteration.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pair-findset-with-next-loop.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Two CodeCop rules carve out the loop pattern. AA0181 says `FindSet()`/`Find()` "must be used with `Next()` method" — these are the multi-row APIs that the runtime sets up for forward iteration. AA0233 says do "NOT use `FindFirst()`/`FindLast()`/`Get()` with `Next()`" — these are single-row APIs, and iterating from them "wastes CPU and bandwidth." Both rules together define one boundary: choose `FindSet` when the body iterates; choose `FindFirst`, `FindLast`, or `Get` when the body uses exactly one record.

## Best Practice

When the body executes `repeat ... until Next() = 0;`, open the iteration with `FindSet()`. When the body needs one record and does not call `Next`, use `FindFirst`, `FindLast`, or — if the full primary key is known — `Get` (see `use-get-instead-of-findfirst-on-full-primary-key.md`). The choice is per call site, not a global preference.

See sample: [`pair-findset-with-next-loop.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pair-findset-with-next-loop.good.al).

## Anti Pattern

`if Customer.FindFirst() then repeat ... until Customer.Next() = 0;` — AA0233 flags this. The single-row API does not prepare the runtime for iteration, so the loop pays a cost the FindSet path does not. The mirror anti-pattern is calling `FindSet` to read a single record (see `use-isempty-for-existence-check.md` when only existence is required).

See sample: [`pair-findset-with-next-loop.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pair-findset-with-next-loop.bad.al).

## Examples

- [Good: pair-findset-with-next-loop.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pair-findset-with-next-loop.good.al)
- [Bad: pair-findset-with-next-loop.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pair-findset-with-next-loop.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
