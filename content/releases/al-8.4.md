---
id: release/al-8.4
type: release
title: AL Language extension 8.4
summary: "AL Language extension 8.4 for Business Central 2021 release wave 2: released 2022-02-24; 4 changelog entries, 4 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - validation of runtime breaking changes
  - github issues
  - warnings that will turn into errors in the next releases
  - miscellaneous
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.257Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b253ef89a1bfddf25afc462143db763c0289069b2ffc8bc588ad158d802e8b84
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 8.4
    date: "2022-02-24"
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
version: "8.4"
wave: 2021 release wave 2
major: null
preview_at: null
released_at: "2022-02-24"
published_at: "2022-02-24"
prerelease: false
entry_count: 4
issues:
  - 6851
  - 6872
  - 6892
  - 6927
changes: []
---

# AL Language extension 8.4

> AL Language extension 8.4 for Business Central 2021 release wave 2: released 2022-02-24; 4 changelog entries, 4 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 2

## Validation of runtime breaking changes

In order to call AL procedures, the Business Central runtime relies on a unique ID assigned to each procedure. When a procedure changes its signature, its method ID changes too and dependent extensions which are referencing it must be recompiled in order to use the new ID. Some signature changes do not have an impact on the compilation of dependent extensions, but are still causing the generation of a new method ID. For example, adding a var parameter, or adding a return type. These changes are called runtime breaking changes.

In order to prevent runtime issues caused by runtime breaking changes and provide a better experience to customers in SaaS, a new AppSourceCop rule [AS0102](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0102) has been introduced and the severity of the rules [AS0077](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0077) and [AS0078](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0078) has changed from `Warning` to `Error`.

These changes have already been applied to the technical validation of AppSource submissions in Partner Center.

## GitHub Issues

- [#6892](https://github.com/microsoft/AL/issues/6892) Implementing Interface with Complex Return Type Creates Incorrect Signature
- [#6927](https://github.com/microsoft/AL/issues/6927) Cannot remove obsolete controladdin
- [#6872](https://github.com/microsoft/AL/issues/6872) Can't Go To Definition of fields used in key
- [#6851](https://github.com/microsoft/AL/issues/6851) AL0697 - Valid Fieldtype Fielref.Value() --> New Cast AsGuid, As DateTime

## Warnings that will turn into errors in the next releases

Over the last periods, we have introduced multiple warning diagnostics that will turn into an error in a future release. You can find a summary below:

- Warning [AL0660](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostic-al660) will become an error with Business Central 2022 release wave 2.
- Warning [AL0677](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostic-al677) will become an error with Business Central 2022 release wave 2.
- Warning [AL0692](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostic-al692) will become an error with Business Central 2022 release wave 2.
- Warning [AL0694](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostic-al694) will become an error with Business Central 2022 release wave 1.
- Warning [AL0697](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostic-al697) will become an error with Business Central 2022 release wave 2
- Warning [AL0711](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostic-al711) will become an error with Business Central 2023 release wave 1.
- Warning [AL0715](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostic-al715) will become an error with Business Central 2022 release wave 2.

### Miscellaneous

The way projects are loading in a workspace has changed. While the active project and its project references are loaded no compilation-based information like IntelliSense, symbols are available.
Depending on the number of files in the project reference closure of the active project, this operation can be time-consuming.
Projects in a workspace that are not loaded are marked with letter N. A project will load if it is made active by opening an AL file, or the app.json.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
