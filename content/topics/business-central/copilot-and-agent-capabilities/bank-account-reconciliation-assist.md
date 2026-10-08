---
id: topic/business-central/copilot-and-agent-capabilities/bank-account-reconciliation-assist
type: topic
title: Bank account reconciliation assist
summary: Bank account reconciliation assist covers the Copilot (preview) feature in Business Central that matches bank transactions with ledger entries and suggests G/L accounts for unmatched ones. It answers how-to questions on using it and FAQ questions on what it does.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:16.844Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a08678870a2ee886104f25e2e270044de083280b4854c267ddf9c4ee05c9889b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faqs-bank-reconciliation
    title: FAQ for bank account reconciliation assist with Copilot (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-reconciliation-with-copilot
    title: Reconcile bank accounts with Copilot (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/faqs-bank-reconciliation
    - https://learn.microsoft.com/dynamics365/business-central/bank-reconciliation-with-copilot
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/4Te11l2BxmQ
    - video/jhfwx1K0I7Y
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10090
learn_toc_path:
  - Copilot and agent capabilities
  - Bank account reconciliation assist
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
member_hash: 16228d8e41d07a47eae870f48941d2991629cb906d3324a7fe61b4efe9fea312
narrative: generated
---

# Bank account reconciliation assist

> Bank account reconciliation assist covers the Copilot (preview) feature in Business Central that matches bank transactions with ledger entries and suggests G/L accounts for unmatched ones. It answers how-to questions on using it and FAQ questions on what it does.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Bank account reconciliation assist · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

Bank account reconciliation assist uses Copilot to cut the manual work of reconciling a bank account. It improves transaction matching beyond the automatch operation and suggests G/L accounts for bank transactions that have no matching ledger entry, so differences can be posted.

The section has two pages and no subtopics. "Reconcile bank accounts with Copilot (preview)" is the practical guide: it covers the matching and G/L suggestion steps, reviewing and saving match proposals, and the post if fully applied option. The FAQ page explains what the feature does at a higher level, including bank statement import and ledger entry matching. Start with the reconcile page to use the feature, and read the FAQ for background on the feature.

Both pages mark the feature as preview. The reconcile page mentions 2025 release wave 1 and 2025 release wave 2.

## Key points

- Copilot matches unmatched bank transactions with ledger entries using AI, supplementing the automatch operation.
- It suggests G/L accounts for unmatched transactions so differences can be posted.
- Match proposals can be reviewed and saved.
- A post if fully applied option is available.
- The feature relates to bank statement import and ledger entry matching.
- Both pages label the feature as preview.
- The reconcile page references 2025 release wave 1 and 2025 release wave 2.
- The FAQ page gives an overview of what the feature does.

## Learn pages

- [FAQ for bank account reconciliation assist with Copilot (preview)](https://learn.microsoft.com/dynamics365/business-central/faqs-bank-reconciliation): This FAQ provides information about the AI technology used for reconciling bank accounts and statements in Business Central. It includes key considerations and details about how AI is used, how it was tested and evaluated, and any specific limitations.
- [Reconcile bank accounts with Copilot (preview)](https://learn.microsoft.com/dynamics365/business-central/bank-reconciliation-with-copilot): Learn how to use Copilot to reconcile bank accounts in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10090 [Bank Acc. Reconciliation with Copilot] Read the functional part of the prompt from .resources and safety clause from Key Vault](../../../changes/bcapps/10090.md) (code change): "Bank account reconciliation with Copilot now loads the functional part of AI prompts"
- [Simplify Bank Reconciliation with Copilot in Dynamics 365 Business Central (2024)](../../../videos/4Te11l2BxmQ.md) (video): "bank reconciliation; copilot; transaction matching; gl account suggestions"
- [Introducing: Bank Account Reconciliation Assistance with Copilot (2023 release wave 2)](../../../videos/jhfwx1K0I7Y.md) (video): "Bank Account Reconciliation Assistance with Copilot; Reconcile with Copilot Action"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
