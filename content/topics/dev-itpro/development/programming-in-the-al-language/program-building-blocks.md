---
id: topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks
type: topic
title: Program building blocks
summary: Program building blocks in AL covers operators, statements, system-defined variables, access modifiers and XML comments. It answers questions about AL syntax, operator precedence, flow control, symbol visibility and inline code documentation.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:22.505Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3a1afe9b5edb539fe5fc733ebda4f0297c079e9a26540abb454f45774c1c38da
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-control-statements
    title: AL control statements
    date: "2025-03-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators
    title: AL operators
    date: "2024-09-18"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-defined-variables
    title: System-defined variables
    date: "2024-04-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-access-modifiers
    title: Using Access Modifiers in AL
    date: "2022-09-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xml-comments
    title: XML comments in code
    date: "2024-12-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-defined-variables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-access-modifiers
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xml-comments
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
    - topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks/statements
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Program building blocks
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children:
  - topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks/statements
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: aed8ffed3b8c1bae3d55bb7ded6548eadb463b5c9a144631cce30ce05d032c08
narrative: generated
---

# Program building blocks

> Program building blocks in AL covers operators, statements, system-defined variables, access modifiers and XML comments. It answers questions about AL syntax, operator precedence, flow control, symbol visibility and inline code documentation.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Program building blocks · tier official · system development · narrative reviewed by Opus

## Overview

This section collects the core elements used to write AL code. The reference pages cover operators, system-defined variables such as Rec and CurrPage, access modifiers for controlling visibility, and XML comments for documentation. A Statements subtopic covers simple and control statements.

Start with Statements and AL operators to learn syntax and evaluation order. Then read System-defined variables to see how code reaches the current record, page or report. Use Access Modifiers when designing APIs, and XML comments when documenting code for IntelliSense and ALDoc.

## Key points

- AL operators page lists arithmetic, comparison, logical, conditional and compound assignment operators, plus precedence (operator hierarchy).
- Statements subtopic (2 pages) covers simple statements: assignment, method calls, AssertError.
- Control statements include if-then-else, case, for, foreach, while, repeat-until, break and continue.
- System-defined variables include Rec, xRec, CurrPage, CurrReport, RequestOptionsPage and CurrFieldNo.
- Access modifiers are internal, local, protected and public, enforced at compile time for tables, fields, codeunits and queries.
- The internalsVisibleTo setting is described alongside internal access.
- XML comments use triple slashes and supported XML tags on codeunits, tables, interfaces and methods.
- XML comments enable IntelliSense and autogenerated help with ALDoc.

## Subtopics

- [Statements](program-building-blocks/statements.md) (2 pages)

## More Learn pages

- [AL operators](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators): Describes the operators you can use in AL for Business Central.
- [System-defined variables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-defined-variables): Describes the system-defined variables that are automatically declared and initialized in AL for Business Central.
- [Using Access Modifiers in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-access-modifiers): Describes how the AL access modifiers can be used in code.
- [XML comments in code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xml-comments): Learn about adding documentation to AL code by including XML elements in a special syntax.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
