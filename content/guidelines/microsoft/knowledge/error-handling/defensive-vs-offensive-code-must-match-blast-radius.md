---
id: guideline/microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius
type: guideline
title: Match defensive vs. offensive error handling to the blast radius of being wrong
summary: Whether code should guard gracefully (defensive) or fail loudly (offensive/fail-fast) is not a matter of habit or a blanket house style — it depends on what happens downstream if the guarded condition is silently defaulted or skipped.
tier: official
language: en
tags:
  - defensive-programming
  - offensive-programming
  - fail-fast
  - blast-radius
  - guarded-lookup
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:45.951Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 91a8aff82256c208565dadf21642b76ec4348fd3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius.md
    title: "microsoft/BCQuality: Match defensive vs. offensive error handling to the blast radius of being wrong"
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
repo_path: microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius.md
layer: microsoft
kind: rule
domain: error-handling
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

# Match defensive vs. offensive error handling to the blast radius of being wrong

> Whether code should guard gracefully (defensive) or fail loudly (offensive/fail-fast) is not a matter of habit or a blanket house style — it depends on what happens downstream if the guarded condition is silently defaulted or skipped.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius.md) · microsoft layer · error-handling · BC all · tier official · derived

## Description

Whether code should guard gracefully (defensive) or fail loudly (offensive/fail-fast) is not a matter of habit or a blanket house style — it depends on what happens downstream if the guarded condition is silently defaulted or skipped. Treating every missing value the same way, defensively or offensively, is itself the anti-pattern: uniform defensiveness hides the failures that matter most, while uniform fail-fast turns ordinary, expected absence into unnecessary crashes. Two fields can look structurally identical — both read from a related record, both potentially missing — and still deserve opposite treatment depending on what they feed.

## Best Practice

Trace what a silently-defaulted or skipped value actually reaches before deciding how to guard it. If it reaches a posted ledger amount, a tax/VAT calculation, a quantity or price actually used in a transaction, or a legally/compliance-facing output, code offensively: let the lookup fail loud (`TestField`, an unguarded `Get()` expected to always succeed, or an explicit `Error`) so a human sees the problem before anything posts. If it is cosmetic, informational, or easily corrected after the fact (a display field, an optional UI enhancement, a report not yet run), code defensively — but the fallback must be an explicit, deliberately-chosen, named business value, never a blank or zero that is merely the datatype default. When genuinely unsure which category a field falls into, that is a question to resolve explicitly with whoever owns the requirement, not a coin flip.

See sample: [`defensive-vs-offensive-code-must-match-blast-radius.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius.good.al).

## Anti Pattern

Guarding two fields the same way purely out of habit, without analyzing what each one feeds. A low-blast-radius field, such as a customer's home page URL shown only for convenience on a printed document, and a high-blast-radius field, such as the VAT posting group that determines VAT actually applied to a posted transaction, are both wrapped in the same `if Header.Get(...) then ... else` pattern with a blank/zero fallback — leaving the posting-critical field free to post with a silently wrong value. A VAT registration number is not a safe stand-in for the low-risk side of this example: it is legally relevant, often validated, and can feed external VAT services or mandated document output, so it belongs on the offensive/fail-fast side alongside the posting group, not next to it as the "safe" contrast.

See sample: [`defensive-vs-offensive-code-must-match-blast-radius.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius.bad.al).

## Examples

- [Good: defensive-vs-offensive-code-must-match-blast-radius.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius.good.al)
- [Bad: defensive-vs-offensive-code-must-match-blast-radius.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/defensive-vs-offensive-code-must-match-blast-radius.bad.al)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
