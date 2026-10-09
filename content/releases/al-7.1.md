---
id: release/al-7.1
type: release
title: AL Language extension 7.1
summary: "AL Language extension 7.1 for Business Central 2021 release wave 1 update 1: released 2021-04-01; 4 changelog entries."
tier: official
language: en
system: development
tags:
  - snapshot debugging
  - reports extensions
  - built-in functions and types
  - go to definition
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.405Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 44a51445777d3676d49451ff3d5871e19b7346cd824a2ab12baf8322e6ce62d3
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 7.1
    date: "2021-04-01"
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
version: "7.1"
wave: 2021 release wave 1 update 1
major: null
preview_at: null
released_at: "2021-04-01"
published_at: "2021-04-01"
prerelease: false
entry_count: 4
issues: []
changes: []
---

# AL Language extension 7.1

> AL Language extension 7.1 for Business Central 2021 release wave 1 update 1: released 2021-04-01; 4 changelog entries.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 1 update 1

For this update there are bug fixes and changes around a few different areas.

## Snapshot debugging

Snapshot debugging allows recording built-in codeunit based stack traces if there is a snappoint defined in the al file containing the subscription to the built-in code unit trigger event.

## Reports extensions

* Parameters and captions are now supported report layouts in report extensions
* Debugging supported added for report extension
* Added support for modify on dataitems with a set of triggers to go along with it.
* There were a couple of issues around adding dataitems into the correct position, which caused layouts to not work correctly.
* The checks for duplicate usage of identical names did not catch all cases.

## Built-in functions and types

* [#6568](https://github.com/microsoft/al/issues/6568). The deprecation warning has been removed from UploadIntoStream
* [#6570](https://github.com/microsoft/al/issues/6570). The type ModuleInfo now contains a PackageId.
* If the StartSession with the timeout was to be used, it required a record and company. That has been changed so they are not required.

## Go to Definition

* When a package has ShowMyCode set to false, then the editor will show a generated view from the symbol information available. That has been improved to include more objects.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
