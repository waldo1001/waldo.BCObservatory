---
id: guideline/microsoft/knowledge/performance/boolean-operators-do-not-short-circuit
type: guideline
title: AL boolean operators do not short-circuit
summary: "AL gives no short-circuit (lazy) evaluation guarantee for and, or, and xor: every operand of a boolean expression is evaluated, even when the leftmost operand already determines the result."
tier: official
language: en
tags:
  - short-circuit
  - lazy-evaluation
  - boolean-operators
  - nested-if
  - guard
  - and-operator
  - or-operator
  - xor-operator
  - early-exit
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.735Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9c840a78c65c14b66058f2a890a0f286580604ea
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/boolean-operators-do-not-short-circuit.md
    title: "microsoft/BCQuality: AL boolean operators do not short-circuit"
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
repo_path: microsoft/knowledge/performance/boolean-operators-do-not-short-circuit.md
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
identifiers:
  - IsEmpty
---

# AL boolean operators do not short-circuit

> AL gives no short-circuit (lazy) evaluation guarantee for and, or, and xor: every operand of a boolean expression is evaluated, even when the leftmost operand already determines the result.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/boolean-operators-do-not-short-circuit.md) · microsoft layer · performance · BC all · tier official · derived

## Description

AL gives no short-circuit (lazy) evaluation guarantee for `and`, `or`, and `xor`: every operand of a boolean expression is evaluated, even when the leftmost operand already determines the result. Neither the AL operators documentation nor the boolean operators documentation defines a lazy evaluation order, so code must not depend on one. Developers arriving from C#, JavaScript, or SQL routinely assume the left operand guards the right; in AL it does not. `xor` is not actually a short-circuit candidate in any language — its result depends on both operands regardless of their values, so there is nothing to skip — but AL still evaluates both operands unconditionally, so neither should carry a cost or a risk the developer assumed the other would guard against. For `and` and `or`, the right operand still runs even when the left already decides the result, so its cost is paid on every evaluation, and a check intended to protect an unsafe expression — an array subscript, a division, a field read that is only valid after a successful `Get` — does not protect it.

## Best Practice

For an `and`-shaped guard — a condition that must hold before the next operand is safe or worth evaluating — split into nested `if` statements: the guarding or cheapest condition in the outer `if`, the dependent or expensive one in the inner `if`. This preserves the result, since `if A then if B then Action` matches `if A and B then Action` exactly. Where there is no `else` branch, nesting is a pure win; where there is one, extract the conditions into a helper procedure that exits early instead.

For an `or`-shaped condition, do not nest: nesting `if A then if B then Action` drops the case where `A` is true and `B` is false, silently changing the result of `A or B`. Exit as soon as the cheap or safe operand already decides the outcome, and reach the other operand only on the path where it can still change the result — `if A then exit(true); exit(B);` for a boolean return, or `if A then Action else if B then Action;` when both branches share one action.

`xor` has no equivalent rewrite, because its result always depends on both operands; the only actionable guidance is to keep both operands of an `xor` cheap and free of side effects, since AL evaluates both unconditionally.

Where a chain of `and`-guards runs past about three conditions, stop nesting and use a `case` statement instead — see `case-true-of-for-long-condition-chains.md`. Keep `and` and `or` for operands that are independently safe and cheap — in-memory field comparisons, enum tests, bound checks — where combining them reads better and costs nothing.

See sample: [`boolean-operators-do-not-short-circuit.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/boolean-operators-do-not-short-circuit.good.al).

## Anti Pattern

A single condition that joins a guard with an operand depending on that guard, or with an expensive operand, using `and` or `or`. The consequence is either wasted work on every evaluation — a database call or validation procedure invoked even when the outcome is already decided — or a runtime error or silently wrong result that the guard was written to prevent. Applying the `and` fix to an `or` condition is a distinct mistake: rewriting `A or B` as nested `if`s drops the `A`-true/`B`-false case instead of preserving it. Detection signals: an operand that indexes an array or list with a variable whose bounds are checked in a sibling operand; `Record.Get(...)` or a `Find`/`IsEmpty` call as one operand of `and` with a field read of the same record as another; an expensive or unsafe operand combined with `or` next to a condition that alone already makes the result true; a boolean-returning procedure call combined with a cheap field test. The pattern is common in code ported from a language that does short-circuit, and in conditions grown by appending a clause to an existing `if`.

See sample: [`boolean-operators-do-not-short-circuit.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/boolean-operators-do-not-short-circuit.bad.al).

## See also

`case-true-of-for-long-condition-chains.md` covers what to do when nesting an `and`-guard chain would go more than about three levels deep. `microsoft/knowledge/performance/apply-guards-before-get.md` covers the related ordering rule for statements rather than operands.

## Examples

- [Good: boolean-operators-do-not-short-circuit.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/boolean-operators-do-not-short-circuit.good.al)
- [Bad: boolean-operators-do-not-short-circuit.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/boolean-operators-do-not-short-circuit.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
