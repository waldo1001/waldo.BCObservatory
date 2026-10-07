---
id: topic/dev-itpro/integration/integrating-with-external-systems-using
type: topic
title: Integrating with external systems using events
summary: "Event-based integration of Business Central with external systems: business events (preview) that notify or trigger external systems via Dataverse and Power Automate, and webhooks that push notifications when entities change. It answers questions on subscribing to events, registering webhooks, and handling notifications."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:51.650Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4998e2ad7d0a01393998828bad1b7690e29f557578296e8ccc9ff0b1c9613492
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/business-events-overview
    title: Business events on Business Central (preview)
    date: "2025-04-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/dynamics-subscriptions
    title: Working with webhooks
    date: "2026-03-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/business-events-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/dynamics-subscriptions
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with external systems using events
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 7b01fcfd0114917bb1dd15f243b051ffc89de365454052135af57f304ef9685e
narrative: generated
---

# Integrating with external systems using events

> Event-based integration of Business Central with external systems: business events (preview) that notify or trigger external systems via Dataverse and Power Automate, and webhooks that push notifications when entities change. It answers questions on subscribing to events, registering webhooks, and handling notifications.

Path: [Integration](../integration.md) > Integrating with external systems using events · tier official · system integration · narrative reviewed by Opus

## Overview

This area covers two ways for external systems to react to what happens in Business Central. Business events (preview) let partners and customers notify and trigger external systems when actions occur, and they integrate with Dataverse and Power Automate. The page is associated with 2023 release wave 1. Webhooks push notifications when entities change, and are managed through the REST API.

The business events page describes business event subscriptions, custom business events, external webhooks and an event catalog. The webhooks page covers registering, renewing and managing subscriptions on entities. It also covers handshake validation, client state, change types, notification retries and use with custom APIs.

Start with the business events page if you want to trigger Power Automate flows or Dataverse scenarios from business actions. Start with the webhooks page if you need entity-level change notifications through the REST API.

## Key points

- Business events are in preview, and the page is associated with 2023 release wave 1.
- Business events notify or trigger external systems when actions occur in Business Central.
- Business events integrate with Dataverse and Power Automate flows, and support custom business events, external webhooks and an event catalog.
- Webhooks push notifications when entities change; the webhooks page references version 19.
- Webhook subscriptions are registered, renewed and managed via the REST API.
- Supported webhook change types are created, updated, deleted and collection.
- Webhook topics include handshake validation, client state and notification retries.
- Webhooks can be used with custom APIs.

## Learn pages

- [Business events on Business Central (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/business-events-overview): Business events provide our partners and customers a mechanism for notifying and triggering their external systems when actions are done on Business Central
- [Working with webhooks](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/dynamics-subscriptions): Overview of how to manage subscriptions to Dynamics 365 Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
