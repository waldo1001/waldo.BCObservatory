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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:55:37.014Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: bbd6868b924f48b7e244056c730b696241275f2855ed2f58423605980078f9a8
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
  - integration
  - copilot
versions_mentioned: []
---

# Context Engineering – The Thing Almost Nobody Is Actually Talking About

[Read the post](https://vjeko.com/2026/03/14/context-engineering-the-thing-almost-nobody-is-actually-talking-about/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-03-14 · 1839 words · tier community · **unreviewed** (model text not yet checked)

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

## Context

- Features: plan mode in Cursor and Claude Code, context window management for agents, multi-turn agent loops, tool calls and output accumulation, context rot mitigation, self-guided context engineering

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
