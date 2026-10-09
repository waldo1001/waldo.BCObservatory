---
id: release/al-9.1
type: release
title: AL Language extension 9.1
summary: "AL Language extension 9.1 for Business Central 2022 release wave 1: no upload of it left in the marketplace gallery; 2 changelog entries, 4 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - github issues
  - miscellaneous
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.664Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 91f776683bc544df0a37df99951669f4ef5f8a9c7fb587bcb24cb236fb092350
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 9.1
    date: null
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
version: "9.1"
wave: 2022 release wave 1
major: null
preview_at: null
released_at: null
published_at: null
prerelease: true
entry_count: 2
issues:
  - 6857
  - 6972
  - 6978
  - 7010
changes: []
---

# AL Language extension 9.1

> AL Language extension 9.1 for Business Central 2022 release wave 1: no upload of it left in the marketplace gallery; 2 changelog entries, 4 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2022 release wave 1

## GitHub Issues

- [#6857](https://github.com/microsoft/AL/issues/6857) Missing error on compile upgrade codeunits being run by code
- [#7010](https://github.com/microsoft/AL/issues/7010) F12 does not find the AL file that contains the definition
- [#6972](https://github.com/microsoft/AL/issues/6972) Unable to debug files with a forward slash in the name
- [#6978](https://github.com/microsoft/AL/issues/6978) broken Intellisense/auto-complete for begin/end of a procedure returning a record type

## Miscellaneous

- Fixing crash when accessing a report layout using a variable of the Report data type. Note that report layouts cannot be accessed by using a variable based on the Report data type.
- Fixing an issue that occurred if the version of a project, in an already opened workspace, had changed, any projects that were depending on it failed to load if set to active. The only solution was to trigger the reload window command.
- Update warnings about dependency on Application and System in the 'dependencies' manifest property. The recommended style is to use the dedicated manifest properties: 'application' and 'platform'.
- Removed a duplicate entry for the "Generate Profile File" option from the Visual Studio Code command palette.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
