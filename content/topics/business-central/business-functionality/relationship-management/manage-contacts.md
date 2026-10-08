---
id: topic/business-central/business-functionality/relationship-management/manage-contacts
type: topic
title: Manage contacts
summary: "Managing contacts in Business Central: creating person and company contacts, linking them to customers, vendors and banks, merging duplicates, syncing to Outlook, and organizing contacts with groups and profiles. It answers how-to questions on contact setup and maintenance."
tier: official
language: en
system: crm
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:04.955Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4c0d5a6783c5593d68beba09347b35a4ac4cff62f97d857e1012a23ce20d8dcc
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-contacts
    title: Create and manage company contacts
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-companies
    title: Create business contacts
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sales-how-merge-duplicate-records
    title: Merge duplicate customer or vendor records
    date: "2025-06-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook
    title: Save Business Contacts to Microsoft Outlook
    date: "2026-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-setup-contacts
    title: Set up information for contacts
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-profile-questionnaire
    title: Use profiles to classify contacts
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/marketing-contacts
    - https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-companies
    - https://learn.microsoft.com/dynamics365/business-central/sales-how-merge-duplicate-records
    - https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook
    - https://learn.microsoft.com/dynamics365/business-central/marketing-setup-contacts
    - https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-profile-questionnaire
  objects:
    - object/page/5109
    - object/page/5110
  features: []
  topics:
    - topic/business-central/business-functionality/relationship-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10050
    - change/bcapps/10151
    - change/bcapps/10303
    - change/bcapps/10778
    - change/bcapps/9966
learn_toc_path:
  - Business functionality
  - Relationship management
  - Manage contacts
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/relationship-management
children: []
coverage:
  learn: 6
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5109
  - 5110
member_hash: 1bddf34271708c8593a485ff2b8d02979e0ed93f86dc6f8142d18ae7ace9f6bb
narrative: generated
---

# Manage contacts

> Managing contacts in Business Central: creating person and company contacts, linking them to customers, vendors and banks, merging duplicates, syncing to Outlook, and organizing contacts with groups and profiles. It answers how-to questions on contact setup and maintenance.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Manage contacts · tier official · system crm · narrative reviewed (checked by Opus)

## Overview

This section covers the contact records used in relationship management to track prospects and business relationships. Contacts can be people or companies. They can be created from, or linked to, existing customers, vendors and bank accounts, and contact data can be synchronized with customers, vendors, employees and banks.

The pages fit together as a workflow. Start with "Create and manage company contacts" and "Create business contacts" for the contact card, contact types and linking. Then use "Set up information for contacts" and "Use profiles to classify contacts" to segment contacts for targeted marketing. "Merge duplicate customer or vendor records" handles cleanup. "Save Business Contacts to Microsoft Outlook" covers saving contacts to Outlook and Teams and synchronizing them with Outlook.

## Key points

- Contacts can be person or company types. The contact card supports interaction tracking, opportunity management and contact statistics.
- Contacts can be created from customers, vendors and bank accounts, and can be linked to existing business entities.
- Contacts can be converted to customers, vendors or banks.
- Merging duplicate customer, vendor or contact records means comparing field values, choosing which to keep, and resolving conflicts. It requires the MERGE DUPLICATES permission set.
- Contacts can be saved to Outlook and Teams, with optional two-way sync and contact filtering. The page references 2026 release wave 1.
- Master data for contacts includes industry groups, mailing groups, job responsibilities, organizational levels, web sources and alternate addresses.
- Profile questionnaires classify and rate contacts using answer points, with automatic classification, to support targeted campaigns.

## Learn pages

- [Create and manage company contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-contacts): Record every external person or organization you interact with—such as prospects, customers, vendors, and consultants—as contacts to track relationship details and communications.
- [Create business contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-companies): Outlines the tasks needed to create contacts and define your business relationships on the Contact Card.
- [Merge duplicate customer or vendor records](https://learn.microsoft.com/dynamics365/business-central/sales-how-merge-duplicate-records): Describes how to consolidate information about customers or vendors when you have duplicate entries about some of them.
- [Save Business Contacts to Microsoft Outlook](https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook): Learn how to synchronize Business Central contacts with Microsoft Outlook and Teams to streamline communication and access contact details effortlessly.
- [Set up information for contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-setup-contacts): Outlines the tasks to specify information and codes, for example, about industry groups and business relationships, before you set up contacts.
- [Use profiles to classify contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-profile-questionnaire): Learn how to set up profile questionnaires to help classify your business contacts' profiles.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10050 Bug 638128: Deadlock in Duplicate Management when multiple users create customers at the same time](../../../../changes/bcapps/10050.md) (code change): "Deadlock in Duplicate Management when multiple users create customers and contacts concurrently"
- [#10151 Fix vendor contact relation read permission](../../../../changes/bcapps/10151.md) (code change): "Vendor changes made through indirect permissions no longer fail when the contact update check reads Contact Business Relation"
- [#10303 [Master]-Modifying a linked contact's common field clears the SIREN field on the associated customer record in the French version.](../../../../changes/bcapps/10303.md) (code change): "The French version now correctly preserves the SIREN field on a customer record when modifying a linked contact"
- [#10778 [Backport 29.x] Harden Contact Sync delta URL and ownership checks (#9966)](../../../../changes/bcapps/10778.md) (code change): "Contact Sync now validates delta URLs against an approved Microsoft Graph prefix"
- [#9966 Harden Contact Sync delta URL and ownership checks](../../../../changes/bcapps/9966.md) (code change): "Contact Sync now validates delta URLs against the approved Microsoft Graph endpoint"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5109 "Profile Questionnaires"](../../../../objects/page/5109.md) · captioned "Questionnaire Setup" · on [Table 5087 "Profile Questionnaire Header"](../../../../objects/table/5087.md)
- [Page 5110 "Profile Questionnaire Setup"](../../../../objects/page/5110.md) · on [Table 5088 "Profile Questionnaire Line"](../../../../objects/table/5088.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
