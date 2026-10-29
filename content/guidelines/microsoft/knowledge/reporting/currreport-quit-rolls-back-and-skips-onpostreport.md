---
id: guideline/microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport
type: guideline
title: CurrReport.Quit rolls back report changes and skips OnPostReport
summary: CurrReport.Quit() aborts the report without committing database changes made during its execution. It also prevents OnPostReport from running. It is therefore not a normal early-return mechanism for a processing report that expects earlier writes or finalization in OnPostReport to survive.
tier: official
language: en
tags:
  - report
  - currreport
  - quit
  - rollback
  - onpostreport
  - transaction
  - control-flow
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:09.210Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 287f625692e2bc697ffa12ab6d9e49997e814b55
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport.md
    title: "microsoft/BCQuality: CurrReport.Quit rolls back report changes and skips OnPostReport"
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
repo_path: microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport.md
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
  - OnPostReport
---

# CurrReport.Quit rolls back report changes and skips OnPostReport

> CurrReport.Quit() aborts the report without committing database changes made during its execution. It also prevents OnPostReport from running. It is therefore not a normal early-return mechanism for a processing report that expects earlier writes or finalization in OnPostReport to survive.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

`CurrReport.Quit()` aborts the report without committing database changes made during its execution. It also prevents `OnPostReport` from running. It is therefore not a normal early-return mechanism for a processing report that expects earlier writes or finalization in `OnPostReport` to survive.

## Best Practice

Use `CurrReport.Quit()` only when silently aborting the report, rolling back its database changes, and skipping `OnPostReport` are all intentional. When processing must stop with a failure, raise an error. When completed work and `OnPostReport` must be preserved, structure the dataitem control flow without `Quit()`.

See sample: [`currreport-quit-rolls-back-and-skips-onpostreport.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport.good.al).

## Anti Pattern

Modify data and then call `CurrReport.Quit()` while relying on those writes or on `OnPostReport` finalization. The report exits without committing its changes and never invokes `OnPostReport`.

See sample: [`currreport-quit-rolls-back-and-skips-onpostreport.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport.bad.al).

## References

`Report.Quit()` method — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/reportinstance-quit-method

## Examples

- [Good: currreport-quit-rolls-back-and-skips-onpostreport.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport.good.al)
- [Bad: currreport-quit-rolls-back-and-skips-onpostreport.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-quit-rolls-back-and-skips-onpostreport.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
