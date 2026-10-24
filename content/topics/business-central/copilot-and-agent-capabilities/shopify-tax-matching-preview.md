---
id: topic/business-central/copilot-and-agent-capabilities/shopify-tax-matching-preview
type: topic
title: Shopify tax matching (preview)
summary: Shopify Tax Matching (preview) is a generative AI feature that maps free-text Shopify tax descriptions on imported US orders to Business Central tax jurisdictions. The section answers questions about setup per shop, review modes, approval of matches, and the feature's capabilities, limits and responsible AI considerations.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:57:02.098Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7231766487e9a4db69a718a969429a9cd12541426e9b42887f568d15d55714ad
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify-tax-matching-application-card
    title: Application card for Shopify Tax Matching
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-tax-matching
    title: Set up and use Shopify Tax Matching
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/shopify-tax-matching-application-card
    - https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-tax-matching
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/5OZ0g5IgC8Q
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10408
    - change/bcapps/10409
    - change/bcapps/11899
    - change/bcapps/12561
    - change/bcapps/9430
learn_toc_path:
  - Copilot and agent capabilities
  - Shopify tax matching (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 071b888cbfe701f4d2a9cb43121f620d432f1a9a592da3d8977e10abffab772a
narrative: generated
---

# Shopify tax matching (preview)

> Shopify Tax Matching (preview) is a generative AI feature that maps free-text Shopify tax descriptions on imported US orders to Business Central tax jurisdictions. The section answers questions about setup per shop, review modes, approval of matches, and the feature's capabilities, limits and responsible AI considerations.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Shopify tax matching (preview) · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

Shopify Tax Matching helps online organizations in the US when imported Shopify orders contain tax lines that do not match a Business Central tax jurisdiction. The feature suggests a jurisdiction for each unmatched tax line, and users review and approve the matches before sales documents are created.

The section has two pages. "Set up and use Shopify Tax Matching" is the practical guide: it covers per-shop setup, the review mode, and approving matches. "Application card for Shopify Tax Matching" describes what the feature does, its limitations, safety controls and responsible AI considerations.

Start with the setup page if you want to turn the feature on. Read the application card first if you need to judge how the AI behaves and what oversight it expects.

## Key points

- The feature is in preview and targets US-based online organizations.
- It maps free-text Shopify tax descriptions to Business Central tax jurisdictions for unmatched tax lines on imported orders.
- Setup is done per shop. Settings include Tax Matching Agent Enabled, Auto Create Tax Jurisdictions, Auto Create Tax Areas, Tax Area Naming Pattern and Tax Match Review Mode.
- A Shopify Tax Matching Agent permission set exists for the feature.
- Matches are approved before sales documents are created.
- The application card lists validated suggestions, rate-conflict detection, confidence level indicators, and review and approval as safety-related capabilities.
- The feature also assists with tax setup, as described in the application card.

## Learn pages

- [Application card for Shopify Tax Matching](https://learn.microsoft.com/dynamics365/business-central/shopify-tax-matching-application-card): Learn how Shopify Tax Matching uses AI, how Microsoft evaluated the feature, its limitations, and how to use it responsibly.
- [Set up and use Shopify Tax Matching](https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-tax-matching): Learn how to set up Shopify Tax Matching, review suggested tax jurisdiction matches, and approve tax setup for imported orders.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10408 Shopify Copilot Tax Matching Agent: matching engine and data model (stack 2/3)](../../../changes/bcapps/10408.md) (code change): "Shopify Copilot Tax Matching Agent adds a headless matching engine that uses AI"
- [#10409 Shopify Copilot Tax Matching Agent: human-in-the-loop review + tests (stack 3/3)](../../../changes/bcapps/10409.md) (code change): "Shopify Copilot Tax Matching Agent adds a human-in-the-loop review"
- [#11899 [Shopify] Tax matching fixes for country, Canadian HST, and zero-rate lines](../../../changes/bcapps/11899.md) (code change): "Shopify Tax Matching Agent now runs only for US and Canadian"
- [#12561 [Shopify] Preserve tax match after rate conflict](../../../changes/bcapps/12561.md) (code change): "Shopify order processing now preserves tax mappings and holds document creation when a tax rate conflict occurs"
- [#9430 Fix untrappable JSON error in E-Document ADI import (Bug 640122)](../../../changes/bcapps/9430.md) (code change): "E-Document matching assistance import now handles malformed Azure Document Intelligence responses"
- [What's new: Shopify Tax Matching (preview) (2026 release wave 2)](../../../videos/5OZ0g5IgC8Q.md) (video): "Shopify Tax Matching AI Capability; Tax Area Code Auto-Population"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
