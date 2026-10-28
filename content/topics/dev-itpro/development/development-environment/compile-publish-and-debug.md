---
id: topic/dev-itpro/development/development-environment/compile-publish-and-debug
type: topic
title: Compile, publish, and debug
summary: Compiling, publishing, debugging and profiling AL extensions for Business Central in Visual Studio Code. It answers questions on breakpoints, attach and snapshot debugging, the AL Profiler, compilation scope, package signing, Entra authentication for on-premises, and RAD publishing.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:03.556Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a536e7dbe447c8901426e64fab63c678fc6cfd12f42b70286eb57fb934054cf0
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
    title: Attach and Debug Next in Business Central
    date: "2026-10-15"
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
    date: "2026-09-25"
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

> Compiling, publishing, debugging and profiling AL extensions for Business Central in Visual Studio Code. It answers questions on breakpoints, attach and snapshot debugging, the AL Profiler, compilation scope, package signing, Entra authentication for on-premises, and RAD publishing.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Compile, publish, and debug · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers the developer inner loop for AL extensions: building and publishing, finding errors, and measuring performance. Debugging pages cover the basics in Visual Studio Code (breakpoints, conditional breakpoints, break on errors and record changes), attaching to existing or next sessions, debugging install and upgrade codeunits, and troubleshooting straight from the web client.

More advanced pages cover snapshot debugging, which records execution on a server for offline inspection, including by an AI agent through the MCP server with GitHub Copilot. The AL Profiler records instrumentation or sampling data to find performance hot spots. Rapid Application Development (RAD) publishing uses delta compilation to shorten build and publish times in large projects.

Other pages cover build and deployment settings: compilation scope (OnPrem or Cloud target levels), Microsoft Entra authentication for on-premises and container servers, and signing app package files. Start with "Debug AL Code in Visual Studio Code" for debugging, or "Compilation scope overview" for build target questions.

## Key points

- Debug AL in Visual Studio Code with breakpoints, conditional breakpoints, break on errors, break on record changes and SQL behavior inspection; conditional breakpoints support simple and complex data types with comparison and logical operators (page tagged version 26).
- Attach to an existing or next session (breakOnNext) for web client, web service, background or agent sessions, targeting by sessionId or userId, in sandbox and on-premises.
- Install and upgrade codeunits can be debugged using attach debugging and publishing without building.
- Snapshot debugging records AL execution on the server at snappoints so you can inspect it offline in Visual Studio Code; an AI agent can also do this through the MCP server.
- The AL Profiler offers instrumentation and sampling modes configured in launch.json, with call stack views, timings, SQL call activity and CodeLens timings.
- Compilation scope is set by ExtensionAllowedTargetLevel at server level and the target property in the manifest (OnPrem or Cloud), controlling accessible APIs and .NET types.
- App packages can be signed with Azure Key Vault (certificates issued after June 1, 2023) or PFX files using the dotnet sign tool; self-signed certificates are for local testing.
- RAD publishing uses delta compilation, a .rad file and rad.json to cut build and publish times for large projects.

## Learn pages

- [Analyze AL Performance with the AL Profiler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Use instrumentation or sampling with the AL Profiler to analyze AL execution, SQL activity, call stacks, and performance hot spots.
- [Attach and Debug Next in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next): Attach the AL debugger to an existing or next session in Business Central. Configure web client, web service, background, and agent session debugging.
- [Compilation scope overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-compilation-scope-overview): This article explains the configuration and compilation scope for publishing the extension.
- [Debug AL Code in Visual Studio Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging): Debug AL code in Visual Studio Code by using breakpoints, attach sessions, record-write breaks, SQL statistics, and debugger settings.
- [Debug Upgrade and Install Code in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code): Debug AL install and upgrade codeunits by attaching to Business Central before you publish an extension from Visual Studio Code.
- [Set Conditional Breakpoints in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging-conditional-breakpoints): Set conditional breakpoints in Visual Studio Code to pause AL code only when variables, fields, or supported expressions meet a condition.
- [Sign an app package file](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sign-extension): This article explains how to sign an AL app package file with a pfx file or with Azure Key Vault.
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging): Overview of how snapshot debugging allows recording running AL code for Business Central.
  - In the observatory: [Codeunit 80 "Sales-Post"](../../../../objects/codeunit/80.md)
- [Troubleshoot in Visual Studio Code directly from the web client](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshoot-vscode-webclient): Opening Visual Studio Code directly from the Business Central web client to perform troubleshooting.
  - In the observatory: [Page 2500 "Extension Management"](../../../../objects/page/2500.md), [Page 9631 "Page Inspection"](../../../../objects/page/9631.md)
- [Troubleshooting MCP Server for AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-mcp-server): Learn how to use the Troubleshooting MCP Server to analyze runtime state during debugging sessions with AI-powered insights in AL.
- [Use Microsoft Entra authentication for Business Central on-premises installations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-aad-auth-onprem): Using Microsoft Entra ID as authentication on on-premises installations and containers for Business Central for debugging and other purposes
- [Work with Rapid Application Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rad-publishing): Describes what Rapid Application Development is and how you publish using RAD.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12320 Fix 409 conflict in APIV2 Company Info E2E description test](../../../../changes/bcapps/12320.md) (code change): "Fixed 409 conflict errors in APIV2 Company Info E2E tests"
- [What's New: Business Central Developer Tools (2023 release wave 2)](../../../../videos/TY82NR2hGEg.md) (video): "AL language extension pre-release versions; AL language extension for Linux"
- [What's New: Developer Tools (2024 release wave 1)](../../../../videos/tzeO0mc8RJo.md) (video): "AL tool; pipelines; object extensions; debugger upgrade"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
