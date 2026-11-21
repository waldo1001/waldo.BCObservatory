---
id: topic/business-central/copilot-and-agent-capabilities/suggest-item-substitutions-preview
type: topic
title: Suggest item substitutions (preview)
summary: Suggest item substitutions (preview) covers the Copilot feature in Business Central that suggested substitute items, and its FAQ stating the feature is retired. It answers questions about how suggestions worked, which data they used, and what to do now.
tier: official
language: en
system: inventory
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-21T01:00:52.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ee2ad9542905a7c9860b0ae2cd28ea2bd738150fa59b5cab7f1a5d8d33e9d441
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faq-suggest-item-substitutions-with-copilot
    title: FAQ for suggest item substitutions with Copilot
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/suggest-item-substitutions-copilot
    title: Suggest substitute items with Copilot
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/faq-suggest-item-substitutions-with-copilot
    - https://learn.microsoft.com/dynamics365/business-central/suggest-item-substitutions-copilot
  objects:
    - object/page/30
    - object/page/31
    - object/page/5716
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/bCIcq1zESKk
  posts: []
  guidelines: []
  changes:
    - change/bcapps/13506
    - change/bcapps/14007
learn_toc_path:
  - Copilot and agent capabilities
  - Suggest item substitutions (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 2
  code: 3
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 30
  - 31
  - 5716
member_hash: 8856a82342e458e25801ee163784ecc52082111e6ad5eecfdeeb315501d09a67
narrative: generated
---

# Suggest item substitutions (preview)

> Suggest item substitutions (preview) covers the Copilot feature in Business Central that suggested substitute items, and its FAQ stating the feature is retired. It answers questions about how suggestions worked, which data they used, and what to do now.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Suggest item substitutions (preview) · tier official · system inventory · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes a Copilot capability that helped users find and assign substitute items faster. It looked for similar items in product information stored in the Item, Item Reference, and Item Attributes tables, and it scored the suggestions it returned. Users could adjust the prompt to refine the results.

The section has two pages: one that explains how to suggest substitute items with Copilot, and an FAQ. The FAQ says the feature is retired and no longer available. It explains the approach the feature used: searching item descriptions with embeddings, extracting keywords, and identifying synonyms.

Start with the FAQ to confirm the current status. If you need substitutions now, use the manual item substitution setup that the FAQ points to. Read the other page for background on how the feature behaved.

## Key points

- The Copilot feature for suggesting item substitutions is retired and no longer available.
- The FAQ directs users to manual substitution setup instead.
- Copilot looked for similar items in product information in the Item, Item Reference, and Item Attributes tables.
- Matching used item description search with embeddings, keyword extraction, and synonym identification.
- Suggestions were scored, and users could adjust the prompt to change results.
- The feature was linked to the Create product information capability.
- A feedback mechanism was part of the AI-powered suggestions.

## Learn pages

- [FAQ for suggest item substitutions with Copilot](https://learn.microsoft.com/dynamics365/business-central/faq-suggest-item-substitutions-with-copilot): This FAQ provides information about an AI feature in Business Central.
  - In the observatory: [Page 5716 "Item Substitution Entry"](../../../objects/page/5716.md)
- [Suggest substitute items with Copilot](https://learn.microsoft.com/dynamics365/business-central/suggest-item-substitutions-copilot): Assign substitute items faster with assistance from Copilot.
  - In the observatory: [Table 27 "Item"](../../../objects/table/27.md), [Table 5777 "Item Reference"](../../../objects/table/5777.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#13506 Upgrade Marketing Text, Sales Lines Suggestions, and Item Substitution to GPT-5.6](../../../changes/bcapps/13506.md) (code change): "Item Substitution uses GPT-5.6 Ceres latest model."
- [#14007 Obsolete Create Product Information with Copilot](../../../changes/bcapps/14007.md) (code change): "The Item Substitution Entry page shows a notification pointing users to modern search"
- [What's New: Item Substitution with Copilot (2024 release wave 2)](../../../videos/bCIcq1zESKk.md) (video): "Item substitution with Copilot; Suggest with Copilot action"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 30 "Item Card"](../../../objects/page/30.md) · on [Table 27 "Item"](../../../objects/table/27.md)
- [Page 31 "Item List"](../../../objects/page/31.md) · captioned "Items" · on [Table 27 "Item"](../../../objects/table/27.md)
- [Page 5716 "Item Substitution Entry"](../../../objects/page/5716.md) · on [Table 5715 "Item Substitution"](../../../objects/table/5715.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
