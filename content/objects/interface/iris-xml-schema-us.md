---
id: object/interface/iris-xml-schema-us
type: object
title: Interface "IRIS XML Schema" (US)
summary: Interface "IRIS XML Schema" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 3 public procedures. Introduced in BC29, gone after BC29.
tier: official
language: en
tags:
  - interface
  - us layer
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
  at: "2026-11-28T00:55:56.881Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1f69263f16024c5fee3196eeb13bebb830420fef2aee42de5ffac0fe051cb6e3
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/baedf68df311071024c0711fde8b1fbac33ec290/src/Apps/US/IRSForms/app/src/Interface/IRISXmlSchema.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRISXmlSchema.Interface.al (releases/29.x)
    date: null
    commit: baedf68df311071024c0711fde8b1fbac33ec290
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/us
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: IRIS XML Schema
namespace: Microsoft.Finance.VAT.Reporting
app: IRSForms
extends: null
first_version: "29"
last_version: "29"
present_in:
  - "29"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
country: US
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

# Interface "IRIS XML Schema" (US)

> Interface "IRIS XML Schema" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 3 public procedures. Introduced in BC29, gone after BC29.

US country layer · Microsoft.Finance.VAT.Reporting · BC29 · [source at baedf68d](https://github.com/microsoft/BCApps/blob/baedf68df311071024c0711fde8b1fbac33ec290/src/Apps/US/IRSForms/app/src/Interface/IRISXmlSchema.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `GetVersionText(): Text`
- `ValidateTransmission(Transmission: Record "Transmission IRIS")`
- `CreateTransmissionXmlContent(var Transmission: Record "Transmission IRIS"; TransmissionType: Enum "Transmission Type IRIS"; CorrectionToZeroMode: Boolean; var UniqueTransmissionId: Text[100]; var TempDocHeader: Record "IRS 1099 Form Doc. Header" temporary; var TempBlob: Codeunit "Temp Blob")`

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IRIS XML Schema")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A US country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
