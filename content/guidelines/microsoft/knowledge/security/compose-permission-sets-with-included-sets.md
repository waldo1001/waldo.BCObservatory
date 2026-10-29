---
id: guideline/microsoft/knowledge/security/compose-permission-sets-with-included-sets
type: guideline
title: Compose permission sets with IncludedPermissionSets
summary: The IncludedPermissionSets property lets one AL permission set reference another, composing rights out of smaller building blocks.
tier: official
language: en
tags:
  - permissionset
  - includedpermissionsets
  - assignable
  - composition
  - role
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.042Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: db86f6aee7bf963aa5f8945c8a15e5369056933d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/compose-permission-sets-with-included-sets.md
    title: "microsoft/BCQuality: Compose permission sets with IncludedPermissionSets"
    date: "2026-09-09"
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
    - change/bcquality/174
    - change/bcquality/49
repo_path: microsoft/knowledge/security/compose-permission-sets-with-included-sets.md
layer: microsoft
kind: rule
domain: security
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
  - IncludedPermissionSets
---

# Compose permission sets with IncludedPermissionSets

> The IncludedPermissionSets property lets one AL permission set reference another, composing rights out of smaller building blocks.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/compose-permission-sets-with-included-sets.md) · microsoft layer · security · BC all · tier official · derived

## Description

The `IncludedPermissionSets` property lets one AL permission set reference another, composing rights out of smaller building blocks. Combined with `Assignable = false` on the building blocks, an extension can ship focused per-module units (a table-data cluster, an API-access cluster) and assemble role-shaped sets that include them. Adding an object updates one building block, and every role-shaped set that includes it inherits the change automatically — instead of drifting apart across duplicated definitions.

## Best Practice

Break permission grants into small, focused building blocks, one per cohesive concern. Mark the building blocks `Assignable = false` so administrators do not accidentally assign a fragment. Build role-shaped, `Assignable = true` sets that reference the relevant building blocks through `IncludedPermissionSets`. When the extension grows, the structure absorbs the growth without duplicated edits.

See sample: [`compose-permission-sets-with-included-sets.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/compose-permission-sets-with-included-sets.good.al).

## Anti Pattern

Declaring several role-shaped permission sets that each re-enumerate the same object lists. Adding a new table means touching every set by hand; the sets drift apart over time, and subtle authorization bugs appear where one role was updated and a sibling role was not.

See sample: [`compose-permission-sets-with-included-sets.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/compose-permission-sets-with-included-sets.bad.al).

## Examples

- [Good: compose-permission-sets-with-included-sets.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/compose-permission-sets-with-included-sets.good.al)
- [Bad: compose-permission-sets-with-included-sets.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/compose-permission-sets-with-included-sets.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#49 Promote security knowledge from community to Microsoft layer](../../../../changes/bcquality/49.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
