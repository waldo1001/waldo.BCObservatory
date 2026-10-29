---
id: guideline/microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability
type: guideline
title: Assign a codeunit to an interface variable for injectable, testable dependencies
summary: An interface variable can hold any codeunit that implements the interface, assigned directly — no enum is required.
tier: official
language: en
tags:
  - interface
  - dependency-injection
  - testability
  - test-double
  - codeunit
  - polymorphism
  - mocking
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:33.761Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8d3e7cea61d21d73d08a9fe6893abe7b75b7b843
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability.md
    title: "microsoft/BCQuality: Assign a codeunit to an interface variable for injectable, testable dependencies"
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
repo_path: microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability.md
layer: microsoft
kind: rule
domain: interfaces
bc_version:
  - 16..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Assign a codeunit to an interface variable for injectable, testable dependencies

> An interface variable can hold any codeunit that implements the interface, assigned directly — no enum is required.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability.md) · microsoft layer · interfaces · BC 16.. · tier official · derived

## Description

An interface variable can hold any codeunit that `implements` the interface, assigned directly — no enum is required. That is the lever for dependency injection in AL: a consumer depends on the interface, production code injects the real codeunit, and a test injects a lightweight double that returns predictable values. A consumer that instead `var`-declares a concrete `Codeunit` type hardwires the dependency, so a test is forced to exercise the real logic — external calls, posting, and all. Interfaces arrived in Business Central 2020 release wave 1; LLMs still default to concrete codeunit variables and miss the seam that makes code testable.

## Best Practice

Declare the dependency as an `Interface` variable on the consumer and supply the implementation from outside — typically setter injection through a procedure that takes an `Interface` parameter, or a parameter on the entry method. Production passes the real implementation codeunit; a test passes a test-double codeunit that implements the same interface with deterministic behaviour. Because a codeunit assigns to an interface variable directly, no enum or factory is needed for the injectable case. The consumer's logic is then verifiable in isolation.

See sample: [`assign-codeunit-to-interface-for-testability.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability.good.al).

## Anti Pattern

A consumer that declares its dependency as a concrete `Codeunit "..."` variable and calls it directly. The collaborator cannot be substituted, so a unit test either runs the production side effects or cannot cover the consumer at all. Detection signal: a `var` of type `Codeunit "<concrete impl>"` used for a collaborator that has — or could have — an interface, especially one that performs I/O, posting, or external calls. Extract an interface, depend on the interface variable, and inject the implementation.

See sample: [`assign-codeunit-to-interface-for-testability.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability.bad.al).

## Examples

- [Good: assign-codeunit-to-interface-for-testability.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability.good.al)
- [Bad: assign-codeunit-to-interface-for-testability.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/assign-codeunit-to-interface-for-testability.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
