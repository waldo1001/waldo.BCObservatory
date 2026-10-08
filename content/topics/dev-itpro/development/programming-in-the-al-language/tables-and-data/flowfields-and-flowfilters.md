---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/flowfields-and-flowfilters
type: topic
title: FlowFields and FlowFilters
summary: FlowFields and FlowFilters in AL are virtual fields that calculate and display values dynamically without storing data. The section answers questions about how to create them, which FlowField types exist, how CalcFormula works, and how FlowFilters limit calculations at runtime.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:22.410Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e91dde415ac14a2df3b6274345d3906803ebd54adc7762309d7c99bc2f8fc077
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-flowfields-and-flowfilters
    title: Creating FlowFields and FlowFilters
    date: "2024-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfields
    title: FlowFields overview
    date: "2026-07-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfilter-overview
    title: FlowFilters overview
    date: "2026-07-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-flowfields-and-flowfilters
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfields
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfilter-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
  localizations: []
  videos: []
  posts:
    - post/duiliotacconi-com/1894
    - post/thinkaboutit-be/7846
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
  - FlowFields and FlowFilters
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms: []
member_hash: fe61db885bb95f25bb8854d322aa17292fec5a821b950638783a42e1191c684c
narrative: generated
---

# FlowFields and FlowFilters

> FlowFields and FlowFilters in AL are virtual fields that calculate and display values dynamically without storing data. The section answers questions about how to create them, which FlowField types exist, how CalcFormula works, and how FlowFilters limit calculations at runtime.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > FlowFields and FlowFilters · tier official · system development · narrative reviewed (checked by Opus)

## Overview

FlowFields are table fields whose values come from a CalcFormula property instead of stored data. Results are calculated on demand, so they show up immediately without physical storage in the database. FlowFilters are companion fields that let users set ranges or filters at runtime, which narrow what a FlowField calculates, for example summing customer entries for one month.

The section has three pages. "Creating FlowFields and FlowFilters" covers the practical setup with the FieldClass and CalcFormula properties. "FlowFields overview" describes the available calculation types and performance topics such as SIFT optimization and calculating only visible FlowFields. "FlowFilters overview" explains how user-level filter values limit those calculations.

Start with the creation page if you need to define a field, then read the two overviews to pick the right FlowField type and to understand how filters interact with it.

## Key points

- FlowFields and FlowFilters are virtual fields: they calculate and display results dynamically and do not store data physically.
- A FlowField gets its value from the CalcFormula property, and the FieldClass property marks the field as a FlowField or FlowFilter.
- Seven FlowField types are available: Sum, Average, Exist, Count, Min, Max, and Lookup.
- FlowFields show results immediately and help performance; the FlowFields overview covers SIFT optimization and calculating only visible FlowFields.
- FlowFilters let users set ranges and filters at runtime to limit FlowField calculations, such as summing customer entries for a specific month.
- FlowFilter values are not stored in the database.

## Learn pages

- [Creating FlowFields and FlowFilters](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-flowfields-and-flowfilters): Examples of FlowFields and FlowFilters that are used to display the result of the calculation described in the CalcFormula property.
- [FlowFields overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfields): Learn how FlowFields in Business Central enhance performance by dynamically calculating data at runtime. Discover types, examples, and optimization tips.
- [FlowFilters overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfilter-overview): Learn about how FlowFilters in Business Central sum and filter data.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [FlowFields with same filters and table in a single OUTER APPLY](../../../../../posts/duiliotacconi-com/1894.md) (community post): "FlowFields that use the same table and the same filters into one OUTER APPLY"
- [Quick Tip: CalcFields vs SetAutoCalcFields in AL](../../../../../posts/thinkaboutit-be/7846.md) (community post): "FlowFields in Business Central are not stored in the database and must be calculated explicitly"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
