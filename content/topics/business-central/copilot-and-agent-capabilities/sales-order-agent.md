---
id: topic/business-central/copilot-and-agent-capabilities/sales-order-agent
type: topic
title: Sales Order Agent
summary: "Sales Order Agent is an AI agent in Business Central that captures sales orders from customer emails: it identifies customers and items, checks availability, prepares quotes and converts them to orders. These pages answer questions about what it does, how to set it up, how to use it day to day, and common FAQs."
tier: official
language: en
system: sales
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:17:01.427Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 34dc56b6c2c43084e758deff34bb6defacc2c7ceaeadb0a5ae9f7cd38f4a27c9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faqs-sales-order-taker-agent
    title: FAQ for Sales Order Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-process
    title: Process sales quotes and orders with Sales Order Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sales-order-agent
    title: Sales Order Agent overview
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup
    title: Set up Sales Order Agent
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/faqs-sales-order-taker-agent
    - https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-process
    - https://learn.microsoft.com/dynamics365/business-central/sales-order-agent
    - https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/_JkZCp64jNw
    - video/0h8QBNmeORQ
    - video/1ht5nxubZ9c
    - video/2ujWYYecA2c
    - video/4nFViDASGhg
    - video/7QJeTXzZaEk
    - video/I7i25zBfyEQ
    - video/j6gadQyB4gM
    - video/kwGEoxN46hk
    - video/Qmd6_5vYKDg
    - video/UIL8ej7mSKQ
    - video/XhO4oFmoh1M
  posts:
    - post/thinkaboutit-be/8022
  guidelines: []
learn_toc_path:
  - Copilot and agent capabilities
  - Sales Order Agent
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 4
  code: 0
  video: 12
  blog: 1
  guideline: 0
bc_forms:
  - 4400
  - 4410
member_hash: 354c50c5de326213df353f995d94321405bc0bc35a97d695b331ce76bdc35896
narrative: generated
---

# Sales Order Agent

> Sales Order Agent is an AI agent in Business Central that captures sales orders from customer emails: it identifies customers and items, checks availability, prepares quotes and converts them to orders. These pages answer questions about what it does, how to set it up, how to use it day to day, and common FAQs.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Sales Order Agent · tier official · system sales · **unreviewed** (machine-generated narrative)

## Overview

Sales Order Agent automates sales order capture. It monitors a mailbox, analyzes incoming emails and attachments, identifies the contact and customer, matches items, checks inventory availability, and creates sales quotes and orders. When details are missing it continues the conversation with the customer by email over multiple turns.

The section has four pages and no subtopics. The overview explains the capabilities, including item search, availability checking and capable-to-promise calculation. The setup page covers activating the agent, mailbox monitoring, document creation rules and user access. The process page describes the daily workflow, where users review emails, confirm quotes, check availability and help when the agent is blocked. The FAQ covers configuration, task execution, the email dispatcher, access and permissions, transparency and change control, and customer identification.

Start with the overview to understand the scope, then follow the setup page to activate and configure the agent. Use the process page when you are working with agent tasks, and the FAQ for specific questions on permissions, control and customer identification.

## Key points

- The agent monitors a mailbox, categorizes emails and analyzes attachments to find sales requests.
- It identifies contacts and customers automatically and searches and matches items from the email content.
- It checks inventory availability and supports capable-to-promise calculation.
- When information is missing, it holds multi-turn email conversations with the customer and generates email drafts.
- It creates sales quotes, and can convert them to sales orders based on the document creation rules set up for it.
- Users stay in control: they review emails, confirm quotes and step in when the agent needs unblocking, with a task timeline to track what happened.
- Setup covers activation, mailbox monitoring, quote creation and confirmation rules, sales order conversion, customer contact matching and user access management.
- The FAQ covers the email dispatcher, access and permissions, and transparency and change control.

## Learn pages

- [FAQ for Sales Order Agent](https://learn.microsoft.com/dynamics365/business-central/faqs-sales-order-taker-agent): This FAQ provides information about the AI technology used by Sales Order Agent in Business Central. It provides key considerations and details about how AI is used, how it was tested and evaluated, and any specific limitations.
- [Process sales quotes and orders with Sales Order Agent](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-process): Learn how to use the Sales Order Agent to process sales quotes and orders from customer email requests.
- [Sales Order Agent overview](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent): Learn about the sales order Copilot agent in Business Central.
- [Set up Sales Order Agent](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup): Set up Sales Order Agent in Business Central to process sales orders from customer emails. Learn how to activate and configure the agent.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Quick Tip: What’s in Business Central Update 28.3](../../../posts/thinkaboutit-be/8022.md) (community post): "Sales Order Agent reaches General Availability with multiple agent support per company"
- [Business Central Launch Event 2025 Release Wave 1 - Recording of Live Opening](../../../videos/_JkZCp64jNw.md) (video): "Sales Order Agent; Sales Order Agent Item Availability Feature"
- [Microsoft Sizzle: Business Central Agents In Action](../../../videos/0h8QBNmeORQ.md) (video): "Sales Order Agent; Payables Agent; Custom Agents Framework"
- [Sales Order Agent - Working with a Personal or Shared Folder (2026)](../../../videos/1ht5nxubZ9c.md) (video): "Sales Order Agent; outlook folder configuration; email account setup"
- [Getting Started With Agents: Set Up Sales Order Agent - New 'Try it out' experience (2026)](../../../videos/2ujWYYecA2c.md) (video): "Sales Order Agent; Try It Out Experience; Email Attachment Detection"
- [What's New: Sales Order Agent Enhancements (2025 release wave 2)](../../../videos/4nFViDASGhg.md) (video): "sales order agent; email processing; attachment analysis; custom instructions"
- [Getting Started With Agents: Test Drive the Sales Order Agent (2025)](../../../videos/7QJeTXzZaEk.md) (video): "Sales Order Agent; Email Account Integration; Automatic Contact Creation"
- [Sales Order Agent for Dynamics 365 Business Central (2025)](../../../videos/I7i25zBfyEQ.md) (video): "Sales Order Agent; Agent email mapping to customer accounts; Agent-generated quote creation"
- [What's Cooking in Business Central: Custom Email Signatures in the Sales Order Agent](../../../videos/j6gadQyB4gM.md) (video): "Custom Email Signatures in Sales Order Agent; Signature Content Validation"
- [Getting Started With Agents: Run Multiple Sales Order Agents in Parallel (2026 release wave 1)](../../../videos/kwGEoxN46hk.md) (video): "Run Multiple Sales Order Agents in Parallel configuration"
- [Less Searching More Selling with Sales Order Agent (2025)](../../../videos/Qmd6_5vYKDg.md) (video): "Sales Order Agent; Natural Language Understanding for Item Recognition"
- [Dynamics 365 Business Central 2025 Release Wave 2](../../../videos/UIL8ej7mSKQ.md) (video): "Sales order agent automatic email processing; Sales order agent natural language guidance"
- [Introducing: Sales Order Agent (2025 release wave 1)](../../../videos/XhO4oFmoh1M.md) (video): "Sales Order Agent; ai agents; email automation; quote processing"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 4400, 4410.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
