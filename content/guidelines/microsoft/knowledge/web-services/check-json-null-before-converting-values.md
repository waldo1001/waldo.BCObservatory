---
id: guideline/microsoft/knowledge/web-services/check-json-null-before-converting-values
type: guideline
title: Check for JSON null before converting a value
summary: 'An optional property in a JSON payload can be missing or present with the value null, and the two cases behave differently in AL. When the Boolean result is captured, JsonObject.Get returns false for a missing key but true for "email": null, because the key exists.'
tier: official
language: en
tags:
  - jsonobject
  - jsontoken
  - jsonvalue
  - isnull
  - asvalue
  - astext
  - asdecimal
  - optional-property
  - json-null
  - payload-parsing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:52.760Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b5a560e4e8727a3b926c3e9fd358d56cf261c4e9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-json-null-before-converting-values.md
    title: "microsoft/BCQuality: Check for JSON null before converting a value"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/jsonvalue/jsonvalue-astext-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/jsonvalue/jsonvalue-ascode-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/196
repo_path: microsoft/knowledge/web-services/check-json-null-before-converting-values.md
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
  - JsonValue
  - AsText
  - AsCode
  - AsDecimal
  - AsInteger
  - AsDate
  - AsBoolean
  - SelectToken
  - IsNull
---

# Check for JSON null before converting a value

> An optional property in a JSON payload can be missing or present with the value null, and the two cases behave differently in AL. When the Boolean result is captured, JsonObject.Get returns false for a missing key but true for "email": null, because the key exists.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-json-null-before-converting-values.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

An optional property in a JSON payload can be missing or present with the value `null`, and the two cases behave differently in AL. When the Boolean result is captured, `JsonObject.Get` returns `false` for a missing key but `true` for `"email": null`, because the key exists. The conversion methods on `JsonValue` (`AsText`, `AsCode`, `AsDecimal`, `AsInteger`, `AsDate`, `AsBoolean`, and the others) fail with a runtime error when the value is `NULL` or `UNDEFINED`. Code that guards only with `Get` therefore passes its tests with the property omitted and fails in production when the sender serializes an empty field as `null`, which many services do by default.

## Best Practice

For every property that the contract allows to be optional or nullable, check three things before converting: that `Get` (or `SelectToken`) returned `true`, that the token `IsValue()` rather than an object or array, and that `AsValue().IsNull()` is `false`. Put this in one small helper per target type and decide explicitly what a missing or null property means: a default, leaving the field unchanged, or a validation error that names the property.

Required properties can still fail fast, but with an error that states the missing or null property instead of a generic conversion error. Keep a numeric or date conversion strict when the contract says the value must be a number or a date; `IsNull` covers only `null`, not a value of the wrong type.

See sample: [`check-json-null-before-converting-values.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-json-null-before-converting-values.good.al).

## Anti Pattern

`if Json.Get('email', Token) then Email := Token.AsValue().AsText();` or an unguarded `Token.AsValue().AsDecimal()` on a property that the external contract allows to be `null`. The `Get` check makes the code look defensive, but it doesn't handle a present `null`. Detection signal: an `As<Type>()` call on a `JsonValue` obtained from an external payload with no preceding `IsNull()` check on the same token, where the property isn't documented as always non-null.

See sample: [`check-json-null-before-converting-values.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-json-null-before-converting-values.bad.al).

## References

- [JsonObject.Get method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/jsonobject/jsonobject-get-method)
- [JsonValue.AsText method: fails on NULL or UNDEFINED](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/jsonvalue/jsonvalue-astext-method)
- [JsonValue.IsNull method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/jsonvalue/jsonvalue-isnull-method)
- [JsonToken data type](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/jsontoken/jsontoken-data-type)

## Examples

- [Good: check-json-null-before-converting-values.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-json-null-before-converting-values.good.al)
- [Bad: check-json-null-before-converting-values.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-json-null-before-converting-values.bad.al)

## Names

- [JsonValue.AsText() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/jsonvalue/jsonvalue-astext-method) (names AsText)
- [JsonValue.AsCode() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/jsonvalue/jsonvalue-ascode-method) (names AsCode)

## Changed by

- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
