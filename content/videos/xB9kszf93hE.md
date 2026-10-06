---
id: video/xB9kszf93hE
type: video
title: "Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)"
summary: Part 1 of an agent testing series on why AI evaluations matter in Business Central. It covers how AI testing differs from deterministic testing, and introduces programmatic data-driven tests defined in YAML, LLM-as-judge evaluation, and agent benchmarking.
tier: official
language: en
tags:
  - agent testing
  - ai evaluations
  - non-deterministic behavior
  - test automation
  - data-driven testing
  - benchmark
  - ai safety
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T14:04:33.050Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 549770fee5a0c0190d1b83cd41a08253bf51a04c66a1e7f624e96e5b59b92be6
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=xB9kszf93hE&t=4s
    title: "Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)"
    date: "2026-06-29T12:57:17.000Z"
    commit: null
    t: 4
    quote: the important part is not necessarily how good your prompt is or your instructions, but how good your evaluations are
  - kind: video
    url: https://www.youtube.com/watch?v=xB9kszf93hE&t=106s
    title: "Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)"
    date: "2026-06-29T12:57:17.000Z"
    commit: null
    t: 106
    quote: AI is different in that AI has non-deterministic behavior. The uh the inputs will vary.
  - kind: video
    url: https://www.youtube.com/watch?v=xB9kszf93hE&t=157s
    title: "Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)"
    date: "2026-06-29T12:57:17.000Z"
    commit: null
    t: 157
    quote: the behavior isn't repeatable, and the quality is subjective, and the metrics actually matter more than just a pass-fail
  - kind: video
    url: https://www.youtube.com/watch?v=xB9kszf93hE&t=200s
    title: "Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)"
    date: "2026-06-29T12:57:17.000Z"
    commit: null
    t: 200
    quote: you need to program the tests in a deterministic way. You can have variation in the input.
  - kind: video
    url: https://www.youtube.com/watch?v=xB9kszf93hE&t=215s
    title: "Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)"
    date: "2026-06-29T12:57:17.000Z"
    commit: null
    t: 215
    quote: building it in AI AIL and using um data-driven via YAML gives you a framework for basically testing in a deterministic way
  - kind: video
    url: https://www.youtube.com/watch?v=xB9kszf93hE&t=273s
    title: "Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)"
    date: "2026-06-29T12:57:17.000Z"
    commit: null
    t: 273
    quote: you can use LLMs to try to judge, okay, I asked for this, does the answer reflect what I asked for?
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: xB9kszf93hE
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=xB9kszf93hE
published_at: "2026-06-29T12:57:17.000Z"
duration_s: 326
captions: full
audience:
  - developer
  - functional consultant
  - decision maker
chapters:
  - t: 0
    title: Introduction to AI evaluations
  - t: 31
    title: Traditional testing approaches
  - t: 92
    title: Why AI testing differs from traditional testing
  - t: 157
    title: Types of evaluations for AI
  - t: 186
    title: Programmatic and data-driven testing
  - t: 227
    title: Using LLMs to judge outputs
  - t: 273
    title: Advanced benchmarking scenarios
features:
  - name: AI evaluations framework
    status: unclear
    t: 4
    verified: false
  - name: Programmatic evaluation with data-driven testing via YAML
    status: unclear
    t: 200
    verified: false
  - name: LLM-based output evaluation
    status: unclear
    t: 249
    verified: false
  - name: Agent benchmarking and observability
    status: unclear
    t: 289
    verified: false
objects_mentioned: []
quotes:
  - t: 4
    text: the important part is not necessarily how good your prompt is or your instructions, but how good your evaluations are
    check: exact
  - t: 106
    text: AI is different in that AI has non-deterministic behavior. The uh the inputs will vary.
    check: exact
  - t: 157
    text: the behavior isn't repeatable, and the quality is subjective, and the metrics actually matter more than just a pass-fail
    check: exact
  - t: 200
    text: you need to program the tests in a deterministic way. You can have variation in the input.
    check: exact
  - t: 215
    text: building it in AI AIL and using um data-driven via YAML gives you a framework for basically testing in a deterministic way
    check: exact
  - t: 273
    text: you can use LLMs to try to judge, okay, I asked for this, does the answer reflect what I asked for?
    check: exact
---

# Getting Started With Agent Testing: Why Are Evaluations Important? (Part 1)

> Part 1 of an agent testing series on why AI evaluations matter in Business Central. It covers how AI testing differs from deterministic testing, and introduces programmatic data-driven tests defined in YAML, LLM-as-judge evaluation, and agent benchmarking.

