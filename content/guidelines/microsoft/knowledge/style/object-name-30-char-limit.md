---
id: guideline/microsoft/knowledge/style/object-name-30-char-limit
type: guideline
title: Keep object names within the 30-character platform limit
summary: Business Central object names — for tables, pages, codeunits, reports, queries, XML ports, enums, and permission sets — are limited to 30 characters in total.
tier: official
language: en
tags:
  - object-name
  - length
  - prefix
  - affix
  - 30-characters
  - appsource
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-30T00:18:44.802Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f0e96eef5056845841bd31bb7dd1f16314d2eedb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/object-name-30-char-limit.md
    title: "microsoft/BCQuality: Keep object names within the 30-character platform limit"
    date: "2026-05-21"
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
  changes: []
  related:
    - to: object/enum/815
      title: enum 815 "Sales Invoice Posting"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/style/object-name-30-char-limit.md
layer: microsoft
kind: rule
domain: style
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - CustLE
  - SIPoster
  - SalesInv
---

# Keep object names within the 30-character platform limit

> Business Central object names — for tables, pages, codeunits, reports, queries, XML ports, enums, and permission sets — are limited to 30 characters in total.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/object-name-30-char-limit.md) · microsoft layer · style · BC all · tier official · derived

## Description

Business Central object names — for tables, pages, codeunits, reports, queries, XML ports, enums, and permission sets — are limited to 30 characters in total. AppSource and per-tenant extensions also have to carry a mandatory prefix or affix (typically 3–4 characters), which leaves roughly 26 characters for the descriptive part of the name. Names hitting the 30-character ceiling are routinely rejected at publish time, and over-aggressive abbreviation to fit (`CustLE`, `SIPoster`, `SalesInv`) makes the object name opaque to reviewers and to anyone reading dependency lists. The right move is to plan name length around the budget — descriptive base + prefix — not to discover the limit during AppSource validation.

## Best Practice

Choose a clear, descriptive name in the 20–26-character range and reserve the remaining characters for the mandatory app prefix. `"Customer Ledger Entry"`, `"Sales Invoice Posting"`, `"Sales Invoice"` are descriptive and well under the budget. When you genuinely need to abbreviate, prefer abbreviations that are already established in BC (`Cust.`, `Vend.`, `Gen. Jnl.`, `WHSE`) over ad-hoc shortenings.

## Anti Pattern

Names like `"CustLE"` or `"SIPoster"` that abbreviate beyond comprehensibility, or names like `"Customer Ledger Entry Posting Helper Codeunit"` that breach 30 characters and force a rename during publish.

## Names

- [enum 815 "Sales Invoice Posting"](../../../../objects/enum/815.md) (possibly related: a code span names it)

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
