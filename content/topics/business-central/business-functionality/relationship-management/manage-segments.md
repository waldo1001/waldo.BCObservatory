---
id: topic/business-central/business-functionality/relationship-management/manage-segments
type: topic
title: Manage segments
summary: "Segments in Business Central relationship management: creating segments, adding contacts, refining or reducing the contact list with filters, and logging interactions with segment members. It answers questions about grouping contacts for marketing campaigns and bulk communications."
tier: official
language: en
system: crm
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:39.128Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cc8b1be5925c1068acbbf973dc33be6c0052b2752f9590dfb8a87bfa743704d3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-add-contact-segment
    title: Add contacts to segments
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-segment
    title: Create Segments
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-interaction-segments
    title: Keep track of segments and related interactions
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-segments
    title: Manage segments and select contacts
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/marketing-add-contact-segment
    - https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-segment
    - https://learn.microsoft.com/dynamics365/business-central/marketing-interaction-segments
    - https://learn.microsoft.com/dynamics365/business-central/marketing-segments
  objects:
    - object/page/5091
    - object/page/5093
  features: []
  topics:
    - topic/business-central/business-functionality/relationship-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10185
learn_toc_path:
  - Business functionality
  - Relationship management
  - Manage segments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/relationship-management
children: []
coverage:
  learn: 4
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5091
  - 5093
member_hash: 6d0588376d93557f26eba2e0b79f0c3b88e010df9c694bcc4f88d240b6cfa2df
narrative: generated
---

# Manage segments

> Segments in Business Central relationship management: creating segments, adding contacts, refining or reducing the contact list with filters, and logging interactions with segment members. It answers questions about grouping contacts for marketing campaigns and bulk communications.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Manage segments · tier official · system crm · narrative reviewed (checked by Opus)

## Overview

Segments group contacts by criteria such as industry or business relationship, so you can target campaigns and send bulk communications such as direct mail. The section has four pages and no subtopics.

Start with "Create Segments" for how a segment is made and numbered with a number series. Then read "Add contacts to segments" for the Add Contacts batch job and the Refine Contacts and Reduce Contacts actions, which use filter criteria to adjust who is in the segment. "Manage segments and select contacts" covers choosing target contacts for campaigns. "Keep track of segments and related interactions" covers logging interactions with segment members, merging documents, and follow-up.

## Key points

- Segments group contacts for targeted marketing campaigns and bulk interactions such as direct mail.
- Segment numbering uses a number series.
- The Add Contacts action runs a batch job that adds contacts to a segment.
- Refine Contacts and Reduce Contacts use filter criteria to narrow or shrink the contact list.
- The Go Back action is available when working with segment contacts.
- Contacts can be grouped by criteria such as industry or business relationship.
- Interactions with segment members can be logged, including marketing and sales communications.
- Document merging and segment follow-up support tracking of communications.

## Learn pages

- [Add contacts to segments](https://learn.microsoft.com/dynamics365/business-central/marketing-add-contact-segment): Add contacts to a segment after creating it to target specific customers or clients as part of a marketing campaign.
- [Create Segments](https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-segment): Describes how to create a segment for a group of contacts, for example, to target several contacts with a direct mail.
- [Keep track of segments and related interactions](https://learn.microsoft.com/dynamics365/business-central/marketing-interaction-segments): Learn about creating segments to define groups of contacts and specifying interactions for segments.
- [Manage segments and select contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-segments): Learn how to create and manage segments by selecting groups of contacts based on specific criteria, enabling you to effectively target these segments in future campaigns.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10185 Fix Reduce Contacts report silently ignores contacts whose company no…](../../../../changes/bcapps/10185.md) (code change): "The Remove Contacts report now correctly handles contacts whose company reference doesn't match"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5091 "Segment"](../../../../objects/page/5091.md) · on [Table 5076 "Segment Header"](../../../../objects/table/5076.md)
- [Page 5093 "Segment List"](../../../../objects/page/5093.md) · captioned "Segments" · on [Table 5076 "Segment Header"](../../../../objects/table/5076.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
