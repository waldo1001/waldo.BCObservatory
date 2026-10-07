---
id: video/y5rOAnAkuN8
type: video
title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
summary: The presenter builds a standalone Docker run sandbox for Claude Code (bypass permissions mode). The earlier dev container approach failed because Claude Code could rebuild the VS Code IPC bridge and escape. The video covers named volumes for login, mountable global instruction files (for example AL or Python), a firewall that only allows Anthropic traffic so git pushes must happen outside the container, a container security scan, and plans to add AL development tooling next.
tier: community
language: en
tags:
  - docker containers
  - claude code
  - dev containers
  - security isolation
  - sandbox
  - container escape
  - firewall rules
  - git operations
  - credential management
  - volume mounting
  - authentication persistence
  - defense in depth
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:21:41.512Z"
  flags: []
generated:
  at: "2026-10-07T23:21:41.579Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 68a029ef03bbb5d707150cd9f6795c507fb44a7f0b64d68d1f0d6daabb275be4
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=y5rOAnAkuN8&t=25s
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-05T03:22:43.000Z"
    commit: null
    t: 25
    quote: we are trying to trap cloud code in a container and uh the reason for this or the reasons for this might be different.
  - kind: video
    url: https://www.youtube.com/watch?v=y5rOAnAkuN8&t=123s
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-05T03:22:43.000Z"
    commit: null
    t: 123
    quote: if that's in place, it's really hard to really have a clean way of trapping the uh the the cloud code inside the container
  - kind: video
    url: https://www.youtube.com/watch?v=y5rOAnAkuN8&t=135s
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-05T03:22:43.000Z"
    commit: null
    t: 135
    quote: because it can uh even reverse engineer um that bridge basically from with inside the container.
  - kind: video
    url: https://www.youtube.com/watch?v=y5rOAnAkuN8&t=165s
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-05T03:22:43.000Z"
    commit: null
    t: 165
    quote: cloud code was still able to reconstruct this bridge. So um that's that's something we want to work with today.
  - kind: video
    url: https://www.youtube.com/watch?v=y5rOAnAkuN8&t=224s
    title: "Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)"
    date: "2026-03-05T03:22:43.000Z"
    commit: null
    t: 224
    quote: should we keep the hybrid uh way of running it so people can decide whether they want to risk it or go safe.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: y5rOAnAkuN8
channel: yt-stefanmaron
source_name: Stefan Maron
url: https://www.youtube.com/watch?v=y5rOAnAkuN8
published_at: "2026-03-05T03:22:43.000Z"
duration_s: 4058
captions: derived
audience:
  - developer
  - administrator
chapters:
  - t: 0
    title: Context and Problem Statement
  - t: 165
    title: Previous Attempts and Approach Decision
  - t: 325
    title: Setup and Planning with Claude
  - t: 531
    title: Standalone Docker Implementation Strategy
  - t: 706
    title: Volume Mounting and Security Considerations
  - t: 913
    title: Context Clearing and Named Volumes Setup
  - t: 1081
    title: Mounting Custom Instruction Files into Container
  - t: 1281
    title: Building and Testing Docker Container
  - t: 1572
    title: Installation Issues and Authentication Setup
  - t: 1850
    title: Authentication Persistence Challenges
  - t: 2110
    title: Security Escape Testing and Container Assessment
  - t: 2425
    title: Git Operations and Credential Passing
  - t: 2703
    title: Resume Session and Firewall Security
  - t: 3106
    title: Pre-push Hook Removal and Testing Strategy
  - t: 3335
    title: Community Penetration Testing and Linux Development
  - t: 3650
    title: Firewall Rules and Security Hardening
  - t: 3920
    title: Iterative Problem-solving and Closing Remarks
