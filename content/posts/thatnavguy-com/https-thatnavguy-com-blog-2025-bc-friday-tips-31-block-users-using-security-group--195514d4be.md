---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-31-block-users-using-security-group--195514d4be
type: post
title: "BC Friday Tips #31 Block Users using Security Group"
summary: Environment-level security groups in Azure AD restrict access to Business Central instances by allowing only group members to sign in. This approach works for both production and sandbox environments.
tier: community
language: en
tags:
  - security
  - access control
  - azure ad
  - environments
  - admin center
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:47:27.733Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: d10a359b5ebfac1c94d036342507ebcd33acc3c5f099d31b471c7da31c01fed3
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/
    title: "BC Friday Tips #31 Block Users using Security Group"
    date: "2025-05-09"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/
    title: "BC Friday Tips #31 Block Users using Security Group"
    date: "2025-05-09"
    commit: null
    t: null
    quote: Now, only members of the group can sign in.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/
    title: "BC Friday Tips #31 Block Users using Security Group"
    date: "2025-05-09"
    commit: null
    t: null
    quote: This can also be used to restrict sandbox access to testers only.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/
published_at: "2025-05-09T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 118
quotes:
  - text: Now, only members of the group can sign in.
    why_it_matters: "This demonstrates the core benefit: environment access is effectively restricted to group members only."
  - text: This can also be used to restrict sandbox access to testers only.
    why_it_matters: Shows a practical use case for the feature beyond just blocking users.
code_objects_mentioned: []
systems:
  - administration
versions_mentioned: []
---

# BC Friday Tips #31 Block Users using Security Group

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-05-09 · 118 words · tier community · **unreviewed** (machine-generated)

> Environment-level security groups in Azure AD restrict access to Business Central instances by allowing only group members to sign in. This approach works for both production and sandbox environments.

## Key points

- Create an Azure AD security group and add only authorized users to it
- Assign the security group to the environment in BC Admin Center
- Restart the environment to enforce access restrictions
- Useful for blocking most users or restricting sandbox access to testers only

## Quotes

- "Now, only members of the group can sign in." (This demonstrates the core benefit: environment access is effectively restricted to group members only.)
- "This can also be used to restrict sandbox access to testers only." (Shows a practical use case for the feature beyond just blocking users.)

## Context

- Features: environment-level security groups, user access restriction, Azure AD integration

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
