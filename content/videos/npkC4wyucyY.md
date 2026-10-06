---
id: video/npkC4wyucyY
type: video
title: What's new in BC-Bench (2026 release wave 2)
summary: BC-Bench is a reproducible evaluation framework for AI coding agents on real AL development tasks. The video covers the bug fixing category (101 tasks, AL MCP server), a contamination check, and the new code review category, and compares agent harnesses and models.
tier: official
language: en
tags:
  - benchmarking
  - ai coding agents
  - bug fixing
  - code review
  - test generation
  - contamination detection
  - al-mcp server
  - bc quality
  - evaluation framework
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T14:56:57.246Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: ee6939f640739778794f1ce45d467487dbabc706b3c1c24b6eba6be0c9242f6d
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=npkC4wyucyY&t=19s
    title: What's new in BC-Bench (2026 release wave 2)
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 19
    quote: BCBench is a reproducible evaluation framework for AI coding agents working on real world AI development task inspired by SVBench
  - kind: video
    url: https://www.youtube.com/watch?v=npkC4wyucyY&t=106s
    title: What's new in BC-Bench (2026 release wave 2)
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 106
    quote: BCbench covers the following categories of AL development work. First of all, there's bug fixing and there's test generation and also there's PR reviews
  - kind: video
    url: https://www.youtube.com/watch?v=npkC4wyucyY&t=257s
    title: What's new in BC-Bench (2026 release wave 2)
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 257
    quote: the pass head five matrix improved almost 10 uh and there's also a significant improvement
  - kind: video
    url: https://www.youtube.com/watch?v=npkC4wyucyY&t=474s
    title: What's new in BC-Bench (2026 release wave 2)
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 474
    quote: they had a chance to memorize our data set and the solutions and as you can see
  - kind: video
    url: https://www.youtube.com/watch?v=npkC4wyucyY&t=526s
    title: What's new in BC-Bench (2026 release wave 2)
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 526
    quote: the motivation for us to introduce use the code view category is because we are getting more and more poll requests on BC apps
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: npkC4wyucyY
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=npkC4wyucyY
published_at: "2026-10-01T00:00:00Z"
duration_s: 887
captions: full
audience:
  - developer
  - partner
  - decision maker
chapters:
  - t: 0
    title: Introduction to BC-Bench and its purpose
  - t: 62
    title: Why BC-Bench matters and coverage areas
  - t: 140
    title: Bug fixing category and AL MCP server
  - t: 226
    title: Bug fixing results and agent harness comparison
  - t: 310
    title: Contamination detection strategy
  - t: 447
    title: Contamination detection results
  - t: 514
    title: Code review category introduction and approaches
  - t: 637
    title: Code review methodology and results
  - t: 774
    title: How to use BC-Bench for your own AL apps
features:
  - name: Bug fixing category
    status: unclear
    t: 166
    verified: false
    status_source: video
  - name: AL MCP server
    status: unclear
    t: 199
    verified: false
    status_source: video
  - name: Pass@5 improvement with MCP
    status: unclear
    t: 226
    verified: false
    status_source: video
  - name: Agent harness comparison
    status: unclear
    t: 280
    verified: false
    status_source: video
  - name: Contamination detection strategy
    status: unclear
    t: 344
    verified: false
    status_source: video
  - name: Contamination results across three models
    status: unclear
    t: 458
    verified: false
    status_source: video
  - name: Code review category
    status: unclear
    t: 514
    verified: false
    status_source: video
  - name: BC Quality plugin
    status: unclear
    t: 587
    verified: false
    status_source: video
  - name: AL review agent
    status: unclear
    t: 620
    verified: false
    status_source: video
  - name: LM-as-judge for code review evaluation
    status: unclear
    t: 744
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 19
    text: BCBench is a reproducible evaluation framework for AI coding agents working on real world AI development task inspired by SVBench
    check: exact
  - t: 106
    text: BCbench covers the following categories of AL development work. First of all, there's bug fixing and there's test generation and also there's PR reviews
    check: exact
  - t: 257
    text: the pass head five matrix improved almost 10 uh and there's also a significant improvement
    check: fuzzy
  - t: 474
    text: they had a chance to memorize our data set and the solutions and as you can see
    check: fuzzy
  - t: 526
    text: the motivation for us to introduce use the code view category is because we are getting more and more poll requests on BC apps
    check: exact
---

# What's new in BC-Bench (2026 release wave 2)

> BC-Bench is a reproducible evaluation framework for AI coding agents on real AL development tasks. The video covers the bug fixing category (101 tasks, AL MCP server), a contamination check, and the new code review category, and compares agent harnesses and models.

