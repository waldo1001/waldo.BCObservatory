---
id: topic/dev-itpro/integration-with-ai/integrate-with-model-context-protocol
type: topic
title: Integrate with Model Context Protocol
summary: "Model Context Protocol (MCP) integration for Business Central: the Business Central MCP Server, its configuration, connecting it to hosts such as VS Code, Copilot Studio, GitHub Copilot CLI, Claude and ChatGPT, and the AL MCP Server for AL development tools. It answers setup, connection and tool-access questions."
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-18T00:56:54.350Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 266608ffd89f540bd85753baf4dec541dc3dac686e02f1a42e12f51433b46faa
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
    - video/C5cmG3sNjUg
    - video/EpDIrJE0HzA
    - video/GeT5E_f9A9Q
    - video/GK6hM-nBYZk
    - video/q3xnjJD32kk
    - video/qs1cg-GoDeQ
    - video/rm-FstU_I80
    - video/zei-IszvYNU
  posts:
    - post/aardvarklabs-blog/2724
    - post/aardvarklabs-blog/3775
    - post/bertverbeek-nl/1183
    - post/demiliani-com/12412
    - post/demiliani-com/13882
    - post/gerardorenteria-blog/12682
    - post/gerardorenteria-blog/13993
    - post/katson-com/4678
    - post/tine-staric-net/https-tine-staric-net-blog-2026-copilot-harness-default--e1d89722b8
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
  video: 9
  blog: 9
  guideline: 0
bc_forms:
  - 8350
  - 8351
  - 8359
member_hash: 2fcadb4b94709a8a90be7bceec086c3f09da8de35cb149093c69df5a1053298a
narrative: generated
---

# Integrate with Model Context Protocol

> Model Context Protocol (MCP) integration for Business Central: the Business Central MCP Server, its configuration, connecting it to hosts such as VS Code, Copilot Studio, GitHub Copilot CLI, Claude and ChatGPT, and the AL MCP Server for AL development tools. It answers setup, connection and tool-access questions.

Path: [Integration with AI](../integration-with-ai.md) > Integrate with Model Context Protocol · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers two MCP servers. The Business Central MCP Server lets AI clients such as Copilot Studio and GitHub Copilot view and manage records, query data and run business processes through a standardized, secure interface. The AL MCP Server exposes AL development tools so any MCP-compatible agent can build, publish, compile and search symbols without Visual Studio Code.

Start with the Business Central MCP Server overview and setup page, then the configuration page, where administrators define which APIs agents can access and which operations (read, create, modify, delete, actions) are allowed. After that, pick the connection page for your host: Visual Studio Code, Copilot Studio, or non-Microsoft hosts that need Microsoft Entra ID app registration and manual client configuration.

The AL MCP Server page is separate and aimed at developers who want agents to work with AL code and tooling.

## Key points

- The Business Central MCP Server supports API Tools, Dynamic Tool Mode and Data Query Tools.
- Administrators create configurations that define which APIs agents can access and which operations are permitted.
- Operations include read, create, modify, delete and action operations through API pages and queries.
- Non-Microsoft hosts (GitHub Copilot CLI, Claude, ChatGPT) need Entra ID app registration, redirect URI configuration and delegated permissions.
- In VS Code, the server can be configured at user level or workspace level and used with GitHub Copilot in agent mode.
- Copilot Studio agents can use the Business Central connector or the MCP server to find, create, update and delete records and call APIs.
- The AL MCP Server provides tools al_build, al_compile, al_publish, al_downloadsymbols, al_symbolsearch and al_getdiagnostics.
- Headerless connections and dynamic tool discovery are covered in the connection pages.

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
- [Connect Claude to Business Central MCP: A Step-by-Step Guide](../../../posts/aardvarklabs-blog/3775.md) (community post): "Connect Claude to Business Central MCP; locally hosted Python proxy"
- [Microsoft Agent Framework and Business Central MCP server](../../../posts/bertverbeek-nl/1183.md) (community post): "Business Central MCP server launched at Directions EMEA"
- [Visual Studio Code and autodiscovery of MCP servers: better to stay in control.](../../../posts/demiliani-com/12412.md) (community post): "Visual Studio Code and autodiscovery of MCP servers"
- [Dynamics 365 Business Central: using AL MCP Server from GitHub Copilot CLI.](../../../posts/demiliani-com/13882.md) (community post): "AL MCP Server exposes AL development tools through the Model Context Protocol"
- [🤖 AboutText: Teaching AI to Understand Your APIs ✨](../../../posts/gerardorenteria-blog/12682.md) (community post): "AboutText property, added to APIV2 pages when APIs are exposed through the Model Context Protocol"
- [🧠 Agent Skills + MCPs: check your BC extension health in VS Code 🔍](../../../posts/gerardorenteria-blog/13993.md) (community post): "MCPs: check your BC extension health in VS Code"
- [Connect Any Agent to Business Central](../../../posts/katson-com/4678.md) (community post): "connect external AI agents to Business Central using the Model Context Protocol"
- [The Copilot harness is now VS Code's default](../../../posts/tine-staric-net/https-tine-staric-net-blog-2026-copilot-harness-default--e1d89722b8.md) (community post): "The Copilot harness is now VS Code's default"
- [What's New: Enhanced MCP Server (2026 release wave 1)](../../../videos/0WAOtNaKjws.md) (video): "MCP Server configuration validation import export connection string telemetry auditing"
- [MCP Server for Business Central - Advanced Topics (Part 3)](../../../videos/C5cmG3sNjUg.md) (video): "MCP Server for Business Central agents dynamic tools static tools"
- [Build an Agent in Microsoft Copilot Studio for Business Central (2025)](../../../videos/EpDIrJE0HzA.md) (video): "Build an Agent in Microsoft Copilot Studio for Business Central"
- [Introducing MCP Server Configurations for Business Central (Part 2)](../../../videos/GeT5E_f9A9Q.md) (video): "Introducing MCP Server Configurations for Business Central"
- [What's New: Business Central Integration with Microsoft Copilot Studio (2026 release wave 1)](../../../videos/GK6hM-nBYZk.md) (video): "Business Central Integration with Microsoft Copilot Studio"
- [What's new: MCP Server (2026 release wave 2)](../../../videos/q3xnjJD32kk.md) (video): "MCP Server; query tools; data analysis; agent capabilities"
- [What's new: MCP Server (2026 release wave 2)](../../../videos/qs1cg-GoDeQ.md) (video): "MCP Server; data tools; query tool; agents; copilot studio"
- [20260831 - Business Central MCP Server, standard and custom](../../../videos/rm-FstU_I80.md) (video): "Business Central MCP Server; Model Context Protocol; copilot studio integration"
- [MCP Server and All Microsoft API's (2026 release wave 1)](../../../videos/zei-IszvYNU.md) (video): "All Microsoft published APIs available in MCP server"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8350 "MCP Config List"](../../../objects/page/8350.md) · captioned "Model Context Protocol (MCP) Server Configurations"
- [Page 8351 "MCP Config Card"](../../../objects/page/8351.md) · captioned "Model Context Protocol (MCP) Server Configuration"
- [Page 8359 "MCP Config Warning List"](../../../objects/page/8359.md) · captioned "MCP Configuration Warnings" · on [Table 8352 "MCP Config Warning"](../../../objects/table/8352.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
