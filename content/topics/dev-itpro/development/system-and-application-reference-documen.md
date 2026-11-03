---
id: topic/dev-itpro/development/system-and-application-reference-documen
type: topic
title: System and application reference documentation
summary: System and application reference documentation describes how the Business Central application is split into modular layers, mainly System Application (ERP agnostic) and Business Foundation (ERP related). It answers questions about the layered architecture and how to create or contribute System Application modules in the BCApps repository.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-03T01:02:13.361Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6b7d5e6e482a5ff28386b57aa661ee839a7079cd345b32c47554cbfc32051f11
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-change-a-module
    title: Change a System Application Module in Business Central
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-a-wrapper-module
    title: Create a .NET Wrapper Module
    date: "2025-06-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-new-module
    title: Create a new module in the System Application
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started
    title: Get started with modules
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-blueprint
    title: Module Architecture in the System Application
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-application-overview
    title: Overview of the application
    date: "2024-08-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-up-an-environment
    title: Set up an environment for developing a module
    date: "2025-11-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-application-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development
    - topic/dev-itpro/development/system-and-application-reference-documen/creating-new-modules
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/2678
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-32-unit-of-measure-management-codeunit--bcda67d854
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-42-user-setup-management--0c395048ea
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-43-regex-codeunit--c80818b540
  guidelines: []
  changes:
    - change/al-go/2301
    - change/al-go/2334
learn_toc_path:
  - Development
  - System and application reference documentation
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development
children:
  - topic/dev-itpro/development/system-and-application-reference-documen/creating-new-modules
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 4
  guideline: 0
bc_forms: []
member_hash: 98ef6732d6681797c8297b386cfded76d205884c7f79b1f257a2ad1cf3d51205
narrative: generated
---

# System and application reference documentation

> System and application reference documentation describes how the Business Central application is split into modular layers, mainly System Application (ERP agnostic) and Business Foundation (ERP related). It answers questions about the layered architecture and how to create or contribute System Application modules in the BCApps repository.

Path: [Development](../development.md) > System and application reference documentation · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how the Business Central application is organized. The application is being refactored into smaller modular layers to improve code organization and maintainability. The System Application layer holds ERP agnostic functionality, and the Business Foundation layer holds ERP related functionality.

The overview page gives the architectural picture and is the place to start. The Creating new modules subtopic (6 pages) builds on it with practical guidance for developers who want to add or change System Application modules in the BCApps repository.

That subtopic covers environment setup, module architecture, facade and implementation codeunits, .NET wrapper modules, tests, and the pull request workflow.

## Key points

- The application is being refactored into smaller modular layers for better code organization and maintainability.
- System Application contains ERP agnostic functionality.
- Business Foundation contains ERP related functionality.
- Start with the Overview of the application page for the layer concepts.
- Creating new modules explains how to create, change, and contribute System Application modules in the BCApps repository.
- Module guidance includes facade and implementation codeunits and .NET wrapper modules.
- The contribution guidance covers environment setup, tests, and the pull request workflow.

## Subtopics

- [Creating new modules](system-and-application-reference-documen/creating-new-modules.md) (6 pages)

## More Learn pages

- [Overview of the application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-application-overview): This article provides an overview of the modules in the Business Central application, and information about how you can use them.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#2301 Provide package cache to aldoc when building reference documentation](../../../changes/al-go/2301.md) (code change): "aldoc when building reference documentation for artifact-based apps"
- [#2334 Handle app names with underscores correctly for reference documentation](../../../changes/al-go/2334.md) (code change): "Handle app names with underscores correctly for reference documentation"
- [Understanding AL Development: The Type Helper Code Unit](../../../posts/aardvarklabs-blog/2678.md) (community post): "The Type Helper code unit is a utility in Business Central's System.Reflection"
- [BC Friday Tips #32 Unit of Measure Management Codeunit](../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-32-unit-of-measure-management-codeunit--bcda67d854.md) (community post): "built-in functions for handling unit of measure conversions"
- [BC Friday Tips #42 User Setup Management](../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-42-user-setup-management--0c395048ea.md) (community post): "The User Setup Management codeunit provides built-in functions for checking posting dates"
- [BC Friday Tips #43 Regex Codeunit](../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-43-regex-codeunit--c80818b540.md) (community post): "Business Central includes a Regex codeunit that enables pattern matching in text"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
