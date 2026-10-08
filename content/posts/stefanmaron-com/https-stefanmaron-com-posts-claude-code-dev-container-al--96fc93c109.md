---
id: post/stefanmaron-com/https-stefanmaron-com-posts-claude-code-dev-container-al--96fc93c109
type: post
title: Building a Plug & Play Claude Code Dev Container for AL Development
summary: Describes building a reusable dev container feature, distributed via GHCR, that installs Claude Code for AL work. Named Docker volumes keep authentication across rebuilds, and stripped git credentials stop Claude Code, running with bypassed permissions, from reaching GitHub. Next steps are AL-specific Claude configuration and moving to Anthropic's official firewall-based dev container.
tier: community
language: en
tags:
  - claude code
  - dev containers
  - al development
  - automation
  - authentication
  - devops
  - sandbox security
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:56:44.042Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: cd149f3b9047034548bf2d39e6f77b07a32190c6d8c00936598f6e95351e3462
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/claude-code-dev-container-al/
    title: Building a Plug & Play Claude Code Dev Container for AL Development
    date: "2026-02-20"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/claude-code-dev-container-al/
    title: Building a Plug & Play Claude Code Dev Container for AL Development
    date: "2026-02-20"
    commit: null
    t: null
    quote: That level of autonomous handling still surprises me a bit. You don't get that with Copilot.
  - kind: blog
    url: https://stefanmaron.com/posts/claude-code-dev-container-al/
    title: Building a Plug & Play Claude Code Dev Container for AL Development
    date: "2026-02-20"
    commit: null
    t: null
    quote: A dev container is the right sandbox. If Claude Code decides to do something destructive, it destroys the container - not your machine.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/claude-code-dev-container-al/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/claude-code-dev-container-al/
published_at: "2026-02-20T08:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1454
quotes:
  - text: That level of autonomous handling still surprises me a bit. You don't get that with Copilot.
    why_it_matters: Demonstrates Claude Code's autonomous problem-solving capabilities beyond what traditional AI assistants offer, particularly in fixing deployment issues independently
  - text: A dev container is the right sandbox. If Claude Code decides to do something destructive, it destroys the container - not your machine.
    why_it_matters: Explains the security model that makes running Claude Code with bypassed permissions safe through containerization isolation
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
  probed_at: "2026-10-07T11:50:43.194Z"
---

# Building a Plug & Play Claude Code Dev Container for AL Development

[Read the post](https://stefanmaron.com/posts/claude-code-dev-container-al/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-20 · 1454 words · tier community · reviewed (checked by Opus)

> Describes building a reusable dev container feature, distributed via GHCR, that installs Claude Code for AL work. Named Docker volumes keep authentication across rebuilds, and stripped git credentials stop Claude Code, running with bypassed permissions, from reaching GitHub. Next steps are AL-specific Claude configuration and moving to Anthropic's official firewall-based dev container.

## Key points

- Named Docker volumes store Claude Code credentials and config persistently, eliminating need to re-authenticate after container rebuilds
- Git credentials are stripped via environment variables to prevent Claude Code from accessing GitHub, with VS Code GitHub auth also disabled
- Dev Container Features distribute the setup as a composable, shareable unit via GHCR instead of manual Dockerfile copying
- Debugging involved comparing directory snapshots before and after onboarding to identify that ~/.claude.json outside the mount scope blocked authentication persistence
- Anthropic maintains an official dev container with network-level firewall isolation that can serve as a better foundation than custom solutions

## Quotes

- "That level of autonomous handling still surprises me a bit. You don't get that with Copilot." (Demonstrates Claude Code's autonomous problem-solving capabilities beyond what traditional AI assistants offer, particularly in fixing deployment issues independently)
- "A dev container is the right sandbox. If Claude Code decides to do something destructive, it destroys the container - not your machine." (Explains the security model that makes running Claude Code with bypassed permissions safe through containerization isolation)

## Context

- Features: Claude Code integration, dev container features, persistent authentication, git credential stripping, voice prompting, named Docker volumes, network isolation

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
