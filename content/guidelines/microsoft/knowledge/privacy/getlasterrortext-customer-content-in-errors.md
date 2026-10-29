---
id: guideline/microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors
type: guideline
title: Treat `GetLastErrorText()` as potential customer content
summary: Parameterless GetLastErrorText() can contain customer content such as field values, record keys, and file names. The Boolean overload names its parameter ExcludeCustomerContent; passing true requests scrubbed text and is not the customer-content scenario covered here.
tier: official
language: en
tags:
  - getlasterrortext
  - error
  - strsubstno
  - telemetry
  - customer-data
  - attachment
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:49.636Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fd541a11e45d4bcc53919a182b1c09c03cee2fb6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.md
    title: "microsoft/BCQuality: Treat `GetLastErrorText()` as potential customer content"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/92
repo_path: microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - 20..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - ExcludeCustomerContent
  - TextConst
---

# Treat `GetLastErrorText()` as potential customer content

> Parameterless GetLastErrorText() can contain customer content such as field values, record keys, and file names. The Boolean overload names its parameter ExcludeCustomerContent; passing true requests scrubbed text and is not the customer-content scenario covered here.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.md) · microsoft layer · privacy · BC 20.. · tier official · derived

## Description

Parameterless `GetLastErrorText()` can contain customer content such as field values, record keys, and file names. The Boolean overload names its parameter `ExcludeCustomerContent`; passing `true` requests scrubbed text and is not the customer-content scenario covered here. When unsanitized error text is passed as a substitution value to an `Error` whose first argument is a `Label` or `TextConst`, the label supplies the Error method trace telemetry message.

## Best Practice

Use a generic label when the user does not need the underlying detail. If showing unsanitized detail is appropriate, put `%1` in a label and pass parameterless `GetLastErrorText()` as a separate argument. This preserves a useful static telemetry message while keeping the dynamic value out of the telemetry message field.

See sample: [`getlasterrortext-customer-content-in-errors.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.good.al).

## Anti Pattern

`Error(StrSubstNo(AttachmentFailedErr, GetLastErrorText()))` or `Error(AttachmentPrefixErr + GetLastErrorText())`. Both lose the static first argument and trigger AA0231; neither causes the composed text to be logged verbatim as the Error telemetry message.

See sample: [`getlasterrortext-customer-content-in-errors.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.bad.al).

## Examples

- [Good: getlasterrortext-customer-content-in-errors.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.good.al)
- [Bad: getlasterrortext-customer-content-in-errors.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.bad.al)

## Names

- [Record.TestField(Any, TextConst) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method) (names TextConst)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
