---
id: object/interface/icustomagentsample
type: object
title: Interface "ICustomAgentSample"
summary: Interface "ICustomAgentSample" in AgentDesignExperience (System.Agents.Designer.CustomAgent). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - agentdesignexperience
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 754f8574727140a181502875ca43f37fac95b92ceab59038032b9718793ff7cc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSample.Interface.al
    title: src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSample.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: ICustomAgentSample
namespace: System.Agents.Designer.CustomAgent
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
  procedures: 3
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
  implements: 0
  implemented_by: 3
---

# Interface "ICustomAgentSample"

> Interface "ICustomAgentSample" in AgentDesignExperience (System.Agents.Designer.CustomAgent). 3 public procedures. Introduced in BC29, still in BC30.

AgentDesignExperience · System.Agents.Designer.CustomAgent · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSample.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetAgentCode(): Code[10]`: Gets the unique code that identifies this sample agent.
- `GetAgentDefinition(var AgentOutStream: OutStream)`: Writes the sample agent definition XML to the provided stream. The XML must conform to the agent import format and include agent metadata, profile, access controls, and instructions. The XML must contain exactly one agent definition. If the XML contains multiple agent definitions, an error will be t...
- `GetAgentLearnMoreUrl(): Text[2048]`: Gets the URL for documentation or learning resources about this agent.

## Implemented by

- [Codeunit 4450 "Sales Validation Agent"](../codeunit/4450.md)
- [Enum 4353 "Custom Agent Sample"](../enum/4353.md)
- [Profile "Sales Validation Agent"](../profile/sales-validation-agent.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "ICustomAgentSample")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
