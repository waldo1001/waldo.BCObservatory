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
  at: "2026-10-06T15:20:40.673Z"
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
  videos: []
  posts: []
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
  video: 0
  blog: 0
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

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 8350, 8351, 8359.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
