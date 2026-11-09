---
id: topic/business-central/copilot-and-agent-capabilities/payables-agent
type: topic
title: Payables Agent
summary: Payables Agent is an autonomous AI agent in Business Central that processes vendor invoices and credit notes from email. This section answers questions about what it does, how to set it up, how to manage known senders, and how supervisors review its work.
tier: official
language: en
system: purchasing
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-09T00:45:18.475Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1c32f1badb0c9fdbaf60ba8179632a54cf0bd98031642c2989e2a25c67771d44
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
    - video/H5EuObmeF4o
    - video/OvI9jaA1mJY
    - video/uh5S1i7uDlo
    - video/Wc8WlLZUCJc
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
    - change/bcapps/9572
learn_toc_path:
  - Copilot and agent capabilities
  - Payables Agent
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 5
  code: 4
  video: 6
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

> Payables Agent is an autonomous AI agent in Business Central that processes vendor invoices and credit notes from email. This section answers questions about what it does, how to set it up, how to manage known senders, and how supervisors review its work.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Payables Agent · tier official · system purchasing · narrative **unreviewed** (model text not yet checked)

## Overview

The Payables Agent monitors a mailbox for vendor invoices and credit notes, usually sent as PDFs. It extracts the document data, identifies or creates vendors, suggests account classifications, matches purchase orders, and creates draft purchase invoices or credit memos. It does not post. An agent supervisor reviews the drafts before they are finalized.

Start with the overview page and the FAQ to understand what the agent does. Then use the setup page to configure mailbox monitoring, mailbox folders, email review policies, user access, trial mode, and Copilot credit consumption. The known senders page covers how to control which vendors' emails are processed.

For daily use, the supervision page explains how to review agent work from the Tasks pane or directly on document pages. It covers Business Central agents in general, including the Payables Agent and the Sales Order Agent.

## Key points

- The agent monitors email for vendor invoices and credit notes and extracts data from PDF documents.
- It identifies and matches vendors, can create vendors, suggests account classifications, and matches purchase orders.
- It creates draft purchase invoices and credit memos and does not post them. A supervisor reviews and approves them.
- Setup covers email account monitoring, mailbox folders, email review policies, user access, and a trial mode.
- Setup also covers managing Copilot credit consumption.
- The known senders list lets you approve trusted vendors automatically, request review for other senders, or reject unwanted ones.
- Senders can be added manually, and a policy can be assigned to each sender.
- Supervisors use the Tasks pane or the data review bar on document pages to confirm and approve, give instructions, or stop a task.

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

- [#9572 Obsolete E-Document Purchase Order Matching Copilot](../../../changes/bcapps/9572.md) (code change): "E-Document Purchase Order Matching Copilot objects are marked obsolete"
- [Dynamics 365 Business Central: introducing the Payables Agent.](../../../posts/demiliani-com/12076.md) (community post): "Payables Agent in Business Central; automates accounts payable tasks by sourcing vendor invoices"
- [Quick Tip: Business Central Update 27.3 – What’s New](../../../posts/thinkaboutit-be/7496.md) (community post): "Payables Agent now matches purchase invoices to orders intelligently"
- [Business Central 2025 wave 1 (BC26.3): Automate payables processes with the Payables Agent](../../../posts/yzhums-com/65721.md) (community post): "Payables Agent in Business Central 2025 wave 1 automates accounts payable work"
- [Dynamics 365 Business Central: How to hide the Sales Order Agent and Payables Agent icons in the upper right corner](../../../posts/yzhums-com/68482.md) (community post): "Payables Agent processes vendor invoices end-to-end to reduce accounting bottlenecks"
- [Business Central 2026 release wave 1 (BC28.1): Create new Purchase Invoice from PDF (Out-of-the-Box)](../../../posts/yzhums-com/72842.md) (community post): "Payables Agent can create purchase invoices from a PDF"
- [Business Central 2026 release wave 1 (BC28.4): Speed up processing with Known Senders in Payables Agent](../../../posts/yzhums-com/75245.md) (community post): "Known Senders in the Payables Agent, allowing administrators to define trusted email senders"
- [What's Cooking in Business Central: Agent Reasoning and Transparency](../../../videos/FBrZwXpOhmM.md) (video): "Agent Reasoning Display; Payables Agent"
- [Everything Coming to Business Central 2025 Wave 2 (You Need to Know This)](../../../videos/H5EuObmeF4o.md) (video): "Enhanced sales order agent; Payables agent contextual invoice drafts"
- [What's New: Payables Agent (2026 release wave 1)](../../../videos/OvI9jaA1mJY.md) (video): "payables agent; invoice matching; purchase order lines; e-documents"
- [Transform Vendor Invoice Processing With the Payables Agent in Dynamics 365 Business Central (2025)](../../../videos/uh5S1i7uDlo.md) (video): "Transform Vendor Invoice Processing With the Payables Agent"
- [Infinity Group Internal AI Transformation](../../../videos/Wc8WlLZUCJc.md) (video): "Supplier invoicing automation; Data consolidation for AI"
- [Introducing: Payables Agent (2025 release wave 1)](../../../videos/YsmwHqxL1Zc.md) (video): "Payables Agent; E-document connector for Microsoft 365; Inbound e-document"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 3304 "Payables Agent Setup"](../../../objects/page/3304.md) · captioned "Configure Payables Agent" · on [Table 3303 "Payables Agent Setup"](../../../objects/table/3303.md)
- [Page 3313 "PA Known Senders"](../../../objects/page/3313.md) · captioned "Payables Agent Known Senders" · on [Table 3308 "PA Known Sender"](../../../objects/table/3308.md)
- [Page 4400 "SOA Setup"](../../../objects/page/4400.md) · captioned "Configure Sales Order Agent" · on [Table 4325 "SOA Setup"](../../../objects/table/4325.md)
- [Page 4410 "SOA Multi Items Availability"](../../../objects/page/4410.md) · captioned "Item Availability" · on [Table 27 "Item"](../../../objects/table/27.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
