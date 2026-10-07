---
id: post/stefanmaron-com/https-stefanmaron-com-posts-claude-code-dev-container-al--96fc93c109
type: post
title: Building a Plug & Play Claude Code Dev Container for AL Development
summary: Setting up a reusable dev container that runs Claude Code with AL development tools installed, persistent authentication across rebuilds, and network isolation to safely use Claude Code with dangerous permissions enabled in a sandboxed environment.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T00:52:22.949Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: f9c92ae9d8e989fe0ce328b3db599b0c6ab622ff11c88d904a92d2ad393ad187
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
  - integration
  - platform
versions_mentioned: []
---

# Building a Plug & Play Claude Code Dev Container for AL Development

[Read the post](https://stefanmaron.com/posts/claude-code-dev-container-al/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-20 · 1454 words · tier community · **unreviewed** (machine-generated)

> Setting up a reusable dev container that runs Claude Code with AL development tools installed, persistent authentication across rebuilds, and network isolation to safely use Claude Code with dangerous permissions enabled in a sandboxed environment.

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
