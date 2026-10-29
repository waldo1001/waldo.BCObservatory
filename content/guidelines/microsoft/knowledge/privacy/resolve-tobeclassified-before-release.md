---
id: guideline/microsoft/knowledge/privacy/resolve-tobeclassified-before-release
type: guideline
title: Resolve every `ToBeClassified` before release
summary: DataClassification = ToBeClassified is the sentinel value the AL compiler accepts while a developer has not yet decided what a new field actually stores.
tier: official
language: en
tags:
  - tobeclassified
  - data-classification
  - release
  - appsource
  - development
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:24.398Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 682070413f243d3e781eba9923a222a3631258dd
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/resolve-tobeclassified-before-release.md
    title: "microsoft/BCQuality: Resolve every `ToBeClassified` before release"
    date: "2026-05-21"
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
  changes: []
repo_path: microsoft/knowledge/privacy/resolve-tobeclassified-before-release.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - ToBeClassified
  - CustomerContent
  - EndUserIdentifiableInformation
  - EndUserPseudonymousIdentifiers
  - AccountData
  - OrganizationIdentifiableInformation
  - SystemMetadata
---

# Resolve every `ToBeClassified` before release

> DataClassification = ToBeClassified is the sentinel value the AL compiler accepts while a developer has not yet decided what a new field actually stores.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/resolve-tobeclassified-before-release.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

`DataClassification = ToBeClassified` is the sentinel value the AL compiler accepts while a developer has not yet decided what a new field actually stores. It exists for the development phase only and must be resolved to a real classification (`CustomerContent`, `EndUserIdentifiableInformation`, `EndUserPseudonymousIdentifiers`, `AccountData`, `OrganizationIdentifiableInformation` or `SystemMetadata`) before the code ships. A released field left at `ToBeClassified` tells the platform "we have not classified this data" — which means GDPR data-subject requests, telemetry and audit reports cannot reason about it.

## Best Practice

Treat `ToBeClassified` as a TODO marker that fails release readiness. Sweep new table objects and table extensions for it before submitting a build for publication. If the right classification is genuinely unclear, decide between `CustomerContent` and `EndUserIdentifiableInformation` from the data's content, not from convenience.

## Anti Pattern

Leaving `ToBeClassified` in a shipped extension. Reviewers who treat the value as "I'll figure it out later" ship a field whose privacy posture is undefined for every customer that installs the app.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
