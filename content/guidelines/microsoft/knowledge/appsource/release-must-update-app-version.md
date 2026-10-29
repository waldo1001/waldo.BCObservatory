---
id: guideline/microsoft/knowledge/appsource/release-must-update-app-version
type: guideline
title: Update the app version at every release
summary: At every release — a branch merged to main, a tagged release build, or an AppSource submission — the app's version is consciously updated, not left to the pipeline alone.
tier: official
language: en
tags:
  - version
  - release
  - app-json
  - semver
  - al-go
  - appsource
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:45.313Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fb8f483621ec2c3fa50f587adc482f0b15f9ee5a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/release-must-update-app-version.md
    title: "microsoft/BCQuality: Update the app version at every release"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
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
    - change/bcquality/157
repo_path: microsoft/knowledge/appsource/release-must-update-app-version.md
layer: microsoft
kind: rule
domain: appsource
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

# Update the app version at every release

> At every release — a branch merged to main, a tagged release build, or an AppSource submission — the app's version is consciously updated, not left to the pipeline alone.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/release-must-update-app-version.md) · microsoft layer · appsource · BC all · tier official · derived

## Description

At every release — a branch merged to `main`, a tagged release build, or an AppSource submission — the app's version is consciously updated, not left to the pipeline alone.

| Version part | Owner | When |
|---|---|---|
| Major | Developer decision | Breaking change (schema, API, removed objects) |
| Minor | Developer decision | Every release with new functionality |
| Build / Revision | AL-Go pipeline | Automatic — never hand-edited |

The app's stable identity is its `id` in `app.json`; the version identifies which release — which code state — of that app is deployed. Two customer environments running "the same" version with different code is an undiagnosable support case. AppSource's actual requirement is strict full-version ordering — the complete version must be greater than the previously submitted version — which an AL-Go-generated build/revision increment can satisfy on its own; AppSource does not require major.minor itself to change. Treating major.minor as a deliberate, human-decided compatibility signal is still valuable practice — it is a statement about what changed that no pipeline can make on its own — just not a platform-enforced requirement.

## Best Practice

    Before the release merge:
      app.json:       "version": "1.3.0.0"    (new functionality -> minor bump, by team convention)
      AL-Go settings: "repoVersion": "1.3"     (where used)
    Then: feature branch -> main via PR, tag, release.

"Feature branches never touch the version" and "every merge to main is a release" are workflow choices your team can adopt for compatibility clarity — not something AppSource itself requires.

## Anti Pattern

    Branch merged to main and released.
    app.json still says "version": "1.2.0.0" -- same as the previous release.
    Two different code states now share one version identity.

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
