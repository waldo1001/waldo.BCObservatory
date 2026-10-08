---
id: object/interface/irs-1099-iris-transmission-us
type: object
title: Interface "IRS 1099 IRIS Transmission" (US)
summary: Interface "IRS 1099 IRIS Transmission" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3d0e9e3c306c8ac7727b8273872419b1b4fd4a9759bcd4c271c4d18c0a8a32fc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISTransmission.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISTransmission.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: IRS 1099 IRIS Transmission
namespace: Microsoft.Finance.VAT.Reporting
app: IRSForms
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
country: US
counts:
  fields: 0
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IRS 1099 IRIS Transmission" (US)

> Interface "IRS 1099 IRIS Transmission" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, still in BC30.

US country layer · Microsoft.Finance.VAT.Reporting · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISTransmission.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `CreateTransmission(Transmission: Record "Transmission IRIS"; PeriodNo: Text[4])`
- `CheckOriginalTransmission(var Transmission: Record "Transmission IRIS")`: Checks if the original transmission is ready to be submitted to the IRS.
- `CheckReplacementTransmission(var Transmission: Record "Transmission IRIS")`: Checks if the replacement transmission is ready to be submitted to the IRS.
- `CheckCorrectionTransmission(var Transmission: Record "Transmission IRIS")`: Checks if the correction transmission is ready to be submitted to the IRS.
- `CheckDataToReport(var Transmission: Record "Transmission IRIS")`: Checks if the data that is submitted to the IRS is correct and complete according to IRIS documentation.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IRS 1099 IRIS Transmission")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A US country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
