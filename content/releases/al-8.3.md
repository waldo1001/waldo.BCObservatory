---
id: release/al-8.3
type: release
title: AL Language extension 8.3
summary: "AL Language extension 8.3 for Business Central 2021 release wave 2: released 2022-01-18; 3 changelog entries, 2 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - new appsourcecop rule
  - miscellaneous
  - github issues
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.266Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1b44e5266de1fc94a3caf07dd7e29e3769185a00c2c6552db202f9fd997b452c
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 8.3
    date: "2022-01-18"
    commit: null
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
source_id: al-language-extension
extension: ms-dynamics-smb.al
version: "8.3"
wave: 2021 release wave 2
major: null
preview_at: null
released_at: "2022-01-18"
published_at: "2022-01-18"
prerelease: false
entry_count: 3
issues:
  - 6848
  - 6888
changes: []
---

# AL Language extension 8.3

> AL Language extension 8.3 for Business Central 2021 release wave 2: released 2022-01-18; 3 changelog entries, 2 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 2

## New AppSourceCop rule

In order to simplify and improve the dependency handling in Business Central, it is now required to use the `application` property in the app.json file of AppSource apps.
A dedicated AppSourceCop rule has then been created to validate it, see [AS0100](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0100).

## Miscellaneous

* New timestamp format in Output window when starting and finishing compilation.
* Added support for generating profile files in the right-click context menu on snapshots, which was previously only possible through the Command Palette.
* Added CodeLens support for collected frames in the profiler.
* Improved profile generation performance.

## GitHub issues

- [#6888](https://github.com/microsoft/AL/issues/6888) Code 'UA' is not a valid ISO 3166-1 alpha-2 code
- [#6848](https://github.com/microsoft/AL/issues/6848) Analyzer throws Rule0242PartialRecordsDetectJitLoads exception

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
