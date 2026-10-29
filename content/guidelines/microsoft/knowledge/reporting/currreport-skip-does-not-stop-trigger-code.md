---
id: guideline/microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code
type: guideline
title: CurrReport.Skip omits the record but does not stop trigger code
summary: CurrReport.Skip() omits the current record from the report dataset and continues processing with the next record. It does not terminate the current trigger, and the remaining triggers for the current record still run.
tier: official
language: en
tags:
  - report
  - currreport
  - skip
  - trigger
  - onaftergetrecord
  - control-flow
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:09.294Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d2b4e34eeaee5c880ddd1ebc4b10986d23bc0669
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code.md
    title: "microsoft/BCQuality: CurrReport.Skip omits the record but does not stop trigger code"
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
repo_path: microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code.md
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
identifiers: []
---

# CurrReport.Skip omits the record but does not stop trigger code

> CurrReport.Skip() omits the current record from the report dataset and continues processing with the next record. It does not terminate the current trigger, and the remaining triggers for the current record still run.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

`CurrReport.Skip()` omits the current record from the report dataset and continues processing with the next record. It does not terminate the current trigger, and the remaining triggers for the current record still run. Code placed after `Skip()` can therefore produce side effects for a record that never appears in the output.

## Best Practice

When no further code in the current trigger should run for a skipped record, call `CurrReport.Skip()` and then exit the trigger explicitly. Keep later record triggers safe for skipped records because the report runtime still invokes them.

See sample: [`currreport-skip-does-not-stop-trigger-code.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code.good.al).

## Anti Pattern

Call `CurrReport.Skip()` and rely on it to bypass subsequent statements or later record triggers. The record is removed from the dataset, but those statements and triggers can still update state, write data, or perform expensive work.

See sample: [`currreport-skip-does-not-stop-trigger-code.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code.bad.al).

## References

`Report.Skip()` method — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/reportinstance-skip-method

## Examples

- [Good: currreport-skip-does-not-stop-trigger-code.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code.good.al)
- [Bad: currreport-skip-does-not-stop-trigger-code.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-skip-does-not-stop-trigger-code.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
