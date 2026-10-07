---
id: video/LuAHCXiwYn4
type: video
title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
summary: "Live stream on running Claude Code in a Docker container with swappable profiles: a host config folder (instructions, agents, skills, cached credentials, memory) is mounted as the Claude main folder, so different profiles can be used per project, such as an AL development profile or a telemetry folder with Waldo's MCP server. It also demos creating an AL repo summarizer agent, setting up an AL LSP plugin, and moving from commands to skills that can run in custom sub-agents."
tier: community
language: en
tags:
  - container mounting
  - claude profiles
  - agent configuration
  - al development setup
  - project-scoped settings
  - cloud code sandbox
  - docker containers
  - agent memory
  - repository analysis
  - mcp server
  - telemetry configuration
  - skills
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:21:30.183Z"
  flags: []
generated:
  at: "2026-10-07T23:21:30.231Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 20d6e32a88efe2450f9dd0af72e83fdb6a2f4507c6b8ea742f3d860327b8803d
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=LuAHCXiwYn4&t=140s
    title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
    date: "2026-03-16T11:02:46.000Z"
    commit: null
    t: 140
    quote: in its own volume basically we persisted into into a host config folder
  - kind: video
    url: https://www.youtube.com/watch?v=LuAHCXiwYn4&t=247s
    title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
    date: "2026-03-16T11:02:46.000Z"
    commit: null
    t: 247
    quote: We pass in the cloud AO development folder as the cloud main folder inside the container
  - kind: video
    url: https://www.youtube.com/watch?v=LuAHCXiwYn4&t=420s
    title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
    date: "2026-03-16T11:02:46.000Z"
    commit: null
    t: 420
    quote: I can have differently prepared user directories somewhere. It doesn't have to be home. You can have it wherever you want on disk
  - kind: video
    url: https://www.youtube.com/watch?v=LuAHCXiwYn4&t=504s
    title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
    date: "2026-03-16T11:02:46.000Z"
    commit: null
    t: 504
    quote: create an agent that's uh specialized in uh summarizing AL repositories to give a general overview over this that is human readable
  - kind: video
    url: https://www.youtube.com/watch?v=LuAHCXiwYn4&t=608s
    title: "Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)"
    date: "2026-03-16T11:02:46.000Z"
    commit: null
    t: 608
    quote: it saved it automatically into the ALS specific user directory. Isn't that cool?
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: LuAHCXiwYn4
channel: yt-stefanmaron
source_name: Stefan Maron
url: https://www.youtube.com/watch?v=LuAHCXiwYn4
published_at: "2026-03-16T11:02:46.000Z"
duration_s: 2461
captions: derived
audience:
  - developer
  - administrator
chapters:
  - t: 0
    title: Cloud code isolation with host folder mounting
  - t: 280
    title: Container setup and configuration
  - t: 420
    title: Project-scoped and reusable agent configurations
  - t: 520
    title: Creating a specialized AL repository summarizer agent
  - t: 650
    title: Agent memory and configuration exploration
  - t: 884
    title: Swapping projects with container mounting and authentication
  - t: 1010
    title: Telemetry configuration and folder-level customization
  - t: 1154
    title: Plugin configuration and LSP navigation setup
  - t: 1390
    title: "Commands vs Skills: Modern agent skills framework"
  - t: 1679
    title: Configuring skill documentation and testing
  - t: 1943
    title: Supporting files, sub-agents and custom agent configuration
  - t: 2204
    title: Rethinking AL development profile architecture and future work
  - t: 2378
    title: General readiness, issue reporting and closing remarks
features:
  - name: Host folder mounting for cloud configuration
    status: unclear
    t: 128
    verified: false
    status_source: video
  - name: AL repository summarizer agent
    status: unclear
    t: 504
    verified: false
    status_source: video
  - name: Agent memory and automatic persistence
    status: unclear
    t: 591
    verified: false
    status_source: video
  - name: Container-based project switching with cloud code
    status: unclear
    t: 884
    verified: false
    status_source: video
  - name: Per-folder MCP server configuration
    status: unclear
    t: 996
    verified: false
    status_source: video
  - name: LSP code navigation plugin
    status: unclear
    t: 1154
    verified: false
    status_source: video
  - name: Skills framework for AI development
    status: unclear
    t: 1444
    verified: false
    status_source: video
  - name: Skill context configuration
    status: unclear
    t: 1744
    verified: false
    status_source: video
  - name: Supporting files in skills
    status: unclear
    t: 1996
    verified: false
    status_source: video
  - name: Sub-agents for skills
    status: unclear
    t: 2112
    verified: false
    status_source: video
  - name: Commands to skills migration pattern
    status: unclear
    t: 2240
    verified: false
    status_source: video
  - name: Swappable Claude profiles per project via container mounting
    status: unclear
    t: 2348
    verified: false
    status_source: video
objects_mentioned:
  - other cloud.markdown
  - other AL repo summarizer
  - other MCP service
  - other Waldo's MCP server
  - other Corpin Le's plugin
quotes:
  - t: 140
    text: in its own volume basically we persisted into into a host config folder
    check: fuzzy
  - t: 247
    text: We pass in the cloud AO development folder as the cloud main folder inside the container
    check: exact
  - t: 420
    text: I can have differently prepared user directories somewhere. It doesn't have to be home. You can have it wherever you want on disk
    check: exact
  - t: 504
    text: create an agent that's uh specialized in uh summarizing AL repositories to give a general overview over this that is human readable
    check: exact
  - t: 608
    text: it saved it automatically into the ALS specific user directory. Isn't that cool?
    check: exact
---

# Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)

