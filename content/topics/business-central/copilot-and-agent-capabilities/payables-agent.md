---
id: topic/business-central/copilot-and-agent-capabilities/payables-agent
type: topic
title: Payables Agent
summary: Payables Agent in Business Central automates vendor invoice processing from email PDFs into draft purchase invoices. The section covers what the agent does, how to set it up, how to manage known senders, how to supervise its work, and common questions.
tier: official
language: en
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:32.692Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0563794f7bc7c57561be042299f93f6875e7bf90f8a83cc7e4b8fab01bf61271
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-agent-known-senders
    title: Manage known senders for Payables Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faqs-payables-agent
    title: Payables Agent Frequently Asked Questions
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-agent
    title: Payables Agent Overview in Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-agent-setup
    title: Set Up Payables Agent in Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/supervise-agent-tasks
    title: Supervise Agent Activities in Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/payables-agent-known-senders
    - https://learn.microsoft.com/dynamics365/business-central/faqs-payables-agent
    - https://learn.microsoft.com/dynamics365/business-central/payables-agent
    - https://learn.microsoft.com/dynamics365/business-central/payables-agent-setup
    - https://learn.microsoft.com/dynamics365/business-central/supervise-agent-tasks
  objects:
    - object/page/3304
    - object/page/3313
    - object/page/4400
    - object/page/4410
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/FBrZwXpOhmM
    - video/OvI9jaA1mJY
    - video/uh5S1i7uDlo
    - video/YsmwHqxL1Zc
  posts:
    - post/demiliani-com/12076
    - post/thinkaboutit-be/7496
    - post/thinkaboutit-be/8022
    - post/thinkaboutit-be/8062
  guidelines: []
  changes:
    - change/bcapps/10005
learn_toc_path:
  - Copilot and agent capabilities
  - Payables Agent
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 5
  code: 4
  video: 4
  blog: 4
  guideline: 0
bc_forms:
  - 3304
  - 3313
  - 4400
  - 4410
member_hash: 4e14747dfd5a613cf22c53b5f3ab992b613c235ba02063a48a6896c417002439
narrative: generated
---

# Payables Agent

> Payables Agent in Business Central automates vendor invoice processing from email PDFs into draft purchase invoices. The section covers what the agent does, how to set it up, how to manage known senders, how to supervise its work, and common questions.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Payables Agent · tier official · system purchasing · narrative reviewed by Opus

## Overview

Payables Agent is an autonomous agent that monitors an email inbox for PDF invoices, extracts the data with Azure Document Intelligence, identifies the vendor (or creates one), classifies accounts, proposes matches to purchase order lines, and creates draft purchase invoices. A supervisor then reviews the drafts, so human oversight stays in place.

The pages follow the life cycle of the agent. The overview and the FAQ explain the workflow and capabilities. The setup page walks through the assisted setup guide: email account and monitoring, draft creation, permissions, user access and activation. The known senders page covers per-sender review policies after setup. The supervision page explains how to review and approve the agent's work.

Start with the overview to understand the workflow, then follow the setup page. Use the known senders and supervision pages for day-to-day operation.

## Key points

- The agent monitors email, extracts PDF invoice data with Azure Document Intelligence, identifies vendors, matches purchase order lines and creates invoice drafts.
- Setup runs through an assisted setup guide covering email account monitoring, purchase document draft creation, permissions, user access and activation.
- Trial mode allows 50 free invoices; Copilot credit consumption can be tracked.
- Known senders can have a review policy per sender: Ask, Approve or Reject, controlling which invoices are processed automatically, reviewed or rejected.
- Vendors can be created by the agent when none is identified.
- Supervisors review work in the Tasks pane or directly on document pages, using the data review bar.
- During review a supervisor can confirm and approve, give instructions to the agent, or stop the task.
- Supervision applies to Business Central agents such as Payables Agent and Sales Order Agent.

## Learn pages

- [Manage known senders for Payables Agent](https://learn.microsoft.com/dynamics365/business-central/payables-agent-known-senders): Manage per-sender email review policies for the Payables Agent to automatically approve or reject emails from trusted or unwanted vendors.
- [Payables Agent Frequently Asked Questions](https://learn.microsoft.com/dynamics365/business-central/faqs-payables-agent): Learn how AI automates purchase invoice creation in Business Central, including setup, capabilities, limitations, and responsible use.
- [Payables Agent Overview in Business Central](https://learn.microsoft.com/dynamics365/business-central/payables-agent): Payables Agent automates vendor invoice processing in Business Central. Speed up accounts payable, reduce bottlenecks, and simplify invoice management.
- [Set Up Payables Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/payables-agent-setup): Payables Agent lets you automate vendor invoice processing in Business Central. Follow these steps to activate, configure, and manage user access.
- [Supervise Agent Activities in Business Central](https://learn.microsoft.com/dynamics365/business-central/supervise-agent-tasks): Review agent-generated documents, approve AI suggestions, give instructions to agents, and manage tasks in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10005 Improve error messages when there are no quantities to reverse in shipped/received lines in Sales/Purchase/Transfer](../../../changes/bcapps/10005.md) (code change): "Error messages now distinguish between no reversible quantities and already-reversed lines, providing clearer guidance for users and AI agents"
- [Dynamics 365 Business Central: introducing the Payables Agent.](../../../posts/demiliani-com/12076.md) (community post): "Payables Agent automates AP workflows by retrieving vendor invoices from email"
- [Quick Tip: Business Central Update 27.3 – What’s New](../../../posts/thinkaboutit-be/7496.md) (community post): "Payables Agent now matches purchase invoices to orders intelligently"
- [Quick Tip: What’s in Business Central Update 28.3](../../../posts/thinkaboutit-be/8022.md) (community post): "Payables Agent now allows free trials processing up to 50 invoices"
- [Quick Tip: What’s in Business Central Update 28.4](../../../posts/thinkaboutit-be/8062.md) (community post): "Payables Agent known senders to skip redundant email classification"
- [What's Cooking in Business Central: Agent Reasoning and Transparency](../../../videos/FBrZwXpOhmM.md) (video): "agent reasoning; transparency; payables agent; trust; ai adoption"
- [What's New: Payables Agent (2026 release wave 1)](../../../videos/OvI9jaA1mJY.md) (video): "Payables Agent free trial and credit-based pricing"
- [Transform Vendor Invoice Processing With the Payables Agent in Dynamics 365 Business Central (2025)](../../../videos/uh5S1i7uDlo.md) (video): "Payables agent; vendor invoice processing; ai automation; intelligent automation"
- [Introducing: Payables Agent (2025 release wave 1)](../../../videos/YsmwHqxL1Zc.md) (video): "Payables Agent; Three-way matching and purchase order mapping"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 3304 "Payables Agent Setup"](../../../objects/page/3304.md) · captioned "Configure Payables Agent" · on [Table 3303 "Payables Agent Setup"](../../../objects/table/3303.md)
- [Page 3313 "PA Known Senders"](../../../objects/page/3313.md) · captioned "Payables Agent Known Senders" · on [Table 3308 "PA Known Sender"](../../../objects/table/3308.md)
- [Page 4400 "SOA Setup"](../../../objects/page/4400.md) · captioned "Configure Sales Order Agent" · on [Table 4325 "SOA Setup"](../../../objects/table/4325.md)
- [Page 4410 "SOA Multi Items Availability"](../../../objects/page/4410.md) · captioned "Item Availability" · on [Table 27 "Item"](../../../objects/table/27.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
