---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-30-dataaccessintent--bb244afad1
type: post
title: "BC Friday Tips #30 DataAccessIntent"
summary: The DataAccessIntent property can be set to ReadOnly on API pages and reports to direct the server to use a replica database, reducing load on the primary database and improving overall performance.
tier: community
language: en
tags:
  - dataaccessintent
  - performance
  - database
  - api pages
  - read-only operations
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-08T02:01:03.638Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 51cde34a7184115485045a3bfb96da880bace89e67fa512117137abb2fddb2e1
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-30-dataaccessintent/
    title: "BC Friday Tips #30 DataAccessIntent"
    date: "2025-05-02"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-30-dataaccessintent/
    title: "BC Friday Tips #30 DataAccessIntent"
    date: "2025-05-02"
    commit: null
    t: null
    quote: Set DataAccessIntent to ReadOnly when you only perform read-only data for API pages or reports.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-30-dataaccessintent/
    title: "BC Friday Tips #30 DataAccessIntent"
    date: "2025-05-02"
    commit: null
    t: null
    quote: It signals the server to use a replica database when available.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-30-dataaccessintent/
    title: "BC Friday Tips #30 DataAccessIntent"
    date: "2025-05-02"
    commit: null
    t: null
    quote: Using the replica lessens the load on the primary database, ensuring smoother operation for others.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-30-dataaccessintent/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-30-dataaccessintent/
published_at: "2025-05-02T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 77
quotes:
  - text: Set DataAccessIntent to ReadOnly when you only perform read-only data for API pages or reports.
    why_it_matters: This is the core usage guidance for when to apply the property.
  - text: It signals the server to use a replica database when available.
    why_it_matters: Explains the mechanism of how the property improves performance.
  - text: Using the replica lessens the load on the primary database, ensuring smoother operation for others.
    why_it_matters: Clarifies the benefit of using replica databases for read-only operations.
code_objects_mentioned: []
systems:
  - platform
  - reporting
  - integration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2025/bc-friday-tips-30-dataaccessintent.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:51:40.157Z"
---

# BC Friday Tips #30 DataAccessIntent

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-30-dataaccessintent/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-05-02 · 77 words · tier community · reviewed (checked by Opus)

> The DataAccessIntent property can be set to ReadOnly on API pages and reports to direct the server to use a replica database, reducing load on the primary database and improving overall performance.

## Key points

- DataAccessIntent property signals the server to use a replica database when available
- Set to ReadOnly for pages and reports that only perform read-only operations
- Reduces load on the primary database for better performance
- A single property setting can improve system efficiency

## Quotes

- "Set DataAccessIntent to ReadOnly when you only perform read-only data for API pages or reports." (This is the core usage guidance for when to apply the property.)
- "It signals the server to use a replica database when available." (Explains the mechanism of how the property improves performance.)
- "Using the replica lessens the load on the primary database, ensuring smoother operation for others." (Clarifies the benefit of using replica databases for read-only operations.)

## Context

- Features: DataAccessIntent property, replica database routing

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