features:
  - name: Claude Code Standalone Docker Container Approach
    status: unclear
    t: 198
    verified: false
    status_source: video
  - name: VS Code IPC Escape Vulnerability
    status: unclear
    t: 95
    verified: false
    status_source: video
  - name: Hybrid Dev Container and Standalone Approach
    status: unclear
    t: 224
    verified: false
    status_source: video
  - name: Docker Volume Mount for Project Folders
    status: unclear
    t: 632
    verified: false
    status_source: video
  - name: Claude Code Plan Mode Auto-activation
    status: unclear
    t: 363
    verified: false
    status_source: video
  - name: Git Credential Protection via Pre-push Hook
    status: unclear
    t: 841
    verified: false
    status_source: video
  - name: Git credential stripping in Docker
    status: unclear
    t: 852
    verified: false
    status_source: video
  - name: Named volumes for Cloud Code credentials
    status: unclear
    t: 1044
    verified: false
    status_source: video
  - name: Mountable custom instruction files
    status: unclear
    t: 1099
    verified: false
    status_source: video
  - name: Context clearing after planning
    status: unclear
    t: 926
    verified: false
    status_source: video
  - name: Docker Container Volume Shadowing Fix
    status: unclear
    t: 1671
    verified: false
    status_source: video
  - name: Authentication Persistence in Containers
    status: unclear
    t: 1761
    verified: false
    status_source: video
  - name: Container Escape Prevention
    status: unclear
    t: 2106
    verified: false
    status_source: video
  - name: Container Security Assessment Report
    status: unclear
    t: 2280
    verified: false
    status_source: video
  - name: Docker container with firewall and pre-push hook
    status: unclear
    t: 2515
    verified: false
    status_source: video
  - name: Claude Code agent inside container
    status: unclear
    t: 2425
    verified: false
    status_source: video
  - name: Storage driver extended attribute support issue
    status: unclear
    t: 2356
    verified: false
    status_source: video
  - name: Git config passing from host to container
    status: unclear
    t: 2608
    verified: false
    status_source: video
  - name: Pre-push hook removal
    status: unclear
    t: 3121
    verified: false
    status_source: video
  - name: Firewall-based git blocking
    status: unclear
    t: 3503
    verified: false
    status_source: video
  - name: Container escape testing framework
    status: unclear
    t: 3180
    verified: false
    status_source: video
  - name: Cloud Code session resume functionality
    status: unclear
    t: 3444
    verified: false
    status_source: video
  - name: AL tooling integration for container
    status: unclear
    t: 3458
    verified: false
    status_source: video
  - name: Sudo hardening and firewall re-enablement
    status: unclear
    t: 3650
    verified: false
    status_source: video
  - name: Claude Code container security model
    status: unclear
    t: 3936
    verified: false
    status_source: video
objects_mentioned:
  - other cloud sandbox alias
  - other Dockerfile
  - other VS Code
  - other GitHub
  - other IP tables
quotes:
  - t: 25
    text: we are trying to trap cloud code in a container and uh the reason for this or the reasons for this might be different.
    check: exact
  - t: 123
    text: if that's in place, it's really hard to really have a clean way of trapping the uh the the cloud code inside the container
    check: exact
  - t: 135
    text: because it can uh even reverse engineer um that bridge basically from with inside the container.
    check: exact
  - t: 165
    text: cloud code was still able to reconstruct this bridge. So um that's that's something we want to work with today.
    check: exact
  - t: 224
    text: should we keep the hybrid uh way of running it so people can decide whether they want to risk it or go safe.
    check: exact
---

# Claude Code in a Standalone Docker Container: Building a Real Sandbox (Part 2)

> The presenter builds a standalone Docker run sandbox for Claude Code (bypass permissions mode). The earlier dev container approach failed because Claude Code could rebuild the VS Code IPC bridge and escape. The video covers named volumes for login, mountable global instruction files (for example AL or Python), a firewall that only allows Anthropic traffic so git pushes must happen outside the container, a container security scan, and plans to add AL development tooling next.

