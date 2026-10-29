---
id: guideline/microsoft/knowledge/security/inherent-permissions-minimal-grant
type: guideline
title: Grant the minimum InherentPermissions a procedure needs
summary: "[InherentPermissions(PermissionObjectType::..., ...)] and [InherentEntitlements(Entitlement::...)] are method-level attributes that let a procedure perform an operation on the listed object even when the caller's permission set does not allow it."
tier: official
language: en
tags:
  - inherentpermissions
  - inherententitlements
  - attribute
  - least-privilege
  - procedure
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.159Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1a091940bfc4ac6db5c73c4947919956dd875133
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/inherent-permissions-minimal-grant.md
    title: "microsoft/BCQuality: Grant the minimum InherentPermissions a procedure needs"
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
repo_path: microsoft/knowledge/security/inherent-permissions-minimal-grant.md
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
examples: 2
identifiers:
  - GetCustomerName
---

# Grant the minimum InherentPermissions a procedure needs

> [InherentPermissions(PermissionObjectType::..., ...)] and [InherentEntitlements(Entitlement::...)] are method-level attributes that let a procedure perform an operation on the listed object even when the caller's permission set does not allow it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/inherent-permissions-minimal-grant.md) · microsoft layer · security · BC all · tier official · derived

## Description

`[InherentPermissions(PermissionObjectType::..., ...)]` and `[InherentEntitlements(Entitlement::...)]` are method-level attributes that let a procedure perform an operation on the listed object even when the caller's permission set does not allow it. They effectively elevate the caller for the duration of the procedure. The grant therefore needs to be as narrow as the procedure's actual work — both in object scope (the specific table) and in operation (`'r'` versus `'RIMD'`). Overly broad inherent permissions silently expand the attack surface of every codeunit that calls the procedure.

## Best Practice

Match the inherent permission to the procedure's body: a procedure that only reads `Customer.Name` declares `[InherentPermissions(PermissionObjectType::TableData, Database::Customer, 'r')]`, not `'RIMD'`. Pick the inherent entitlement that matches the lowest tier the procedure should run under — do not require Premium for a procedure that performs an Essential-tier check. See sample: [`inherent-permissions-minimal-grant.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/inherent-permissions-minimal-grant.good.al).

## Anti Pattern

Declaring `[InherentPermissions(..., 'RIMD')]` on a read-only procedure (`GetCustomerName`), or `[InherentEntitlements(Entitlement::"Dynamics 365 Business Central Premium")]` on a procedure that performs a simple existence check. Reviewers should compare the attribute's permission letters against what the procedure body actually does and flag any grant broader than the operations performed. See sample: [`inherent-permissions-minimal-grant.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/inherent-permissions-minimal-grant.bad.al).

## Examples

- [Good: inherent-permissions-minimal-grant.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/inherent-permissions-minimal-grant.good.al)
- [Bad: inherent-permissions-minimal-grant.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/inherent-permissions-minimal-grant.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
