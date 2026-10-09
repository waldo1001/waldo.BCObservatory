---
id: release/al-6.4
type: release
title: AL Language extension 6.4
summary: "AL Language extension 6.4 for Business Central 2020 release wave 2 update 4: no upload of it left in the marketplace gallery; 1 changelog entry, 6 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - bugs fixed
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.602Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: dbce58fdb8d869916bab5e72330a4bb03a11b3c4464faf0162d7f21d73fd17dd
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 6.4
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
version: "6.4"
wave: 2020 release wave 2 update 4
major: null
preview_at: null
released_at: null
published_at: null
prerelease: true
entry_count: 1
issues:
  - 5880
  - 6304
  - 6368
  - 6379
  - 6428
  - 6436
changes: []
---

# AL Language extension 6.4

> AL Language extension 6.4 for Business Central 2020 release wave 2 update 4: no upload of it left in the marketplace gallery; 1 changelog entry, 6 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2020 release wave 2 update 4

## Bugs fixed

* Add a message to sandbox publishing that extensions which have been published from Visual Studio Code are removed when the environment is updated or relocated within our service.
* Set compatibility for NavigationPageId and Multiplicity to 6.3. Github issue: https://github.com/microsoft/AL/issues/6436
* Use DropDown instead of Dropdown. Github issue: https://github.com/microsoft/AL/issues/6428
* Interface implementation validation sometimes falsely logs an error if a member is already implemented.
* Use of obsolete page variables are not showing warnings when used as variables.
* Full diagnostics are sometimes not reported when .NET types are included.
* Fixed report column decimal places format. Github issue: https://github.com/microsoft/AL/issues/5880
* Fix compatibility definition of certain properties. Github issue: https://github.com/microsoft/AL/issues/6368
* Fixed naming of XMLPort. https://github.com/microsoft/AL/issues/6304
* Add equivalence between Visual Studio Code 'Start Debugging' command and al.publish, respectively 'Run without Debugging' command and al.publishNoDebug command.
* 'Trigger Parameter Hint' (Ctrl+Shift+Space) command is not working. Github issue: https://github.com/microsoft/AL/issues/6379
* Support for variables larger then 1 Kb on the debug console.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
