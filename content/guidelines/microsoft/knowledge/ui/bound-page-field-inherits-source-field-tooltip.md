---
id: guideline/microsoft/knowledge/ui/bound-page-field-inherits-source-field-tooltip
type: guideline
title: A page field bound to a table field inherits that field's ToolTip
summary: Starting with BC24 (2024 release wave 1), runtime 13.0 supports ToolTip on table fields. A page field bound to a table field inherits the source field's ToolTip when the page control declares none of its own.
tier: official
language: en
tags:
  - tooltip
  - page-field
  - source-field
  - inheritance
  - aa0218
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.661Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 00dc9b8f733fa254cac2f68a9562b98ae1631699
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/bound-page-field-inherits-source-field-tooltip.md
    title: "microsoft/BCQuality: A page field bound to a table field inherits that field's ToolTip"
    date: "2026-09-07"
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
    - change/bcquality/160
    - change/bcquality/117
    - change/bcquality/112
repo_path: microsoft/knowledge/ui/bound-page-field-inherits-source-field-tooltip.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - 24..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - ToolTip
---

# A page field bound to a table field inherits that field's ToolTip

> Starting with BC24 (2024 release wave 1), runtime 13.0 supports ToolTip on table fields. A page field bound to a table field inherits the source field's ToolTip when the page control declares none of its own.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/bound-page-field-inherits-source-field-tooltip.md) · microsoft layer · ui · BC 24.. · tier official · derived

## Description

Starting with BC24 (2024 release wave 1), runtime 13.0 supports `ToolTip` on table fields. A page field bound to a table field inherits the source field's `ToolTip` when the page control declares none of its own. A page field without an inline `ToolTip` is therefore not, by itself, a missing-tooltip defect. This inheritance is not available when targeting earlier runtimes.

The genuinely-missing case is different: a control with no inline `ToolTip` also has no text to inherit when it is unbound or its source table field carries no non-empty `ToolTip`. This leaves a real user-assistance gap. The compiler analyzer AA0218 detects this mechanically, but its severity is set by each app's ruleset and may be downgraded or disabled, so review should raise the genuine gap independently.

## Best Practice

Check the target runtime and inspect the source field, including dependency symbols when needed. On runtime 13.0 or later, do not raise a missing-`ToolTip` finding for a bound page field whose source table field supplies a non-empty `ToolTip`, and do not add a duplicate page-level property. A page-level override is appropriate only when the page needs different help text or no tooltip can be inherited.

Do raise a `medium`-severity finding when the field has no inline `ToolTip` **and** no inherited one, rather than assuming AA0218 will catch it downstream. If the source definition is unavailable, do not infer that its tooltip is missing. See [tooltip requirements across target versions](../style/tooltip-required-on-page-fields.md).

## Anti Pattern

Two opposite failures: (1) flagging every page field that has no inline `ToolTip` as a violation, ignoring that a bound field inherits its source field's tooltip; and (2) staying silent on a field that has neither an inline nor an inherited tooltip on the assumption that the compiler's AA0218 will report it — a ruleset that downgrades or disables AA0218 then lets a genuine gap ship unflagged.

## References

[ToolTip property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-tooltip-property).

## Changed by

- [#160 Clarify page field caption and tooltip inheritance](../../../../changes/bcquality/160.md), 2026-09-07
- [#117 tooltip: PR review flags genuinely-missing tooltips instead of deferring to AA0218](../../../../changes/bcquality/117.md), 2026-07-20
- [#112 Add precision guards for systematic agent false-positive patterns](../../../../changes/bcquality/112.md), 2026-07-17

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
