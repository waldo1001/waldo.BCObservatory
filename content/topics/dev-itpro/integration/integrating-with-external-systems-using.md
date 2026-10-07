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
  at: "2026-10-07T16:30:41.512Z"
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
  changes:
    - change/bcapps/10437
    - change/bcapps/10466
    - change/bcapps/10526
    - change/bcapps/11846
    - change/bcapps/11895
    - change/bcapps/12055
    - change/bcapps/12070
    - change/bcapps/9014
    - change/bcapps/9124
    - change/bcapps/9426
    - change/bcapps/9430
    - change/bcapps/9637
    - change/bcapps/9872
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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10437 [FR E-Reporting] Add payment and invoice lifecycle messages](../../../changes/bcapps/10437.md) (code change): "E-Document message lifecycle infrastructure and French electronic invoicing support"
- [#10466 Resolve purchase lines to items on exact description match](../../../changes/bcapps/10466.md) (code change): "Inbound purchase invoice lines now resolve to items"
- [#10526 Use BaseApp's new PO Matching module in E-Documents](../../../changes/bcapps/10526.md) (code change): "E-Documents now leverages BaseApp's new PO Matching module"
- [#11846 Fix View file on outgoing E-Documents to open the exported file](../../../changes/bcapps/11846.md) (code change): "Opening the View file action on outgoing E-Documents now retrieves and downloads the exported file"
- [#11895 Make Reject Order reachable on inbound sales order drafts and confirm…](../../../changes/bcapps/11895.md) (code change): "The Reject Order action for inbound sales orders is now accessible directly from the Sales Document Draft page"
- [#12055 [E-Documents Core] Show error for unmatched inbound Order Response](../../../changes/bcapps/12055.md) (code change): "Unmatched inbound PEPPOL Order Responses now produce a descriptive error"
- [#12070 Fix inconsistent CLEAN27/CLEAN28 tags in E-Document apps](../../../changes/bcapps/12070.md) (code change): "E-Document apps now use consistent CLEAN27 and CLEAN28 tags"
- [#9014 [E-Document] Remove Access = Internal from E-Doc. Data Exchange Impl. codeunit](../../../changes/bcapps/9014.md) (code change): "Partners can now extend and reuse E-Document data exchange functions"
- [#9124 [E-Document] [Payables Agent] Users can personalize-in the Name column on the draft page](../../../changes/bcapps/9124.md) (code change): "New OnAfterGetMatchedEntityName integration event for connector apps"
- [#9426 [E-Document Formats] Migrate NAV PRs 247170 and 247176 into BCApps](../../../changes/bcapps/9426.md) (code change): "Migrate NAV PRs into BCApps. PINT A-NZ and Factura-E e-document formats"
- [#9430 Fix untrappable JSON error in E-Document ADI import (Bug 640122)](../../../changes/bcapps/9430.md) (code change): "Fix untrappable JSON error in E-Document ADI import"
- [#9637 [Event Requests] Add integration events across base app and SMTP module](../../../changes/bcapps/9637.md) (code change): "enable partners to customize standard behavior without modifying base application code"
- [#9872 Add missing telemetry event IDs to E-Document Session.LogMessage calls](../../../changes/bcapps/9872.md) (code change): "Added missing telemetry event IDs to 21 Session.LogMessage calls in E-Document"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
