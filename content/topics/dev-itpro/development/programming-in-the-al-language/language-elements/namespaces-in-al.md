---
id: topic/dev-itpro/development/programming-in-the-al-language/language-elements/namespaces-in-al
type: topic
title: Namespaces in AL
summary: Namespaces in AL cover how AL code is grouped into logical units to avoid naming conflicts and allow object name reuse. The section answers questions about namespace declaration, using directives, nested namespaces, scope resolution, and how to adopt namespaces in existing code with tooling.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:23.659Z"
  flags: []
generated:
  at: "2026-10-26T06:43:56.210Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 759e663b81a6fc83e5de1e58c6dbf25748aa355c9ded8af559924ccaaa59666c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-namespaces-structure
    title: Adopting namespaces in AL
    date: "2026-06-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-namespaces-overview
    title: Namespaces in AL
    date: "2024-03-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-namespaces-structure
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-namespaces-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/language-elements
  localizations: []
  videos:
    - video/KmuTVkodRXM
    - video/nMiLzdfidos
    - video/TY82NR2hGEg
  posts:
    - post/aardvarklabs-blog/3255
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-june-21-27-2026--a323467e2a
    - post/yzhums-com/68087
    - post/yzhums-com/70588
    - post/yzhums-com/71262
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Language elements
  - Namespaces in AL
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/language-elements
children: []
coverage:
  learn: 2
  code: 0
  video: 3
  blog: 5
  guideline: 0
bc_forms: []
member_hash: f4f9f021b50d52006b83b0a058e00599e1c04b536d7c283a84d69050106c3516
narrative: generated
---

# Namespaces in AL

> Namespaces in AL cover how AL code is grouped into logical units to avoid naming conflicts and allow object name reuse. The section answers questions about namespace declaration, using directives, nested namespaces, scope resolution, and how to adopt namespaces in existing code with tooling.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Language elements](../language-elements.md) > Namespaces in AL · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Namespaces in AL organize code into logical groups, prevent naming conflicts, and let the same object name be reused in different contexts. The concept page explains the core elements: declaring a namespace, the using directive, nested namespaces, and the scoping rules that resolve names.

The adoption page is for teams moving existing AL code to namespaces step by step. It describes automated code actions, namespace template resolution, sibling file analysis, a PowerShell script for adding namespaces in bulk, and sorting of using statements. It also covers fully qualified object references, which are supported from Business Central 2026 release wave 1.

Start with "Namespaces in AL" for the concepts and scoping rules. Then read "Adopting namespaces in AL" when you need to apply them to an existing codebase.

## Key points

- Namespaces group code logically and prevent naming conflicts.
- Object names can be reused across different namespace contexts under defined scoping rules.
- Core language elements: namespace declaration, using directive, nested namespaces, scope resolution.
- Adoption can be progressive, not all at once.
- Automated code actions add namespaces, using namespace template resolution and sibling file analysis.
- A PowerShell script can add namespaces to many files in bulk.
- Using statements can be sorted automatically.
- Fully qualified object references are supported from Business Central 2026 release wave 1.

## Learn pages

- [Adopting namespaces in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-namespaces-structure): Learn about features, tools, and best practices for structuring and adopting namespaces in your AL code for Business Central.
- [Namespaces in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-namespaces-overview): Namespaces in AL provide a way to organize your code into logical units and avoid naming conflicts.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Navigating Namespace Changes in Business Central 28](../../../../../posts/aardvarklabs-blog/3255.md) (community post): "Fully qualified names enable direct object reference without using statements"
- [Weekly Review: Business Central AL Development – June 21–27, 2026](../../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-june-21-27-2026--a323467e2a.md) (community post): "Moving older AL apps to namespaces improves object clarity, reduces naming friction"
- [Business Central 2025 wave 2 (BC27): New field “AL Namespace” has been added to object metadata record (AllObj, AllObjWithCaption, Page Metadata, Report Metadata, and Codeunit Metadata)](../../../../../posts/yzhums-com/68087.md) (community post): "AL Namespace field added to five key metadata tables for storing namespace information"
- [Dynamics 365 Business Central: Where to find all standard AL namespaces? (Download all AL namespaces)](../../../../../posts/yzhums-com/70588.md) (community post): "how to find and download all standard AL namespaces in Business Central"
- [Business Central 2026 release wave 1 (BC28): Run AL objects and open record references using fully qualified names (Support for namespaces and fully qualified names)](../../../../../posts/yzhums-com/71262.md) (community post): "support for namespaces and fully qualified names in AL, allowing developers to run"
- [All new goodies about AL Namespace in BC 2025 wave 2](../../../../../videos/KmuTVkodRXM.md) (video): "AL namespace; record id formatting; system reflection; fully qualified names"
- [What's New: AL Language (2026 release wave 1)](../../../../../videos/nMiLzdfidos.md) (video): "json support; data transfer; namespaces; fully qualified names"
- [What's New: Business Central Developer Tools (2023 release wave 2)](../../../../../videos/TY82NR2hGEg.md) (video): "Namespaces in AL language; Using directives for namespace imports"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
