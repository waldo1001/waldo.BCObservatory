---
id: topic/business-central/copilot-and-agent-capabilities/sales-order-agent
type: topic
title: Sales Order Agent
summary: Sales Order Agent is an AI agent in Business Central that turns customer emails into sales quotes and orders. This section answers questions about what the agent does, how to set it up, how to run and review its work, and common questions about its behavior.
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:29.120Z"
  flags: []
generated:
  at: "2026-10-26T06:43:56.210Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f58bee08279fe3e75631dd796b1b6f88b28c2d4d123adc88c6375f48563c70ad
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/faqs-sales-order-taker-agent
    title: FAQ for Sales Order Agent
    date: "2026-10-23"
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
  objects:
    - object/page/4400
    - object/page/4410
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/_JkZCp64jNw
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
    - post/demiliani-com/11739
    - post/yzhums-com/69256
  guidelines: []
  changes:
    - change/bcapps/10631
learn_toc_path:
  - Copilot and agent capabilities
  - Sales Order Agent
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 4
  code: 2
  video: 11
  blog: 2
  guideline: 0
bc_forms:
  - 4400
  - 4410
member_hash: 354c50c5de326213df353f995d94321405bc0bc35a97d695b331ce76bdc35896
narrative: generated
---

# Sales Order Agent

> Sales Order Agent is an AI agent in Business Central that turns customer emails into sales quotes and orders. This section answers questions about what the agent does, how to set it up, how to run and review its work, and common questions about its behavior.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Sales Order Agent · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

Sales Order Agent monitors email for customer requests, identifies the customer and contact, finds items and variants, checks inventory and availability, and creates sales quotes or orders. It can hold multi-turn email conversations when it needs more information, and it can calculate delivery dates using capable-to-promise.

The section has four pages. The overview explains the capabilities. The setup page covers enabling the agent, configuring email monitoring, setting processing rules, managing user access, and handling permissions. The processing page describes how the agent handles customer email inquiries: it verifies customers, checks item availability, creates sales quotes, and prepares email responses. Users still need to step in for reviews and confirmations. That page also covers the task timeline and Review mode. The FAQ covers the email dispatcher, customer identification, notifications, and approval workflows.

Start with the overview to understand the scope, then follow the setup page to enable the agent. Use the processing page for daily work and the FAQ for specific behavior questions.

## Key points

- The agent analyzes customer emails, locates the customer and contact, and checks item availability.
- It creates sales quotes and can convert them to sales orders, with a customer confirmation workflow.
- It supports item search with variant matching and capable-to-promise delivery date calculation.
- It can hold multi-turn email conversations when information is missing.
- Setup covers enabling the agent, email monitoring, processing rules, user access, and permissions.
- Users must still step in for reviews and confirmations. The processing page also covers the task timeline and Review mode.
- The FAQ covers the email dispatcher, customer identification by email, user notifications, and approval workflows.

## Learn pages

- [FAQ for Sales Order Agent](https://learn.microsoft.com/dynamics365/business-central/faqs-sales-order-taker-agent): This FAQ provides information about the AI technology used by Sales Order Agent in Business Central. It provides key considerations and details about how AI is used, how it was tested and evaluated, and any specific limitations.
- [Process sales quotes and orders with Sales Order Agent](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-process): Learn how to use the Sales Order Agent to process sales quotes and orders from customer email requests.
- [Sales Order Agent overview](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent): Learn about the sales order Copilot agent in Business Central.
- [Set up Sales Order Agent](https://learn.microsoft.com/dynamics365/business-central/sales-order-agent-setup): Set up Sales Order Agent in Business Central to process sales orders from customer emails. Learn how to activate and configure the agent.
  - In the observatory: [Page 2500 "Extension Management"](../../../objects/page/2500.md), [Page 4317 "Agent User Settings"](../../../objects/page/4317.md), [Page 5097 "Create Task"](../../../objects/page/5097.md), [Page 5099 "Tasks"](../../../objects/page/5099.md), [Page 9883 "Permissions Overview"](../../../objects/page/9883.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10631 Integration/main to releases 29.x 31a860b5](../../../changes/bcapps/10631.md) (code change): "Sales Order Agent, Shopify, Sustainability, Withholding Tax and Excel Reports apps are modified"
- [Dynamics 365 Business Central agent capabilities: how much does they cost me?](../../../posts/demiliani-com/11739.md) (community post): "The Sales Order Agent in 2025 Wave 1 reads customer emails, clarifies missing details"
- [Dynamics 365 Business Central: Black Friday 1K AI Power-Up campaign (Free copilot credits)](../../../posts/yzhums-com/69256.md) (community post): "Sales Order Agent actions cost 5 credits, Payables Agent invoice processing costs 50 credits"
- [Business Central Launch Event 2025 Release Wave 1 - Recording of Live Opening](../../../videos/_JkZCp64jNw.md) (video): "Sales Order Agent; Sales Order Agent Item Availability Feature; Sales Order Agent Email Insights"
- [Sales Order Agent - Working with a Personal or Shared Folder (2026)](../../../videos/1ht5nxubZ9c.md) (video): "Sales Order Agent; outlook folder configuration; email account setup"
- [Getting Started With Agents: Set Up Sales Order Agent - New 'Try it out' experience (2026)](../../../videos/2ujWYYecA2c.md) (video): "Sales Order Agent; Try It Out Experience; Email Attachment Detection"
- [What's New: Sales Order Agent Enhancements (2025 release wave 2)](../../../videos/4nFViDASGhg.md) (video): "sales order agent; email processing; attachment analysis; custom instructions"
- [Getting Started With Agents: Test Drive the Sales Order Agent (2025)](../../../videos/7QJeTXzZaEk.md) (video): "Sales Order Agent; Email Account Integration; Automatic Contact Creation"
- [Sales Order Agent for Dynamics 365 Business Central (2025)](../../../videos/I7i25zBfyEQ.md) (video): "Sales Order Agent for Dynamics 365 Business Central"
- [What's Cooking in Business Central: Custom Email Signatures in the Sales Order Agent](../../../videos/j6gadQyB4gM.md) (video): "Custom Email Signatures in Sales Order Agent; Signature Content Validation"
- [Getting Started With Agents: Run Multiple Sales Order Agents in Parallel (2026 release wave 1)](../../../videos/kwGEoxN46hk.md) (video): "Run Multiple Sales Order Agents in Parallel configuration"
- [Less Searching More Selling with Sales Order Agent (2025)](../../../videos/Qmd6_5vYKDg.md) (video): "Sales Order Agent; Natural Language Understanding for Item Recognition"
- [Dynamics 365 Business Central 2025 Release Wave 2](../../../videos/UIL8ej7mSKQ.md) (video): "Sales order agent automatic email processing; Sales order agent multiple shipping addresses"
- [Introducing: Sales Order Agent (2025 release wave 1)](../../../videos/XhO4oFmoh1M.md) (video): "Sales Order Agent; email automation; quote processing; item search"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4400 "SOA Setup"](../../../objects/page/4400.md) · captioned "Configure Sales Order Agent" · on [Table 4325 "SOA Setup"](../../../objects/table/4325.md)
- [Page 4410 "SOA Multi Items Availability"](../../../objects/page/4410.md) · captioned "Item Availability" · on [Table 27 "Item"](../../../objects/table/27.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
