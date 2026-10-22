---
id: topic/dev-itpro/development/development-environment/compile-publish-and-debug
type: topic
title: Compile, publish, and debug
summary: Compiling, publishing, debugging and profiling AL extensions for Business Central in Visual Studio Code. It answers questions on breakpoints, snapshot and attach debugging, the AL Profiler, RAD publishing, compilation scope, app package signing, and Entra authentication for on-premises debugging.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-22T01:12:33.102Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0065b6b1de1472649c194fa35aa225a94c226988d233ff15742aaad721c1ae2b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview
    title: Analyze AL Performance with the AL Profiler
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next
    title: Attach and debug next
    date: "2026-03-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-compilation-scope-overview
    title: Compilation scope overview
    date: "2025-05-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
    title: Debug AL Code in Visual Studio Code
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code
    title: Debug Upgrade and Install Code in AL
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging-conditional-breakpoints
    title: Set Conditional Breakpoints in AL
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sign-extension
    title: Sign an app package file
    date: "2025-04-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging
    title: Snapshot debugging
    date: "2026-08-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshoot-vscode-webclient
    title: Troubleshoot in Visual Studio Code directly from the web client
    date: "2025-03-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-mcp-server
    title: Troubleshooting MCP Server for AL
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-aad-auth-onprem
    title: Use Microsoft Entra authentication for Business Central on-premises installations
    date: "2024-01-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rad-publishing
    title: Work with Rapid Application Development
    date: "2025-07-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-compilation-scope-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging-conditional-breakpoints
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sign-extension
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshoot-vscode-webclient
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-mcp-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-aad-auth-onprem
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rad-publishing
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment
  localizations: []
  videos:
    - video/TY82NR2hGEg
    - video/tzeO0mc8RJo
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12320
learn_toc_path:
  - Development
  - Development environment
  - Compile, publish, and debug
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment
children: []
coverage:
  learn: 12
  code: 0
  video: 2
  blog: 0
  guideline: 0
bc_forms: []
member_hash: ee453a3841cc13e047eb0ecef3884b62fea0ba28cf771b2964fcbe8fa81ddd66
narrative: generated
---

# Compile, publish, and debug

> Compiling, publishing, debugging and profiling AL extensions for Business Central in Visual Studio Code. It answers questions on breakpoints, snapshot and attach debugging, the AL Profiler, RAD publishing, compilation scope, app package signing, and Entra authentication for on-premises debugging.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Compile, publish, and debug · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the developer inner loop for AL extensions: building and publishing, finding errors, and checking performance. Publishing topics include Rapid Application Development (RAD) with delta compilation for faster builds of large projects, and compilation scope, which sets the OnPrem or Cloud target level and decides which platform APIs and .NET types a project can use.

Debugging pages begin with the general Visual Studio Code debugging guide, then go deeper: conditional breakpoints, attach and debug next (no publish needed), debugging install and upgrade code, snapshot debugging of production sessions, and troubleshooting from the web client. The AL Profiler analyzes hot spots, and the Troubleshooting MCP Server for AL lets GitHub Copilot analyze errors, call stacks and variables during a session.

Signing an app package and using Microsoft Entra authentication for on-premises and container setups are supporting topics. Start with "Debug AL Code in Visual Studio Code" for the basics, then pick the specialized page that matches your scenario.

## Key points

- The AL Profiler records execution in instrumentation or sampling mode, configured in launch.json, and shows call stacks, timings and SQL calls in Visual Studio Code.
- Attach and debug next (2023 release wave 1) attaches to a running server without publishing, for web client, web service, background and agent sessions.
- Snapshot debugging records production cloud sessions using snappoints and lets you debug offline in Visual Studio Code.
- Conditional breakpoints pause only when an expression is true, supporting comparison and logical operators (version 26).
- RAD publishing uses delta compilation to cut build and publish times for large AL projects.
- Compilation scope is set by ExtensionAllowedTargetLevel at server level and the target property in the manifest (OnPrem or Cloud).
- App packages can be signed with Azure Key Vault (certificates issued after June 1, 2023) or a PFX file using the dotnet sign tool; self-signed certificates are for local testing.
- Install and upgrade codeunits can be debugged with attach sessions, and the web client can open Visual Studio Code for troubleshooting (2023 release wave 2).

## Learn pages

- [Analyze AL Performance with the AL Profiler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Use instrumentation or sampling with the AL Profiler to analyze AL execution, SQL activity, call stacks, and performance hot spots.
- [Attach and debug next](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next): Attach to a session on a specified server and debug for Web API sessions.
- [Compilation scope overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-compilation-scope-overview): This article explains the configuration and compilation scope for publishing the extension.
- [Debug AL Code in Visual Studio Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging): Debug AL code in Visual Studio Code by using breakpoints, attach sessions, record-write breaks, SQL statistics, and debugger settings.
- [Debug Upgrade and Install Code in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code): Debug AL install and upgrade codeunits by attaching to Business Central before you publish an extension from Visual Studio Code.
- [Set Conditional Breakpoints in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging-conditional-breakpoints): Set conditional breakpoints in Visual Studio Code to pause AL code only when variables, fields, or supported expressions meet a condition.
- [Sign an app package file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sign-extension): This article explains how to sign an AL app package file with a pfx file or with Azure Key Vault.
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging): Overview of how snapshot debugging allows recording running AL code for Business Central.
- [Troubleshoot in Visual Studio Code directly from the web client](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshoot-vscode-webclient): Opening Visual Studio Code directly from the Business Central web client to perform troubleshooting.
- [Troubleshooting MCP Server for AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-mcp-server): Learn how to use the Troubleshooting MCP Server to analyze runtime state during debugging sessions with AI-powered insights in AL.
- [Use Microsoft Entra authentication for Business Central on-premises installations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-aad-auth-onprem): Using Microsoft Entra ID as authentication on on-premises installations and containers for Business Central for debugging and other purposes
- [Work with Rapid Application Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rad-publishing): Describes what Rapid Application Development is and how you publish using RAD.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12320 Fix 409 conflict in APIV2 Company Info E2E description test](../../../../changes/bcapps/12320.md) (code change): "Fixed 409 conflict errors in APIV2 Company Info E2E tests"
- [What's New: Business Central Developer Tools (2023 release wave 2)](../../../../videos/TY82NR2hGEg.md) (video): "AL language extension pre-release versions; AL language extension for Linux"
- [What's New: Developer Tools (2024 release wave 1)](../../../../videos/tzeO0mc8RJo.md) (video): "AL tool; pipelines; object extensions; debugger upgrade"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
