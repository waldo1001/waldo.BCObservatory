---
id: topic/business-central/copilot-and-agent-capabilities/payables-agent
type: topic
title: Payables Agent
summary: Payables Agent is an autonomous AI agent in Business Central that processes vendor invoices and credit notes received by email. This section covers what it does, how to set it up, how to manage known senders, how supervisors review its work, and common questions.
tier: official
language: en
system: purchasing
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-28T01:08:05.989Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2bc37d692181ae55977d4b5700208e76ebdadaa22521c0eff8eeaf9c138528a3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-agent-known-senders
    title: Manage known senders for Payables Agent
    date: "2026-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faqs-payables-agent
    title: Payables Agent Frequently Asked Questions
    date: "2026-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-agent
    title: Payables Agent Overview in Business Central
    date: "2026-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-agent-setup
    title: Set Up Payables Agent in Business Central
    date: "2026-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/supervise-agent-tasks
    title: Supervise Agent Activities in Business Central
    date: "2026-11-10"
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
    - video/H5EuObmeF4o
    - video/OvI9jaA1mJY
    - video/uh5S1i7uDlo
    - video/Xc3ISQ7NAaQ
    - video/xJ8gYzvWnTI
    - video/YsmwHqxL1Zc
  posts:
    - post/demiliani-com/12076
    - post/thinkaboutit-be/7496
    - post/yzhums-com/65721
    - post/yzhums-com/68482
    - post/yzhums-com/72842
    - post/yzhums-com/75245
  guidelines: []
  changes:
    - change/bcapps/13361
    - change/bcapps/14329
    - change/bcapps/14442
learn_toc_path:
  - Copilot and agent capabilities
  - Payables Agent
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 5
  code: 4
  video: 7
  blog: 6
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

> Payables Agent is an autonomous AI agent in Business Central that processes vendor invoices and credit notes received by email. This section covers what it does, how to set it up, how to manage known senders, how supervisors review its work, and common questions.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Payables Agent · tier official · system purchasing · narrative **unreviewed** (model text not yet checked)

## Overview

The Payables Agent monitors a mailbox for vendor invoices and credit notes sent as PDFs. It extracts the document data, identifies or creates vendors, suggests account classifications, matches purchase orders, and creates draft purchase invoices or credit memos. It does not post anything. A supervisor reviews and approves the drafts before they are finalized.

The pages fit together in the order of use. Start with the overview and the FAQ to understand what the agent does. Then follow the setup page to configure mailbox monitoring, folders, processing rules, user access and Copilot credit use. The known senders page explains how to control which vendors' emails are processed. The supervision page covers day-to-day review of the agent's work.

## Key points

- The agent monitors email for vendor invoices and credit notes and extracts data from PDF attachments.
- It identifies and matches vendors, can create vendors, suggests account classifications and matches purchase orders.
- It creates draft purchase invoices and credit memos only. It does not post, and a supervisor reviews them before finalization.
- Setup covers trial mode, email account monitoring, mailbox folder configuration, email review policies, user access and Copilot credit consumption.
- The known senders list lets you set a policy per sender: approve automatically, request review, or reject.
- Senders can be added manually and each sender can have its own review policy.
- Supervisors review work in the Tasks pane or directly on document pages, using the data review bar, field suggestions with confidence indicators and agent instructions.
- The agent can request permissions, and the task timeline can be filtered. The supervision guidance also covers the Sales Order Agent.

## Learn pages

