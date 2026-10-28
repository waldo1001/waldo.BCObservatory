---
id: topic/business-central/business-functionality/local-functionality/netherlands/general
type: topic
title: General
summary: General Netherlands functionality in Business Central covers CMR notes for international road transport and Dutch post code handling. It answers questions about the three CMR note types and about subscribing to, importing and updating Dutch post code data.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:32.956Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e4908553ab88f89df29407a2d5505f61e2ab4228288e45ffe4f1a94b88dc88db
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/cmr-notes
    title: CMR Notes in the Dutch Version [NL]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/dutch-post-codes
    title: Dutch Post Codes in Business Central
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-import-post-code-updates
    title: Import Post Code Updates in the Dutch Version [NL]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-import-post-codes
    title: Import Post Codes in the Dutch Version [NL]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/cmr-notes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/dutch-post-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-import-post-code-updates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-import-post-codes
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/netherlands
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Netherlands
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/netherlands
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 61ad39ab3e38a4d54bf81855c917d615f2e3e7e5b0a62ab91360341d30007383
narrative: generated
---

# General

> General Netherlands functionality in Business Central covers CMR notes for international road transport and Dutch post code handling. It answers questions about the three CMR note types and about subscribing to, importing and updating Dutch post code data.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Netherlands](../netherlands.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects the general Dutch-specific features of Business Central. One feature is CMR notes, which are bills of lading for international road transport in countries following the 1956 UN Convention. The other is Dutch post code support, used for marketing and relationship management activities.

The post code pages fit together as a group. One page introduces the feature and the option to subscribe to post code data and updates. Two pages describe the import steps: one for importing post code files, and one for importing the monthly update files. Both use the Post Code Updates page.

Start with the Dutch Post Codes page for an overview. Then use the import pages for the actual procedure. Read the CMR page separately if you handle international shipments.

## Key points

- CMR notes are bills of lading for international road transport under the 1956 UN Convention.
- Three CMR types exist: CMR - Sales Shipment, CMR - Return Shipment and CMR - Transfer Shipment.
- The CMR page also mentions preprinted CMR forms.
- Dutch post code data and updates can be subscribed to and imported into Business Central.
- Post code files are imported on the Post Code Updates page, using the PTT text format with post code ranges.
- Monthly post code update files are validated against previous imports, including period checking and warnings for missing periods.
- Each post code update import is logged.

## Learn pages

- [CMR Notes in the Dutch Version [NL]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/cmr-notes): Process claims with complete CMR note information easily. Use the Dutch feature to follow the CMR Convention with standard CMR notes.
- [Dutch Post Codes in Business Central](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/dutch-post-codes): Subscribe to receive post codes and updates for your business. These updates are useful for marketing and relationship management activities.
- [Import Post Code Updates in the Dutch Version [NL]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-import-post-code-updates): Import monthly Dutch post code updates in Business Central, check the update period, and review the import log for changes to the post code ranges.
  - In the observatory: [Page 11408 "Post Code Updates (NL)"](../../../../../objects/page/11408-nl.md), [Table 11406 "Post Code Range (NL)"](../../../../../objects/table/11406-nl.md), [Table 11407 "Post Code Update Log Entry (NL)"](../../../../../objects/table/11407-nl.md)
- [Import Post Codes in the Dutch Version [NL]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-import-post-codes): Import a file with post codes for marketing and relationship management activities, which is saved in the Post Code Range table.
  - In the observatory: [Page 11408 "Post Code Updates (NL)"](../../../../../objects/page/11408-nl.md), [Table 11406 "Post Code Range (NL)"](../../../../../objects/table/11406-nl.md), [Table 11407 "Post Code Update Log Entry (NL)"](../../../../../objects/table/11407-nl.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
