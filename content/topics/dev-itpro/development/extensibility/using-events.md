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
  at: "2026-10-08T02:14:42.423Z"
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
  posts:
    - post/gerardorenteria-blog/15143
  guidelines: []
  changes:
    - change/bcapps/10036
    - change/bcapps/10156
    - change/bcapps/10167
    - change/bcapps/10169
    - change/bcapps/10210
    - change/bcapps/10235
    - change/bcapps/10487
    - change/bcapps/10488
    - change/bcapps/11664
    - change/bcapps/8771
    - change/bcapps/9067
    - change/bcapps/9077
    - change/bcapps/9225
    - change/bcapps/9479
    - change/bcapps/9637
    - change/bcapps/9950
    - change/bcquality/145
    - change/bcquality/98
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 333d762410d8da9593a67b5f251849371d43d059d2186deb5309f4efe220cfad
narrative: generated
---

# Using events

> Events in Business Central AL development: event types, publishing, raising and subscribing, isolated events, discovering events with Event Recorder, deprecating external business events, UI notifications, and a workflow events walkthrough. It answers how to extend application behavior through events.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Using events · tier official · system development · narrative reviewed (checked by Opus)

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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10036 [SOA]: Bugbash for releases 28.x - Contact unable to find due to Qasim map to Megan, different names](../../../../changes/bcapps/10036.md) (code change): "Contact List exposes OnBeforeFindRecord event handled only during SOA sessions"
- [#10156 [Bug][SubscriptionBilling] Assign Subscription Lines dialog does not identify the sales line it was opened for](../../../../changes/bcapps/10156.md) (code change): "New extension event OnAfterGetAssignSubscriptionLinesCaption allows customization"
- [#10167 [Extensibility Request] issue 30240: add event before adding price list lines](../../../../changes/bcapps/10167.md) (code change): "A cancellable event is added before price list line creation so extensions can implement"
- [#10169 [Extensibility Request] issue 30081: add VAT registration number override event](../../../../changes/bcapps/10169.md) (code change): "An integration event allows extensions to override VAT registration number formatting"
- [#10210 [Bug][Subscription Billing] "Delete Invoiced Sales Orders" leaves orphaned Sales Subscription Lines behind](../../../../changes/bcapps/10210.md) (code change): "Added two event subscribers to handle deletion of subscription lines when sales documents are deleted"
- [#10235 [Bug][SubscriptionBilling] Enforce Subscription Line Start Date change rules on all edit paths](../../../../changes/bcapps/10235.md) (code change): "Provides extensibility hook via OnAfterCheckSubscriptionLineStartDateChangeAllowed event"
- [#10487 Add integration event before inserting the cost allocation journal line](../../../../changes/bcapps/10487.md) (code change): "New integration event OnWriteJournalLineOnBeforeInsertTempCostJournalLine added to Cost Allocation report"
- [#10488 Add integration event before inserting the outgoing IC sales line buffer](../../../../changes/bcapps/10488.md) (code change): "New event OnPostICSalesLineToICPartnerInboxOnBeforeBufferICInboxSalesLineInsert fires per sales line"
- [#11664 Add OnBefore event for approval insertion checks](../../../../changes/bcapps/11664.md) (code change): "An integration event is added to the Approvals Mgmt. codeunit that allows extensions to skip journal insertion approval checks"
- [#8771 Add OnBeforeFilterRemovedSourceRecords integration event in Email Impl](../../../../changes/bcapps/8771.md) (code change): "An OnBeforeFilterRemovedSourceRecords integration event was added to the Email codeunit"
- [#9067 Production Definition Wizard - Implementation](../../../../changes/bcapps/9067.md) (code change): "Event publishers expanded with new parameters and integration points like OnBeforeGetProdOrderNeeds"
- [#9077 [Quality Management] Bug 620326: Reset IsChangingStatus on handled Reopen/Finish early-exit](../../../../changes/bcapps/9077.md) (code change): "Quality Management's Reopen/Finish procedures now properly reset the IsChangingStatus flag"
- [#9225 [Extensibility][SubscriptionBilling]: Make usage data billing filtering extensible in SetUsageDataBillingFilters](../../../../changes/bcapps/9225.md) (code change): "Added OnAfterSetUsageDataBillingFilters integration event for extensibility"
- [#9479 [Master]-]Withholding Tax Entries are not generated at payment because the Withholding Tax. Prod. Posting Group field gets not transferred to the payment line](../../../../changes/bcapps/9479.md) (code change): "The withholding tax production posting group is now transferred to payment lines during payment processing"
- [#9637 [Event Requests] Add integration events across base app and SMTP module](../../../../changes/bcapps/9637.md) (code change): "Ten new and extended integration events were added across the base application"
- [#9950 [Master] - Bug 645038 Withholding Tax entries from a previous posting preview appear on unrelated documents (e.g. expense report)](../../../../changes/bcapps/9950.md) (code change): "Withholding Tax entries from a previous posting preview appear on unrelated documents"
- [#145 Process Context via manual event subscriber pattern](../../../../changes/bcquality/145.md) (code change): "manual event subscriber bindings tied to variable scope instead of singleton flags"
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md) (code change): "Event parameter compatibility rules clarified: local/internal subscribers bind by name"
- [🧩 Deriving dimensions in Business Central beyond Default Dimensions](../../../../posts/gerardorenteria-blog/15143.md) (community post): "Hook into OnAfterGetRecDefaultDimIDProcedure to extend default dimensions without modifying standard code"
- [Business Central Under the Hood episode 6: We Have Too Many Events!](../../../../videos/P-7dYVfB73E.md) (video): "Integration Events; Workflow Events; Event Usage Telemetry; Handled events"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
