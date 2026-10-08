---
id: topic/dev-itpro/development/system-and-application-reference-documen/creating-new-modules
type: topic
title: Creating new modules
summary: Creating new modules covers how to build, change, and contribute AL modules in the Business Central System Application. It answers questions about environment setup, module architecture rules, facade and implementation codeunits, .NET wrapper modules, tests, and the Git workflow.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:23.589Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 46b2a05aa39730e70e5be4f4629ecddde03d1dc7514919b1874dbd1b76affd3a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-change-a-module
    title: Change a module in the System Application
    date: "2024-01-03"
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

> Creating new modules covers how to build, change, and contribute AL modules in the Business Central System Application. It answers questions about environment setup, module architecture rules, facade and implementation codeunits, .NET wrapper modules, tests, and the Git workflow.

Path: [Development](../../development.md) > [System and application reference documentation](../system-and-application-reference-documen.md) > Creating new modules · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section is for developers who want to contribute modules to the System Application in the BCApps repository. It explains the design rules for modules, how to prepare a local development environment, and how to create or change a module.

Start with "Get started with modules" for the requirements (AL development, Git, environment setup). Then follow "Set up an environment for developing a module", which uses GitHub, Docker, BcContainerHelper, and Visual Studio Code. "Module Architecture" gives the design principles you need before writing code: independent projects, public facades, dependency layers, and access modifiers.

Next, choose the task page. "Create a new module in the System Application" walks through facade and implementation codeunits, tests, and contribution guidelines. "Change a module in the System Application" covers modifying existing modules without breaking changes. "Create a .NET Wrapper Module" shows how to expose .NET functionality in AL, using the Regex module as an example.

## Key points

- Modules are developed in the BCApps repository using a Git workflow.
- Environment setup uses GitHub, Docker, BcContainerHelper, and Visual Studio Code.
- Module architecture separates modules into independent projects with a public facade and internal implementation.
- Architecture guidance covers dependencies across functional layers, object accessibility, access modifiers, and extensibility controls.
- A new module needs a facade codeunit, an implementation codeunit, and unit tests.
- Changes to existing modules must follow the architecture guidelines, avoid breaking changes, and include tests.
- .NET wrapper modules use codeunits and temporary tables, the facade pattern, an argument-table pattern, and constructor handling.
- The Regex module is the worked example for .NET wrapping.

## Learn pages

- [Change a module in the System Application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-change-a-module): Learn about steps and examples of how to change a module in the System Application.
- [Create a .NET Wrapper Module](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-a-wrapper-module): This article provides a description of how to contribute a .NET wrapper module.
- [Create a new module in the System Application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-new-module): Learn how to create a new module in the System Application.
- [Get started with modules](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started): Provides an overview of what you need to work with modules in the System Application.
- [Module Architecture](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-blueprint): Learn about the internal components of modules in the System Application.
- [Set up an environment for developing a module](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-up-an-environment): Learn how to set up the tools you need to build a module in the System Application.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
