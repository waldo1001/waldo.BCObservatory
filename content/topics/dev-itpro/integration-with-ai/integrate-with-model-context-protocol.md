---
id: topic/dev-itpro/integration-with-ai/integrate-with-model-context-protocol
type: topic
title: Integrate with Model Context Protocol
summary: "Model Context Protocol (MCP) integration for Business Central: the Business Central MCP Server (overview, configuration, API tools, dynamic tool mode, data query tools), connecting it from VS Code, Copilot Studio and non-Microsoft hosts, and the AL MCP Server for AL development tools. Answers setup, connection and access-control questions."
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-06T15:20:35.934Z"
  flags: []
generated:
  at: "2026-10-07T16:30:41.512Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ea521f915c95ed559cdcf0d32ad5f7ce862b9ebcce6887c54771f37701b49c7f
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
    - video/C5cmG3sNjUg
    - video/EpDIrJE0HzA
    - video/GeT5E_f9A9Q
    - video/GK6hM-nBYZk
    - video/rm-FstU_I80
    - video/zei-IszvYNU
  posts:
    - post/aardvarklabs-blog/2724
    - post/aardvarklabs-blog/3775
    - post/bertverbeek-nl/1183
    - post/demiliani-com/11666
    - post/demiliani-com/13391
    - post/gerardorenteria-blog/12682
    - post/katson-com/4678
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-8092462798375727234--07aea86270
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
  video: 8
  blog: 8
  guideline: 0
bc_forms:
  - 8350
  - 8351
  - 8359
member_hash: 2fcadb4b94709a8a90be7bceec086c3f09da8de35cb149093c69df5a1053298a
narrative: generated
---

# Integrate with Model Context Protocol

> Model Context Protocol (MCP) integration for Business Central: the Business Central MCP Server (overview, configuration, API tools, dynamic tool mode, data query tools), connecting it from VS Code, Copilot Studio and non-Microsoft hosts, and the AL MCP Server for AL development tools. Answers setup, connection and access-control questions.

Path: [Integration with AI](../integration-with-ai.md) > Integrate with Model Context Protocol · tier official · system copilot · narrative reviewed by Opus

## Overview

This area covers two MCP servers. The Business Central MCP Server gives AI clients such as Copilot Studio and GitHub Copilot a standardized, secure way to read and manage Business Central records, run business processes and query data. The AL MCP Server is separate and exposes AL development tools (build, compile, publish, symbol search) to any MCP-compatible agent without needing Visual Studio Code.

The pages follow a path from server to client. Start with the overview and setup page, then the configuration page, where you choose which APIs are available, whether dynamic tool mode is used, and which data query tools are enabled. Then pick the page for your client: Visual Studio Code, Copilot Studio (connector or MCP server), or non-Microsoft hosts such as GitHub Copilot CLI, Claude and ChatGPT.

For AL developers who want agents to build and publish extensions, the AL MCP Server page is independent of the Business Central server pages and can be read on its own.

## Key points

- The Business Central MCP Server lets AI clients view and manage records, execute business processes and query data through API tools, dynamic tool mode and data query tools.
- Configuration controls what agents can access: available APIs, API object discovery, and Read/Create/Modify/Delete/Action permissions per API, with configuration export and import.
- Non-Microsoft hosts (GitHub Copilot CLI, Claude, ChatGPT) connect through a Microsoft Entra ID app registration, redirect URI configuration, delegated permissions and manual client configuration.
- In Visual Studio Code the server can be configured at user level or workspace level, supports headerless connections, and is used through GitHub Copilot agent mode.
- Copilot Studio agents can connect via the Business Central connector or the MCP server, with record operations (find, create, update, delete), API actions and dynamic tool discovery.
- The AL MCP Server exposes al_build, al_compile, al_publish, al_downloadsymbols, al_symbolsearch and al_getdiagnostics to any MCP-compatible agent, without Visual Studio Code.

## Learn pages

