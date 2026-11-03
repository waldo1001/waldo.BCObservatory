---
id: topic/dev-itpro/development/system-and-application-reference-documen/creating-new-modules
type: topic
title: Creating new modules
summary: Creating new modules covers how to create, change, and contribute System Application modules in the BCApps repository. It answers questions on environment setup, module architecture, facade and implementation codeunits, .NET wrapper modules, tests, and the pull request workflow.
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
  input_hash: e9ac02ee63658772856b4f1860b3690dc15fe5e0a27ccd03b38648669753f192
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

> Creating new modules covers how to create, change, and contribute System Application modules in the BCApps repository. It answers questions on environment setup, module architecture, facade and implementation codeunits, .NET wrapper modules, tests, and the pull request workflow.

Path: [Development](../../development.md) > [System and application reference documentation](../system-and-application-reference-documen.md) > Creating new modules · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for developers who want to add or modify a module in the Business Central System Application through the BCApps repository. It walks through the full path: requirements, local environment, module design, implementation, tests, and contribution.

Start with "Get started with modules" for requirements (AL development, Git) and an entry point to creating or modifying modules. Then follow "Set up an environment for developing a module", which uses GitHub, Docker, BcContainerHelper, and Visual Studio Code. "Module Architecture in the System Application" gives the design rules for API design, packaging, dependencies, object accessibility, and testing.

For the actual work, use "Create a new module in the System Application" for a new module (app.json, facade and implementation codeunits, tests, pull request) or "Change a System Application module" for existing ones. "Create a .NET Wrapper Module" covers exposing .NET functionality in AL, with the Regex module as the example.

## Key points

- Modules are developed and contributed in the BCApps repository using Git and pull requests.
- Development environment uses GitHub, Docker, BcContainerHelper, and Visual Studio Code.
- A new module needs a module structure with an app.json file, a public facade codeunit, and an implementation codeunit.
- Tests are added alongside the module; the new-module guide follows a test-driven approach.
- Architecture guidance covers the Internal access modifier, Access property for table fields, SingleInstance, Extensible, and internalsVisibleTo configuration.
- Changing an existing module means updating the implementation, exposing functionality through the public API, and adding tests.
- .NET wrapper modules use codeunits and temporary tables, with facade, argument-table, and constructor handling patterns.
- The new-module guide references version 17.0.0.0.

## Learn pages

- [Change a System Application Module in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-change-a-module): Learn how to update an existing Business Central System Application module, preserve its public API, add tests, and contribute your changes to BCApps.
  - In the observatory: [Codeunit 4110 "Base64 Convert"](../../../../objects/codeunit/4110.md), [Codeunit 4111 "Base64 Convert Impl."](../../../../objects/codeunit/4111.md)
- [Create a .NET Wrapper Module](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-a-wrapper-module): This article provides a description of how to contribute a .NET wrapper module.
  - In the observatory: [Codeunit 3960 "Regex"](../../../../objects/codeunit/3960.md), [Codeunit 3961 "Regex Impl."](../../../../objects/codeunit/3961.md), [Table 3965 "Matches"](../../../../objects/table/3965.md), [Table 3966 "Regex Options"](../../../../objects/table/3966.md)
- [Create a new module in the System Application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-new-module): Learn how to create a new module in the System Application.
  - In the observatory: [Codeunit 1483 "XmlWriter"](../../../../objects/codeunit/1483.md)
- [Get started with modules](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started): Provides an overview of what you need to work with modules in the System Application.
- [Module Architecture in the System Application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-blueprint): Design System Application modules with clear public APIs, internal implementations, separate tests, and XML documentation that fit BCApps conventions.
- [Set up an environment for developing a module](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-up-an-environment): Learn how to set up the tools you need to build a module in the System Application.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
