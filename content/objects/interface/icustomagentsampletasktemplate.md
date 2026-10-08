---
id: object/interface/icustomagentsampletasktemplate
type: object
title: Interface "ICustomAgentSampleTaskTemplate"
summary: Interface "ICustomAgentSampleTaskTemplate" in AgentDesignExperience (System.Agents.Designer.CustomAgent). 3 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7db9d7a6770f2ba41e8897a974f6dbd5ed6e4bbb795389213625884b4316e341
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al
    title: src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: ICustomAgentSampleTaskTemplate
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
  implemented_by: 4
---

# Interface "ICustomAgentSampleTaskTemplate"

> Interface "ICustomAgentSampleTaskTemplate" in AgentDesignExperience (System.Agents.Designer.CustomAgent). 3 public procedures. Introduced in BC29, still in BC30.

AgentDesignExperience · System.Agents.Designer.CustomAgent · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetTaskTemplateCode(): Code[20]`: Gets the code that identifies the task template associated with this agent.
- `GetTaskTemplateDefinition(var TaskTemplateOutStream: OutStream)`: Writes the task template definition JSON to the provided stream. The JSON defines sample tasks that demonstrate the agent's capabilities.
- `GetTaskTemplatePlaceholdersMap(): Dictionary of [Text, Text]`: Gets a map of placeholder tokens and their replacement values for the task template. Use placeholders to support localization of template names and descriptions.

## Implemented by

- [Codeunit 4367 "Agent Sample No Task Template"](../codeunit/4367.md)
- [Codeunit 4450 "Sales Validation Agent"](../codeunit/4450.md)
- [Enum 4353 "Custom Agent Sample"](../enum/4353.md)
- [Profile "Sales Validation Agent"](../profile/sales-validation-agent.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "ICustomAgentSampleTaskTemplate")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
