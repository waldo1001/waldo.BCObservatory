---
id: topic/business-central/copilot-and-agent-capabilities/manage-copilot-and-agent-capabilities
type: topic
title: Manage Copilot and agent capabilities
summary: "Administration of Copilot and agent capabilities in Business Central: the Copilot & agent capabilities page, feature activation, user permissions, data movement across geographies, Bing Search, Azure OpenAI data handling, and troubleshooting. It answers questions about enabling, controlling and fixing Copilot features."
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-26T01:05:31.204Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1472c1d8aadc7383dec5cbd4274676a31d244fa9a90e84911b4e0f375210a0e5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/azure-openai-data
    title: Azure OpenAI Service and Business Central data
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ai-search-web-copilot
    title: Bing Search for Copilot features in Business Central (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/enable-ai
    title: Configure Copilot and agent capabilities
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ai-copilot-data-movement
    title: Data movement across geographies for Business Central Copilot and agent capabilities
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ai-copilot-troubleshooting
    title: Troubleshoot Copilot and agent capabilities
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/azure-openai-data
    - https://learn.microsoft.com/dynamics365/business-central/ai-search-web-copilot
    - https://learn.microsoft.com/dynamics365/business-central/enable-ai
    - https://learn.microsoft.com/dynamics365/business-central/ai-copilot-data-movement
    - https://learn.microsoft.com/dynamics365/business-central/ai-copilot-troubleshooting
  objects:
    - object/page/7771
    - object/page/7772
    - object/page/7775
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/DRUr4byy8xQ
    - video/UQmuMPRlHek
  posts:
    - post/bertverbeek-nl/1263
    - post/demiliani-com/13755
    - post/demiliani-com/15935
    - post/katson-com/5026
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-45-hide-agents-icon--83847372e0
    - post/wingate365-com/https-blog-wingate365-com-2025-12-ask-ai-about-dynamics-licensing-html--28d5fb7f97
    - post/yzhums-com/67462
    - post/yzhums-com/68482
    - post/yzhums-com/68484
    - post/yzhums-com/69256
    - post/yzhums-com/72431
    - post/yzhums-com/72479
    - post/yzhums-com/74703
    - post/yzhums-com/76396
  guidelines: []
  changes:
    - change/bcapps/11997
    - change/bcapps/12539
    - change/bcapps/12763
    - change/bcapps/12810
    - change/bcapps/14218
    - change/bcapps/14329
learn_toc_path:
  - Copilot and agent capabilities
  - Manage Copilot and agent capabilities
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 5
  code: 3
  video: 2
  blog: 14
  guideline: 0
bc_forms:
  - 7771
  - 7772
  - 7775
member_hash: 8b521b33df12495a755dae19a349b2cc15d682d07ecae7bcc14cde515694d884
narrative: generated
---

# Manage Copilot and agent capabilities

> Administration of Copilot and agent capabilities in Business Central: the Copilot & agent capabilities page, feature activation, user permissions, data movement across geographies, Bing Search, Azure OpenAI data handling, and troubleshooting. It answers questions about enabling, controlling and fixing Copilot features.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Manage Copilot and agent capabilities · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for administrators who control how Copilot and agent capabilities work in Business Central. Most settings sit on the Copilot & agent capabilities page, where you turn features on or off, manage user access through permissions, set feedback options, and choose consent for data movement and web search.

## Key points

- The Copilot & agent capabilities page is the central place for feature activation and deactivation, user permissions, data movement, Bing Search, feedback controls and agent model selection.
- Allow data movement controls consent for prompts and outputs routed to Azure OpenAI endpoints outside your geography when local processing isn't available; the page also mentions EU Data Boundary processing.
- The Enable Bing Search setting controls web search for Chat with Copilot and Autofill, starting in update 26.3 (sandbox) and 27.0 (production); the feature is in preview.
- Azure OpenAI Service processes Copilot requests with enterprise security controls. Data is not used to train models and stays in its original geographic region.
- Abuse monitoring and data access controls are part of the Azure OpenAI data handling described for Copilot chat, Analysis assist and bank account reconciliation assist.
- Troubleshooting covers Copilot not appearing on pages, activation errors, and missing Microsoft AI features when embed apps are installed.
- Common checks for troubleshooting include feature activation, personalization settings, the privacy notice agreement and Feature Management.

## Learn pages

- [Azure OpenAI Service and Business Central data](https://learn.microsoft.com/dynamics365/business-central/azure-openai-data): Understand how Azure OpenAI Service processes Business Central data when using Copilot. Learn security, privacy, and compliance aspects.
- [Bing Search for Copilot features in Business Central (preview)](https://learn.microsoft.com/dynamics365/business-central/ai-search-web-copilot): Learn which Business Central Copilot features use Bing Search and how administrators enable the integration.
- [Configure Copilot and agent capabilities](https://learn.microsoft.com/dynamics365/business-central/enable-ai): Learn how to control Copilot and agent features in Business Central, including deactivation, user access, and data governance controls.
- [Data movement across geographies for Business Central Copilot and agent capabilities](https://learn.microsoft.com/dynamics365/business-central/ai-copilot-data-movement): Learn how data that's used in copilot features in Dynamics 365 Business Central moves across geographies where Azure OpenAI Service isn't available by default.
- [Troubleshoot Copilot and agent capabilities](https://learn.microsoft.com/dynamics365/business-central/ai-copilot-troubleshooting): Learn how to fix common issues that you might encounter while working with Copilot and agent capabilities in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11997 Clarify Expense Agent Entra app permission checks](../../../changes/bcapps/11997.md) (code change): "Permission checks for the Expense Agent Entra app"
- [#12539 Add Expense Agent consumption V2 and trial support](../../../changes/bcapps/12539.md) (code change): "Trial status shown in billing overview and remaining free expenses"
- [#12763 [Master] - Bug 654021: [Expense Agent] [Professional] Online: Creating Production - Setup Data Only Company with Delegated Admin access: "'IndirectInsert' permission on TableData 6913 'Expense Pmt Method" - 2610091420000495](../../../changes/bcapps/12763.md) (code change): "Permission level changed from 'Expense Mgmt. Read' to 'Expense Mgmt. Admin'"
- [#12810 ExpenseAgent-CAUS-default-VAT-setup-fails](../../../changes/bcapps/12810.md) (code change): "Changes the Create Expense VAT Rates codeunit and the Expense Agent Setup table"
- [#14218 Show notification only to super users in env. where copilot substitution suggestion was used](../../../changes/bcapps/14218.md) (code change): "notification about retired Copilot item substitution suggestions now appears only"
- [#14329 Optimizing check for PA eligibility](../../../changes/bcapps/14329.md) (code change): "Speeds up opening the Purchase Invoice page and the agent runtime eligibility check"
- [Agents in Business Central – part 4 – troubleshooting](../../../posts/bertverbeek-nl/1263.md) (community post): "troubleshoot Business Central agents when they don't behave as expected"
- [Dynamics 365 Business Central agents: announcing new updates.](../../../posts/demiliani-com/13755.md) (community post): "GPT-5.3-chat becomes the default Copilot model, rolling out gradually across regions"
- [Dynamics 365 Business Central (and friends): where does your Copilot prompt go?](../../../posts/demiliani-com/15935.md) (community post): "Copilot features in Dynamics 365 Business Central may move prompts across geographies"
- [How to Connect Business Central MCP to Claude Desktop](../../../posts/katson-com/5026.md) (community post): "AI agents like Claude access Business Central data through a desktop client"
- [BC Friday Tips #45 Hide Agents Icon](../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-45-hide-agents-icon--83847372e0.md) (community post): "hide the Agents icon by going to Copilot & agent capabilities"
- [Ask AI about Dynamics Licensing](../../../posts/wingate365-com/https-blog-wingate365-com-2025-12-ask-ai-about-dynamics-licensing-html--28d5fb7f97.md) (community post): "Copilot Credits, a consumption currency pooled per tenant"
- [Business Central 2025 wave 2 (BC27): Understand how each Copilot and agent capability is billed (Billing Type)](../../../posts/yzhums-com/67462.md) (community post): "Billing Type column on the Copilot and Agent Capabilities page"
- [Dynamics 365 Business Central: How to hide the Sales Order Agent and Payables Agent icons in the upper right corner](../../../posts/yzhums-com/68482.md) (community post): "Deactivate agents through the Copilot & agent capabilities page"
- [Dynamics 365 Business Central: Regarding the cost of the Copilot/Agent features (Manage consumption-based billing for agent capabilities)](../../../posts/yzhums-com/68484.md) (community post): "new agent capabilities like Sales Order Agent and Payables Agent use consumption-based billing"
- [Dynamics 365 Business Central: Black Friday 1K AI Power-Up campaign (Free copilot credits)](../../../posts/yzhums-com/69256.md) (community post): "Agent features consume credits: Sales Order Agent actions cost 5 credits"
- [Dynamics 365 Business Central: How to monitor User AI Consumption Data within BC (Agent consumption overview)](../../../posts/yzhums-com/72431.md) (community post): "track Copilot Credit consumption directly within the application through the Agent Consumption Overview page"
- [Business Central 2026 release wave 1 (BC28): Manage tasks from all agents in dedicated task pane](../../../posts/yzhums-com/72479.md) (community post): "dedicated task pane that consolidates all tasks generated by AI agents"
- [Business Central 2026 release wave 1 (BC28): Copilot and agent data movement across geographies](../../../posts/yzhums-com/74703.md) (community post): "controls for managing Copilot and agent data movement across Azure geographies"
- [Dynamics 365 Business Central: How to turn off feedback on AI-generated content](../../../posts/yzhums-com/76396.md) (community post): "Administrators can disable Copilot feedback controls in Business Central"
- [Getting Started With Agents: Agent Access Control - Permissions and Profiles (2025)](../../../videos/DRUr4byy8xQ.md) (video): "Agent access control; permissions; profiles; Sales Order Agent"
- [What's New: Setting Up Copilot in Business Central - Tips for Admins (2024 release wave 2)](../../../videos/UQmuMPRlHek.md) (video): "Copilot setup; ai capabilities; data governance; azure openai; regional availability"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 7771 "Copilot Not Available"](../../../objects/page/7771.md)
- [Page 7772 "Copilot Deactivate Capability"](../../../objects/page/7772.md)
- [Page 7775 "Copilot AI Capabilities"](../../../objects/page/7775.md) · captioned "Copilot & agent capabilities"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
