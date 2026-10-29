---
id: guideline/microsoft/knowledge/ui/prefer-actionref-syntax-for-promoted-actions
type: guideline
title: Promote Actions With The Modern `actionref` Syntax, Never The Legacy `Promoted` Properties
summary: Business Central 2022 release wave 2 (v21) introduced the area(Promoted) block with actionref as the way to promote page actions, separating an action's definition from its promotion. The older approach set Promoted, PromotedCategory, PromotedOnly, and PromotedIsBig directly on each action.
tier: official
language: en
tags:
  - actionref
  - promoted-actions
  - area-promoted
  - promotedcategory
  - promotedonly
  - action-bar
  - legacy-syntax
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:18.673Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b0e66f07425a5a5a71cd1bd5acc4cacee7047fc7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/prefer-actionref-syntax-for-promoted-actions.md
    title: "microsoft/BCQuality: Promote Actions With The Modern `actionref` Syntax, Never The Legacy `Promoted` Properties"
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
repo_path: microsoft/knowledge/ui/prefer-actionref-syntax-for-promoted-actions.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - 21..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - PromotedCategory
  - PromotedOnly
  - PromotedIsBig
  - ShowAs
---

# Promote Actions With The Modern `actionref` Syntax, Never The Legacy `Promoted` Properties

> Business Central 2022 release wave 2 (v21) introduced the area(Promoted) block with actionref as the way to promote page actions, separating an action's definition from its promotion. The older approach set Promoted, PromotedCategory, PromotedOnly, and PromotedIsBig directly on each action.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/prefer-actionref-syntax-for-promoted-actions.md) · microsoft layer · ui · BC 21.. · tier official · derived

## Description
Business Central 2022 release wave 2 (v21) introduced the `area(Promoted)` block with `actionref` as the way to promote page actions, separating an action's definition from its promotion. The older approach set `Promoted`, `PromotedCategory`, `PromotedOnly`, and `PromotedIsBig` directly on each action. The two syntaxes cannot be mixed within a single page or page extension, and choosing the legacy one entangles definition with presentation, making the action bar harder to maintain and to extend.

## Best Practice
For new pages and page extensions, define actions in their normal `area`, then promote selected ones with `actionref` inside `area(Promoted)`, grouping them under explicit categories such as `Category_Process` and entity-named groups. This keeps each action defined once and referenced where it should appear, supports split buttons via `ShowAs`, and lets an extension promote a base action without redefining it. When extending a page, you may use modern syntax even if the base page used legacy properties (and vice versa) — the no-mixing rule is per-object, not per-dependency-tree.

## Anti Pattern
Setting `Promoted = true` (with `PromotedCategory`, `PromotedOnly`, or `PromotedIsBig`) on actions in new code, or attempting to combine those properties with an `area(Promoted)` block in the same object — the latter fails to compile. The reviewer signal is any `Promoted`-prefixed property on an action in a newly authored page or page extension; flag it and convert to `actionref` (VS Code offers an automated conversion). Note separately that once an action is promoted in a published app, removing the promotion is a breaking change (AS0031/AW0013), so promote conservatively rather than walking it back later.

## Changed by

- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
