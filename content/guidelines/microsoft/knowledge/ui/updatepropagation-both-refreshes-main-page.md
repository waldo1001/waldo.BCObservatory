---
id: guideline/microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page
type: guideline
title: Use `UpdatePropagation = Both` when line edits must refresh the main page
summary: A page part does not automatically refresh its parent page when the subpage changes. UpdatePropagation = Subpage updates only the part; Both also refreshes the main page.
tier: official
language: en
tags:
  - updatepropagation
  - page-part
  - subpage
  - main-page
  - refresh
  - flowfield
  - document-lines
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:03.473Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3ce676b5fc6a6ec347e270a14a66f8a22f057f04
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page.md
    title: "microsoft/BCQuality: Use `UpdatePropagation = Both` when line edits must refresh the main page"
    date: "2026-09-21"
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
    - change/bcquality/195
    - change/bcquality/57
repo_path: microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page.md
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

# Use `UpdatePropagation = Both` when line edits must refresh the main page

> A page part does not automatically refresh its parent page when the subpage changes. UpdatePropagation = Subpage updates only the part; Both also refreshes the main page.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A page part does not automatically refresh its parent page when the subpage changes. `UpdatePropagation = Subpage` updates only the part; `Both` also refreshes the main page. Without `Both`, header totals, FlowFields, and FactBoxes that depend on edited lines can remain stale until another user action refreshes the page.

## Best Practice

Set `UpdatePropagation = Both` on a part when edits in that subpage must immediately update values rendered by the main page. Leave propagation at `Subpage` when the parent has no dependent presentation to avoid unnecessary refreshes.

See sample: [`updatepropagation-both-refreshes-main-page.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page.good.al).

## Anti Pattern

Displaying a line-dependent total on the main page while the editable lines part updates only itself. The persisted values can be correct while the parent page continues to show an old total.

See sample: [`updatepropagation-both-refreshes-main-page.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page.bad.al).

## Reference

[Set different control properties](https://learn.microsoft.com/en-us/training/modules/work-with-pages/8-controls)

## Examples

- [Good: updatepropagation-both-refreshes-main-page.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page.good.al)
- [Bad: updatepropagation-both-refreshes-main-page.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/updatepropagation-both-refreshes-main-page.bad.al)

## Changed by

- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
