---
id: topic/dev-itpro/development/extension-lifecycle/moving-tables-and-fields-between-extensi
type: topic
title: Moving tables and fields between extensions (on-premises)
summary: Moving tables and fields between Business Central extensions on-premises, using the MovedTo and MovedFrom properties and staged moves. It answers questions about how ownership transfers, in what order to publish extensions, and how obsolete states and dependencies are handled.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 042a306034fdeff7294f023a46706465df02e8eba04687b94b4cbbe0d168d808
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-scenarios-moving-table-fields
    title: Development process for moving tables and fields between extensions
    date: "2025-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-move-table-fields-between-extensions
    title: Moving tables and fields between extensions
    date: "2025-03-31"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-scenarios-moving-table-fields
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-move-table-fields-between-extensions
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle
  localizations: []
  videos:
    - video/vQU-oYfDn88
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Extension lifecycle
  - Moving tables and fields between extensions (on-premises)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: e781925b2d2638cc9a288286f1fa2795dd0863ec87a16728691c77f30ba7b959
narrative: generated
---

# Moving tables and fields between extensions (on-premises)

> Moving tables and fields between Business Central extensions on-premises, using the MovedTo and MovedFrom properties and staged moves. It answers questions about how ownership transfers, in what order to publish extensions, and how obsolete states and dependencies are handled.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Moving tables and fields between extensions (on-premises) · tier official · system development · **unreviewed** (machine-generated narrative)

## Overview

This section describes a controlled process for transferring ownership of tables and fields from one extension to another. It relies on the MovedTo and MovedFrom properties and the ObsoleteState property. Staged moves handle breaking changes and data migration, starting from 2025 release wave 1.

The two pages fit together as concept and procedure. "Moving tables and fields between extensions" explains the mechanism, including the PropagateDependency setting and synthetic relations. "Development process for moving tables and fields between extensions" walks through three scenarios with detailed publishing orders: move down to a dependency, move up to a dependent, and lateral move to non-dependent extensions.

Start with the concept page to understand the properties and staged approach. Then go to the development process page for the scenario that matches your extension layout.

## Key points

- Ownership of tables and fields is transferred with the MovedTo and MovedFrom properties.
- The ObsoleteState property is part of the process, with PendingMove and Moved states.
- Three scenarios are covered: move down to a dependency, move up to a dependent, and lateral move to non-dependent extensions.
- Each scenario has a defined publishing order for the extensions involved.
- Staged moves handle breaking changes and data migration, starting from 2025 release wave 1.
- The PropagateDependency setting (propagateDependencies) and synthetic relations are part of the process.
- The section applies to on-premises deployments.

## Learn pages

- [Development process for moving tables and fields between extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-scenarios-moving-table-fields): A step-by-step guide on how to implement different scenarios for moving tables or fields
- [Moving tables and fields between extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-move-table-fields-between-extensions): Learn how to move tables and fields between extensions in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Moving Tables and Fields Between AppSource Extensions (2025 release wave 1)](../../../../videos/vQU-oYfDn88.md) (video): "Move Tables and Fields Between Extensions; Obsolation Property; MoveTo and MoveFrom Properties"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
