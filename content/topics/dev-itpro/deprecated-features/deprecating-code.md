---
id: topic/dev-itpro/deprecated-features/deprecating-code
type: topic
title: Deprecating code
summary: Deprecating code in Business Central AL covers how code is marked obsolete and how to handle deprecated language constructs. It answers questions about preprocessor symbols and obsolete attributes, and about the deprecation of explicit and implicit 'with' statements.
tier: official
language: en
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
  input_hash: f64ebdfbd9eaafa3b1ff797b3b8549ddbeb00894c7a85f2cc4babe8f7deecb50
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    title: Best Practices for Deprecation of AL Code
    date: "2024-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecating-with-statements-overview
    title: Deprecating explicit and implicit with statements
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecating-with-statements-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/deprecated-features
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Deprecated features
  - Deprecating code
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/deprecated-features
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d4608473766af82b30873ca7019851e76fed80fdd7be841926e6b77ec2df0508
narrative: generated
---

# Deprecating code

> Deprecating code in Business Central AL covers how code is marked obsolete and how to handle deprecated language constructs. It answers questions about preprocessor symbols and obsolete attributes, and about the deprecation of explicit and implicit 'with' statements.

Path: [Deprecated features](../deprecated-features.md) > Deprecating code · tier official · system none · **unreviewed** (machine-generated narrative)

## Overview

This section has two pages on deprecation in AL code. The first describes how Microsoft obsoletes code in the Base App, using preprocessor statements and the obsolete properties, and gives developers guidance to follow the same patterns in their own code.

The second page covers a specific language deprecation: explicit and implicit 'with' statements. It explains the related warnings and the ways to keep code safe during platform upgrades.

Start with the best practices page if you are obsoleting your own objects or members. Read the 'with' statements page if you see AL0604 or AL0606 warnings or need to prepare code for the change.

## Key points

- Deprecation in AL uses preprocessor directives together with the ObsoleteState, ObsoleteTag and ObsoleteReason properties.
- CLEAN version symbols (CLEAN15, CLEAN16, CLEAN17, CLEAN18) are used in the Base App to control obsoleted code.
- Microsoft's own Base App obsoletion pattern is the model developers are advised to follow.
- Explicit and implicit 'with' statements are deprecated, as described for 2022 release wave 2.
- The AL0604 and AL0606 warnings relate to the 'with' statement deprecation.
- Fixes for 'with' statements include pragma directives, adding qualifications, and the NoImplicitWith flag.

## Learn pages

- [Best Practices for Deprecation of AL Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines): Description of best practices and guidelines for deprecating code in the Base App for Business Central.
- [Deprecating explicit and implicit with statements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecating-with-statements-overview): Rationale and description of why explicit and implicit with statements are deprecated in AL.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
