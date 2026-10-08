---
id: topic/dev-itpro/development/development-environment/work-in-sandboxes
type: topic
title: Work in sandboxes
summary: "Sandbox environments for Business Central AL development: how online and container sandboxes differ, how to run a container-based environment with Docker and BCContainerHelper, and how to test extensions under different user plans and entitlements."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:18.791Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3a0d4efec8e24232bf748943a5ce8f797686c2018ee219e196db0aac053bc1c3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-running-container-development
    title: Running a container-based development environment
    date: "2023-10-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sandbox-overview
    title: Sandbox environments for Dynamics 365 Business Central development
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-sandbox-entitlements
    title: Working with sandboxes and entitlements
    date: "2024-01-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-running-container-development
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sandbox-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-sandbox-entitlements
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/12613
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5842643051210707156--c6fa25205b
  guidelines: []
learn_toc_path:
  - Development
  - Development environment
  - Work in sandboxes
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 3e24d310bec806f54df5e21b2fc846769d8a24f8f718551344701ccf8111fec0
narrative: generated
---

# Work in sandboxes

> Sandbox environments for Business Central AL development: how online and container sandboxes differ, how to run a container-based environment with Docker and BCContainerHelper, and how to test extensions under different user plans and entitlements.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Work in sandboxes · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers the sandbox options developers use to build and test Business Central extensions. It compares online sandboxes, managed by Microsoft, with container sandboxes hosted on an Azure VM or on-premises, and describes what each allows, such as production data upload, Designer, debugging, database access and tools like Visual Studio Code and C/SIDE.

For a local setup, one page walks through running a container-based development environment with Docker, Windows containers and the BCContainerHelper PowerShell module. It covers creating and managing sandbox containers and installing apps. It references 2026 release wave 1 and version 28.0.

A third page explains how to set up a development sandbox with different user plans and license types. This lets you check that an extension works across subscription tiers. Start with the comparison page to choose a sandbox type, then use the container or entitlement page as needed.

## Key points

- Two sandbox types are compared: online (managed by Microsoft) and container (Azure VM or on-premises).
- The comparison covers deployment options, production data upload, Designer, debugging and database access.
- Container sandboxes are set up with Docker, Windows containers and the BCContainerHelper PowerShell module.
- The container guide covers creating and managing sandbox containers and installing apps, and references 2026 release wave 1 and version 28.0.
- Entitlement testing uses user groups, permission sets, subscription plans and license assignment.
- Test users can be set up with different plans to verify extension behavior across subscription tiers.

## Learn pages

- [Running a container-based development environment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-running-container-development): Overview of how to run a container-based development.
- [Sandbox environments for Dynamics 365 Business Central development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sandbox-overview): Overview of the differences between the offered sandbox environments for Dynamics 365 Business Central.
- [Working with sandboxes and entitlements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-work-sandbox-entitlements): Learn about development sandboxes and entitlements.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central: accessing Early Access Preview in online sandboxes.](../../../../posts/demiliani-com/12613.md) (community post): "Partners with sandbox licenses can create early access preview environments"
- [Public Preview for Business Central 29.0 (2026 Release Wave 2) Is Here](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-5842643051210707156--c6fa25205b.md) (community post): "Preview environments let you test extensions, integrations, and customizations against version 29.0"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
