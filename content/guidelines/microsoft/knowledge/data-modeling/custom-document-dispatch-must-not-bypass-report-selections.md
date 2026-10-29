---
id: guideline/microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections
type: guideline
title: Custom document dispatch must not bypass Report Selections
summary: A codeunit that hardcodes which report to run (Report.RunModal(MyReportId, ...)), or builds its own email directly, instead of registering the document through table 77 "Report Selections" and calling its own Print/Email procedures, works for the one case it was written for — and loses everything…
tier: official
language: en
tags:
  - report-selections
  - document-layouts
  - custom-report-layout
  - email-attachment
  - bespoke-dispatch
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:36.265Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f6b15f99b911bded45fc52c706a85020d6a4e61e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections.md
    title: "microsoft/BCQuality: Custom document dispatch must not bypass Report Selections"
    date: "2026-09-30"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/77
    - object/table/9657
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/175
  related:
    - to: object/enum/77
      title: enum 77 "Report Selection Usage"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections.md
layer: microsoft
kind: rule
domain: data-modeling
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
  - SendEmailToCust
  - PrintWithDialogForCust
---

# Custom document dispatch must not bypass Report Selections

> A codeunit that hardcodes which report to run (Report.RunModal(MyReportId, ...)), or builds its own email directly, instead of registering the document through table 77 "Report Selections" and calling its own Print/Email procedures, works for the one case it was written for — and loses everything…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

A codeunit that hardcodes which report to run (`Report.RunModal(MyReportId, ...)`),
or builds its own email directly, instead of registering the document
through `table 77 "Report Selections"` and calling its own
Print/Email procedures, works for the one case it was written for — and
loses everything the platform's registry provides for free. Either
bypass is a defect on its own: a hardcoded report ignores the registered
report and any per-account layout override even when no email is
involved, and a hand-built email ignores the registry's attachment and
email-body configuration even when the report itself came from it. `Report
Selections` carries its own attachment/email-body configuration per usage
(`"Use for Email Attachment"`, `"Use for Email Body"`, `"Email Body Layout
Code"`, `"Email Body Layout Type"`), plus a separate per-usage layout
override, `"Custom Report Layout Code"`, and
`table 9657 "Custom Report Selection"` (the "Document Layouts" page on the
Customer/Vendor card) lets one specific account override the report or
layout without touching code at all. None of that exists for a document
whose dispatch was hand-rolled: there is no registry row to point
"Document Layouts" at, so an admin who goes looking for where to change
this document's layout — the same place they'd look for every other
document in the system — finds nothing, because the document was never
registered there.

## Best Practice

Register the document under a `Report Selection Usage` value (see
`extend-report-selection-usage-for-new-document-types.md`) and dispatch
through `Report Selections`' own Print/Email procedures (see
`document-print-and-email-actions-call-report-selections-directly.md`),
even when the surrounding business logic — which counterparty to use,
what validation must pass before sending — is genuinely specific to the
document. Custom logic belongs around the call to `Report Selections`,
not instead of it.

See sample: [`custom-document-dispatch-must-not-bypass-report-selections.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections.good.al).

## Anti Pattern

A codeunit that runs a hardcoded report ID, or builds its own email
message directly, for a document that has (or should have) a
`Report Selections` usage — each is independently a bypass, and the
sample shows the first on its own. It works for the default case, but the report/layout cannot be changed per account
without a code change and a new release, and the document is invisible to
"Document Layouts" — the standard place every other document's
distribution is configured.

See sample: [`custom-document-dispatch-must-not-bypass-report-selections.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections.bad.al).

## Source

BCApps `ReportSelections.Table.al` (table 77 — field 7,
`"Custom Report Layout Code"`; fields 19–26 for email attachment/body
configuration; `SendEmailToCust`/`PrintWithDialogForCust` as the
registry-backed dispatch entry points) and
`CustomReportSelection.Table.al` (table 9657, the per-account override
backing the "Document Layouts" page) — both under
`src/Layers/W1/BaseApp/Foundation/Reporting/`.

## Examples

- [Good: custom-document-dispatch-must-not-bypass-report-selections.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections.good.al)
- [Bad: custom-document-dispatch-must-not-bypass-report-selections.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/custom-document-dispatch-must-not-bypass-report-selections.bad.al)

## Names

- [table 77 "Report Selections"](../../../../objects/table/77.md) (names this object)
- [table 9657 "Custom Report Selection"](../../../../objects/table/9657.md) (names this object)
- [enum 77 "Report Selection Usage"](../../../../objects/enum/77.md) (possibly related: a code span names it)

## Changed by

- [#175 9 AL/BC patterns: document distribution, price calculation & barcode extensibility](../../../../changes/bcquality/175.md), 2026-09-30

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
