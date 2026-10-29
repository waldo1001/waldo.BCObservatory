---
id: guideline/microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing
type: guideline
title: Intrinsic AL function calls use modern casing, not legacy ALL-CAPS
summary: AL is case-insensitive, so MESSAGE(...), ERROR(...), CONFIRM(...), and STRSUBSTNO(...) compile and run identically to Message(...), Error(...), Confirm(...), and StrSubstNo(...).
tier: official
language: en
tags:
  - casing
  - intrinsic-function
  - built-in-function
  - message
  - error
  - confirm
  - strsubstno
  - legacy
  - c-al
  - pascalcase
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:55.096Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 761650b3f9694213b23cd9e2a756e4f9791cf55e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing.md
    title: "microsoft/BCQuality: Intrinsic AL function calls use modern casing, not legacy ALL-CAPS"
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
repo_path: microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing.md
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

# Intrinsic AL function calls use modern casing, not legacy ALL-CAPS

> AL is case-insensitive, so MESSAGE(...), ERROR(...), CONFIRM(...), and STRSUBSTNO(...) compile and run identically to Message(...), Error(...), Confirm(...), and StrSubstNo(...).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing.md) · microsoft layer · style · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

AL is case-insensitive, so `MESSAGE(...)`, `ERROR(...)`, `CONFIRM(...)`, and `STRSUBSTNO(...)` compile and run identically to `Message(...)`, `Error(...)`, `Confirm(...)`, and `StrSubstNo(...)`. Modern AL — Microsoft's own current samples and current reference codebases — writes intrinsic/built-in function calls in the casing Microsoft assigns to the function's declared name, typically PascalCase. This is a codebase-convention claim, not a claim about what the VS Code formatter enforces: the formatter normalizes particular syntax but is not a mechanism for recasing every intrinsic function call, so do not cite formatter behavior as the reason to follow this convention. ALL-CAPS calls are a holdover from classic C/AL and signal code that has not been modernized, even though it compiles and runs correctly. Reserved keywords such as `if`, `begin`, and `for` are a separate, already-tooled concern; intrinsic function names are identifiers, not keywords, so that tooling does not catch ALL-CAPS intrinsic function calls.

## Best Practice

Call intrinsic functions in their modern, PascalCase form.

See sample: [`intrinsic-al-functions-must-use-modern-casing.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing.good.al).

## Anti Pattern

ALL-CAPS intrinsic function calls trip no compiler error, but they are a reliable signal that a code block was copied from old C/AL material or outdated training content rather than written against current AL conventions.

See sample: [`intrinsic-al-functions-must-use-modern-casing.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing.bad.al).

## Examples

- [Good: intrinsic-al-functions-must-use-modern-casing.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing.good.al)
- [Bad: intrinsic-al-functions-must-use-modern-casing.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/intrinsic-al-functions-must-use-modern-casing.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
