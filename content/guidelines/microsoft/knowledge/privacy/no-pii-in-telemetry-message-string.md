---
id: guideline/microsoft/knowledge/privacy/no-pii-in-telemetry-message-string
type: guideline
title: Do not embed customer data in the telemetry message text
summary: Session.LogMessage's message argument is a plain Text. Unlike Error(), the platform does not inspect this string field-by-field — whatever is in the text is what telemetry receives.
tier: official
language: en
tags:
  - telemetry
  - session-logmessage
  - strsubstno
  - pii
  - customer-data
  - employee-code
  - filename
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:49.666Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8192c841ef1918be8de4f529ea9aeef0ecbea169
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/no-pii-in-telemetry-message-string.md
    title: "microsoft/BCQuality: Do not embed customer data in the telemetry message text"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/privacy/no-pii-in-telemetry-message-string.md
layer: microsoft
kind: rule
domain: privacy
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
  - StrSubstNo
  - DataClassification
  - EndUserPseudonymousIdentifiers
  - CustomerContent
  - FileName
  - EmployeeCode
---

# Do not embed customer data in the telemetry message text

> Session.LogMessage's message argument is a plain Text. Unlike Error(), the platform does not inspect this string field-by-field — whatever is in the text is what telemetry receives.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/no-pii-in-telemetry-message-string.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

`Session.LogMessage`'s message argument is a plain `Text`. Unlike `Error()`, the platform does not inspect this string field-by-field — whatever is in the text is what telemetry receives. So a call that builds the message via `StrSubstNo` from customer-bearing fields ships those values to telemetry verbatim, regardless of the `DataClassification` argument on the same call. Flagged content includes customer names, email addresses, phone numbers, addresses, employee codes or IDs, attachment filenames, user-provided text that may carry PII, and dumps of `Record` content.

## Best Practice

Keep the telemetry message a static, non-personal string ("Customer record processed", "Error processing uploaded file"). When structured context is genuinely needed, attach it through custom dimensions, where individual values can be reviewed and classified at the dimension level rather than baked into a free-text message.

If a pseudonymous identifier (record `No.`, primary key value) genuinely belongs in the diagnostic, prefer attaching it through a custom dimension and set the call's `DataClassification` to match the data actually shipped — `EndUserPseudonymousIdentifiers` for pseudonymous IDs, `CustomerContent` for content-bearing telemetry. Changing the `DataClassification` alone does **not** make embedding a customer name into the message string acceptable; the data still ships in the message, and downstream consumers still see the literal string.

See sample: [`no-pii-in-telemetry-message-string.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/no-pii-in-telemetry-message-string.good.al).

## Related

- `session-logmessage-requires-dataclassification.md` — every `Session.LogMessage` call must specify `DataClassification`; choose the value to match the actual data shipped, not the value that makes the entry retained the longest.
- `featuretelemetry-customdimensions-no-pii.md` — custom dimensions are the right surface for structured context, but they have their own PII rules.

## Anti Pattern

`Session.LogMessage('0000', StrSubstNo('Processed %1', Customer.Name), ...)` — the customer name is in telemetry the moment the line runs. Detection signal: a `StrSubstNo` whose result is the second argument of `Session.LogMessage`. The same shape with `FileName`, `EmployeeCode`, or any record field is the same problem.

See sample: [`no-pii-in-telemetry-message-string.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/no-pii-in-telemetry-message-string.bad.al).

## Examples

- [Good: no-pii-in-telemetry-message-string.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/no-pii-in-telemetry-message-string.good.al)
- [Bad: no-pii-in-telemetry-message-string.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/no-pii-in-telemetry-message-string.bad.al)

## Names

- [Text.StrSubstNo(Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method) (names StrSubstNo)
- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
