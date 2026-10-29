---
id: guideline/microsoft/knowledge/performance/case-true-of-for-long-condition-chains
type: guideline
title: Use case true of for long chains of dependent conditions
summary: "Because AL gives no short-circuit guarantee for and and or, a chain of conditions that must be evaluated in order has to be sequenced with nested if statements — and past three conditions the nesting itself becomes the problem: the body drifts right, the order of evaluation is carried by…"
tier: official
language: en
tags:
  - case-statement
  - case-true-of
  - nested-if
  - condition-chain
  - guard
  - lazy-evaluation
  - nesting-depth
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.833Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1ec3863ec26b51cfd5bfa23cd1de7f9552a55d2c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/case-true-of-for-long-condition-chains.md
    title: "microsoft/BCQuality: Use case true of for long chains of dependent conditions"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/case-true-of-for-long-condition-chains.md
layer: microsoft
kind: rule
domain: performance
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

# Use case true of for long chains of dependent conditions

> Because AL gives no short-circuit guarantee for and and or, a chain of conditions that must be evaluated in order has to be sequenced with nested if statements — and past three conditions the nesting itself becomes the problem: the body drifts right, the order of evaluation is carried by…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/case-true-of-for-long-condition-chains.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Because AL gives no short-circuit guarantee for `and` and `or`, a chain of conditions that must be evaluated in order has to be sequenced with nested `if` statements — and past three conditions the nesting itself becomes the problem: the body drifts right, the order of evaluation is carried by indentation alone, and any shared failure path is repeated at every level. AL's `case` statement is the flat alternative. Its value sets "must be an expression or a range", so `case true of` and `case false of` accept arbitrary boolean expressions, and the statement "is evaluated, and the first matching value set executes the associated statement" — evaluation stops at the first matching value set, which is exactly the laziness the boolean operators do not provide. That guarantee is stated for value sets, plural: it orders evaluation *across* separate value sets, and says nothing about the order of the individual expressions listed inside one comma-separated value set.

## Best Practice

Sequence two or three dependent conditions with nested `if`. Beyond that, switch to `case`: use `case false of` for a chain of guards where every condition must hold, letting control fall past `end` when all of them pass; use `case true of` for first-match dispatch, where each later probe runs only if the earlier ones did not match. Comma-separate conditions into one value set only when every one of them is a pure, order-independent test with no side effect — a field comparison, an enum check, a bound test — so it makes no difference whether AL evaluates all of them or stops early; grouping these costs nothing and removes the repeated action. A condition that guards another, or that carries a side effect or a cost of its own — a `Get`, a `Find`, a procedure call — keeps its own value set, placed immediately after the value set it depends on, so the code relies only on the ordering the documentation actually states. A value set needs no parentheses around a comparison, unlike an operand of `and` or `or`: the AL operator hierarchy places `and` and `or` above the comparison operators, so parentheses are mandatory there and the chain fills up with them. This keeps every condition at one indentation level, makes evaluation order explicit rather than implied by nesting, and preserves the stop-at-first-match behaviour it relies on. It also aligns with the AL programming convention that more than two alternatives belong in a `case` statement rather than an `if-then-else`.

See sample: [`case-true-of-for-long-condition-chains.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/case-true-of-for-long-condition-chains.good.al).

## Anti Pattern

An `if` ladder four or more levels deep whose only purpose is sequencing guards. Detection: a chain of nested `if` statements with no `else`, each condition guarding the one below it, terminating in a single action or `exit`; or the same `exit`/`error` duplicated at every level of such a nested chain, purely to escape it. The second, worse form is collapsing that ladder into one `and` chain to escape the nesting — that trades indentation for a real defect, because the operands are still all evaluated. A third, subtler form is over-applying the comma-grouping itself: putting a guard and the condition it protects — for example `Item.Get(...)` and a read of a field on that same record — into one comma-separated value set. That relies on an evaluation order within a single value set that the documentation does not state; keep them in separate value sets instead. Reach for `case` over nested `if` or a collapsed `and` chain, and keep order-dependent conditions in their own value sets within it.

See sample: [`case-true-of-for-long-condition-chains.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/case-true-of-for-long-condition-chains.bad.al).

## See also

`boolean-operators-do-not-short-circuit.md` covers the underlying evaluation rule that makes the sequencing necessary in the first place.

## Examples

- [Good: case-true-of-for-long-condition-chains.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/case-true-of-for-long-condition-chains.good.al)
- [Bad: case-true-of-for-long-condition-chains.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/case-true-of-for-long-condition-chains.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
