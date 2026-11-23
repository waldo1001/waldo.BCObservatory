---
id: guideline/microsoft/knowledge/security/masktype-conceals-in-the-ui-only
type: guideline
title: "`MaskType` conceals a value in the UI only"
summary: MaskType = Concealed on a table field or page field makes the client display the value masked, with a hide/show icon that lets the user reveal it. It is available from runtime 16.0 for Code, Text, Decimal, Integer, and BigInteger fields.
tier: official
language: en
tags:
  - masktype
  - concealed
  - masking
  - sensitive-data
  - ui-only
  - extendeddatatype
  - feature-key
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-23T00:15:10.597Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3fcae9825d055e1d2af6949e7682c0a58b6e0a90
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/masktype-conceals-in-the-ui-only.md
    title: "microsoft/BCQuality: `MaskType` conceals a value in the UI only"
    date: "2026-11-19"
    commit: aaaf6c13c219294fcebf644f1662f4d77061e2f7
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
    - change/bcquality/277
repo_path: microsoft/knowledge/security/masktype-conceals-in-the-ui-only.md
layer: microsoft
kind: rule
domain: security
bc_version:
  - 27..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - MaskType
  - BigInteger
  - ConfigurationDialog
---

# `MaskType` conceals a value in the UI only

> MaskType = Concealed on a table field or page field makes the client display the value masked, with a hide/show icon that lets the user reveal it. It is available from runtime 16.0 for Code, Text, Decimal, Integer, and BigInteger fields.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/masktype-conceals-in-the-ui-only.md) · microsoft layer · security · BC 27.. · tier official · derived

## Description

`MaskType = Concealed` on a table field or page field makes the client display the value masked, with a hide/show icon that lets the user reveal it. It is available from runtime 16.0 for `Code`, `Text`, `Decimal`, `Integer`, and `BigInteger` fields. The protection is at the UI layer only: the unmasked value is still transferred to the web browser. It does not restrict who can read the field through record access, API pages, reports, or exports, and any user who can open the page can reveal the value.

The behavior also depends on the environment. The masking is controlled by the **Introduce UI support for masking sensitive data** feature key, which is disabled by default in version 27 and enabled by default from version 29. Where the feature is off, the property has no visible effect.

## Best Practice

Use `MaskType` for what it is: a way to keep personal identifiers, financial details, or confidential notes from being read over a shoulder or captured in a screenshot. Decide who sees the value separately: leave it off pages whose audience should not read it, keep it in a table that permissions can restrict, and govern the page that shows it with permissions and data classification. Keep credentials out of table fields altogether; that is a separate rule, see [`secrets-isolated-storage.md`](secrets-isolated-storage.md).

See sample: [`masktype-conceals-in-the-ui-only.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/masktype-conceals-in-the-ui-only.good.al).

## Anti Pattern

Treating `MaskType = Concealed` as the control that decides who can read a value: a salary or personal identifier shown on a page that every user can open, such as an employee profile or a broadly used list, and considered private because it is masked; or a review that accepts a sensitive field as secured on that basis. Every user who can open the page receives the value and can reveal it, and it remains readable through every other access path.

The property also has placement limits, which are usage errors rather than design choices. It is not allowed in repeater controls or on `ConfigurationDialog` pages; a masked field in a repeater still compiles, and the UICop analyzer reports it as AW0017. It cannot be combined with `ExtendedDatatype = Masked`; the compiler rejects that combination.

See sample: [`masktype-conceals-in-the-ui-only.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/masktype-conceals-in-the-ui-only.bad.al).

## References

[MaskType property](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-masktype-property) and [Introduce UI support for masking sensitive data feature key](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-mask-type-feature-key).

## Examples

- [Good: masktype-conceals-in-the-ui-only.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/masktype-conceals-in-the-ui-only.good.al)
- [Bad: masktype-conceals-in-the-ui-only.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/masktype-conceals-in-the-ui-only.bad.al)

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
