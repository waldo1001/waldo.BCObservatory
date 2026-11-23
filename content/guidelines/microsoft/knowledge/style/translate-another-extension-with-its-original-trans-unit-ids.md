---
id: guideline/microsoft/knowledge/style/translate-another-extension-with-its-original-trans-unit-ids
type: guideline
title: Translate another extension with its own translation IDs
summary: An extension can ship translations for a different extension, for example a language app that translates the Base Application. The translated extension must be listed in dependencies in app.json, and the translated .xlf file goes in a Translations folder at the root of the translating extension.
tier: official
language: en
tags:
  - xliff
  - translation
  - dependency
  - trans-unit
  - base-application
  - language-app
  - original-attribute
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
  input_hash: cc9b2cc38b285da82b467135e3343985027399c6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/translate-another-extension-with-its-original-trans-unit-ids.md
    title: "microsoft/BCQuality: Translate another extension with its own translation IDs"
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
repo_path: microsoft/knowledge/style/translate-another-extension-with-its-original-trans-unit-ids.md
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

# Translate another extension with its own translation IDs

> An extension can ship translations for a different extension, for example a language app that translates the Base Application. The translated extension must be listed in dependencies in app.json, and the translated .xlf file goes in a Translations folder at the root of the translating extension.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/translate-another-extension-with-its-original-trans-unit-ids.md) · microsoft layer · style · BC all · tier official · derived

## Description

An extension can ship translations for a different extension, for example a language app that translates the Base Application. The translated extension must be listed in `dependencies` in `app.json`, and the translated `.xlf` file goes in a `Translations` folder at the root of the translating extension. Two details decide whether those translations are applied, and neither produces a build error when wrong.

First, the `original` attribute of the `<file>` element must not be the name of the current app. When it is, the translations are used only for labels in the current app. Second, each `<trans-unit id>` must be the ID of the property where the text was originally defined, not the ID of an extension object that modifies it.

## Best Practice

Take the translation IDs from the XLIFF file generated for the extension being translated, and keep that extension's name in the `original` attribute. To change the translated caption of a page that a page extension also touches, target the page's own ID, such as `Page 2931038265 - Property 2879900210`, rather than the page extension's ID.

The generated file of an app that translates itself already has the correct `original` value; this concern applies only to translating a dependency.

## Anti Pattern

Copying the current app's generated `.xlf` as a starting point for translating a dependency, which leaves `original` set to the current app, or using the `PageExtension ...` translation ID to translate a caption that the base page defines. The file is accepted, the extension builds and publishes, and the dependency's UI stays untranslated.

## References

[Working with translation files: Translating other extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files#translating-other-extensions).

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
