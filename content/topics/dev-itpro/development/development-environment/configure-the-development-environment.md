---
id: topic/dev-itpro/development/development-environment/configure-the-development-environment
type: topic
title: Configure the development environment
summary: "Configuring the AL development environment for Business Central: VS Code AL Language extension settings, performance tuning, container and GitHub Codespaces setups, runtime targeting, and resource exposure policy. It answers questions about setting up and tuning a dev environment and about the JSON configuration files used in AL projects."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:18.690Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6401e98a17e0dd98e1b79d9036a76d73f33b88a612063e7a1819b1e59555b35f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-extension-configuration
    title: AL Language extension configuration
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-developing-for-multiple-platform-versions
    title: Develop for multiple platform versions
    date: "2024-03-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-directory-app-json
    title: Directory.app.props.json file
    date: "2025-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files
    title: JSON Files for AL Extension Projects
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-launch-file
    title: Launch JSON Settings for Business Central AL
    date: "2026-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file
    title: Migration JSON file
    date: "2025-05-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-optimize-visual-studio-code
    title: Optimize Visual Studio code editing and building performance
    date: "2022-06-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection
    title: Resource exposure policy setting
    date: "2024-01-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-running-container-development
    title: Running a container-based development environment
    date: "2023-10-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-code-spaces-al
    title: Use GitHub Codespaces for AL development
    date: "2026-05-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-extension-configuration
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-developing-for-multiple-platform-versions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-optimize-visual-studio-code
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-running-container-development
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-code-spaces-al
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment
    - topic/dev-itpro/development/development-environment/configure-the-development-environment/json-files
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Development environment
  - Configure the development environment
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment
children:
  - topic/dev-itpro/development/development-environment/configure-the-development-environment/json-files
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 2bacf55057d515171b5ffa49dd7d138332dd1d035ecd858efa431c4705a49ed9
narrative: generated
---

# Configure the development environment

> Configuring the AL development environment for Business Central: VS Code AL Language extension settings, performance tuning, container and GitHub Codespaces setups, runtime targeting, and resource exposure policy. It answers questions about setting up and tuning a dev environment and about the JSON configuration files used in AL projects.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Configure the development environment · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers how to set up and tune the places where you write AL code for Business Central. It includes the AL Language extension settings in Visual Studio Code (compilation, code analysis, debugging, editor behavior), a page on speeding up VS Code with large projects, and two ways to host the environment: a Docker container using the BCContainerHelper PowerShell module, or cloud-hosted GitHub Codespaces defined by a devcontainer.json file.

Project-level behavior is set in app.json. One page explains the runtime property, which defines the platform version an extension targets and so which features are available. Another explains the resourceExposurePolicy setting, which controls IP protection by managing debugging, source download and source in symbol files. The JSON files subtopic covers app.json, launch.json, Directory.app.props.json and migration.json in more detail.

Start with the AL Language extension configuration page to learn the available settings. Then pick a hosting approach (container or Codespaces), and use the performance and JSON file pages as you refine the project.

## Key points

- The AL Language extension settings control compilation, background code analysis, incremental build, code analyzers, symbol search, profiler and snapshot debugging.
- For large projects, disable code analysis, enable incremental builds and adjust editor settings such as background compilation, code actions and format on save.
- The runtime property in app.json sets the target platform version, which decides available features and publishing compatibility.
- resourceExposurePolicy in app.json has allowDebugging, allowDownloadingSource, includeSourceInSymbolFile and applyToDevExtension; the NonDebuggable attribute is also covered (2021 release wave 2).
- A container-based environment uses Docker, Windows containers and BCContainerHelper to create sandbox containers and install apps (2026 release wave 1, version 28.0).
- GitHub Codespaces uses devcontainer.json to define tools, VS Code extensions, CodeCop and UICop analyzers, environment variables and port forwarding for consistent team onboarding.
- The JSON files subtopic (4 pages) covers app.json, launch.json, Directory.app.props.json and migration.json: project config, debug and publish settings, shared properties and data migration between extensions.

## Subtopics

- [JSON files](configure-the-development-environment/json-files.md) (4 pages)

## More Learn pages

- [AL Language extension configuration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-extension-configuration): Description of the AL Language extension settings in Visual Studio Code for Business Central.
- [Develop for multiple platform versions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-developing-for-multiple-platform-versions): The AL language extension is compatible with multiple platform versions for developing solutions in marketplace.
- [Optimize Visual Studio code editing and building performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-optimize-visual-studio-code): Explains how you configure Visual Studio Code to get better performance when editing and building AL projects.
- [Resource exposure policy setting](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection): Explains how to set the resource exposure policy for allowing download or debugging into extension to see the source code.
- [Running a container-based development environment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-running-container-development): Overview of how to run a container-based development.
- [Use GitHub Codespaces for AL development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-code-spaces-al): GitHub Codespaces gives you a ready-to-use, cloud-hosted development environment for AL that runs in your browser.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
