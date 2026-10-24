---
id: topic/dev-itpro/development/development-environment/configure-the-development-environment/json-files
type: topic
title: JSON files
summary: "JSON files for AL development in Business Central: app.json, launch.json, Directory.app.props.json and migration.json. It answers questions about configuring extension projects, debugging and publishing settings, shared properties across apps, and migrating data between extensions."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:28.632Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 692ffe22b4aaa5740721c1b0f2d0d14c4951cc355515a0a029a3c1eb62b53a1b
evidence:
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-directory-app-json
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-launch-file
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment/configure-the-development-environment
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Development environment
  - Configure the development environment
  - JSON files
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment/configure-the-development-environment
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 97a60099de3f57aa35b1e3024b22b1155f4987a8e2e3acd6871eb679a94b641f
narrative: generated
---

# JSON files

> JSON files for AL development in Business Central: app.json, launch.json, Directory.app.props.json and migration.json. It answers questions about configuring extension projects, debugging and publishing settings, shared properties across apps, and migrating data between extensions.

Path: [Development](../../../development.md) > [Development environment](../../development-environment.md) > [Configure the development environment](../configure-the-development-environment.md) > JSON files · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers the JSON configuration files used in an AL development environment. Each page describes one file and what can be set in it. There are no subtopics.

Start with the app.json page, which holds the core extension settings such as publisher, version, dependencies, object ID ranges and runtime version. Then use launch.json for how the extension is published and debugged against a Business Central server. Directory.app.props.json lets several apps share variables like version and URLs, so you edit them in one place. The migration.json file is for moving table and field data between extensions.

## Key points

- app.json holds extension settings: publisher info, version, dependencies, marketplace metadata, object ID ranges, runtime version, resource exposure policy and translation file generation.
- launch.json configures debugging and publishing to Business Central servers.
- launch.json options include snapshot debugging, attach debugging, the SQL information debugger, long running SQL statements, breakOnError and breakOnRecordWrite.
- Directory.app.props.json defines reusable variables and properties for AL apps, covering version management, URL composition and variable substitution (2025 release wave 2).
- Directory.app.props.json allows single-point edits of values shared across apps.
- migration.json enables data migration of tables and fields between extensions by specifying the target app ID.
- The app.json page lists versions from 2024 release wave 1 through 2026 release wave 2; launch.json notes mention 2022 release wave 2 and version 21.1.

## Learn pages

- [Directory.app.props.json file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-directory-app-json): Description of the JSON file for setting project metadata in AL extensions for Business Central.
- [JSON Files for AL Extension Projects](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files): Learn how to configure the app.json manifest for AL extension projects in Business Central, including runtime, features, dependencies, and IDs.
- [Launch JSON file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-launch-file): Description of the settings of the launch JSON file for AL in Business Central.
- [Migration JSON file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file): Description of the JSON file for data migration for AL in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
