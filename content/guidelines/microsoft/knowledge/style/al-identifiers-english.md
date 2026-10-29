---
id: guideline/microsoft/knowledge/style/al-identifiers-english
type: guideline
title: Write AL Identifiers in English Only
summary: All AL identifiers — variables, procedures, parameters, fields, object names, enum values, and label identifiers — must be written in English, regardless of the developer's native language.
tier: official
language: en
tags:
  - identifiers
  - naming
  - english
  - captions
  - translation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:54.683Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5feda9f82bdc8798a5ac580815f1eb6b86ff34c6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-identifiers-english.md
    title: "microsoft/BCQuality: Write AL Identifiers in English Only"
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
    - change/bcquality/156
repo_path: microsoft/knowledge/style/al-identifiers-english.md
layer: microsoft
kind: rule
domain: style
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Write AL Identifiers in English Only

> All AL identifiers — variables, procedures, parameters, fields, object names, enum values, and label identifiers — must be written in English, regardless of the developer's native language.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-identifiers-english.md) · microsoft layer · style · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

All AL identifiers — variables, procedures, parameters, fields, object names, enum values, and label identifiers — must be written in English, regardless of the developer's native language. Translations are handled separately through captions, tooltips, and XLIFF files, never by writing Danish, German, or other non-English identifiers directly into AL source code. This is not a stylistic preference: the public `microsoft/BCApps` codebase, maintained by engineers of many nationalities across hundreds of thousands of lines of AL, uses exclusively English identifiers, with all localization handled via caption properties and XLIFF rather than by changing identifier names. On any multi-contributor codebase, non-English identifiers make the code unreadable to contributors who don't share that language.

## Best Practice

Write every identifier in English, and translate developer intent rather than transliterating it — when a requirement is described in another language, the resulting variable, procedure, and field names should still read as English. Captions and tooltips may carry target-language text in the source file, with locale translations managed through XLIFF.

See sample: [`al-identifiers-english.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-identifiers-english.good.al).

## Anti Pattern

Using native-language identifiers such as a Danish variable or procedure name in AL source code, relying on the fact that the code still compiles and runs correctly. This makes the code unreadable to non-native-language contributors and mixes localization concerns into source that should stay language-neutral.

See sample: [`al-identifiers-english.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-identifiers-english.bad.al).

## Examples

- [Good: al-identifiers-english.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-identifiers-english.good.al)
- [Bad: al-identifiers-english.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-identifiers-english.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
