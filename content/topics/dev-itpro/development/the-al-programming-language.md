---
id: topic/dev-itpro/development/the-al-programming-language
type: topic
title: The AL programming language
summary: "The AL programming language section covers language fundamentals for Business Central extensions: statements, methods, types, error handling, labels, access modifiers, and XML comments. It also links to subtopics on variables and operators, object types, preprocessor directives, and code analysis. It answers syntax, behavior, and how-to-write-AL questions."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.946Z"
  flags: []
generated:
  at: "2026-10-07T21:13:11.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 223d3dae95a4fa05c8d3999a6c097f143985bb62c51a8c110a47d899de22d539
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-complextypes
    title: AL complex types
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-control-statements
    title: AL control statements
    date: "2025-03-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reference-overview
    title: AL development environment reference overview
    date: "2025-05-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling
    title: AL error handling
    date: "2024-03-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directives-in-al
    title: AL Preprocessor Directives Overview
    date: "2026-10-05"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop
    title: AppSourceCop analyzer
    date: "2026-10-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/codecop
    title: CodeCop analyzer
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-codeunit-object
    title: Codeunit object
    date: "2025-05-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-object
    title: Control add-in object
    date: "2025-03-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object
    title: Entitlement object
    date: "2025-03-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extensible-enums
    title: Extensible Enums
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq
    title: FAQ for Developing in AL
    date: "2025-06-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-customization-object
    title: Page customization object
    date: "2025-08-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object
    title: Page extension object
    date: "2024-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-object
    title: Page object
    date: "2024-04-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object
    title: Permission Set Extension Object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object
    title: Permission set object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/pertenantextensioncop
    title: PerTenantExtensionCop analyzer
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-pragma
    title: Pragma Directives in AL Overview
    date: "2026-10-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-object
    title: Profile object
    date: "2024-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-programming-in-al
    title: Programming in AL
    date: "2025-01-16"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object
    title: Query object
    date: "2024-11-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-region
    title: Region Directives for Organizing AL Code
    date: "2026-10-05"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object
    title: Report object
    date: "2024-09-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rule-set-syntax-for-code-analysis-tools
    title: Ruleset for the code analysis tool
    date: "2022-06-24"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object
    title: Table extension object
    date: "2024-04-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-keys
    title: Table keys
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object
    title: Table object
    date: "2026-06-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/uicop
    title: UICop analyzer
    date: "2026-10-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-code-analysis-tool
    title: Using the code analysis tool
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-complextypes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-control-statements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reference-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-simple-statements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-programming-in-al
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-access-modifiers
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-labels
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xml-comments
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development
    - topic/dev-itpro/development/the-al-programming-language/variables-types-and-operators
    - topic/dev-itpro/development/the-al-programming-language/objects
    - topic/dev-itpro/development/the-al-programming-language/preprocessor-directives-in-al
    - topic/dev-itpro/development/the-al-programming-language/code-analysis
  localizations: []
  videos:
    - video/D_Lur52IrIg
    - video/eUkx_VCcyoU
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - The AL programming language
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development
children:
  - topic/dev-itpro/development/the-al-programming-language/variables-types-and-operators
  - topic/dev-itpro/development/the-al-programming-language/objects
  - topic/dev-itpro/development/the-al-programming-language/preprocessor-directives-in-al
  - topic/dev-itpro/development/the-al-programming-language/code-analysis
coverage:
  learn: 45
  code: 0
  video: 2
  blog: 0
  guideline: 0
bc_forms: []
member_hash: dc77893b4664aae97ffd100f26ecf3c5de655899ad5186dcfe50dc0d23450399
narrative: generated
---

# The AL programming language

> The AL programming language section covers language fundamentals for Business Central extensions: statements, methods, types, error handling, labels, access modifiers, and XML comments. It also links to subtopics on variables and operators, object types, preprocessor directives, and code analysis. It answers syntax, behavior, and how-to-write-AL questions.

Path: [Development](../development.md) > The AL programming language · tier official · system development · narrative reviewed by Opus

## Overview

This section documents the AL language used to build Business Central extensions. The core pages explain programming basics (variable declarations, triggers, code reuse), the statement types (simple statements and control statements), and how to declare and call methods, including return values and complex return types.
Further pages cover cross-cutting topics: error handling with error dialogs, try methods, error collection and telemetry; labels for translatable text; access modifiers for controlling visibility; and XML comments for IntelliSense and generated documentation. A reference overview page lists the objects, properties, triggers, attributes, and methods available, and an FAQ covers setup, debugging, and Marketplace validation.
Start with "Programming in AL" for the fundamentals, then move to the subtopics: variables, types and operators; objects; preprocessor directives; and code analysis.

## Key points

- Programming in AL covers variable declarations, protected variables, trigger types, code reuse, and security patterns.
- Control statements include if-then-else, case, for, foreach, while, repeat-until, plus break and continue.
- Simple statements are assignment, method, and AssertError statements, including compound assignment operators.
- Methods can have local or global scope, parameters, return values, and attributes; complex types let procedures return records or built-ins like HttpClient and HttpResponseMessage.
- Error handling covers error dialogs, try methods, error collection, telemetry, the ErrorInfo data type, and error message quality.
- Access modifiers are internal, local, protected, and public, with an internalsVisibleTo setting, applied at compile time.
- Labels provide translatable string constants with Comment, Locked, and MaxLength parameters for captions, tooltips, and messages.
- Subtopics cover variables and operators (8 pages), object types (16 pages), preprocessor directives (3 pages), and code analysis (7 pages).

## Subtopics

- [Variables, types, and operators](the-al-programming-language/variables-types-and-operators.md) (8 pages)
- [Objects](the-al-programming-language/objects.md) (16 pages)
- [Preprocessor directives in AL](the-al-programming-language/preprocessor-directives-in-al.md) (3 pages)
- [Code analysis](the-al-programming-language/code-analysis.md) (7 pages)

## More Learn pages

- [AL complex types](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-complextypes): With AL complex types, you can return most types from procedures in AL for Business Central
- [AL control statements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-control-statements): Compound, conditional, and repetitive control statements in AL for Business Central.
- [AL development environment reference overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reference-overview): Overview of the objects in the AL Language development environment.
- [AL error handling](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling): Deal with unexpected situations that occur when code is run in AL for Business Central.
- [AL simple statements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-simple-statements): Describes the simple, single-line statements in AL for Business Central with examples
- [FAQ for Developing in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq): Overview of frequently asked questions for development using the AL language.
- [Programming in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-programming-in-al): AL is the programming language used for manipulating data such as retrieving, inserting, and modifying records in a Business Central database. It controls the execution of the various application objects, such as pages, reports, or codeunits.
- [Using Access Modifiers in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-access-modifiers): Describes how the AL access modifiers can be used in code.
- [Working with AL methods](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-methods): Methods also known as procedures are a fundamental programming element in AL for Business Central.
- [Working with Labels in AL for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-labels): Learn how to work with labels in AL, the translatable string constants that Business Central displays as captions, descriptions, and messages.
- [XML comments in code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xml-comments): Learn about adding documentation to AL code by including XML elements in a special syntax.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's new in AL and Tools (2026 release wave 2)](../../../videos/D_Lur52IrIg.md) (video): "al mcp; language server protocol; symbol search; interface design"
- [What's New: AL Language (2025 release wave 1)](../../../videos/eUkx_VCcyoU.md) (video): "AL Language; resources; pages; reports; strings; json; yaml"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
