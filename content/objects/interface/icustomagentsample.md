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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 99e20618b3d96cfe17fa62ba4ef5c195e7a08dd8e840b58214a7960c06127515
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSample.Interface.al
    title: src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSample.Interface.al (releases/29.x)
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
---

# Interface "ICustomAgentSample"

> Interface "ICustomAgentSample" in AgentDesignExperience (System.Agents.Designer.CustomAgent). 3 public procedures. Introduced in BC29, still in BC30.

AgentDesignExperience · System.Agents.Designer.CustomAgent · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/AgentDesignExperience/app/CustomAgent/Samples/ICustomAgentSample.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetAgentCode(): Code[10]`: Gets the unique code that identifies this sample agent.
- `GetAgentDefinition(var AgentOutStream: OutStream)`: Writes the sample agent definition XML to the provided stream. The XML must conform to the agent import format and include agent metadata, profile, access controls, and instructions. The XML must contain exactly one agent definition. If the XML contains multiple agent definitions, an error will be t...
- `GetAgentLearnMoreUrl(): Text[2048]`: Gets the URL for documentation or learning resources about this agent.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
