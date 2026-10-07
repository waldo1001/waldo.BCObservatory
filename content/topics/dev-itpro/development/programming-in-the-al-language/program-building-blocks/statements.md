---
id: topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks/statements
type: topic
title: Statements
summary: "AL statements cover the building blocks of AL code: simple statements (assignment, method calls, AssertError) and control statements (if-then-else, case, for, foreach, while, repeat-until, break, continue). They answer questions about syntax, flow control and compound assignment operators."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:25.345Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d3956622fec7ab4e0ae68e80679f24eb2163339aaf9a62e6af5906644f6cdc36
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-control-statements
    title: AL control statements
    date: "2025-03-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-simple-statements
    title: AL simple statements
    date: "2025-01-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-control-statements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-simple-statements
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks
  localizations: []
  videos:
    - video/9-eo7b2xg8Q
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Program building blocks
  - Statements
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: feb88a96df85ca6ff7f9fcc121d3da411f12dc2849711dcb8503edca09bce7b3
narrative: generated
---

# Statements

> AL statements cover the building blocks of AL code: simple statements (assignment, method calls, AssertError) and control statements (if-then-else, case, for, foreach, while, repeat-until, break, continue). They answer questions about syntax, flow control and compound assignment operators.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Program building blocks](../program-building-blocks.md) > Statements · tier official · system development · narrative reviewed by Opus

## Overview

Statements are the units of execution in AL code. This section has two pages that split them by whether they change the flow of code.

AL simple statements run sequentially and do not alter flow. The page covers assignment statements, method statements, compound assignment operators and AssertError statements used in tests. AL control statements covers conditionals and loops, with syntax and programming conventions.

Start with the simple statements page for basic syntax, then go to the control statements page when you need branching or iteration.

## Key points

- Simple statements run in sequence and do not change code flow.
- Simple statement types: assignment, method and AssertError.
- Compound assignment operators are documented on the simple statements page.
- AssertError statements are used for test assertions.
- Conditional control statements: if-then-else and case.
- Loop statements: for, foreach, while and repeat-until.
- break and continue statements are covered with the loops.
- The control statements page lists 2023 release wave 1.

## Learn pages

- [AL control statements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-control-statements): Compound, conditional, and repetitive control statements in AL for Business Central.
- [AL simple statements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-simple-statements): Describes the simple, single-line statements in AL for Business Central with examples

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [The "Continue" Keyword Finally Comes to AL — 3 Practical Examples (BC 2025 Wave 1)](../../../../../videos/9-eo7b2xg8Q.md) (video): "continue keyword in AL"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
