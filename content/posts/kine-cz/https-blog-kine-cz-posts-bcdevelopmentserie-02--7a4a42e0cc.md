---
id: post/kine-cz/https-blog-kine-cz-posts-bcdevelopmentserie-02--7a4a42e0cc
type: post
title: "Business Central Development Serie - Part 2: Using AI for BC development"
summary: AI tools can accelerate Business Central development when used responsibly with clear guidelines, proper security practices, and human oversight. Success requires understanding AI limitations, establishing coding standards before deployment, implementing CI/CD pipelines, and maintaining developer accountability for code quality and business logic.
tier: community
language: en
tags:
  - ai-development
  - code-generation
  - security
  - guidelines
  - best-practices
  - agentic-coding
  - code-review
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:56:09.637Z"
  flags: []
generated:
  at: "2026-10-28T08:47:18.430Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 186c8c7f1ee7e6d94d7b12e3021c3b7a94186f22d75dca5be5bbd8d45723281b
evidence:
  - kind: blog
    url: https://blog.kine.cz/posts/bcdevelopmentserie-02/
    title: "Business Central Development Serie - Part 2: Using AI for BC development"
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://blog.kine.cz/posts/bcdevelopmentserie-02/
    title: "Business Central Development Serie - Part 2: Using AI for BC development"
    date: "2026-03-10"
    commit: null
    t: null
    quote: AI is good servant but bad master
links:
  learn: []
  objects:
    - object/table/330
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  related:
    - to: post/yzhums-com/69290
      title: "Dynamics 365 Business Central: Regarding the issue where the Source Currency Amount in G/L Entry differs from the pre-posting Amount in BC27"
      label: possibly related
      why: both name Table 330 "Currency Exchange Rate"
      by: code
    - to: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-value-added-tax
      title: Swiss Value Added Tax [CH]
      label: possibly related
      why: names Table 330 "Currency Exchange Rate"
      by: code
post_id: https://blog.kine.cz/posts/bcdevelopmentserie-02/
source_id: kine-cz
source_name: Kine's info
url: https://blog.kine.cz/posts/bcdevelopmentserie-02/
published_at: "2026-03-10T23:00:00.000Z"
author: Kamil Sacek
full_text: false
words: 4113
quotes:
  - text: AI is good servant but bad master
    why_it_matters: Summarizes the core principle that AI is a tool requiring human judgment and oversight, not a replacement for developer expertise and decision-making.
code_objects_mentioned:
  - codeunit 50100
  - codeunit 50200
  - table Currency Exchange Rate
systems:
  - development
  - platform
versions_mentioned: []
cautions:
  - kind: warning
    quote: Do not send customer data to AI - never paste real customer data, credentials, connection strings or license keys into AI chat.
    objects: []
    events: []
    versions: []
preview:
  embeddable: true
  frame_url: null
  image: https://blog.kine.cz/assets/BCDevSerie/BCDevSeriePart02.svg
  image_alt: "Business Central Development Serie - Part 2: Using AI for BC Development"
  image_w: null
  image_h: null
  site_name: Kine's info
  favicon: https://blog.kine.cz/favicon.ico?v=1
  probed_at: "2026-10-07T11:50:27.955Z"
---

# Business Central Development Serie - Part 2: Using AI for BC development

[Read the post](https://blog.kine.cz/posts/bcdevelopmentserie-02/) · Kine's info (Kamil Sacek, MVP) · 2026-03-10 · 4113 words · tier community · reviewed (checked by Opus)

> AI tools can accelerate Business Central development when used responsibly with clear guidelines, proper security practices, and human oversight. Success requires understanding AI limitations, establishing coding standards before deployment, implementing CI/CD pipelines, and maintaining developer accountability for code quality and business logic.

## Key points

- AI excels at code completion and code review but requires human developers to understand requirements, validate approaches, and review output before production use.
- Security and data privacy demand company policies restricting sensitive code and customer data from AI services; enterprise subscription plans offer better data protection than personal accounts.
- Establish comprehensive guidelines covering naming conventions, architecture rules, performance standards, error handling, and testing expectations before using AI agents for code generation.
- Agentic coding tools work best with MCP servers providing Business Central context (table structures, field numbers, object metadata) to generate compilable code.
- AI cannot replace developer expertise in complex Business Central processes like journal posting or manufacturing planning; it requires specific instructions and manual refinement.

## Quotes

- "AI is good servant but bad master" (Summarizes the core principle that AI is a tool requiring human judgment and oversight, not a replacement for developer expertise and decision-making.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "50100"
- codeunit "50200"
- [table 330 "Currency Exchange Rate"](../../objects/table/330.md)

Not found in BC28-30: codeunit "50100", codeunit "50200".

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Dynamics 365 Business Central: Regarding the issue where the Source Currency Amount in G/L Entry differs from the pre-posting Amount in BC27](../../posts/yzhums-com/69290.md) — possibly related: both name Table 330 "Currency Exchange Rate"
- [Swiss Value Added Tax \[CH\]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-value-added-tax) — possibly related: names Table 330 "Currency Exchange Rate"

## Heads up

- warning: "Do not send customer data to AI - never paste real customer data, credentials, connection strings or license keys into AI chat."

## Context

- Features: Code completion with GitHub Copilot, Agentic coding with Claude Code and Cursor, MCP servers for Business Central context, Code review automation, Test generation, Instruction synchronization via VSCode extension, CI/CD integration, Work item analysis

Source: Kine's info, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
