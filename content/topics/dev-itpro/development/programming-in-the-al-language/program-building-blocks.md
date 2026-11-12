---
id: topic/dev-itpro/development/programming-in-the-al-language/program-building-blocks
type: topic
title: Program building blocks
summary: "Program building blocks in AL covers the core language elements of Business Central code: operators, statements, system-defined variables, access modifiers, and XML comments. It answers questions about expression syntax, code flow, object visibility, and inline documentation."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 34c2830833bc9de8d85af1a157a6e3604c38882abdb2de7ef2ff2d60cddc3e94
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
    date: "2026-11-11"
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

> Program building blocks in AL covers the core language elements of Business Central code: operators, statements, system-defined variables, access modifiers, and XML comments. It answers questions about expression syntax, code flow, object visibility, and inline documentation.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Program building blocks · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects the basic elements used to write AL code. Operators are used in expressions for arithmetic, comparison, logical, conditional and compound operations, and the page also gives operator hierarchy and data type conversion rules. The Statements subtopic covers simple statements (assignment, method, AssertError) and control statements (compound, if-then-else, case, for, foreach, while, repeat-until).

The other pages deal with the context and structure of code. System-defined variables such as Rec, xRec, CurrPage, CurrReport, RequestOptionsPage and CurrFieldNo give access to the current record, page or report at run time. Access modifiers set the visibility of objects and members, and XML comments document code and feed IntelliSense and ALDoc.

Start with AL operators and Statements if you need to write or read logic. Go to System-defined variables when working in table, page or report triggers. Use Access Modifiers and XML comments when designing APIs and documenting them.

## Key points

- AL operators include arithmetic, comparison, logical, conditional and compound assignment operators, with a defined operator hierarchy and data type conversion rules.
- Statements are either simple (assignment, method, AssertError) or control statements (compound, if-then-else, case, for, foreach, while, repeat-until).
- System-defined variables: Rec, xRec, CurrPage, CurrReport, RequestOptionsPage and CurrFieldNo.
- Access levels are internal, local, protected and public, enforced at compile time for tables, fields, codeunits and queries.
- The internalsVisibleTo setting is part of the access modifier topic.
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
