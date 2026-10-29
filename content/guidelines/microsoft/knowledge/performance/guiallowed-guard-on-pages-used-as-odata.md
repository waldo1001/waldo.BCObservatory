---
id: guideline/microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata
type: guideline
title: Guard page trigger work with GuiAllowed for OData and Excel
summary: Pages exposed as OData, including Edit in Excel, still run AL page triggers for every row returned. FactBox updates, defaulting, and extra CalcFields in OnAfterGetRecord therefore run on the web-service path where no UI exists. GuiAllowed is false for those sessions.
tier: official
language: en
tags:
  - guiallowed
  - clienttype
  - odata
  - edit-in-excel
  - page-trigger
  - factbox
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:42.233Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bf0bb7db7ad93f9f0351f8bfe27d5fa7e6b33128
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata.md
    title: "microsoft/BCQuality: Guard page trigger work with GuiAllowed for OData and Excel"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata.md
layer: microsoft
kind: rule
domain: performance
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
  - CalcFields
  - OnAfterGetRecord
  - GuiAllowed
  - OnAfterGetCurrRecord
  - CurrPage
---

# Guard page trigger work with GuiAllowed for OData and Excel

> Pages exposed as OData, including Edit in Excel, still run AL page triggers for every row returned. FactBox updates, defaulting, and extra CalcFields in OnAfterGetRecord therefore run on the web-service path where no UI exists. GuiAllowed is false for those sessions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Pages exposed as OData, including Edit in Excel, still run AL page triggers for every row returned. FactBox updates, defaulting, and extra `CalcFields` in `OnAfterGetRecord` therefore run on the web-service path where no UI exists. `GuiAllowed` is false for those sessions. Agents add page logic as if only the browser client will execute it.

## Best Practice

Wrap UI-only work — FactBox refresh, notifications, defaulting that is not part of the web-service contract — in `if GuiAllowed then`. Keep the OData path to field values the API actually returns.

See sample: [`guiallowed-guard-on-pages-used-as-odata.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata.good.al).

## Anti Pattern

Unconditional FactBox or calculation logic in `OnAfterGetRecord` / `OnAfterGetCurrRecord` on a page that is published as a web service or used with Edit in Excel. The signal is trigger work that calls `CurrPage` parts or extra queries without a `GuiAllowed` guard.

See sample: [`guiallowed-guard-on-pages-used-as-odata.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata.bad.al).

## Examples

- [Good: guiallowed-guard-on-pages-used-as-odata.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata.good.al)
- [Bad: guiallowed-guard-on-pages-used-as-odata.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guiallowed-guard-on-pages-used-as-odata.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)
- [System.GuiAllowed() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method) (names GuiAllowed)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
