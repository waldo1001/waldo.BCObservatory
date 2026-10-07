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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b649cee3d8effaad52022752dce60c8dfe39aadbfd64f793cefdafa6ec82ef67
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/MCP/src/Configuration/Interfaces/MCPConfigWarning.Interface.al
    title: src/System Application/App/MCP/src/Configuration/Interfaces/MCPConfigWarning.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

System Application · System.MCP · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/MCP/src/Configuration/Interfaces/MCPConfigWarning.Interface.al) · facts from BC29

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
