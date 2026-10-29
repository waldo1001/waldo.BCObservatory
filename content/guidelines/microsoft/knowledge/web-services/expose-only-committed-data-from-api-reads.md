---
id: guideline/microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads
type: guideline
title: Read only committed data from APIs that must not expose in-flight writes
summary: "This is about the data-consistency contract of an API endpoint: what a consumer receives when it reads. By default an API read can return in-flight rows that a concurrent, still-open transaction has written but not yet committed."
tier: official
language: en
tags:
  - api-page
  - readisolation
  - isolationlevel
  - readcommitted
  - onopenpage
  - dirty-read
  - committed-data
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:15.258Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4337b41655b76755c526edd7e737b42dc47a7d3a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads.md
    title: "microsoft/BCQuality: Read only committed data from APIs that must not expose in-flight writes"
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
repo_path: microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads.md
layer: microsoft
kind: rule
domain: web-services
bc_version:
  - 22..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnOpenPage
---

# Read only committed data from APIs that must not expose in-flight writes

> This is about the data-consistency contract of an API endpoint: what a consumer receives when it reads. By default an API read can return in-flight rows that a concurrent, still-open transaction has written but not yet committed.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads.md) · microsoft layer · web-services · BC 22.. · tier official · derived

## Description

This is about the data-consistency contract of an API endpoint: what a consumer receives when it reads. By default an API read can return in-flight rows that a concurrent, still-open transaction has written but not yet committed. For an endpoint whose contract is "return only data that is durably committed," that is wrong — a consumer could fetch a row that the writing transaction later rolls back, then act on data that never really existed. From runtime 22.0 (BC 2023 release wave 1) an API page can pin the isolation level its reads use: setting `Rec.ReadIsolation := IsolationLevel::ReadCommitted;` in the page's `OnOpenPage` trigger makes the endpoint expose only committed rows. LLMs rarely set this on an API page because the platform default "just works" for ordinary UI; this file is remedial because the committed-only endpoint contract requires an explicit opt-in the model would not add on its own.

## Best Practice

For an API page that must expose only committed data, set the endpoint's read isolation once as the page opens: in the `OnOpenPage` trigger write `Rec.ReadIsolation := IsolationLevel::ReadCommitted;`. Every read the endpoint then serves ignores uncommitted writes from concurrent transactions, so a consumer never receives a row that another transaction might still roll back.

See sample: [`expose-only-committed-data-from-api-reads.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads.good.al).

## Anti Pattern

An API intended to return committed-only data that sets no isolation level, leaving reads at the default that can observe in-flight, uncommitted writes. A consumer can fetch a row created by a concurrent transaction that is later rolled back — a dirty read that surfaces data which never durably existed. The detection signal: a committed-only read API with no `Rec.ReadIsolation := IsolationLevel::ReadCommitted` in `OnOpenPage`.

See sample: [`expose-only-committed-data-from-api-reads.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads.bad.al).

## Examples

- [Good: expose-only-committed-data-from-api-reads.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads.good.al)
- [Bad: expose-only-committed-data-from-api-reads.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-only-committed-data-from-api-reads.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
