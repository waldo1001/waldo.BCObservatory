---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/importing-and-exporting-data
type: topic
title: Importing and exporting data
summary: Importing and exporting data in AL covers XMLport objects (schema, namespaces, request pages, properties, triggers) and exporting data to Excel with the Excel Buffer table. It answers questions about moving data between Business Central and external sources in XML or Excel format.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:22.537Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: dad5b9a3ace0edf213098c2e1c85a9fdd7020f1e56533e158a024bf5cbef4259
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-schema
    title: Defining an XMLport Schema in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-excel-buffer
    title: Exporting data to Excel using ExcelBuffer
    date: "2025-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-namespaces-with-xmlports
    title: Use Namespaces with XMLports in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-request-pages
    title: Using request pages with XMLports
    date: "2023-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-object
    title: XMLport object
    date: "2024-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-overview
    title: XMLport Overview for Business Central
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-schema
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-excel-buffer
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-namespaces-with-xmlports
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-request-pages
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/2204
    - post/aardvarklabs-blog/2333
    - post/aardvarklabs-blog/2603
    - post/aardvarklabs-blog/2838
    - post/aardvarklabs-blog/2866
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4218333995173748236--f38f8fc25c
  guidelines: []
  changes:
    - change/bcapps/11968
    - change/bcapps/12051
    - change/bcapps/12309
    - change/bcapps/9073
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
  - Importing and exporting data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 6
  guideline: 0
bc_forms: []
member_hash: 0701107680ab6374a75be6625747535fbf73f4ee24b8643401abc0d15b654ac8
narrative: generated
---

# Importing and exporting data

> Importing and exporting data in AL covers XMLport objects (schema, namespaces, request pages, properties, triggers) and exporting data to Excel with the Excel Buffer table. It answers questions about moving data between Business Central and external sources in XML or Excel format.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Importing and exporting data · tier official · system development · narrative reviewed by Opus

## Overview

This section covers two ways to move data in and out of Business Central from AL code. XMLports import and export XML data between external sources and Business Central. Excel Buffer is a temporary table with methods for building Excel workbooks.

For XMLports, start with the "XMLport object" and "XMLport Overview for Business Central" pages. They explain what an XMLport is and describe its schema, request page, triggers, methods and properties such as Format and Direction. Then use "Defining an XMLport Schema in AL" to map XML elements to tables and fields. Use "Use Namespaces with XMLports in AL" when the external system needs XML namespaces. Use "Using request pages with XMLports" to let users set options and filters before a run.

For Excel, "Exporting data to Excel using ExcelBuffer" shows how to create a workbook, write rows, columns and cells, and either download it or save it to a stream.

## Key points

- XMLports export and import XML data between external sources and Business Central, and can include a request page for filtering, sorting, and choosing export or import.
- An XMLport schema is built from textelement, textattribute, tableelement, fieldelement and fieldattribute nodes. The SourceTable property ties table elements to tables.
- XMLport namespaces are set with the Namespaces, NamespacePrefix, DefaultNamespace and UseDefaultNamespace properties. They avoid element name conflicts with external systems.
- XMLport request pages are configured with properties such as RequestFilterHeading, RequestFilterFields, AboutTitle, AboutText, ContextSensitiveHelpPage and SaveValues. The pages mention 2019 release wave 2 and 2023 release wave 1.
- The XMLport overview covers the Format and Direction properties, triggers and methods.
- Excel Buffer is a temporary table. You build workbooks with EnterCell, NewRow, AddColumn, CreateNewBook, WriteSheet and CloseBook.
- Excel output can be downloaded with OpenExcel or exported to a stream with SaveToStream.

## Learn pages

- [Defining an XMLport Schema in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-schema): An XMLport schema determines which data is exported from or imported to Dynamics 365 Business Central database tables and the format and structure of the files used.
- [Exporting data to Excel using ExcelBuffer](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-excel-buffer): Learn about the ExcelBuffer functionality and how to use it to copy data from AL to Excel.
- [Use Namespaces with XMLports in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-namespaces-with-xmlports): Learn how to declare namespaces on an XMLport in Business Central and apply namespace prefixes to text, table, and field elements in the XML schema.
- [Using request pages with XMLports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-request-pages): Introducing how to work with request pages for Business Central XMLports.
- [XMLport object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-object): XMLport objects are used to export and import data between an external source and Business Central.
- [XMLport Overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-overview): Get an overview of the XMLport object in AL, which is composed of an XMLport schema, a request page, and properties, triggers, and code that you can extend.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11968 Bug 648782: omit the buyer PartyTaxScheme when the company has no VAT registration](../../../../../changes/bcapps/11968.md) (code change): "PartyTaxScheme block is skipped entirely when VAT Registration No. is empty"
- [#12051 [Peppol] Fix Remittance Advice XML line count, Note order and invoice reference](../../../../../changes/bcapps/12051.md) (code change): "Peppol remittance advice XML export now correctly reports"
- [#12309 Fix infinite recursion in Config. Package Field XML name generation](../../../../../changes/bcapps/12309.md) (code change): "Prevents stack overflow when adding tables to Configuration Packages"
- [#9073 Data Exchange Definition export performance improvement](../../../../../changes/bcapps/9073.md) (code change): "Data Exchange Definition exports now use in-memory mapping with bulk saves"
- [Best Practices for Handling Delimited Data Imports into Business Central](../../../../../posts/aardvarklabs-blog/2204.md) (community post): "import comma-separated values (CSV) customer data into Business Central by parsing delimited files"
- [Essential Guides to Data Imports in Business Central](../../../../../posts/aardvarklabs-blog/2333.md) (community post): "Guide to data import and export operations in Business Central using AL code"
- [Guide to Handling Header and Detail Imports into Business Central with AL](../../../../../posts/aardvarklabs-blog/2603.md) (community post): "Data is parsed into separate staging tables before creating actual sales orders"
- [Importing Multi-Tab Excel Files into Business Central](../../../../../posts/aardvarklabs-blog/2838.md) (community post): "Process headers first, then lines, using the stored keys to establish parent-child relationships"
- [Importing XML into Business Central with AL](../../../../../posts/aardvarklabs-blog/2866.md) (community post): "demonstrates how to parse cXML files in Business Central using AL code without specialized XML codeunits"
- [How to Export CSV Files from Business Central Using CSV Buffer (Developer Guide)](../../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4218333995173748236--f38f8fc25c.md) (community post): "export data from Business Central to CSV format using the CSV Buffer"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
