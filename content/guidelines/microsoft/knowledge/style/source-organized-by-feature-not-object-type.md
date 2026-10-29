---
id: guideline/microsoft/knowledge/style/source-organized-by-feature-not-object-type
type: guideline
title: Organize AL source by business feature, not object type
summary: Folder structure inside an AL app has no effect on compilation or runtime behavior — this is a repository-organization convention, not a platform requirement, and different projects reasonably choose differently.
tier: official
language: en
tags:
  - folder-structure
  - feature-organization
  - source-layout
  - maintainability
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:46.079Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c6980939f93d705696add17bfa38347aa3a2b9bc
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/source-organized-by-feature-not-object-type.md
    title: "microsoft/BCQuality: Organize AL source by business feature, not object type"
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
repo_path: microsoft/knowledge/style/source-organized-by-feature-not-object-type.md
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
examples: 0
identifiers: []
---

# Organize AL source by business feature, not object type

> Folder structure inside an AL app has no effect on compilation or runtime behavior — this is a repository-organization convention, not a platform requirement, and different projects reasonably choose differently.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/source-organized-by-feature-not-object-type.md) · microsoft layer · style · BC all · tier official · derived

## Description

Folder structure inside an AL app has no effect on compilation or runtime behavior — this is a repository-organization convention, not a platform requirement, and different projects reasonably choose differently. Grouping files by business feature or module (`src/Sales/Invoice/`, `src/NoSeries/`) rather than by AL object type (`src/Tables/`, `src/Pages/`, `src/Codeunits/`) keeps everything belonging to one feature physically together, which many teams find easier to navigate than jumping between object-type folders that share nothing but their AL object kind. Adopt this consistently on a project rather than mixing both schemes, but treat it as a team convention to apply deliberately, not a Microsoft-mandated structure.

Code genuinely shared across multiple features (utility codeunits, common interfaces, shared enums) belongs in a `Common` or `Shared` folder, not duplicated per feature and not left in a catch-all root.

## Best Practice

    src/
    ├── NoSeries/
    ├── Sales/
    │   ├── Invoice/
    │   └── Order/
    └── Common/

Each feature folder holds every object type it needs; shared code has one dedicated home.

## Anti Pattern

A repository that documents or has established feature-based organization
as its convention, but then mixes in object-type folders for new work
anyway:

    src/
    ├── Sales/
    │   └── Invoice/
    ├── Tables/          <- new objects land here instead of a feature folder
    └── Codeunits/

The anti-pattern is inconsistency with the project's own chosen convention,
not the object-type scheme itself — a repository that deliberately and
consistently organizes by object type throughout is exercising the other
reasonable choice described above, not violating this rule. What actually
costs a reader time is a codebase where some features live under their own
folder and others are scattered across type folders, so finding everything
related to one feature means checking both schemes and reassembling it from
wherever each object happened to land.

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
