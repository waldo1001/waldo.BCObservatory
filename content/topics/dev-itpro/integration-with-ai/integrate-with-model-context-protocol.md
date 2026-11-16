---
id: topic/dev-itpro/integration-with-ai/integrate-with-model-context-protocol
type: topic
title: Integrate with Model Context Protocol
summary: "Model Context Protocol (MCP) integration for Business Central: the Business Central MCP Server, its configuration, connecting hosts (VS Code, Copilot Studio, Claude, ChatGPT, GitHub Copilot CLI), and the AL MCP Server for AL development tools. It answers setup, access control and client connection questions."
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-16T01:00:02.006Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 35ad536a7f6aaa2ae22587c1fb2c72bccea4acf7687469026f7bf6120f9ef801
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/al-agent-tools/al-mcp-server
    title: AL MCP Server
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/mcp-overview
    title: Business Central MCP Server Overview and Setup
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server
    title: Configure Business Central MCP Server
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-non-microsoft
    title: Connect Business Central MCP Server to non-Microsoft hosts
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-in-vscode
    title: Connect to Business Central MCP Server with Visual Studio Code
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio
    title: Create Agents in Copilot Studio that Connect to Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/al-agent-tools/al-mcp-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/mcp-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-non-microsoft
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-in-vscode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio
  objects:
    - object/page/8350
    - object/page/8351
    - object/page/8359
  features: []
  topics:
    - topic/dev-itpro/integration-with-ai
  localizations: []
  videos:
    - video/0WAOtNaKjws
    - video/4HE3BBCcV84
    - video/AMVAiPTfSrU
    - video/C5cmG3sNjUg
    - video/EpDIrJE0HzA
    - video/GeT5E_f9A9Q
    - video/H5EuObmeF4o
    - video/iViHfCgL2L8
    - video/LerAo-GGl8U
    - video/q3xnjJD32kk
    - video/qs1cg-GoDeQ
    - video/rm-FstU_I80
    - video/U1dAdtUjidc
    - video/UIL8ej7mSKQ
    - video/uMKLsKfKPc0
    - video/zei-IszvYNU
  posts:
    - post/aardvarklabs-blog/2724
    - post/bertverbeek-nl/1183
    - post/demiliani-com/13470
    - post/gerardorenteria-blog/12682
    - post/katson-com/4678
    - post/katson-com/5026
    - post/thinkaboutit-be/8400
    - post/wingate365-com/https-blog-wingate365-com-2026-02-ai-context-is-king-bc-mcp-for-mcs-html--94f99e5d2a
    - post/yzhums-com/68873
    - post/yzhums-com/76419
  guidelines: []
learn_toc_path:
  - Integration with AI
  - Integrate with Model Context Protocol
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration-with-ai
children: []
coverage:
  learn: 6
  code: 3
  video: 16
  blog: 10
  guideline: 0
bc_forms:
  - 8350
  - 8351
  - 8359
member_hash: 2fcadb4b94709a8a90be7bceec086c3f09da8de35cb149093c69df5a1053298a
narrative: generated
---

# Integrate with Model Context Protocol

> Model Context Protocol (MCP) integration for Business Central: the Business Central MCP Server, its configuration, connecting hosts (VS Code, Copilot Studio, Claude, ChatGPT, GitHub Copilot CLI), and the AL MCP Server for AL development tools. It answers setup, access control and client connection questions.

Path: [Integration with AI](../integration-with-ai.md) > Integrate with Model Context Protocol · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

This area covers two MCP servers. The Business Central MCP Server lets AI clients work with Business Central data and business logic through the MCP standard, using API pages and queries. The AL MCP Server exposes AL development tools to any MCP-compatible agent, so builds and symbol searches do not need Visual Studio Code.

Start with the overview and setup page, then the configuration page, where administrators define which APIs agents can reach and which operations (read, create, modify, delete, actions) are allowed. After that, pick the connection page for your client: Visual Studio Code with GitHub Copilot, Copilot Studio agents (via the Business Central connector or the MCP server), or non-Microsoft hosts such as GitHub Copilot CLI, Claude and ChatGPT, which need a Microsoft Entra ID app registration and manual client configuration.

