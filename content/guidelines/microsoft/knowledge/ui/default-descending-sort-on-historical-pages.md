---
id: guideline/microsoft/knowledge/ui/default-descending-sort-on-historical-pages
type: guideline
title: Default descending sort on historical pages
summary: Historical list pages should default to showing the newest records first. On pages such as log entries, ledger entries, archives, and other history lists, an oldest-first default order does not align with the primary use of the page, which is typically to review recent activity.
tier: official
language: en
tags:
  - historical-table
  - list-page
  - descending-sort
  - log-entry
  - ledger-entry
  - archive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:01.557Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a3607c3694733fd84319af6d659959cf54a3d1bf
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/default-descending-sort-on-historical-pages.md
    title: "microsoft/BCQuality: Default descending sort on historical pages"
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
repo_path: microsoft/knowledge/ui/default-descending-sort-on-historical-pages.md
layer: microsoft
kind: rule
domain: ui
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

# Default descending sort on historical pages

> Historical list pages should default to showing the newest records first. On pages such as log entries, ledger entries, archives, and other history lists, an oldest-first default order does not align with the primary use of the page, which is typically to review recent activity.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/default-descending-sort-on-historical-pages.md) · microsoft layer · ui · BC all · tier official · derived

## Description
Historical list pages should default to showing the newest records first. On pages such as log entries, ledger entries, archives, and other history lists, an oldest-first default order does not align with the primary use of the page, which is typically to review recent activity.

## Best Practice
Set descending sort as the default on list pages whose primary purpose is to present historical records. This is the expected default for entry, log, archive, and posted-history pages unless there is a specific requirement to begin with the oldest record.

See sample: [`default-descending-sort-on-historical-pages.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/default-descending-sort-on-historical-pages.good.al).

## Anti Pattern
Using an oldest-first default order on a historical list page where users are primarily interested in recent activity. Typical signs include history, log, or entry pages that regularly need to be re-sorted to descending during normal use.

See sample: [`default-descending-sort-on-historical-pages.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/default-descending-sort-on-historical-pages.bad.al).

## Examples

- [Good: default-descending-sort-on-historical-pages.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/default-descending-sort-on-historical-pages.good.al)
- [Bad: default-descending-sort-on-historical-pages.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/default-descending-sort-on-historical-pages.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
