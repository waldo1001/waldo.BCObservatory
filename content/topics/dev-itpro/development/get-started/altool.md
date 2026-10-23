---
id: topic/dev-itpro/development/get-started/altool
type: topic
title: ALTool
summary: ALTool is the command-line tool for compiling, packaging, and testing AL extensions for Business Central. This section answers questions about the AL Development Tools package, what ALTool can do, and how to use it in CI/CD pipelines.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-23T01:12:47.131Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c762b952aa1fc7a656745af0c228091478b5515ec91e825184cea1517ee3e6d4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool-package
    title: AL Development Tools package
    date: "2026-01-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool
    title: ALTool Command-Line Reference for AL Development
    date: "2026-09-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool-package
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/get-started
  localizations: []
  videos: []
  posts:
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-08-enhance-your-al-development-with-the-al-mcp-server--9b231a3692
  guidelines: []
  changes:
    - change/al-go/2304
    - change/al-go/2327
    - change/al-go/2367
    - change/al-go/2382
learn_toc_path:
  - Development
  - Get started
  - ALTool
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/get-started
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 280951ab58ff0d16566c5b5922b1480da263f6efcf002cab84ac99778cd40934
narrative: generated
---

# ALTool

> ALTool is the command-line tool for compiling, packaging, and testing AL extensions for Business Central. This section answers questions about the AL Development Tools package, what ALTool can do, and how to use it in CI/CD pipelines.

Path: [Development](../../development.md) > [Get started](../get-started.md) > ALTool · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

ALTool is a cross-platform command-line utility for working with AL extensions outside the editor. It is delivered through the AL Development Tools package, which is also available as a NuGet package and supports build automation and CI/CD scenarios.

The section has two pages. The package page explains what is delivered: utilities for compiling, packaging, and managing AL extensions, including manifest retrieval. The command-line reference describes the ALTool commands in more detail, covering compilation, packaging, workspace commands, test execution, static call graph analysis, and AI agent integration through MCP servers.

Start with the package page to see how to get the tools, then use the command-line reference to find the command you need. The reference lists 2026 release wave 2.

## Key points

- ALTool compiles, packages, and tests AL extensions from the command line.
- It ships in the AL Development Tools package, which is cross-platform and available as a NuGet package.
- It supports CI/CD integration for automated builds.
- The package can retrieve app manifests.
- Workspace commands help manage AL workspaces.
- Test execution is available through ALTool.
- Static call graph analysis is supported.
- AI agent integration is available via MCP servers (2026 release wave 2).

## Learn pages

- [AL Development Tools package](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool-package): Streamline AL extension development with the AL Development Tools package. Access powerful command-line utilities for compiling, packaging, and automating workflows.
- [ALTool Command-Line Reference for AL Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool): Simplify AL extension development with ALTool. Validate code, package extensions, and integrate into CI/CD pipelines for seamless deployment.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#2304 Support framework-dependent (flat) AL Language extension layout](../../../../changes/al-go/2304.md) (code change): "Get-ALTool probes nested bin/win32 or bin/linux paths first"
- [#2327 Add doNotPerformUpgrade setting and enhance upgrade warning messages](../../../../changes/al-go/2327.md) (code change): "AL-Go pipeline now supports skipping the upgrade phase"
- [#2367 Enhance NuGet feed selection to support pre-release packages](../../../../changes/al-go/2367.md) (code change): "AL-Go now supports pre-release NuGet packages by adding"
- [#2382 Fix dependency artifact pattern for branch names with glob-special characters](../../../../changes/al-go/2382.md) (code change): "Fixed a bug where dependency artifact downloads failed silently"
- [Enhance Your AL Development with the AL MCP Server](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-08-enhance-your-al-development-with-the-al-mcp-server--9b231a3692.md) (community post): "The AL MCP server ships with the AL development tools and gives AI agents tools"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
