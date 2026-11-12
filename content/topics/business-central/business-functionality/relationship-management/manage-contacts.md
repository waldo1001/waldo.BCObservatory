---
id: topic/business-central/business-functionality/relationship-management/manage-contacts
type: topic
title: Manage contacts
summary: "Managing business contacts in Business Central: creating and linking contacts to customers, vendors, employees and bank accounts, classifying them with profile questionnaires, merging duplicates, setting up grouping information, and syncing contacts to Outlook. It answers how-to and setup questions for relationship management."
tier: official
language: en
system: crm
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7ce0bb871728d89bf720c29cf1b7060a2b7ca2005731852b18c445ac7708c979
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
    date: "2026-11-09"
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
  videos:
    - video/BwBR8JwwQa4
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
    - change/bcapps/13413
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
  video: 1
  blog: 3
  guideline: 0
bc_forms:
  - 5109
  - 5110
member_hash: 1bddf34271708c8593a485ff2b8d02979e0ed93f86dc6f8142d18ae7ace9f6bb
narrative: generated
---

# Manage contacts

> Managing business contacts in Business Central: creating and linking contacts to customers, vendors, employees and bank accounts, classifying them with profile questionnaires, merging duplicates, setting up grouping information, and syncing contacts to Outlook. It answers how-to and setup questions for relationship management.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Manage contacts · tier official · system crm · narrative **unreviewed** (model text not yet checked)

## Overview

Contacts in Business Central represent prospective business relations and external parties. The Contacts list is the central place to create contact cards, review statistics, manage sales opportunities and convert contacts into formal customer, vendor or bank relationships.

The pages fit together around that list. One page covers creating contacts manually or from customers and vendors, linking them to existing records and synchronizing data. Another covers setup information such as industry groups, mailing groups, job responsibilities, organizational levels and web sources. Profile questionnaires classify contacts for targeting campaigns. A merge page handles duplicates, and an Outlook page covers saving contacts to Outlook and Teams.

Start with "Create and Manage Business Contacts" for the overview, then "Set Up Information for Business Contacts" before classifying or segmenting. Use the merge and Outlook pages when cleaning data or sharing contacts with Microsoft 365.

## Key points

- Contacts can be created manually, from customers, vendors or bank accounts, or turned into customers, vendors, employees or bank accounts.
- Existing contacts can be linked to or unlinked from customer, vendor, employee and bank account records, with contact data synchronized.
- Profile questionnaires use questions and answers with point values to rate and automatically classify contacts into one or more categories.
- Setup data includes industry groups, mailing groups, alternate addresses, job responsibilities, organizational levels, web sources and business relations.
- Merge Duplicate combines duplicate customers, vendors or contacts; you choose which field values to keep, review related tables and resolve conflicts.
- Merging requires the MERGE DUPLICATES permission set.
- The Synchronize with Outlook action saves a filtered list of contacts to a chosen Outlook folder, with full sync and force full sync options and two-way synchronization (2026 release wave 1, version 28).

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
- [#13413 Fix localized contact filter control name in Contact Sync](../../../../changes/bcapps/13413.md) (code change): "The Contact Sync page now uses the localized ContactTxt table caption"
- [#9966 Harden Contact Sync delta URL and ownership checks](../../../../changes/bcapps/9966.md) (code change): "Contact Sync now validates delta URLs against the approved Microsoft Graph endpoint"
- [Dynamics 365 Business Central: Merge duplicate records (customers, vendors, or contacts)](../../../../posts/yzhums-com/67058.md) (community post): "Merge duplicate records (customers, vendors, or contacts)"
- [Dynamics 365 Business Central: Search for duplicate contacts (automatic and manual)](../../../../posts/yzhums-com/67162.md) (community post): "Search for duplicate contacts (automatic and manual)"
- [Business Central 2026 release wave 1 (BC28): Copy contacts from BC to Microsoft 365 (Outlook & Teams)](../../../../posts/yzhums-com/72611.md) (community post): "Synchronize with Outlook action on the Contacts list enables copying contacts"
- [What's New in Shopify Connector: Shopify B2B Companies and Company Locations (2025 release wave 1)](../../../../videos/BwBR8JwwQa4.md) (video): "Shopify B2B company locations import; Tax ID automatic entity mapping; Customer export"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5109 "Profile Questionnaires"](../../../../objects/page/5109.md) · captioned "Questionnaire Setup" · on [Table 5087 "Profile Questionnaire Header"](../../../../objects/table/5087.md)
- [Page 5110 "Profile Questionnaire Setup"](../../../../objects/page/5110.md) · on [Table 5088 "Profile Questionnaire Line"](../../../../objects/table/5088.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
