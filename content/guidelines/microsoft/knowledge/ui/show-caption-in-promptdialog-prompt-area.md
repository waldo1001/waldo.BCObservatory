---
id: guideline/microsoft/knowledge/ui/show-caption-in-promptdialog-prompt-area
type: guideline
title: ShowCaption in a PromptDialog prompt area
summary: On PageType = PromptDialog pages, input fields inside area(Prompt) are labeled by the dialog's heading — the page Caption. Setting ShowCaption = false on such an input field is the standard pattern and should not be flagged, provided the page has a Caption.
tier: official
language: en
tags:
  - show-caption
  - promptdialog
  - copilot
  - prompt
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:07.519Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b1702056919b9afccdb58c0234f6605ee3e9d3e6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-promptdialog-prompt-area.md
    title: "microsoft/BCQuality: ShowCaption in a PromptDialog prompt area"
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
repo_path: microsoft/knowledge/ui/show-caption-in-promptdialog-prompt-area.md
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
examples: 1
identifiers:
  - ShowCaption
---

# ShowCaption in a PromptDialog prompt area

> On PageType = PromptDialog pages, input fields inside area(Prompt) are labeled by the dialog's heading — the page Caption. Setting ShowCaption = false on such an input field is the standard pattern and should not be flagged, provided the page has a Caption.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-promptdialog-prompt-area.md) · microsoft layer · ui · BC all · tier official · derived

## Description

On `PageType = PromptDialog` pages, input fields inside `area(Prompt)` are labeled by the dialog's heading — the page `Caption`. Setting `ShowCaption = false` on such an input field is the standard pattern and should not be flagged, provided the page has a `Caption`.

Fields in the `area(Content)` section of the same PromptDialog page are **not** labeled by the dialog heading and follow the normal `ShowCaption` rules.

## Best Practice

In a PromptDialog, give the page a meaningful `Caption` (the dialog heading) and let prompt-area input fields hide their own captions. Treat content-area fields like any other editable field — keep their captions.

See sample: [`show-caption-in-promptdialog-prompt-area.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-promptdialog-prompt-area.good.al).

## Examples

- [Good: show-caption-in-promptdialog-prompt-area.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-promptdialog-prompt-area.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
