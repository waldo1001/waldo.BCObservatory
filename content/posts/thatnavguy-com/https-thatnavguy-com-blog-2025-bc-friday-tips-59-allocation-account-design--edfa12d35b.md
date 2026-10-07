---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-59-allocation-account-design--edfa12d35b
type: post
title: "BC Friday Tips #59 Allocation Account Design"
summary: Allocation Accounts automate the distribution of revenue or cost amounts through journals and documents. The feature is implemented via Codeunit 2677, which subscribes to an event before posting batch runs, intercepts journal lines, rewrites them, and posts the updated lines.
tier: community
language: en
tags:
  - allocation accounts
  - journal posting
  - codeunit design
  - event subscription
  - al development
  - debugging
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:22:56.609Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 51de38bb1832b81d00b4c0763f55a63df1648b014d83a3e2620aeb004c76390a
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-59-allocation-account-design/
    title: "BC Friday Tips #59 Allocation Account Design"
    date: "2025-12-05"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-59-allocation-account-design/
    title: "BC Friday Tips #59 Allocation Account Design"
    date: "2025-12-05"
    commit: null
    t: null
    quote: Allocation Account automates how revenue or cost amounts are distributed through journals and documents
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-59-allocation-account-design/
    title: "BC Friday Tips #59 Allocation Account Design"
    date: "2025-12-05"
    commit: null
    t: null
    quote: It intercepts the journal lines, rewrites them, and then posts the updated lines.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-59-allocation-account-design/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-59-allocation-account-design/
published_at: "2025-12-05T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 94
quotes:
  - text: Allocation Account automates how revenue or cost amounts are distributed through journals and documents
    why_it_matters: Explains the core purpose of the feature for automating distribution workflows
  - text: It intercepts the journal lines, rewrites them, and then posts the updated lines.
    why_it_matters: Shows the technical mechanism used to implement allocation without changing the posting framework
code_objects_mentioned:
  - codeunit Gen. Journal Alloc. Acc. Mgt.
  - codeunit Gen. Jnl.-Post Batch
systems:
  - finance
  - development
versions_mentioned: []
---

# BC Friday Tips #59 Allocation Account Design

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-59-allocation-account-design/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-12-05 · 94 words · tier community · **unreviewed** (machine-generated)

> Allocation Accounts automate the distribution of revenue or cost amounts through journals and documents. The feature is implemented via Codeunit 2677, which subscribes to an event before posting batch runs, intercepts journal lines, rewrites them, and posts the updated lines.

## Key points

- Allocation Accounts distribute revenue or cost amounts automatically across journals and documents
- The AL implementation lives in Codeunit 2677 'Gen. Journal Alloc. Acc. Mgt.'
- The codeunit subscribes to an event that fires before Gen. Jnl.-Post Batch runs
- Journal lines are intercepted, rewritten, and then posted
- Understanding this pattern helps with debugging and implementing similar functionality

## Quotes

- "Allocation Account automates how revenue or cost amounts are distributed through journals and documents" (Explains the core purpose of the feature for automating distribution workflows)
- "It intercepts the journal lines, rewrites them, and then posts the updated lines." (Shows the technical mechanism used to implement allocation without changing the posting framework)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- codeunit "Gen. Journal Alloc. Acc. Mgt."
- codeunit "Gen. Jnl.-Post Batch"

## Context

- Features: Allocation Accounts, journal distribution, revenue allocation, cost allocation, event-based processing

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
