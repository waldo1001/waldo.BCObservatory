---
id: guideline/microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit
type: guideline
title: Choose ReportExtension dataitem triggers by their order around the base trigger
summary: ReportExtension dataitem triggers run at defined points around the corresponding base-report trigger. OnBeforePreDataItem and OnBeforeAfterGetRecord run before the base trigger; OnAfterPreDataItem and OnAfterAfterGetRecord run after it.
tier: official
language: en
tags:
  - reportextension
  - report
  - dataitem
  - trigger-order
  - onbeforepredataitem
  - onafterpredataitem
  - onbeforeaftergetrecord
  - onafteraftergetrecord
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:09.949Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c149748c385c5596d673704f16fa247fd4049035
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit.md
    title: "microsoft/BCQuality: Choose ReportExtension dataitem triggers by their order around the base trigger"
    date: "2026-09-15"
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
    - change/bcquality/183
repo_path: microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit.md
layer: microsoft
kind: rule
domain: reporting
bc_version:
  - 19..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnBeforePreDataItem
  - OnBeforeAfterGetRecord
  - OnAfterPreDataItem
  - OnAfterAfterGetRecord
---

# Choose ReportExtension dataitem triggers by their order around the base trigger

> ReportExtension dataitem triggers run at defined points around the corresponding base-report trigger. OnBeforePreDataItem and OnBeforeAfterGetRecord run before the base trigger; OnAfterPreDataItem and OnAfterAfterGetRecord run after it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit.md) · microsoft layer · reporting · BC 19.. · tier official · derived

## Description

ReportExtension dataitem triggers run at defined points around the corresponding base-report trigger. `OnBeforePreDataItem` and `OnBeforeAfterGetRecord` run before the base trigger; `OnAfterPreDataItem` and `OnAfterAfterGetRecord` run after it. A filter or calculated value can be overwritten when an extension uses a before-trigger even though its result must be final after base processing.

## Best Practice

Choose the before or after trigger from the required ordering relative to base behavior. Use an after-trigger when the extension must observe or refine the final view or value produced by the base trigger. A before-trigger is valid when the base report must consume the extension's state.

See sample: [`reportextension-dataitem-trigger-order-is-explicit.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit.good.al).

## Anti Pattern

Place extension logic in a before-trigger while relying on its filter or value to survive a base trigger that can replace it. Do not report a before-trigger merely because an after-trigger exists; the defect requires visible base behavior or another reliable source showing that ordering changes the result.

See sample: [`reportextension-dataitem-trigger-order-is-explicit.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit.bad.al).

## References

`OnBeforePreDataItem` report-extension trigger — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/triggers-auto/reportextensiondatasetmodify/devenv-onbeforepredataitem-reportextensiondatasetmodify-trigger

`OnAfterPreDataItem` report-extension trigger — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/triggers-auto/reportextensiondatasetmodify/devenv-onafterpredataitem-reportextensiondatasetmodify-trigger

## Examples

- [Good: reportextension-dataitem-trigger-order-is-explicit.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit.good.al)
- [Bad: reportextension-dataitem-trigger-order-is-explicit.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-dataitem-trigger-order-is-explicit.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
