---
id: guideline/microsoft/skills/review/al-reporting-review
type: guideline
title: AL reporting review
summary: Reviews AL Report and ReportExtension code against BCQuality reporting guidance.
tier: official
language: en
tags:
  - review-skill
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:26.283Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cd0a455205d34a53aed729e0372c2c550d26f728
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-reporting-review.md
    title: "microsoft/BCQuality: AL reporting review"
    date: "2026-10-20"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/230
    - change/bcquality/183
  related:
    - to: object/codeunit/425
      title: codeunit 425 "Data Compression"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/skills/review/al-reporting-review.md
layer: microsoft
kind: skill
domain: null
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - CurrReport
  - RunModal
  - RunRequestPage
  - SaveAs
  - DownloadFromStream
  - SetTableView
  - DataItemTableView
  - OnPreReport
  - OnPostReport
  - OnPreDataItem
  - OnAfterGetRecord
  - DefaultRenderingLayout
  - DefaultLayout
  - RDLCLayout
  - WordLayout
  - ExcelLayout
---

# AL reporting review

> Reviews AL Report and ReportExtension code against BCQuality reporting guidance.

[Skill on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-reporting-review.md) · microsoft layer · review skill · BC all · tier official · derived

Reviews AL source changes against the `reporting` knowledge domain in BCQuality. This is a leaf action skill composed by `al-code-review`.

## Source

Use READ's **Bounded retrieval for review skills** workflow with `-Domain reporting`. Consume every catalog page across enabled layers before applying this leaf's Relevance and Worklist; preserve each exact catalog path and open complete bodies only for exact paths selected by the Worklist. If the helper or prepared index is unavailable or invalid, use READ's explicit path-discovery and bounded native-read fallback.

## Relevance

Apply READ's frontmatter matching rules against the task context. Use the target version from `app.json` when available and `[al]` for technologies. Retain conditionally applicable files only when configured; cap resulting confidence at `medium` and name every unknown dimension in the finding message.

Return `not-applicable` when the input contains no Report or ReportExtension declaration and no Report variable or method call.

## Worklist

Match relevant entries against changed `report` and `reportextension` objects, variables typed as `Report`, and the tokens `CurrReport`, `Skip`, `Break`, `Quit`, `Run`, `RunModal`, `RunRequestPage`, `Execute`, `Print`, `SaveAs`, `DownloadFromStream`, `Data Compression`, `SetTableView`, `DataItemTableView`, `OnPreReport`, `OnPostReport`, `OnPreDataItem`, `OnAfterGetRecord`, `rendering`, `layout`, `DefaultRenderingLayout`, `DefaultLayout`, `RDLCLayout`, `WordLayout`, `ExcelLayout`, `column`, and report-extension dataset triggers.

Apply this targeted check even when token overlap would rank the article below the worklist cutoff:

- The same Report variable has two logically independent `RunModal()` executions without `Clear` before the second configuration — `clear-report-variable-before-independent-runmodal`.
- `CurrReport.Break()` is used inside an explicit loop while reachable statements after the loop are expected to finish the current trigger — `currreport-break-ends-the-current-trigger`.
- `CurrReport.Quit()` follows database writes or the report relies on `OnPostReport` finalization — `currreport-quit-rolls-back-and-skips-onpostreport`.
- `CurrReport.Skip()` is followed by reachable code in the same trigger, or later record triggers contain work that is unsafe for skipped records — `currreport-skip-does-not-stop-trigger-code`.
- A loop reachable from one Web client action calls `Report.Run`, `Report.RunModal`, or `DownloadFromStream` more than once instead of producing one archive download — `report-output-in-a-loop-needs-one-client-download`. Do not select this article when the context is non-Web or the loop is provably single-iteration.
- A ReportExtension before-trigger establishes a filter or value that visible base-trigger code subsequently replaces — `reportextension-dataitem-trigger-order-is-explicit`. Do not select this article from a before-trigger alone.
- A ReportExtension `OnPreReport` prepares state consumed by the base `OnPreReport`, or its `OnPostReport` prepares state already consumed by the base `OnPostReport` — `reportextension-report-triggers-run-after-base-triggers`. Require visible base behavior or equivalent established evidence.
- A report's `DataItemTableView` and a caller's `SetTableView` apply mutually exclusive filters to the same field — `settableview-cannot-broaden-dataitemtableview`. Require both views or equivalent direct evidence; `SetTableView` alone is not a finding.
- The value returned by `Report.RunRequestPage()` reaches `Report.Execute`, `Report.Print`, or `Report.SaveAs` without an empty-string cancellation check — `stop-when-runrequestpage-returns-empty-parameters`.
- A new or changed `report` declares layouts with `DefaultLayout`, `RDLCLayout`, `WordLayout`, or `ExcelLayout` instead of a `rendering` section with `DefaultRenderingLayout` — `declare-report-layouts-in-the-rendering-section`. Do not match unchanged legacy declarations or a target runtime below 9.0.
- A `reportextension` adds a `rendering` layout that the change, its description, or its new dataset columns depend on being used by default, with no selection step — `reportextension-layouts-are-not-selected-automatically`. Do not match layouts added as optional alternatives.
- A diff renames the name of an existing `column(...)` of a released report or report extension, or removes such a column — `do-not-rename-or-remove-shipped-report-dataset-columns`. Requires comparison evidence (a diff or release history); a folder snapshot alone cannot show a rename. Do not match a changed source expression that keeps the column name and type, or a report that has never been released.

Resolve layer conflicts per READ. When no reporting knowledge exists, emit `no-knowledge`; when knowledge exists but no article matches the changed report code, emit `completed` with no findings.

## Action

Evaluate every worklist article against the diff's report control flow and surrounding triggers.

- Emit `major` for an unambiguous Anti Pattern that causes incorrect output, persisted side effects, or lost work.
- Emit `minor` when code contradicts a Best Practice but the effect depends on unseen report or caller context.
- Do not emit applicability-only information. A reporting article produces a finding only when changed code violates its normative guidance.

Set confidence to `high` for locally visible control flow and `medium` when base-report behavior, callers, or missing context affect the conclusion. Domain-scoped agent findings follow DO's precision bar and remain capped at `minor`/`medium`.

Provide `suggested-code` only when the replacement is complete, local, and unambiguous. Otherwise set `suggested-code-omission-reason`.

Outcome selection follows DO: `completed`, `no-knowledge`, `not-applicable`, `partial`, or `failed`.

## Output

Output conforms to the DO findings-report contract. Every finding this skill emits MUST set `findings[].domain` to `"Reporting"`.

## Names

- [File.DownloadFromStream(InStream, Text, Text, Text, var Text) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method) (names DownloadFromStream)
- [codeunit 425 "Data Compression"](../../../../objects/codeunit/425.md) (possibly related: a code span names it)

## Changed by

- [#230 Knowledge: report layouts and dataset contract, query join and grouping defaults](../../../../changes/bcquality/230.md), 2026-10-20
- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
