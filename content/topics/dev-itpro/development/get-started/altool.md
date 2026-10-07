---
id: topic/dev-itpro/development/get-started/altool
type: topic
title: ALTool
summary: ALTool is the cross-platform command-line tool for compiling and packaging AL extensions for Business Central. This section answers questions about what the AL Development Tools package contains, how ALTool fits into CI/CD pipelines, and which commands it offers.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:12.842Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cd857e7b3873a9e5a2698899244efc40fc2e516352b17d208a5cc665cb6a8ff8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool-package
    title: AL Development Tools package
    date: "2026-01-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool
    title: ALTool Command-Line Reference for AL Development
    date: "2026-09-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool-package
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/get-started
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Get started
  - ALTool
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/get-started
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 280951ab58ff0d16566c5b5922b1480da263f6efcf002cab84ac99778cd40934
narrative: generated
---

# ALTool

> ALTool is the cross-platform command-line tool for compiling and packaging AL extensions for Business Central. This section answers questions about what the AL Development Tools package contains, how ALTool fits into CI/CD pipelines, and which commands it offers.

Path: [Development](../../development.md) > [Get started](../get-started.md) > ALTool · tier official · system development · narrative reviewed by Opus

## Overview

ALTool is a command-line utility delivered in the AL Development Tools package, a cross-platform NuGet package. It is used to compile and package AL extensions and to retrieve manifests, and it is designed for integration into CI/CD pipelines.

The section has two pages. The package page explains what the AL Development Tools package provides and how ALTool is part of it. The command-line reference lists the ALTool commands: compilation, workspace management, test execution, call graph analysis, and detection of symbol-only packages. It also covers LSP and MCP servers, including MCP proxies for performance profiling and snapshot debugging that connect AI agents to running Business Central environments.

Start with the package page to understand what the package contains and that it is distributed through NuGet. Then use the command-line reference to find the specific command for your build or analysis task.

## Key points

- ALTool is a cross-platform command-line tool for compiling and packaging AL extensions.
- It ships in the AL Development Tools package, available as a NuGet package.
- It supports CI/CD integration for automated builds.
- Commands cover workspace management, test execution, and call graph analysis.
- ALTool can detect symbol-only packages and retrieve manifests.
- It can run LSP and MCP servers.
- MCP proxies for performance profiling and snapshot debugging let AI agents connect to running Business Central environments to profile slow sessions and capture debugging snapshots.
- The reference page is marked with 2026 release wave 2.

## Learn pages

- [AL Development Tools package](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool-package): Streamline AL extension development with the AL Development Tools package. Access powerful command-line utilities for compiling, packaging, and automating workflows.
- [ALTool Command-Line Reference for AL Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool): Simplify AL extension development with ALTool. Validate code, package extensions, and integrate into CI/CD pipelines for seamless deployment.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
