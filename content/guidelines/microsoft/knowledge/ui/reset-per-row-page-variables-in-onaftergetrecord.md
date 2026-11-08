---
id: guideline/microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord
type: guideline
title: Define per-record page outputs on every control-flow path
summary: A global page variable belongs to the page instance, whereas Rec changes as OnAfterGetRecord processes records. Page variables are initialized when the page is loaded; do not assume that each retrieved record clears them.
tier: official
language: en
tags:
  - onaftergetrecord
  - page-variable
  - global-variable
  - computed-field
  - stale-value
  - api-page
  - clear
  - control-flow
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-08T00:19:04.246Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 84c0fd4aa87e4dd98eb1f2151012febfc19c3916
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord.md
    title: "microsoft/BCQuality: Define per-record page outputs on every control-flow path"
    date: "2026-11-06"
    commit: 634aba3df9af1b4579e8a735b186e3efdbf47de2
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-clearall-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/234
repo_path: microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord.md
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
identifiers:
  - OnAfterGetRecord
  - ClearAll
  - OnAfterGetCurrRecord
---

# Define per-record page outputs on every control-flow path

> A global page variable belongs to the page instance, whereas Rec changes as OnAfterGetRecord processes records. Page variables are initialized when the page is loaded; do not assume that each retrieved record clears them.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A global page variable belongs to the page instance, whereas `Rec` changes as `OnAfterGetRecord` processes records. Page variables are initialized when the page is loaded; do not assume that each retrieved record clears them. If an output is assigned only after a successful lookup or in one branch, a later record processed by that instance can retain an earlier record's value. This affects per-record fields in list and part pages and in API page output; it is not a claim that values persist between independent requests or sessions.

## Best Practice

Define every per-record output for the current record on every path that returns normally from `OnAfterGetRecord`. Reset those outputs before any conditional computation or early `exit`, or assign them in every applicable branch. A helper that initializes all outputs, an unconditional assignment or a function returning a value for every path is equally valid; an explicit `Clear` is not mandatory. Preserve intentional page-wide state, caches and accumulators. Do not clear `Rec` or call `ClearAll` as a substitute for initializing the outputs.

Trace helper calls and `var` parameters before reporting an unassigned path. Keep current-selection action state separate from per-record field values; the distinction between `OnAfterGetCurrRecord` and `OnAfterGetRecord` is covered by the existing page-lifecycle guidance.

See sample: [`reset-per-row-page-variables-in-onaftergetrecord.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord.good.al). It includes both explicit clearing and complete conditional assignment.

## Anti Pattern

A field is bound to a global page variable, and a normal path through `OnAfterGetRecord` leaves that variable unchanged even though it describes the current record. Require evidence of both a prior value and a reachable path that can expose it for another record. An `if Lookup.Get(...) then Output := ...` without a default or complete alternative is a typical signal. The absence of `Clear` alone is not a defect. CodeCop AA0205 checks unassigned-variable usage; passing that check is not proof that a conditional global output has been defined for the current record.

See sample: [`reset-per-row-page-variables-in-onaftergetrecord.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord.bad.al).

## References

- [OnInit initializes page variables when the page is loaded](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/triggers-auto/page/devenv-oninit-page-trigger)
- [OnAfterGetRecord runs for each fetched record and Rec is that record](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/triggers-auto/page/devenv-onaftergetrecord-page-trigger)
- [Microsoft API page clears AppName before a conditional assignment](https://github.com/microsoft/BCApps/blob/e51c552efbeb6821db450b199aae6b015371866c/src/Apps/W1/APIV2/app/src/pages/APIV2ExpandedPermissionSets.Page.al)
- [Microsoft API page clears Status and ErrorMessage for each record](https://github.com/microsoft/BCApps/blob/e51c552efbeb6821db450b199aae6b015371866c/src/Apps/W1/APIV2/app/src/pages/APIV2AutScheduledJobs.Page.al)
- [Microsoft ListPart assigns StyleTxt in both branches of its SetStyle helper](https://github.com/microsoft/BCApps/blob/e51c552efbeb6821db450b199aae6b015371866c/src/Layers/W1/BaseApp/System/DataExchange/DataExchSetupSubform.Page.al)
- [CodeCop AA0205](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/codecop-aa0205)

## Examples

- [Good: reset-per-row-page-variables-in-onaftergetrecord.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord.good.al)
- [Bad: reset-per-row-page-variables-in-onaftergetrecord.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/reset-per-row-page-variables-in-onaftergetrecord.bad.al)

## Names

- [System.ClearAll() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-clearall-method) (names ClearAll)

## Changed by

- [#234 knowledge(ui): define per-record page outputs on every control-flow path](../../../../changes/bcquality/234.md), 2026-11-06

---

From microsoft/BCQuality at 634aba3, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
