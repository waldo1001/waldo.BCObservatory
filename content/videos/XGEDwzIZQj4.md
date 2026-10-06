---
id: video/XGEDwzIZQj4
type: video
title: "What's New: BC-Bench (2026 release wave 1)"
summary: BC-Bench is a benchmarking tool for AI coding agents fixing real Business Central AL bugs from Microsoft's backlog. The video covers how it works, the leaderboard metrics (mean resolution rate, pass at five, execution time), and how to access or fork the MIT-licensed GitHub repository.
tier: official
language: en
tags:
  - ai coding agents
  - benchmarking
  - bug fixing
  - mcp servers
  - llm models
  - performance measurement
  - business central development
  - al development
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:01:13.433Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 5191ddc92fb18e86b630dff84541cb72c3c9b40b8d0f3a0ce71bdad1c0f94e06
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=XGEDwzIZQj4&t=40s
    title: "What's New: BC-Bench (2026 release wave 1)"
    date: "2026-04-01T12:01:22.000Z"
    commit: null
    t: 40
    quote: To find out which combination is the best, we've developed a benchmarking tool that lets us test all these combinations as an agent solves
  - kind: video
    url: https://www.youtube.com/watch?v=XGEDwzIZQj4&t=141s
    title: "What's New: BC-Bench (2026 release wave 1)"
    date: "2026-04-01T12:01:22.000Z"
    commit: null
    t: 141
    quote: The reality here is that general coding benchmarks like SweetBench do not reflect the realities that a Business Central developer faces every day.
  - kind: video
    url: https://www.youtube.com/watch?v=XGEDwzIZQj4&t=181s
    title: "What's New: BC-Bench (2026 release wave 1)"
    date: "2026-04-01T12:01:22.000Z"
    commit: null
    t: 181
    quote: Whereas in AL, we only have 330 as of the time of this recording.
  - kind: video
    url: https://www.youtube.com/watch?v=XGEDwzIZQj4&t=447s
    title: "What's New: BC-Bench (2026 release wave 1)"
    date: "2026-04-01T12:01:22.000Z"
    commit: null
    t: 447
    quote: This specific setup managed to achieve 68.5% resolution rate on average, meaning on average of five runs, it resolved 68% of the all the
  - kind: video
    url: https://www.youtube.com/watch?v=XGEDwzIZQj4&t=527s
    title: "What's New: BC-Bench (2026 release wave 1)"
    date: "2026-04-01T12:01:22.000Z"
    commit: null
    t: 527
    quote: We cannot confidently say which one of the setup is better because, well, it could be a fluke because of those five runs.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: XGEDwzIZQj4
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=XGEDwzIZQj4
published_at: "2026-04-01T12:01:22.000Z"
duration_s: 785
captions: full
audience:
  - developer
  - partner
  - decision maker
chapters:
  - t: 0
    title: Introduction to BC Bench and its purpose
  - t: 94
    title: Why Business Central needs its own benchmark
  - t: 166
    title: How BC Bench works with bug-fixing methodology
  - t: 286
    title: Getting started with BC Bench and accessing the tool
  - t: 376
    title: Leaderboard results and interpreting the metrics
  - t: 609
    title: Model improvements over time and customization options
features:
  - name: BC Bench benchmarking tool
    status: unclear
    t: 40
    verified: false
    status_source: video
  - name: BC Bench bug-fixing dataset
    status: unclear
    t: 240
    verified: false
    status_source: video
  - name: Mean resolution rate with confidence intervals
    status: unclear
    t: 422
    verified: false
    status_source: video
  - name: Pass at five consistency metric
    status: unclear
    t: 562
    verified: false
    status_source: video
  - name: Average execution time metric
    status: unclear
    t: 598
    verified: false
    status_source: video
  - name: GitHub repository access for BC Bench
    status: unclear
    t: 297
    verified: false
    status_source: video
  - name: Model comparison across AI providers
    status: unclear
    t: 388
    verified: false
    status_source: video
  - name: Custom dataset contribution capability
    status: unclear
    t: 722
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 40
    text: To find out which combination is the best, we've developed a benchmarking tool that lets us test all these combinations as an agent solves
    check: exact
  - t: 141
    text: The reality here is that general coding benchmarks like SweetBench do not reflect the realities that a Business Central developer faces every day.
    check: exact
  - t: 181
    text: Whereas in AL, we only have 330 as of the time of this recording.
    check: exact
  - t: 447
    text: This specific setup managed to achieve 68.5% resolution rate on average, meaning on average of five runs, it resolved 68% of the all the
    check: exact
  - t: 527
    text: We cannot confidently say which one of the setup is better because, well, it could be a fluke because of those five runs.
    check: exact
