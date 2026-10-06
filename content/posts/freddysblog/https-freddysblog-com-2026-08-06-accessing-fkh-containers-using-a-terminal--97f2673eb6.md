---
id: post/freddysblog/https-freddysblog-com-2026-08-06-accessing-fkh-containers-using-a-terminal--97f2673eb6
type: post
title: Accessing Fkh containers using a terminal
summary: "Fkh provides secure, just-in-time terminal access to Business Central containers running in Kubernetes clusters through three methods: kubectl with PowerShell, WinRM access via CLI, or WinRM access via VS Code. Each approach prioritizes security by avoiding public exposure and standing credentials."
tier: community
language: en
tags:
  - kubernetes
  - container access
  - security
  - devops
  - fkh
  - winrm
  - terminal
  - authentication
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:44:07.617Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: ebe2a41b96b5c9e0ca5ecb7eda162e7d485ecd6a45d392703491ead82a34002a
evidence:
  - kind: blog
    url: https://freddysblog.com/2026/08/06/accessing-fkh-containers-using-a-terminal/
    title: Accessing Fkh containers using a terminal
    date: "2026-08-06"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://freddysblog.com/2026/08/06/accessing-fkh-containers-using-a-terminal
source_id: freddysblog
source_name: Freddys blog
url: https://freddysblog.com/2026/08/06/accessing-fkh-containers-using-a-terminal/
published_at: "2026-08-06T10:00:00.000Z"
author: Freddy Kristiansen
full_text: false
words: 1261
quotes: []
code_objects_mentioned: []
systems:
  - platform
  - development
  - administration
versions_mentioned: []
---

# Accessing Fkh containers using a terminal

> Fkh provides secure, just-in-time terminal access to Business Central containers running in Kubernetes clusters through three methods: kubectl with PowerShell, WinRM access via CLI, or WinRM access via VS Code. Each approach prioritizes security by avoiding public exposure and standing credentials.

[Read the post](https://freddysblog.com/2026/08/06/accessing-fkh-containers-using-a-terminal/) · Freddys blog (Freddy Kristiansen) · 2026-08-06 · 1261 words · tier community · **unreviewed** (machine-generated)

## Key points

- Containers run as Kubernetes pods in Azure subscriptions, not exposed publicly, requiring secure tunneling for access
- Two primary options: kubectl exec for admins with cluster access, or WinRM with GitHub authentication scoped to user IP and time-limited
- WinRM is the recommended Fkh-native approach offering the same secure, just-in-time model as database access without requiring kubectl installation
- Windows account lockout policy after three failed attempts in 15 minutes protects against brute-force attacks
- VS Code integration allows WinRM access from the editor with automatic output showing connection details

## Context

- Features: Just-in-time terminal access, WinRM session management, kubectl integration, VS Code container terminals, GitHub authentication, IP-scoped access, Time-limited tunnels, PowerShell remoting

Source: Freddys blog, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
