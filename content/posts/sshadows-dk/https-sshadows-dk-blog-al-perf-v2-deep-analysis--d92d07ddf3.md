---
id: post/sshadows-dk/https-sshadows-dk-blog-al-perf-v2-deep-analysis--d92d07ddf3
type: post
title: AL Perf v2 Drops Friday. Here's What Changed.
summary: AL Perf v2 adds call tree visibility and source code analysis to its AI-powered performance diagnostics, enabling deeper root cause identification. The tool now sends complete call graphs, SQL patterns, and AST summaries to Claude Sonnet, which outperforms previous analysis on real production profiles and surfaces findings like redundant setup calls and cross-extension table duplication.
tier: community
language: en
tags:
  - al development
  - performance analysis
  - ai-powered diagnostics
  - profiling
  - code optimization
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:17.196Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 7ee79eb70780c796dff24fc9d0a09696f4dca7e94ee526ec2ec1fe9cdb6dbc50
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/al-perf-v2-deep-analysis/
    title: AL Perf v2 Drops Friday. Here's What Changed.
    date: "2026-03-12"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/al-perf-v2-deep-analysis/
    title: AL Perf v2 Drops Friday. Here's What Changed.
    date: "2026-03-12"
    commit: null
    t: null
    quote: The AI narrates and contextualizes. It does that well. Version 2 sends a lot more.
  - kind: blog
    url: https://sshadows.dk/blog/al-perf-v2-deep-analysis/
    title: AL Perf v2 Drops Friday. Here's What Changed.
    date: "2026-03-12"
    commit: null
    t: null
    quote: The final configuration scores 5-0-0 against Opus. Sonnet consistently finds things Opus misses.
  - kind: blog
    url: https://sshadows.dk/blog/al-perf-v2-deep-analysis/
    title: AL Perf v2 Drops Friday. Here's What Changed.
    date: "2026-03-12"
    commit: null
    t: null
    quote: Turns out, telling an AI to be careful is a great way to make it boring.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/al-perf-v2-deep-analysis/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/al-perf-v2-deep-analysis/
published_at: "2026-03-12T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1010
quotes:
  - text: The AI narrates and contextualizes. It does that well. Version 2 sends a lot more.
    why_it_matters: Explains the leap from summary-only to detailed data that enables deeper analysis
  - text: The final configuration scores 5-0-0 against Opus. Sonnet consistently finds things Opus misses.
    why_it_matters: Demonstrates measurable superiority of the new approach through systematic testing
  - text: Turns out, telling an AI to be careful is a great way to make it boring.
    why_it_matters: Counterintuitive finding about prompt design that prioritizes breadth and hints over constraints
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned:
  - "2"
---

# AL Perf v2 Drops Friday. Here's What Changed.

[Read the post](https://sshadows.dk/blog/al-perf-v2-deep-analysis/) · SShadowS (Torben Leth) · 2026-03-12 · 1010 words · tier community · **unreviewed** (model text not yet checked)

> AL Perf v2 adds call tree visibility and source code analysis to its AI-powered performance diagnostics, enabling deeper root cause identification. The tool now sends complete call graphs, SQL patterns, and AST summaries to Claude Sonnet, which outperforms previous analysis on real production profiles and surfaces findings like redundant setup calls and cross-extension table duplication.

## Key points

- Version 2 provides the AI with full call trees and source code, not just hotspot summaries, revealing patterns like repeated function calls in loops
- A/B testing with Claude Sonnet and Opus shows Sonnet with enriched data wins 5-0 across five configurations with scores reaching 9.05 vs 8.0
- Expansive prompts that hint at patterns outperform restrictive rules that constrain the AI's reasoning
- Analysis costs $0.50 per profile with Sonnet versus $1.40 with Opus, with significantly better findings
- New findings include redundant setup calls, cross-extension table duplication, OUTER APPLY eliminations, and expensive code shapes

## Quotes

- "The AI narrates and contextualizes. It does that well. Version 2 sends a lot more." (Explains the leap from summary-only to detailed data that enables deeper analysis)
- "The final configuration scores 5-0-0 against Opus. Sonnet consistently finds things Opus misses." (Demonstrates measurable superiority of the new approach through systematic testing)
- "Turns out, telling an AI to be careful is a great way to make it boring." (Counterintuitive finding about prompt design that prioritizes breadth and hints over constraints)

## Context

- Features: call tree analysis, source code analysis, SQL query grouping, AST summaries, cross-extension pattern detection, business logic review, AI-powered performance recommendations
- Versions: 2

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