---

# What's New: BC-Bench (2026 release wave 1)

> BC-Bench is a benchmarking tool for AI coding agents fixing real Business Central AL bugs from Microsoft's backlog. The video covers how it works, the leaderboard metrics (mean resolution rate, pass at five, execution time), and how to access or fork the MIT-licensed GitHub repository.

[Watch on YouTube](https://www.youtube.com/watch?v=XGEDwzIZQj4) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-04-01 · 13:05 · tier official · **unreviewed** (machine-generated)

## Overview

The video presents BC-Bench, a reproducible evaluation framework that tests which combination of LLM model, MCP server, instructions and agent harness works best for AL development. General coding benchmarks such as SWE-bench do not reflect what a Business Central developer faces, and the AL dataset is smaller (330 tasks at recording time). Each task is built from a real bug and includes the problem statement, the unit test written by the BC developer, and the expected fix.

The presenter explains the leaderboard: results are aggregated over five runs because language models are non-deterministic. Overlapping confidence intervals mean two setups cannot be confidently ranked. The video also covers the source repository, the supported harnesses, model comparison across Anthropic and OpenAI models, and how to contribute or fork with a custom dataset.

## Key points

- BC-Bench tests combinations of LLM model, MCP server, instructions and agent harness on real Business Central bugs from Microsoft's backlog.
- Each benchmark task contains the bug description and repro steps as the problem statement, the BC developer's unit test, and the expected fix.
- Mean resolution rate is averaged over five runs and shown with a 95% confidence interval; one example setup reached 68.5%.
- If confidence intervals overlap, the setups cannot be confidently compared, since the difference could be a fluke.
- Pass at five measures how consistently the agent resolves the same tasks across all five runs; average execution time is also reported.
- Only Cloud Code and GitHub Copilot harnesses are supported currently; trying it needs a GitHub account and a subscription to one of them.
- The repository is public under the MIT license. You can contribute tasks or fork it and replace the Microsoft-based dataset with your own to benchmark private code.

## Chapters

- [0:00](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=0s) Introduction to BC Bench and its purpose
- [1:34](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=94s) Why Business Central needs its own benchmark
- [2:46](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=166s) How BC Bench works with bug-fixing methodology
- [4:46](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=286s) Getting started with BC Bench and accessing the tool
- [6:16](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=376s) Leaderboard results and interpreting the metrics
- [10:09](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=609s) Model improvements over time and customization options

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| BC Bench benchmarking tool | status not stated, demoed | [0:40](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=40s) |  |
| BC Bench bug-fixing dataset | status not stated, demoed | [4:00](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=240s) |  |
| Mean resolution rate with confidence intervals | status not stated, demoed | [7:02](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=422s) |  |
| Pass at five consistency metric | status not stated, demoed | [9:22](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=562s) |  |
| Average execution time metric | status not stated, demoed | [9:58](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=598s) |  |
| GitHub repository access for BC Bench | status not stated, demoed | [4:57](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=297s) |  |
| Model comparison across AI providers | status not stated, demoed | [6:28](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=388s) |  |
| Custom dataset contribution capability | status not stated | [12:02](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=722s) |  |

## Quotes

- [0:40](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=40s) "To find out which combination is the best, we've developed a benchmarking tool that lets us test all these combinations as an agent solves"
- [2:21](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=141s) "The reality here is that general coding benchmarks like SweetBench do not reflect the realities that a Business Central developer faces every day."
- [3:01](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=181s) "Whereas in AL, we only have 330 as of the time of this recording."
- [7:27](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=447s) "This specific setup managed to achieve 68.5% resolution rate on average, meaning on average of five runs, it resolved 68% of the all the"
- [8:47](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=527s) "We cannot confidently say which one of the setup is better because, well, it could be a fluke because of those five runs."

## Disclaimers in the video

- [0:21](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=21s) other: As more and more development in Business Central AL is done by agents or assisted by agents, there's a need to find out which model which MCP servers, which instructions, and which agent harness is the best combination.
- [7:50](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=470s) other: There are lots of fluctuations on the accuracy between runs because AI models or language models are non-deterministic.
- [10:39](https://www.youtube.com/watch?v=XGEDwzIZQj4&t=639s) other: By the time you are watching this video, you will be exactly a year before GPT-4o model was released.

Presenters (as heard): Joost, Horan.