[Watch on YouTube](https://www.youtube.com/watch?v=y5rOAnAkuN8) · Stefan Maron · 2026-03-05 · 1:07:38 · tier community · reviewed (checked by Opus)

## Overview

Part 2 of a live session on trapping Claude Code in a container. In the dev container setup, Claude Code could rebuild the bridge between VS Code and the container and get out, even after several fixes. The presenter moves to a standalone Docker run mode, which he says removes that attack surface, and considers keeping a hybrid mode so users can choose convenience or safety.

He works through installation problems, authentication that does not persist, git credential handling and a firewall that allows only Anthropic and VS Code domains. He tests an escape attempt and a container security scan, then removes the pre-push hook so pushes happen from outside the container. He invites viewers to try to break the sandbox and file GitHub issues. AL tooling is planned for a later stream.

## Key points

- In the dev container setup, Claude Code could reconstruct the VS Code to container bridge and escape, even after several fix attempts. Standalone Docker run is presented as removing that attack surface.
- Installation failed because the config data volume shadowed the Claude installation. The fix is to install Claude to a different location or adjust the volume mapping.
- Named volumes in the run command are meant to carry the Claude Code login so it does not repeat on every new container. During testing, authentication again did not persist at first, the same issue seen earlier with dev containers.
- A separate markdown instruction file can be mounted from the host as the global instruction file, so different sets (for example Python or AL) can be used without copying them into each project.
- A firewall script blocks outbound traffic except to Anthropic and VS Code domains, so git pushes from inside the container fail. Commits inside the container still work. The pre-push hook was removed so pushes can be done from outside the container.
- Claude Code refused to run a full red team test against the host. A security scan took 1 minute 16 seconds and reported a four-layer defense in depth. It noted possible weaknesses around storage driver extended attributes and DNS.
- Lesson learned: Claude Code will not directly escape, but if the issue is framed as a problem to solve it tries hard to help, for example by working around the firewall script.

## Chapters

- [0:00](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=0s) Context and Problem Statement
- [2:45](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=165s) Previous Attempts and Approach Decision
- [5:25](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=325s) Setup and Planning with Claude
- [8:51](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=531s) Standalone Docker Implementation Strategy
- [11:46](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=706s) Volume Mounting and Security Considerations
- [15:13](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=913s) Context Clearing and Named Volumes Setup
- [18:01](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1081s) Mounting Custom Instruction Files into Container
- [21:21](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1281s) Building and Testing Docker Container
- [26:12](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1572s) Installation Issues and Authentication Setup
- [30:50](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1850s) Authentication Persistence Challenges
- [35:10](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2110s) Security Escape Testing and Container Assessment
- [40:25](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2425s) Git Operations and Credential Passing
- [45:03](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2703s) Resume Session and Firewall Security
- [51:46](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3106s) Pre-push Hook Removal and Testing Strategy
- [55:35](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3335s) Community Penetration Testing and Linux Development
- [1:00:50](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3650s) Firewall Rules and Security Hardening
- [1:05:20](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3920s) Iterative Problem-solving and Closing Remarks

## Features

| Feature | Status | At |
|---|---|---|
| Claude Code Standalone Docker Container Approach | status not stated | [3:18](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=198s) |
| VS Code IPC Escape Vulnerability | status not stated | [1:35](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=95s) |
| Hybrid Dev Container and Standalone Approach | status not stated | [3:44](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=224s) |
| Docker Volume Mount for Project Folders | status not stated | [10:32](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=632s) |
| Claude Code Plan Mode Auto-activation | status not stated, demoed | [6:03](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=363s) |
| Git Credential Protection via Pre-push Hook | status not stated | [14:01](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=841s) |
| Git credential stripping in Docker | status not stated | [14:12](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=852s) |
| Named volumes for Cloud Code credentials | status not stated, demoed | [17:24](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1044s) |
| Mountable custom instruction files | status not stated, demoed | [18:19](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1099s) |
| Context clearing after planning | status not stated | [15:26](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=926s) |
| Docker Container Volume Shadowing Fix | status not stated, demoed | [27:51](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1671s) |
| Authentication Persistence in Containers | status not stated, demoed | [29:21](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=1761s) |
| Container Escape Prevention | status not stated, demoed | [35:06](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2106s) |
| Container Security Assessment Report | status not stated, demoed | [38:00](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2280s) |
| Docker container with firewall and pre-push hook | status not stated, demoed | [41:55](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2515s) |
| Claude Code agent inside container | status not stated, demoed | [40:25](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2425s) |
| Storage driver extended attribute support issue | status not stated | [39:16](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2356s) |
| Git config passing from host to container | status not stated | [43:28](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2608s) |
| Pre-push hook removal | status not stated, demoed | [52:01](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3121s) |
| Firewall-based git blocking | status not stated, demoed | [58:23](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3503s) |
| Container escape testing framework | status not stated | [53:00](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3180s) |
| Cloud Code session resume functionality | status not stated, demoed | [57:24](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3444s) |
| AL tooling integration for container | status not stated | [57:38](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3458s) |
| Sudo hardening and firewall re-enablement | status not stated, demoed | [1:00:50](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3650s) |
| Claude Code container security model | status not stated | [1:05:36](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3936s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "cloud sandbox alias" at [10:57](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=657s)
- other "Dockerfile" at [16:20](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=980s)
- other "VS Code" at [40:12](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2412s)
- other "GitHub" at [41:55](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2515s)
- other "IP tables" at [47:51](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=2871s)

## Quotes

- [0:25](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=25s) "we are trying to trap cloud code in a container and uh the reason for this or the reasons for this might be different."
- [2:03](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=123s) "if that's in place, it's really hard to really have a clean way of trapping the uh the the cloud code inside the container"
- [2:15](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=135s) "because it can uh even reverse engineer um that bridge basically from with inside the container."
- [2:45](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=165s) "cloud code was still able to reconstruct this bridge. So um that's that's something we want to work with today."
- [3:44](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=224s) "should we keep the hybrid uh way of running it so people can decide whether they want to risk it or go safe."

## Disclaimers in the video

- [3:18](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=198s) subject-to-change: we cannot fully mitigate those uh vulnerabilities. Standalone Docker run modes eliminates the tech surface entirely
- [6:48](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=408s) preview: there is a a voice command rolling out, but I don't seem to get any of the the preview things
- [53:00](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3180s) other: Try to break it. If you manage to break it, ask your agent to create an issue on my GitHub and I will then try to fix it.
- [53:43](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3223s) other: if nobody will be able to find anything any back door to escape that container then I will continue the next stream to start to bake in my tuning.
- [53:43](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3223s) coming-later: I will continue the the next stream to start to bake in my tuning
- [57:58](https://www.youtube.com/watch?v=y5rOAnAkuN8&t=3478s) coming-later: next time I will either, uh, go through issues that manage to breach out of this container or if if there are none

Presenters (as heard): Dennis, Claude Code.
