---
id: guideline/microsoft/knowledge/style/abouttitle-abouttext-teaching-tips
type: guideline
title: Use `AboutTitle` and `AboutText` to surface teaching tips on top-level pages
summary: The AboutTitle and AboutText properties on a page render a teaching tip — an onboarding callout that appears the first time a user opens the page. They are supported on pages, individual page controls, FactBoxes, and report request pages. They are NOT supported on Role Centers or modal dialogs.
tier: official
language: en
tags:
  - abouttitle
  - abouttext
  - teaching-tip
  - onboarding
  - page
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:58.246Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2ab93832ede5f64616068255d18ea02259736edb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/abouttitle-abouttext-teaching-tips.md
    title: "microsoft/BCQuality: Use `AboutTitle` and `AboutText` to surface teaching tips on top-level pages"
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
    - change/bcquality/87
repo_path: microsoft/knowledge/style/abouttitle-abouttext-teaching-tips.md
layer: microsoft
kind: rule
domain: style
bc_version:
  - 21..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - AboutTitle
  - AboutText
---

# Use `AboutTitle` and `AboutText` to surface teaching tips on top-level pages

> The AboutTitle and AboutText properties on a page render a teaching tip — an onboarding callout that appears the first time a user opens the page. They are supported on pages, individual page controls, FactBoxes, and report request pages. They are NOT supported on Role Centers or modal dialogs.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/abouttitle-abouttext-teaching-tips.md) · microsoft layer · style · BC 21.. · tier official · derived

## Description

The `AboutTitle` and `AboutText` properties on a page render a teaching tip — an onboarding callout that appears the first time a user opens the page. They are supported on pages, individual page controls, FactBoxes, and report request pages. They are NOT supported on Role Centers or modal dialogs. The conventions: `AboutTitle` answers "what is this page about?" and uses the plural for list pages (`'About sales invoices'`) and the `[entity] details` form for card and document pages (`'About sales invoice details'`); `AboutText` answers "what can I do with this page?" in two or three short sentences. Both are translation-aware and surface to the end user verbatim.

The reviewer signal is "this is a new top-level card or list page in an app whose sibling pages already define teaching tips" — when the surrounding app sets the precedent, a new page without `AboutTitle`/`AboutText` is an inconsistency worth flagging.

## Best Practice

Set `AboutTitle` and `AboutText` on every new top-level card, list, and document page in an app that already uses them. Keep `AboutText` to two or three short sentences. Describe what the page does, not the navigation steps to use it — teaching tips explain WHAT, not HOW.

See sample: [`abouttitle-abouttext-teaching-tips.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/abouttitle-abouttext-teaching-tips.good.al).

## Anti Pattern

A new top-level page in an app whose siblings have `AboutTitle`/`AboutText`, but with no teaching tips defined. Equally wrong is filling `AboutText` with step-by-step instructions ("Click New, then enter…") — the property is for orientation, not procedural help.

See sample: [`abouttitle-abouttext-teaching-tips.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/abouttitle-abouttext-teaching-tips.bad.al).

## Examples

- [Good: abouttitle-abouttext-teaching-tips.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/abouttitle-abouttext-teaching-tips.good.al)
- [Bad: abouttitle-abouttext-teaching-tips.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/abouttitle-abouttext-teaching-tips.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#87 Fix knowledge corpus integrity issues](../../../../changes/bcquality/87.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
