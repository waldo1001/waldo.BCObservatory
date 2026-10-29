---
id: guideline/microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages
type: guideline
title: Lock down write operations on read-only API pages
summary: An API meant purely for reading — a reporting or lookup endpoint — is not read-only just because nobody intends to write to it.
tier: official
language: en
tags:
  - api-page
  - insertallowed
  - modifyallowed
  - deleteallowed
  - editable
  - read-only
  - reporting-api
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:15.325Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8f6a73c88a7a8660e1e33425127abfdf84f5f85b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages.md
    title: "microsoft/BCQuality: Lock down write operations on read-only API pages"
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
repo_path: microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages.md
layer: microsoft
kind: rule
domain: web-services
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
  - InsertAllowed
  - ModifyAllowed
  - DeleteAllowed
---

# Lock down write operations on read-only API pages

> An API meant purely for reading — a reporting or lookup endpoint — is not read-only just because nobody intends to write to it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

An API meant purely for reading — a reporting or lookup endpoint — is not read-only just because nobody intends to write to it. Unless the page explicitly forbids writes, the platform leaves the endpoint writable, so a client can POST, PATCH, or DELETE against data that was never meant to change through that surface. The fix is explicit: set `InsertAllowed = false`, `ModifyAllowed = false`, and `DeleteAllowed = false` (and `Editable = false`) so the endpoint rejects every write operation. LLMs often assume "I only exposed read fields, so it's read-only" and rely on defaults; this file is remedial because the default for an API page is writable, and the read-only intent has to be encoded as three explicit property settings, not inferred.

## Best Practice

For a read-only / reporting API page set all three CRUD guards off — `InsertAllowed = false`, `ModifyAllowed = false`, `DeleteAllowed = false` — and mark the page `Editable = false`. The endpoint then serves GET requests and rejects any insert, modify, or delete, matching the read-only contract regardless of the caller. Make the read-only stance explicit rather than depending on the writable default.

See sample: [`disable-write-operations-on-read-only-api-pages.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages.good.al).

## Anti Pattern

An API intended for read-only consumption that omits the CRUD guards, leaving `InsertAllowed`, `ModifyAllowed`, and `DeleteAllowed` at their writable defaults. The endpoint silently accepts POST, PATCH, and DELETE, so a client can mutate or remove data the API was never meant to expose for writing. The detection signal: a read-only/reporting `PageType = API` page that does not set the three `*Allowed = false` properties.

See sample: [`disable-write-operations-on-read-only-api-pages.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages.bad.al).

## Examples

- [Good: disable-write-operations-on-read-only-api-pages.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages.good.al)
- [Bad: disable-write-operations-on-read-only-api-pages.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/disable-write-operations-on-read-only-api-pages.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
