---
id: object/interface/irs-1099-iris-configuration-us
type: object
title: Interface "IRS 1099 IRIS Configuration" (US)
summary: Interface "IRS 1099 IRIS Configuration" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 52b83ede1b3ca523840899b87f8d9be84487382c4faff5ef3ea99edca47182e8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISConfiguration.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISConfiguration.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
name: IRS 1099 IRIS Configuration
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

# Interface "IRS 1099 IRIS Configuration" (US)

> Interface "IRS 1099 IRIS Configuration" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, still in BC30.

US country layer · Microsoft.Finance.VAT.Reporting · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISConfiguration.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `GetTCC(): Text`
- `GetSoftwareId(): Text`: Gets the Software ID.
- `GetConsentAppURL(): Text`: Gets the Consent Application URL.
- `GetContactInfo(var ContactName: Text; var ContactEmail: Text; var ContactPhone: Text)`: Gets the contact information.
- `TestMode(): Boolean`: Determines if the system is running in test mode.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IRS 1099 IRIS Configuration")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A US country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
