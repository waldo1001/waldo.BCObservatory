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
  state: reviewed
  by: opus
  at: "2026-10-08T01:58:32.040Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
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

[Read the post](https://stefanmaron.com/posts/fixing-al-debugger-linux-wayland/) · Stefan Maron (Stefan Maron, MVP) · 2025-10-31 · 938 words · tier community · reviewed (checked by Opus)

> The AL Language Extension debugger fails on Linux with Wayland/Hyprland, showing empty Call Stack and Variables panels despite successfully connecting to Business Central. Using VS Code Dev Containers to run the AL Language Server inside an Ubuntu container while keeping the VS Code UI on Hyprland restores full debugging functionality.

## Key points

- On Hyprland (Wayland), the AL debugger connects and stops at breakpoints, but the Call Stack and Variables panels stay empty because state updates never arrive
- Downgrading the AL extension and VS Code, adding .NET 8, forcing XWayland and trying other installs all failed
- Fix: run the AL extension in an Ubuntu Dev Container while the VS Code UI stays on the host, so the two talk over the Remote protocol and no display server is involved
- Setup needs a devcontainer.json with .NET 8.0 and the AL extension, the Remote Development extension, and al.useInteractiveLogin set to false
- An alternative is to use an X11 session such as i3 for AL work. The issue was reported to Microsoft as AL GitHub issue 8150

## Quotes

- "The AL Language Server uses socket-based IPC for communication between VS Code and the debugger." (Explains the root cause of why Call Stack and Variables panels stay empty on Wayland - the socket communication breaks due to Wayland's stricter event handling)

## Context

- Features: AL Language Extension, VS Code Dev Containers, Debug Adapter Protocol, Interactive login, Remote Development
- Versions: AL extension v16-v17, VS Code 1.104.1-1.105.1, .NET 8.0.20

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
