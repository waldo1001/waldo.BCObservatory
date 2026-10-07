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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: df6861a092b1ce7c2cb100944a819ac52ff93e011180b67b953efe584a7e5839
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al
    title: src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al (releases/29.x)
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

AgentDesignExperience · System.Agents.Designer.CustomAgent · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSampleTaskTemplate.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetTaskTemplateCode(): Code[20]`: Gets the code that identifies the task template associated with this agent.
- `GetTaskTemplateDefinition(var TaskTemplateOutStream: OutStream)`: Writes the task template definition JSON to the provided stream. The JSON defines sample tasks that demonstrate the agent's capabilities.
- `GetTaskTemplatePlaceholdersMap(): Dictionary of [Text, Text]`: Gets a map of placeholder tokens and their replacement values for the task template. Use placeholders to support localization of template names and descriptions.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
