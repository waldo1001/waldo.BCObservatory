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
  at: "2026-10-07T00:21:33.880Z"
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
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration-with-ai
  localizations: []
  videos:
    - video/0WAOtNaKjws
    - video/4HE3BBCcV84
    - video/AMVAiPTfSrU
    - video/C5cmG3sNjUg
    - video/c91E6IykUnk
    - video/GeT5E_f9A9Q
    - video/GK6hM-nBYZk
    - video/IDYhxt-8ImI
    - video/LerAo-GGl8U
    - video/LuAHCXiwYn4
    - video/nMiLzdfidos
    - video/npkC4wyucyY
    - video/qqWj_2uM0ek
    - video/rm-FstU_I80
    - video/uMKLsKfKPc0
    - video/x0XF0lBvgEE
    - video/zei-IszvYNU
    - video/zQg48VT0crU
  posts:
    - post/aardvarklabs-blog/2724
    - post/aardvarklabs-blog/3775
    - post/demiliani-com/13541
    - post/demiliani-com/13840
    - post/demiliani-com/13882
    - post/dvlprlife-com/https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-june-14-20-2026/
    - post/gerardorenteria-blog/1968
    - post/stefanmaron-com/https://stefanmaron.com/posts/bc-code-atlas-grounded-search-for-agents/
    - post/waldo-be/318371
    - post/waldo-be/318540
    - post/waldo-be/318627
  guidelines: []
learn_toc_path:
  - Integration with AI
  - Integrate with Model Context Protocol
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration-with-ai
children: []
coverage:
  learn: 6
  code: 0
  video: 18
  blog: 11
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
- [YAMPI (the Dynamics 365 Business Central Administration MCP Server): installing apps from Microsoft’s Marketplace.](../../../posts/demiliani-com/13541.md) (community post): "YAMPI is an Administration MCP server for managing Dynamics 365 Business Central through AI tools"
- [Securely accessing an Azure OpenAI model from an Azure Logic Apps Standard AI agent using a Private Endpoint.](../../../posts/demiliani-com/13840.md) (community post): "Securely accessing an Azure OpenAI model from an Azure Logic Apps Standard AI agent"
- [Dynamics 365 Business Central: using AL MCP Server from GitHub Copilot CLI.](../../../posts/demiliani-com/13882.md) (community post): "AL MCP Server exposes AL development tools through the Model Context Protocol, allowing CLI-based AI agents"
- [Weekly Review: Business Central AL Development – June 14–20, 2026](../../../posts/dvlprlife-com/https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-june-14-20-2026/.md) (community post): "AL MCP Server allows GitHub Copilot CLI to access AL development tools"
- [Visual Studio Code – versions](../../../posts/gerardorenteria-blog/1968.md) (community post): "MCP (Model Context Protocol) servers enable extensible tool ecosystems for agents"
- [Introducing bc-code-atlas: Real BC Source for Coding Agents, Not a Guess](../../../posts/stefanmaron-com/https://stefanmaron.com/posts/bc-code-atlas-grounded-search-for-agents/.md) (community post): "bc-code-atlas is an MCP server that provides AI coding agents"
- [Analyzing BC Telemetry with AI with the “BC Telemetry Buddy”](../../../posts/waldo-be/318371.md) (community post): "Model Context Protocol tool that lets users query Business Central telemetry"
- [Troubleshooting Series – Ep5 – Telemetry](../../../posts/waldo-be/318540.md) (community post): "BC Telemetry Buddy MCP makes telemetry analysis accessible by generating KQL queries"
- [“the waldo way”](../../../posts/waldo-be/318627.md) (community post): "MCPs was created to lower adoption barriers and ensure uniform practices"
- [What's New: Enhanced MCP Server (2026 release wave 1)](../../../videos/0WAOtNaKjws.md) (video): "Enhanced MCP Server; MCP Configuration Validations; Support for Multiple MCP Hosts"
- [MCP Server and API Queries (2026 release wave 1)](../../../videos/4HE3BBCcV84.md) (video): "mcp server; api queries; power bi apps; external agents"
- [How 3 Partners are Building Powerful Agents for Business Central](../../../videos/AMVAiPTfSrU.md) (video): "Business Central MCP server; Copilot Studio agent creation"
- [MCP Server for Business Central - Advanced Topics (Part 3)](../../../videos/C5cmG3sNjUg.md) (video): "MCP Server for Business Central; Default Configuration Mode; Named Configurations; Dynamic Tools System"
- [Episode 519: The Last Frontier: Can AI Finally Conquer BC Report Layouts?](../../../videos/c91E6IykUnk.md) (video): "MCP integration for telemetry log analysis; Telemetry analysis through MCP"
- [Introducing MCP Server Configurations for Business Central (Part 2)](../../../videos/GeT5E_f9A9Q.md) (video): "mcp server; configurations; agent permissions; api pages; dynamic tool mode"
- [What's New: Business Central Integration with Microsoft Copilot Studio (2026 release wave 1)](../../../videos/GK6hM-nBYZk.md) (video): "copilot studio; agent building; mcp server; power automate; business central connector"
- [20260629 - AI Enabled Delivery for Consultants](../../../videos/IDYhxt-8ImI.md) (video): "Model Context Protocol (MCP); Copilot Studio agents for Business Central"
- [Microsoft presents: Next level administration skills with the admin MCP server and agents](../../../videos/LerAo-GGl8U.md) (video): "mcp server; admin center api; agents; multi-tenant administration"
- [Swappable Claude Profiles: Per-Project Configs via Container Mounting (Part 3)](../../../videos/LuAHCXiwYn4.md) (video): "claude profiles; agent configuration; mcp server; Per-folder MCP server configuration"
- [What's New: AL Language (2026 release wave 1)](../../../videos/nMiLzdfidos.md) (video): "AL MCP server for non-VS Code agents; Automated agentic pipelines with AL MCP; Business Central troubleshooting MCP server"
- [What's new in BC-Bench (2026 release wave 2)](../../../videos/npkC4wyucyY.md) (video): "AL MCP server; Pass@5 improvement with MCP; Agent harness comparison"
- [20260420 - What is GitOps and why should you care](../../../videos/qqWj_2uM0ek.md) (video): "GitOps declarative approach; GitOps pull-based reconciliation; Infrastructure as Code"
- [20260831 - Business Central MCP Server, standard and custom](../../../videos/rm-FstU_I80.md) (video): "Model Context Protocol; mcp server; Business Central MCP Server; MCP Server Configuration"
- [Microsoft presents: Build Agents with Microsoft Copilot Studio and surface them in M365 Copilot Chat](../../../videos/uMKLsKfKPc0.md) (video): "MCP Connector; MCP server connection for Business Central"
- [Microsoft Ends Business Central Release Plans: What Changes?](../../../videos/x0XF0lBvgEE.md) (video): "Copilot Agent Capabilities - Run Data Queries with MCP Server"
- [MCP Server and All Microsoft API's (2026 release wave 1)](../../../videos/zei-IszvYNU.md) (video): "MCP Server and All Microsoft API's. Topics: mcp server; microsoft apis; agents"
- [Episode 522: What Was Your Eureka Moment with AI? Smarter Workflows for BC Development](../../../videos/zQg48VT0crU.md) (video): "MCP servers; AL-MCP server integration with Claude; Custom MCP for BC performance"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 8350, 8351, 8359.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
