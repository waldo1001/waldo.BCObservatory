---
id: guideline/microsoft/knowledge/style/translations-are-ignored-by-incremental-build-and-rad
type: guideline
title: Incremental build and RAD publishing ignore translations
summary: 'Two development-time publishing modes leave translations out even when "features": [ "TranslationFile" ] is set in app.json and the per-language XLIFF files are correct. When the Incremental Build setting of the AL Language extension is enabled, all translations are ignored.'
tier: official
language: en
tags:
  - translation
  - xliff
  - incremental-build
  - rad
  - rapid-application-development
  - publish
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T00:17:52.221Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 977236d10eee3bbe2a860ec61f1910f21d335992
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/translations-are-ignored-by-incremental-build-and-rad.md
    title: "microsoft/BCQuality: Incremental build and RAD publishing ignore translations"
    date: "2026-11-19"
    commit: dd49341915045164248349bd891b106ebb4b34cb
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
repo_path: microsoft/knowledge/style/translations-are-ignored-by-incremental-build-and-rad.md
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
identifiers: []
---

# Incremental build and RAD publishing ignore translations

> Two development-time publishing modes leave translations out even when "features": [ "TranslationFile" ] is set in app.json and the per-language XLIFF files are correct. When the Incremental Build setting of the AL Language extension is enabled, all translations are ignored.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/translations-are-ignored-by-incremental-build-and-rad.md) · microsoft layer · style · BC all · tier official · derived

## Description

Two development-time publishing modes leave translations out even when `"features": [ "TranslationFile" ]` is set in `app.json` and the per-language XLIFF files are correct. When the **Incremental Build** setting of the AL Language extension is enabled, all translations are ignored. The same is true when publishing with Rapid Application Development (RAD). In both cases the extension shows its developer text in every language.

This is a property of how the extension was published, not a defect in the labels or the translation files. The same source published with a full build shows the translations.

## Best Practice

Verify translations with a full build and a regular publish. Before investigating labels, translation IDs, or XLIFF content for a "translations do not appear" report, establish how the extension was published.

## Anti Pattern

Concluding from a development sandbox that captions or messages are untranslated, and then changing labels, adding `ML` properties, or rewriting the XLIFF files to fix it, when the extension was published with incremental build or RAD. The change does not make the translations appear in those modes, and switching to `ML` properties removes the text from the translation file altogether; see [`ml-properties-and-textconst-are-not-exported-to-xliff.md`](ml-properties-and-textconst-are-not-exported-to-xliff.md).

Do not report missing translations as a code defect on evidence that comes only from an incremental or RAD publish.

## References

[Working with translation files: Generating the XLIFF file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files#generating-the-xliff-file), [AL Language extension configuration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-extension-configuration), and [Work with Rapid Application Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rad-publishing).

---

From microsoft/BCQuality at dd49341, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
