---
id: topic/dev-itpro/development/system-and-application-reference-documen/creating-new-modules
type: topic
title: Creating new modules
summary: "Creating new modules covers how to contribute to the Business Central System Application: setting up the environment, understanding module architecture, building new modules, changing existing ones, and writing .NET wrapper modules. It answers how-to and design-rule questions for contributors."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:57.469Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 014733d1329091582de0a653a930eb3b33bb6c551782d34537813cc85d2c6f35
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-up-an-environment
    title: Set up an environment for developing a module
    date: "2025-11-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-change-a-module
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-a-wrapper-module
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-new-module
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-blueprint
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-up-an-environment
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/system-and-application-reference-documen
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - System and application reference documentation
  - Creating new modules
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/system-and-application-reference-documen
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 9da9fa73f3b863c712773b9a58bcaf88d0fb61344c88f828c8af5205b5387781
narrative: generated
---

# Creating new modules

> Creating new modules covers how to contribute to the Business Central System Application: setting up the environment, understanding module architecture, building new modules, changing existing ones, and writing .NET wrapper modules. It answers how-to and design-rule questions for contributors.

Path: [Development](../../development.md) > [System and application reference documentation](../system-and-application-reference-documen.md) > Creating new modules · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section is for developers who want to add or change modules in the System Application, working in the BCApps repository. It explains the design rules for modules and walks through the practical steps of contributing.

Start with "Get started with modules" for the requirements (AL development, Git, environment setup), then "Set up an environment for developing a module" for GitHub, Docker, BcContainerHelper and Visual Studio Code. Read "Module Architecture" before writing code, since it defines facades, dependencies, access modifiers and extensibility controls.

Then pick the task page: "Create a new module in the System Application" for a new module with facade and implementation codeunits plus tests, "Change a System Application Module" for edits to existing modules, or "Create a .NET Wrapper Module" for exposing .NET functionality in AL, with the Regex module as the example.

## Key points

- Work happens in the BCApps repository with a Git workflow, Docker container, BcContainerHelper and Visual Studio Code.
- Module architecture separates modules into independent projects with public facades and managed dependencies across functional layers.
- Access modifiers and object accessibility keep implementation internal and control extensibility.
- A new module needs a facade codeunit, an implementation codeunit and unit tests.
- Changing a module involves updating the implementation, exposing and documenting public functions, and adding tests.
- A .NET wrapper module uses codeunits and temporary tables, with facade and argument-table patterns and constructor handling.
- The Regex module is the worked example for .NET wrappers.

## Learn pages

- [Change a System Application Module in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-change-a-module): Learn how to change a System Application module in Business Central, preserve existing behavior, add public APIs and tests, and submit a contribution.
- [Create a .NET Wrapper Module](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-a-wrapper-module): This article provides a description of how to contribute a .NET wrapper module.
  - In the observatory: [Codeunit 3960 "Regex"](../../../../objects/codeunit/3960.md), [Codeunit 3961 "Regex Impl."](../../../../objects/codeunit/3961.md), [Table 3965 "Matches"](../../../../objects/table/3965.md), [Table 3966 "Regex Options"](../../../../objects/table/3966.md)
- [Create a new module in the System Application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-new-module): Learn how to create a new module in the System Application.
  - In the observatory: [Codeunit 1483 "XmlWriter"](../../../../objects/codeunit/1483.md)
- [Get started with modules](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started): Provides an overview of what you need to work with modules in the System Application.
- [Module Architecture](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-blueprint): Learn about the internal components of modules in the System Application.
- [Set up an environment for developing a module](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-up-an-environment): Learn how to set up the tools you need to build a module in the System Application.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
