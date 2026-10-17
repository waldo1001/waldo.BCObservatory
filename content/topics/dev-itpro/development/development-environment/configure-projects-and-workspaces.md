---
id: topic/dev-itpro/development/development-environment/configure-projects-and-workspaces
type: topic
title: Configure projects and workspaces
summary: Configuring AL projects and workspaces in Visual Studio Code for Business Central development. It answers questions about multi-root workspaces, per-folder settings, and project references in app.json, including symbol resolution, publishing, and recovery from publishing failures.
tier: official
language: en
system: projects
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-17T01:13:14.128Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 50e441bf58f07860189c4e41122099b9f4ab55f31c75f91269d66b77f49ac62e
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

> Configuring AL projects and workspaces in Visual Studio Code for Business Central development. It answers questions about multi-root workspaces, per-folder settings, and project references in app.json, including symbol resolution, publishing, and recovery from publishing failures.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Configure projects and workspaces · tier official · system projects · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to organize more than one AL project in a single Visual Studio Code workspace. One page covers multi-root workspaces: grouping several AL project folders into a code-workspace file and setting options such as the package cache path and code analysis for each folder.

The second page covers project references. When a referenced project exists locally in the workspace, you declare the dependency in app.json and symbols resolve automatically without downloading them. The page also describes how projects load in the workspace, how dependencies are published, and how to recover when publishing fails.

Start with the multi-root workspace page to set up the workspace and folder-level settings. Then read the project references page to wire the projects together and understand publishing behavior.

## Key points

- Multi-root workspaces in Visual Studio Code group several AL project folders into one workspace.
- A code-workspace file is created to define the workspace.
- al.packageCachePath and al.enableCodeAnalysis can be set per folder.
- The multi-root page mentions the AL0720 inherent permissions diagnostic and runtime version 18.0.
- Project references are defined in app.json and apply where the referenced projects exist locally.
- With project references, symbols resolve automatically without downloads.
- The project references page covers project loading, dependency publishing, RAD publishing, and incremental build.
- The project references page mentions versions 25 and 21.1 and explains recovery from publishing failures.

## Learn pages

- [Work with multiple AL project folders within one workspace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-multiroot-workspaces): Handling solutions in the AL language that contain multiple projects.
- [Work with multiple projects and project references](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-workspace-projects-references): Handling solutions in the AL language that contains multiple projects in one Visual Studio Code folder and contains references between these projects.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
