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
  state: reviewed
  by: opus
  at: "2026-10-08T02:01:04.620Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 48a1f96f222e5db1d727985ad52865ab080be7c6341874e21e42fb69f69724f9
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
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2025/bc-friday-tips-31-block-users-using-security-group.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:51:37.788Z"
---

# BC Friday Tips #31 Block Users using Security Group

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-31-block-users-using-security-group/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-05-09 · 118 words · tier community · reviewed (checked by Opus)

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