- [Manage known senders for Payables Agent](https://learn.microsoft.com/dynamics365/business-central/payables-agent-known-senders): Manage per-sender email review policies for the Payables Agent to automatically approve or reject emails from trusted or unwanted vendors.
- [Payables Agent Frequently Asked Questions](https://learn.microsoft.com/dynamics365/business-central/faqs-payables-agent): Learn how Payables Agent creates purchase invoices and credit memos in Business Central, including review controls, limitations, and responsible use.
- [Payables Agent Overview in Business Central](https://learn.microsoft.com/dynamics365/business-central/payables-agent): Payables Agent automates vendor invoice and credit note processing in Business Central. Review purchase drafts and prepare invoices and credit memos for posting.
  - In the observatory: [Page 6105 "Inbound E-Documents"](../../../objects/page/6105.md), [Page 9308 "Purchase Invoices"](../../../objects/page/9308.md), [Page 9309 "Purchase Credit Memos"](../../../objects/page/9309.md)
- [Set Up Payables Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/payables-agent-setup): Set up Payables Agent to process vendor invoices and credit notes in Business Central. Activate the agent, configure email monitoring, and manage user access.
  - In the observatory: [Page 460 "Purchases & Payables Setup"](../../../objects/page/460.md)
- [Supervise Agent Activities in Business Central](https://learn.microsoft.com/dynamics365/business-central/supervise-agent-tasks): Review agent-generated documents, approve AI suggestions, give instructions to agents, and manage tasks in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#13361 Foundation for Payables Agent V2.0](../../../changes/bcapps/13361.md) (code change): "Payables Agent v2.0, a rewrite in which the agent works directly on purchase invoices"
- [#14329 Optimizing check for PA eligibility](../../../changes/bcapps/14329.md) (code change): "The Payables Agent eligibility check now uses a more efficient query strategy"
- [#14442 Offer the Payables Agent again in a company recreated with the same name](../../../changes/bcapps/14442.md) (code change): "The Payables Agent is now offered again in the plus menu when a company is recreated"
- [Dynamics 365 Business Central: introducing the Payables Agent.](../../../posts/demiliani-com/12076.md) (community post): "Payables Agent automates AP workflows by retrieving vendor invoices from email"
- [Quick Tip: Business Central Update 27.3 – What’s New](../../../posts/thinkaboutit-be/7496.md) (community post): "Payables Agent now matches purchase invoices to orders intelligently"
- [Business Central 2025 wave 1 (BC26.3): Automate payables processes with the Payables Agent](../../../posts/yzhums-com/65721.md) (community post): "The Payables Agent in Business Central 2025 wave 1 automates accounts payable work"
- [Dynamics 365 Business Central: How to hide the Sales Order Agent and Payables Agent icons in the upper right corner](../../../posts/yzhums-com/68482.md) (community post): "Payables Agent processes vendor invoices end-to-end to reduce accounting bottlenecks"
- [Business Central 2026 release wave 1 (BC28.1): Create new Purchase Invoice from PDF (Out-of-the-Box)](../../../posts/yzhums-com/72842.md) (community post): "Purchase invoices can now be created manually from PDF files via a new 'New from PDF' button"
- [Business Central 2026 release wave 1 (BC28.4): Speed up processing with Known Senders in Payables Agent](../../../posts/yzhums-com/75245.md) (community post): "Known Senders in the Payables Agent, allowing administrators to define trusted email senders"
- [What's Cooking in Business Central: Agent Reasoning and Transparency](../../../videos/FBrZwXpOhmM.md) (video): "Agent Reasoning Display; Payables Agent"
- [Everything Coming to Business Central 2025 Wave 2 (You Need to Know This)](../../../videos/H5EuObmeF4o.md) (video): "Payables agent contextual invoice drafts; Payables agent confidence level prioritization"
- [What's New: Payables Agent (2026 release wave 1)](../../../videos/OvI9jaA1mJY.md) (video): "payables agent; invoice matching; purchase order lines; e-documents"
- [Transform Vendor Invoice Processing With the Payables Agent in Dynamics 365 Business Central (2025)](../../../videos/uh5S1i7uDlo.md) (video): "Transform Vendor Invoice Processing With the Payables Agent"
- [What's New: Payables Agent Update (2025 release wave 2)](../../../videos/Xc3ISQ7NAaQ.md) (video): "AI-powered invoice processing; Email-based invoice ingestion; Draft invoice review"
- [What's New: Business Central User Experience and Productivity (2026 release wave 1)](../../../videos/xJ8gYzvWnTI.md) (video): "Payables agent; agent tasks management; feedback experience"
- [Introducing: Payables Agent (2025 release wave 1)](../../../videos/YsmwHqxL1Zc.md) (video): "Payables Agent; E-document connector for Microsoft 365; Invoice approval workflow"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 3304 "Payables Agent Setup"](../../../objects/page/3304.md) · captioned "Configure Payables Agent" · on [Table 3303 "Payables Agent Setup"](../../../objects/table/3303.md)
- [Page 3313 "PA Known Senders"](../../../objects/page/3313.md) · captioned "Payables Agent Known Senders" · on [Table 3308 "PA Known Sender"](../../../objects/table/3308.md)
- [Page 4400 "SOA Setup"](../../../objects/page/4400.md) · captioned "Configure Sales Order Agent" · on [Table 4325 "SOA Setup"](../../../objects/table/4325.md)
- [Page 4410 "SOA Multi Items Availability"](../../../objects/page/4410.md) · captioned "Item Availability" · on [Table 27 "Item"](../../../objects/table/27.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
