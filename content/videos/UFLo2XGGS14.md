---
id: video/UFLo2XGGS14
type: video
title: "What's new: Agentic Developer Loop (2026 release wave 2)"
summary: "Agentic developer loop in Business Central (2026 release wave 2): an AI agent combines the AL language server, a snapshot debugging MCP server and a sampling profiling MCP server to investigate production errors and slow sessions. Feature status is not stated in the facts."
tier: official
language: en
tags:
  - agentic developer loop
  - snapshot debugging
  - sampling profiling
  - mcp
  - language server protocol
  - performance troubleshooting
  - runtime analysis
  - telemetry
  - al extension
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:45:10.550Z"
  flags: []
generated:
  at: "2026-10-09T00:29:02.995Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 01f0e64385402478dbfa27533a69038df9e85814adb62f3db3025b861dfeb784
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=UFLo2XGGS14&t=45s
    title: "What's new: Agentic Developer Loop (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 45
    quote: The developer starts with a prompt because there is a real problem to solve. Maybe the production environment is slow or maybe user found
  - kind: video
    url: https://www.youtube.com/watch?v=UFLo2XGGS14&t=120s
    title: "What's new: Agentic Developer Loop (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 120
    quote: This is the agentic developer loop. understand the source, collect evidence from the real environment, and use that evidence to explain and fix the
  - kind: video
    url: https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s
    title: "What's new: Agentic Developer Loop (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 208
    quote: The snapshot debugging MCP server is built into the standard Microsoft business central MCP infrastructure.
  - kind: video
    url: https://www.youtube.com/watch?v=UFLo2XGGS14&t=616s
    title: "What's new: Agentic Developer Loop (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 616
    quote: the language server protocol is an industry standard that connects development environments to language specific intelligence
  - kind: video
    url: https://www.youtube.com/watch?v=UFLo2XGGS14&t=730s
    title: "What's new: Agentic Developer Loop (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 730
    quote: Once the session ID is known, the agent starts a limited sampling schedule. Business center watches the matching activities and returns AI CPU profile
  - kind: video
    url: https://www.youtube.com/watch?v=UFLo2XGGS14&t=979s
    title: "What's new: Agentic Developer Loop (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 979
    quote: It used 30,000 CQL statements in 5 seconds. It actually shows which statements it has used and it bound to the methods that were
  - kind: video
    url: https://www.youtube.com/watch?v=UFLo2XGGS14&t=1109s
    title: "What's new: Agentic Developer Loop (2026 release wave 2)"
    date: "2026-10-01T00:00:00Z"
    commit: null
    t: 1109
    quote: ALSP snapshot debugging and the sampling profiling MCP should the business central MCP server work together as one agenting developer loop. Understand, capture, measure,
links:
  learn: []
  objects: []
  features:
    - feature/573335
    - feature/573338
    - feature/573361
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: UFLo2XGGS14
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=UFLo2XGGS14
published_at: "2026-10-01T00:00:00Z"
duration_s: 1135
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and agenda
  - t: 45
    title: Agentic developer loop architecture
  - t: 120
    title: Snapshot debugging concepts and workflow
  - t: 208
    title: Snapshot debugging setup and connection methods
  - t: 263
    title: Snapshot debugging MCP demo
  - t: 616
    title: AI language server protocol capabilities
  - t: 671
    title: Sampling profiling MCP overview
  - t: 785
    title: Sampling profiling MCP demos and integrated workflow
features:
  - name: Agentic developer loop
    status: ga
    t: 45
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573335"
      - "573361"
  - name: Snapshot debugging MCP
    status: ga
    t: 120
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573361"
  - name: AL tool as MCP proxy
    status: unclear
    t: 208
    verified: false
    status_source: video
  - name: Visual Studio Code MCP integration
    status: unclear
    t: 208
    verified: false
    status_source: video
  - name: AI language server protocol
    status: ga
    t: 616
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573338"
  - name: Sampling profiling MCP
    status: ga
    t: 671
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573335"
  - name: Session-based profiling workflow
    status: ga
    t: 671
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573335"
  - name: Telemetry-driven agent investigation
    status: ga
    t: 263
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573335"
objects_mentioned:
  - other Agentic developer loop
  - other ALSP
  - other AL tool
  - other Business central MCP server
quotes:
  - t: 45
    text: The developer starts with a prompt because there is a real problem to solve. Maybe the production environment is slow or maybe user found
    check: exact
  - t: 120
    text: This is the agentic developer loop. understand the source, collect evidence from the real environment, and use that evidence to explain and fix the
    check: exact
  - t: 208
    text: The snapshot debugging MCP server is built into the standard Microsoft business central MCP infrastructure.
    check: exact
  - t: 616
    text: the language server protocol is an industry standard that connects development environments to language specific intelligence
    check: fuzzy
  - t: 730
    text: Once the session ID is known, the agent starts a limited sampling schedule. Business center watches the matching activities and returns AI CPU profile
    check: exact
  - t: 979
    text: It used 30,000 CQL statements in 5 seconds. It actually shows which statements it has used and it bound to the methods that were
    check: exact
  - t: 1109
    text: ALSP snapshot debugging and the sampling profiling MCP should the business central MCP server work together as one agenting developer loop. Understand, capture, measure,
    check: exact
---

# What's new: Agentic Developer Loop (2026 release wave 2)

> Agentic developer loop in Business Central (2026 release wave 2): an AI agent combines the AL language server, a snapshot debugging MCP server and a sampling profiling MCP server to investigate production errors and slow sessions. Feature status is not stated in the facts.

