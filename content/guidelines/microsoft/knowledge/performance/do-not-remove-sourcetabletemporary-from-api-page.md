---
id: guideline/microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page
type: guideline
title: Removing SourceTableTemporary on an API page switches it from in-memory to persistent
summary: SourceTableTemporary = true on a page makes the page's record buffer in-memory only — reads and writes do not touch SQL. The same applies to TableType = Temporary on a record. Removing either turns operations that were memory accesses into database round-trips.
tier: official
language: en
tags:
  - sourcetabletemporary
  - api-page
  - temporary
  - persistent
  - in-memory
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:41.223Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ef4b137ae826f8e4f1b6d3b98b8bc217d5c5f943
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page.md
    title: "microsoft/BCQuality: Removing SourceTableTemporary on an API page switches it from in-memory to persistent"
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
repo_path: microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page.md
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

# Removing SourceTableTemporary on an API page switches it from in-memory to persistent

> SourceTableTemporary = true on a page makes the page's record buffer in-memory only — reads and writes do not touch SQL. The same applies to TableType = Temporary on a record. Removing either turns operations that were memory accesses into database round-trips.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`SourceTableTemporary = true` on a page makes the page's record buffer in-memory only — reads and writes do not touch SQL. The same applies to `TableType = Temporary` on a record. Removing either turns operations that were memory accesses into database round-trips. Per the upstream guidance, the change is "potentially increasing DB load for high-volume paths (API pages, background tasks)" — and on API pages especially, the change is invisible at the page definition but visible at production scale.

## Best Practice

If a page or record was declared temporary on purpose — to buffer payloads, accept synthetic rows, or expose computed data through an API surface without persisting it — keep it temporary. When removing the property looks necessary, audit the call sites first: a temporary API page is often consumed by integrations that issue many calls per minute, and the round-trip cost is paid per call. If persistence is genuinely required, weigh storage and lock cost against alternatives (a regular table the API page reads from, an event-driven write).

See sample: [`do-not-remove-sourcetabletemporary-from-api-page.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page.good.al).

## Anti Pattern

Dropping `SourceTableTemporary = true` from an API page to "simplify" it, without revisiting the access pattern. The page begins issuing real SQL on every request; locks now contend with other writers; bulk integrations slow proportionally. The same trap exists for a record that was `TableType = Temporary` and gets demoted to a persistent table to make a debugger view easier.

See sample: [`do-not-remove-sourcetabletemporary-from-api-page.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page.bad.al).

## Examples

- [Good: do-not-remove-sourcetabletemporary-from-api-page.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page.good.al)
- [Bad: do-not-remove-sourcetabletemporary-from-api-page.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-remove-sourcetabletemporary-from-api-page.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
