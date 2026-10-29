---
id: guideline/microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9
type: guideline
title: Format exchanged values with standard format 9
summary: Format(Value) uses standard format 0, the display format, and follows the current user's regional settings. The same decimal renders as -76.543,21 for a European region and -76,543.21 for English (US); the same date renders as 05-04-21 or 04/05/21.
tier: official
language: en
tags:
  - format
  - evaluate
  - standard-format-9
  - xml-format
  - locale
  - regional-settings
  - decimal-separator
  - data-exchange
  - integration
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:52.625Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: adc1daecb7df7b525312e630c0ed3761f0763c39
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9.md
    title: "microsoft/BCQuality: Format exchanged values with standard format 9"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/196
repo_path: microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9.md
layer: microsoft
kind: rule
domain: web-services
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
  - DateTime
  - StrSubstNo
  - HttpContent
  - HttpRequestMessage
  - OutStream
  - XmlDocument
---

# Format exchanged values with standard format 9

> Format(Value) uses standard format 0, the display format, and follows the current user's regional settings. The same decimal renders as -76.543,21 for a European region and -76,543.21 for English (US); the same date renders as 05-04-21 or 04/05/21.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

`Format(Value)` uses standard format 0, the display format, and follows the current user's regional settings. The same decimal renders as `-76.543,21` for a European region and `-76,543.21` for English (US); the same date renders as `05-04-21` or `04/05/21`. Text built this way and sent outside Business Central (an HTTP query string or body, an XML or CSV file, a signature or hash input, or an external key) changes with the user or job queue session that produces it. The receiver can reject it or, worse, misread it. `Evaluate` without a format number has the same dependency when it parses machine-generated text.

## Best Practice

Use `Format(Value, 0, 9)` for machine-readable text. Standard format 9 is the XML format and doesn't depend on the region: `-76543.21` for a decimal, `2021-04-05` for a date, `04:35:55.553` for a time, `true`/`false` for a Boolean, and a UTC `DateTime` such as `2021-04-05T03:35:55.553Z`. Parse such text with `Evaluate(Variable, Text, 9)`.

Prefer typed APIs when they exist. `JsonObject.Add` and `JsonValue.SetValue` with a `Decimal`, `Date`, or `Boolean` argument write a JSON value without going through display text. An XMLport handles this with `FormatEvaluate = Xml`.

For `Enum` and `Option` values, format 9 produces the ordinal number, not the name. When the external contract exchanges names, map them explicitly; see [`api-enum-values-are-a-contract-by-name-not-ordinal.md`](api-enum-values-are-a-contract-by-name-not-ordinal.md).

Text shown to a person (messages, captions, report columns, notifications) should keep the regional display format. `Code`, `Text`, and `Guid` values don't need format 9 because their standard formats don't vary by region.

See sample: [`format-exchanged-values-with-standard-format-9.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9.good.al).

## Anti Pattern

`Format(Amount)`, `Format(PostingDate)`, or `Format(SomeDateTime)` concatenated into a URL, request body, XML or CSV line, file name, or hash input. Passing the `Decimal` or `Date` itself to `StrSubstNo` for such text has the same effect, because `StrSubstNo` formats it with the display format. Also `Evaluate(DecimalOrDateVariable, ExternalText)` without format number 9 on text received from another system. The code usually works for the developer's own region and fails for users or job queue sessions in another one. Detection signal: `Format` with one argument, or with a format number other than 9, applied to a `Decimal`, `Date`, `Time`, `DateTime`, or `Boolean` on a path that writes to an `HttpContent`, `HttpRequestMessage`, `OutStream`, `XmlDocument`, or file.

See sample: [`format-exchanged-values-with-standard-format-9.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9.bad.al).

## References

- [Formatting values, dates, and time: standard formats by region and format 9](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-format-property)
- [System.Format method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-format-joker-integer-integer-method)
- [System.Evaluate method and format number 9](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-evaluate-method)
- [FormatEvaluate property for XMLports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-formatevaluate-property)

## Examples

- [Good: format-exchanged-values-with-standard-format-9.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9.good.al)
- [Bad: format-exchanged-values-with-standard-format-9.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/format-exchanged-values-with-standard-format-9.bad.al)

## Names

- [Text.StrSubstNo(Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method) (names StrSubstNo)

## Changed by

- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
