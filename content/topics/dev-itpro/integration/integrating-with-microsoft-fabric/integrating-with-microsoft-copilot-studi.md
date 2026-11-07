---
id: topic/dev-itpro/integration/integrating-with-microsoft-fabric/integrating-with-microsoft-copilot-studi
type: topic
title: Integrating with Microsoft Copilot Studio
summary: Integrating Business Central with Microsoft Copilot Studio covers configuring the Business Central MCP Server and building Copilot Studio agents that connect to Business Central. It answers questions about which APIs and operations agents can use, and how to connect through the connector or MCP server.
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-07T01:06:39.442Z"
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
    - topic/dev-itpro/integration/integrating-with-microsoft-fabric
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Fabric
  - Integrating with Microsoft Copilot Studio
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-fabric
children: []
coverage:
  learn: 2
  code: 3
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 8350
  - 8351
  - 8359
member_hash: 9c0ff4aa67e1f7dfe5413b49016dbf896c2aa31d767967373bc8a618d5f7b42d
narrative: generated
---

# Integrating with Microsoft Copilot Studio

> Integrating Business Central with Microsoft Copilot Studio covers configuring the Business Central MCP Server and building Copilot Studio agents that connect to Business Central. It answers questions about which APIs and operations agents can use, and how to connect through the connector or MCP server.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Fabric](../integrating-with-microsoft-fabric.md) > Integrating with Microsoft Copilot Studio · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

This section has two pages that work as a pair. The first is for administrators: it explains how to configure the Business Central MCP Server so AI agents can connect to an environment and work with data through API pages and queries. Configurations define which APIs agents can access and which operations they may perform.

The second page is for agent builders: it shows how to create agents in Copilot Studio that connect to Business Central, either through the Business Central connector or through the MCP server. Agents can read and write records, call APIs, and automate business tasks, with connector actions or MCP connections set up using appropriate Business Central permissions.

Start with the MCP server configuration page so the allowed APIs and operations are defined, then move to the Copilot Studio page to build and connect the agent.

## Key points

- The Business Central MCP Server lets AI agents read, create, modify, delete, and run actions on Business Central data via API pages and queries.
- Administrators create configurations that define which APIs agents can access and which operations are permitted.
- MCP server features include API Tools, Dynamic Tool Mode, Data Query Tools, and API object discovery (including read-only object discovery).
- Copilot Studio agents can connect to Business Central using the Business Central connector or the MCP server.
- Connector-based agents can find, create, update, and delete records and call API actions.
- Agent tools are configured as connector actions or MCP server connections, with appropriate Business Central permissions.
- Dynamic tool discovery is supported in the Copilot Studio agent scenario.

## Learn pages

- [Configure Business Central MCP Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/configure-mcp-server): Learn how to configure the Business Central MCP server to enable AI agents to access and interact with your Business Central data and processes.
- [Create Agents in Copilot Studio that Connect to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/create-agent-in-copilot-studio): Create conversational agents in Copilot Studio that use Business Central data and automate business processes with natural language.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8350 "MCP Config List"](../../../../objects/page/8350.md) · captioned "Model Context Protocol (MCP) Server Configurations"
- [Page 8351 "MCP Config Card"](../../../../objects/page/8351.md) · captioned "Model Context Protocol (MCP) Server Configuration"
- [Page 8359 "MCP Config Warning List"](../../../../objects/page/8359.md) · captioned "MCP Configuration Warnings" · on [Table 8352 "MCP Config Warning"](../../../../objects/table/8352.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
