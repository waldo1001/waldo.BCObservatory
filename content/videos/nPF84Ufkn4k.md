---
id: video/nPF84Ufkn4k
type: video
title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
summary: "Business Central agent runtime internals: the task execution engine, Logical Client API reuse, memory, grounding validation, loop detection, timeline grouping, multiple prompts and models, and how the team tests accuracy. Covers the sales order and payables agents as examples."
tier: official
language: en
tags:
  - agent runtime
  - task execution engine
  - logical client api
  - llm statelessness
  - agent memory
  - grounding
  - content validation
  - hallucination prevention
  - prompt engineering
  - loop detection
  - agent recovery
  - timeline grouping
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T16:48:01.214Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e04deb164a98b05632b82f0c98976e8c8c4c71b678d0a8b0e35e4bf5c6a4d2e1
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=11s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 11
    quote: we we have a few agents already in Business Central, the sales order agent and and the the payable agent
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=76s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 76
    quote: all the tables for storing your agents tasks, keeping track of what agents are doing
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=187s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 187
    quote: it it has this JSON based API uh that we call the the logical client API that provides all the information necessary
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=498s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 498
    quote: when if you do a pure call to LLM LLM it's it's it's completely stateless. Like every time you do a call to an
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=575s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 575
    quote: the agent runtime remembers for example where you have been, which page you come from, right?
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=806s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 806
    quote: when when an llm generates content um you you want that content uh especially if it contains data to to be grounded
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=806s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 806
    quote: grounding basically um when when an llm generates content um you you want that content uh especially if it contains data to to
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=862s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 862
    quote: instead of running one call to the LLM, you actually do two, right? So, you do first you do generate that content
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=902s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 902
    quote: Yeah. So, this is what's called grounding because you make sure it's grounded in the in the data. Okay. Yeah, that's a very common
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1193s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1193
    quote: I believe we have all in all, correct me if I'm wrong, but the I think we have something like 11 prompts. So, is
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1250s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1250
    quote: Is that fair to say that the execute task prompt we talked about before, that's the more complex That's the most complex of them
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1284s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1284
    quote: We We are using We're not using only one model. Uh, the runtime is using more than one Um, yes, so we some of
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1428s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1428
    quote: what we found, uh, back then was there was a significant increase in in latency. Yeah, so it's a lot slower. Reasoning models, especially
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1484s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1484
    quote: Um, so far we have not found, uh, any immediate benefit. benefit for our use case, but we are constantly evaluating and thinking, um,
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1623s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1623
    quote: The more important thing, first of all, is is making sure that the tests don't break when we switch to a new model, which,
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1638s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1638
    quote: Sometimes you you have to make some tweaks, and otherwise things that were working don't work anymore with again with our specific prompt and
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1754s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1754
    quote: if we only measured on the the one which have the higher accuracy, we would we wouldn't we wouldn't know if it the model
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1890s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1890
    quote: it seems to have been so far it actually seems to indicate there is there is a dependency and correlation between your prompt and
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1902s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1902
    quote: it was when we trying gpt 5 reasoning some of our tests uh for example had a test email saying
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1964s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 1964
    quote: it's not necessarily about us testing that it has performed the exact same steps in the exact same order. It's more that it has
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2134s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 2134
    quote: we are looking into is sort of this this we call it cross-task memory. You could consider it teaching or something as well, where
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2184s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 2184
    quote: the mechanism for when to remember, whether it will ultimately be that you have a checkbox and say remember this when you're providing the
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2366s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 2366
    quote: every tool we give, every prompt change we make might lead to some other scenarios now the LLM making a different decision
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2388s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 2388
    quote: we have also built two agents that have lots of test cases that we can always be running and making sure that are still
  - kind: video
    url: https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2412s
    title: "Business Central Under the Hood episode 13: Inside the Agent Runtime"
    date: "2026-04-17T14:01:32.000Z"
    commit: null
    t: 2412
    quote: usually changes that only impact accuracy is are are changes that are not necessarily visible
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: nPF84Ufkn4k
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=nPF84Ufkn4k
published_at: "2026-04-17T14:01:32.000Z"
duration_s: 2497
captions: full
audience:
  - developer
  - partner
  - functional consultant
  - decision maker
