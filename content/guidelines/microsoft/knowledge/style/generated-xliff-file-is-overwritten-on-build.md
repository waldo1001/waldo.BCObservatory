---
id: guideline/microsoft/knowledge/style/generated-xliff-file-is-overwritten-on-build
type: guideline
title: The generated XLIFF file is rewritten on every build
summary: 'With "features": [ "TranslationFile" ] in app.json, each build writes a .xlf file into the Translations folder that contains every label, label property, and report label of the extension as <source> elements. That generated file is build output: the next build overwrites it.'
tier: official
language: en
tags:
  - xliff
  - xlf
  - translation-file
  - generated
  - translations-folder
  - target-language
  - app-json
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
  input_hash: 541f12c50d7a5a3715aba1f1bcaa429d63a6e726
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/generated-xliff-file-is-overwritten-on-build.md
    title: "microsoft/BCQuality: The generated XLIFF file is rewritten on every build"
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
repo_path: microsoft/knowledge/style/generated-xliff-file-is-overwritten-on-build.md
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

# The generated XLIFF file is rewritten on every build

> With "features": [ "TranslationFile" ] in app.json, each build writes a .xlf file into the Translations folder that contains every label, label property, and report label of the extension as <source> elements. That generated file is build output: the next build overwrites it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/generated-xliff-file-is-overwritten-on-build.md) · microsoft layer · style · BC all · tier official · derived

## Description

With `"features": [ "TranslationFile" ]` in `app.json`, each build writes a `.xlf` file into the `Translations` folder that contains every label, label property, and report label of the extension as `<source>` elements. That generated file is build output: the next build overwrites it. A translation is a separate file that adds a `target-language` and one `<target>` per label, and there can be only one `.xlf` file per language. Adding `<target>` elements to the generated file therefore loses the work on the next build, and it is easy to miss because the build still succeeds.

## Best Practice

Treat the generated file as the source list only. Keep each translation in its own file in the `Translations` folder, one file per target language, named after the extension and language (for example `<extensionname>.<language>.xlf`); the name is a convention, not enforced. Regenerate the source file by building, then bring new or changed `<source>` entries into the per-language files.

When reviewing, a per-language file that lags behind the generated file is a translation gap, not a compile problem: untranslated labels fall back to the developer text.

## Anti Pattern

Editing the generated file in place, for example adding `target-language` and `<target>` elements to it, or committing it as the Danish or German translation. The next build replaces the file and the translations disappear without a diagnostic.

A second form is two files for the same language in the `Translations` folder, such as a renamed copy next to an older one. Only one file per language is supported.

## References

[Working with translation files](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files) and the `features` setting in [JSON files](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files).

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
