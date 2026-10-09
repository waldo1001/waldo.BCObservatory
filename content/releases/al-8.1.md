---
id: release/al-8.1
type: release
title: AL Language extension 8.1
summary: "AL Language extension 8.1 for Business Central 2021 release wave 2: released 2021-10-01; 4 changelog entries, 3 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - new appsourcecop rules
  - bug fixes
  - miscellaneous
  - github issues
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.292Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7cb7e757cb5747ed1765bba2c639a35de57f99a910b99d4f4ee1aba70cb8c26a
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 8.1
    date: "2021-10-01"
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
version: "8.1"
wave: 2021 release wave 2
major: null
preview_at: null
released_at: "2021-10-01"
published_at: "2021-10-01"
prerelease: false
entry_count: 4
issues:
  - 6731
  - 6786
  - 6812
changes: []
---

# AL Language extension 8.1

> AL Language extension 8.1 for Business Central 2021 release wave 2: released 2021-10-01; 4 changelog entries, 3 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 2

## New AppSourceCop rules

Based on your feedback on Yammer, two AppSourceCop rules have been introduced:
- [AS0098](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0098) validates the use of affixes on report extension object members and on enum values defined in enum extensions.
- [AS0099](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0099) validates that the ID of fields defined in tables and the ID of values defined in enum extension is within the allowed range for extensions.

These rules are reported as Warning (AS0098) and Information (AS0099) to raise awareness regarding potential name and ID collisions in customer environments, but not complying with these rules will not fail your submission in AppSource.

## Bug fixes

### Miscellaneous

* In certain scenarios involving loops the hit count was not computed correctly for the Profiler.
* Reference resolution has been optimized for scenarios with application references having non-existing secondary references in the package cache path.
* Built-in methods Import and Export for Blob type fields will be available only for OnPrem from runtime version 9.0.
* New overloads on the TestField and FieldError methods to include an ErrorInfo object to enable collecting errors.
* Fixed issue with feature "GenerateCaptions" where it wouldn't work for Page Captions.

### GitHub issues

- [#6812](https://github.com/microsoft/AL/issues/6812) Publish Extension without building does not take into account EnvironmentName.
- [#6731](https://github.com/microsoft/AL/issues/6731) AppSourceCop AS0064: removing an obsoleted Interface in combination with public objects implementing that one is considered a breaking change.
- [#6786](https://github.com/microsoft/AL/issues/6786) Adding new attribute to the compilation options `continueBuildOnError` which specifies if build should continue even if errors are found. The default and recommended value from a performance point of view is `false`. It can also be passed to our CLI client using `continuebuildonerror [-/+]`.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
