---
id: guideline/microsoft/knowledge/style/al-build-output-must-not-pollute-project-root
type: guideline
title: Write AL Build Artifacts to an Intentional Output Location
summary: An AL project's compiled .app file can be written to the project root by default, and current tooling explicitly supports choosing a different destination instead — ALTool's --outfolder option and the al_build agent tool's outputPath parameter both exist for this.
tier: official
language: en
tags:
  - build
  - output
  - alpackages
  - artifact-hygiene
  - outfolder
  - project-root
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:54.611Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4e5a57a70150839b1652b951296482fa3f123258
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-build-output-must-not-pollute-project-root.md
    title: "microsoft/BCQuality: Write AL Build Artifacts to an Intentional Output Location"
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
repo_path: microsoft/knowledge/style/al-build-output-must-not-pollute-project-root.md
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
identifiers:
  - ALTool
  - outputPath
---

# Write AL Build Artifacts to an Intentional Output Location

> An AL project's compiled .app file can be written to the project root by default, and current tooling explicitly supports choosing a different destination instead — ALTool's --outfolder option and the al_build agent tool's outputPath parameter both exist for this.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-build-output-must-not-pollute-project-root.md) · microsoft layer · style · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

An AL project's compiled `.app` file can be written to the project root by default, and current tooling explicitly supports choosing a different destination instead — `ALTool`'s `--outfolder` option and the `al_build` agent tool's `outputPath` parameter both exist for this. The problem this rule addresses is not that root-level output is technically invalid; it is agents leaving generated `.app` files scattered through arbitrary source locations, or treating a compiled artefact as if it were part of the source tree (committing it, editing around it, referencing it as a dependency by hand).

## Best Practice

Write build artifacts to a deliberate, dedicated output location — configured via the build tool actually in use (e.g. `ALTool --outfolder`, or an explicit `outputPath` on the agent build tool) — and add that folder to `.gitignore`. Treat a compiled `.app` as a build artifact, never as a source file to commit or hand-edit around.

## Anti Pattern

Letting `.app` files accumulate in arbitrary or unversioned locations without a deliberate output path, or committing compiled artefacts into source control alongside the AL files that produced them.

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
