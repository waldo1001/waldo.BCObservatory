---
id: guideline/microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle
type: guideline
title: Deprecate public members through the Obsolete lifecycle, never delete them outright
summary: "Deleting or renaming a published procedure (or object) in a single release is a hard break: dependent extensions that reference it stop compiling the moment they pick up the new version, with no warning window to migrate. AL provides staged deprecation so consumers get advance notice."
tier: official
language: en
tags:
  - obsolete
  - deprecation
  - obsoletestate
  - obsoletetag
  - pending
  - removed
  - public-procedure
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:19.045Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f7d05d5908cd46af4200f784ef6fe767c74e98c6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle.md
    title: "microsoft/BCQuality: Deprecate public members through the Obsolete lifecycle, never delete them outright"
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
    - change/bcquality/93
repo_path: microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle.md
layer: microsoft
kind: rule
domain: breaking-changes
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
  - ObsoleteState
  - CalcNet
  - CalculateNetAmount
---

# Deprecate public members through the Obsolete lifecycle, never delete them outright

> Deleting or renaming a published procedure (or object) in a single release is a hard break: dependent extensions that reference it stop compiling the moment they pick up the new version, with no warning window to migrate. AL provides staged deprecation so consumers get advance notice.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle.md) · microsoft layer · breaking-changes · BC all · tier official · derived

## Description

Deleting or renaming a published procedure (or object) in a single release is a hard break: dependent extensions that reference it stop compiling the moment they pick up the new version, with no warning window to migrate. AL provides staged deprecation so consumers get advance notice. A procedure uses `[Obsolete('reason', 'tag')]`: it remains callable but callers receive a compiler warning naming the replacement and the version in which obsoletion began. Methods do not have `ObsoleteState`; after the deprecation window, the method is deleted, commonly through versioned preprocessor cleanup. Objects and fields instead use the `ObsoleteState = Pending` to `Removed` property progression.

## Best Practice

When a published procedure is superseded, keep it in place and mark it `[Obsolete('Use CalculateNetAmount instead.', '25.0')]`, where the message names the replacement and the tag records when the method became obsolete. Have the obsolete member forward to the new one so behavior is preserved during the window. Only after the deprecation window has elapsed should a later release delete the method. For an object or field, use `Pending` during the warning window and `Removed` afterward.

See sample: [`deprecate-public-members-with-the-obsolete-lifecycle.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle.good.al).

## Anti Pattern

Renaming or deleting the published `CalcNet` procedure in place — replacing it with `CalculateNetAmount` and nothing else — so consumers calling `CalcNet` break immediately with no deprecation notice. Detection: a previously shipped non-`local` procedure that vanished or was renamed between versions with no `[Obsolete]` marker left behind during a prior warning window. Do not suggest `ObsoleteState = Removed` for a method; that property belongs to supported object and element types.

See sample: [`deprecate-public-members-with-the-obsolete-lifecycle.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle.bad.al).

## Examples

- [Good: deprecate-public-members-with-the-obsolete-lifecycle.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle.good.al)
- [Bad: deprecate-public-members-with-the-obsolete-lifecycle.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/deprecate-public-members-with-the-obsolete-lifecycle.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
