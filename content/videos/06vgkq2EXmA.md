---
id: video/06vgkq2EXmA
type: video
title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
summary: "Copilot Chat in Business Central: how Microsoft built it, covering architecture, intent condensation, data grounding, meta prompts, jailbreak prevention, and test-driven prompt engineering. Copilot Chat is in public preview and available only in US environments, per the video."
tier: official
language: en
tags:
  - copilot chat
  - prompt engineering
  - ai architecture
  - intent detection
  - data grounding
  - multi-turn conversation
  - system prompts
  - security
  - jailbreak prevention
  - test-driven development
  - harmful input detection
  - llm evaluation
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:12:03.732Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: ca837ad4ce7d656f0c16c36c24eaf3e55211a6f4c94cd302d027eda0b68531be
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=171s
    title: "Copilot Chat: preview"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 171
    quote: it's currently in a public preview um and um it's only available in US environments for now
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=50s
    title: "Marketing Text Suggestions: generally available"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 50
    quote: we came up with the idea for the marketing text suggestions at the start uh and obviously we then released that as a feature
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=50s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 50
    quote: about 18 months ago uh we started like playing around with some ideas after seeing like the launch of chat GPT
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=90s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 90
    quote: right now uh obviously it's like an open chat so you can type whatever but we we have kind of scoped it down to
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=171s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 171
    quote: it was the last release wave so 2024 release Wave 1 yes um it's currently in a public preview um and um it's only
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=232s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 232
    quote: Bing chat and um co-pilot chat with business Central are kind of similar in the sense that they both use external data sources to
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=331s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 331
    quote: we take the whole conversation and we actually we go to the model and and ask it to um bring condense this whole conversation
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=534s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 534
    quote: the model itself is effectively a blackbox um so the best way to do it is to you know go back to your Basics
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=751s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 751
    quote: a meta prompt right now is a it's effectively a prompt that is not visible to the end user
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=811s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 811
    quote: if uh if it's a user role uh that that the prompt is saying like ignore the instructions the model knows that like w
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=811s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 811
    quote: if it's a user role uh that that the prompt is saying like ignore the instructions the model knows that like w this is
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=929s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 929
    quote: so it's it's like thousands of uh inputs um but but um that we know can potentially produce some harmful response or undesirable response
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=970s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 970
    quote: we set two L&M to talk to each other our own our own feature the BC co-pilot chart right and we have another LM
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=1071s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 1071
    quote: so just to summarize there actually three LMS involved you say so there's one asking the question yeah to BC chat right yeah uh
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=1112s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 1112
    quote: we have to automate these things because uh we see like when model upgrades things typically do change um it's not that it's
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=1173s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 1173
    quote: it's definitely it is it is very different to kind of your classical uh software engineering um because uh yeah you you have this
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=1270s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 1270
    quote: you can you can ask it like please be more concise with this language it'll fix any kind of grammatical issues and that kind
  - kind: video
    url: https://www.youtube.com/watch?v=06vgkq2EXmA&t=1493s
    title: "Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central"
    date: "2024-08-02T06:57:57.000Z"
    commit: null
    t: 1493
    quote: you could put them in the in say your key Vault if if you're an appsource extension um and that way when you distribute
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 06vgkq2EXmA
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=06vgkq2EXmA
published_at: "2024-08-02T06:57:57.000Z"
duration_s: 1560
captions: full
audience:
  - developer
  - partner
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Copilot Chat Overview
  - t: 90
    title: Copilot Chat Capabilities and Release Status
  - t: 171
    title: Architecture and Data Grounding
  - t: 291
    title: Intent Recognition and Skill Selection
  - t: 412
    title: Prompt Engineering Fundamentals
  - t: 534
    title: Testing and Development Practices
  - t: 650
    title: System Prompts and User Prompts
  - t: 771
    title: Jailbreak Prevention and Security
  - t: 889
    title: Testing Harmful Inputs with Simulated Datasets
  - t: 1011
    title: Automated Evaluation of AI Responses at Scale
  - t: 1112
    title: Prompt Engineering Versus Traditional Code Development
  - t: 1290
    title: Using LLMs to Improve and Refine Prompts
  - t: 1391
    title: Getting Started with AI Development in Business Central