- [AL MCP Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/al-agent-tools/al-mcp-server): Learn about the AL MCP Server, a standalone Model Context Protocol (MCP) server that exposes AL development tools for headless environments and CI/CD pipelines.
- [Business Central MCP Server Overview and Setup](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/mcp-overview): Learn how to set up and use the Business Central MCP server to enable AI clients like GitHub Copilot and ChatGPT to interact with your Business Central data.
- [Configure Business Central MCP Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server): Learn how to configure the Business Central MCP server to enable AI agents to access and interact with your Business Central data and processes.
- [Connect Business Central MCP Server to non-Microsoft hosts](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-non-microsoft): Learn how to connect non-Microsoft MCP hosts like ChatGPT and Claude to Business Central MCP server with step-by-step guidance and prerequisites.
- [Connect to Business Central MCP Server with Visual Studio Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/use-mcp-server-in-vscode): Learn how to set up and use the Business Central MCP server in Visual Studio Code to interact with your Business Central data through natural language.
- [Create Agents in Copilot Studio that Connect to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio): Create conversational agents in Copilot Studio that use Business Central data and automate business processes with natural language.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Exploring Model Context Protocol (MCP) for Business Automation in Business Central](../../../posts/aardvarklabs-blog/2724.md) (community post): "Model Context Protocol servers enable AI agents to interact with Business Central data"
- [Connect Claude to Business Central MCP: A Step-by-Step Guide](../../../posts/aardvarklabs-blog/3775.md) (community post): "connect Claude to Business Central MCP server using a locally hosted Python proxy"
- [Microsoft Agent Framework and Business Central MCP server](../../../posts/bertverbeek-nl/1183.md) (community post): "Business Central MCP server enables AI agents to connect to Business Central through the Microsoft Agent Framework"
- [An MCP server for Dynamics 365 Business Central? Why not?](../../../posts/demiliani-com/11666.md) (community post): "An MCP server for Dynamics 365 Business Central allows AI agents and Copilot tools to access ERP data"
- [Dynamics 365 Business Central: BCMCPProxy vNext](../../../posts/demiliani-com/13391.md) (community post): "bridges Model Context Protocol clients with Business Central's API"
- [🤖 AboutText: Teaching AI to Understand Your APIs ✨](../../../posts/gerardorenteria-blog/12682.md) (community post): "AboutText property, added to APIV2 pages in Business Central 27.1, allows APIs to describe themselves to AI assistants"
- [Connect Any Agent to Business Central](../../../posts/katson-com/4678.md) (community post): "Connect external AI agents to Business Central using the Model Context Protocol"
- [Building BcMCPProxy.exe and Connecting to Claude Desktop (BLOG 3 OF 4)](../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-8092462798375727234--07aea86270.md) (community post): "connecting it to Claude Desktop via Azure App Registration for delegated authentication to Business Central"
- [What's New: Enhanced MCP Server (2026 release wave 1)](../../../videos/0WAOtNaKjws.md) (video): "Enhanced MCP Server; MCP Configuration Validations; Support for Multiple MCP Hosts"
- [MCP Server and API Queries (2026 release wave 1)](../../../videos/4HE3BBCcV84.md) (video): "mcp server; api queries; power bi apps; external agents"
- [MCP Server for Business Central - Advanced Topics (Part 3)](../../../videos/C5cmG3sNjUg.md) (video): "MCP Server for Business Central; Default Configuration Mode; Named Configurations; Dynamic Tools System"
- [Build an Agent in Microsoft Copilot Studio for Business Central (2025)](../../../videos/EpDIrJE0HzA.md) (video): "Model Context Protocol (MCP) server for Business Central"
- [Introducing MCP Server Configurations for Business Central (Part 2)](../../../videos/GeT5E_f9A9Q.md) (video): "mcp server; configurations; agent permissions; api pages; dynamic tool mode"
- [What's New: Business Central Integration with Microsoft Copilot Studio (2026 release wave 1)](../../../videos/GK6hM-nBYZk.md) (video): "copilot studio; agent building; mcp server; power automate; business central connector"
- [20260831 - Business Central MCP Server, standard and custom](../../../videos/rm-FstU_I80.md) (video): "Model Context Protocol; mcp server; Business Central MCP Server; MCP Server Configuration"
- [MCP Server and All Microsoft API's (2026 release wave 1)](../../../videos/zei-IszvYNU.md) (video): "MCP Server and All Microsoft API's. Topics: mcp server; microsoft apis; agents"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8350 "MCP Config List"](../../../objects/page/8350.md) · captioned "Model Context Protocol (MCP) Server Configurations"
- [Page 8351 "MCP Config Card"](../../../objects/page/8351.md) · captioned "Model Context Protocol (MCP) Server Configuration"
- [Page 8359 "MCP Config Warning List"](../../../objects/page/8359.md) · captioned "MCP Configuration Warnings" · on [Table 8352 "MCP Config Warning"](../../../objects/table/8352.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
