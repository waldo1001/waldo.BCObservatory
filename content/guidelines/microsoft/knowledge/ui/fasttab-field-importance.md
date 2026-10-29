---
id: guideline/microsoft/knowledge/ui/fasttab-field-importance
type: guideline
title: Set Field Importance To Drive FastTab Progressive Disclosure
summary: A FastTab field's Importance property controls whether the field is visible immediately, hidden behind "Show more", or surfaced on the collapsed FastTab header summary line.
tier: official
language: en
tags:
  - importance
  - promoted
  - additional
  - fasttab
  - show-more
  - summary-line
  - progressive-disclosure
  - field-visibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:18.396Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f7de6ddecb93c426a0ef0e50921cf260f087b975
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/fasttab-field-importance.md
    title: "microsoft/BCQuality: Set Field Importance To Drive FastTab Progressive Disclosure"
    date: "2026-07-14"
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
    - change/bcquality/105
repo_path: microsoft/knowledge/ui/fasttab-field-importance.md
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
examples: 0
identifiers: []
---

# Set Field Importance To Drive FastTab Progressive Disclosure

> A FastTab field's Importance property controls whether the field is visible immediately, hidden behind "Show more", or surfaced on the collapsed FastTab header summary line.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/fasttab-field-importance.md) · microsoft layer · ui · BC all · tier official · derived

## Description
A FastTab field's `Importance` property controls whether the field is visible immediately, hidden behind "Show more", or surfaced on the collapsed FastTab header summary line. The three values are `Standard` (the default, shown in the expanded FastTab), `Promoted` (also rendered on the FastTab header when the tab is collapsed), and `Additional` (hidden until the user clicks "Show more"). Misusing these values either clutters the summary line or buries fields users need on every transaction, so reviewers should treat `Importance` as a deliberate layout decision rather than an afterthought.

## Best Practice
Promote only the small set of identifying fields per FastTab that users must read at a glance without expanding — name, status, key amount — so the collapsed header summary line stays scannable. Leave the everyday working fields at `Standard`, and push rarely-touched fields (legacy compatibility fields, system timestamps, seldom-changed configuration) to `Additional`. Note that field-level `Importance = Promoted` is unrelated to action promotion on the page action bar; it governs FastTab field visibility only. Do not rely on initial expand or collapse state, which you cannot set programmatically and which the platform may personalize per user — design assuming any FastTab may be collapsed.

## Anti Pattern
Setting `Importance = Promoted` on most fields of a FastTab so "everything is important" defeats progressive disclosure: the collapsed summary line overflows and conveys nothing at a glance. The opposite failure is marking frequently edited fields `Additional`, forcing users to click "Show more" on every record. A detectable signal is a FastTab whose fields are nearly all `Promoted`, or a FastTab containing only `Additional` fields, which renders as an empty tab until expanded.

## Changed by

- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
