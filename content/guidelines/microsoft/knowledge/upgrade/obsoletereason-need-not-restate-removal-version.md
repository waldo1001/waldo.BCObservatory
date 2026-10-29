---
id: guideline/microsoft/knowledge/upgrade/obsoletereason-need-not-restate-removal-version
type: guideline
title: ObsoleteReason need not restate the removal version; ObsoleteTag carries it
summary: An obsoleted object, field, key, enum, or enum value carries both ObsoleteReason and ObsoleteTag, and the two properties have different jobs. ObsoleteReason is free text that explains why the element is obsolete and what replaces it.
tier: official
language: en
tags:
  - obsolete-reason
  - obsolete-tag
  - deprecation
  - version
  - metadata
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:17.589Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 91659218838e2889b266b5f11c4e02f700f37d5b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletereason-need-not-restate-removal-version.md
    title: "microsoft/BCQuality: ObsoleteReason need not restate the removal version; ObsoleteTag carries it"
    date: "2026-07-21"
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
    - change/bcquality/118
repo_path: microsoft/knowledge/upgrade/obsoletereason-need-not-restate-removal-version.md
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
identifiers:
  - ObsoleteReason
  - ObsoleteTag
---

# ObsoleteReason need not restate the removal version; ObsoleteTag carries it

> An obsoleted object, field, key, enum, or enum value carries both ObsoleteReason and ObsoleteTag, and the two properties have different jobs. ObsoleteReason is free text that explains why the element is obsolete and what replaces it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/obsoletereason-need-not-restate-removal-version.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

An obsoleted object, field, key, enum, or enum value carries both `ObsoleteReason` and `ObsoleteTag`, and the two properties have different jobs. `ObsoleteReason` is free text that explains why the element is obsolete and what replaces it. `ObsoleteTag` identifies when it became obsolete — typically the version, release, or work item that introduced the obsoletion. The version traceability lives in `ObsoleteTag`; there is no requirement that `ObsoleteReason` also name the removal version or repeat what the tag already records. A reason that omits a version number is complete as long as it explains the deprecation and points to a replacement, provided `ObsoleteTag` pins the version.

## Best Practice

When `ObsoleteTag` already carries the version or tracking reference, do not flag `ObsoleteReason` for not mentioning a version or removal release. Judge `ObsoleteReason` on whether it explains the deprecation and names a replacement, and judge version traceability on `ObsoleteTag` instead.

## Anti Pattern

Flagging an `ObsoleteReason` as vague, incomplete, or missing a version reference solely because it does not restate the removal version, when `ObsoleteTag` already records that version. Requiring the reason to duplicate the tag's version is not a real convention.

## See also

- `obsoletion-requires-reason-and-tag.md` — both properties are required; the reason names the replacement and the tag identifies when the element became obsolete.

## Changed by

- [#118 knowledge: 3 FP-suppression guards from BC apps negative feedback](../../../../changes/bcquality/118.md), 2026-07-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
