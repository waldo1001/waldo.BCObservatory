---
id: topic/dev-itpro/development/the-al-programming-language/variables-types-and-operators
type: topic
title: Variables, types, and operators
summary: Variables, types, and operators in AL cover user-defined and system-defined variables, protected variables, the operator families, and automatic type conversion in expressions. It answers questions about declaring variables, what operators do, and how AL converts types.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T01:01:22.016Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d8b56b58ad16070d661903d4c1c71524086efa04f47de7159963a7be043edd2d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-operators
    title: AL operators
    date: "2026-11-11"
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
    date: "2026-11-11"
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

> Variables, types, and operators in AL cover user-defined and system-defined variables, protected variables, the operator families, and automatic type conversion in expressions. It answers questions about declaring variables, what operators do, and how AL converts types.

Path: [Development](../../development.md) > [The AL programming language](../the-al-programming-language.md) > Variables, types, and operators · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains the building blocks of AL expressions. The variable pages describe user-defined and system-defined variables, naming rules, automatic initialization, and how protected variables let tables, pages, and reports share variables with their extensions.

The operator pages give an overview of all AL operators (arithmetic, comparison, logical, conditional, compound assignment, and hierarchy), plus detail pages for arithmetic, boolean, and relational operators. The type conversion page explains how the compiler promotes operands to more general data types when types are mixed.

Start with AL variables and AL operators for the basics. Then use the detail pages when you need the resulting data type or the valid type combinations for a specific operator, and the type conversion page for mixed-type expressions.

## Key points

- AL variables: user-defined and system-defined, with naming rules and automatic initialization.
- System-defined variables include Rec, xRec, CurrPage, CurrReport, RequestOptionsPage, and CurrFieldNo.
- Protected variables use the protected keyword to share variables between tables and table extensions, pages and page extensions, and reports and report extensions.
- AL operators cover arithmetic, comparison, logical, conditional, and compound assignment, with an operator hierarchy.
- Arithmetic operators page covers unary and binary operations on numeric, date, time, text, and code types, including overflow handling.
- Boolean operators are not, and, or, xor and return boolean results.
- Relational operators compare expressions and return booleans, including the in range operator and valid type combinations.
- Type conversion is automatic in expressions and assignments, promoting values along numeric and string type hierarchies.

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
