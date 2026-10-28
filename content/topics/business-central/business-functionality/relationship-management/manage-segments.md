---
id: topic/business-central/business-functionality/relationship-management/manage-segments
type: topic
title: Manage segments
summary: "Marketing segments in Business Central Relationship management: creating segments, adding and filtering contacts, and logging interactions for a whole group. It answers questions about grouping contacts for targeted campaigns such as direct mail, and about tracking follow-up."
tier: official
language: en
system: crm
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:39.378Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3ce22b7fce2aba0b8d48983d288fb17ccccaecf98b168d783e6e30c243225af6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-add-contact-segment
    title: Add Contacts to Marketing Segments
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-segment
    title: Create Marketing Segments for Contacts
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-segments
    title: Manage Segments and Select Contacts
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-interaction-segments
    title: Track Segments and Their Contact Interactions
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/marketing-add-contact-segment
    - https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-segment
    - https://learn.microsoft.com/dynamics365/business-central/marketing-segments
    - https://learn.microsoft.com/dynamics365/business-central/marketing-interaction-segments
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

> Marketing segments in Business Central Relationship management: creating segments, adding and filtering contacts, and logging interactions for a whole group. It answers questions about grouping contacts for targeted campaigns such as direct mail, and about tracking follow-up.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Manage segments · tier official · system crm · narrative reviewed (checked by Opus)

## Overview

Segments group contacts that share criteria, such as industry or business relationship, so you can target them with campaigns and communications. The section has four pages and no subtopics.

Start with "Create Marketing Segments for Contacts" to set up a segment and its number. Then use "Add Contacts to Marketing Segments" to fill and adjust membership with the Add, Refine, and Reduce Contacts actions. "Manage Segments and Select Contacts" gives the overall view of selecting contacts by criteria. "Track Segments and Their Contact Interactions" covers the Segment page for logging interactions, personalizing them per contact, merging with Word documents, and creating follow-up segments.

## Key points

- A segment groups contacts for targeted interactions such as direct mail campaigns.
- Segments get a number, which comes from a number series.
- Add Contacts, Refine Contacts, and Reduce Contacts actions build and adjust segment membership using filters.
- The Go Back action and segment criteria tracking help when changing contact selections.
- Contacts can be managed manually or by selection criteria.
- Interactions can be logged for many contacts at once and personalized for individual contacts.
- Segments can be merged with Word documents for bulk communications.
- Follow-up segments can be created to track later actions.

## Learn pages

- [Add Contacts to Marketing Segments](https://learn.microsoft.com/dynamics365/business-central/marketing-add-contact-segment): Add contacts to marketing segments in Business Central, then refine or reduce the group to target the right audience for your campaigns.
- [Create Marketing Segments for Contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-segment): Create a marketing segment in Business Central to group contacts for a campaign, assign a segment number, and prepare to add your target audience.
  - In the observatory: [Page 5094 "Marketing Setup"](../../../../objects/page/5094.md)
- [Manage Segments and Select Contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-segments): Group contacts into marketing segments in Business Central, select contacts using criteria, and record interactions with your campaign audience.
- [Track Segments and Their Contact Interactions](https://learn.microsoft.com/dynamics365/business-central/marketing-interaction-segments): Create contact segments in Business Central, reuse selection criteria, personalize interactions, and log segments to keep a history of communication.
  - In the observatory: [Page 5091 "Segment"](../../../../objects/page/5091.md), [Page 5139 "Logged Segments"](../../../../objects/page/5139.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10185 Fix Reduce Contacts report silently ignores contacts whose company no…](../../../../changes/bcapps/10185.md) (code change): "The Remove Contacts report now correctly handles contacts whose company reference doesn't match"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5091 "Segment"](../../../../objects/page/5091.md) · on [Table 5076 "Segment Header"](../../../../objects/table/5076.md)
- [Page 5093 "Segment List"](../../../../objects/page/5093.md) · captioned "Segments" · on [Table 5076 "Segment Header"](../../../../objects/table/5076.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
