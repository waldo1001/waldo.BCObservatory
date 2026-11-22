---
id: topic/business-central/copilot-and-agent-capabilities/sales-line-suggestion-preview
type: topic
title: Sales line suggestion (preview)
summary: Sales line suggestions with Copilot (preview) covers how Copilot helps create lines on sales quotes, orders, and invoices from natural language or structured input. It answers questions about finding products, finding documents by reference, matching criteria, confidence scores, and the AI limitations and responsible use of the feature.
tier: official
language: en
system: sales
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-22T01:00:28.230Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 329964c0e5251b45d8e84bbc7440971942a103537154b88d3c3b6e3d0938356c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faq-sales-suggest-sales-lines-with-copilot
    title: FAQ for suggest sales lines with Copilot
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sales-suggest-sales-lines-with-copilot
    title: Sales line suggestions with Copilot
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/faq-sales-suggest-sales-lines-with-copilot
    - https://learn.microsoft.com/dynamics365/business-central/sales-suggest-sales-lines-with-copilot
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/_1LhwG2ZgFw
    - video/bCIcq1zESKk
    - video/cZCSi6khZFo
    - video/qmGxeq5FJis
  posts:
    - post/yzhums-com/68672
  guidelines: []
  changes:
    - change/bcapps/13506
    - change/bcapps/13964
    - change/bcapps/14143
    - change/bcapps/14198
    - change/bcapps/14307
learn_toc_path:
  - Copilot and agent capabilities
  - Sales line suggestion (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 2
  code: 0
  video: 4
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 46cbb03d7bab8b1ae0759f29ca4add2f789102fae87f9a1212b67391bd79e399
narrative: generated
---

# Sales line suggestion (preview)

> Sales line suggestions with Copilot (preview) covers how Copilot helps create lines on sales quotes, orders, and invoices from natural language or structured input. It answers questions about finding products, finding documents by reference, matching criteria, confidence scores, and the AI limitations and responsible use of the feature.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Sales line suggestion (preview) · tier official · system sales · narrative **unreviewed** (model text not yet checked)

## Overview

Sales line suggestions with Copilot is a preview feature that speeds up creating sales documents. Users describe what they need in natural language or provide structured input, and Copilot suggests items to add to sales quotes, orders, and invoices.

The section has two pages. The main page, "Sales line suggestions with Copilot", explains what the feature does: finding products, finding documents by reference, matching criteria (permissive, balanced, precise), confidence scores, and prompt guides. The FAQ page covers how the capabilities work, including finding products from attachments, plus AI limitations, how the feature is evaluated, responsible use guidance, and feedback options.

Start with the main page to learn the capabilities and how to phrase prompts. Then read the FAQ to understand limits and how to use suggestions responsibly.

## Key points

- The feature is in preview and suggests lines for sales quotes, orders, and invoices.
- Input can be a natural language prompt or structured input.
- Find products searches for items based on the user's description.
- Find document by reference locates reference documents.
- Find products from attachments analyzes attachments to identify products.
- Matching criteria can be set to permissive, balanced, or precise.
- Confidence scores and prompt guides help users judge and improve suggestions.
- Search covers multiple tables and handles synonyms and typos.

## Learn pages

- [FAQ for suggest sales lines with Copilot](https://learn.microsoft.com/dynamics365/business-central/faq-sales-suggest-sales-lines-with-copilot): This FAQ provides information about the AI technology used in Business Central for sales line suggestions.
- [Sales line suggestions with Copilot](https://learn.microsoft.com/dynamics365/business-central/sales-suggest-sales-lines-with-copilot): Learn how to suggest lines on sales orders with Copilot.
  - In the observatory: [Table 27 "Item"](../../../objects/table/27.md), [Table 5777 "Item Reference"](../../../objects/table/5777.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#13506 Upgrade Marketing Text, Sales Lines Suggestions, and Item Substitution to GPT-5.6](../../../changes/bcapps/13506.md) (code change): "Sales Lines Suggestions AI calls updated to GPT-5.6 Ceres latest."
- [#13964 Adjust relevance score for new embedding model](../../../changes/bcapps/13964.md) (code change): "Relevance score thresholds for item search have been adjusted to work with a new embedding model"
- [#14143 Enable internal SLS hooks for harms evaluations](../../../changes/bcapps/14143.md) (code change): "Internal hooks are added to the Sales Lines Suggestions feature to support harms evaluations"
- [#14198 [SLS] Update accuracy prompts for GPT-5.6 Ceres migration](../../../changes/bcapps/14198.md) (code change): "Sales Lines Suggestions prompts and accuracy evaluations are updated for GPT-5.6"
- [#14307 [SLS][29.x] Backport production app updates for GPT-5.6 Ceres](../../../changes/bcapps/14307.md) (code change): "Sales Lines Suggestions production changes from main to 29.x"
- [Dynamics 365 Business Central Blog Series: Handle CSV (comma-separated values) files](../../../posts/yzhums-com/68672.md) (community post): "Copilot can suggest sales lines from a CSV file"
- [What's New: Sales Lines Suggestions with Copilot (2024 release wave 1)](../../../videos/_1LhwG2ZgFw.md) (video): "sales line suggestions; copilot; keyword extraction; context understanding"
- [What's New: Item Substitution with Copilot (2024 release wave 2)](../../../videos/bCIcq1zESKk.md) (video): "Sales line suggestion with Copilot; Data search enhancement"
- [Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)](../../../videos/cZCSi6khZFo.md) (video): "Sales Lines Suggestions with Copilot; natural language processing"
- [Create Sales Lines with Copilot in Dynamics 365 Business Central (2024)](../../../videos/qmGxeq5FJis.md) (video): "Create Sales Lines with Copilot in Dynamics 365 Business Central"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
