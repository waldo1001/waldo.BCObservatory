---
id: guideline/microsoft/knowledge/privacy/data-classification-required-on-pii-fields
type: guideline
title: DataClassification is required on table fields containing sensitive data
summary: DataClassification tells the platform what kind of data a table field stores so that telemetry, GDPR data-subject requests, and the platform's audit surfaces can treat it correctly.
tier: official
language: en
tags:
  - data-classification
  - pii
  - gdpr
  - customer-content
  - table-field
  - under-classified
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:44.461Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6bad6f6c83483219b39e9d1123cd8d5efcf8f59f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-required-on-pii-fields.md
    title: "microsoft/BCQuality: DataClassification is required on table fields containing sensitive data"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
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
    - change/bcquality/131
    - change/bcquality/102
repo_path: microsoft/knowledge/privacy/data-classification-required-on-pii-fields.md
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
  - DataClassification
  - ToBeClassified
  - SystemMetadata
  - CustomerContent
  - EndUserIdentifiableInformation
  - EndUserPseudonymousIdentifiers
  - OrganizationIdentifiableInformation
  - AccountData
---

# DataClassification is required on table fields containing sensitive data

> DataClassification tells the platform what kind of data a table field stores so that telemetry, GDPR data-subject requests, and the platform's audit surfaces can treat it correctly.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-required-on-pii-fields.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

`DataClassification` tells the platform what kind of data a table field stores so that telemetry, GDPR data-subject requests, and the platform's audit surfaces can treat it correctly. A field declared inside a table object can set its own value or inherit a valid table-level value; a `tableextension` has no table-level value to inherit, so every Normal field it adds must set its own. When neither scope supplies a valid classification, the field remains `ToBeClassified` — a placeholder meaning "not yet reviewed", not a safe default. Leaving a field that actually holds PII (an email address, a customer name, an employee code) as `ToBeClassified`, or classifying it as `SystemMetadata` ("no user or customer data"), are both under-classifications and privacy bugs, even though the code still compiles.

## Best Practice

Set `DataClassification` to the value that matches the data the field actually stores. A `Customer."E-Mail"`-style field is `CustomerContent` (data belonging to the tenant's customers); a personal identifier such as an employee number or user ID is `EndUserIdentifiableInformation` or `EndUserPseudonymousIdentifiers` depending on whether it is directly identifying. A field that identifies an organization rather than a person — a company registration or VAT registration number — is `OrganizationIdentifiableInformation`, and a financial account identifier such as a bank account number or IBAN is `AccountData`. Choose the classification at field definition time — fixing it later is a schema change.

See sample: [`data-classification-required-on-pii-fields.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-required-on-pii-fields.good.al).

## Anti Pattern

Declaring a field that stores PII with `DataClassification = SystemMetadata` to silence the compiler warning. The field compiles but the platform now treats customer data as system metadata in telemetry, GDPR exports and admin reports.

See sample: [`data-classification-required-on-pii-fields.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-required-on-pii-fields.bad.al).

## Examples

- [Good: data-classification-required-on-pii-fields.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-required-on-pii-fields.good.al)
- [Bad: data-classification-required-on-pii-fields.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/data-classification-required-on-pii-fields.bad.al)

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#131 Correct table-level data classification guidance](../../../../changes/bcquality/131.md), 2026-08-18
- [#102 Privacy DataClassification fixes + keep Label-scope findings at minor](../../../../changes/bcquality/102.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
