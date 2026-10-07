---
id: topic/dev-itpro/development/the-al-programming-language/preprocessor-directives-in-al
type: topic
title: Preprocessor directives in AL
summary: "Preprocessor directives in AL: conditional compilation with #if, #else, #elif and #endif, regions for collapsible code, and pragma directives that give the compiler special instructions. It answers questions about defining symbols, organizing code, and suppressing warnings."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8a9406176baa167311b5ef1ba07b8282588e6a5b5f24ccaaa72549ecff66521b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-pragma
    title: Pragma directive in AL
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directives-in-al
    title: Preprocessor directives in AL
    date: "2025-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-region
    title: Region directive in AL
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-pragma
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directives-in-al
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-region
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

> Preprocessor directives in AL: conditional compilation with #if, #else, #elif and #endif, regions for collapsible code, and pragma directives that give the compiler special instructions. It answers questions about defining symbols, organizing code, and suppressing warnings.

Path: [Development](../../development.md) > [The AL programming language](../the-al-programming-language.md) > Preprocessor directives in AL · tier official · system development · **unreviewed** (machine-generated narrative)

## Overview

Preprocessor directives in AL let you control how the compiler treats code. The overview page covers conditional compilation based on defined symbols, region directives for organizing code, and pragma directives for suppressing warnings or controlling behavior.

Two pages go deeper. The region directive page explains #region and #endregion for collapsible blocks, including nested regions. The pragma directive page explains the disable, restore and enable actions, used with the pragma Warning and pragma ImplicitWith instructions.

Start with the Preprocessor directives in AL page for the full picture, then move to the region or pragma pages for the specific syntax.

## Key points

- Conditional directives: #if, #else, #elif, #endif select code to compile based on defined symbols.
- Symbols can be defined in app.json and in code.
- Conditions can use the logical operators and, or, not.
- #region and #endregion mark collapsible code blocks and can be nested.
- Pragma directives give the compiler special instructions.
- Pragma supports disable, restore and enable actions.
- Pragma Warning suppresses warnings, and pragma ImplicitWith controls implicit with behavior.

## Learn pages

- [Pragma directive in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-pragma): Types of pragma directives supported in AL for Business Central.
- [Preprocessor directives in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directives-in-al): The different types of preprocessor directives in AL; conditional, regions, and pragmas and preprocessorSymbols setting.
- [Region directive in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/directives/devenv-directive-region): The region directive in AL for Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
