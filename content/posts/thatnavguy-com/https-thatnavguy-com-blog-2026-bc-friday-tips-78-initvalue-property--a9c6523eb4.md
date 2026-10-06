---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-78-initvalue-property--a9c6523eb4
type: post
title: "BC Friday Tips #78 InitValue Property"
summary: The InitValue property sets a default value for new table fields when records are created, initialized, or cleared. This property applies only to new records and cannot be used on standard fields through table extensions.
tier: community
language: en
tags:
  - table fields
  - al properties
  - default values
  - record initialization
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:44:00.506Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 783b89d5969b2ba385167dccc245789911a822b117684c242d9799e8288fb38c
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-78-initvalue-property/
    title: "BC Friday Tips #78 InitValue Property"
    date: "2026-08-07"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-78-initvalue-property/
    title: "BC Friday Tips #78 InitValue Property"
    date: "2026-08-07"
    commit: null
    t: null
    quote: It only kicks in when a new record is created, or via Init(), Clear(), or ClearAll(). It won't touch existing records.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-78-initvalue-property/
    title: "BC Friday Tips #78 InitValue Property"
    date: "2026-08-07"
    commit: null
    t: null
    quote: You can't set InitValue on a standard field through a table extension.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-78-initvalue-property/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-78-initvalue-property/
published_at: "2026-08-07T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 110
quotes:
  - text: It only kicks in when a new record is created, or via Init(), Clear(), or ClearAll(). It won't touch existing records.
    why_it_matters: Clarifies when InitValue applies and that it does not modify existing data
  - text: You can't set InitValue on a standard field through a table extension.
    why_it_matters: Important limitation when extending standard tables
code_objects_mentioned:
  - other InitValue
systems:
  - development
versions_mentioned: []
---

# BC Friday Tips #78 InitValue Property

> The InitValue property sets a default value for new table fields when records are created, initialized, or cleared. This property applies only to new records and cannot be used on standard fields through table extensions.

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-78-initvalue-property/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-08-07 · 110 words · tier community · **unreviewed** (machine-generated)

## Key points

- InitValue provides a default value for table fields without requiring code
- It activates when new records are created or when Init(), Clear(), or ClearAll() are called
- Does not affect existing records, only new ones
- Cannot be applied to standard fields through table extensions

## Quotes

- "It only kicks in when a new record is created, or via Init(), Clear(), or ClearAll(). It won't touch existing records." (Clarifies when InitValue applies and that it does not modify existing data)
- "You can't set InitValue on a standard field through a table extension." (Important limitation when extending standard tables)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- other "InitValue"

## Context

- Features: InitValue property, Default field values, Record initialization

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
