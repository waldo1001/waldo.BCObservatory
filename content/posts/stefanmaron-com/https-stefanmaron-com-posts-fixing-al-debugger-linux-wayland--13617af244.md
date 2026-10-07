---
id: post/stefanmaron-com/https-stefanmaron-com-posts-fixing-al-debugger-linux-wayland--13617af244
type: post
title: Fixing AL Language Extension Debugger on Linux with Wayland/Hyprland
summary: The AL Language Extension debugger fails on Linux with Wayland/Hyprland, showing empty Call Stack and Variables panels despite successfully connecting to Business Central. Using VS Code Dev Containers to run the AL Language Server inside an Ubuntu container while keeping the VS Code UI on Hyprland restores full debugging functionality.
tier: community
language: en
tags:
  - al debugger
  - linux
  - wayland
  - vs code
  - dev containers
  - troubleshooting
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T12:54:54.417Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 365890af873048324b892a374f2865b27146abe15fda5c4dcca51fe671f7d672
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/fixing-al-debugger-linux-wayland/
    title: Fixing AL Language Extension Debugger on Linux with Wayland/Hyprland
    date: "2025-10-31"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/fixing-al-debugger-linux-wayland/
    title: Fixing AL Language Extension Debugger on Linux with Wayland/Hyprland
    date: "2025-10-31"
    commit: null
    t: null
    quote: The AL Language Server uses socket-based IPC for communication between VS Code and the debugger.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/fixing-al-debugger-linux-wayland/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/fixing-al-debugger-linux-wayland/
published_at: "2025-10-31T00:00:00.000Z"
author: Stefan Maron
full_text: false
words: 938
quotes:
  - text: The AL Language Server uses socket-based IPC for communication between VS Code and the debugger.
    why_it_matters: Explains the root cause of why Call Stack and Variables panels stay empty on Wayland - the socket communication breaks due to Wayland's stricter event handling
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned:
  - AL extension v16-v17
  - VS Code 1.104.1-1.105.1
  - .NET 8.0.20
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:52.174Z"
---

# Fixing AL Language Extension Debugger on Linux with Wayland/Hyprland

[Read the post](https://stefanmaron.com/posts/fixing-al-debugger-linux-wayland/) · Stefan Maron (Stefan Maron, MVP) · 2025-10-31 · 938 words · tier community · **unreviewed** (machine-generated)

> The AL Language Extension debugger fails on Linux with Wayland/Hyprland, showing empty Call Stack and Variables panels despite successfully connecting to Business Central. Using VS Code Dev Containers to run the AL Language Server inside an Ubuntu container while keeping the VS Code UI on Hyprland restores full debugging functionality.

## Key points

- Debugger connects and breakpoints trigger on Wayland, but Call Stack and Variables panels remain empty due to socket-based IPC communication breaking
- X11 and Wayland handle event loops and IPC differently; Wayland's stricter sandboxing interferes with the AL Language Server's display server communication
- VS Code Dev Containers bypass the display server problem by running the AL extension in an Ubuntu container and communicating via network protocol instead
- Solution requires disabling interactive login in AL settings and configuring a devcontainer.json with .NET 8.0 and the AL extension installed in the container
- Dev Containers provide reproducible environments and avoid switching to X11-based window managers

## Quotes

- "The AL Language Server uses socket-based IPC for communication between VS Code and the debugger." (Explains the root cause of why Call Stack and Variables panels stay empty on Wayland - the socket communication breaks due to Wayland's stricter event handling)

## Context

- Features: AL Language Extension, VS Code Dev Containers, Debug Adapter Protocol, Interactive login, Remote Development
- Versions: AL extension v16-v17, VS Code 1.104.1-1.105.1, .NET 8.0.20

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
