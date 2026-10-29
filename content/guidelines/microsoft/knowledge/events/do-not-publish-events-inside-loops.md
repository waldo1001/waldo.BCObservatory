---
id: guideline/microsoft/knowledge/events/do-not-publish-events-inside-loops
type: guideline
title: Do not publish events inside loops
summary: Raising an event on every iteration of a loop multiplies the cost of every subscriber by the number of records.
tier: official
language: en
tags:
  - performance
  - loops
  - event-publishing
  - batch
  - onbefore
  - onafter
  - subscriber-cost
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:27.502Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ecebd19ae15b16ce4d04af4e9a112264f11ad911
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-publish-events-inside-loops.md
    title: "microsoft/BCQuality: Do not publish events inside loops"
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
repo_path: microsoft/knowledge/events/do-not-publish-events-inside-loops.md
layer: microsoft
kind: rule
domain: events
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
  - OnBeforeProcessLines
  - OnAfterProcessLines
---

# Do not publish events inside loops

> Raising an event on every iteration of a loop multiplies the cost of every subscriber by the number of records.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-publish-events-inside-loops.md) · microsoft layer · events · BC all · tier official · derived

## Description

Raising an event on every iteration of a loop multiplies the cost of every subscriber by the number of records. A subscriber doing even a little work per call can turn a fast batch into a timeout when the loop runs over thousands of rows, and the publisher has no control over how expensive a subscriber is. Unless a genuine per-row hook is required, publish once before the loop and once after it, passing enough context — filters, a key, or a buffer — for subscribers to act on the whole set at once. Generated code tends to drop an event inside the `repeat … until` without weighing the per-iteration multiplier.

## Best Practice

Raise `OnBeforeProcessLines` before the loop and `OnAfterProcessLines` after it, outside the `repeat … until`, so each subscriber runs once per batch rather than once per row. Give those events the record or filters they need to operate on the whole set.

See sample: [`do-not-publish-events-inside-loops.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-publish-events-inside-loops.good.al).

## Anti Pattern

An event raised inside the loop body, fired once per iteration, so subscriber cost scales with the row count and large batches slow down or time out. Detection: an `OnBefore…`/`OnAfter…`/`On…` raise located between `repeat` and `until` in a record loop.

See sample: [`do-not-publish-events-inside-loops.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-publish-events-inside-loops.bad.al).

## Examples

- [Good: do-not-publish-events-inside-loops.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-publish-events-inside-loops.good.al)
- [Bad: do-not-publish-events-inside-loops.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-publish-events-inside-loops.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
