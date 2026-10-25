---
id: post/sshadows-dk/https-sshadows-dk-blog-al-perf-v2-deep-analysis--d92d07ddf3
type: post
title: AL Perf v2 Drops Friday. Here's What Changed.
summary: AL Perf v2 enriches its AI analysis of AL performance profiles by sending the call tree, hotspot source code, SQL queries grouped by table and tree-sitter AST summaries along with the hotspot summary. In blind tests on five production profiles, Sonnet with this data beat Opus in every enriched configuration at roughly a third of the cost.
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
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:19.334Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: aaf41b4f375150697eb1bfb837ea9ac7f66b5e39c57dbdbaa1d143dd2cd272fb
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
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/al-perf-v2/cover.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:44.937Z"
---

# AL Perf v2 Drops Friday. Here's What Changed.

[Read the post](https://sshadows.dk/blog/al-perf-v2-deep-analysis/) · SShadowS (Torben Leth) · 2026-03-12 · 1010 words · tier community · reviewed (checked by Opus)

> AL Perf v2 enriches its AI analysis of AL performance profiles by sending the call tree, hotspot source code, SQL queries grouped by table and tree-sitter AST summaries along with the hotspot summary. In blind tests on five production profiles, Sonnet with this data beat Opus in every enriched configuration at roughly a third of the cost.

## Key points

- Version 1 stripped the call tree, so the AI saw symptoms but not causes; v2 adds call tree, source, grouped SQL and per-method structure data
- Sonnet with enriched data won 5-0 against Opus in every enriched configuration; the tuned final setup averaged 9.05 versus 8.47 for Opus
- Prompts with expansive hints worked better than restrictive rules, which made output blander
- A full analysis costs about 0.50 USD per profile with Sonnet versus 1.40 USD with Opus
- Profiles can be uploaded to the web tool or sent via the BC companion extension; adding a source zip enables business logic review and code fixes

## Quotes

- "The AI narrates and contextualizes. It does that well. Version 2 sends a lot more." (Explains the leap from summary-only to detailed data that enables deeper analysis)
- "The final configuration scores 5-0-0 against Opus. Sonnet consistently finds things Opus misses." (Demonstrates measurable superiority of the new approach through systematic testing)
- "Turns out, telling an AI to be careful is a great way to make it boring." (Counterintuitive finding about prompt design that prioritizes breadth and hints over constraints)

## Context

- Features: call tree analysis, source code analysis, SQL query grouping, AST summaries, cross-extension pattern detection, business logic review, AI-powered performance recommendations
- Versions: 2

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
