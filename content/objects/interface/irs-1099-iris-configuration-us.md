---
id: object/interface/irs-1099-iris-configuration-us
type: object
title: Interface "IRS 1099 IRIS Configuration" (US)
summary: Interface "IRS 1099 IRIS Configuration" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, gone after BC29.
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
  input_hash: 99acd1e8a4b14b6baf4b92cfe73c49e92bda8a581c518274510b76682c8fe9f1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISConfiguration.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISConfiguration.Interface.al (releases/29.x)
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
name: IRS 1099 IRIS Configuration
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

# Interface "IRS 1099 IRIS Configuration" (US)

> Interface "IRS 1099 IRIS Configuration" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 5 public procedures. Introduced in BC29, gone after BC29.

US country layer · Microsoft.Finance.VAT.Reporting · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISConfiguration.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `GetTCC(): Text`
- `GetSoftwareId(): Text`: Gets the Software ID.
- `GetConsentAppURL(): Text`: Gets the Consent Application URL.
- `GetContactInfo(var ContactName: Text; var ContactEmail: Text; var ContactPhone: Text)`: Gets the contact information.
- `TestMode(): Boolean`: Determines if the system is running in test mode.

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