[Watch on YouTube](https://www.youtube.com/watch?v=npkC4wyucyY) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-10-01 · 14:47 · tier official · **unreviewed** (machine-generated)

## Overview

BC-Bench is an evaluation framework for AI coding agents working on AL development, inspired by SWE-bench. It covers bug fixing, test generation and PR reviews. The video walks through the bug fixing category, which uses 101 tasks taken from real BC app repositories where human engineers solved the problems, and shows how the AL MCP server affects results.

It then explains how the team checks whether models memorized the public data set, and introduces the code review category with three approaches. Code review results were still being finalized at recording time. The last chapter covers how to use BC-Bench for your own AL apps.

## Key points

- Bug fixing category: an agent fixes a bug in the real codebase, using 101 tasks from real BC app repositories solved by human engineers.
- The AL MCP server exposes compiling, publishing and simple search to coding agents, so they can work without opening Visual Studio Code.
- With GitHub Copilot CLI and Claude Opus, the AL MCP server improved pass@5 by almost 10% and clearly improved mean resolution rate. Tasks take longer because agents publish apps and run tests.
- Comparing agent harnesses (GitHub Copilot CLI vs Claude Code) with the same models showed no significant difference, which suggests model choice matters more than harness choice.
- Contamination check: three models with knowledge cutoffs after BC-Bench went public were tested, and only 1 of 101 tasks matched across all three. Agents can deduce file paths from a bug description without having memorized the solution. Contamination will be monitored over time.
- Code review category evaluates AI review of AL pull requests with three approaches: baseline GitHub Copilot UI, the BC Quality plugin on Copilot CLI, and a specialized AL review agent focused on security, privacy and performance.
- Code review quality is judged with an LM-as-judge that checks whether generated comments are semantically equivalent to the expected ones. Final results were not ready at recording time and are to be checked on the GitHub repository.

## Chapters

- [0:00](https://www.youtube.com/watch?v=npkC4wyucyY&t=0s) Introduction to BC-Bench and its purpose
- [1:02](https://www.youtube.com/watch?v=npkC4wyucyY&t=62s) Why BC-Bench matters and coverage areas
- [2:20](https://www.youtube.com/watch?v=npkC4wyucyY&t=140s) Bug fixing category and AL MCP server
- [3:46](https://www.youtube.com/watch?v=npkC4wyucyY&t=226s) Bug fixing results and agent harness comparison
- [5:10](https://www.youtube.com/watch?v=npkC4wyucyY&t=310s) Contamination detection strategy
- [7:27](https://www.youtube.com/watch?v=npkC4wyucyY&t=447s) Contamination detection results
- [8:34](https://www.youtube.com/watch?v=npkC4wyucyY&t=514s) Code review category introduction and approaches
- [10:37](https://www.youtube.com/watch?v=npkC4wyucyY&t=637s) Code review methodology and results
- [12:54](https://www.youtube.com/watch?v=npkC4wyucyY&t=774s) How to use BC-Bench for your own AL apps

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Bug fixing category | status not stated, demoed | [2:46](https://www.youtube.com/watch?v=npkC4wyucyY&t=166s) |  |
| AL MCP server | status not stated | [3:19](https://www.youtube.com/watch?v=npkC4wyucyY&t=199s) |  |
| Pass@5 improvement with MCP | status not stated, demoed | [3:46](https://www.youtube.com/watch?v=npkC4wyucyY&t=226s) |  |
| Agent harness comparison | status not stated, demoed | [4:40](https://www.youtube.com/watch?v=npkC4wyucyY&t=280s) |  |
| Contamination detection strategy | status not stated, demoed | [5:44](https://www.youtube.com/watch?v=npkC4wyucyY&t=344s) |  |
| Contamination results across three models | status not stated, demoed | [7:38](https://www.youtube.com/watch?v=npkC4wyucyY&t=458s) |  |
| Code review category | status not stated, demoed | [8:34](https://www.youtube.com/watch?v=npkC4wyucyY&t=514s) |  |
| BC Quality plugin | status not stated, demoed | [9:47](https://www.youtube.com/watch?v=npkC4wyucyY&t=587s) |  |
| AL review agent | status not stated, demoed | [10:20](https://www.youtube.com/watch?v=npkC4wyucyY&t=620s) |  |
| LM-as-judge for code review evaluation | status not stated, demoed | [12:24](https://www.youtube.com/watch?v=npkC4wyucyY&t=744s) |  |

## Quotes

- [0:19](https://www.youtube.com/watch?v=npkC4wyucyY&t=19s) "BCBench is a reproducible evaluation framework for AI coding agents working on real world AI development task inspired by SVBench"
- [1:46](https://www.youtube.com/watch?v=npkC4wyucyY&t=106s) "BCbench covers the following categories of AL development work. First of all, there's bug fixing and there's test generation and also there's PR reviews"
- [4:17](https://www.youtube.com/watch?v=npkC4wyucyY&t=257s) "the pass head five matrix improved almost 10 uh and there's also a significant improvement"
- [7:54](https://www.youtube.com/watch?v=npkC4wyucyY&t=474s) "they had a chance to memorize our data set and the solutions and as you can see"
- [8:46](https://www.youtube.com/watch?v=npkC4wyucyY&t=526s) "the motivation for us to introduce use the code view category is because we are getting more and more poll requests on BC apps"

## Disclaimers in the video

- [12:54](https://www.youtube.com/watch?v=npkC4wyucyY&t=774s) not-in-this-release: At the time of the recording of this session we are still working hard on the results for code review so please check back on our GitHub repository if you're curious

Presenters (as heard): Yos, Mharen, Javan.
