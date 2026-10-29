---
id: guideline/microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal
type: guideline
title: Clear a Report variable before an independent RunModal execution
summary: Report.Run() automatically clears the report variable after execution, but Report.RunModal() does not. Reconfiguring and running the same variable for an independent operation can therefore retain filters and other instance state from the previous run.
tier: official
language: en
tags:
  - report
  - runmodal
  - clear
  - settableview
  - instance
  - state
  - filters
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:09.237Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b82c1fbfdab1ab5f42359871ad883873721f246a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal.md
    title: "microsoft/BCQuality: Clear a Report variable before an independent RunModal execution"
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
repo_path: microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal.md
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
  - SetTableView
---

# Clear a Report variable before an independent RunModal execution

> Report.Run() automatically clears the report variable after execution, but Report.RunModal() does not. Reconfiguring and running the same variable for an independent operation can therefore retain filters and other instance state from the previous run.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

`Report.Run()` automatically clears the report variable after execution, but `Report.RunModal()` does not. Reconfiguring and running the same variable for an independent operation can therefore retain filters and other instance state from the previous run.

## Best Practice

Call `Clear(ReportVariable)` before configuring a new, logically independent `RunModal()` execution on a reused report variable. No clear is required after a single execution, and retaining state is valid when the subsequent run intentionally continues with the same configuration.

See sample: [`clear-report-variable-before-independent-runmodal.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal.good.al).

## Anti Pattern

Run the same report variable modally for two independent views without clearing it between runs. The second `SetTableView` can only narrow the existing report view, so filters retained by the instance can make the second result incomplete or empty.

See sample: [`clear-report-variable-before-independent-runmodal.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal.bad.al).

## References

`Report.RunModal()` method — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/reportinstance-runmodal-method

`Report.Run()` method — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/reportinstance-run-method

## Examples

- [Good: clear-report-variable-before-independent-runmodal.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal.good.al)
- [Bad: clear-report-variable-before-independent-runmodal.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/clear-report-variable-before-independent-runmodal.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
