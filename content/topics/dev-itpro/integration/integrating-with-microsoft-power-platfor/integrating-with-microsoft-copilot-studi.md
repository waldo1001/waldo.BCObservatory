---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-copilot-studi
type: topic
title: Integrating with Microsoft Copilot Studio
summary: Integrating Business Central with Microsoft Copilot Studio covers configuring the Business Central MCP Server and building Copilot Studio agents that connect to Business Central. It answers questions about which APIs and operations agents can use, and how to connect via the connector or MCP server.
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:57:10.968Z"
  flags: []
generated:
  at: "2026-10-26T08:22:02.554Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5b90222bffc7d5ed27543e91f66136f1bb6b22df1700ffe964810a84bca6048c
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
  objects:
    - object/page/8350
    - object/page/8351
    - object/page/8359
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
  localizations: []
  videos:
    - video/6Zb7VAvLVm4
    - video/AMVAiPTfSrU
    - video/GK6hM-nBYZk
    - video/uMKLsKfKPc0
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
  code: 3
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

> Integrating Business Central with Microsoft Copilot Studio covers configuring the Business Central MCP Server and building Copilot Studio agents that connect to Business Central. It answers questions about which APIs and operations agents can use, and how to connect via the connector or MCP server.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Power Platform](../integrating-with-microsoft-power-platfor.md) > Integrating with Microsoft Copilot Studio · tier official · system copilot · narrative reviewed (checked by Opus)

## Overview

This section describes how AI agents built in Copilot Studio work with Business Central data. It has two pages: one for administrators who set up the Business Central MCP Server, and one for makers who build the agents.

The MCP Server page explains how administrators create configurations that define which APIs an agent can access and which operations are allowed (read, create, modify, delete, and actions) through API pages and queries. It also covers API Tools, Dynamic Tool Mode, Data Query Tools, and API object discovery.

The agent page explains how to create a Copilot Studio agent that connects through either the Business Central connector or the MCP server, and how to configure tools with the right Business Central permissions. Start with the MCP Server configuration if you plan to use MCP, then move to agent creation.

## Key points

- The Business Central MCP Server lets AI agents read, create, modify, delete, and run actions on Business Central data through API pages and queries.
- Administrators create MCP configurations that define which APIs agents can access and which operations are permitted.
- MCP server features include API Tools, Dynamic Tool Mode, Data Query Tools, and API object discovery, including read-only object discovery.
- Copilot Studio agents can connect using the Business Central connector or the MCP server.
- Connector actions support finding, creating, updating, and deleting records, and calling API actions.
- Agent tools must be configured with appropriate Business Central permissions.
- Dynamic tool discovery is available for agents using the MCP server.

## Learn pages

- [Configure Business Central MCP Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server): Learn how to configure the Business Central MCP server to enable AI agents to access and interact with your Business Central data and processes.
- [Create Agents in Copilot Studio that Connect to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio): Create conversational agents in Copilot Studio that use Business Central data and automate business processes with natural language.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Creating Low-Code AI Agents with Copilot Studio and Business Central](../../../../posts/aardvarklabs-blog/1818.md) (community post): "Copilot Studio enables low-code creation of AI agents that connect to Business Central"
- [Agents in Business Central – part 6 – The conclusion](../../../../posts/bertverbeek-nl/1290.md) (community post): "Agents created in Copilot Studio, covering deployment, licensing"
- [What's New: Business Central Integration with Power Platform including Power BI(2024 release wave 2)](../../../../videos/6Zb7VAvLVm4.md) (video): "Copilot Studio Connector for Business Central; Copilot Studio Generative AI Mode"
- [How 3 Partners are Building Powerful Agents for Business Central](../../../../videos/AMVAiPTfSrU.md) (video): "Copilot Studio agent creation"
- [What's New: Business Central Integration with Microsoft Copilot Studio (2026 release wave 1)](../../../../videos/GK6hM-nBYZk.md) (video): "Copilot Studio Agent Building; MCP Server for Business Central; Business Central Power Platform Connector"
- [Microsoft presents: Build Agents with Microsoft Copilot Studio and surface them in M365 Copilot Chat](../../../../videos/uMKLsKfKPc0.md) (video): "Build Agents with Microsoft Copilot Studio and surface them in M365 Copilot Chat"
- [What's New: Business Central Integration with Power Platform](../../../../videos/V_ZyGeF5JXE.md) (video): "Copilot Studio Integration; Copilot in Power Automate"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8350 "MCP Config List"](../../../../objects/page/8350.md) · captioned "Model Context Protocol (MCP) Server Configurations"
- [Page 8351 "MCP Config Card"](../../../../objects/page/8351.md) · captioned "Model Context Protocol (MCP) Server Configuration"
- [Page 8359 "MCP Config Warning List"](../../../../objects/page/8359.md) · captioned "MCP Configuration Warnings" · on [Table 8352 "MCP Config Warning"](../../../../objects/table/8352.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
