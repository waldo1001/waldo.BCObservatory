---
id: topic/dev-itpro/development/programming-in-the-al-language/using-net-on-premises-only
type: topic
title: Using .NET (on-premises only)
summary: ".NET interoperability from AL in on-premises Business Central: declaring dotnet packages and types, using control add-ins, serializing types, subscribing to events, and migrating from .NET Framework to .NET Standard. It answers how-to and compatibility questions for on-premises deployments only."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:03.623Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c047a79a86e18ff5a1caa287b41205f700dc33bbb035ef66a62270ec8b1f4aeb
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-controladdins
    title: .NET control add-ins
    date: "2025-01-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-started-call-dotnet-from-al
    title: Get started with Microsoft .NET Interoperability from AL
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-from-dotnet-framework-to-dotnet-standard
    title: Migrating from .NET Framework to .NET Standard
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-serializing-dotnetframework-types
    title: Serializing .NET framework types
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-subscribe-to-events
    title: Subscribing to Events in a .NET Framework Type
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-controladdins
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-started-call-dotnet-from-al
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-from-dotnet-framework-to-dotnet-standard
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-serializing-dotnetframework-types
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-subscribe-to-events
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/12123
  guidelines: []
  changes:
    - change/bcapps/11013
learn_toc_path:
  - Development
  - Programming in the AL language
  - Using .NET (on-premises only)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 16dba0894e31dd8da50949e6bdb1b79cc36fb092cdfcd340100f81445702d57a
narrative: generated
---

# Using .NET (on-premises only)

> .NET interoperability from AL in on-premises Business Central: declaring dotnet packages and types, using control add-ins, serializing types, subscribing to events, and migrating from .NET Framework to .NET Standard. It answers how-to and compatibility questions for on-premises deployments only.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Using .NET (on-premises only) · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section covers how AL code works with .NET in on-premises Business Central. It applies only when the deployment target is on-premises. The pages explain how to declare .NET assemblies and types and then use them from AL.

Start with "Get started with Microsoft .NET Interoperability from AL", which covers dotnet package declarations, assembly references, type aliases and assembly probing paths. From there, the other pages handle specific tasks: using .NET and JavaScript control add-ins, making .NET types serializable between client and server, and handling events from .NET types with DotNet variables.

The migration page is for anyone with existing .NET add-ins. It describes the move from .NET Framework to .NET Standard, the compatibility changes in v21 and v22, and the analysis tools that help check compatibility.

## Key points

- All .NET interoperability from AL requires an on-premises deployment target.
- Types are declared in a dotnet package with assembly references and optional type aliases, then used in AL code; assembly probing paths control where assemblies are found.
- Control add-ins are declared with assembly, type and class information, using attributes such as ControlAddInExport and ApplicationVisible.
- Serializing .NET types between client and server uses SerializableAttribute or the ISerializable interface; NonSerializedAttribute excludes members.
- Events from .NET types are handled with DotNet variables that use the WithEvents attribute and trigger syntax.
- The migration guide covers .NET Standard support, a .NET Framework compatibility mode, and the .NET 6.0 runtime, with compatibility changes in v21 and v22.
- The .NET Portability Analyzer and the ApiPort tool help check add-ins for compatibility during migration.

## Learn pages

- [.NET control add-ins](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-controladdins): Description of the process of declaring the usage of a .NET or JavaScript add-ins in AL.
- [Get started with Microsoft .NET Interoperability from AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-started-call-dotnet-from-al): Description of the process of referencing and using .NET types
- [Migrating from .NET Framework to .NET Standard](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrate-from-dotnet-framework-to-dotnet-standard): Describes of the process of migrating DLLs used from AL from .NET Framework to .NET Standard.
- [Serializing .NET framework types](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-serializing-dotnetframework-types): How to serialize .NET framework types
- [Subscribing to Events in a .NET Framework Type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dotnet-subscribe-to-events): How to subscribe to event in a .NET Framework Type

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11013 Remove 43 unused DotNet alias declarations](../../../../changes/bcapps/11013.md) (code change): "Removed 43 unused DotNet alias declarations from the DotNet Aliases app"
- [Dynamics 365 Business Central on-prem: be careful when referencing .NET assemblies across versions.](../../../../posts/demiliani-com/12123.md) (community post): "ensure assemblies are compiled for .NET Standard if targeting version 21 or later"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
