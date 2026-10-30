---
id: object/interface/onboarding-signal
type: object
title: Interface "Onboarding Signal"
summary: Interface "Onboarding Signal" in Base Application (System.Feedback). 1 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-30T01:00:43.748Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d9bb3db8ca1e58b29bc76b431828598275e2f6fae5171c4c52daa724af12cda8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/7aa49e808916c060dbee97d9ff324a2cfda8d422/src/Layers/W1/BaseApp/Modules/System/OnboardingSignal/OnboardingSignal.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/OnboardingSignal/OnboardingSignal.Interface.al (releases/29.x)
    date: null
    commit: 7aa49e808916c060dbee97d9ff324a2cfda8d422
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-telemetry
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: Onboarding Signal
namespace: System.Feedback
app: Base Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
  - "26"
  - "27"
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
  procedures: 1
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
  implemented_by: 0
---

# Interface "Onboarding Signal"

> Interface "Onboarding Signal" in Base Application (System.Feedback). 1 public procedures. Present since at least BC23, still in BC30.

Base Application · System.Feedback · BC23-30 · [source at 7aa49e80](https://github.com/microsoft/BCApps/blob/7aa49e808916c060dbee97d9ff324a2cfda8d422/src/Layers/W1/BaseApp/Modules/System/OnboardingSignal/OnboardingSignal.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `IsOnboarded(): Boolean`: Should check whether the onboarding criteria has been met.

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

## Documented on Microsoft Learn

- [Measure onboarding progress using telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-telemetry) (names this object)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Onboarding Signal")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
