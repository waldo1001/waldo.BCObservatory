---
id: topic/business-central/copilot-and-agent-capabilities/sales-line-suggestion-preview
type: topic
title: Sales line suggestion (preview)
summary: Sales line suggestions with Copilot (preview) covers how Copilot helps users add lines to sales quotes, orders, and invoices from natural language prompts. It answers questions about finding products, finding documents by reference, matching criteria, confidence scoring, and AI limitations and responsible use.
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:17.006Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 62b41ce2a7e6aeedb9223bc107ec39e79f7fe805fa3349310b324e1db501a625
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
    date: "2026-10-02"
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
    - video/cZCSi6khZFo
  posts: []
  guidelines: []
learn_toc_path:
  - Copilot and agent capabilities
  - Sales line suggestion (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 2
  code: 0
  video: 2
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 46cbb03d7bab8b1ae0759f29ca4add2f789102fae87f9a1212b67391bd79e399
narrative: generated
---

# Sales line suggestion (preview)

> Sales line suggestions with Copilot (preview) covers how Copilot helps users add lines to sales quotes, orders, and invoices from natural language prompts. It answers questions about finding products, finding documents by reference, matching criteria, confidence scoring, and AI limitations and responsible use.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Sales line suggestion (preview) · tier official · system sales · narrative reviewed by Opus

## Overview

Sales line suggestions with Copilot is a preview feature that speeds up creating sales documents. Users describe what they need in natural language or structured input, and Copilot suggests items to add to sales quotes, orders, and invoices by matching keywords across product data.

The section has two pages. "Sales line suggestions with Copilot" explains the capabilities: finding products, finding documents by reference, three matching criteria (permissive, balanced, precise), and confidence scoring. "FAQ for suggest sales lines with Copilot" covers the other side: AI limitations, how the feature is evaluated, responsible use guidance, and how to send feedback.

Start with the main page to understand what the feature does and how matching behaves. Then read the FAQ before rolling it out to users, since it describes limits and the expected use of a preview feature.

## Key points

- Copilot suggests items to add to sales quotes, orders, and invoices from natural language prompts.
- Find products capability searches product data by keyword matching, including across multiple tables, and handles synonyms and typos.
- Find documents by reference locates a reference document for use in the sales document.
- Find products from attachments lets Copilot analyze attachments to identify products.
- Three matching criteria exist: permissive, balanced, and precise.
- Confidence scoring is part of how suggestions are rated.
- The feature is in preview; the FAQ covers AI limitations, evaluation methods, responsible use, and feedback options.

## Learn pages

- [FAQ for suggest sales lines with Copilot](https://learn.microsoft.com/dynamics365/business-central/faq-sales-suggest-sales-lines-with-copilot): This FAQ provides information about the AI technology used in Business Central for sales line suggestions.
- [Sales line suggestions with Copilot](https://learn.microsoft.com/dynamics365/business-central/sales-suggest-sales-lines-with-copilot): Learn how to suggest lines on sales orders with Copilot.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Sales Lines Suggestions with Copilot (2024 release wave 1)](../../../videos/_1LhwG2ZgFw.md) (video): "sales line suggestions; copilot; keyword extraction; context understanding"
- [Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)](../../../videos/cZCSi6khZFo.md) (video): "Sales Line Suggestion with Copilot; Item Search via Attributes and Catalog"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
