---
id: guideline/microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded
type: guideline
title: Do not Get the record the page already loaded
summary: A list or card page's OnAfterGetRecord trigger fires *because* the platform has already fetched a row into Rec. Calling Get for that same row inside the trigger repeats the read the platform just did.
tier: official
language: en
tags:
  - get
  - onaftergetrecord
  - redundant
  - page-trigger
  - rec
  - already-loaded
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.279Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3859b7ce71feb85ff855365c06858ca90e5d1ec8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded.md
    title: "microsoft/BCQuality: Do not Get the record the page already loaded"
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
  related:
    - to: object/table/901
      title: table 901 "Assembly Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded.md
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
  - OnAfterGetRecord
  - OnAfterGetCurrRecord
---

# Do not Get the record the page already loaded

> A list or card page's OnAfterGetRecord trigger fires *because* the platform has already fetched a row into Rec. Calling Get for that same row inside the trigger repeats the read the platform just did.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A list or card page's `OnAfterGetRecord` trigger fires *because* the platform has already fetched a row into `Rec`. Calling `Get` for that same row inside the trigger repeats the read the platform just did. Per the upstream guidance, this is "redundant — record already fetched by page runtime"; the correction is "use `Rec` directly — already loaded." The waste compounds on list pages, where the trigger runs once per row displayed.

## Best Practice

Inside page triggers — `OnAfterGetRecord`, `OnAfterGetCurrRecord`, validation triggers — read from `Rec` (or the trigger's record parameter). The platform exposes the freshly loaded record there for exactly this purpose. Reach for `Get` only when the trigger needs a *different* record than the one being displayed.

See sample: [`avoid-redundant-get-when-record-already-loaded.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded.good.al).

## Anti Pattern

`AssemblyLineRec.Get("Document Type", "Document No.", "Line No.");` at the top of `OnAfterGetRecord`, when the trigger is on the `Assembly Line` page itself and `Rec` already holds that row. The pattern often appears when a helper that expects a record parameter is invoked from a page trigger and the author writes a `Get` to "freshen" `Rec` rather than passing `Rec` through.

See sample: [`avoid-redundant-get-when-record-already-loaded.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded.bad.al).

## Examples

- [Good: avoid-redundant-get-when-record-already-loaded.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded.good.al)
- [Bad: avoid-redundant-get-when-record-already-loaded.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-redundant-get-when-record-already-loaded.bad.al)

## Names

- [table 901 "Assembly Line"](../../../../objects/table/901.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
