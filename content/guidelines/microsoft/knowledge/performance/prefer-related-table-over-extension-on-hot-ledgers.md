---
id: guideline/microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers
type: guideline
title: Prefer a related table over stored fields on hot ledgers
summary: Since v23, all extensions on the same base table share at most one companion-table join, and the platform automatically excludes that join on List, ListPart, and OData pages when partial records are in effect and no extension field is loaded.
tier: official
language: en
tags:
  - tableextension
  - companion-table
  - gl-entry
  - related-table
  - flowfield
  - hot-table
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.535Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9097b5a5d13a95f4fab4c90019e681ca454a7f3d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers.md
    title: "microsoft/BCQuality: Prefer a related table over stored fields on hot ledgers"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - 23..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Prefer a related table over stored fields on hot ledgers

> Since v23, all extensions on the same base table share at most one companion-table join, and the platform automatically excludes that join on List, ListPart, and OData pages when partial records are in effect and no extension field is loaded.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers.md) · microsoft layer · performance · BC 23.. · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Since v23, all extensions on the same base table share at most one companion-table join, and the platform automatically excludes that join on List, ListPart, and OData pages when partial records are in effect and no extension field is loaded. However, the join is still paid on every posting path and any AL code that accesses an extension field — or that runs without partial-record semantics. On hot tables — G/L Entry, Item Ledger Entry, Cust. Ledger Entry — even a single access per posted row adds up at volume. A related table keyed by the ledger `Entry No.`, optionally surfaced with a FlowField or FactBox, leaves the base read path entirely untouched. Agents extend G/L Entry because it is "where the posting already is".

## Best Practice

Put optional, sparse, or integration attributes in a related table with the ledger entry number as primary key. Show them from a FactBox or a FlowField. 
Use a tableextension stored field only when the value must appear as a native list column and is read on almost every access.

See sample: [`prefer-related-table-over-extension-on-hot-ledgers.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers.good.al).

## Anti Pattern

`tableextension` on `"G/L Entry"` (or another posting table) that adds several stored `Text`/`Blob` fields used only by one integration. The companion join is paid on every posting and on any AL code path that loads extension fields, even when those columns are not needed for the current operation.

See sample: [`prefer-related-table-over-extension-on-hot-ledgers.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers.bad.al).

## Examples

- [Good: prefer-related-table-over-extension-on-hot-ledgers.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers.good.al)
- [Bad: prefer-related-table-over-extension-on-hot-ledgers.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-related-table-over-extension-on-hot-ledgers.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
