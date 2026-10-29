---
id: guideline/microsoft/knowledge/data-modeling/testfield-required-setup-field
type: guideline
title: TestField a Setup-Table Value Before Using It in a Correctness-Critical Branch
summary: A procedure that reads a field from a setup or configuration table inside a branch where the surrounding logic has already decided that value is required needs to guard against it being blank.
tier: official
language: en
tags:
  - testfield
  - setup-table
  - configuration
  - mandatory-field
  - silent-fallback
  - correctness
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:54.420Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 37ad5758a2222f33d870851ccec1d6aa28f4a741
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/testfield-required-setup-field.md
    title: "microsoft/BCQuality: TestField a Setup-Table Value Before Using It in a Correctness-Critical Branch"
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
repo_path: microsoft/knowledge/data-modeling/testfield-required-setup-field.md
layer: microsoft
kind: rule
domain: data-modeling
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
  - TestField
---

# TestField a Setup-Table Value Before Using It in a Correctness-Critical Branch

> A procedure that reads a field from a setup or configuration table inside a branch where the surrounding logic has already decided that value is required needs to guard against it being blank.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/testfield-required-setup-field.md) · microsoft layer · data-modeling · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A procedure that reads a field from a setup or configuration table inside a branch where the surrounding logic has already decided that value is required needs to guard against it being blank. A common anti-pattern silently treats "blank" as "feature not wanted": it checks the field for emptiness and falls through to a default instead of raising an error. `Get()` succeeding on the setup record only proves the record exists, not that the specific field was ever configured, so the fallback path makes a missing configuration indistinguishable from a deliberate one — and the wrong outcome, especially in financial, tax, or compliance postings, surfaces silently rather than as a crash a tester would notice.

## Best Practice

Once a business rule has decided that a setup-table field's value is required for a branch to behave correctly, call `TestField` on it before use, even though a plain read would "work" by returning a blank or zero without erroring. Write a test that blanks the setup field and asserts the resulting error, so the guard itself is verified rather than merely present.

See sample: [`testfield-required-setup-field.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/testfield-required-setup-field.good.al).

## Anti Pattern

Reading a required setup-table field behind a presence check that falls through to a default value instead of erroring. This looks defensive because it never crashes, but it converts "administrator forgot to configure this" into "system silently did something else" — worse than a hard failure, because nobody is told anything went wrong.

See sample: [`testfield-required-setup-field.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/testfield-required-setup-field.bad.al).

## Examples

- [Good: testfield-required-setup-field.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/testfield-required-setup-field.good.al)
- [Bad: testfield-required-setup-field.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/testfield-required-setup-field.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
