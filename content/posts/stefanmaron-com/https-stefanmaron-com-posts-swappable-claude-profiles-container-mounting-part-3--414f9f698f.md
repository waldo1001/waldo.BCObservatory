---
id: post/stefanmaron-com/https-stefanmaron-com-posts-swappable-claude-profiles-container-mounting-part-3--414f9f698f
type: post
title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
summary: Claude Code profiles enable project-specific configurations by mounting host directories as ~/.claude inside containers, allowing separate contexts, instructions, and agents for different work types. The profile system makes it practical to maintain AL development, telemetry investigation, and other specialized contexts without switching tools.
tier: community
language: en
tags:
  - claude code
  - containers
  - profiles
  - agents
  - skills
  - docker
  - configuration management
system: development
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
  input_hash: 4c43517e990dca78147e713055cf0f93da8ee9c89fc13152bbb1aa409095ffb9
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/swappable-claude-profiles-container-mounting-part-3/
    title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
    date: "2026-03-16"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/swappable-claude-profiles-container-mounting-part-3/
    title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
    date: "2026-03-16"
    commit: null
    t: null
    quote: A profile folder is just a regular directory on your host machine. It contains everything Claude Code normally stores in ~/.claude
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/swappable-claude-profiles-container-mounting-part-3/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/swappable-claude-profiles-container-mounting-part-3/
published_at: "2026-03-16T08:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1116
quotes:
  - text: A profile folder is just a regular directory on your host machine. It contains everything Claude Code normally stores in ~/.claude
    why_it_matters: Defines the simple concept of profiles as portable, self-contained configuration directories
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:32.473Z"
---

# Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)

[Read the post](https://stefanmaron.com/posts/swappable-claude-profiles-container-mounting-part-3/) · Stefan Maron (Stefan Maron, MVP) · 2026-03-16 · 1116 words · tier community · **unreviewed** (machine-generated)

> Claude Code profiles enable project-specific configurations by mounting host directories as ~/.claude inside containers, allowing separate contexts, instructions, and agents for different work types. The profile system makes it practical to maintain AL development, telemetry investigation, and other specialized contexts without switching tools.

## Key points

- Profile folders contain all Claude Code configuration including CLAUDE.md instructions, custom commands, agents, and plugins mounted as ~/.claude in the container
- Switching profiles requires only changing one volume mount line in the Docker command, preserving the same container image with completely different configurations
- Agents and their memory persist in the profile folder, allowing prior context and learned patterns to carry forward across multiple projects using the same profile
- Skills provide more power than simple commands through frontmatter options like context:fork for isolated subagents and allowed-tools for restricted execution
- Agent Skills is an open standard adopted across multiple AI coding tools (Claude Code, Cursor, GitHub Copilot, Gemini CLI) making profiles portable between tools

## Quotes

- "A profile folder is just a regular directory on your host machine. It contains everything Claude Code normally stores in ~/.claude" (Defines the simple concept of profiles as portable, self-contained configuration directories)

## Context

- Features: swappable profiles, container mounting, custom commands, agent persistence, skills framework, isolated subagents, context:fork

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
