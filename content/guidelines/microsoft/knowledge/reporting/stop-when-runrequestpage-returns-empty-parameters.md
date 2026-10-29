---
id: guideline/microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters
type: guideline
title: Stop when RunRequestPage returns empty parameters
summary: Report.RunRequestPage() returns an empty string when the user chooses Cancel. Passing that value to Report.Execute, Report.Print, or Report.SaveAs ignores the cancellation and can run the report with default parameters instead.
tier: official
language: en
tags:
  - report
  - runrequestpage
  - cancel
  - parameters
  - saveas
  - execute
  - print
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.182Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0cc0e71afeb2127f0b26daf29f2fb998fe6abada
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters.md
    title: "microsoft/BCQuality: Stop when RunRequestPage returns empty parameters"
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
repo_path: microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters.md
layer: microsoft
kind: rule
domain: reporting
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
  - SaveAs
---

# Stop when RunRequestPage returns empty parameters

> Report.RunRequestPage() returns an empty string when the user chooses Cancel. Passing that value to Report.Execute, Report.Print, or Report.SaveAs ignores the cancellation and can run the report with default parameters instead.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

`Report.RunRequestPage()` returns an empty string when the user chooses **Cancel**. Passing that value to `Report.Execute`, `Report.Print`, or `Report.SaveAs` ignores the cancellation and can run the report with default parameters instead.

## Best Practice

Test the returned parameter string immediately after `RunRequestPage()` and exit when it is empty. Pass the value to `Execute`, `Print`, or `SaveAs` only after the user has confirmed the request page.

See sample: [`stop-when-runrequestpage-returns-empty-parameters.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters.good.al).

## Anti Pattern

Call `RunRequestPage()` and unconditionally pass its return value to a report execution method. Choosing **Cancel** can still execute, print, or save the report.

See sample: [`stop-when-runrequestpage-returns-empty-parameters.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters.bad.al).

## References

`Report.RunRequestPage()` method — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/report-runrequestpage-method

## Examples

- [Good: stop-when-runrequestpage-returns-empty-parameters.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters.good.al)
- [Bad: stop-when-runrequestpage-returns-empty-parameters.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/stop-when-runrequestpage-returns-empty-parameters.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