chapters:
  - t: 0
    title: Introduction to the Agent Runtime
  - t: 52
    title: Agent Runtime Architecture and Components
  - t: 133
    title: The Logical Client API and Agent Interaction
  - t: 268
    title: Agent Behavior and Memory Management
  - t: 395
    title: Agent Task Execution Workflow and State
  - t: 626
    title: Supporting Prompts and Content Analysis
  - t: 739
    title: "Grounding: Validating LLM Output Against Data"
  - t: 915
    title: Loop Detection and Agent Recovery
  - t: 1026
    title: Validation Error Handling and User Intervention
  - t: 1083
    title: Timeline Grouping and Task Summarization
  - t: 1182
    title: Multiple Prompts in Runtime Architecture and Model Selection
  - t: 1371
    title: Model Evolution and Testing Strategies
  - t: 1679
    title: Accuracy Testing and Non-Deterministic LLM Behavior
  - t: 2070
    title: MCP Tool Integration and Cross-Task Memory
  - t: 2280
    title: Future Improvements and Impact on Partners
features:
  - name: Agent Runtime
    status: unclear
    t: 11
    verified: false
    status_source: video
  - name: Agent SDK
    status: unclear
    t: 133
    verified: false
    status_source: video
  - name: Logical Client API
    status: unclear
    t: 158
    verified: false
    status_source: video
  - name: Agent Memory System
    status: unclear
    t: 348
    verified: false
    status_source: video
  - name: Execute Task Prompt
    status: unclear
    t: 321
    verified: false
    status_source: video
  - name: Input Content Analysis
    status: unclear
    t: 687
    verified: false
    status_source: video
  - name: Output Content Validation
    status: unclear
    t: 739
    verified: false
    status_source: video
  - name: Grounding Validation
    status: unclear
    t: 793
    verified: false
    status_source: video
  - name: Loop Detection in Agent Execution
    status: unclear
    t: 927
    verified: false
    status_source: video
  - name: Agent Intervention Prompts
    status: unclear
    t: 1003
    verified: false
    status_source: video
  - name: Validation Error Recovery
    status: unclear
    t: 1039
    verified: false
    status_source: video
  - name: Timeline Step Grouping and Summarization
    status: unclear
    t: 1083
    verified: false
    status_source: video
  - name: Agent Task Logs
    status: unclear
    t: 1169
    verified: false
    status_source: video
  - name: Multiple Prompts in Agent Runtime
    status: unclear
    t: 1182
    verified: false
    status_source: video
  - name: Multi-Model Runtime Strategy
    status: unclear
    t: 1274
    verified: false
    status_source: video
  - name: Mini vs Full Model Evaluation
    status: unclear
    t: 1326
    verified: false
    status_source: video
  - name: Reasoning Model Evaluation for Agent Execution
    status: unclear
    t: 1371
    verified: false
    status_source: video
  - name: Dynamic Model Selection Strategy
    status: unclear
    t: 1529
    verified: false
    status_source: video
  - name: Agent Scenario-Based Testing Framework
    status: unclear
    t: 1564
    verified: false
    status_source: video
  - name: Model-Specific Prompt Tuning
    status: unclear
    t: 1623
    verified: false
    status_source: video
  - name: MCP Tools Integration for Agents
    status: unclear
    t: 2070
    verified: false
    status_source: video
  - name: Cross-Task Memory for Agents
    status: unclear
    t: 2105
    verified: false
    status_source: video
  - name: Agent Knowledge Base Integration
    status: unclear
    t: 2220
    verified: false
    status_source: video
  - name: Agent Accuracy Improvements
    status: unclear
    t: 2351
    verified: false
    status_source: video
  - name: Tool Integration Feature
    status: unclear
    t: 2430
    verified: false
    status_source: video
objects_mentioned:
  - other Agent Runtime
  - other Agent SDK
  - other Logical Client API
  - other execute task
  - other validation prompt