[Watch on YouTube](https://www.youtube.com/watch?v=UFLo2XGGS14) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-10-01 · 18:55 · tier official · reviewed (checked by Opus)

## Overview

The video describes the agentic developer loop: a developer prompts an agent about a production problem, and the agent reads the source, collects runtime evidence from the real environment, and uses it to explain and fix the issue. Three pieces work together: the AL language server protocol for code understanding, a snapshot debugging MCP server, and a sampling profiling MCP server.

Demos cover capturing snapshots with call stacks and variables, profiling a session by its Business Central session ID, and having the agent pick a target from telemetry. Setup is shown through the AL tool acting as an MCP proxy and through launch.json configuration in Visual Studio Code.

## Key points

- The snapshot debugging MCP server is built into the standard Business Central MCP infrastructure. The MCP server must be configured for the Business Central environment.
- The AL tool acts as an MCP host for the Business Central MCP server and as an MCP server for local clients.
- In Visual Studio Code, Business Central is configured as an MCP target in launch.json. The extension registers and starts the snapshot MCP proxy and reuses the existing AI development sign-in.
- The agent can use the AL language server (definitions, types, symbols, implementations, callers) to place snap points more effectively than text search.
- Sampling profiling needs a numeric Business Central session ID, which can come from the help and support page or be inferred by the agent from telemetry. It returns CPU profile files with activity duration, CQL calls, HTTP calls and memory information.
- Profiling permissions: create profile schedules and read performance profile for your own session, or D365 attach debug for other sessions.
- In the demo, the profile showed 30,000 CQL statements in 5 seconds, tied to the methods that issued them. Agents can also poll telemetry to trigger snapshots or profiling, with a configurable polling interval that is longer in production than in the demo.

## Chapters

- [0:00](https://www.youtube.com/watch?v=UFLo2XGGS14&t=0s) Introduction and agenda
- [0:45](https://www.youtube.com/watch?v=UFLo2XGGS14&t=45s) Agentic developer loop architecture
- [2:00](https://www.youtube.com/watch?v=UFLo2XGGS14&t=120s) Snapshot debugging concepts and workflow
- [3:28](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) Snapshot debugging setup and connection methods
- [4:23](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) Snapshot debugging MCP demo
- [10:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=616s) AI language server protocol capabilities
- [11:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s) Sampling profiling MCP overview
- [13:05](https://www.youtube.com/watch?v=UFLo2XGGS14&t=785s) Sampling profiling MCP demos and integrated workflow

## Features

| Feature | Status | At |
|---|---|---|
| Agentic developer loop | generally available (roadmap [Profile slow Business Central sessions with AI agents](../features/573335.md), [Debug recorded Business Central failures with an AI agent](../features/573361.md)), demoed | [0:45](https://www.youtube.com/watch?v=UFLo2XGGS14&t=45s) |
| Snapshot debugging MCP | generally available (roadmap [Debug recorded Business Central failures with an AI agent](../features/573361.md)), demoed | [2:00](https://www.youtube.com/watch?v=UFLo2XGGS14&t=120s) |
| AL tool as MCP proxy | status not stated, demoed | [3:28](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) |
| Visual Studio Code MCP integration | status not stated | [3:28](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) |
| AI language server protocol | generally available (roadmap [Use AL language intelligence from AI agents and other editors](../features/573338.md)), demoed | [10:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=616s) |
| Sampling profiling MCP | generally available (roadmap [Profile slow Business Central sessions with AI agents](../features/573335.md)), demoed | [11:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s) |
| Session-based profiling workflow | generally available (roadmap [Profile slow Business Central sessions with AI agents](../features/573335.md)), demoed | [11:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s) |
| Telemetry-driven agent investigation | generally available (roadmap [Profile slow Business Central sessions with AI agents](../features/573335.md)), demoed | [4:23](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "Agentic developer loop" at [2:00](https://www.youtube.com/watch?v=UFLo2XGGS14&t=120s)
- other "ALSP" at [1:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=76s)
- other "AL tool" at [1:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=76s)
- other "Business central MCP server" at [1:39](https://www.youtube.com/watch?v=UFLo2XGGS14&t=99s)

## Quotes

- [0:45](https://www.youtube.com/watch?v=UFLo2XGGS14&t=45s) "The developer starts with a prompt because there is a real problem to solve. Maybe the production environment is slow or maybe user found"
- [2:00](https://www.youtube.com/watch?v=UFLo2XGGS14&t=120s) "This is the agentic developer loop. understand the source, collect evidence from the real environment, and use that evidence to explain and fix the"
- [3:28](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) "The snapshot debugging MCP server is built into the standard Microsoft business central MCP infrastructure."
- [10:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=616s) "the language server protocol is an industry standard that connects development environments to language specific intelligence"
- [12:10](https://www.youtube.com/watch?v=UFLo2XGGS14&t=730s) "Once the session ID is known, the agent starts a limited sampling schedule. Business center watches the matching activities and returns AI CPU profile"
- [16:19](https://www.youtube.com/watch?v=UFLo2XGGS14&t=979s) "It used 30,000 CQL statements in 5 seconds. It actually shows which statements it has used and it bound to the methods that were"
- [18:29](https://www.youtube.com/watch?v=UFLo2XGGS14&t=1109s) "ALSP snapshot debugging and the sampling profiling MCP should the business central MCP server work together as one agenting developer loop. Understand, capture, measure,"

## Disclaimers in the video

- [5:58](https://www.youtube.com/watch?v=UFLo2XGGS14&t=358s) subject-to-change: By the time user tell me that there is an error they might log off. There's no current session. I cannot attach to the session. So there's going to be some next session probably the other day.

Presenters (as heard): Kberis, Artur Wensel.
