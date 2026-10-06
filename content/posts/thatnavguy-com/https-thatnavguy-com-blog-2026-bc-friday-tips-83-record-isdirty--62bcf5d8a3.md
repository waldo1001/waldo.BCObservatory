---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-83-record-isdirty--62bcf5d8a3
type: post
title: "BC Friday Tips #83 Check Whether a Record Has Changed"
summary: The Record.IsDirty() method detects whether a record has been modified without requiring manual tracking. This pattern simplifies code when applying multiple field updates to a record.
tier: community
language: en
tags:
  - al development
  - record operations
  - code optimization
  - best practices
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:20:11.985Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 585fb0611e42e7fcb89eaff7f861e8899db5209f33c3c1dd06269bf7e11b7011
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-83-record-isdirty/
    title: "BC Friday Tips #83 Check Whether a Record Has Changed"
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-83-record-isdirty/
    title: "BC Friday Tips #83 Check Whether a Record Has Changed"
    date: "2026-10-02"
    commit: null
    t: null
    quote: Record.IsDirty() is available from runtime 18, which is BC 29.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-83-record-isdirty/
    title: "BC Friday Tips #83 Check Whether a Record Has Changed"
    date: "2026-10-02"
    commit: null
    t: null
    quote: No need to maintain an IsModified Boolean yourself.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-83-record-isdirty/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-83-record-isdirty/
published_at: "2026-10-02T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 124
quotes:
  - text: Record.IsDirty() is available from runtime 18, which is BC 29.
    why_it_matters: Identifies the version availability of this feature for developers to determine compatibility with their systems
  - text: No need to maintain an IsModified Boolean yourself.
    why_it_matters: Highlights the key benefit of reducing boilerplate code and manual state management
code_objects_mentioned: []
systems:
  - development
versions_mentioned:
  - BC 29
  - runtime 18
---

# BC Friday Tips #83 Check Whether a Record Has Changed

> The Record.IsDirty() method detects whether a record has been modified without requiring manual tracking. This pattern simplifies code when applying multiple field updates to a record.

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-83-record-isdirty/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-10-02 · 124 words · tier community · **unreviewed** (machine-generated)

## Key points

- Record.IsDirty() automatically tracks changes to any field on a record
- Eliminates the need to maintain a separate IsModified Boolean variable
- Available from runtime 18 (BC 29); use RecordRef.IsDirty() for earlier versions
- Reduces code complexity when validating and modifying multiple fields

## Quotes

- "Record.IsDirty() is available from runtime 18, which is BC 29." (Identifies the version availability of this feature for developers to determine compatibility with their systems)
- "No need to maintain an IsModified Boolean yourself." (Highlights the key benefit of reducing boilerplate code and manual state management)

## Context

- Features: Record.IsDirty(), RecordRef.IsDirty(), Validate method, Modify method
- Versions: BC 29, runtime 18

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
