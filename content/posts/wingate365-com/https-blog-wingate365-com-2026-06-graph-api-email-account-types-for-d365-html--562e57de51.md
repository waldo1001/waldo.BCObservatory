---
id: post/wingate365-com/https-blog-wingate365-com-2026-06-graph-api-email-account-types-for-d365-html--562e57de51
type: post
title: Graph API Email account types for D365 BC
summary: An open source extension enables Business Central guest users to send email from their home domain addresses using Microsoft Graph API and Client Credentials authentication. The solution supports multi-tenant environments where users from different Entra tenancies need automatic email routing without per-user configuration.
tier: community
language: en
tags:
  - email
  - guest users
  - graph api
  - oauth
  - multi-tenancy
  - app registration
  - authentication
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-29T22:03:28.163Z"
  flags: []
generated:
  at: "2026-10-29T21:55:00.611Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 1909ca77edd285319415ffd19d402d6d7669ed8ab58ff6981a4d1f96494ae49b
evidence:
  - kind: blog
    url: https://blog.wingate365.com/2026/06/graph-api-email-account-types-for-d365.html
    title: Graph API Email account types for D365 BC
    date: "2026-06-07"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://blog.wingate365.com/2026/06/graph-api-email-account-types-for-d365.html
source_id: wingate365-com
source_name: Wingate365
url: https://blog.wingate365.com/2026/06/graph-api-email-account-types-for-d365.html
published_at: "2026-06-07T10:13:30.000Z"
author: Andy Wingate
full_text: false
words: 717
quotes: []
code_objects_mentioned:
  - other Current User (Microsoft Graph)
  - other App Registrations page
  - other Email Accounts page
systems:
  - integration
  - administration
  - development
versions_mentioned: []
cautions:
  - kind: gotcha
    quote: AI-assisted development is genuinely fast for AL extension work, but it absolutely requires someone who understands the platform to review what's being generated.
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
  probed_at: "2026-10-29T21:59:46.596Z"
---

# Graph API Email account types for D365 BC

[Read the post](https://blog.wingate365.com/2026/06/graph-api-email-account-types-for-d365.html) · Wingate365 (Andy Wingate) · 2026-06-07 · 717 words · tier community · reviewed (checked by Opus)

> An open source extension enables Business Central guest users to send email from their home domain addresses using Microsoft Graph API and Client Credentials authentication. The solution supports multi-tenant environments where users from different Entra tenancies need automatic email routing without per-user configuration.

## Key points

- Switched from OAuth delegated flow requiring user consent to Client Credentials app-only authentication eliminating per-user setup
- Admin configures one App Registration per home domain in Business Central, with automatic user matching at send time
- Supports both user mailboxes and shared mailboxes with full token security hardening using SecretText and encrypted storage
- Ideal for multi-tenant organizations where internal users and B2B guests need transparent email delivery from their respective domains

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "Current User (Microsoft Graph)"
- other "App Registrations page"
- other "Email Accounts page"

## Heads up

- gotcha: "AI-assisted development is genuinely fast for AL extension work, but it absolutely requires someone who understands the platform to review what's being generated."

## Context

- Features: Client Credentials OAuth authentication, Multi-tenancy support, User and shared mailbox support, CC, BCC and attachments, Token security hardening, Automatic domain matching, Graph API sendMail integration

Source: Wingate365, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
