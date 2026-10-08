---
id: topic/dev-itpro/development/development-environment/configure-the-development-environment
type: topic
title: Configure the development environment
summary: "Configuring the AL development environment for Business Central: VS Code AL Language extension settings, performance tuning, runtime targeting in app.json, resource exposure policy, Docker containers and GitHub Codespaces. It answers setup, configuration and IP protection questions, with a subtopic on the JSON files."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:14.903Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e7c21a062be36b58ed0bade511245d3192691a2185a6668f3735121b10ad873b
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
    title: Launch JSON file
    date: "2026-05-29"
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

> Configuring the AL development environment for Business Central: VS Code AL Language extension settings, performance tuning, runtime targeting in app.json, resource exposure policy, Docker containers and GitHub Codespaces. It answers setup, configuration and IP protection questions, with a subtopic on the JSON files.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Configure the development environment · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers how to set up and tune a Business Central AL development environment. It includes the AL Language extension settings in Visual Studio Code (compilation, code analysis, debugging, editor behavior) and a page on improving performance with large projects.

Two pages cover where code runs. One describes a container-based environment using Docker and the BCContainerHelper PowerShell module. The other describes cloud-hosted development in GitHub Codespaces through a devcontainer.json file.

Other pages cover project-level settings: the runtime property in app.json for targeting a platform version, and the resourceExposurePolicy setting for protecting source code. The JSON files subtopic (app.json, launch.json, Directory.app.props.json, migration.json) details the configuration files. Start with the AL Language extension configuration page, then pick a container or Codespaces setup.

## Key points

- The AL Language extension settings control compilation, code analysis, debugging and editor behavior, including incremental build, code analyzers, symbol search, profiler and snapshot debugging.
- To speed up VS Code with large projects: disable code analysis, enable incremental builds, and adjust editor settings such as background compilation, code actions and format on save.
- The runtime property in app.json sets the platform version an extension targets, which determines available features and publishing compatibility.
- resourceExposurePolicy has allowDebugging, allowDownloadingSource, includeSourceInSymbolFile and applyToDevExtension; the NonDebuggable attribute also relates to IP protection.
- A dynamic policy override using Azure Key Vault can give time-limited access to an extension's source code.
- Container-based development uses Docker, Windows containers and BCContainerHelper to create and manage sandbox containers and install apps.
- GitHub Codespaces development is configured with devcontainer.json (tools, VS Code extensions, settings, CodeCop and UICop analyzers, environment variables, port forwarding) for fast onboarding and consistent teams.
- The JSON files subtopic covers app.json, launch.json, Directory.app.props.json and migration.json (4 pages).

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