features:
  - name: Copilot Chat
    status: preview
    t: 10
    verified: true
    status_source: video
  - name: Marketing Text Suggestions
    status: ga
    t: 50
    verified: true
    status_source: video
  - name: Intent Condensation
    status: unclear
    t: 311
    verified: false
    status_source: video
  - name: Find and Go Capability
    status: unclear
    t: 371
    verified: false
    status_source: video
  - name: Prompt Engineering with Test-Driven Development
    status: unclear
    t: 514
    verified: false
    status_source: video
  - name: Azure AI Studio Integration
    status: unclear
    t: 630
    verified: false
    status_source: video
  - name: Meta Prompt Architecture
    status: unclear
    t: 731
    verified: false
    status_source: video
  - name: Jailbreak Prevention
    status: unclear
    t: 791
    verified: false
    status_source: video
  - name: Harmful Input Dataset Testing
    status: unclear
    t: 909
    verified: false
    status_source: video
  - name: LLM-Powered Jailbreak Simulation
    status: unclear
    t: 950
    verified: false
    status_source: video
  - name: Automated LLM-Based Response Evaluation
    status: unclear
    t: 1051
    verified: false
    status_source: video
  - name: Prompt Engineering for AI Features
    status: unclear
    t: 1112
    verified: false
    status_source: video
  - name: LLM-Assisted Prompt Improvement
    status: unclear
    t: 1270
    verified: false
    status_source: video
  - name: Copilot Developer Tools
    status: unclear
    t: 1432
    verified: false
    status_source: video
  - name: Prompt Storage in Key Vault
    status: unclear
    t: 1493
    verified: false
    status_source: video
objects_mentioned:
  - other learn.microsoft.com documentation
  - other Copilot Chat
  - other Copilot Developer Tools
quotes:
  - t: 50
    text: about 18 months ago uh we started like playing around with some ideas after seeing like the launch of chat GPT
    check: exact
  - t: 90
    text: right now uh obviously it's like an open chat so you can type whatever but we we have kind of scoped it down to
    check: exact
  - t: 171
    text: it was the last release wave so 2024 release Wave 1 yes um it's currently in a public preview um and um it's only
    check: exact
  - t: 232
    text: Bing chat and um co-pilot chat with business Central are kind of similar in the sense that they both use external data sources to
    check: exact
  - t: 331
    text: we take the whole conversation and we actually we go to the model and and ask it to um bring condense this whole conversation
    check: exact
  - t: 534
    text: the model itself is effectively a blackbox um so the best way to do it is to you know go back to your Basics
    check: exact
  - t: 751
    text: a meta prompt right now is a it's effectively a prompt that is not visible to the end user
    check: exact
  - t: 811
    text: if uh if it's a user role uh that that the prompt is saying like ignore the instructions the model knows that like w
    check: exact
  - t: 811
    text: if it's a user role uh that that the prompt is saying like ignore the instructions the model knows that like w this is
    check: exact
  - t: 929
    text: so it's it's like thousands of uh inputs um but but um that we know can potentially produce some harmful response or undesirable response
    check: exact
  - t: 970
    text: we set two L&M to talk to each other our own our own feature the BC co-pilot chart right and we have another LM
    check: exact
  - t: 1071
    text: so just to summarize there actually three LMS involved you say so there's one asking the question yeah to BC chat right yeah uh
    check: exact
  - t: 1112
    text: we have to automate these things because uh we see like when model upgrades things typically do change um it's not that it's
    check: fuzzy
  - t: 1173
    text: it's definitely it is it is very different to kind of your classical uh software engineering um because uh yeah you you have this
    check: exact
  - t: 1270
    text: you can you can ask it like please be more concise with this language it'll fix any kind of grammatical issues and that kind
    check: exact
  - t: 1493
    text: you could put them in the in say your key Vault if if you're an appsource extension um and that way when you distribute
    check: exact
---

# Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central

> Copilot Chat in Business Central: how Microsoft built it, covering architecture, intent condensation, data grounding, meta prompts, jailbreak prevention, and test-driven prompt engineering. Copilot Chat is in public preview and available only in US environments, per the video.

