---
id: topic/dev-itpro/development/extension-lifecycle/translation
type: topic
title: Translation
summary: Translation of Business Central extensions using XLIFF files. It covers how layered translation sources override each other by language priority and app dependencies, and how to generate and edit XLIFF files with namespace-aware IDs.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:14.345Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 57ae860e6738e631a0ad182420b8338cfbb7b6168b78e886c30651f22538bedb
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-translations-overview
    title: Translations Overview
    date: "2021-06-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files
    title: Work with XLIFF Translation Files
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-translations-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle
  localizations: []
  videos: []
  posts:
    - post/gerardorenteria-blog/14381
  guidelines: []
  changes:
    - change/bcapps/12062
    - change/bcapps/12097
learn_toc_path:
  - Development
  - Extension lifecycle
  - Translation
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 58c2c81625df87190e9293aa2b56260d3bd28e99ed7146537c11d48f685008eb
narrative: generated
---

# Translation

> Translation of Business Central extensions using XLIFF files. It covers how layered translation sources override each other by language priority and app dependencies, and how to generate and edit XLIFF files with namespace-aware IDs.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Translation · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Translation in Business Central is based on XLIFF files. The overview page explains the layered system: several translation sources can apply at once, and one overrides another according to language priority and app dependencies. It also covers caption translation, primary language fallback, and the global and local language concepts. The page references version 18.3.\n\nThe second page is the hands-on guide. It shows how to generate translation files, add translations, and use namespace-aware IDs to translate UI elements and labels. It refers to the TranslationFile feature, GenerateCaptions, GenerateLockedTranslations, TranslationsWithNamespaces and label syntax. The page references runtime 18.\n\nStart with the overview to understand how languages are layered and which translation wins. Then use the XLIFF guide to set up file generation in your extension.

## Key points

- Translations use the XLIFF format.
- Translation sources are layered and can override each other based on language priority and app dependencies.
- Caption translation, primary language fallback, global language and local language are part of the translation model.
- The TranslationFile feature is used to generate translation files for an extension.
- GenerateCaptions, GenerateLockedTranslations and TranslationsWithNamespaces are features related to generating translation files.
- Namespace-aware translation IDs are used to translate UI elements and labels.
- The overview page references version 18.3 and the XLIFF page references runtime 18.

## Learn pages

- [Translations Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-translations-overview): An overview of the translation layers of Business Central and the extension model
- [Work with XLIFF Translation Files](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files): Learn how to generate, maintain, and package XLIFF translation files for multilingual Business Central extensions, including namespace-aware IDs.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12062 [Master]-[Quality Management] Workflow events are not localized](../../../../changes/bcapps/12062.md) (code change): "Workflow event labels in the Quality Management app are now properly localized"
- [#12097 [29.X]-[Quality Management] Workflow events are not localized](../../../../changes/bcapps/12097.md) (code change): "Event labels for quality workflows now support localization"
- [🚫 Never Publish an AL Extension with Missing Translations Again](../../../../posts/gerardorenteria-blog/14381.md) (community post): "A VS Code extension that validates translation files are present before publishing AL extensions"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
