---
id: topic/dev-itpro/development/the-al-programming-language/variables-types-and-operators
type: topic
title: Variables, types, and operators
summary: Variables, types, and operators in AL covers user-defined and system-defined variables, protected variables, automatic type conversion, and the operator families (arithmetic, relational, boolean, conditional, compound). It answers questions about syntax, evaluation order, and resulting data types.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:43.821Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f6c55c46e2a39d3b24cf989bf4d88aa8621edc3989530ab3443f670660c45182
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators
    title: AL operators
    date: "2024-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-type-conversion-expressions
    title: AL type conversion in expressions
    date: "2025-02-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-variables
    title: AL variables
    date: "2024-04-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-arithmetic-operators
    title: Arithmetic operators
    date: "2024-07-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-boolean-operators
    title: Boolean operators
    date: "2024-07-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-protected-variables
    title: Protected variables
    date: "2024-05-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-relational-operators
    title: Relational operators
    date: "2024-04-26"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-type-conversion-expressions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-variables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-arithmetic-operators
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-boolean-operators
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-protected-variables
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-relational-operators
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-defined-variables
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/the-al-programming-language
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - The AL programming language
  - Variables, types, and operators
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/the-al-programming-language
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: cbfd1875e6981d4ef5fbc4fa5c70213e9ce9ed2d1a6a52058604191a6d9e4ce8
narrative: generated
---

# Variables, types, and operators

> Variables, types, and operators in AL covers user-defined and system-defined variables, protected variables, automatic type conversion, and the operator families (arithmetic, relational, boolean, conditional, compound). It answers questions about syntax, evaluation order, and resulting data types.

Path: [Development](../../development.md) > [The AL programming language](../the-al-programming-language.md) > Variables, types, and operators · tier official · system development · narrative reviewed by Opus

## Overview

This section describes the building blocks of AL expressions. The variable pages explain how to declare and name variables, how they are initialized, and how system-defined variables such as Rec, xRec, CurrPage, CurrReport, RequestOptionsPage, and CurrFieldNo give access to the current record, page, or report. Protected variables let tables and table extensions, pages and page extensions, and reports and report extensions share variables.

The operator pages begin with an overview of all AL operator types and their precedence. Separate pages then detail arithmetic operators, relational operators, and Boolean operators. A type conversion page explains how the compiler converts mixed operands automatically.

Start with AL variables for declaration and naming, then AL operators for the full list and evaluation order. Use the specific operator pages and the type conversion page when you need the result type of a mixed-type expression.

## Key points

- AL variables page covers naming rules, initialization, user-defined and system-defined variables, and type conversion in assignments.
- System-defined variables include Rec, xRec, CurrPage, CurrReport, RequestOptionsPage, and CurrFieldNo.
- The protected keyword allows variable access between tables and table extensions, pages and page extensions, and reports and report extensions.
- AL operators reference lists general, arithmetic, comparison, logical, conditional, and compound assignment operators with precedence.
- Arithmetic operators page covers unary and binary operations on numeric, date, time, text, and code types, including overflow handling.
- Relational operators return boolean values, including the in range operator, with valid data type combinations.
- Boolean operators are not, and, or, and xor, operating on boolean expressions.
- Type conversion promotes values to more general types following numeric and string type hierarchies.

## Learn pages

- [AL operators](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators): Describes the operators you can use in AL for Business Central.
- [AL type conversion in expressions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-type-conversion-expressions): Description of how AL types can be converted.
- [AL variables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-variables): Description of AL user-defined and system-defined variables.
- [Arithmetic operators](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-arithmetic-operators): Description of the arithmetic operators in AL for Business Central.
- [Boolean operators](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-boolean-operators): Description of the Boolean operators in AL for Business Central.
- [Protected variables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-protected-variables): The protected keyword can be used to make variables accessible between tables and table extensions, pages and page extensions and report and report extensions.
- [Relational operators](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-relational-operators): Description of the relational operators in AL and how they are used to compare expressions, as well as valid uses of relational operators.
- [System-defined variables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-defined-variables): Describes the system-defined variables that are automatically declared and initialized in AL for Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
