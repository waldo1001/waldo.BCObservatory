---
id: guideline/microsoft/knowledge/ui/semantic-style-in-cuegroup-exception
type: guideline
title: Semantic styles in a cuegroup are auto-labeled
summary: Fields inside a cuegroup render as cue tiles. The Business Central client automatically provides an accessible label for semantic styles on cue tiles (for example, "Favorable", "Unfavorable").
tier: official
language: en
tags:
  - style
  - cuegroup
  - cue-tile
  - favorable
  - unfavorable
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:06.732Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0fac910f80e4c791c5fbcad6f2f3cbf0c9e49bd9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-style-in-cuegroup-exception.md
    title: "microsoft/BCQuality: Semantic styles in a cuegroup are auto-labeled"
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
repo_path: microsoft/knowledge/ui/semantic-style-in-cuegroup-exception.md
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
identifiers: []
---

# Semantic styles in a cuegroup are auto-labeled

> Fields inside a cuegroup render as cue tiles. The Business Central client automatically provides an accessible label for semantic styles on cue tiles (for example, "Favorable", "Unfavorable").

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-style-in-cuegroup-exception.md) · microsoft layer · ui · BC all · tier official · derived

## Description

Fields inside a `cuegroup` render as cue tiles. The Business Central client automatically provides an accessible label for semantic styles on cue tiles (for example, "Favorable", "Unfavorable"). Semantic styles in a `cuegroup` therefore do **not** need additional context and should be ignored when checking that semantic colors are backed by text.

This is a narrow platform exception to `semantic-styles-need-independent-textual-meaning.md`. Outside a `cuegroup`, the normal rule applies.

## Best Practice

You may apply `Favorable`, `Unfavorable`, or `Ambiguous` to fields inside a `cuegroup` without supplying a redundant textual indicator — the platform supplies the screen-reader text. Reserve this shortcut for cue tiles only; do not extend it to other layout containers.

See sample: [`semantic-style-in-cuegroup-exception.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-style-in-cuegroup-exception.good.al).

## Examples

- [Good: semantic-style-in-cuegroup-exception.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-style-in-cuegroup-exception.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
