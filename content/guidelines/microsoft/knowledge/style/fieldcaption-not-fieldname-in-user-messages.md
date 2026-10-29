---
id: guideline/microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages
type: guideline
title: Use FieldCaption/TableCaption (not FieldName/TableName) in user-facing text
summary: FieldName and TableName return the developer-facing identifier of a field or table — a fixed English string used in metadata and in code. FieldCaption and TableCaption return the translated, user-facing label declared by the field's or table's Caption property.
tier: official
language: en
tags:
  - fieldcaption
  - fieldname
  - tablecaption
  - tablename
  - translation
  - message
  - error
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.226Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6a71f4c8705ba60f7ad5e885c6c04a063b881f73
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages.md
    title: "microsoft/BCQuality: Use FieldCaption/TableCaption (not FieldName/TableName) in user-facing text"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-fieldname-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-tablename-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-fieldcaption-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-tablecaption-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages.md
layer: microsoft
kind: rule
domain: style
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
  - FieldName
  - TableName
  - FieldCaption
  - TableCaption
---

# Use FieldCaption/TableCaption (not FieldName/TableName) in user-facing text

> FieldName and TableName return the developer-facing identifier of a field or table — a fixed English string used in metadata and in code. FieldCaption and TableCaption return the translated, user-facing label declared by the field's or table's Caption property.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages.md) · microsoft layer · style · BC all · tier official · derived

## Description

`FieldName` and `TableName` return the developer-facing identifier of a field or table — a fixed English string used in metadata and in code. `FieldCaption` and `TableCaption` return the translated, user-facing label declared by the field's or table's `Caption` property. When the value is embedded in a `Message`, `Error`, `Confirm`, or any other string shown to a user, the caption is the correct source. Otherwise the user sees the English internal name regardless of locale, and any caption change must be re-applied at every call site instead of being picked up from the single point of definition.

## Best Practice

Reach for `FieldCaption("Location Code")` and `TableCaption()` whenever the value flows into a UI primitive. The same rule applies to format parameters: `Error(SomeErr, FieldCaption("Status"), TableCaption(), "Status")` rather than `Error(SomeErr, FieldName("Status"), TableName(), "Status")`. The captions follow the user's language; the names do not.

See sample: [`fieldcaption-not-fieldname-in-user-messages.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages.good.al).

## Anti Pattern

`Message('Updated %1', TableName())` or `Confirm(UpdateLocationQst, true, FieldName("Location Code"))`. The user sees the English internal name in every locale, and any future rename of the caption fails to reach the message.

See sample: [`fieldcaption-not-fieldname-in-user-messages.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages.bad.al).

## Examples

- [Good: fieldcaption-not-fieldname-in-user-messages.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages.good.al)
- [Bad: fieldcaption-not-fieldname-in-user-messages.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fieldcaption-not-fieldname-in-user-messages.bad.al)

## Names

- [Record.FieldName(Any) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-fieldname-method) (names FieldName)
- [Record.TableName() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-tablename-method) (names TableName)
- [Record.FieldCaption(Any) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-fieldcaption-method) (names FieldCaption)
- [Record.TableCaption() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-tablecaption-method) (names TableCaption)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
