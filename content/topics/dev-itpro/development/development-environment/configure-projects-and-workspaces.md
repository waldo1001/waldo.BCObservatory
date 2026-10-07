---
id: topic/dev-itpro/development/development-environment/configure-projects-and-workspaces
type: topic
title: Configure projects and workspaces
summary: Configuring AL projects and workspaces in Visual Studio Code for Business Central development. It answers questions about grouping several AL project folders in one multi-root workspace, per-folder settings, and managing project references and dependencies between projects.
tier: official
language: en
system: projects
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:02.232Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f5aeb8f9dbbafbb4d9d32e73e81e87ba7da57f88190b3bdb5231c0d55024187e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-multiroot-workspaces
    title: Work with multiple AL project folders within one workspace
    date: "2026-09-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-workspace-projects-references
    title: Work with multiple projects and project references
    date: "2024-09-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-multiroot-workspaces
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-workspace-projects-references
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Development environment
  - Configure projects and workspaces
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: b8036f13b53e495bb1b650d2fb2d16862706755f2e6d1b4af0ea4bb8f064c354
narrative: generated
---

# Configure projects and workspaces

> Configuring AL projects and workspaces in Visual Studio Code for Business Central development. It answers questions about grouping several AL project folders in one multi-root workspace, per-folder settings, and managing project references and dependencies between projects.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Configure projects and workspaces · tier official · system projects · narrative reviewed by Opus

## Overview

This section covers how to organize more than one AL project in a single Visual Studio Code workspace. One page explains multi-root workspaces: how to create a code-workspace file, group AL project folders, and set folder-level options such as the package cache path and code analysis.

The second page covers multi-project setups where projects depend on each other. It describes project references, automatic symbol resolution, coordinated publishing of dependencies, incremental build, project loading and dependency graph traversal.

Start with the multi-root workspace page to set up the workspace and per-folder settings. Then read the project references page if your extensions depend on one another.

## Key points

- Multi-root workspaces in Visual Studio Code group several AL project folders into one workspace using a code-workspace file.
- Settings can be set per folder, including al.packageCachePath and al.enableCodeAnalysis.
- The multi-root page mentions the AL0720 inherent permissions diagnostic and runtime version 18.0.
- Project references let interdependent AL projects resolve symbols automatically.
- Dependencies are published in a coordinated way, following the dependency graph.
- Incremental build and project loading apply to multi-project workspaces.
- The project references page cites version 21.1 and version 25.

## Learn pages

- [Work with multiple AL project folders within one workspace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-multiroot-workspaces): Handling solutions in the AL language that contain multiple projects.
- [Work with multiple projects and project references](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-workspace-projects-references): Handling solutions in the AL language that contains multiple projects in one Visual Studio Code folder and contains references between these projects.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