[Watch on YouTube](https://www.youtube.com/watch?v=xB9kszf93hE) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-06-29 · 5:26 · tier official · **unreviewed** (machine-generated)

## Overview

This five-minute introduction explains why evaluations matter when building AI features and agents. The speaker argues that the quality of the evaluations matters more than the quality of the prompt or instructions. Traditional tests assume deterministic behavior, while AI has non-deterministic behavior, varying inputs, and subjective quality, so metrics matter more than a simple pass or fail.

The video then outlines the types of evaluations. Programmatic evaluation builds tests in a deterministic way, with variation in the input, using data-driven test cases defined in YAML. LLM-based evaluation has a language model judge whether an output, such as an email or a product description, reflects what was asked. Benchmarking agents across setups, with metrics like latency, cost and error rates, is mentioned only briefly and is left for later content.

## Key points

- The speaker's central claim: the important part is not how good the prompt or instructions are, but how good the evaluations are.
- AI differs from traditional testing because behavior is non-deterministic, inputs vary, results are not repeatable, and quality is subjective.
- For AI features, metrics matter more than a simple pass-fail result.
- Programmatic evaluation: write the tests in a deterministic way, with variation in input, using data-driven test cases defined in YAML.
- LLM-based evaluation: use a language model to check whether the answer reflects what was asked, for example for generated emails, product descriptions or project descriptions.
- Benchmarking multiple agents and observing latency, cost and error rates is introduced only briefly and is left for later content.
- This is part 1 of a series; the speaker says the main focus is on the second part.

## Chapters

- [0:00](https://www.youtube.com/watch?v=xB9kszf93hE&t=0s) Introduction to AI evaluations
- [0:31](https://www.youtube.com/watch?v=xB9kszf93hE&t=31s) Traditional testing approaches
- [1:32](https://www.youtube.com/watch?v=xB9kszf93hE&t=92s) Why AI testing differs from traditional testing
- [2:37](https://www.youtube.com/watch?v=xB9kszf93hE&t=157s) Types of evaluations for AI
- [3:06](https://www.youtube.com/watch?v=xB9kszf93hE&t=186s) Programmatic and data-driven testing
- [3:47](https://www.youtube.com/watch?v=xB9kszf93hE&t=227s) Using LLMs to judge outputs
- [4:33](https://www.youtube.com/watch?v=xB9kszf93hE&t=273s) Advanced benchmarking scenarios

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| AI evaluations framework | status not stated | [0:04](https://www.youtube.com/watch?v=xB9kszf93hE&t=4s) |  |
| Programmatic evaluation with data-driven testing via YAML | status not stated | [3:20](https://www.youtube.com/watch?v=xB9kszf93hE&t=200s) |  |
| LLM-based output evaluation | status not stated | [4:09](https://www.youtube.com/watch?v=xB9kszf93hE&t=249s) |  |
| Agent benchmarking and observability | status not stated | [4:49](https://www.youtube.com/watch?v=xB9kszf93hE&t=289s) |  |

## Quotes

- [0:04](https://www.youtube.com/watch?v=xB9kszf93hE&t=4s) "the important part is not necessarily how good your prompt is or your instructions, but how good your evaluations are"
- [1:46](https://www.youtube.com/watch?v=xB9kszf93hE&t=106s) "AI is different in that AI has non-deterministic behavior. The uh the inputs will vary."
- [2:37](https://www.youtube.com/watch?v=xB9kszf93hE&t=157s) "the behavior isn't repeatable, and the quality is subjective, and the metrics actually matter more than just a pass-fail"
- [3:20](https://www.youtube.com/watch?v=xB9kszf93hE&t=200s) "you need to program the tests in a deterministic way. You can have variation in the input."
- [3:35](https://www.youtube.com/watch?v=xB9kszf93hE&t=215s) "building it in AI AIL and using um data-driven via YAML gives you a framework for basically testing in a deterministic way"
- [4:33](https://www.youtube.com/watch?v=xB9kszf93hE&t=273s) "you can use LLMs to try to judge, okay, I asked for this, does the answer reflect what I asked for?"

## Disclaimers in the video

- [5:00](https://www.youtube.com/watch?v=xB9kszf93hE&t=300s) not-in-this-release: But we're not really going to cover that today. The main focus is on the on the second part.

Presenters (as heard): Nikola.
