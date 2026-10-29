---
id: guideline/microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger
type: guideline
title: CurrReport.Break ends the current trigger
summary: CurrReport.Break() inside a report dataitem trigger does more than leave an AL loop. It terminates the current trigger and omits the current record from the dataset. The report runtime still invokes the remaining triggers for that record.
tier: official
language: en
tags:
  - report
  - currreport
  - break
  - loop
  - trigger
  - control-flow
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:09.256Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ec22ea4862a29aac27f34aacaa8c2bfd8652a812
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger.md
    title: "microsoft/BCQuality: CurrReport.Break ends the current trigger"
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
repo_path: microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger.md
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

# CurrReport.Break ends the current trigger

> CurrReport.Break() inside a report dataitem trigger does more than leave an AL loop. It terminates the current trigger and omits the current record from the dataset. The report runtime still invokes the remaining triggers for that record.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

`CurrReport.Break()` inside a report dataitem trigger does more than leave an AL loop. It terminates the current trigger and omits the current record from the dataset. The report runtime still invokes the remaining triggers for that record. Consequently, statements after the loop in the current trigger do not run, while later report triggers can still produce side effects.

## Best Practice

Use an explicit loop condition or the AL `break` statement when only the loop must end and the current trigger must continue. Use `CurrReport.Break()` only when ending the trigger and omitting the current record are both intended, and keep subsequent report triggers safe for that omitted record.

See sample: [`currreport-break-ends-the-current-trigger.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger.good.al).

## Anti Pattern

Call `CurrReport.Break()` inside a loop and rely on statements after the loop to finish processing the current record. Those statements are unreachable when the call executes, the record is omitted, and remaining report triggers still run.

See sample: [`currreport-break-ends-the-current-trigger.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger.bad.al).

## References

`Report.Break()` method — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/reportinstance-break-method

## Examples

- [Good: currreport-break-ends-the-current-trigger.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger.good.al)
- [Bad: currreport-break-ends-the-current-trigger.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/currreport-break-ends-the-current-trigger.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
