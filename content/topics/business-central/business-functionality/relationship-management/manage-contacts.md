---
id: topic/business-central/business-functionality/relationship-management/manage-contacts
type: topic
title: Manage contacts
summary: "Managing business contacts in Business Central: creating and linking contacts, setting up segmentation data, classifying with profile questionnaires, merging duplicates, and saving contacts to Outlook. It answers how-to questions about the Contacts list and its related setup."
tier: official
language: en
system: crm
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:52.438Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: dd8c9c80fc9ad33f389a2a6bb3b0aeb42082fa96858d2f76568cc0ad212d069c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-profile-questionnaire
    title: Classify Contacts with Profile Questionnaires
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-companies
    title: Create and Link Business Contacts
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-contacts
    title: Create and Manage Business Contacts
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sales-how-merge-duplicate-records
    title: Merge Duplicate Customers, Vendors, or Contacts
    date: "2026-10-22"
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
    title: Set Up Information for Business Contacts
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-profile-questionnaire
    - https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-companies
    - https://learn.microsoft.com/dynamics365/business-central/marketing-contacts
    - https://learn.microsoft.com/dynamics365/business-central/sales-how-merge-duplicate-records
    - https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook
    - https://learn.microsoft.com/dynamics365/business-central/marketing-setup-contacts
  objects:
    - object/page/5109
    - object/page/5110
  features: []
  topics:
    - topic/business-central/business-functionality/relationship-management
  localizations: []
  videos: []
  posts:
    - post/yzhums-com/67058
    - post/yzhums-com/67162
    - post/yzhums-com/72611
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
  blog: 3
  guideline: 0
bc_forms:
  - 5109
  - 5110
member_hash: 1bddf34271708c8593a485ff2b8d02979e0ed93f86dc6f8142d18ae7ace9f6bb
narrative: generated
---

# Manage contacts

> Managing business contacts in Business Central: creating and linking contacts, setting up segmentation data, classifying with profile questionnaires, merging duplicates, and saving contacts to Outlook. It answers how-to questions about the Contacts list and its related setup.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Manage contacts · tier official · system crm · narrative reviewed (checked by Opus)

## Overview

The Contacts list holds prospective business relations and external contacts, so they can be tracked and later converted to formal customers, vendors, or bank relationships. The page "Create and Manage Business Contacts" is the best starting point, since it introduces the contact card, statistics, sales opportunities, and the related tools.

Supporting pages cover specific tasks. "Create and Link Business Contacts" explains creating contacts manually or from customers, vendors, and bank accounts, creating those records from a contact, linking, unlinking, and synchronizing data. "Set Up Information for Business Contacts" covers the setup data used to segment contacts, such as industry groups, mailing groups, job responsibilities, organizational levels, and web sources.

Further pages deal with data quality and reach. Profile questionnaires classify contacts using answers with point values. The Merge Duplicate feature combines duplicate customer, vendor, or contact records. Contacts can also be saved to Microsoft Outlook, with optional two-way synchronization.

## Key points

- The Contacts list manages prospects and external contacts and helps convert them to customers, vendors, or bank relations.
- Contacts can be created manually, from customers, vendors, or bank accounts, and customers, vendors, employees, or bank accounts can be created from a contact.
- Existing contacts can be linked to or unlinked from customers, vendors, employees, and bank accounts, with contact data synchronized.
- Setup data includes industry groups, mailing groups, alternate addresses, job responsibilities, organizational levels, and web sources.
- Profile questionnaires use questions and answers with point values to classify contacts automatically for targeted campaigns.
- Merge Duplicate lets users choose which field values to keep and review related tables; it requires the MERGE DUPLICATES permission set.
- Saving contacts to Outlook and Teams supports optional two-way sync and contact filtering (listed under 2026 release wave 1).

## Learn pages

- [Classify Contacts with Profile Questionnaires](https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-profile-questionnaire): Set up profile questionnaires in Business Central to rate prospects, classify contacts, and target marketing campaigns using customer and vendor data.
  - In the observatory: [Page 5112 "Profile Question Details"](../../../../objects/page/5112.md), [Page 5172 "Answer Points"](../../../../objects/page/5172.md)
