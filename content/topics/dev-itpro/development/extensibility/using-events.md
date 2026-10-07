---
id: topic/dev-itpro/development/extensibility/using-events
type: topic
title: Using events
summary: "Events in Business Central AL development: event types, publishing, raising and subscribing, isolated events, discovering events with Event Recorder, deprecating external business events, UI notifications, and a workflow events walkthrough. It answers how to extend application behavior through events."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:15.642Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a75e4ecb4c5bc2947eda2302da81be5f412efddcb2cd379eefd69d3be23a8d1c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecate-external-business-events
    title: Deprecate external business events
    date: "2025-07-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-example
    title: Event example
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types
    title: Event types
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-discoverability
    title: Events discoverability
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-isolated
    title: Isolated events in AL
    date: "2021-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-notifications-developing
    title: Notifications
    date: "2025-01-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-publishing-events
    title: Publishing Events
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-raising-events
    title: Raising Events
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-subscribing-to-events
    title: Subscribing to events
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walkthrough-workflow-events-responses
    title: "Walkthrough: Implementing New Workflow Events and Responses"
    date: "2022-02-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecate-external-business-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-example
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-discoverability
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-isolated
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-notifications-developing
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-publishing-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-raising-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-subscribing-to-events
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walkthrough-workflow-events-responses
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extensibility
  localizations: []
  videos:
    - video/P-7dYVfB73E
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Extensibility
  - Using events
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extensibility
children: []
coverage:
  learn: 10
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 333d762410d8da9593a67b5f251849371d43d059d2186deb5309f4efe220cfad
narrative: generated
---

# Using events

> Events in Business Central AL development: event types, publishing, raising and subscribing, isolated events, discovering events with Event Recorder, deprecating external business events, UI notifications, and a workflow events walkthrough. It answers how to extend application behavior through events.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Using events · tier official · system development · narrative reviewed by Opus

## Overview

Events let components communicate in a loosely coupled way. A publisher defines an event, code raises it by calling the publisher method, and subscribers react with custom logic. The section covers the full cycle: the kinds of events (business, integration, global, database and page trigger events), how to publish them, how to raise them, and how to subscribe with the EventSubscriber attribute.

Start with Event types and Event example for the concepts, then Publishing Events, Raising Events and Subscribing to events for the mechanics. Events discoverability shows how to use the Event Recorder to find which events to subscribe to. Isolated events explain error handling when a subscriber fails.

Further pages cover related tasks: deprecating external business events so integrations can move to replacements, showing nonintrusive UI messages with the Notification data type, and a walkthrough that implements new workflow events and responses.

## Key points

- Event types include business events, integration events, global events, and database and page trigger events.
- Publisher methods are created in AL objects such as codeunits, pages and tables, using the BusinessEvent or IntegrationEvent attribute.
- Subscribers use the EventSubscriber attribute; the EventSubscriberInstance property is also covered.
- Event Recorder captures events while a scenario runs and generates AL snippets for subscribing.
- Isolated events let the publisher continue if a subscriber fails; the subscriber's errors are rolled back without affecting others.
- External business events are deprecated by marking them obsolete pending first and removing them in a later version (page lists version 27.0), using the Obsolete and ExternalBusinessEvent attributes and a DisplayName prefix.
- Notifications use the Notification data type with Message, Scope, Send, AddAction, SetData and GetData methods in the web client.
- A walkthrough shows how to add new workflow events and responses by registering them through event subscribers.

## Learn pages

- [Deprecate external business events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecate-external-business-events): Learn how to deprecate external business events in AL for Business Central.
- [Event example](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-example): This article shows a simple example of how to use events in Business Central.
- [Event types](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types): Business Central supports different types of events including BusinessEvent, IntegrationEvent, Global, and trigger events.
- [Events discoverability](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-discoverability): Using the Event Recorder, you can record the events that are published and raised while performing the actions of your scenario.
- [Isolated events in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-events-isolated): Describes how isolated events work in Business Central.
- [Notifications](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-notifications-developing): Learn how to use notifications in the development environment to send nonintrusive information to the user interface in Business Central.
- [Publishing Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-publishing-events): This article describes how to create an event publisher method to publish business and integration events.
- [Raising Events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-raising-events): This article describes how to modify the application to raise an event in Dynamics 365 Business Central.
- [Subscribing to events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-subscribing-to-events): Designing event subscribers in AL for Business Central.
- [Walkthrough: Implementing New Workflow Events and Responses](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walkthrough-workflow-events-responses): Learn how you can extend the native workflows by adding workflow events and responses in code to support additional business scenarios.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central Under the Hood episode 6: We Have Too Many Events!](../../../../videos/P-7dYVfB73E.md) (video): "Integration Events; Workflow Events; Event Usage Telemetry; Handled events"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