quotes:
  - t: 11
    text: we we have a few agents already in Business Central, the sales order agent and and the the payable agent
    check: exact
  - t: 76
    text: all the tables for storing your agents tasks, keeping track of what agents are doing
    check: exact
  - t: 187
    text: it it has this JSON based API uh that we call the the logical client API that provides all the information necessary
    check: exact
  - t: 498
    text: when if you do a pure call to LLM LLM it's it's it's completely stateless. Like every time you do a call to an
    check: exact
  - t: 575
    text: the agent runtime remembers for example where you have been, which page you come from, right?
    check: exact
  - t: 806
    text: when when an llm generates content um you you want that content uh especially if it contains data to to be grounded
    check: fuzzy
  - t: 806
    text: grounding basically um when when an llm generates content um you you want that content uh especially if it contains data to to
    check: fuzzy
  - t: 862
    text: instead of running one call to the LLM, you actually do two, right? So, you do first you do generate that content
    check: exact
  - t: 902
    text: Yeah. So, this is what's called grounding because you make sure it's grounded in the in the data. Okay. Yeah, that's a very common
    check: exact
  - t: 1193
    text: I believe we have all in all, correct me if I'm wrong, but the I think we have something like 11 prompts. So, is
    check: exact
  - t: 1250
    text: Is that fair to say that the execute task prompt we talked about before, that's the more complex That's the most complex of them
    check: exact
  - t: 1284
    text: We We are using We're not using only one model. Uh, the runtime is using more than one Um, yes, so we some of
    check: exact
  - t: 1428
    text: what we found, uh, back then was there was a significant increase in in latency. Yeah, so it's a lot slower. Reasoning models, especially
    check: exact
  - t: 1484
    text: Um, so far we have not found, uh, any immediate benefit. benefit for our use case, but we are constantly evaluating and thinking, um,
    check: exact
  - t: 1623
    text: The more important thing, first of all, is is making sure that the tests don't break when we switch to a new model, which,
    check: exact
  - t: 1638
    text: Sometimes you you have to make some tweaks, and otherwise things that were working don't work anymore with again with our specific prompt and
    check: exact
  - t: 1754
    text: if we only measured on the the one which have the higher accuracy, we would we wouldn't we wouldn't know if it the model
    check: exact
  - t: 1890
    text: it seems to have been so far it actually seems to indicate there is there is a dependency and correlation between your prompt and
    check: exact
  - t: 1902
    text: it was when we trying gpt 5 reasoning some of our tests uh for example had a test email saying
    check: fuzzy
  - t: 1964
    text: it's not necessarily about us testing that it has performed the exact same steps in the exact same order. It's more that it has
    check: exact
  - t: 2134
    text: we are looking into is sort of this this we call it cross-task memory. You could consider it teaching or something as well, where
    check: exact
  - t: 2184
    text: the mechanism for when to remember, whether it will ultimately be that you have a checkbox and say remember this when you're providing the
    check: snapped
  - t: 2366
    text: every tool we give, every prompt change we make might lead to some other scenarios now the LLM making a different decision
    check: exact
  - t: 2388
    text: we have also built two agents that have lots of test cases that we can always be running and making sure that are still
    check: exact
  - t: 2412
    text: usually changes that only impact accuracy is are are changes that are not necessarily visible
    check: exact
---

# Business Central Under the Hood episode 13: Inside the Agent Runtime

> Business Central agent runtime internals: the task execution engine, Logical Client API reuse, memory, grounding validation, loop detection, timeline grouping, multiple prompts and models, and how the team tests accuracy. Covers the sales order and payables agents as examples.

