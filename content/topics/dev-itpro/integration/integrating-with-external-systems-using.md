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
  at: "2026-11-12T00:57:40.556Z"
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
  videos:
    - video/S5Xw-b8YF-c
  posts:
    - post/aardvarklabs-blog/2907
    - post/demiliani-com/11817
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4218333995173748236--f38f8fc25c
  guidelines: []
  changes:
    - change/bcapps/10466
    - change/bcapps/10480
    - change/bcapps/10526
    - change/bcapps/13065
    - change/bcapps/13174
    - change/bcapps/13507
    - change/bcapps/13508
    - change/bcapps/9014
    - change/bcapps/9124
    - change/bcapps/9208
learn_toc_path:
  - Integration
  - Integrating with external systems using events
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 7b01fcfd0114917bb1dd15f243b051ffc89de365454052135af57f304ef9685e
narrative: generated
---

# Integrating with external systems using events

> Event-based integration of Business Central with external systems: business events (preview) that notify or trigger external systems via Dataverse and Power Automate, and webhooks that push notifications when entities change. It answers questions on subscribing to events, registering webhooks, and handling notifications.

Path: [Integration](../integration.md) > Integrating with external systems using events · tier official · system integration · narrative reviewed (checked by Opus)

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
  - In the observatory: [Codeunit 6153 "API Webhook Notification Mgt."](../../../objects/codeunit/6153.md), [Codeunit 6154 "API Webhook Notification Send"](../../../objects/codeunit/6154.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10466 Resolve purchase lines to items on exact description match](../../../changes/bcapps/10466.md) (code change): "Inbound purchase invoice lines now resolve to items when the description exactly matches"
- [#10480 [Bug Fix] #250: Honor ImportFSSolution TryFunction result in FS setup wizard](../../../changes/bcapps/10480.md) (code change): "Field Service connection setup wizard now properly checks the result of the ImportFSSolution function"
- [#10526 Use BaseApp's new PO Matching module in E-Documents](../../../changes/bcapps/10526.md) (code change): "E-Documents now leverages BaseApp's new PO Matching module to support one-to-many matching"
- [#13065 Issue#10580:[Extensibility Request] Make Business Central's E-Document object extensible.](../../../changes/bcapps/13065.md) (code change): "E-Document Purchase Draft page is made extensible"
- [#13174 [E-Documents] Remove the PDF reader service credit memo upgrade](../../../changes/bcapps/13174.md) (code change): "Removes obsolete upgrade code with no behavior change"
- [#13507 [E-Document] Add AKV switch for PA-related LLM calls](../../../changes/bcapps/13507.md) (code change): "E-Document AI processing now supports switching between LLM models"
- [#13508 [E-Document] Add AKV switch for PA LLM calls (29.x)](../../../changes/bcapps/13508.md) (code change): "E-Document AI processing now supports switching between different LLM models"
- [#9014 [E-Document] Remove Access = Internal from E-Doc. Data Exchange Impl. codeunit](../../../changes/bcapps/9014.md) (code change): "Partners can now call its functions from their own E-Document implementations"
- [#9124 [E-Document] [Payables Agent] Users can personalize-in the Name column on the draft page](../../../changes/bcapps/9124.md) (code change): "New OnAfterGetMatchedEntityName integration event for connector apps"
- [#9208 [Enforced Digital Vouchers] - Attaching EDocuments when using Digital Vouchers](../../../changes/bcapps/9208.md) (code change): "Attaching EDocuments when using Digital Vouchers"
- [Debugging Business Event Subscriptions in Business Central](../../../posts/aardvarklabs-blog/2907.md) (community post): "Business Event Subscriptions which function as web hooks"
- [Azure Function SQL Trigger: how to use it (and why it can be useful in your Business Central projects)](../../../posts/demiliani-com/11817.md) (community post): "external systems can push data to Business Central automatically when changes occur"
- [How to Export CSV Files from Business Central Using CSV Buffer (Developer Guide)](../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4218333995173748236--f38f8fc25c.md) (community post): "export data from Business Central to CSV format using the CSV Buffer table"
- [What's New: APIs in E-Documents (2025 release wave 2)](../../../videos/S5Xw-b8YF-c.md) (video): "E-Document Business Events; E-Document Export via Business Events"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
