---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-implement-bcquality-agentic-workflow-business-central--a50c85b96a
type: post
title: How to implement Microsoft BCQuality in your GitHub Pull Request
summary: This post explains how to set up Microsoft BCQuality, a knowledge base for Business Central AL code quality reviews, in a GitHub pull request workflow using an agentic workflow. It provides step-by-step instructions to implement automated code quality checks without blocking merges.
tier: community
language: en
tags:
  - github
  - workflows
  - code quality
  - pull requests
  - al development
  - agentic workflows
  - ci/cd
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:41:31.815Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 734d75ab8da022552732b61e572639ff37a0e0fda4adb3f642ff5997b89f11a6
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/implement-bcquality-agentic-workflow-business-central/
    title: How to implement Microsoft BCQuality in your GitHub Pull Request
    date: "2026-08-20"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/implement-bcquality-agentic-workflow-business-central/
    title: How to implement Microsoft BCQuality in your GitHub Pull Request
    date: "2026-08-20"
    commit: null
    t: null
    quote: Think of it as a reference library for Business Central best practices around correctness, maintainability, readability, performance, and testability.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/implement-bcquality-agentic-workflow-business-central/
    title: How to implement Microsoft BCQuality in your GitHub Pull Request
    date: "2026-08-20"
    commit: null
    t: null
    quote: It does not block your merge. It gives your team another set of eyes.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/implement-bcquality-agentic-workflow-business-central/
    title: How to implement Microsoft BCQuality in your GitHub Pull Request
    date: "2026-08-20"
    commit: null
    t: null
    quote: If you already use pull requests for AL changes, this is an easy upgrade.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/implement-bcquality-agentic-workflow-business-central/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/implement-bcquality-agentic-workflow-business-central/
published_at: "2026-08-20T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 423
quotes:
  - text: Think of it as a reference library for Business Central best practices around correctness, maintainability, readability, performance, and testability.
    why_it_matters: Defines what BCQuality provides as a knowledge base for consistent code quality standards
  - text: It does not block your merge. It gives your team another set of eyes.
    why_it_matters: Explains the non-intrusive nature of the review process, allowing teams to maintain development velocity
  - text: If you already use pull requests for AL changes, this is an easy upgrade.
    why_it_matters: Shows that adoption fits naturally into existing workflows with minimal friction
code_objects_mentioned: []
systems:
  - development
  - integration
  - platform
versions_mentioned: []
---

# How to implement Microsoft BCQuality in your GitHub Pull Request

> This post explains how to set up Microsoft BCQuality, a knowledge base for Business Central AL code quality reviews, in a GitHub pull request workflow using an agentic workflow. It provides step-by-step instructions to implement automated code quality checks without blocking merges.

[Read the post](https://thatnavguy.com/blog/2026/implement-bcquality-agentic-workflow-business-central/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-08-20 · 423 words · tier community · **unreviewed** (machine-generated)

## Key points

- BCQuality is a reference library covering AL code quality best practices in correctness, maintainability, readability, performance, and testability
- GitHub agentic workflows can automatically review AL code changes and post advisory comments on pull requests
- Implementation requires three steps: copy the workflow file, place it in .github/workflows/, and compile it with gh aw compile
- The workflow can use either the public Microsoft BCQuality repository or a private internal clone with proper authentication
- Reviews are advisory only and do not block merges, providing additional review coverage without disrupting development flow

## Quotes

- "Think of it as a reference library for Business Central best practices around correctness, maintainability, readability, performance, and testability." (Defines what BCQuality provides as a knowledge base for consistent code quality standards)
- "It does not block your merge. It gives your team another set of eyes." (Explains the non-intrusive nature of the review process, allowing teams to maintain development velocity)
- "If you already use pull requests for AL changes, this is an easy upgrade." (Shows that adoption fits naturally into existing workflows with minimal friction)

## Context

- Features: BCQuality advisory review, agentic workflow integration, pull request automation, AL code quality checking

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
