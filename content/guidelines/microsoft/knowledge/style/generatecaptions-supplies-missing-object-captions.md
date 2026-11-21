---
id: guideline/microsoft/knowledge/style/generatecaptions-supplies-missing-object-captions
type: guideline
title: "`GenerateCaptions` supplies captions for objects that declare none"
summary: The GenerateCaptions compiler feature in app.json generates a caption from the object name for pages, tables, reports, XMLports, and request pages that have no Caption or CaptionML of their own, and writes those captions to the XLIFF file so they can be translated.
tier: official
language: en
tags:
  - generatecaptions
  - caption
  - translation-file
  - xliff
  - app-json
  - object-caption
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-21T00:15:56.434Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1482c19a6a1836e37e3dc5a7a42034171dfb75fa
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/generatecaptions-supplies-missing-object-captions.md
    title: "microsoft/BCQuality: `GenerateCaptions` supplies captions for objects that declare none"
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
  changes: []
repo_path: microsoft/knowledge/style/generatecaptions-supplies-missing-object-captions.md
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
examples: 0
identifiers:
  - GenerateCaptions
  - CaptionML
  - TranslationFile
---

# `GenerateCaptions` supplies captions for objects that declare none

> The GenerateCaptions compiler feature in app.json generates a caption from the object name for pages, tables, reports, XMLports, and request pages that have no Caption or CaptionML of their own, and writes those captions to the XLIFF file so they can be translated.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/generatecaptions-supplies-missing-object-captions.md) · microsoft layer · style · BC all · tier official · derived

## Description

The `GenerateCaptions` compiler feature in `app.json` generates a caption from the object name for pages, tables, reports, XMLports, and request pages that have no `Caption` or `CaptionML` of their own, and writes those captions to the XLIFF file so they can be translated. An object that already sets `Caption` keeps that value. The feature depends on `TranslationFile`, so both must be listed: `"features": [ "TranslationFile", "GenerateCaptions" ]`.

In a project that enables the feature, an object without a `Caption` property is therefore not missing a caption or a translation unit. Whether the feature is enabled is visible only in `app.json`, not in the object file under review.

## Best Practice

Before reporting an object-level caption as missing, check the `features` setting in the project's `app.json`. With `GenerateCaptions` enabled, add an explicit `Caption` only when the wording should differ from the object name.

Keep the scope exact. The generated caption applies to the listed object types. It does not label page fields, actions, or other controls; those follow their own rules, such as inheritance from the source table field described in [`caption-required-on-page-fields.md`](caption-required-on-page-fields.md).

## Anti Pattern

Reporting every page, table, or report without a `Caption` as untranslatable in a project whose `app.json` enables `GenerateCaptions`, or adding captions that merely repeat the object names to satisfy that report.

The opposite defect is assuming generated captions without checking the manifest: when `GenerateCaptions` is not listed, or `TranslationFile` is absent, no caption is generated and the object has no translation unit for its name.

## References

[Working with translation files: Generating the XLIFF file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files#generating-the-xliff-file) and the `features` setting in [JSON files](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files#appjson-file).

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
