---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-46-warning-on-importing-or-applying-a-large-configurat--7ea3f992ed
type: post
title: "BC Friday Tips #46 Warning on Importing or Applying a Large Configuration Package"
summary: Business Central warns when importing or applying large configuration packages because they can degrade performance and lock out users. Import warnings trigger at files over 3MB, and apply warnings trigger at packages with more than 5,000 records total.
tier: community
language: en
tags:
  - configuration packages
  - performance
  - data import
  - system warnings
  - user impact
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
  input_hash: 1fa268149dc99d0bbefb69d82145d9d52f3410ebdda7d00443e1ae6b0967331d
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-46-warning-on-importing-or-applying-a-large-configuration-package/
    title: "BC Friday Tips #46 Warning on Importing or Applying a Large Configuration Package"
    date: "2025-09-05"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-46-warning-on-importing-or-applying-a-large-configuration-package/
    title: "BC Friday Tips #46 Warning on Importing or Applying a Large Configuration Package"
    date: "2025-09-05"
    commit: null
    t: null
    quote: Large packages can slow down performance and even block other users while they're being processed.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-46-warning-on-importing-or-applying-a-large-configuration-package/
    title: "BC Friday Tips #46 Warning on Importing or Applying a Large Configuration Package"
    date: "2025-09-05"
    commit: null
    t: null
    quote: "Import: when the file is larger than 3MB. Apply: when the package has more than 5,000 records."
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-46-warning-on-importing-or-applying-a-large-configuration-package/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-46-warning-on-importing-or-applying-a-large-configuration-package/
published_at: "2025-09-05T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 131
quotes:
  - text: Large packages can slow down performance and even block other users while they're being processed.
    why_it_matters: Explains the business impact of large configuration packages on system availability and user productivity
  - text: "Import: when the file is larger than 3MB. Apply: when the package has more than 5,000 records."
    why_it_matters: Defines the exact thresholds that trigger performance warnings in Business Central
code_objects_mentioned:
  - codeunit Config. Package Management
systems:
  - administration
  - platform
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2025/bc-friday-tips-46-warning-on-importing-or-applying-a-large-configuration-package.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:51:17.764Z"
---

# BC Friday Tips #46 Warning on Importing or Applying a Large Configuration Package

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-46-warning-on-importing-or-applying-a-large-configuration-package/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-09-05 · 131 words · tier community · **unreviewed** (machine-generated)

> Business Central warns when importing or applying large configuration packages because they can degrade performance and lock out users. Import warnings trigger at files over 3MB, and apply warnings trigger at packages with more than 5,000 records total.

## Key points

- Import warnings occur for configuration package files larger than 3MB
- Apply warnings occur for packages containing more than 5,000 records across the entire package
- Large package operations can slow the system and prevent other users from working
- Schedule large package imports and applications outside business hours to minimize disruption

## Quotes

- "Large packages can slow down performance and even block other users while they're being processed." (Explains the business impact of large configuration packages on system availability and user productivity)
- "Import: when the file is larger than 3MB. Apply: when the package has more than 5,000 records." (Defines the exact thresholds that trigger performance warnings in Business Central)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- codeunit "Config. Package Management"

## Context

- Features: configuration package import, configuration package application, performance warnings, system load management

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
