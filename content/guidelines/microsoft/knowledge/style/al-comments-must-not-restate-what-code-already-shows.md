---
id: guideline/microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows
type: guideline
title: Comments must not restate what the code already shows
summary: A comment above nearly every statement that just narrates what the statement already says (// Validate the customer number above SalesHeader.Validate("Sell-to Customer No.", CustomerNo)) adds noise without adding information.
tier: official
language: en
tags:
  - comments
  - verbosity
  - self-documenting
  - restate
  - tutorial-style
  - credit-memo-routing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:37.502Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 52c3c0a697cc894153f1dfc50da4b0ca44684039
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows.md
    title: "microsoft/BCQuality: Comments must not restate what the code already shows"
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
    - change/bcquality/202
    - change/bcquality/157
repo_path: microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows.md
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

# Comments must not restate what the code already shows

> A comment above nearly every statement that just narrates what the statement already says (// Validate the customer number above SalesHeader.Validate("Sell-to Customer No.", CustomerNo)) adds noise without adding information.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows.md) · microsoft layer · style · BC all · tier official · derived

## Description

A comment above nearly every statement that just narrates what the statement already says (`// Validate the customer number` above `SalesHeader.Validate("Sell-to Customer No.", CustomerNo)`) adds noise without adding information. Production AL — the Base Application, mature partner codebases — is comment-sparse by comparison: identifiers do the explaining, and a comment appears only when the code alone can't carry the reason.

A comment earns its place only when it captures something the code cannot: a non-obvious business rule, a workaround for a specific platform limitation, or a constraint that would surprise the next reader. If removing the comment would leave the reader no worse off, the comment should not have been written.

This does not override required structural documentation — feature/scenario test tags and XML-doc summaries on public library procedures remain required where they apply; those are structural markers, not narrative comments.

## Best Practice

Let the code speak for itself; reserve comments for the reason a reader could not otherwise infer.

See sample: [`al-comments-must-not-restate-what-code-already-shows.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows.good.al).

## Anti Pattern

A comment line before every statement, repeating in English what the statement's own identifiers already say.

See sample: [`al-comments-must-not-restate-what-code-already-shows.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows.bad.al).

## Examples

- [Good: al-comments-must-not-restate-what-code-already-shows.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows.good.al)
- [Bad: al-comments-must-not-restate-what-code-already-shows.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/al-comments-must-not-restate-what-code-already-shows.bad.al)

## Changed by

- [#202 Restore deterministic review fixture coverage](../../../../changes/bcquality/202.md), 2026-09-29
- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
