---
id: guideline/microsoft/knowledge/upgrade/dependency-version-is-a-minimum
type: guideline
title: The `version` of a dependency in `app.json` is a minimum
summary: Each entry in the dependencies list of app.json names another extension by id, name, publisher, and version. The version does not pin the dependency.
tier: official
language: en
tags:
  - app-json
  - dependencies
  - minimum-version
  - dependency-version
  - symbols
  - manifest
  - compatibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-21T00:15:56.434Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ee45808ea9abda23cd90aef4b176d75dedaa2d65
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/dependency-version-is-a-minimum.md
    title: "microsoft/BCQuality: The `version` of a dependency in `app.json` is a minimum"
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
  changes: []
repo_path: microsoft/knowledge/upgrade/dependency-version-is-a-minimum.md
layer: microsoft
kind: rule
domain: upgrade
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

# The `version` of a dependency in `app.json` is a minimum

> Each entry in the dependencies list of app.json names another extension by id, name, publisher, and version. The version does not pin the dependency.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/dependency-version-is-a-minimum.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Each entry in the `dependencies` list of `app.json` names another extension by `id`, `name`, `publisher`, and `version`. The version does not pin the dependency. It defines the minimum version: at run time and when downloading symbols, the latest version of the dependency that satisfies the name, publisher, and minimum version is returned. The same reading applies to `application` and `platform`, which state minimum versions of the Application package and the System symbols.

Two consequences follow. The extension can be installed alongside any later version of the dependency, so it does not control which version it actually runs against. And the symbols a developer compiles against are usually newer than the declared minimum, so the code can use a member that the declared minimum version does not contain.

## Best Practice

Declare the lowest dependency version whose public surface the extension really uses, and raise it in the same change that starts using a member introduced in a later version. Treat the declared value as a statement of what the extension requires, not as a record of what was installed on the development environment.

Do not rely on a dependency staying at the declared version. Behavior that must hold across dependency versions belongs in tests against the versions the extension claims to support.

## Anti Pattern

Leaving the dependency version at its original value while adopting procedures, events, or fields that the dependency added later. The project compiles against current symbols, and the manifest still claims compatibility with a version that lacks those members, so the mismatch surfaces only on an environment that has the older dependency.

A second form is reading the version as exact: reporting a dependency as outdated or mismatched because a newer version exists, or expecting the declared version to be the one that is loaded.

## References

The `dependencies`, `application`, and `platform` settings in [JSON files](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files#appjson-file) and [Choose runtime version in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime).

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
