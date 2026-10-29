---
id: guideline/community/knowledge/appsource/define-profiles-as-al-objects
type: guideline
title: Define profiles as AL objects
summary: Profiles delivered by a Marketplace extension must be declared as AL profile objects. A profile object is validated with its Role Center and page customizations when the extension is compiled and is registered through extension synchronization.
tier: official
language: en
tags:
  - profile-object
  - profile-table
  - install-codeunit
  - role-center
  - page-customization
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:11.146Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6f34aeeaa9587e425e7994a85dc709c771f2d122
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/define-profiles-as-al-objects.md
    title: "microsoft/BCQuality: Define profiles as AL objects"
    date: "2026-09-14"
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
    - change/bcquality/142
repo_path: community/knowledge/appsource/define-profiles-as-al-objects.md
layer: community
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
examples: 2
identifiers:
  - RoleCenter
---

# Define profiles as AL objects

> Profiles delivered by a Marketplace extension must be declared as AL profile objects. A profile object is validated with its Role Center and page customizations when the extension is compiled and is registered through extension synchronization.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/define-profiles-as-al-objects.md) · community layer · appsource · BC all · tier official · derived

## Description

Profiles delivered by a Marketplace extension must be declared as AL `profile` objects. A profile object is validated with its Role Center and page customizations when the extension is compiled and is registered through extension synchronization. Inserting profile-table records from install or setup code bypasses that object lifecycle.

## Best Practice

Declare each app-owned profile with the `profile` object and set its `RoleCenter`, user-facing caption, and optional customizations in AL. Let installation and synchronization register the object.

See sample: [`define-profiles-as-al-objects.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/define-profiles-as-al-objects.good.al).

## Anti Pattern

Install, upgrade, or setup code that creates an app-owned profile by inserting a `Profile` table record. Detection signal: a `Record Profile` variable followed by `Insert` in profile provisioning code.

See sample: [`define-profiles-as-al-objects.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/define-profiles-as-al-objects.bad.al).

## Examples

- [Good: define-profiles-as-al-objects.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/define-profiles-as-al-objects.good.al)
- [Bad: define-profiles-as-al-objects.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/define-profiles-as-al-objects.bad.al)

## Changed by

- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