- [Create and Link Business Contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-create-contact-companies): Create contacts in Business Central, create related customer or vendor records, and link existing records to keep shared contact information synchronized.
  - In the observatory: [Page 5050 "Contact Card"](../../../../objects/page/5050.md), [Page 5060 "Business Relations"](../../../../objects/page/5060.md), [Page 5094 "Marketing Setup"](../../../../objects/page/5094.md)
- [Create and Manage Business Contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-contacts): Manage people and companies as contacts in Business Central, record relationship details, classify prospects, and find duplicate contact records.
- [Merge Duplicate Customers, Vendors, or Contacts](https://learn.microsoft.com/dynamics365/business-central/sales-how-merge-duplicate-records): Merge duplicate customer, vendor, or contact records in Business Central, choose which field values to keep, and resolve conflicts in related records.
  - In the observatory: [Page 21 "Customer Card"](../../../../objects/page/21.md), [Page 702 "Merge Duplicate"](../../../../objects/page/702.md), [Page 704 "Merge Duplicate Conflicts"](../../../../objects/page/704.md)
- [Save Business Contacts to Microsoft Outlook](https://learn.microsoft.com/dynamics365/business-central/save-business-contacts-to-outlook): Learn how to synchronize Business Central contacts with Microsoft Outlook and Teams to streamline communication and access contact details effortlessly.
- [Set Up Information for Business Contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-setup-contacts): Outlines the tasks to specify information and codes, for example, about industry groups and business relationships, before you set up contacts.
  - In the observatory: [Page 5050 "Contact Card"](../../../../objects/page/5050.md), [Page 5057 "Contact Alt. Address List"](../../../../objects/page/5057.md), [Page 5061 "Contact Business Relations"](../../../../objects/page/5061.md), [Page 5063 "Mailing Groups"](../../../../objects/page/5063.md), [Page 5064 "Contact Mailing Groups"](../../../../objects/page/5064.md), [Page 5066 "Industry Groups"](../../../../objects/page/5066.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10050 Bug 638128: Deadlock in Duplicate Management when multiple users create customers at the same time](../../../../changes/bcapps/10050.md) (code change): "Deadlock in Duplicate Management when multiple users create customers and contacts concurrently"
- [#10151 Fix vendor contact relation read permission](../../../../changes/bcapps/10151.md) (code change): "Vendor changes made through indirect permissions no longer fail when the contact update check reads Contact Business Relation"
- [#10303 [Master]-Modifying a linked contact's common field clears the SIREN field on the associated customer record in the French version.](../../../../changes/bcapps/10303.md) (code change): "The French version now correctly preserves the SIREN field on a customer record when modifying a linked contact"
- [#10778 [Backport 29.x] Harden Contact Sync delta URL and ownership checks (#9966)](../../../../changes/bcapps/10778.md) (code change): "Contact Sync now validates delta URLs against an approved Microsoft Graph prefix"
- [#9966 Harden Contact Sync delta URL and ownership checks](../../../../changes/bcapps/9966.md) (code change): "Contact Sync now validates delta URLs against the approved Microsoft Graph endpoint"
- [Dynamics 365 Business Central: Merge duplicate records (customers, vendors, or contacts)](../../../../posts/yzhums-com/67058.md) (community post): "Merge duplicate records (customers, vendors, or contacts)"
- [Dynamics 365 Business Central: Search for duplicate contacts (automatic and manual)](../../../../posts/yzhums-com/67162.md) (community post): "Search for duplicate contacts (automatic and manual)"
- [Business Central 2026 release wave 1 (BC28): Copy contacts from BC to Microsoft 365 (Outlook & Teams)](../../../../posts/yzhums-com/72611.md) (community post): "copy contacts from BC to Microsoft 365 Outlook"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5109 "Profile Questionnaires"](../../../../objects/page/5109.md) · captioned "Questionnaire Setup" · on [Table 5087 "Profile Questionnaire Header"](../../../../objects/table/5087.md)
- [Page 5110 "Profile Questionnaire Setup"](../../../../objects/page/5110.md) · on [Table 5088 "Profile Questionnaire Line"](../../../../objects/table/5088.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
