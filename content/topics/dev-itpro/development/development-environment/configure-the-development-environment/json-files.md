---
id: topic/dev-itpro/development/development-environment/configure-the-development-environment/json-files
type: topic
title: JSON files
summary: "JSON configuration files used in AL development for Business Central: app.json, launch.json, Directory.app.props.json and migration.json. It answers questions about extension manifest settings, debugging and publishing setup, shared app properties, and data migration between extensions."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:35.240Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 636867554580aaccb211d3c30233ba0bf0a1e1a398a840119ec0fb93ad82f7ce
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

> JSON configuration files used in AL development for Business Central: app.json, launch.json, Directory.app.props.json and migration.json. It answers questions about extension manifest settings, debugging and publishing setup, shared app properties, and data migration between extensions.

Path: [Development](../../../development.md) > [Development environment](../../development-environment.md) > [Configure the development environment](../configure-the-development-environment.md) > JSON files · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section describes the JSON files that configure an AL extension project in the development environment. Each page covers one file and what it controls: the app manifest, the Visual Studio Code launch configuration, shared properties across apps, and data migration rules.

Start with the app.json page, which defines extension metadata, dependencies, versioning, object ID ranges and runtime targeting. Then read the launch.json page to set up publishing and debugging against a local server or cloud sandbox. Directory.app.props.json is useful when you want to edit values such as version or URLs in one place. The migration.json page applies when moving tables and fields between extensions.

## Key points

- app.json is the manifest: extension metadata, dependencies, versioning, ID ranges, runtime version targeting, translation file generation and marketplace submission requirements.
- launch.json configures VS Code debugging and deployment for on-premises and cloud sandbox environments.
- launch.json supports publishing to a local server or cloud sandbox, attaching to a client or agent session, and snapshot debugging.
- launch.json includes the breakOnError option for debugging behavior.
- Directory.app.props.json defines reusable variables and properties for AL apps, so version, URLs and other values can be edited in one place.
- Directory.app.props.json supports variable substitution and URL composition; the page is tied to 2025 release wave 2.
- migration.json enables data migration of tables and fields between extensions by specifying the target app ID, using apprules.

## Learn pages

- [Directory.app.props.json file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-directory-app-json): Description of the JSON file for setting project metadata in AL extensions for Business Central.
- [JSON Files for AL Extension Projects](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files): Learn how to configure the app.json manifest for AL extension projects in Business Central, including runtime, features, dependencies, and IDs.
- [Launch JSON file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-launch-file): Description of the settings of the launch JSON file for AL in Business Central.
- [Migration JSON file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file): Description of the JSON file for data migration for AL in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
