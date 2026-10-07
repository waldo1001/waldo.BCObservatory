---
id: topic/dev-itpro/development/development-environment/compile-publish-and-debug
type: topic
title: Compile, publish, and debug
summary: Compiling, publishing, debugging and signing AL extensions for Business Central in Visual Studio Code. It answers questions on breakpoints, snapshot and attach debugging, the AL Profiler, compilation scope, RAD publishing, app signing, and Entra authentication for on-premises.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.961Z"
  flags: []
generated:
  at: "2026-10-07T21:13:11.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 97345af3fba82bdc4726477d3602096000fe21bee59291bafbc8b7d31f5563a8
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

> Compiling, publishing, debugging and signing AL extensions for Business Central in Visual Studio Code. It answers questions on breakpoints, snapshot and attach debugging, the AL Profiler, compilation scope, RAD publishing, app signing, and Entra authentication for on-premises.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Compile, publish, and debug · tier official · system administration · narrative reviewed by Opus

## Overview

This section covers the build-and-diagnose loop for AL developers. It includes compilation scope (OnPrem or Cloud target level), faster publishing with Rapid Application Development (RAD) and delta compilation, and signing app packages with Azure Key Vault or PFX files. It also covers Microsoft Entra authentication for on-premises and container setups used from Visual Studio Code.

Debugging has the largest share of pages. "Debugging in AL" is the starting point: breakpoints, conditional breakpoints, break on errors and record changes, SQL debugging, and database locks. Related pages cover attach and debug next, debugging upgrade and install code, snapshot debugging of production sessions, and starting a troubleshooting session from the web client. The AL Profiler helps find performance hot spots, and the MCP Server for AL lets GitHub Copilot analyze errors, call stacks and variables during a debug session.

Start with "Debugging in AL" for general debugging. Then pick the page that matches your situation: production issue (snapshot debugging or web client troubleshooting), upgrade code (debug upgrade and install code), slow code (AL Profiler), or slow builds (RAD).

## Key points

- Debugging in AL uses the Visual Studio Code debugger with breakpoints, break on errors, break on record changes, SQL debugging, and database lock inspection.
- Conditional breakpoints break only when a condition is true; they support simple types, logical operators, and complex data types from version 26.
- Attach and debug next attaches to a running server without publishing first, using breakOnNext, sessionId and userId settings (2023 release wave 1).
- Snapshot debugging records production cloud sessions using snappoints and lets you inspect them offline in Visual Studio Code.
- Upgrade and install code is debugged by attaching a session and either incrementing the app version or setting the forceUpgrade flag.
- The AL Profiler records execution in instrumentation or sampling mode, configured in launch.json, and shows call stacks, timings, and SQL calls.
- RAD publishing uses delta compilation to cut build and publish times for large AL projects.
- App packages are signed with Azure Key Vault (certificates issued after June 1, 2023) or PFX files using the dotnet sign tool; self-signed certificates are for local testing only.

## Learn pages

- [Analyze AL Performance with the AL Profiler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Use instrumentation or sampling with the AL Profiler to analyze AL execution, SQL activity, call stacks, and performance hot spots.
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
