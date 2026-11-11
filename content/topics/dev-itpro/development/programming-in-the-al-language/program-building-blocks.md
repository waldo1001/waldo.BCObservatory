---
id: topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks
type: topic
title: Program building blocks
summary: Program building blocks in AL covers statements, operators, system-defined variables, access modifiers and XML comments. It answers questions about AL syntax, code flow, operator precedence, Rec and xRec, member visibility, and inline documentation.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bbcd72cd48d0ed4ccd20361ea9b9ed1ef5704f7a1bdd7d3e35aa52fbbd709335
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

> Program building blocks in AL covers statements, operators, system-defined variables, access modifiers and XML comments. It answers questions about AL syntax, code flow, operator precedence, Rec and xRec, member visibility, and inline documentation.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Program building blocks · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects the core elements used to write AL code in Business Central. It combines language syntax (statements and operators) with variables the runtime provides, rules for visibility, and conventions for documenting code.

The Statements subtopic covers simple statements (assignment, method calls, AssertError) and control statements (compound, if-then-else, case, for, foreach, while, repeat-until). The AL operators page lists arithmetic, comparison, logical, conditional and compound assignment operators, plus evaluation order. Start with these two for general syntax questions.

The other pages deal with specific needs. System-defined variables explain access to the current record, page and report. Access modifiers explain how to control visibility when designing APIs. XML comments explain how to document code for IntelliSense and ALDoc.

## Key points

- Statements subtopic: simple statements (assignment, method, AssertError) and control statements (compound, if-then-else, case, for, foreach, while, repeat-until).
- AL operators page documents general, arithmetic, comparison, logical, conditional and compound assignment operators, with operator hierarchy precedence.
- System-defined variables include Rec, xRec, CurrPage, CurrReport, RequestOptionsPage and CurrFieldNo, giving access to current records, pages and reports during execution.
- Access modifiers are internal, local, protected and public, and control visibility of tables, fields, codeunits and queries at compile time.
- The internalsVisibleTo setting is covered under access modifiers for exposing internal members.
- XML comments use triple slashes and supported XML tags on codeunits, tables, interfaces and methods.
- XML comments enable IntelliSense and autogenerated help documentation with ALDoc.

## Subtopics

- [Statements](program-building-blocks/statements.md) (2 pages)

## More Learn pages

- [AL operators](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators): Describes the operators you can use in AL for Business Central.
- [System-defined variables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-defined-variables): Describes the system-defined variables that are automatically declared and initialized in AL for Business Central.
- [Using Access Modifiers in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-access-modifiers): Describes how the AL access modifiers can be used in code.
- [XML comments in code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xml-comments): Learn about adding documentation to AL code by including XML elements in a special syntax.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
