---
id: topic/dev-itpro/development/system-and-application-reference-documen
type: topic
title: System and application reference documentation
summary: System and application reference documentation describes how the Business Central application is split into modular layers (System Application and Business Foundation) and how to build or contribute AL modules to the System Application. It answers questions about application structure, module architecture rules, and the contribution workflow.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:35.706Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: be02286c3d0d86ae444fd700df1307d19d6a770426e836017532c1d595cbeb92
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
  posts: []
  guidelines: []
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 98ef6732d6681797c8297b386cfded76d205884c7f79b1f257a2ad1cf3d51205
narrative: generated
---

# System and application reference documentation

> System and application reference documentation describes how the Business Central application is split into modular layers (System Application and Business Foundation) and how to build or contribute AL modules to the System Application. It answers questions about application structure, module architecture rules, and the contribution workflow.

Path: [Development](../development.md) > System and application reference documentation · tier official · system development · narrative reviewed by Opus

## Overview

The Business Central application is being refactored into smaller modular layers to improve code organization and maintainability. The System Application layer holds ERP agnostic functionality. The Business Foundation layer holds ERP related functionality. The overview page explains this split.

The "Creating new modules" subtopic (6 pages) is the practical follow-up. It covers how to build, change, and contribute AL modules in the System Application: environment setup, architecture rules, facade and implementation codeunits, .NET wrapper modules, tests, and the Git workflow.

Start with the overview page to understand the layers and where code belongs. Then move to Creating new modules if you plan to add or change a module.

## Key points

- The application is being refactored into smaller modular layers.
- System Application contains ERP agnostic functionality.
- Business Foundation contains ERP related functionality.
- The goal of the modular design is better code organization and maintainability.
- Creating new modules covers environment setup for working on the System Application.
- Module guidance includes architecture rules and facade and implementation codeunits.
- It also covers .NET wrapper modules, tests, and the Git workflow for contributions.

## Subtopics

- [Creating new modules](system-and-application-reference-documen/creating-new-modules.md) (6 pages)

## More Learn pages

- [Overview of the application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-system-application-overview): This article provides an overview of the modules in the Business Central application, and information about how you can use them.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
