---
id: topic/dev-itpro/development/development-environment/compile-publish-and-debug
type: topic
title: Compile, publish, and debug
summary: Compiling, publishing, debugging, profiling and signing AL extensions for Business Central. It answers questions on breakpoints, attach and snapshot debugging, RAD publishing, compilation scope and target levels, AL Profiler, app signing, and Entra authentication for on-premises debugging.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:36.554Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 49ccf906cdc26bd5b8a1f5632bb1684d9d6ba97a2748289e4420d7e52813139b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview
    title: AL Profiler overview
    date: "2025-09-03"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code
    title: Debug upgrade and install code
    date: "2022-08-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
    title: Debugging in AL
    date: "2025-08-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging-conditional-breakpoints
    title: Setting conditional breakpoints
    date: "2025-09-25"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
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
  videos: []
  posts: []
  guidelines: []
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
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: ee453a3841cc13e047eb0ecef3884b62fea0ba28cf771b2964fcbe8fa81ddd66
narrative: generated
---

# Compile, publish, and debug

> Compiling, publishing, debugging, profiling and signing AL extensions for Business Central. It answers questions on breakpoints, attach and snapshot debugging, RAD publishing, compilation scope and target levels, AL Profiler, app signing, and Entra authentication for on-premises debugging.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Compile, publish, and debug · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers the developer inner loop in Visual Studio Code for AL: building and publishing extensions, finding and fixing errors, and measuring performance. Core debugging is in "Debugging in AL", with conditional breakpoints, attach and debug next, and debugging of upgrade and install code as focused follow-ups.

For production and sandbox problems, snapshot debugging records execution on a cloud server for offline inspection, and the web client can open Visual Studio Code directly for troubleshooting. The AL Profiler finds performance hot spots, and the MCP Server for AL lets GitHub Copilot analyze errors, call stacks and variables during debugging.

Build and delivery pages cover Rapid Application Development (RAD) publishing, compilation scope and target levels, signing app packages, and Microsoft Entra authentication for on-premises and container setups. Start with "Debugging in AL" for general work, or "Work with Rapid Application Development" if build times are the issue.

## Key points

- Debugging in AL uses the Visual Studio Code debugger with breakpoints, break on errors, break on record changes, SQL debugging, database lock inspection and web service debugging.
- Conditional breakpoints break only when a condition is true; complex data types are supported from version 26.
- Attach and debug next attaches to a running server without publishing first, for web clients, web services, background sessions and agent sessions.
- Debugging upgrade and install code needs an incremented app version or the forceUpgrade flag to trigger the upgrade codeunit.
- Snapshot debugging records production cloud sessions and uses snappoints that log variable state without stopping execution.
- AL Profiler offers instrumentation and sampling modes, SQL call tracking, call stack views, CodeLens integration and in-client profiling.
- RAD publishing uses delta compilation to cut build and publish times in large AL projects.
- App signing uses Azure Key Vault (certificates issued after June 1, 2023) or PFX files with the dotnet sign tool; self-signed certificates are for local testing.

## Learn pages

- [AL Profiler overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Description of how to use the AL profiler and the Performance Profiler to analyze performance in code written for Business Central.
- [Attach and debug next](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next): Attach to a session on a specified server and debug for Web API sessions.
- [Compilation scope overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-compilation-scope-overview): This article explains the configuration and compilation scope for publishing the extension.
- [Debug upgrade and install code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code): Overview of debugging upgrade and install codeunits in AL for Business Central
- [Debugging in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging): Debugging in AL with Visual Studio Code and the AL Language extension.
- [Setting conditional breakpoints](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging-conditional-breakpoints): Overview of setting conditional breakpoints in AL.
- [Sign an app package file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sign-extension): This article explains how to sign an AL app package file with a pfx file or with Azure Key Vault.
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging): Overview of how snapshot debugging allows recording running AL code for Business Central.
- [Troubleshoot in Visual Studio Code directly from the web client](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshoot-vscode-webclient): Opening Visual Studio Code directly from the Business Central web client to perform troubleshooting.
- [Troubleshooting MCP Server for AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-mcp-server): Learn how to use the Troubleshooting MCP Server to analyze runtime state during debugging sessions with AI-powered insights in AL.
- [Use Microsoft Entra authentication for Business Central on-premises installations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-aad-auth-onprem): Using Microsoft Entra ID as authentication on on-premises installations and containers for Business Central for debugging and other purposes
- [Work with Rapid Application Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rad-publishing): Describes what Rapid Application Development is and how you publish using RAD.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
