---
id: object/interface/smtp-authentication
type: object
title: Interface "SMTP Authentication"
summary: Interface "SMTP Authentication" in Email - SMTP Connector (System.Email). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - email - smtp connector
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
  input_hash: 4ce65d1319d1b2a5970f966e313174ffa22ef763caf9afeb8052db90d42e7aed
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Email%20-%20SMTP%20Connector/app/src/Authentication/SMTPAuthentication.Interface.al
    title: src/Apps/W1/Email - SMTP Connector/app/src/Authentication/SMTPAuthentication.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
name: SMTP Authentication
namespace: System.Email
app: Email - SMTP Connector
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
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "SMTP Authentication"

> Interface "SMTP Authentication" in Email - SMTP Connector (System.Email). 2 public procedures. Introduced in BC29, still in BC30.

Email - SMTP Connector · System.Email · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Email%20-%20SMTP%20Connector/app/src/Authentication/SMTPAuthentication.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `Validate(var SMTPAccount: Record "SMTP Account")`: Validate SMTP account.
- `Authenticate(SmtpClient: DotNet SmtpClient; SMTPAccount: Record "SMTP Account")`: Authenticate the SMTP client with the SMTP account.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