[Watch on YouTube](https://www.youtube.com/watch?v=06vgkq2EXmA) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-08-02 · 26:00 · tier official · **unreviewed** (machine-generated)

## Overview

Episode 4 of Business Central Under the Hood (published 2024-08-02, 26 minutes) walks through how the team built Copilot Chat. It started about 18 months before the recording, after the launch of ChatGPT, and followed earlier AI work such as marketing text suggestions. Copilot Chat is an open chat for looking up documentation, understanding terminology and finding data. It is in public preview, US environments only.

The speakers explain how the conversation is condensed into a single intent message, how skills are selected, and how meta prompts, system prompts and user prompts are layered. They then cover testing: test-driven prompt development, datasets of thousands of harmful inputs, two LLMs simulating jailbreak conversations, and a third LLM grading the results. They close with advice for partners who want to build their own AI features.

## Key points

- Copilot Chat is in public preview and, at recording time, only available in US environments. The team hoped to roll it out to more regions during the wave.
- Intent condensation sends the whole conversation to the model to produce one chat message with the user's current intent. Other components then receive that message.
- Because the model is a blackbox, prompts are developed test-first. Datasets of inputs for supported question types are checked with assertions, for example that the right skill is chosen or off-topic queries are handled.
- Jailbreak prevention uses user roles versus system roles. User input goes into user prompts, and scope is reinforced in system prompts. The speakers describe this as an ongoing challenge.
- Security testing runs thousands of potentially harmful inputs through the test suite. Two LLMs (Copilot Chat and an attacker) converse, and a third LLM grades the responses against harm categories.
- Automated grading is needed because manual grading does not scale and behavior changes when models are upgraded.
- Partners can use Copilot Developer Tools for boilerplate code, model calling and consistent UI. For AppSource extensions, prompts can be stored in Key Vault to protect them as IP.

## Chapters

- [0:00](https://www.youtube.com/watch?v=06vgkq2EXmA&t=0s) Introduction and Copilot Chat Overview
- [1:30](https://www.youtube.com/watch?v=06vgkq2EXmA&t=90s) Copilot Chat Capabilities and Release Status
- [2:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=171s) Architecture and Data Grounding
- [4:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=291s) Intent Recognition and Skill Selection
- [6:52](https://www.youtube.com/watch?v=06vgkq2EXmA&t=412s) Prompt Engineering Fundamentals
- [8:54](https://www.youtube.com/watch?v=06vgkq2EXmA&t=534s) Testing and Development Practices
- [10:50](https://www.youtube.com/watch?v=06vgkq2EXmA&t=650s) System Prompts and User Prompts
- [12:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=771s) Jailbreak Prevention and Security
- [14:49](https://www.youtube.com/watch?v=06vgkq2EXmA&t=889s) Testing Harmful Inputs with Simulated Datasets
- [16:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1011s) Automated Evaluation of AI Responses at Scale
- [18:32](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1112s) Prompt Engineering Versus Traditional Code Development
- [21:30](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1290s) Using LLMs to Improve and Refine Prompts
- [23:11](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1391s) Getting Started with AI Development in Business Central

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Copilot Chat | preview | [0:10](https://www.youtube.com/watch?v=06vgkq2EXmA&t=10s) | "it's currently in a public preview um and um it's only available in US environments for now" ([2:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=171s)) |
| Marketing Text Suggestions | generally available | [0:50](https://www.youtube.com/watch?v=06vgkq2EXmA&t=50s) | "we came up with the idea for the marketing text suggestions at the start uh and obviously we then released that as a feature" ([0:50](https://www.youtube.com/watch?v=06vgkq2EXmA&t=50s)) |
| Intent Condensation | status not stated | [5:11](https://www.youtube.com/watch?v=06vgkq2EXmA&t=311s) |  |
| Find and Go Capability | status not stated | [6:11](https://www.youtube.com/watch?v=06vgkq2EXmA&t=371s) |  |
| Prompt Engineering with Test-Driven Development | status not stated | [8:34](https://www.youtube.com/watch?v=06vgkq2EXmA&t=514s) |  |
| Azure AI Studio Integration | status not stated | [10:30](https://www.youtube.com/watch?v=06vgkq2EXmA&t=630s) |  |
| Meta Prompt Architecture | status not stated | [12:11](https://www.youtube.com/watch?v=06vgkq2EXmA&t=731s) |  |
| Jailbreak Prevention | status not stated | [13:11](https://www.youtube.com/watch?v=06vgkq2EXmA&t=791s) |  |
| Harmful Input Dataset Testing | status not stated | [15:09](https://www.youtube.com/watch?v=06vgkq2EXmA&t=909s) |  |
| LLM-Powered Jailbreak Simulation | status not stated | [15:50](https://www.youtube.com/watch?v=06vgkq2EXmA&t=950s) |  |
| Automated LLM-Based Response Evaluation | status not stated | [17:31](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1051s) |  |
| Prompt Engineering for AI Features | status not stated | [18:32](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1112s) |  |
| LLM-Assisted Prompt Improvement | status not stated | [21:10](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1270s) |  |
| Copilot Developer Tools | status not stated | [23:52](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1432s) |  |
| Prompt Storage in Key Vault | status not stated | [24:53](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1493s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "learn.microsoft.com documentation" at [4:12](https://www.youtube.com/watch?v=06vgkq2EXmA&t=252s)
- other "Copilot Chat" at [13:31](https://www.youtube.com/watch?v=06vgkq2EXmA&t=811s)
- other "Copilot Developer Tools" at [24:13](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1453s)

## Quotes

- [0:50](https://www.youtube.com/watch?v=06vgkq2EXmA&t=50s) "about 18 months ago uh we started like playing around with some ideas after seeing like the launch of chat GPT"
- [1:30](https://www.youtube.com/watch?v=06vgkq2EXmA&t=90s) "right now uh obviously it's like an open chat so you can type whatever but we we have kind of scoped it down to"
- [2:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=171s) "it was the last release wave so 2024 release Wave 1 yes um it's currently in a public preview um and um it's only"
- [3:52](https://www.youtube.com/watch?v=06vgkq2EXmA&t=232s) "Bing chat and um co-pilot chat with business Central are kind of similar in the sense that they both use external data sources to"
- [5:31](https://www.youtube.com/watch?v=06vgkq2EXmA&t=331s) "we take the whole conversation and we actually we go to the model and and ask it to um bring condense this whole conversation"
- [8:54](https://www.youtube.com/watch?v=06vgkq2EXmA&t=534s) "the model itself is effectively a blackbox um so the best way to do it is to you know go back to your Basics"
- [12:31](https://www.youtube.com/watch?v=06vgkq2EXmA&t=751s) "a meta prompt right now is a it's effectively a prompt that is not visible to the end user"
- [13:31](https://www.youtube.com/watch?v=06vgkq2EXmA&t=811s) "if uh if it's a user role uh that that the prompt is saying like ignore the instructions the model knows that like w"
- [13:31](https://www.youtube.com/watch?v=06vgkq2EXmA&t=811s) "if it's a user role uh that that the prompt is saying like ignore the instructions the model knows that like w this is"
- [15:29](https://www.youtube.com/watch?v=06vgkq2EXmA&t=929s) "so it's it's like thousands of uh inputs um but but um that we know can potentially produce some harmful response or undesirable response"
- [16:10](https://www.youtube.com/watch?v=06vgkq2EXmA&t=970s) "we set two L&M to talk to each other our own our own feature the BC co-pilot chart right and we have another LM"
- [17:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1071s) "so just to summarize there actually three LMS involved you say so there's one asking the question yeah to BC chat right yeah uh"
- [18:32](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1112s) "we have to automate these things because uh we see like when model upgrades things typically do change um it's not that it's"
- [19:33](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1173s) "it's definitely it is it is very different to kind of your classical uh software engineering um because uh yeah you you have this"
- [21:10](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1270s) "you can you can ask it like please be more concise with this language it'll fix any kind of grammatical issues and that kind"
- [24:53](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1493s) "you could put them in the in say your key Vault if if you're an appsource extension um and that way when you distribute"

## Disclaimers in the video

- [2:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=171s) preview: it's currently in a public preview um and um it's only available in US environments for now uh but we hope over the wave to roll it out to more regions
- [22:51](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1371s) other: unfortunately that is like part of the our Microsoft uh IP uh at the moment um so uh so no
- [23:11](https://www.youtube.com/watch?v=06vgkq2EXmA&t=1391s) other: but they're definitely not ready for production use um but it gives an idea of kind of the things you can do

Presenters (as heard): Viston Nicholas, Sam.
