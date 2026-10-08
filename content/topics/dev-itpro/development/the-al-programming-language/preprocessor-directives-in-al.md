---
id: topic/dev-itpro/development/the-al-programming-language/preprocessor-directives-in-al
type: topic
title: Preprocessor directives in AL
summary: "AL preprocessor directives cover conditional compilation (#if, #else, #elif, #endif, #define, #undef), regions (#region, #endregion) and pragmas (#pragma warning, #pragma implicitwith). It answers questions about compiling code conditionally, suppressing warnings and organizing code in large files."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.967Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 12e243a5acb437c82799840a0edc49e2860988949ef1e948adcf6f091bffb9d0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directives-in-al
    title: AL Preprocessor Directives Overview
    date: "2026-10-05"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-region
    title: Region Directives for Organizing AL Code
    date: "2026-10-05"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directives-in-al
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-pragma
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-region
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/the-al-programming-language
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/193
learn_toc_path:
  - Development
  - The AL programming language
  - Preprocessor directives in AL
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/the-al-programming-language
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 2b065c31b1595cd25ac40561e2be01b5fee35433c286acdcad08050c68a3e9c0
narrative: generated
---

# Preprocessor directives in AL

> AL preprocessor directives cover conditional compilation (#if, #else, #elif, #endif, #define, #undef), regions (#region, #endregion) and pragmas (#pragma warning, #pragma implicitwith). It answers questions about compiling code conditionally, suppressing warnings and organizing code in large files.

Path: [Development](../../development.md) > [The AL programming language](../the-al-programming-language.md) > Preprocessor directives in AL · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Preprocessor directives in AL give the compiler instructions before code is built. They let you include or exclude code based on defined symbols, control compiler warnings, and group code into collapsible sections.

The overview page is the best starting point. It introduces conditional directives, symbol definition, logical operators (and, or, not), regions and pragmas, and mentions global symbols in app.json. Two pages go deeper: one on pragma directives (#pragma warning and #pragma implicitwith) and one on region directives for organizing code.

## Key points

- Conditional directives #if, #else, #elif and #endif compile code depending on defined symbols.
- #define and #undef define and undefine symbols; logical operators and, or, not combine them in conditions.
- Global symbols can be set in app.json.
- #region and #endregion mark collapsible blocks of code and can be nested.
- #pragma warning disables or restores compiler warnings.
- #pragma implicitwith controls how implicit with statements are handled.
- Pragma actions include disable, restore and enable.

## Learn pages

- [AL Preprocessor Directives Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directives-in-al): Learn how to use conditional, region, and pragma preprocessor directives and define symbols in AL for Microsoft Dynamics 365 Business Central extensions.
- [Pragma Directives in AL Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-pragma): Explore the pragma directives and supported actions that control compiler warnings and implicit record contexts in Microsoft Dynamics 365 Business Central.
- [Region Directives for Organizing AL Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-region): Learn how to use the region directive in AL to organize code into collapsible blocks and improve readability in Microsoft Dynamics 365 Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#193 Clarify locale-safe DateFormula Evaluate inputs](../../../../changes/bcquality/193.md) (code change): "DateFormula Evaluate calls require language-independent literals to work correctly"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
