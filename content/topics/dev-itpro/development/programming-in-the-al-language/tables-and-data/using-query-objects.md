---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/using-query-objects
type: topic
title: Using Query objects
summary: "Query objects in AL: how to define dataitems and columns, link and join tables, filter, aggregate, extract date parts, read results in code, and analyze query data interactively. It answers questions about building and using queries instead of record variables."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:53.992Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3f9b7d05621183d50cd4f37d9524681a9dd3c9cae23dbf9a3a2230e457814b36
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-accessing-columns
    title: Accessing Columns of a Query Dataset
    date: "2024-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-totals-grouping
    title: Aggregating data in query objects
    date: "2024-05-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/analysis-mode
    title: Analyze list page and query data using data analysis
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-links-joins
    title: Data Item Links
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-filters
    title: Filtering in Query objects
    date: "2024-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object
    title: Query object
    date: "2024-11-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-overview
    title: Query Overview
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-retrieve-date-data
    title: Retrieving Date Data in Queries
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-using-instead-record-variables
    title: Using Queries Instead of Record Variables
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-accessing-columns
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-totals-grouping
    - https://learn.microsoft.com/dynamics365/business-central/analysis-mode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-links-joins
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-filters
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-retrieve-date-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-using-instead-record-variables
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/1822
    - post/aardvarklabs-blog/2017
    - post/demiliani-com/15968
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
  - Using Query objects
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 3
  guideline: 0
bc_forms:
  - 16
  - 22
  - 25
  - 26
  - 27
  - 31
  - 143
  - 144
  - 456
  - 457
  - 458
  - 459
  - 460
  - 461
  - 9300
  - 9301
  - 9303
  - 9304
  - 9305
  - 9306
  - 9307
  - 9309
  - 9310
  - 9311
member_hash: bd530fa515b2e844edca443bf15082908e36d7021b42546a0dfcd7a308da2c55
narrative: generated
---

# Using Query objects

> Query objects in AL: how to define dataitems and columns, link and join tables, filter, aggregate, extract date parts, read results in code, and analyze query data interactively. It answers questions about building and using queries instead of record variables.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Using Query objects · tier official · system reporting · narrative reviewed by Opus

## Overview

Query objects retrieve and combine records from one or more tables into a single dataset. They can calculate totals, group rows, and be exposed as OData web services. Queries can be normal or API queries, and they can be opened in data analysis mode.

The pages follow the path of building a query. The overview and Query object pages explain what a query is and its discoverability properties. Data Item Links covers joining tables with DataItemLink and SqlJoinType. Filtering, aggregation, and date methods shape the dataset. Accessing Columns and Using Queries Instead of Record Variables show how to open, read, and use the results in AL code. The data analysis page covers interactive analysis of list page and query data without running reports.

Start with Query Overview, then read Data Item Links and Filtering in Query objects. Move to aggregation, date data, and code access as needed.

## Key points

- Queries combine records from one or more tables into one dataset, can calculate totals and group rows, and can be exposed as OData web services.
- Data Item Links use DataItemLink and SqlJoinType, with InnerJoin, LeftOuterJoin, RightOuterJoin and FullOuterJoin, plus cross joins.
- Filtering options: DataItemTableFilter property, ColumnFilter property, filter rows, and SetFilter/SetRange methods.
- Aggregation uses the column Method property (Sum, Average, Min, Max, Count) across grouped records.
- Day, Month and Year methods in query columns extract date parts from Date and DateTime fields, with UTC conversion relevant for DateTime.
- In code, use OPEN, Read and TopNumberOfRows to read the dataset, then get column values from the current row.
- Queries give better performance and simpler code than record variables when joining multiple tables in codeunits.
- Data analysis mode offers columns, filters, row groups, pivot mode, date hierarchies, fields from related tables, and bookmarks to the Role Center.

## Learn pages

- [Accessing Columns of a Query Dataset](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-accessing-columns)
- [Aggregating data in query objects](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-totals-grouping): Do calculations on the fields of a column and return the calculated value in the dataset. Know the Dynamics NAV Total methods for running queries.
- [Analyze list page and query data using data analysis](https://learn.microsoft.com/dynamics365/business-central/analysis-mode): Learn how to use the analysis mode in Business Central to analyze data.
- [Data Item Links](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-links-joins): Using queries, retrieve records from one or more tables and combine the records into rows in a single dataset.
- [Filtering in Query objects](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-filters): Specify filters in a query to restrict the data in the resulting dataset. A filter applies conditions on fields in a table associated with the query.
- [Query object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object): Description of the AL query object.
- [Query Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-overview): Description of the query object.
- [Retrieving Date Data in Queries](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-retrieve-date-data): Learn how to retrieve year, month, or day from date fields in query results. Discover setup steps, examples, and best practices.
- [Using Queries Instead of Record Variables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-using-instead-record-variables)

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central Queries: Simplifying Complex Data](../../../../../posts/aardvarklabs-blog/1822.md) (community post): "Query objects link multiple tables together with join conditions"
- [Step-by-Step Guide to Business Central API Queries](../../../../../posts/aardvarklabs-blog/2017.md) (community post): "Query objects configured with API settings automatically expose data to external systems"
- [Dynamics 365 Business Central: AL Query objects and the new ReadState property.](../../../../../posts/demiliani-com/15968.md) (community post): "AL query objects now support the ReadState property in Dynamics 365 Business Central 2026"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 16, 22, 25, 26, 27, 31, 143, 144, 456, 457, 458, 459, 460, 461, 9300, 9301, 9303, 9304, 9305, 9306, 9307, 9309, 9310, 9311.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
