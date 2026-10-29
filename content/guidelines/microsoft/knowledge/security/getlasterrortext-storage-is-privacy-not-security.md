---
id: guideline/microsoft/knowledge/security/getlasterrortext-storage-is-privacy-not-security
type: guideline
title: Storing GetLastErrorText() in table fields is a privacy finding, not a security finding
summary: It is tempting to flag any code that calls GetLastErrorText() and writes the result into a table field (or displays it to end users) as a security issue, on the assumption that the error text might leak credentials or system internals.
tier: official
language: en
tags:
  - getlasterrortext
  - error-text
  - classification
  - privacy
  - review-scope
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.138Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9a07747ee43c10986506920e50621f908cfe6371
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/getlasterrortext-storage-is-privacy-not-security.md
    title: "microsoft/BCQuality: Storing GetLastErrorText() in table fields is a privacy finding, not a security finding"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
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
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/security/getlasterrortext-storage-is-privacy-not-security.md
layer: microsoft
kind: rule
domain: security
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 1
identifiers: []
---

# Storing GetLastErrorText() in table fields is a privacy finding, not a security finding

> It is tempting to flag any code that calls GetLastErrorText() and writes the result into a table field (or displays it to end users) as a security issue, on the assumption that the error text might leak credentials or system internals.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/getlasterrortext-storage-is-privacy-not-security.md) · microsoft layer · security · BC all · tier official · derived

## Description

It is tempting to flag any code that calls `GetLastErrorText()` and writes the result into a table field (or displays it to end users) as a security issue, on the assumption that the error text might leak credentials or system internals. In Business Central, that pattern is treated as a **privacy** concern instead: AL `Error` text frequently contains customer content (record keys, field values, document numbers) rather than infrastructure details, and the appropriate review owner is the privacy/DataClassification reviewer. A security reviewer should not raise a finding for `GetLastErrorText()` storage on the grounds that it might expose secrets; that risk is covered elsewhere by the rules that prevent secrets from appearing in error messages in the first place (see `secrettext-for-credentials.md`).

## Best Practice

When auditing AL changes for security, ignore patterns where `GetLastErrorText()` is captured into a table or shown to users — leave those to the privacy review. Security findings on error text should be limited to the construction of the `Error()` call itself: secrets, paths, or technical internals being interpolated into the error before it is raised. See sample: [`getlasterrortext-storage-is-privacy-not-security.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/getlasterrortext-storage-is-privacy-not-security.bad.al) for the pattern that is *not* a security finding.

## Anti Pattern

Filing a security finding such as "GetLastErrorText() stored in field — potential information disclosure" against AL code that captures an error for later inspection. The finding is in the wrong domain and crowds out the actual security signal. The mirror anti-pattern is silencing genuine `Error('... %1 ...', SecretValue)` constructions on the grounds that "error text is privacy" — those *are* security findings because they create the leak, regardless of where the text ends up afterwards.

## Examples

- [Bad: getlasterrortext-storage-is-privacy-not-security.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/getlasterrortext-storage-is-privacy-not-security.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
