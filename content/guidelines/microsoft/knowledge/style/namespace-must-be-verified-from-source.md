---
id: guideline/microsoft/knowledge/style/namespace-must-be-verified-from-source
type: guideline
title: Resolve a namespace from the referenced object's source or symbols, never by guessing
summary: Since Business Central 2024 release wave 1, Microsoft's own objects are organized under a deep Microsoft.* namespace tree that has been renamed and restructured repeatedly.
tier: official
language: en
tags:
  - namespace
  - verification
  - source-of-truth
  - using-statement
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:55.114Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 52e8bbc17a81634af22c25b6db7d47eed9eb6442
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/namespace-must-be-verified-from-source.md
    title: "microsoft/BCQuality: Resolve a namespace from the referenced object's source or symbols, never by guessing"
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
repo_path: microsoft/knowledge/style/namespace-must-be-verified-from-source.md
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

# Resolve a namespace from the referenced object's source or symbols, never by guessing

> Since Business Central 2024 release wave 1, Microsoft's own objects are organized under a deep Microsoft.* namespace tree that has been renamed and restructured repeatedly.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/namespace-must-be-verified-from-source.md) · microsoft layer · style · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Since Business Central 2024 release wave 1, Microsoft's own objects are organized under a deep `Microsoft.*` namespace tree that has been renamed and restructured repeatedly. When adding a `using` directive for an existing AL object (table, codeunit, page, enum, interface, etc.), guessing its namespace from the object's name, from an older codebase, or from general familiarity produces a statement that can look plausible and still resolve to the wrong object, or fail to resolve at all, once checked against the object's actual current namespace. The reliable sources are the object's own source file (its `namespace` declaration) or, for a dependency without accessible source, its AL symbol package — not the object's name or a remembered convention.

## Best Practice

When referencing an existing AL object, resolve its namespace from that object's actual source file or symbol definition — never infer or invent one from its name, functional area, or naming convention.

See sample: [`namespace-must-be-verified-from-source.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/namespace-must-be-verified-from-source.good.al).

## Anti Pattern

Writing a `using` statement from memory, from an incomplete path, or from a plausible-looking guess. It can appear correct while actually resolving to the wrong object, or fail to resolve, once checked against stale or mismatched symbols, a different build configuration, or the object's actual current source — not because the compiler and the AL Language Server apply different namespace-resolution rules; they don't.

See sample: [`namespace-must-be-verified-from-source.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/namespace-must-be-verified-from-source.bad.al).

## Examples

- [Good: namespace-must-be-verified-from-source.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/namespace-must-be-verified-from-source.good.al)
- [Bad: namespace-must-be-verified-from-source.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/namespace-must-be-verified-from-source.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
