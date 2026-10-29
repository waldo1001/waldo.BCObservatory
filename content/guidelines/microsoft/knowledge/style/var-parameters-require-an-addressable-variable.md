---
id: guideline/microsoft/knowledge/style/var-parameters-require-an-addressable-variable
type: guideline
title: A `var` parameter must be called with a variable, never a literal or expression
summary: "When a procedure declares a parameter with var, that parameter is passed by reference: the callee writes back into the caller's own memory location. This means the argument at the call site must be an actual variable, something with an address."
tier: official
language: en
tags:
  - var-parameter
  - by-reference
  - pass-by-reference
  - literal
  - constant
  - compile-error
  - procedure-call
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:59.936Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 81f6fbb56114839feaa374de1d4196fec654fc76
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/var-parameters-require-an-addressable-variable.md
    title: "microsoft/BCQuality: A `var` parameter must be called with a variable, never a literal or expression"
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
repo_path: microsoft/knowledge/style/var-parameters-require-an-addressable-variable.md
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

# A `var` parameter must be called with a variable, never a literal or expression

> When a procedure declares a parameter with var, that parameter is passed by reference: the callee writes back into the caller's own memory location. This means the argument at the call site must be an actual variable, something with an address.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/var-parameters-require-an-addressable-variable.md) · microsoft layer · style · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

When a procedure declares a parameter with `var`, that parameter is passed by reference: the callee writes back into the caller's own memory location. This means the argument at the call site must be an actual variable, something with an address. A string literal, a numeric constant, or a computed expression has no address to write back to, so passing one to a `var` parameter fails to compile. Before writing a call, check the callee's signature for `var` on each parameter position being supplied a literal or expression — if present, a variable declared in the caller's own scope must be used instead.

## Best Practice

Declare a variable in the caller's scope and pass it to the `var` parameter.

See sample: [`var-parameters-require-an-addressable-variable.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/var-parameters-require-an-addressable-variable.good.al).

## Anti Pattern

Passing a literal or a computed expression to a `var` parameter position fails to compile, because neither has an address the callee can write back to.

See sample: [`var-parameters-require-an-addressable-variable.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/var-parameters-require-an-addressable-variable.bad.al).

## Examples

- [Good: var-parameters-require-an-addressable-variable.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/var-parameters-require-an-addressable-variable.good.al)
- [Bad: var-parameters-require-an-addressable-variable.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/var-parameters-require-an-addressable-variable.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
