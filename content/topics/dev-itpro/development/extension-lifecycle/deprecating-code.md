---
id: topic/dev-itpro/development/extension-lifecycle/deprecating-code
type: topic
title: Deprecating code
summary: "Deprecating code in Business Central AL extensions: how to mark code obsolete with preprocessor directives and Obsolete properties, Microsoft's timeline for removal, and the deprecation of explicit and implicit 'with' statements. It answers questions about obsolete states, CLEAN symbols, warnings AL0604 and AL0606, and how long obsolete code stays."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:15.797Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ee6c71158b4482f081b425c400906f466cbc99876d03e84f691b9c8259362adf
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    title: Best Practices for Deprecation of AL Code
    date: "2024-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecating-with-statements-overview
    title: Deprecating explicit and implicit with statements
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-timeline
    title: Microsoft Timeline for Deprecating Code in Business Central
    date: "2025-05-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecating-with-statements-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-timeline
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/93
learn_toc_path:
  - Development
  - Extension lifecycle
  - Deprecating code
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 9083582aa30905f2ff5abe6e301e6444474a2b6a405b4ba6c11f646d27f97ed1
narrative: generated
---

# Deprecating code

> Deprecating code in Business Central AL extensions: how to mark code obsolete with preprocessor directives and Obsolete properties, Microsoft's timeline for removal, and the deprecation of explicit and implicit 'with' statements. It answers questions about obsolete states, CLEAN symbols, warnings AL0604 and AL0606, and how long obsolete code stays.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Deprecating code · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section covers how code is retired in Business Central. It explains the practices Microsoft uses when obsoleting code in the Base App, so developers can follow the same patterns in their own extensions. It also covers one specific deprecation, the 'with' statement in AL.

Start with the timeline page to learn the rule: at least 12 months pass between marking code obsolete and removing it. Then read the best practices page for the mechanics, which use the ObsoleteState, ObsoleteTag and ObsoleteReason properties together with CLEAN version symbols and preprocessor directives. The 'with' statement page is a worked example of a deprecation, with warnings and fixes for existing code.

## Key points

- Microsoft keeps a minimum of 12 months between marking code obsolete and removing it.
- Obsoleting code uses the ObsoleteState, ObsoleteTag and ObsoleteReason properties, or the Obsolete attribute.
- CLEAN symbols (CLEAN15 to CLEAN18 are named) and preprocessor directives control when obsolete code is included or removed.
- The best practices page describes how Microsoft obsoletes code in the Base App and recommends developers follow similar patterns.
- AppSourceCop is listed among the tools tied to deprecation guidelines.
- Explicit and implicit 'with' statements are deprecated, with warnings AL0604 and AL0606 (2022 release wave 2).
- Fixes for 'with' statements include pragma directives, qualifying references, and the NoImplicitWith flag.

## Learn pages

- [Best Practices for Deprecation of AL Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines): Description of best practices and guidelines for deprecating code in the Base App for Business Central.
- [Deprecating explicit and implicit with statements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecating-with-statements-overview): Rationale and description of why explicit and implicit with statements are deprecated in AL.
- [Microsoft Timeline for Deprecating Code in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-timeline): Description of the timeline for deprecating code in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md) (code change): "Corrected lifecycle guidance for obsoletions, public members, and test transaction models"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