[Watch on YouTube](https://www.youtube.com/watch?v=nPF84Ufkn4k) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-04-17 · 41:37 · tier official · **unreviewed** (machine-generated)

## Overview

Episode 13 of Business Central Under the Hood explains how the agent runtime works. The runtime holds the data model for agent tasks, the task execution engine and supporting functions such as timeline data. Agents interact with Business Central through the Logical Client API, a JSON API originally built to render pages on Windows, web and mobile clients. Because an LLM is stateless, the runtime keeps partial memory of visited pages, search results and agent notes and includes it in later prompts.

The talk then covers the supporting prompts: input content analysis, output validation, grounding with a second LLM call, loop detection with recovery nudges, and timeline grouping. It ends with model selection (mini vs full models, reasoning models tested and found too slow), scenario-based accuracy and challenge tests, prompt tuning when models change, and planned work such as MCP tools, cross-task memory and knowledge base access.

## Key points

- The Logical Client API gives agents page fields, actions and tooltips as JSON. It was built for rendering clients, not for AI, and is reused for agents.
- LLM calls are stateless, so the runtime keeps partial memory (visited pages, search results, agent notes) and includes it in later prompts. Memory currently lasts only within one task.
- Grounding uses a second LLM prompt to check that generated content with data matches data the agent has seen. It costs two calls instead of one and is good but not perfect.
- Loop detection separates expected repetition from true loops. When it finds one, the runtime speaks as the user and tells the agent to get out of it. If that fails, the user must intervene.
- The runtime uses many prompts (about 20 per one feature description) and more than one model. Simple prompts like summarization and grounding can often use mini models, while execute task uses a full model.
- Reasoning models (GPT-o1, GPT-5 with reasoning) added significant latency for execute task with no clear accuracy benefit so far. The team keeps re-evaluating.
- Tests check that goals are reached, not exact steps. They are split into accuracy tests and challenge tests, and no model upgrade has worked without some prompt tweaks.

## Chapters

- [0:00](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=0s) Introduction to the Agent Runtime
- [0:52](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=52s) Agent Runtime Architecture and Components
- [2:13](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=133s) The Logical Client API and Agent Interaction
- [4:28](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=268s) Agent Behavior and Memory Management
- [6:35](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=395s) Agent Task Execution Workflow and State
- [10:26](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=626s) Supporting Prompts and Content Analysis
- [12:19](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=739s) Grounding: Validating LLM Output Against Data
- [15:15](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=915s) Loop Detection and Agent Recovery
- [17:06](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1026s) Validation Error Handling and User Intervention
- [18:03](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1083s) Timeline Grouping and Task Summarization
- [19:42](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1182s) Multiple Prompts in Runtime Architecture and Model Selection
- [22:51](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1371s) Model Evolution and Testing Strategies
- [27:59](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1679s) Accuracy Testing and Non-Deterministic LLM Behavior
- [34:30](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2070s) MCP Tool Integration and Cross-Task Memory
- [38:00](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2280s) Future Improvements and Impact on Partners

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Agent Runtime | status not stated | [0:11](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=11s) |  |
| Agent SDK | status not stated | [2:13](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=133s) |  |
| Logical Client API | status not stated | [2:38](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=158s) |  |
| Agent Memory System | status not stated | [5:48](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=348s) |  |
| Execute Task Prompt | status not stated, demoed | [5:21](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=321s) |  |
| Input Content Analysis | status not stated | [11:27](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=687s) |  |
| Output Content Validation | status not stated | [12:19](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=739s) |  |
| Grounding Validation | status not stated, demoed | [13:13](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=793s) |  |
| Loop Detection in Agent Execution | status not stated | [15:27](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=927s) |  |
| Agent Intervention Prompts | status not stated | [16:43](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1003s) |  |
| Validation Error Recovery | status not stated | [17:19](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1039s) |  |
| Timeline Step Grouping and Summarization | status not stated | [18:03](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1083s) |  |
| Agent Task Logs | status not stated | [19:29](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1169s) |  |
| Multiple Prompts in Agent Runtime | status not stated | [19:42](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1182s) |  |
| Multi-Model Runtime Strategy | status not stated | [21:14](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1274s) |  |
| Mini vs Full Model Evaluation | status not stated | [22:06](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1326s) |  |
| Reasoning Model Evaluation for Agent Execution | status not stated | [22:51](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1371s) |  |
| Dynamic Model Selection Strategy | status not stated | [25:29](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1529s) |  |
| Agent Scenario-Based Testing Framework | status not stated | [26:04](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1564s) |  |
| Model-Specific Prompt Tuning | status not stated | [27:03](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1623s) |  |
| MCP Tools Integration for Agents | status not stated | [34:30](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2070s) |  |
| Cross-Task Memory for Agents | status not stated | [35:05](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2105s) |  |
| Agent Knowledge Base Integration | status not stated | [37:00](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2220s) |  |
| Agent Accuracy Improvements | status not stated | [39:11](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2351s) |  |
| Tool Integration Feature | status not stated | [40:30](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2430s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- other "Agent Runtime" at [0:52](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=52s)
- other "Agent SDK" at [2:13](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=133s)
- other "Logical Client API" at [3:07](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=187s)
- other "execute task" at [27:29](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1649s)
- other "validation prompt" at [27:29](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1649s)

## Quotes

- [0:11](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=11s) "we we have a few agents already in Business Central, the sales order agent and and the the payable agent"
- [1:16](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=76s) "all the tables for storing your agents tasks, keeping track of what agents are doing"
- [3:07](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=187s) "it it has this JSON based API uh that we call the the logical client API that provides all the information necessary"
- [8:18](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=498s) "when if you do a pure call to LLM LLM it's it's it's completely stateless. Like every time you do a call to an"
- [9:35](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=575s) "the agent runtime remembers for example where you have been, which page you come from, right?"
- [13:26](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=806s) "when when an llm generates content um you you want that content uh especially if it contains data to to be grounded"
- [13:26](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=806s) "grounding basically um when when an llm generates content um you you want that content uh especially if it contains data to to"
- [14:22](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=862s) "instead of running one call to the LLM, you actually do two, right? So, you do first you do generate that content"
- [15:02](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=902s) "Yeah. So, this is what's called grounding because you make sure it's grounded in the in the data. Okay. Yeah, that's a very common"
- [19:53](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1193s) "I believe we have all in all, correct me if I'm wrong, but the I think we have something like 11 prompts. So, is"
- [20:50](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1250s) "Is that fair to say that the execute task prompt we talked about before, that's the more complex That's the most complex of them"
- [21:24](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1284s) "We We are using We're not using only one model. Uh, the runtime is using more than one Um, yes, so we some of"
- [23:48](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1428s) "what we found, uh, back then was there was a significant increase in in latency. Yeah, so it's a lot slower. Reasoning models, especially"
- [24:44](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1484s) "Um, so far we have not found, uh, any immediate benefit. benefit for our use case, but we are constantly evaluating and thinking, um,"
- [27:03](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1623s) "The more important thing, first of all, is is making sure that the tests don't break when we switch to a new model, which,"
- [27:18](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1638s) "Sometimes you you have to make some tweaks, and otherwise things that were working don't work anymore with again with our specific prompt and"
- [29:14](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1754s) "if we only measured on the the one which have the higher accuracy, we would we wouldn't we wouldn't know if it the model"
- [31:30](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1890s) "it seems to have been so far it actually seems to indicate there is there is a dependency and correlation between your prompt and"
- [31:42](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1902s) "it was when we trying gpt 5 reasoning some of our tests uh for example had a test email saying"
- [32:44](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1964s) "it's not necessarily about us testing that it has performed the exact same steps in the exact same order. It's more that it has"
- [35:34](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2134s) "we are looking into is sort of this this we call it cross-task memory. You could consider it teaching or something as well, where"
- [36:24](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2184s) "the mechanism for when to remember, whether it will ultimately be that you have a checkbox and say remember this when you're providing the"
- [39:26](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2366s) "every tool we give, every prompt change we make might lead to some other scenarios now the LLM making a different decision"
- [39:48](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2388s) "we have also built two agents that have lots of test cases that we can always be running and making sure that are still"
- [40:12](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2412s) "usually changes that only impact accuracy is are are changes that are not necessarily visible"

## Disclaimers in the video

- [25:44](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=1544s) coming-later: we might have a combination eventually, you know, where every once in a while we reason, um, and then we continue with a smaller model, and then we reason again.
- [34:40](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2080s) coming-later: the ability to give the agent some tools like as as an agent developer, for example, using MCP
- [36:44](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2204s) subject-to-change: the mechanism for when to remember, whether it will ultimately be that you have a checkbox and say remember this when you're providing the feedback or we just decide for for ourselves like some other systems sometimes do, we it's it's still I would say TBD
- [37:11](https://www.youtube.com/watch?v=nPF84Ufkn4k&t=2231s) coming-later: the agent being able to consult some knowledge base like Microsoft Learn. Yeah, outside BC.

Presenters (as heard): Vincent, Esteban.
