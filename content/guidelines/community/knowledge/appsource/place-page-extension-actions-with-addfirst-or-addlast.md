---
id: guideline/community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast
type: guideline
title: Place page extension actions with addfirst or addlast
summary: Place new page-extension actions at the beginning or end of an existing action group with addfirst or addlast.
tier: official
language: en
tags:
  - pageextension
  - actions
  - addfirst
  - addlast
  - addbefore
  - addafter
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:11.483Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4967645ec34e1181741a4c364266ad1905e9faf7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast.md
    title: "microsoft/BCQuality: Place page extension actions with addfirst or addlast"
    date: "2026-09-14"
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
    - change/bcquality/142
repo_path: community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast.md
layer: community
kind: rule
domain: appsource
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

# Place page extension actions with addfirst or addlast

> Place new page-extension actions at the beginning or end of an existing action group with addfirst or addlast.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast.md) · community layer · appsource · BC all · tier official · derived

## Description

Place new page-extension actions at the beginning or end of an existing action group with `addfirst` or `addlast`. Anchoring a new action relative to a specific base-app action with `addbefore` or `addafter` couples the extension to an implementation detail that can move or disappear between Business Central releases.

## Best Practice

Choose the semantic action area or group and append or prepend the extension's actions. This keeps placement deterministic without depending on the continued existence of one neighboring action.

See sample: [`place-page-extension-actions-with-addfirst-or-addlast.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast.good.al).

## Anti Pattern

Using `addbefore` or `addafter` to place newly added actions next to a specific action from another app. The syntax is valid AL, but the placement anchor is brittle for a Marketplace extension.

See sample: [`place-page-extension-actions-with-addfirst-or-addlast.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast.bad.al).

## Examples

- [Good: place-page-extension-actions-with-addfirst-or-addlast.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast.good.al)
- [Bad: place-page-extension-actions-with-addfirst-or-addlast.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/place-page-extension-actions-with-addfirst-or-addlast.bad.al)

## Changed by

- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
