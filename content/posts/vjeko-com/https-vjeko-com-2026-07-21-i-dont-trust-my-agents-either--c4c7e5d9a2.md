---
id: post/vjeko-com/https-vjeko-com-2026-07-21-i-dont-trust-my-agents-either--c4c7e5d9a2
type: post
title: I don’t trust my agents either
summary: A developer demonstrates how to safely deploy code written by AI agents directly to production by building a rigorous multi-stage pipeline instead of relying on manual review. The approach applies quality principles from manufacturing to prevent defects systematically rather than catching them at the end.
tier: community
language: en
tags:
  - agentic engineering
  - quality assurance
  - code review
  - pipeline
  - testing
  - six sigma
  - automation
  - ai agents
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:55:22.434Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: dbc523f429983e137bf1979ee7a6216dfe65834941a6eacde152b5d709e25e5b
evidence:
  - kind: blog
    url: https://vjeko.com/2026/07/21/i-dont-trust-my-agents-either/
    title: I don’t trust my agents either
    date: "2026-07-21"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://vjeko.com/2026/07/21/i-dont-trust-my-agents-either/
    title: I don’t trust my agents either
    date: "2026-07-21"
    commit: null
    t: null
    quote: You are not being careful. You are squinting at widgets.
  - kind: blog
    url: https://vjeko.com/2026/07/21/i-dont-trust-my-agents-either/
    title: I don’t trust my agents either
    date: "2026-07-21"
    commit: null
    t: null
    quote: Thin layer on thin layer on thin layer, and what you finally get to stand on is thick.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://vjeko.com/2026/07/21/i-dont-trust-my-agents-either/
source_id: vjeko-com
source_name: Vjeko.com
url: https://vjeko.com/2026/07/21/i-dont-trust-my-agents-either/
published_at: "2026-07-21T13:19:44.000Z"
author: Vjekoslav Babić
full_text: false
words: 3246
quotes:
  - text: You are not being careful. You are squinting at widgets.
    why_it_matters: Directly challenges the false confidence of manual review, showing that reviewing code by eye is inspection (a failing approach) not process design (a working one).
  - text: Thin layer on thin layer on thin layer, and what you finally get to stand on is thick.
    why_it_matters: Explains why many small, focused checks stacked in sequence create reliable confidence, whereas a single overloaded reviewer creates false confidence.
code_objects_mentioned: []
systems:
  - development
  - platform
  - copilot
versions_mentioned: []
---

# I don’t trust my agents either

[Read the post](https://vjeko.com/2026/07/21/i-dont-trust-my-agents-either/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-07-21 · 3246 words · tier community · **unreviewed** (model text not yet checked)

> A developer demonstrates how to safely deploy code written by AI agents directly to production by building a rigorous multi-stage pipeline instead of relying on manual review. The approach applies quality principles from manufacturing to prevent defects systematically rather than catching them at the end.

## Key points

- Manual code review by a tired developer is an unreliable quality gate comparable to visual inspection on a factory line, not a real control system.
- The pipeline uses specialized sub-agents at every stage to enforce specific checks in order: spec validation, test structure, skeleton design, mocking strategy, vacuous test detection, red-green-refactor discipline, and security scanning.
- Each stop or failure in the pipeline becomes an opportunity to encode a new rule that prevents that entire class of problem forever, following the Six Sigma principle of fixing processes rather than inspecting outputs.
- Integration testing with real components replacing mocks happens late in the workflow to catch coordination failures between pieces that pass individually.

## Quotes

- "You are not being careful. You are squinting at widgets." (Directly challenges the false confidence of manual review, showing that reviewing code by eye is inspection (a failing approach) not process design (a working one).)
- "Thin layer on thin layer on thin layer, and what you finally get to stand on is thick." (Explains why many small, focused checks stacked in sequence create reliable confidence, whereas a single overloaded reviewer creates false confidence.)

## Context

- Features: multi-stage pipeline, spec-driven development, test skeleton validation, mocking strategy, red-green-refactor workflow, adversarial reviewer agents, integration testing, security scanning

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