Developers who want agents to build, compile and publish AL code should go to the AL MCP Server page.

## Key points

- Business Central MCP Server supports API Tools, Dynamic Tool Mode and Data Query Tools, including read-only API access, record management and business process execution.
- Administrators create configurations that define which APIs agents can access and which operations are permitted.
- Non-Microsoft hosts (GitHub Copilot CLI, Claude, ChatGPT) connect using Entra ID app registration, redirect URI configuration and delegated permissions.
- VS Code supports user-level or workspace-level MCP configuration, headerless connections and agent mode with GitHub Copilot.
- Copilot Studio agents can use either the Business Central connector or the MCP server, with appropriate Business Central permissions.
- Copilot Studio connector actions include find, create, update and delete records plus API actions; the MCP route offers dynamic tool discovery.
- AL MCP Server tools: al_build, al_compile, al_publish, al_downloadsymbols, al_symbolsearch and al_getdiagnostics.

## Learn pages

- [AL MCP Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/al-agent-tools/al-mcp-server): Learn about the AL MCP Server, a standalone Model Context Protocol (MCP) server that exposes AL development tools for headless environments and CI/CD pipelines.
- [Business Central MCP Server Overview and Setup](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/mcp-overview): Learn how to set up and use the Business Central MCP server to enable AI clients like GitHub Copilot and ChatGPT to interact with your Business Central data.
- [Configure Business Central MCP Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server): Learn how to configure the Business Central MCP server to enable AI agents to access and interact with your Business Central data and processes.
- [Connect Business Central MCP Server to non-Microsoft hosts](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-non-microsoft): Learn how to connect non-Microsoft MCP hosts like ChatGPT and Claude to Business Central MCP server with step-by-step guidance and prerequisites.
- [Connect to Business Central MCP Server with Visual Studio Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-in-vscode): Learn how to set up and use the Business Central MCP server in Visual Studio Code to interact with your Business Central data through natural language.
- [Create Agents in Copilot Studio that Connect to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio): Create conversational agents in Copilot Studio that use Business Central data and automate business processes with natural language.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Exploring Model Context Protocol (MCP) for Business Automation in Business Central](../../../posts/aardvarklabs-blog/2724.md) (community post): "Model Context Protocol (MCP) servers enable AI agents to interact with Business Central data"
- [Microsoft Agent Framework and Business Central MCP server](../../../posts/bertverbeek-nl/1183.md) (community post): "Business Central MCP server enables AI agents to connect to Business Central"
- [Creating MCP servers for Dynamics 365 Business Central with Azure Logic Apps.](../../../posts/demiliani-com/13470.md) (community post): "MCP servers standardize how AI agents interact with external systems"
- [🤖 AboutText: Teaching AI to Understand Your APIs ✨](../../../posts/gerardorenteria-blog/12682.md) (community post): "AboutText is a new property in BC 27.1 for APIV2 pages that describes API functionality to AI systems"
- [Connect Any Agent to Business Central](../../../posts/katson-com/4678.md) (community post): "Connect external AI agents to Business Central using the Model Context Protocol"
- [How to Connect Business Central MCP to Claude Desktop](../../../posts/katson-com/5026.md) (community post): "enabling third-party AI agents to access BC data"
- [Business Central 29: What’s New in the MCP Server?](../../../posts/thinkaboutit-be/8400.md) (community post): "MCP server Data Query Tools that let AI agents dynamically construct and execute AL queries"
- [AI context is king - BC MCP for MCS Agents - London D365PPUG - Feb 2026](../../../posts/wingate365-com/https-blog-wingate365-com-2026-02-ai-context-is-king-bc-mcp-for-mcs-html--94f99e5d2a.md) (community post): "Business Central now has a built-in MCP server"
- [Business Central 2025 wave 2 (BC27.1): Connect AI agents to Business Central through MCP server (Dynamics 365 Business Central MCP)](../../../posts/yzhums-com/68873.md) (community post): "Connect AI agents to Business Central through MCP server"
- [Business Central 2026 release wave 2 (BC29): Run data queries with MCP Server (no APIs required)](../../../posts/yzhums-com/76419.md) (community post): "Data Query Tools for the MCP Server, enabling AI agents to define, validate, and run"
- [What's New: Enhanced MCP Server (2026 release wave 1)](../../../videos/0WAOtNaKjws.md) (video): "Enhanced MCP Server. Topics: mcp server; configuration validation; import export"
- [MCP Server and API Queries (2026 release wave 1)](../../../videos/4HE3BBCcV84.md) (video): "API queries in MCP server; Analytics API reference documentation; MCP server configuration"
- [How 3 Partners are Building Powerful Agents for Business Central](../../../videos/AMVAiPTfSrU.md) (video): "Business Central MCP server; Copilot Studio agent creation; Reusable agent development"
- [MCP Server for Business Central - Advanced Topics (Part 3)](../../../videos/C5cmG3sNjUg.md) (video): "MCP Server for Business Central; Dynamic Tools System; Copilot Studio Support"
- [Build an Agent in Microsoft Copilot Studio for Business Central (2025)](../../../videos/EpDIrJE0HzA.md) (video): "Model Context Protocol (MCP) server for Business Central"
- [Introducing MCP Server Configurations for Business Central (Part 2)](../../../videos/GeT5E_f9A9Q.md) (video): "MCP Server Configurations; Dynamic Tool Mode"
- [Everything Coming to Business Central 2025 Wave 2 (You Need to Know This)](../../../videos/H5EuObmeF4o.md) (video): "MCP server for Business Central"
- [Introducing MCP Server for Business Central (Part 1)](../../../videos/iViHfCgL2L8.md) (video): "MCP Server for Business Central; Copilot Studio Integration"
- [Microsoft presents: Next level administration skills with the admin MCP server and agents](../../../videos/LerAo-GGl8U.md) (video): "Admin MCP Server for Business Central; Model Context Protocol (MCP) Fundamentals; OAuth 2.1 Authentication"
- [What's new: MCP Server (2026 release wave 2)](../../../videos/q3xnjJD32kk.md) (video): "MCP Server query tools; data analysis; agent capabilities; al queries"
- [What's new: MCP Server (2026 release wave 2)](../../../videos/qs1cg-GoDeQ.md) (video): "MCP Server data tools; query tool; agents; al queries"
- [20260831 - Business Central MCP Server, standard and custom](../../../videos/rm-FstU_I80.md) (video): "model context protocol; mcp server; copilot studio; business central integration"
- [What's New: Admin Center MCP Server (2026 release wave 1)](../../../videos/U1dAdtUjidc.md) (video): "Admin Center MCP Server; Environment Management via Natural Language"
- [Dynamics 365 Business Central 2025 Release Wave 2](../../../videos/UIL8ej7mSKQ.md) (video): "MCP server for Business Central"
- [Microsoft presents: Build Agents with Microsoft Copilot Studio and surface them in M365 Copilot Chat](../../../videos/uMKLsKfKPc0.md) (video): "MCP Connector; MCP server connection for Business Central"
- [MCP Server and All Microsoft API's (2026 release wave 1)](../../../videos/zei-IszvYNU.md) (video): "All Microsoft published APIs available in MCP server; Add tools by API group in MCP configuration"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8350 "MCP Config List"](../../../objects/page/8350.md) · captioned "Model Context Protocol (MCP) Server Configurations"
- [Page 8351 "MCP Config Card"](../../../objects/page/8351.md) · captioned "Model Context Protocol (MCP) Server Configuration"
- [Page 8359 "MCP Config Warning List"](../../../objects/page/8359.md) · captioned "MCP Configuration Warnings" · on [Table 8352 "MCP Config Warning"](../../../objects/table/8352.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
