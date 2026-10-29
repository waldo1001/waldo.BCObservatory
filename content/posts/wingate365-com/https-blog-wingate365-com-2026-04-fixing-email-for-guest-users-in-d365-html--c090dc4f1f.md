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
  state: reviewed
  by: opus
  at: "2026-10-29T22:03:30.374Z"
  flags: []
generated:
  at: "2026-10-29T21:55:00.611Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 1dc6a2e6e46ead36f1fe8c917124069e9ddfe899c76b3ac31970b4f1197cdbf0
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
cautions:
  - kind: gotcha
    quote: the built-in email connectors don't work properly for guest users
    objects: []
    events: []
    versions:
      - 2026 wave 1
  - kind: preview-disclaimer
    quote: the current release is a working proof of concept - Phase 1 and 2 are complete
    objects: []
    events: []
    versions: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Wingate365
  favicon: https://blog.wingate365.com/favicon.svg
  probed_at: "2026-10-29T21:59:48.898Z"
---

# Fixing Email for Guest Users in D365 Business Central

[Read the post](https://blog.wingate365.com/2026/04/fixing-email-for-guest-users-in-d365.html) · Wingate365 (Andy Wingate) · 2026-04-26 · 957 words · tier community · reviewed (checked by Opus)

> Guest users in Dynamics 365 Business Central cannot use the built-in email connectors for sending email. This post describes a Current User Email API extension that uses Microsoft Graph to enable guest users to send email as themselves via delegated authentication, requiring one-time admin setup and per-user consent.

## Key points

- Built-in Current User and M365/Shared Mailbox connectors fail for Entra B2B guest users, leaving only SMTP
- The extension sends mail via Microsoft Graph using the OAuth 2.0 Authorization Code plus PKCE delegated flow, so mail comes from the user's real address
- Admin registers one Entra app with Mail.Send once; each user consents once on the Connect Current User Email API page
- Tokens are kept per user in IsolatedStorage and silently renewed when they expire after about an hour
- Open source PTE for BC SaaS; Phase 3 plans security hardening, Rest Client adoption, multi-tenant setup and attachment support

## Quotes

- "Being able to send as yourself is an important capability" (Highlights why the solution matters for identity clarity in modern connected systems)
- "The connector resolves the correct Graph token for whoever is sending at that moment" (Explains the core technical approach that enables per-user email sending regardless of guest status)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "Connect Current User Email API page"
- other "Email Setup Card"

## Heads up

- gotcha: "the built-in email connectors don't work properly for guest users" (about version 2026 wave 1)
- preview-disclaimer: "the current release is a working proof of concept - Phase 1 and 2 are complete"

## Context

- Features: Current User Email API, Microsoft Graph email sending, OAuth 2.0 delegated authentication, Silent token refresh, Per-user token storage, Email attachments support, Multi-tenancy support
- Versions: 2026 wave 1

Source: Wingate365, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
