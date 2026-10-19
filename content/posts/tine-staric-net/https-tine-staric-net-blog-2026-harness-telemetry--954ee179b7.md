---
id: post/tine-staric-net/https-tine-staric-net-blog-2026-harness-telemetry--954ee179b7
type: post
title: '"Dev X used 2k tokens with Opus" is not telemetry'
summary: Setting up OpenTelemetry to track Claude Code and GitHub Copilot usage across teams reveals which plugins, skills and agents actually get used by collecting metrics, events and traces through a managed collector that filters data, hashes identities and exports to Application Insights for analysis via dashboards.
tier: community
language: en
tags:
  - telemetry
  - opentelemetry
  - claude code
  - copilot
  - monitoring
  - analytics
  - privacy
  - plugins
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-19T00:23:05.756Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: c8c75a153999d76e36db41684c4053163e863aaa4dd8a5f91d1c3fceb16b656a
evidence:
  - kind: blog
    url: https://tine.staric.net/blog/2026/harness-telemetry/
    title: '"Dev X used 2k tokens with Opus" is not telemetry'
    date: "2026-10-18"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://tine.staric.net/blog/2026/harness-telemetry/
    title: '"Dev X used 2k tokens with Opus" is not telemetry'
    date: "2026-10-18"
    commit: null
    t: null
    quote: A setup that works out of the box beats one I maintain, so I threw the hook away.
  - kind: blog
    url: https://tine.staric.net/blog/2026/harness-telemetry/
    title: '"Dev X used 2k tokens with Opus" is not telemetry'
    date: "2026-10-18"
    commit: null
    t: null
    quote: The list doesn't matter, the questions do.
  - kind: blog
    url: https://tine.staric.net/blog/2026/harness-telemetry/
    title: '"Dev X used 2k tokens with Opus" is not telemetry'
    date: "2026-10-18"
    commit: null
    t: null
    quote: Collect the minimum, and delete the rest before it's stored.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://tine.staric.net/blog/2026/harness-telemetry/
source_id: tine-staric-net
source_name: Tech Adventures in Business Central
url: https://tine.staric.net/blog/2026/harness-telemetry/
published_at: "2026-10-18T08:00:00.000Z"
author: Tine Staric
full_text: false
words: 1948
quotes:
  - text: A setup that works out of the box beats one I maintain, so I threw the hook away.
    why_it_matters: Demonstrates the decision to use OpenTelemetry standards over custom infrastructure, reducing operational burden.
  - text: The list doesn't matter, the questions do.
    why_it_matters: Emphasizes starting with business questions rather than collecting all available signals, focusing on meaningful insights.
  - text: Collect the minimum, and delete the rest before it's stored.
    why_it_matters: Core privacy principle showing how to handle sensitive data like prompts and user emails while maintaining useful analytics.
code_objects_mentioned: []
systems:
  - development
  - administration
  - integration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: null
  probed_at: "2026-10-17T01:09:09.536Z"
---

# "Dev X used 2k tokens with Opus" is not telemetry

[Read the post](https://tine.staric.net/blog/2026/harness-telemetry/) · Tech Adventures in Business Central (Tine Staric) · 2026-10-18 · 1948 words · tier community · **unreviewed** (model text not yet checked)

> Setting up OpenTelemetry to track Claude Code and GitHub Copilot usage across teams reveals which plugins, skills and agents actually get used by collecting metrics, events and traces through a managed collector that filters data, hashes identities and exports to Application Insights for analysis via dashboards.

## Key points

- OpenTelemetry covers three signal types: metrics (numbers over time), logs (events), and traces (operations), with Claude Code sending metrics and events while Copilot sends traces and metrics.
- A small collector in the middle accepts bearer ingest tokens, filters signals to keep only what answers business questions, deletes sensitive content before storage, and exports to Application Insights with proper authentication.
- Managed settings deployed through admin consoles let teams enforce telemetry configuration across developers without them being able to opt out, covering both Claude Code and GitHub Copilot consistently.
- Core dashboard tracks nine key metrics including active users, plugin adoption versus usage, skill activation, MCP connections, and costs per repository to answer questions about what adds value.
- Privacy-first approach: allowlist only necessary events, hash user identities with salted hashes on the collector side, and restrict workspace access to ensure pseudonymous data stays protected.

## Quotes

- "A setup that works out of the box beats one I maintain, so I threw the hook away." (Demonstrates the decision to use OpenTelemetry standards over custom infrastructure, reducing operational burden.)
- "The list doesn't matter, the questions do." (Emphasizes starting with business questions rather than collecting all available signals, focusing on meaningful insights.)
- "Collect the minimum, and delete the rest before it's stored." (Core privacy principle showing how to handle sensitive data like prompts and user emails while maintaining useful analytics.)

## Context

- Features: OpenTelemetry integration, Application Insights export, Managed settings deployment, Data filtering and anonymization, Azure Workbooks dashboards, Collector authentication, KQL queries, Cost tracking

Source: Tech Adventures in Business Central, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
