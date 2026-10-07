---
id: topic/business-central/business-functionality/design-details/design-details-general-journal-post-line
type: topic
title: "Design details: General journal post line"
summary: "General journal post line design details for Business Central: how Codeunit 12 handles general ledger, VAT, customer and vendor ledger posting. Answers questions about the posting interface, the posting engine, and Apply, Unapply and Reverse operations."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:13.574Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b8949603bbff238d70bfcd0b9dcd531143aa603b6a92adcfc3eda9fac3575b3c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-general-journal-post-line
    title: Design details - General journal post line
    date: "2026-03-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-posting-engine-structure
    title: Design details - Posting engine structure
    date: "2026-03-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-posting-interface-structure
    title: Design details - Posting interface structure
    date: "2026-03-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-general-journal-post-line-overview
    title: General Journal Post Line Overview
    date: "2021-06-15"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/design-details-general-journal-post-line
    - https://learn.microsoft.com/dynamics365/business-central/design-details-posting-engine-structure
    - https://learn.microsoft.com/dynamics365/business-central/design-details-posting-interface-structure
    - https://learn.microsoft.com/dynamics365/business-central/design-details-general-journal-post-line-overview
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
  - "Design details: General journal post line"
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/design-details
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1d40d42db8493b1a3be7024ae5d858c1c18ed08b0b2cb637c35a7737106464cc
narrative: generated
---

# Design details: General journal post line

> General journal post line design details for Business Central: how Codeunit 12 handles general ledger, VAT, customer and vendor ledger posting. Answers questions about the posting interface, the posting engine, and Apply, Unapply and Reverse operations.

Path: [Business functionality](../../business-functionality.md) > [Design details](../design-details.md) > Design details: General journal post line · tier official · system none · narrative reviewed by Opus

## Overview

This section is reference material on the architecture behind general journal posting. It centers on Codeunit 12, which handles all general ledger, VAT, and customer and vendor ledger posting, including Apply, Unapply and Reverse operations.

The pages split the design in two. The posting interface page describes the global procedures that give a generic way to post general journal lines and application processes. The posting engine page describes the standard functions that prepare and insert general ledger and VAT entries and manage register creation. A parent design page frames both as a technical redesign, with a NAV 2013 R2 version reference.

Start with the General Journal Post Line Overview for the big picture and recent refactoring. Then read the interface page to see how posting is called, and the engine page to see how entries are built and inserted.

## Key points

- Codeunit 12 handles all general ledger, VAT, and customer/vendor ledger posting.
- It also covers Apply, Unapply and Reverse operations.
- The posting interface defines global procedures for posting general journal lines through a generic interface.
- The interface includes customer application posting, vendor application posting and unapply posting.
- The posting engine provides standard functions to prepare and insert general ledger and VAT entries.
- The engine manages general ledger register creation, uses a posting buffer, and handles entry initialization and cost object linking.
- The parent design page is a technical redesign reference tied to NAV 2013 R2.
- The overview page also describes recent refactoring improvements.

## Learn pages

- [Design details - General journal post line](https://learn.microsoft.com/dynamics365/business-central/design-details-general-journal-post-line): This article provides insight into the concepts and principles that are used to redesign the general journal posting line feature in Business Central.
- [Design details - Posting engine structure](https://learn.microsoft.com/dynamics365/business-central/design-details-posting-engine-structure): The posting interface uses posting engine functions to prepare and insert general ledger entry and VAT entry records.
- [Design details - Posting interface structure](https://learn.microsoft.com/dynamics365/business-central/design-details-posting-interface-structure): This article provides an overview of the global procedures and design details in the posting interface structure.
- [General Journal Post Line Overview](https://learn.microsoft.com/dynamics365/business-central/design-details-general-journal-post-line-overview): This topic introduces changes to Codeunit 12, Gen. Jnl.-Post Line, and is the only place to insert general ledger, VAT, and customer and vendor ledger entries.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
