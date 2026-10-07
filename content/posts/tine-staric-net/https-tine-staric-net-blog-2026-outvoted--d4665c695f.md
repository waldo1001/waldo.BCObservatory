---
id: post/tine-staric-net/https-tine-staric-net-blog-2026-outvoted--d4665c695f
type: post
title: Context is a voting chamber
summary: Long agent sessions balance cost efficiency through prompt caching with attention degradation, where context acts as a voting chamber where older information dilutes focus on current objectives. Understanding when to start fresh sessions or use handoffs versus maintaining warm caches determines productivity and actual token costs.
tier: community
language: en
tags:
  - agent sessions
  - prompt caching
  - attention mechanisms
  - context management
  - token cost optimization
  - session handoffs
  - llm performance
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T12:54:54.417Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 8e63e434ddfe10581dc18183ca848f971c6a5822cd18e60e6bcd662dcc351444
evidence:
  - kind: blog
    url: https://tine.staric.net/blog/2026/outvoted/
    title: Context is a voting chamber
    date: "2026-08-31"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://tine.staric.net/blog/2026/outvoted/
    title: Context is a voting chamber
    date: "2026-08-31"
    commit: null
    t: null
    quote: Most of a long conversation genuinely does bill at that cache-read rate, because most of it is being read, not reprocessed.
  - kind: blog
    url: https://tine.staric.net/blog/2026/outvoted/
    title: Context is a voting chamber
    date: "2026-08-31"
    commit: null
    t: null
    quote: Anything else still means summarizing what matters yourself, and starting over.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://tine.staric.net/blog/2026/outvoted/
source_id: tine-staric-net
source_name: Tech Adventures in Business Central
url: https://tine.staric.net/blog/2026/outvoted/
published_at: "2026-08-31T08:00:00.000Z"
author: Tine Staric
full_text: false
words: 1916
quotes:
  - text: Most of a long conversation genuinely does bill at that cache-read rate, because most of it is being read, not reprocessed.
    why_it_matters: "Clarifies the cost economics: caching makes long sessions manageable financially, costing only one-tenth of input rates for reused context"
  - text: Anything else still means summarizing what matters yourself, and starting over.
    why_it_matters: Instructs that telling agents to ignore information adds new voters rather than removing old ones, making manual summaries and fresh sessions the only effective solution
code_objects_mentioned: []
systems:
  - copilot
  - integration
  - development
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://tine.staric.net/images/outvoted/main.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: Tech Adventures in Business Central | AL Development & AI Solutions
  favicon: https://tine.staric.net/favicon.ico
  probed_at: "2026-10-07T11:50:08.606Z"
---

# Context is a voting chamber

[Read the post](https://tine.staric.net/blog/2026/outvoted/) · Tech Adventures in Business Central (Tine Staric) · 2026-08-31 · 1916 words · tier community · **unreviewed** (machine-generated)

> Long agent sessions balance cost efficiency through prompt caching with attention degradation, where context acts as a voting chamber where older information dilutes focus on current objectives. Understanding when to start fresh sessions or use handoffs versus maintaining warm caches determines productivity and actual token costs.

## Key points

- Prompt caching makes long sessions affordable at cache-read rates (one-tenth of input cost), with costs growing quadratically but remaining manageable until cache expires after 5 minutes to 1 hour of inactivity
- Attention mechanisms distribute weight across all context tokens proportionally to relevance, causing older or duplicate information to compete equally with current objectives, especially middle-context content
- Context acts like a voting chamber where multiple versions of the same information (files edited repeatedly, earlier drafts, abandoned approaches) all influence the next token equally despite recency weighting
- Handoffs between focused sessions and subagents for parallel reading preserve only eliminated options and their reasoning, not full transcripts, resetting context while avoiding costly cache invalidation
- Resuming old sessions burns cache at full input rates; starting fresh with summaries is more efficient than recomputing against accumulated 600k+ token prefixes

## Quotes

- "Most of a long conversation genuinely does bill at that cache-read rate, because most of it is being read, not reprocessed." (Clarifies the cost economics: caching makes long sessions manageable financially, costing only one-tenth of input rates for reused context)
- "Anything else still means summarizing what matters yourself, and starting over." (Instructs that telling agents to ignore information adds new voters rather than removing old ones, making manual summaries and fresh sessions the only effective solution)

## Context

- Features: prompt caching, cache write and read pricing, attention heads, context retirement, session handoffs, subagents, plan mode, todo list management

Source: Tech Adventures in Business Central, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
