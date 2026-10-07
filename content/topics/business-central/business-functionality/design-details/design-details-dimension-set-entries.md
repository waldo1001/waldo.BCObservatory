---
id: topic/business-central/business-functionality/design-details/design-details-dimension-set-entries
type: topic
title: "Design details: Dimension set entries"
summary: "Dimension set entries in Business Central: how unique combinations of dimension values are stored and referenced by a dimension set ID. It answers questions about the table structure, which tables carry the Dimension Set ID field, and how the tree search finds or assigns a set."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:11.038Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d051c485eeb3d2850540e597ce233ee07d091299dfeab8bc9acdce34574097a7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-searching-for-dimension-combinations
    title: Design details - Searching for dimension combinations
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-table-structure
    title: Design details - Table structure
    date: "2026-03-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-dimension-set-entries-overview
    title: Dimension Set Entries Overview
    date: "2021-06-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/design-details-searching-for-dimension-combinations
    - https://learn.microsoft.com/dynamics365/business-central/design-details-table-structure
    - https://learn.microsoft.com/dynamics365/business-central/design-details-dimension-set-entries-overview
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/design-details
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Design details
  - "Design details: Dimension set entries"
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/design-details
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a3cf5820af6b791bff524afbe22245ae89a6ebadf241ee86b1bf2f0913313238
narrative: generated
---

# Design details: Dimension set entries

> Dimension set entries in Business Central: how unique combinations of dimension values are stored and referenced by a dimension set ID. It answers questions about the table structure, which tables carry the Dimension Set ID field, and how the tree search finds or assigns a set.

Path: [Business functionality](../../business-functionality.md) > [Design details](../design-details.md) > Design details: Dimension set entries · tier official · system none · narrative reviewed by Opus

## Overview

Dimension set entries are the way Business Central stores dimension values. Each unique combination of dimension values is saved once as a dimension set and referenced by a dimension set ID. The overview page explains this idea and says it helps performance.

The two other pages go into the design. The table structure page describes the Dimension Set Entry and Dimension Set Tree Node tables. It also lists the many transaction, ledger and document tables that hold Dimension Set ID field 480, as editable or non-editable. The searching page explains how a tree structure in tables 480 and 481 is used to check whether a dimension set exists. It also covers how the set ID is assigned or retrieved during editing.

Start with the overview for the concept. Then read the table structure page to see where the ID is stored. Finish with the searching page for the lookup logic.

## Key points

- A dimension set stores one unique combination of dimension values and is referenced by a dimension set ID.
- Storing sets once is described as a performance improvement.
- Core tables are Dimension Set Entry and Dimension Set Tree Node.
- Dimension Set ID field 480 appears in many transaction, ledger and document tables, either editable or non-editable.
- The table structure page also mentions read-only tables and buffer tables.
- Searching uses a tree structure in tables 480 and 481 to find out whether a dimension set already exists.
- The search walks tree nodes recursively, using the dimension value ID, to assign or retrieve a set ID during editing.

## Learn pages

- [Design details - Searching for dimension combinations](https://learn.microsoft.com/dynamics365/business-central/design-details-searching-for-dimension-combinations): When you close a page after you edit a set of dimensions, Business Central evaluates whether the edited set of dimensions exists. If the set does not exist, a new set is created and the dimension combination ID is returned.
- [Design details - Table structure](https://learn.microsoft.com/dynamics365/business-central/design-details-table-structure): To understand how the dimension entry storing and posting is redesigned, it's important to understand the table structure.
- [Dimension Set Entries Overview](https://learn.microsoft.com/dynamics365/business-central/design-details-dimension-set-entries-overview): This article gives you an overview of how dimension set entries are stored as dimension set entries and how they are posted.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
