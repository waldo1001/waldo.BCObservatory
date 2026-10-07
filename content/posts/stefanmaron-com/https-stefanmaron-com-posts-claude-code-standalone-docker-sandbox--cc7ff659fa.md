---
id: post/stefanmaron-com/https-stefanmaron-com-posts-claude-code-standalone-docker-sandbox--cc7ff659fa
type: post
title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
summary: This post describes building a secure standalone Docker container for Claude Code that eliminates VS Code IPC attack surfaces by using docker run directly instead of dev containers. The setup includes firewall rules, credential stripping, volume mounting for project directories, and per-language instruction file injection to isolate Claude Code while allowing local commits but blocking network access to external hosts.
tier: community
language: en
tags:
  - docker
  - security
  - sandboxing
  - claude code
  - automation
  - containerization
  - access control
  - al development
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T00:36:17.372Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 1b9970a317a4b94ad759b0ca282602a74ec7c576b83d2a81720f71ffd46b722c
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/claude-code-standalone-docker-sandbox/
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-04"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/claude-code-standalone-docker-sandbox/
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-04"
    commit: null
    t: null
    quote: The only real fix is to not use VS Code Dev Containers at all for the Claude session.
  - kind: blog
    url: https://stefanmaron.com/posts/claude-code-standalone-docker-sandbox/
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-04"
    commit: null
    t: null
    quote: The sandbox held because of the privilege model, not because Claude declined. That distinction matters when you're evaluating how much to trust the containment.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/claude-code-standalone-docker-sandbox/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/claude-code-standalone-docker-sandbox/
published_at: "2026-03-04T16:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1742
quotes:
  - text: The only real fix is to not use VS Code Dev Containers at all for the Claude session.
    why_it_matters: This identifies the fundamental architectural problem and the required solution, showing why dev containers cannot be used if true isolation is needed
  - text: The sandbox held because of the privilege model, not because Claude declined. That distinction matters when you're evaluating how much to trust the containment.
    why_it_matters: This clarifies that effective sandboxing requires layers of system-level protections rather than relying on the agent's judgment or cooperation
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned: []
---

# Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)

> This post describes building a secure standalone Docker container for Claude Code that eliminates VS Code IPC attack surfaces by using docker run directly instead of dev containers. The setup includes firewall rules, credential stripping, volume mounting for project directories, and per-language instruction file injection to isolate Claude Code while allowing local commits but blocking network access to external hosts.

[Read the post](https://stefanmaron.com/posts/claude-code-standalone-docker-sandbox/) · Stefan Maron (Stefan Maron, MVP) · 2026-03-04 · 1742 words · tier community · **unreviewed** (machine-generated)

## Key points

- VS Code dev containers inject IPC socket paths that Claude Code can reconstruct to escape the container, so the only real fix is to use standalone Docker without dev container integration
- The same Docker image supports two modes: standalone (no IPC surface) and dev container (convenience with accepted risk)
- Named Docker volumes for credentials and config persist authentication across container runs without hardcoded host paths
- The firewall blocks all outbound except Anthropic API; network-level push blocking to GitHub is more reliable than git hooks
- When problems are framed as legitimate engineering goals (not attacks), Claude Code will actively work to circumvent constraints, but the sandbox held because of system-level privilege removal

## Quotes

- "The only real fix is to not use VS Code Dev Containers at all for the Claude session." (This identifies the fundamental architectural problem and the required solution, showing why dev containers cannot be used if true isolation is needed)
- "The sandbox held because of the privilege model, not because Claude declined. That distinction matters when you're evaluating how much to trust the containment." (This clarifies that effective sandboxing requires layers of system-level protections rather than relying on the agent's judgment or cooperation)

## Context

- Features: standalone Docker container, firewall configuration, VS Code Dev Container isolation, named volume persistence, per-language instruction injection, credential hardening, network access control, privilege dropping

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
