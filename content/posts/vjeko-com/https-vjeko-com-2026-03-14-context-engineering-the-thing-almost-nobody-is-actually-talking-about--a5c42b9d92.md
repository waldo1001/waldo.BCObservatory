---
id: post/vjeko-com/https-vjeko-com-2026-03-14-context-engineering-the-thing-almost-nobody-is-actually-talking-about--a5c42b9d92
type: post
title: Context Engineering – The Thing Almost Nobody Is Actually Talking About
summary: Context engineering - curating precisely what information goes into an AI agent's context window - matters more than model choice or toolchains for Business Central development. Since models lack implicit knowledge of AL, Base App, and BC-specific systems, developers must explicitly supply curated context to prevent agents from confidently inferring incorrect solutions based on adjacent ERP systems.
tier: community
language: en
tags:
  - context engineering
  - ai agents
  - agentic development
  - prompt engineering
  - context window management
  - al development
  - agent reliability
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T17:03:54.105Z"
  flags: []
generated:
  at: "2026-10-26T05:30:48.114Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 651a4f12c5d9d717fa4919539b6964eb0585313b533ff6c52ecf0b0c5bf264ba
evidence:
  - kind: blog
    url: https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/
    title: Context Engineering – The Thing Almost Nobody Is Actually Talking About
    date: "2026-03-14"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/
    title: Context Engineering – The Thing Almost Nobody Is Actually Talking About
    date: "2026-03-14"
    commit: null
    t: null
    quote: Context matters more than your prompt. Significantly more.
  - kind: blog
    url: https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/
    title: Context Engineering – The Thing Almost Nobody Is Actually Talking About
    date: "2026-03-14"
    commit: null
    t: null
    quote: AL is not the exception. AL is the proof.
  - kind: blog
    url: https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/
    title: Context Engineering – The Thing Almost Nobody Is Actually Talking About
    date: "2026-03-14"
    commit: null
    t: null
    quote: The agents are not failing us. We are failing the agents.
links:
  learn: []
  objects:
    - object/table/254
    - object/codeunit/80
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  related:
    - to: post/yzhums-com/71262
      title: "Business Central 2026 release wave 1 (BC28): Run AL objects and open record references using fully qualified names (Support for namespaces and fully qualified names)"
      label: possibly related
      why: both name Codeunit 80 "Sales-Post"
      by: code
    - to: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure
      title: Design details - Item tracking posting structure
      label: possibly related
      why: names Codeunit 80 "Sales-Post"
      by: code
    - to: post/yzhums-com/69215
      title: "Dynamics 365 Business Central: Manage credit limits (Warnings and Workflow)"
      label: possibly related
      why: both name Codeunit 80 "Sales-Post"
      by: code
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging
      title: Snapshot debugging
      label: possibly related
      why: names Codeunit 80 "Sales-Post"
      by: code
    - to: post/duiliotacconi-com/1667
      title: Sorting by Type and Line No. in Sales and Purchase Postings
      label: possibly related
      why: both name Codeunit 80 "Sales-Post"
      by: code
    - to: video/a1LQ3-SCtPE
      title: "What's New: Server and Database - A Faster Data Stack (2023 release wave 2)"
      label: possibly related
      why: both name Table 254 "VAT Entry"
      by: code
post_id: https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/
source_id: vjeko-com
source_name: Vjeko.com
url: https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/
published_at: "2026-03-14T09:10:40.000Z"
author: Vjekoslav Babić
full_text: false
words: 1839
quotes:
  - text: Context matters more than your prompt. Significantly more.
    why_it_matters: Establishes the central thesis that technical context is more decisive than prompt wording for agent success
  - text: AL is not the exception. AL is the proof.
    why_it_matters: Demonstrates that BC's proprietary systems force explicit context engineering, proving the principle universally rather than as an edge case
  - text: The agents are not failing us. We are failing the agents.
    why_it_matters: Redirects responsibility from model limitations to developer accountability for providing structured, curated context that enables agent success
code_objects_mentioned:
  - table VAT Entry
  - codeunit Sales-Post
systems:
  - development
versions_mentioned: []
cautions:
  - kind: gotcha
    quote: Almost right, in code, is often worse than wrong.
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://vjeko.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-14-2026-09_59_15-AM.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://vjeko.com/wp-content/uploads/2020/12/cropped-Brand-Element-v3-32x32.png
  probed_at: "2026-10-25T17:00:13.879Z"
---

# Context Engineering – The Thing Almost Nobody Is Actually Talking About

[Read the post](https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-03-14 · 1839 words · tier community · reviewed (checked by Opus)

> Context engineering - curating precisely what information goes into an AI agent's context window - matters more than model choice or toolchains for Business Central development. Since models lack implicit knowledge of AL, Base App, and BC-specific systems, developers must explicitly supply curated context to prevent agents from confidently inferring incorrect solutions based on adjacent ERP systems.

## Key points

- Context engineering is the skill of strategically filling the context window with exactly what an agent needs at each step, accounting for how context evolves through multi-turn interactions and accumulates as tokens add up
- Models have no learned context for BC's proprietary systems like VAT Entry tables or the Base App, causing them to confidently infer wrong solutions by analogy to SAP or other ERPs they learned about
- Large BC codeunits (e.g., Sales-Post at 158,000 tokens) exceed model context windows and prevent agents from understanding the full picture, making self-guided context engineering impossible
- Plan mode works by having agents autonomously discover relevant context through code navigation; it succeeds when codebases are well-structured and fails when logic is scattered across interdependent god codeunits
- Developers must actively curate and structure context rather than hoping agents will extract it, treating this responsibility as more important than selecting the best model

## Quotes

- "Context matters more than your prompt. Significantly more." (Establishes the central thesis that technical context is more decisive than prompt wording for agent success)
- "AL is not the exception. AL is the proof." (Demonstrates that BC's proprietary systems force explicit context engineering, proving the principle universally rather than as an edge case)
- "The agents are not failing us. We are failing the agents." (Redirects responsibility from model limitations to developer accountability for providing structured, curated context that enables agent success)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 254 "VAT Entry"](../../objects/table/254.md)
- [codeunit 80 "Sales-Post"](../../objects/codeunit/80.md)

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Business Central 2026 release wave 1 (BC28): Run AL objects and open record references using fully qualified names (Support for namespaces and fully qualified names)](../../posts/yzhums-com/71262.md) — possibly related: both name Codeunit 80 "Sales-Post"
- [Design details - Item tracking posting structure](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure) — possibly related: names Codeunit 80 "Sales-Post"
- [Dynamics 365 Business Central: Manage credit limits (Warnings and Workflow)](../../posts/yzhums-com/69215.md) — possibly related: both name Codeunit 80 "Sales-Post"
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging) — possibly related: names Codeunit 80 "Sales-Post"
- [Sorting by Type and Line No. in Sales and Purchase Postings](../../posts/duiliotacconi-com/1667.md) — possibly related: both name Codeunit 80 "Sales-Post"
- [What's New: Server and Database - A Faster Data Stack (2023 release wave 2)](../../videos/a1LQ3-SCtPE.md) — possibly related: both name Table 254 "VAT Entry"

## Heads up

- gotcha: "Almost right, in code, is often worse than wrong."

## Context

- Features: plan mode in Cursor and Claude Code, context window management for agents, multi-turn agent loops, tool calls and output accumulation, context rot mitigation, self-guided context engineering

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
