---
id: post/tine-staric-net/https-tine-staric-net-blog-2026-agent-plugins--3332e8b779
type: post
title: Distributing Agents with Plugins
summary: Distribution of custom agents to teams is accomplished through plugins, which package agents, skills, and MCP configurations in a shared repository that team members can install with one click in GitHub Copilot or Claude Code. The post explains how to set up marketplace and plugin manifests to enable seamless sharing across ecosystems without manual file copying.
tier: community
language: en
tags:
  - agents
  - plugins
  - distribution
  - copilot
  - claude code
  - skills
  - packaging
  - vs code
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
  input_hash: 5c32a1b729da319e0e95440f9a92007549a89a9e271f176739ab4598d97439dc
evidence:
  - kind: blog
    url: https://tine.staric.net/blog/2026/agent-plugins/
    title: Distributing Agents with Plugins
    date: "2026-07-03"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://tine.staric.net/blog/2026/agent-plugins/
    title: Distributing Agents with Plugins
    date: "2026-07-03"
    commit: null
    t: null
    quote: The exact same plugin repo works for both GitHub Copilot and Claude Code. One repo, two ecosystems.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://tine.staric.net/blog/2026/agent-plugins/
source_id: tine-staric-net
source_name: Tech Adventures in Business Central
url: https://tine.staric.net/blog/2026/agent-plugins/
published_at: "2026-07-03T08:00:00.000Z"
author: Tine Staric
full_text: false
words: 1523
quotes:
  - text: The exact same plugin repo works for both GitHub Copilot and Claude Code. One repo, two ecosystems.
    why_it_matters: Demonstrates the efficiency of plugin-based distribution, eliminating the need to maintain separate repositories for different tools
code_objects_mentioned: []
systems:
  - copilot
  - development
  - integration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://tine.staric.net/images/agentplugins/main.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: Tech Adventures in Business Central | AL Development & AI Solutions
  favicon: https://tine.staric.net/favicon.ico
  probed_at: "2026-10-07T11:50:15.520Z"
---

# Distributing Agents with Plugins

[Read the post](https://tine.staric.net/blog/2026/agent-plugins/) · Tech Adventures in Business Central (Tine Staric) · 2026-07-03 · 1523 words · tier community · **unreviewed** (machine-generated)

> Distribution of custom agents to teams is accomplished through plugins, which package agents, skills, and MCP configurations in a shared repository that team members can install with one click in GitHub Copilot or Claude Code. The post explains how to set up marketplace and plugin manifests to enable seamless sharing across ecosystems without manual file copying.

## Key points

- Plugins enable one-click installation of agents and skills for entire teams without manual setup or file copying
- A single plugin repository works for both GitHub Copilot and Claude Code using shared agents/ and skills/ folders
- Marketplace manifests (.github/plugin/marketplace.json and .claude-plugin/marketplace.json) turn a repository into a discoverable plugin source
- Plugin manifests and directory structure are minimal, requiring only metadata files and standard folder naming conventions
- Teams can register plugin repositories in editor settings and receive updates automatically without reinstalling plugins

## Quotes

- "The exact same plugin repo works for both GitHub Copilot and Claude Code. One repo, two ecosystems." (Demonstrates the efficiency of plugin-based distribution, eliminating the need to maintain separate repositories for different tools)

## Context

- Features: plugin marketplace installation, agent distribution, skill sharing, MCP configuration sharing, cross-ecosystem plugin support, automatic plugin updates

Source: Tech Adventures in Business Central, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
