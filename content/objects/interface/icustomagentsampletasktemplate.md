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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a87387a0ebe591f010e1baa392e07fcd99cbd67211fbf9e6873ae7fc43ae5274
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al
    title: src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al (releases/29.x)
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
---

# Interface "ICustomAgentSampleTaskTemplate"

> Interface "ICustomAgentSampleTaskTemplate" in AgentDesignExperience (System.Agents.Designer.CustomAgent). 3 public procedures. Introduced in BC29, still in BC30.

AgentDesignExperience · System.Agents.Designer.CustomAgent · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetTaskTemplateCode(): Code[20]`: Gets the code that identifies the task template associated with this agent.
- `GetTaskTemplateDefinition(var TaskTemplateOutStream: OutStream)`: Writes the task template definition JSON to the provided stream. The JSON defines sample tasks that demonstrate the agent's capabilities.
- `GetTaskTemplatePlaceholdersMap(): Dictionary of [Text, Text]`: Gets a map of placeholder tokens and their replacement values for the task template. Use placeholders to support localization of template names and descriptions.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "ICustomAgentSampleTaskTemplate")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "ICustomAgentSampleTaskTemplate"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
