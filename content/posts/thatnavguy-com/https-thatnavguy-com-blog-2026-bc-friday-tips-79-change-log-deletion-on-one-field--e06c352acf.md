---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-79-change-log-deletion-on-one-field--e06c352acf
type: post
title: "BC Friday Tips #79 Change Log Deletion on One Field"
summary: Enabling deletion logging on a single primary key field is sufficient to track who deleted a record in Business Central, avoiding unnecessary duplicate Change Log entries. This approach keeps the change log smaller and easier to review.
tier: community
language: en
tags:
  - change log
  - deletion logging
  - audit trail
  - data configuration
  - performance optimization
system: administration
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
  input_hash: 8489db84172e13d21dc13c0b501712e6b48b48e97eda79e4130d964aadb9b1b1
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-79-change-log-deletion-on-one-field/
    title: "BC Friday Tips #79 Change Log Deletion on One Field"
    date: "2026-08-14"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-79-change-log-deletion-on-one-field/
    title: "BC Friday Tips #79 Change Log Deletion on One Field"
    date: "2026-08-14"
    commit: null
    t: null
    quote: If you enable deletion logging for every field, Business Central can create many unnecessary Change Log entries.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-79-change-log-deletion-on-one-field/
    title: "BC Friday Tips #79 Change Log Deletion on One Field"
    date: "2026-08-14"
    commit: null
    t: null
    quote: Business Central can still capture who deleted the record.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-79-change-log-deletion-on-one-field/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-79-change-log-deletion-on-one-field/
published_at: "2026-08-14T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 113
quotes:
  - text: If you enable deletion logging for every field, Business Central can create many unnecessary Change Log entries.
    why_it_matters: Explains the problem of over-configuration that leads to bloated audit logs
  - text: Business Central can still capture who deleted the record.
    why_it_matters: Confirms that single-field logging provides sufficient deletion tracking capability
code_objects_mentioned: []
systems:
  - administration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/_astro/LogSomeFields.ByexN04Q_Z2qLt5u.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:15.434Z"
---

# BC Friday Tips #79 Change Log Deletion on One Field

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-79-change-log-deletion-on-one-field/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-08-14 · 113 words · tier community · **unreviewed** (machine-generated)

> Enabling deletion logging on a single primary key field is sufficient to track who deleted a record in Business Central, avoiding unnecessary duplicate Change Log entries. This approach keeps the change log smaller and easier to review.

## Key points

- Enable deletion logging on only one field in the primary key to capture deletion information
- Enabling logging on multiple fields creates redundant Change Log entries with duplicate information
- A smaller, cleaner change log makes investigation and troubleshooting easier
- Single-field logging approach provides the same deletion tracking result with less configuration noise

## Quotes

- "If you enable deletion logging for every field, Business Central can create many unnecessary Change Log entries." (Explains the problem of over-configuration that leads to bloated audit logs)
- "Business Central can still capture who deleted the record." (Confirms that single-field logging provides sufficient deletion tracking capability)

## Context

- Features: Change Log deletion tracking, audit logging

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
