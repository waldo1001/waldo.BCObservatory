---
id: guideline/microsoft/knowledge/ui/group-caption-quality-is-not-an-accessibility-issue
type: guideline
title: Group caption quality is not an accessibility issue
summary: Group captions affect page organization, but missing, generic, or duplicate group captions are not accessibility violations per the BC accessibility rules. Do not flag groups for missing, generic, or duplicate captions during an accessibility review.
tier: official
language: en
tags:
  - group
  - caption
  - missing
  - duplicate
  - generic
  - accessibility
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.318Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7c546b8b9287b03a5f9acc80aff117c05252a648
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-caption-quality-is-not-an-accessibility-issue.md
    title: "microsoft/BCQuality: Group caption quality is not an accessibility issue"
    date: "2026-05-21"
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
  changes: []
repo_path: microsoft/knowledge/ui/group-caption-quality-is-not-an-accessibility-issue.md
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

# Group caption quality is not an accessibility issue

> Group captions affect page organization, but missing, generic, or duplicate group captions are not accessibility violations per the BC accessibility rules. Do not flag groups for missing, generic, or duplicate captions during an accessibility review.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-caption-quality-is-not-an-accessibility-issue.md) · microsoft layer · ui · BC all · tier official · derived

## Description

Group captions affect page organization, but missing, generic, or duplicate group captions are **not** accessibility violations per the BC accessibility rules. Do not flag groups for missing, generic, or duplicate captions during an accessibility review.

This rule prevents a common false positive: LLM-driven reviewers tend to flag "GroupName" or duplicated `Caption = 'General'` as accessibility issues, but the BC client does not depend on group captions for screen-reader announcements of the fields within. Caption quality belongs to other review domains (UI text / style), not accessibility.

## Best Practice

Treat group caption quality as a UI-text concern reviewed elsewhere. Accessibility findings on groups should be limited to the specific patterns documented in the `grid-data-table-heuristic.md`, `tabular-intent-requires-data-table-conditions.md`, and `group-labeled-first-child-exception.md` files.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
