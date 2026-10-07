---
id: object/profile/sales-validation-agent
type: object
title: Profile "Sales Validation Agent"
summary: Profile "Sales Validation Agent" in AgentSamples (System.Agents.Designer.AgentSamples.SalesValidation). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
  - agentsamples
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f09e265ec04daaa403cd4ec0832b191c5001eef17116b1e4c0e3590e3d9e9a6e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/AgentSamples/app/SalesValidation/Profile/SalesValidationAgent.Profile.al
    title: src/Apps/W1/AgentSamples/app/SalesValidation/Profile/SalesValidationAgent.Profile.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
object_type: profile
object_id: null
name: Sales Validation Agent
caption: Sales Validation Agent (Copilot)
namespace: System.Agents.Designer.AgentSamples.SalesValidation
app: AgentSamples
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
  calls: 0
  called_by: 0
  implements: 2
---

# Profile "Sales Validation Agent"

> Profile "Sales Validation Agent" in AgentSamples (System.Agents.Designer.AgentSamples.SalesValidation). Introduced in BC29, still in BC30.

AgentSamples · System.Agents.Designer.AgentSamples.SalesValidation · captioned "Sales Validation Agent (Copilot)" · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/AgentSamples/app/SalesValidation/Profile/SalesValidationAgent.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Sales Validation Agent (Copilot) |

## Implements

- [Interface "ICustomAgentSample"](../interface/icustomagentsample.md)
- [Interface "ICustomAgentSampleTaskTemplate"](../interface/icustomagentsampletasktemplate.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "profile", object_name: "Sales Validation Agent")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node profile "Sales Validation Agent"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
