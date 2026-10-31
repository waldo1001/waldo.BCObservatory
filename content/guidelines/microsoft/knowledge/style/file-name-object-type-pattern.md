---
id: guideline/microsoft/knowledge/style/file-name-object-type-pattern
type: guideline
title: Name AL source files `<ObjectName>.<ObjectType>.al`
summary: Each AL source file holds a single object, and the file name is expected to be of the form <ObjectName>.<ObjectType>.al — CustomerCard.Page.al, PostSalesInvoice.Codeunit.al, NoSeriesTests.Codeunit.al, SalesHeader.TableExt.al.
tier: official
language: en
tags:
  - file-name
  - object-type
  - suffix
  - naming-convention
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:15:35.028Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: dd8e0f1a8f07630f8dd7768547178b04eec7ba5e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/file-name-object-type-pattern.md
    title: "microsoft/BCQuality: Name AL source files `<ObjectName>.<ObjectType>.al`"
    date: "2026-05-21"
    commit: a56b272c6b950c2a423bbeda190585cd53beca2a
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
repo_path: microsoft/knowledge/style/file-name-object-type-pattern.md
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
  - TableExt
  - XmlPort
  - EnumExt
  - PermissionSet
  - PageExt
  - ReportExt
---

# Name AL source files `<ObjectName>.<ObjectType>.al`

> Each AL source file holds a single object, and the file name is expected to be of the form <ObjectName>.<ObjectType>.al — CustomerCard.Page.al, PostSalesInvoice.Codeunit.al, NoSeriesTests.Codeunit.al, SalesHeader.TableExt.al.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/file-name-object-type-pattern.md) · microsoft layer · style · BC all · tier official · derived

## Description

Each AL source file holds a single object, and the file name is expected to be of the form `<ObjectName>.<ObjectType>.al` — `CustomerCard.Page.al`, `PostSalesInvoice.Codeunit.al`, `NoSeriesTests.Codeunit.al`, `SalesHeader.TableExt.al`. The pattern makes object types greppable from a file listing and lets tooling — symbol search, project explorers, code generators — locate objects without parsing the AL source. Snake-case, lowercase-only, or type-less file names (`customer_page.al`, `tests_noSeries.al`, `PostSalesInvoiceLogic.al`) all break that contract.

## Best Practice

Use PascalCase for the object portion, no spaces, no underscores; the type segment is one of the AL object-type names — `Page`, `Codeunit`, `Table`, `TableExt`, `Report`, `Query`, `XmlPort`, `Enum`, `EnumExt`, `Interface`, `PermissionSet`, `PageExt`, `ReportExt`. The object portion should echo the object's name as it appears in AL.

See sample (file-naming pattern is structural; no AL sample shipped here).

## Anti Pattern

`customer_page.al`, `PostSalesInvoiceLogic.al`, `tests_noSeries.al`. The first uses snake_case and lower-case; the second omits the type segment entirely; the third inverts the order and uses mixed casing. All three break grep, symbol search, and the implicit map between file system and AL object table.

---

From microsoft/BCQuality at a56b272, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
