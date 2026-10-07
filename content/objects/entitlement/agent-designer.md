---
id: object/entitlement/agent-designer
type: object
title: Entitlement "Agent Designer"
summary: Entitlement "Agent Designer" in AgentDesignExperience (System.Agents.Designer). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - agentdesignexperience
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: edc6d6d12a9295ec40cd3f83e34ac86a59e5dd6185f3b63341f5b349382fcd6a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/AgentDesignExperience/app/PermissionSets/AgentDesigner.Entitlement.al
    title: src/Apps/W1/AgentDesignExperience/app/PermissionSets/AgentDesigner.Entitlement.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
object_type: entitlement
object_id: null
name: Agent Designer
namespace: System.Agents.Designer
app: AgentDesignExperience
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 0
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Entitlement "Agent Designer"

> Entitlement "Agent Designer" in AgentDesignExperience (System.Agents.Designer). Introduced in BC29, still in BC30.

AgentDesignExperience · System.Agents.Designer · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/AgentDesignExperience/app/PermissionSets/AgentDesigner.Entitlement.al) · facts from BC29

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "entitlement", object_name: "Agent Designer")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node entitlement "Agent Designer"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
