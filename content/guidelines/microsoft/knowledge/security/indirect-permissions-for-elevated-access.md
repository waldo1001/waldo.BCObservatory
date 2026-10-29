---
id: guideline/microsoft/knowledge/security/indirect-permissions-for-elevated-access
type: guideline
title: Use indirect permissions when access must be code-mediated
summary: "In a permissionset, uppercase letters (R, I, M, D) grant direct permissions: the assignee can read, insert, modify, or delete the table data through any UI or API surface."
tier: official
language: en
tags:
  - permissionset
  - indirect-permissions
  - lowercase
  - code-mediated
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.222Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8e3d620c89b50c496a974b4e66a49bec2ff2759f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/indirect-permissions-for-elevated-access.md
    title: "microsoft/BCQuality: Use indirect permissions when access must be code-mediated"
    date: "2026-09-29"
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
    - change/bcquality/199
    - change/bcquality/174
repo_path: microsoft/knowledge/security/indirect-permissions-for-elevated-access.md
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
identifiers: []
---

# Use indirect permissions when access must be code-mediated

> In a permissionset, uppercase letters (R, I, M, D) grant direct permissions: the assignee can read, insert, modify, or delete the table data through any UI or API surface.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/indirect-permissions-for-elevated-access.md) · microsoft layer · security · BC all · tier official · derived

## Description

In a `permissionset`, uppercase letters (`R`, `I`, `M`, `D`) grant **direct** permissions: the assignee can read, insert, modify, or delete the table data through any UI or API surface. Lowercase letters (`r`, `i`, `m`, `d`) grant **indirect** permissions: the operation is allowed only when it is invoked from AL code that itself holds the corresponding direct permission. Indirect permissions let a role consume privileged tables through controlled procedures (a report, a posting routine) without giving users a way to read or change those tables outside the intended code path.

## Best Practice

Use indirect permissions (the lowercase letters `r`, `i`, `m`, `d`) when a role needs access to a sensitive table only through a specific codeunit or report — for example, a "Report Runner" role that reads `G/L Entry` only via published reports, granted `tabledata "G/L Entry" = r`. Each letter is one permission: `ri` grants indirect read **and** indirect insert, so grant only the letters the role needs. Pair the indirect grant with the codeunit or report that mediates access; that object's own permissions (or InherentPermissions) supply the direct rights. Document why indirect permissions are required in the permission set or in the consuming object's comments. See sample: [`indirect-permissions-for-elevated-access.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/indirect-permissions-for-elevated-access.good.al).

## Anti Pattern

Granting `RIMD` on a sensitive table when the role only needs to view it through a report — for example `tabledata "G/L Entry" = RIMD` on a "Report Runner" role. Users assigned that role can now query and modify ledger entries directly through any client that respects the permission, bypassing the report entirely. Reviewers should look for uppercase grants on system-of-record tables (G/L Entry, ledger entries, posted documents) where the consuming code path is clearly read-through-report or read-through-API. See sample: [`indirect-permissions-for-elevated-access.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/indirect-permissions-for-elevated-access.bad.al).

## References

[Permissions property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-permissions-property) and [Permissions on database objects](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects) define one letter per permission: `R`/`r` read, `I`/`i` insert, `M`/`m` modify, `D`/`d` delete, uppercase for direct and lowercase for indirect.

## Examples

- [Good: indirect-permissions-for-elevated-access.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/indirect-permissions-for-elevated-access.good.al)
- [Bad: indirect-permissions-for-elevated-access.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/indirect-permissions-for-elevated-access.bad.al)

## Changed by

- [#199 Fix indirect permission letters: `ri` is indirect read plus insert](../../../../changes/bcquality/199.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
