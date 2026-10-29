---
id: guideline/microsoft/knowledge/style/pages-must-not-contain-business-logic
type: guideline
title: Keep business logic out of page objects
summary: "A page procedure that persists a business mutation directly (Rec.Modify() outside the standard record-bound save, or a cross-entry-point business rule implemented only in a page trigger) is an architecture violation even when it compiles: the rule only applies when a user opens that specific page,…"
tier: official
language: en
tags:
  - pages
  - business-logic
  - codeunit
  - separation-of-concerns
  - presentation-layer
  - rec-modify
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:37.525Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ed5a4cb1a0b43f5c404b8a391fee5eef30493f58
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/pages-must-not-contain-business-logic.md
    title: "microsoft/BCQuality: Keep business logic out of page objects"
    date: "2026-09-29"
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
    - change/bcquality/202
    - change/bcquality/157
repo_path: microsoft/knowledge/style/pages-must-not-contain-business-logic.md
layer: microsoft
kind: rule
domain: style
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnOpenPage
  - OnValidate
  - OnAction
---

# Keep business logic out of page objects

> A page procedure that persists a business mutation directly (Rec.Modify() outside the standard record-bound save, or a cross-entry-point business rule implemented only in a page trigger) is an architecture violation even when it compiles: the rule only applies when a user opens that specific page,…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/pages-must-not-contain-business-logic.md) · microsoft layer · style · BC all · tier official · derived

## Description

A page procedure that persists a business mutation directly (`Rec.Modify()` outside the standard record-bound save, or a cross-entry-point business rule implemented only in a page trigger) is an architecture violation even when it compiles: the rule only applies when a user opens that specific page, and silently doesn't run through any other entry point (API, batch job, another page). This is narrower than "no calculation may live on a page" — a presentation-specific calculation (formatting, a derived display value) is fine on the page that shows it, and a reusable data invariant commonly belongs on the table itself (a field's own validation/trigger), not forced into a codeunit merely to keep it off the page. The actual line is entry-point independence: a business operation or invariant that must hold regardless of which entry point touches the record belongs in a codeunit or the table, not solely in one page's trigger.

A narrow set of patterns are conventional rather than violations:
- A setup page reading and writing its own singleton setup record.
- A dedicated "Run Conversion" page invoking a conversion codeunit directly.
- The standard singleton-initialization idiom on `OnOpenPage` (`if not Rec.Get() then begin Rec.Init(); Rec.Insert(); end`) used by cue/activities pages to bootstrap their own presentation-state record — this is not business logic, it is the same pattern used throughout base-app cue pages.

## Best Practice

Delegate all business operations to a codeunit: the page owns presentation, the codeunit owns logic. A calculation or validation triggered from a page action should call a codeunit procedure rather than compute the result inline.

See sample: [`pages-must-not-contain-business-logic.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/pages-must-not-contain-business-logic.good.al).

## Anti Pattern

A cross-entry-point business rule or persisted mutation implemented only in a page trigger — calling `Rec.Modify()` to save a computed business value from `OnValidate`/`OnAction`, or a validation that must hold regardless of caller, instead of routed through a codeunit or the table's own field validation. A presentation-only calculation or a table-owned field invariant is not an instance of this anti-pattern.

See sample: [`pages-must-not-contain-business-logic.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/pages-must-not-contain-business-logic.bad.al).

## Examples

- [Good: pages-must-not-contain-business-logic.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/pages-must-not-contain-business-logic.good.al)
- [Bad: pages-must-not-contain-business-logic.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/pages-must-not-contain-business-logic.bad.al)

## Changed by

- [#202 Restore deterministic review fixture coverage](../../../../changes/bcquality/202.md), 2026-09-29
- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
