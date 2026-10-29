---
id: guideline/microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work
type: guideline
title: Load only primary key fields for reference work
summary: Work that uses a record only for its identity — passing it to another procedure that will re-fetch what it needs, queueing a key for later processing, running existence checks, or building a reference collection — does not need non-key payload fields.
tier: official
language: en
tags:
  - setloadfields
  - primary-key
  - reference
  - existence-check
  - memory
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:42.365Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4e88b83a7ccf901dcf055b4b2fe3571a4b6f99ba
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work.md
    title: "microsoft/BCQuality: Load only primary key fields for reference work"
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
repo_path: microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work.md
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
  - SetLoadFields
  - FindSet
---

# Load only primary key fields for reference work

> Work that uses a record only for its identity — passing it to another procedure that will re-fetch what it needs, queueing a key for later processing, running existence checks, or building a reference collection — does not need non-key payload fields.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Work that uses a record only for its identity — passing it to another procedure that will re-fetch what it needs, queueing a key for later processing, running existence checks, or building a reference collection — does not need non-key payload fields. `SetLoadFields` with only the primary key fields loads the minimum that preserves record identity while skipping everything else. On wide tables with large text, BLOB, or media fields the difference in memory and transfer is substantial.

## Best Practice

When the iterating code's body touches only primary key fields (or passes the record to another procedure that will apply its own `SetLoadFields`), declare `SetLoadFields` with just the primary key fields before applying filters and calling `FindSet`. Callers downstream that need more fields issue their own `Get` or extend the load explicitly.

See sample: [`load-only-primary-key-fields-for-reference-work.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work.good.al).

## Anti Pattern

Using the default full-record load in loops whose body only reads the primary key, or forwards the record to another codeunit that immediately re-queries. The non-key payload is fetched across the wire and held in memory for the duration of the loop, then discarded unread.

See sample: [`load-only-primary-key-fields-for-reference-work.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work.bad.al).

## Examples

- [Good: load-only-primary-key-fields-for-reference-work.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work.good.al)
- [Bad: load-only-primary-key-fields-for-reference-work.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-only-primary-key-fields-for-reference-work.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