> Live stream on running Claude Code in a Docker container with swappable profiles: a host config folder (instructions, agents, skills, cached credentials, memory) is mounted as the Claude main folder, so different profiles can be used per project, such as an AL development profile or a telemetry folder with Waldo's MCP server. It also demos creating an AL repo summarizer agent, setting up an AL LSP plugin, and moving from commands to skills that can run in custom sub-agents.

[Watch on YouTube](https://www.youtube.com/watch?v=LuAHCXiwYn4) · Stefan Maron · 2026-03-16 · 41:01 · tier community · reviewed (checked by Opus)

## Overview

The video shows how to keep Claude configuration in a host folder instead of a Docker volume, then mount a different folder into the container for each project. Each mounted folder acts as its own profile, with its own agents, memory and credentials. The presenter creates a project-scoped AL repository summarizer agent and looks at the memory files the agent writes automatically.

The second half covers a telemetry folder that loads Waldo's MCP server, the LSP navigation plugin from Corpin Le, and the difference between legacy commands and skills. It shows skill context settings, supporting files, and sub-agents attached to skills. It closes with the presenter's view that the container base is ready for general use and that problems should be reported as GitHub issues.

## Key points

- Config is persisted into a host config folder rather than a Docker volume, and that folder is passed into the container as the Claude main folder. Any folder on disk can be used, not only the home directory.
- The host folder caches credentials and memory files and may contain sensitive information. Starting with a different folder asks you to log in again, so different authentications are possible.
- Agents can be created with project scope or personal scope; personal agents go into the mounted profile folder. The demo created a personal AL repository summarizer agent, which was saved automatically to the AL-specific user directory and created agent memory.
- Commands are described as the legacy approach. Skills follow the agent skills standard, can be invoked automatically by the model, and have no built-in generator.
- Skill context is either omitted or fork. Skills can have supporting files and helper scripts, and can be set up to use dedicated sub-agents.
- Waldo's telemetry MCP server can be loaded into its own folder with its own instructions. The presenter currently uses one dedicated telemetry folder across all projects.
- The Corpin Le LSP plugin needs environment variables set in the container config. Marketplace setup had problems, including GitHub access being locked out in the container.

## Chapters

- [0:00](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=0s) Cloud code isolation with host folder mounting
- [4:40](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=280s) Container setup and configuration
- [7:00](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=420s) Project-scoped and reusable agent configurations
- [8:40](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=520s) Creating a specialized AL repository summarizer agent
- [10:50](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=650s) Agent memory and configuration exploration
- [14:44](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=884s) Swapping projects with container mounting and authentication
- [16:50](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1010s) Telemetry configuration and folder-level customization
- [19:14](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1154s) Plugin configuration and LSP navigation setup
- [23:10](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1390s) Commands vs Skills: Modern agent skills framework
- [27:59](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1679s) Configuring skill documentation and testing
- [32:23](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1943s) Supporting files, sub-agents and custom agent configuration
- [36:44](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=2204s) Rethinking AL development profile architecture and future work
- [39:38](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=2378s) General readiness, issue reporting and closing remarks

## Features

| Feature | Status | At |
|---|---|---|
| Host folder mounting for cloud configuration | status not stated, demoed | [2:08](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=128s) |
| AL repository summarizer agent | status not stated, demoed | [8:24](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=504s) |
| Agent memory and automatic persistence | status not stated, demoed | [9:51](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=591s) |
| Container-based project switching with cloud code | status not stated, demoed | [14:44](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=884s) |
| Per-folder MCP server configuration | status not stated, demoed | [16:36](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=996s) |
| LSP code navigation plugin | status not stated | [19:14](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1154s) |
| Skills framework for AI development | status not stated, demoed | [24:04](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1444s) |
| Skill context configuration | status not stated, demoed | [29:04](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1744s) |
| Supporting files in skills | status not stated, demoed | [33:16](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1996s) |
| Sub-agents for skills | status not stated, demoed | [35:12](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=2112s) |
| Commands to skills migration pattern | status not stated | [37:20](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=2240s) |
| Swappable Claude profiles per project via container mounting | status not stated | [39:08](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=2348s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "cloud.markdown" at [2:45](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=165s)
- other "AL repo summarizer" at [9:51](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=591s)
- other "MCP service" at [14:34](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=874s)
- other "Waldo's MCP server" at [16:36](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=996s)
- other "Corpin Le's plugin" at [19:14](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1154s)

## Quotes

- [2:20](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=140s) "in its own volume basically we persisted into into a host config folder"
- [4:07](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=247s) "We pass in the cloud AO development folder as the cloud main folder inside the container"
- [7:00](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=420s) "I can have differently prepared user directories somewhere. It doesn't have to be home. You can have it wherever you want on disk"
- [8:24](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=504s) "create an agent that's uh specialized in uh summarizing AL repositories to give a general overview over this that is human readable"
- [10:08](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=608s) "it saved it automatically into the ALS specific user directory. Isn't that cool?"

## Disclaimers in the video

- [8:58](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=538s) other: I don't know if it's general availability now or my user account has been enabled for the voice mode
- [14:08](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=848s) other: Skills cannot be automatically defined
- [20:41](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1241s) other: We locked out GitHub completely but it will be cloned into here
- [24:53](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1493s) other: error compile isn't installed in the container
- [30:24](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=1824s) other: There are always new features coming. which are really um which can be missed quite quickly.
- [36:44](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=2204s) coming-later: building that is probably taking more will take more longer than I want to be on stream for
- [40:02](https://www.youtube.com/watch?v=LuAHCXiwYn4&t=2402s) subject-to-change: the base of of that uh container will not uh change anymore that much at least

Presenters (as heard): Unknown presenter.
