---
id: guideline/microsoft/knowledge/style/xmldoc-for-public-library-procedures
type: guideline
title: Add XML documentation to public procedures on library/API codeunits
summary: "XML documentation comments (/// <summary>…</summary>, /// <param>…</param>, /// <returns>…</returns>) are expected on procedures that form the public surface of a library — codeunits intended to be called from outside the current app: System App modules, AppSource library codeunits, Access =…"
tier: official
language: en
tags:
  - xmldoc
  - summary
  - param
  - returns
  - public-procedure
  - documentation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.023Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bffa5e8143a7486de15d35b6fbbc4bc88abf162e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/xmldoc-for-public-library-procedures.md
    title: "microsoft/BCQuality: Add XML documentation to public procedures on library/API codeunits"
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
repo_path: microsoft/knowledge/style/xmldoc-for-public-library-procedures.md
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
identifiers: []
---

# Add XML documentation to public procedures on library/API codeunits

> XML documentation comments (/// <summary>…</summary>, /// <param>…</param>, /// <returns>…</returns>) are expected on procedures that form the public surface of a library — codeunits intended to be called from outside the current app: System App modules, AppSource library codeunits, Access =…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/xmldoc-for-public-library-procedures.md) · microsoft layer · style · BC all · tier official · derived

## Description

XML documentation comments (`/// <summary>…</summary>`, `/// <param>…</param>`, `/// <returns>…</returns>`) are expected on procedures that form the public surface of a library — codeunits intended to be called from outside the current app: System App modules, AppSource library codeunits, `Access = Public` codeunits exposed for extension. The supported tags are `<summary>`, `<param>`, `<returns>`, `<example>`, `<remarks>`, and `<paramref>`. Active wording is preferred — `'Sets…'`, `'Gets…'`, `'Specifies…'` — and the docs should list parameter preconditions and any exceptions the procedure may raise.

XML docs are NOT required on internal procedures, event subscribers, trigger implementations, page-part procedures, test procedures, or the object declarations themselves (tables, pages, codeunits). The reviewer signal is a `procedure` (not `local procedure`, not `internal procedure`) declared inside a codeunit whose role is "library" — those need XML docs; everything else is optional.

## Best Practice

For every public procedure on a library codeunit, write a `<summary>` describing what the procedure does, one `<param>` per parameter naming its role and preconditions, and `<returns>` describing the return when applicable. Avoid placeholder text — `<summary>Validates discount</summary>` is no better than no doc at all.

## Anti Pattern

A public procedure on a library codeunit with no XML doc, or a `<summary>` that restates the procedure name in three words. The first leaves consumers guessing at intent; the second wastes the slot a meaningful description should occupy.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
