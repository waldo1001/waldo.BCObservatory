---
id: post/thatnavguy-com/https-thatnavguy-com-projects-symlynx--6abd209948
type: post
title: SymLynx
summary: SymLynx is a VS Code extension that solves the problem of duplicating configuration files across multiple Business Central repositories by using symbolic links to point to a single master copy, eliminating file synchronization issues and config drift.
tier: community
language: en
tags:
  - file management
  - developer tools
  - workflow automation
  - configuration management
  - vs code extension
  - version control
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:55:36.115Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 543f9fdd4c9e2ddf0d47686c4951013bb133a74f9c6a35a9b8b99bd0a4c047f8
evidence:
  - kind: blog
    url: https://thatnavguy.com/projects/symlynx/
    title: SymLynx
    date: "2026-05-06"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/projects/symlynx/
    title: SymLynx
    date: "2026-05-06"
    commit: null
    t: null
    quote: Your config lives in one place. Every repo points to it. Update the source once, every project picks it up instantly.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/projects/symlynx/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/projects/symlynx/
published_at: "2026-05-06T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 570
quotes:
  - text: Your config lives in one place. Every repo points to it. Update the source once, every project picks it up instantly.
    why_it_matters: Summarizes the key benefit of the solution - centralized configuration management that eliminates manual synchronization across projects
code_objects_mentioned: []
systems:
  - development
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/open-graph.jpg
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:38.423Z"
---

# SymLynx

[Read the post](https://thatnavguy.com/projects/symlynx/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-05-06 · 570 words · tier community · reviewed (checked by Opus)

> SymLynx is a VS Code extension that solves the problem of duplicating configuration files across multiple Business Central repositories by using symbolic links to point to a single master copy, eliminating file synchronization issues and config drift.

## Key points

- Developers with many BC repos end up copying the same AI agent and config files into every repo, and those copies drift apart.
- A symbolic link works at the filesystem level, so VS Code, compilers and AI tools read and write the single source file as if it were local.
- SymLynx creates symlinks from a right-click menu in VS Code, usually without a terminal or admin rights; enabling Windows Developer Mode fixes most permission errors.
- A panel in the Explorer sidebar lists all links, and export/import copies the link layout to other projects.
- Links break when the target path is missing, so keep linked files out of git with .gitignore.

## Quotes

- "Your config lives in one place. Every repo points to it. Update the source once, every project picks it up instantly." (Summarizes the key benefit of the solution - centralized configuration management that eliminates manual synchronization across projects)

## Context

- Features: symbolic link creation, symlink panel in explorer sidebar, export/import link layouts, multi-repo config sharing

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
