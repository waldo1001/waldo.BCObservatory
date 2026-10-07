---
id: object/interface/mcp-config-warning
type: object
title: Interface "MCP Config Warning"
summary: Interface "MCP Config Warning" in System Application (System.MCP). 4 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e036d6c1df231facb862f880d0c9067a095cf703505b5bd8238ea22e8dc608df
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/MCP/src/Configuration/Interfaces/MCPConfigWarning.Interface.al
    title: src/System Application/App/MCP/src/Configuration/Interfaces/MCPConfigWarning.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: MCP Config Warning
namespace: System.MCP
app: System Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "MCP Config Warning"

> Interface "MCP Config Warning" in System Application (System.MCP). 4 public procedures. Present since at least BC28, still in BC30.

System Application · System.MCP · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/MCP/src/Configuration/Interfaces/MCPConfigWarning.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `CheckForWarnings(ConfigId: Guid; var MCPConfigWarning: Record "MCP Config Warning"; var EntryNo: Integer)`
- `WarningMessage(MCPConfigWarning: Record "MCP Config Warning"): Text`
- `RecommendedAction(MCPConfigWarning: Record "MCP Config Warning"): Text`
- `ApplyRecommendedAction(var MCPConfigWarning: Record "MCP Config Warning")`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
