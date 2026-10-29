---
id: guideline/microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers
type: guideline
title: Avoid growing globals in SingleInstance subscribers
summary: A codeunit with SingleInstance = true is allocated once per session and lives until the session ends. Global variables on it are never collected between event fires.
tier: official
language: en
tags:
  - singleinstance
  - subscriber
  - event
  - memory
  - session
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.225Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 82a3bb775c2e6cdea5a80838753e4a663cecd375
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers.md
    title: "microsoft/BCQuality: Avoid growing globals in SingleInstance subscribers"
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
repo_path: microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers.md
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

# Avoid growing globals in SingleInstance subscribers

> A codeunit with SingleInstance = true is allocated once per session and lives until the session ends. Global variables on it are never collected between event fires.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A codeunit with `SingleInstance = true` is allocated once per session and lives until the session ends. Global variables on it are never collected between event fires. A subscriber that accumulates data into a global — buffering payloads, appending to a list, caching without a cap — steadily grows its session footprint for the entire user session. The symptom is memory that only recovers on sign-out, and it surfaces only on long-running sessions.

## Best Practice

Keep the global footprint on a SingleInstance subscriber bounded and intentional: a handful of flags, a setup record, a bounded cache with a maximum size. When cross-event state is genuinely needed, define an explicit reset point — end of a business process, arrival of a specific terminal event — that clears the growing collection.

See sample: [`avoid-growing-globals-in-singleinstance-subscribers.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers.good.al).

## Anti Pattern

A SingleInstance subscriber that appends each event's payload to a global list, dictionary, or temporary record without a cap or cleanup trigger. The list grows for hours, memory pressure builds quietly, and debugging the root cause on a live environment is substantially harder than noticing the unbounded append in code review.

See sample: [`avoid-growing-globals-in-singleinstance-subscribers.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers.bad.al).

## Examples

- [Good: avoid-growing-globals-in-singleinstance-subscribers.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers.good.al)
- [Bad: avoid-growing-globals-in-singleinstance-subscribers.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-growing-globals-in-singleinstance-subscribers.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
