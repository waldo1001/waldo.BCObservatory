---
id: object/interface/irs-1099-iris-transmission-us
type: object
title: Interface "IRS 1099 IRIS Transmission" (US)
summary: Interface "IRS 1099 IRIS Transmission" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, gone after BC29.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 148dee2daf4015a20d7ed4ce9c38d70294ade511948d02b1c12751de7d4fdd09
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISTransmission.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISTransmission.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

> Interface "IRS 1099 IRIS Transmission" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, gone after BC29.

US country layer · Microsoft.Finance.VAT.Reporting · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISTransmission.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `CreateTransmission(Transmission: Record "Transmission IRIS"; PeriodNo: Text[4])`
- `CheckOriginalTransmission(var Transmission: Record "Transmission IRIS")`: Checks if the original transmission is ready to be submitted to the IRS.
- `CheckReplacementTransmission(var Transmission: Record "Transmission IRIS")`: Checks if the replacement transmission is ready to be submitted to the IRS.
- `CheckCorrectionTransmission(var Transmission: Record "Transmission IRIS")`: Checks if the correction transmission is ready to be submitted to the IRS.
- `CheckDataToReport(var Transmission: Record "Transmission IRIS")`: Checks if the data that is submitted to the IRS is correct and complete according to IRIS documentation.

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
