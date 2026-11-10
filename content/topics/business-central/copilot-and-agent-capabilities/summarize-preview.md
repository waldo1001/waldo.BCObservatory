---
id: topic/business-central/copilot-and-agent-capabilities/summarize-preview
type: topic
title: Summarize (preview)
summary: Summarize (preview) covers Copilot's summarize capability in Business Central, which turns records such as customers, items and sales orders into bullet-point insights in the FactBox pane. It answers questions about using and controlling summaries, responsible AI details, and troubleshooting Expense Agent issues.
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 81814a65515ff4fc273356ac7f6db73cceae344e1897845cb73530f4c536464a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faqs-summarize
    title: Responsible AI FAQ for summarize (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/summarize-with-copilot
    title: Summarize a record with Copilot
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-troubleshoot
    title: Troubleshoot Expense Agent Issues
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/faqs-summarize
    - https://learn.microsoft.com/dynamics365/business-central/summarize-with-copilot
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-troubleshoot
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/fgWFOMPJd6U
    - video/HjsOuhThGKk
    - video/q0TxpWfm9rc
  posts:
    - post/yzhums-com/67310
    - post/yzhums-com/71758
  guidelines: []
learn_toc_path:
  - Copilot and agent capabilities
  - Summarize (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 3
  code: 0
  video: 3
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 71c4bcef57d0ff9d96d575df3ae2829a8ba335040fd85c07951ccd6b0cd79108
narrative: generated
---

# Summarize (preview)

> Summarize (preview) covers Copilot's summarize capability in Business Central, which turns records such as customers, items and sales orders into bullet-point insights in the FactBox pane. It answers questions about using and controlling summaries, responsible AI details, and troubleshooting Expense Agent issues.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Summarize (preview) · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

Summarize lets Copilot produce a short, bullet-point summary of a record. It draws on fields, FactBoxes and related pages, and only on data the user has permission to access. The summary appears in a Summary part in the FactBox pane and highlights key insights and urgent information.

The section has three pages. "Summarize a record with Copilot" is the place to start for how to use the feature. "Responsible AI FAQ for summarize (preview)" explains how the feature works, how data permissions are respected, and how harmful content is filtered. A separate page, "Troubleshoot Expense Agent Issues", covers problems with the Expense Agent, such as sign-in, receipt uploads, policy violations, travel requests and validation failures.

## Key points

- Copilot summarizes records like customers, items and sales orders into bullet-point insights.
- Summaries appear in a Summary part in the FactBox pane and can be expanded.
- A Show more button gives additional insights.
- Users can regenerate a summary or copy it.
- Summaries only use data the user has permission to access.
- The responsible AI FAQ notes hyperlinked references, user feedback on summaries, and harmful content filtering.
- The summarize feature is marked as preview.
- The troubleshooting page covers Expense Agent issues: receipt upload and AI detection, policy violation checks, travel requests, per diem calculation, expense report posting and email processing.

## Learn pages

- [Responsible AI FAQ for summarize (preview)](https://learn.microsoft.com/dynamics365/business-central/faqs-summarize): Learn about the AI technology of summarize in Business Central, considerations, details about how AI is used, tested, evaluated, and limitations.
- [Summarize a record with Copilot](https://learn.microsoft.com/dynamics365/business-central/summarize-with-copilot): Learn how to use the Summarize feature with Copilot in Business Central to get an overview of your data and identify what needs your attention.
- [Troubleshoot Expense Agent Issues](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-agent-troubleshoot): Find solutions for common issues in Expense Agent, including sign-in problems, receipt upload failures, and policy violations.
  - In the observatory: [Table 6935 "EA Scheduler Task"](../../../objects/table/6935.md)

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central 2025 wave 2 (BC27): Hide Copilot summaries (Summary System Part Support)](../../../posts/yzhums-com/67310.md) (community post): "Summary system part that allows developers to hide or configure Copilot summary FactBoxes"
- [Business Central 2026 release wave 1 (BC28): Get item insights with advanced KPIs and Summary (new Item Statistics page)](../../../posts/yzhums-com/71758.md) (community post): "Copilot can summarize these insights automatically when enabled"
- [Business Central Under the Hood 11: New Data-Driven Copilot Experiences – Summarize with Copilot](../../../videos/fgWFOMPJd6U.md) (video): "Summarize with Copilot; Multi-Prompt Pipeline for Summarization"
- [What's New: Summarize with Copilot (2025 release wave 1)](../../../videos/HjsOuhThGKk.md) (video): "What's New: Summarize with Copilot (2025 release wave 1)"
- [What's New: Enhancements to Copilot Summaries (2025 release wave 2)](../../../videos/q0TxpWfm9rc.md) (video): "Enhancements to Copilot Summaries copilot summaries; ai insights; multi-language support"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
