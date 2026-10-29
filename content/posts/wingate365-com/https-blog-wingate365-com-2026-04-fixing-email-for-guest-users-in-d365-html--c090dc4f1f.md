---
id: post/wingate365-com/https-blog-wingate365-com-2026-04-fixing-email-for-guest-users-in-d365-html--c090dc4f1f
type: post
title: Fixing Email for Guest Users in D365 Business Central
summary: Guest users in Dynamics 365 Business Central cannot use the built-in email connectors for sending email. This post describes a Current User Email API extension that uses Microsoft Graph to enable guest users to send email as themselves via delegated authentication, requiring one-time admin setup and per-user consent.
tier: community
language: en
tags:
  - guest users
  - email connectors
  - microsoft graph
  - oauth
  - entra b2b
  - guest access
  - identity
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:55:17.756Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 0c0a5b194f126317e7be12b2e2fa4a72df85d256b52406ae23c2fb4bb7881f74
evidence:
  - kind: blog
    url: https://blog.wingate365.com/2026/04/fixing-email-for-guest-users-in-d365.html
    title: Fixing Email for Guest Users in D365 Business Central
    date: "2026-04-26"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://blog.wingate365.com/2026/04/fixing-email-for-guest-users-in-d365.html
    title: Fixing Email for Guest Users in D365 Business Central
    date: "2026-04-26"
    commit: null
    t: null
    quote: Being able to send as yourself is an important capability
  - kind: blog
    url: https://blog.wingate365.com/2026/04/fixing-email-for-guest-users-in-d365.html
    title: Fixing Email for Guest Users in D365 Business Central
    date: "2026-04-26"
    commit: null
    t: null
    quote: The connector resolves the correct Graph token for whoever is sending at that moment
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://blog.wingate365.com/2026/04/fixing-email-for-guest-users-in-d365.html
source_id: wingate365-com
source_name: Wingate365
url: https://blog.wingate365.com/2026/04/fixing-email-for-guest-users-in-d365.html
published_at: "2026-04-26T20:41:00.000Z"
author: Andy Wingate
full_text: false
words: 957
quotes:
  - text: Being able to send as yourself is an important capability
    why_it_matters: Highlights why the solution matters for identity clarity in modern connected systems
  - text: The connector resolves the correct Graph token for whoever is sending at that moment
    why_it_matters: Explains the core technical approach that enables per-user email sending regardless of guest status
code_objects_mentioned:
  - other Connect Current User Email API page
  - other Email Setup Card
systems:
  - integration
  - administration
versions_mentioned:
  - 2026 wave 1
---

# Fixing Email for Guest Users in D365 Business Central

[Read the post](https://blog.wingate365.com/2026/04/fixing-email-for-guest-users-in-d365.html) · Wingate365 (Andy Wingate) · 2026-04-26 · 957 words · tier community · **unreviewed** (model text not yet checked)

> Guest users in Dynamics 365 Business Central cannot use the built-in email connectors for sending email. This post describes a Current User Email API extension that uses Microsoft Graph to enable guest users to send email as themselves via delegated authentication, requiring one-time admin setup and per-user consent.

## Key points

- Built-in email connectors (Current User and M365/Shared Mailbox) fail for Entra B2B guest users due to cross-tenant identity limitations
- The solution uses Microsoft Graph API with OAuth 2.0 Authorization Code plus PKCE flow to enable per-user email sending
- Admin registers an Entra app once with Mail.Send permission, users consent once through a popup, then email sends automatically
- Access tokens are stored per-user in IsolatedStorage with automatic silent refresh every 60 minutes
- The extension is open source on GitHub and available as a per-tenant extension for BC SaaS

## Quotes

- "Being able to send as yourself is an important capability" (Highlights why the solution matters for identity clarity in modern connected systems)
- "The connector resolves the correct Graph token for whoever is sending at that moment" (Explains the core technical approach that enables per-user email sending regardless of guest status)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "Connect Current User Email API page"
- other "Email Setup Card"

## Context

- Features: Current User Email API, Microsoft Graph email sending, OAuth 2.0 delegated authentication, Silent token refresh, Per-user token storage, Email attachments support, Multi-tenancy support
- Versions: 2026 wave 1

Source: Wingate365, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
