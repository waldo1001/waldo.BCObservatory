---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-copilot-studi
type: topic
title: Integrating with Microsoft Copilot Studio
summary: "Integration of Business Central with Microsoft Copilot Studio: how to configure the Business Central MCP Server and how to build Copilot Studio agents that use the Business Central connector or the MCP server. Answers questions on exposing APIs and data queries to agents and on connecting agents to Business Central."
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3a66d2fc181760b2e570f4ad8eafd0f0997a32526d57106635b85b812dc65ac2
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server
    title: Configure Business Central MCP Server
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
  localizations: []
  videos:
    - video/6Zb7VAvLVm4
    - video/EpDIrJE0HzA
    - video/iViHfCgL2L8
    - video/rm-FstU_I80
    - video/V_ZyGeF5JXE
  posts:
    - post/aardvarklabs-blog/1818
    - post/bertverbeek-nl/1290
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Power Platform
  - Integrating with Microsoft Copilot Studio
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
children: []
coverage:
  learn: 2
  code: 0
  video: 5
  blog: 2
  guideline: 0
bc_forms:
  - 8350
  - 8351
  - 8359
member_hash: 9c0ff4aa67e1f7dfe5413b49016dbf896c2aa31d767967373bc8a618d5f7b42d
narrative: generated
---

# Integrating with Microsoft Copilot Studio

> Integration of Business Central with Microsoft Copilot Studio: how to configure the Business Central MCP Server and how to build Copilot Studio agents that use the Business Central connector or the MCP server. Answers questions on exposing APIs and data queries to agents and on connecting agents to Business Central.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Power Platform](../integrating-with-microsoft-power-platfor.md) > Integrating with Microsoft Copilot Studio · tier official · system copilot · **unreviewed** (machine-generated narrative)

## Overview

This section covers two sides of connecting AI agents to Business Central. One side is the Business Central MCP Server, which lets AI clients connect to an environment and perform record operations, actions, and data queries through configurable API tools. The other side is Copilot Studio, where you create agents that use either the Business Central connector or the MCP server to read and write records, call APIs, and automate business tasks.

The two pages fit together as server setup and agent setup. The MCP server page explains what you control: the available APIs, dynamic tool mode, data query tools, and which operations are allowed. The Copilot Studio page explains how an agent consumes that, through connector actions or an MCP server connection, with suitable Business Central permissions.

Start with the MCP server configuration page to decide what agents may access and change. Then use the Copilot Studio page to create the agent and attach the connector or MCP server as agent tools.

## Key points

- The Business Central MCP Server lets AI clients connect to environments and run record operations, actions, and data queries.
- MCP server configuration covers settings, available APIs, dynamic tool mode, and data query tools.
- Access is controlled per API object with Read, Create, Modify, Delete, and Action permissions.
- API object discovery is part of the configuration, and the configuration can be exported and imported.
- Copilot Studio agents can connect through the Business Central connector or through the MCP server.
- Agent tools can find, create, update, and delete records and call API actions.
- Dynamic tool discovery is available when an agent uses the MCP server.
- Connector actions or MCP connections need appropriate Business Central permissions.

## Learn pages

- [Configure Business Central MCP Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server): Learn how to configure the Business Central MCP server to enable AI agents to access and interact with your Business Central data and processes.
- [Create Agents in Copilot Studio that Connect to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio): Create conversational agents in Copilot Studio that use Business Central data and automate business processes with natural language.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Creating Low-Code AI Agents with Copilot Studio and Business Central](../../../../posts/aardvarklabs-blog/1818.md) (community post): "Copilot Studio enables low-code creation of AI agents that connect to Business Central"
- [Agents in Business Central – part 6 – The conclusion](../../../../posts/bertverbeek-nl/1290.md) (community post): "Copilot Studio provides chat options, many Power Platform connectors, model selection"
- [What's New: Business Central Integration with Power Platform including Power BI(2024 release wave 2)](../../../../videos/6Zb7VAvLVm4.md) (video): "Copilot Studio Connector for Business Central; Copilot Studio Generative AI Mode"
- [Build an Agent in Microsoft Copilot Studio for Business Central (2025)](../../../../videos/EpDIrJE0HzA.md) (video): "Build an Agent in Microsoft Copilot Studio for Business Central; Model Context Protocol (MCP) server"
- [Introducing MCP Server for Business Central (Part 1)](../../../../videos/iViHfCgL2L8.md) (video): "Copilot Studio Integration; AI-Driven Automation with LLM Orchestration"
- [20260831 - Business Central MCP Server, standard and custom](../../../../videos/rm-FstU_I80.md) (video): "MCP Server Connection in Copilot Studio; Copilot Agent Query Execution; MCP integration"
- [What's New: Business Central Integration with Power Platform](../../../../videos/V_ZyGeF5JXE.md) (video): "Copilot Studio Integration; Copilot in Power Automate"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 8350, 8351, 8359.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
