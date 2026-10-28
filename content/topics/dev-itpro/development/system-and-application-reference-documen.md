---
id: topic/dev-itpro/development/system-and-application-reference-documen
type: topic
title: System and application reference documentation
summary: System and application reference documentation describes how the Business Central application is organized into modular layers, and how contributors build on the System Application. It answers questions about the System Application and Business Foundation layers and about creating or changing modules.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:41.014Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 94eca4ac53658c06558aaf00c06945325ececf43507e55c46ced4886b7f63f87
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-change-a-module
    title: Change a System Application Module in Business Central
    date: "2026-10-16"
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
    date: "2023-11-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started
    title: Get started with modules
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-blueprint
    title: Module Architecture
    date: "2025-06-16"
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

> System and application reference documentation describes how the Business Central application is organized into modular layers, and how contributors build on the System Application. It answers questions about the System Application and Business Foundation layers and about creating or changing modules.

Path: [Development](../development.md) > System and application reference documentation · tier official · system development · narrative reviewed (checked by Opus)

## Overview

The Business Central application is being refactored into smaller modular layers to improve code organization and maintainability. Two layers are named: the System Application, which holds ERP agnostic functionality, and Business Foundation, which holds ERP related functionality.

The section has one overview page that explains this layer structure, and one subtopic, Creating new modules, with six pages for contributors to the System Application. That subtopic covers environment setup, module architecture, building new modules, changing existing ones, and writing .NET wrapper modules.

Start with the overview page to understand where functionality sits, then move to Creating new modules if you plan to contribute or need the design rules.

## Key points

- The application is being split into smaller modular layers for better code organization and maintainability.
- System Application layer: ERP agnostic functionality.
- Business Foundation layer: ERP related functionality.
- Creating new modules has 6 pages aimed at System Application contributors.
- Contributor topics: environment setup, module architecture, building new modules, changing existing modules.
- The contributor guidance also covers writing .NET wrapper modules and design rules.

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
