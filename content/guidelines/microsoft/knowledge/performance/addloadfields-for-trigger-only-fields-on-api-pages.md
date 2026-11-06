---
id: guideline/microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages
type: guideline
title: Add trigger-only fields to API pages with AddLoadFields in OnOpenPage
summary: API and OData pages load only the fields bound to page controls, so a field read only in trigger code triggers JIT loads.
tier: official
language: en
tags:
  - api-page
  - odata
  - addloadfields
  - onopenpage
  - onaftergetrecord
  - partial-record
  - jit
  - global-variable
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-06T00:17:27.413Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b346ec166052b29c8ad897541fad39498e84fd19
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages.md
    title: "microsoft/BCQuality: Add trigger-only fields to API pages with AddLoadFields in OnOpenPage"
    date: "2026-11-02"
    commit: 9b72501fc3199e6f8c776b4fe3aeb1a11e5dfaee
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/253
  related:
    - to: object/page/6923
      title: page 6923 "Expense Rules API"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/6927
      title: page 6927 "Expenses API"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - 17..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnAfterGetRecord
  - OnOpenPage
  - OnFindRecord
  - AddLoadFields
  - SystemId
  - SystemCreatedAt
  - SystemCreatedBy
  - SystemModifiedAt
  - SystemModifiedBy
  - SetAutoCalcFields
  - CalcFields
  - currencyCode
---

# Add trigger-only fields to API pages with AddLoadFields in OnOpenPage

> API and OData pages load only the fields bound to page controls, so a field read only in trigger code triggers JIT loads.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages.md) · microsoft layer · performance · BC 17.. · tier official · derived

## Description

API and OData pages load only the fields bound to page controls, so a field read only in trigger code triggers JIT loads.

The platform applies partial records to pages opened through OData: the fields referenced in the page layout are loaded, plus any the platform needs for subpage linking. Fields that only trigger code reads are not selected. A common case is an API field bound to a global variable that `OnAfterGetRecord` fills from `Rec` (to convert a currency code, combine address fields, or look up a related id). Reading such a field causes a just-in-time load, an implicit `Get` and an extra access to the data source. The platform then updates the enumerator, and server caching can serve the `Get`, so the number of extra SQL round trips is not fixed. Do not state a per-row count without telemetry or SQL evidence. A JIT load can also fail with "Inconsistent read of field(s)" or "JIT loading of field(s) ... failed" when another session changes or deletes the row in between.

The compiler and analyzers do not flag this, and the page returns correct data, so the cost only shows in telemetry and SQL load.

## Best Practice

Before iteration starts, add the normal fields that page triggers read but that are not otherwise selected. Use `Rec.AddLoadFields(...)` in `OnOpenPage`, as Microsoft's own API pages do (see References); Microsoft Learn also names `OnFindRecord` for OData pages. `AddLoadFields` adds to the platform's layout-based selection, so all needed fields arrive with the first read.

No entry is needed for a field that is already selected:

- a field bound directly to a control (`field(name; Rec."Field")`);
- primary-key fields, `SystemId` and the audit fields (`SystemCreatedAt`, `SystemCreatedBy`, `SystemModifiedAt`, `SystemModifiedBy`), which are always loaded;
- fields that the page filters on, which are always loaded.

FlowFields are not covered by load fields; calculate them with `SetAutoCalcFields` or `CalcFields`. A page with `SourceTableTemporary = true` has no database cost to save.

See sample: [`addloadfields-for-trigger-only-fields-on-api-pages.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages.good.al).

## Anti Pattern

An API page whose `OnAfterGetRecord`, or a procedure it calls, reads a normal `Rec` field that no part of the effective selection covers. That means no bound control, not always loaded (primary key, `SystemId`, audit field, filtered field), and no `AddLoadFields` for it in `OnOpenPage` or `OnFindRecord`. Typical tell: global variables bound to API fields and assigned from such `Rec` fields in `OnAfterGetRecord`.

`Rec.SetLoadFields(...)` with a field list in those triggers replaces the platform's selection. Flag it only when the resulting projection drops a field that the layout or the triggers read. `SetLoadFields()` without fields loads all readable normal fields, so it causes no JIT load (but gives up the partial-record benefit).

See sample: [`addloadfields-for-trigger-only-fields-on-api-pages.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages.bad.al).

## References

- [Using partial records](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-partial-records): sections "OData pages", "Just-in-time (JIT) loading", "Iterating over records" and "Preventing inconsistent read and JIT loading errors".
- [Record.AddLoadFields method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-addloadfields-method): lists the fields that are always loaded. [Record.SetLoadFields method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-setloadfields-method): explains calling it without fields.
- BCApps `Expense Rules API`, `OnOpenPage` adds `"Currency Code"` for the variable-bound `currencyCode` field: [ExpenseRulesAPI.Page.al](https://github.com/microsoft/BCApps/blob/90a3a39be4a51c82ca01ab262607af0ac559ecfe/src/Apps/W1/ExpenseAgent/app/src/APIs/ExpenseRulesAPI.Page.al#L95-L104).
- BCApps `Expenses API`, `OnOpenPage` adds four fields read in `OnAfterGetRecord`: [ExpensesAPI.Page.al](https://github.com/microsoft/BCApps/blob/90a3a39be4a51c82ca01ab262607af0ac559ecfe/src/Apps/W1/ExpenseAgent/app/src/APIs/ExpensesAPI.Page.al#L360-L376).
- Report counterpart: [`addloadfields-in-report-onpredataitem.md`](addloadfields-in-report-onpredataitem.md).

## Examples

- [Good: addloadfields-for-trigger-only-fields-on-api-pages.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages.good.al)
- [Bad: addloadfields-for-trigger-only-fields-on-api-pages.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-for-trigger-only-fields-on-api-pages.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)
- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)
- [page 6923 "Expense Rules API"](../../../../objects/page/6923.md) (possibly related: a code span names it)
- [page 6927 "Expenses API"](../../../../objects/page/6927.md) (possibly related: a code span names it)

## Changed by

- [#253 knowledge(performance): add trigger-only fields to API pages with AddLoadFields](../../../../changes/bcquality/253.md), 2026-11-02

---

From microsoft/BCQuality at 9b72501, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
