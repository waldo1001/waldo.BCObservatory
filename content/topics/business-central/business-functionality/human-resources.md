---
id: topic/business-central/business-functionality/human-resources
type: topic
title: Human resources
summary: Human resources in Business Central covers managing employee records, contracts, qualifications, contacts and absences. It answers questions about registering employees, changing their information, and recording and analyzing absences by day or hour.
tier: official
language: en
system: hr
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:19.132Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6c8286be7a7e88e8832e781b5f6dd3c56894d42f849a30b8d0d042805c4ba186
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/hr-how-manage-absence
    title: Manage Employee Absence
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/hr-manage-human-resources
    title: Manage human resources
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/hr-how-register-employees
    title: Register Employees and Modify Information
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/hr-how-manage-absence
    - https://learn.microsoft.com/dynamics365/business-central/hr-manage-human-resources
    - https://learn.microsoft.com/dynamics365/business-central/hr-how-register-employees
  objects:
    - object/page/5200
    - object/page/5201
    - object/page/5204
    - object/page/5206
    - object/page/5208
    - object/page/5209
    - object/page/5211
    - object/page/5212
    - object/page/5221
    - object/page/5228
  features: []
  topics:
    - topic/business-central/business-functionality
  localizations: []
  videos: []
  posts:
    - post/gerardorenteria-blog/9061
  guidelines: []
  changes:
    - change/bcapps/11113
    - change/bcapps/11214
learn_toc_path:
  - Business functionality
  - Human resources
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality
children: []
coverage:
  learn: 3
  code: 10
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 5200
  - 5201
  - 5204
  - 5206
  - 5208
  - 5209
  - 5211
  - 5212
  - 5221
  - 5228
member_hash: 9f02226b56c6e69c4b1dc495055214a9bf6f48e2d963f4fa0ae7d3ffcfe1101d
narrative: generated
---

# Human resources

> Human resources in Business Central covers managing employee records, contracts, qualifications, contacts and absences. It answers questions about registering employees, changing their information, and recording and analyzing absences by day or hour.

Path: [Business functionality](../business-functionality.md) > Human resources · tier official · system hr · narrative reviewed by Opus

## Overview

The Human resources area describes how to keep employee data in Business Central. It has three pages and no subtopics: an overview of the HR module, a page on registering employees and changing their information, and a page on employee absence.

Start with "Manage human resources" for the overall picture: employee records, employment contracts, qualifications, contacts and absence management. Then go to "Register Employees and Modify Information" for creating employee cards, using templates, adding pictures and alternate addresses, and handling reimbursement details. Use "Manage Employee Absence" when you need to register absences and review them by category and period in matrix views for HR reporting.

## Key points

- Employee records hold detailed information and are created and maintained through employee cards.
- Employee templates can be used when registering new employees.
- Employee records can include pictures, alternate addresses and reimbursement details.
- The HR module also tracks employment contracts, qualifications and contacts.
- Absences can be registered by day or by hour.
- Absence data can be analyzed by category and by period.
- Matrix views support absence analysis for HR reporting.

## Learn pages

- [Manage Employee Absence](https://learn.microsoft.com/dynamics365/business-central/hr-how-manage-absence): Describes how to record employees' absence and analyze absence statistics using the Absence Registration and Employee Absences pages.
- [Manage human resources](https://learn.microsoft.com/dynamics365/business-central/hr-manage-human-resources): Register and manage employee records, maintain employment details, and track and analyze absences.
- [Register Employees and Modify Information](https://learn.microsoft.com/dynamics365/business-central/hr-how-register-employees): Describes how to use the Human Resources functionality to register new personnel or edit employee information for existing staff.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11113 [Master][All-e][FTE][SaaS] Last name of the employee relative is not editable when customized using “Profile (Role)”.](../../../changes/bcapps/11113.md) (code change): "Last Name field is now visible and editable on the Employee Relatives page"
- [#11214 [29.x][All-e][SaaS] Last name of the employee relative is not editable when customized using “Profile (Role)”](../../../changes/bcapps/11214.md) (code change): "Last Name field added to the Employee Relatives page layout"
- [👥 Human Resources Module in Business Central🚀](../../../posts/gerardorenteria-blog/9061.md) (community post): "The Human Resources module in Business Central provides employee management, absence tracking"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5200 "Employee Card"](../../../objects/page/5200.md) · on [Table 5200 "Employee"](../../../objects/table/5200.md)
- [Page 5201 "Employee List"](../../../objects/page/5201.md) · captioned "Employees" · on [Table 5200 "Employee"](../../../objects/table/5200.md)
- [Page 5204 "Alternative Address List"](../../../objects/page/5204.md) · captioned "Alternate Address List" · on [Table 5201 "Alternative Address"](../../../objects/table/5201.md)
- [Page 5206 "Employee Qualifications"](../../../objects/page/5206.md) · on [Table 5203 "Employee Qualification"](../../../objects/table/5203.md)
- [Page 5208 "Relatives"](../../../objects/page/5208.md) · on [Table 5204 "Relative"](../../../objects/table/5204.md)
- [Page 5209 "Employee Relatives"](../../../objects/page/5209.md) · on [Table 5205 "Employee Relative"](../../../objects/table/5205.md)
- [Page 5211 "Employee Absences"](../../../objects/page/5211.md) · on [Table 5207 "Employee Absence"](../../../objects/table/5207.md)
- [Page 5212 "Absence Registration"](../../../objects/page/5212.md) · on [Table 5207 "Employee Absence"](../../../objects/table/5207.md)
- [Page 5221 "Confidential Information"](../../../objects/page/5221.md) · on [Table 5216 "Confidential Information"](../../../objects/table/5216.md)
- [Page 5228 "Misc. Articles Overview"](../../../objects/page/5228.md) · on [Table 5200 "Employee"](../../../objects/table/5200.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
