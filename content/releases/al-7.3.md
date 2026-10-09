---
id: release/al-7.3
type: release
title: AL Language extension 7.3
summary: "AL Language extension 7.3 for Business Central 2021 release wave 1 update 3: released 2021-07-05; 4 changelog entries."
tier: official
language: en
system: development
tags:
  - application insights connection string
  - fixes of code emitting issues
  - validating keys in table extensions
  - validating trigger signatures
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.367Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6ad6c8c3bcfbad99165262bac37d8c6a4fed154ad7bb11d6708e27b42cf3e836
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 7.3
    date: "2021-07-05"
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
version: "7.3"
wave: 2021 release wave 1 update 3
major: null
preview_at: null
released_at: "2021-07-05"
published_at: "2021-07-05"
prerelease: false
entry_count: 4
issues: []
changes: []
---

# AL Language extension 7.3

> AL Language extension 7.3 for Business Central 2021 release wave 1 update 3: released 2021-07-05; 4 changelog entries.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 1 update 3

For this update there is one new feature and bug fixes in several areas.

## Application Insights connection string

The new app.json property `applicationInsightsConnectionString` allows you to specify the full connection string provided in your Azure Application Insights dashboard. The previously introduced `applicationInsightsKey` is still supported, we do, however recommend using `applicationInsightsConnectionString` in new projects.

## Fixes of code emitting issues

* Procedures can now be invoked within DataSource expressions in columns in Reports and Pages.
* [#6235](https://github.com/microsoft/al/issues/6235). Protected members of one extension object are now accessible by other extensions objects.

## Validating keys in table extensions

[#6680](https://github.com/microsoft/al/issues/6680). Validating if a field added to a key is not obsolate and also limiting the number of fields that can be added to a field.

## Validating trigger signatures

We now report warnings for all invalid trigger signatures. From Version 8.0 all these trigger signature warnings will turn into errors, because invalid trigger signatures may cause runtime errors.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
