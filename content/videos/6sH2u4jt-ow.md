---
id: video/6sH2u4jt-ow
type: video
title: "What's Cooking in Business Central: Storing Document Attachments outside the Database"
summary: "Offloading Business Central document attachments to external storage (blob storage, file share, SharePoint): setup with external file accounts and file scenarios, upload and delete policies, nightly job queue, and the backup risk the customer takes on."
tier: official
language: en
tags:
  - external storage
  - document attachments
  - blob storage
  - file share
  - sharepoint
  - file scenarios
  - backup responsibility
  - job queue
  - storage sync
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:51:53.237Z"
  flags: []
generated:
  at: "2026-10-07T22:51:53.284Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e9ec4abfd0ea1c42a60dea2f58775dd4c9b14725607d45833795af02d800ccbd
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=6sH2u4jt-ow&t=45s
    title: "What's Cooking in Business Central: Storing Document Attachments outside the Database"
    date: "2025-11-27T16:00:17.000Z"
    commit: null
    t: 45
    quote: you are using this feature as it is and on your own risk because once the files are offloaded it is your responsibility to
  - kind: video
    url: https://www.youtube.com/watch?v=6sH2u4jt-ow&t=65s
    title: "What's Cooking in Business Central: Storing Document Attachments outside the Database"
    date: "2025-11-27T16:00:17.000Z"
    commit: null
    t: 65
    quote: If files get deleted on external storage they will also not be available anymore for business central environment.
  - kind: video
    url: https://www.youtube.com/watch?v=6sH2u4jt-ow&t=90s
    title: "What's Cooking in Business Central: Storing Document Attachments outside the Database"
    date: "2025-11-27T16:00:17.000Z"
    commit: null
    t: 90
    quote: After enabling this feature, it is important that we set also root folder for the storage.
  - kind: video
    url: https://www.youtube.com/watch?v=6sH2u4jt-ow&t=145s
    title: "What's Cooking in Business Central: Storing Document Attachments outside the Database"
    date: "2025-11-27T16:00:17.000Z"
    commit: null
    t: 145
    quote: This option automatically offloads all your document attachments from your database by creating a job queue which will be run each night at 100
  - kind: video
    url: https://www.youtube.com/watch?v=6sH2u4jt-ow&t=260s
    title: "What's Cooking in Business Central: Storing Document Attachments outside the Database"
    date: "2025-11-27T16:00:17.000Z"
    commit: null
    t: 260
    quote: you can also bring them back just select from external storage and the system will download all those document attachments back to Business Central
links:
  learn: []
  objects:
    - object/page/48
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 6sH2u4jt-ow
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=6sH2u4jt-ow
published_at: "2025-11-27T16:00:17.000Z"
duration_s: 279
captions: full
audience:
  - administrator
  - functional consultant
  - partner
chapters:
  - t: 0
    title: Introduction and External File Accounts Setup
  - t: 32
    title: Configuring Document Attachments External Storage Scenario
  - t: 65
    title: Enabling External Storage and Setting Root Folder
  - t: 103
    title: Upload and Delete Policy Configuration
  - t: 161
    title: Deletion Options and Feature Readiness
  - t: 187
    title: Uploading Document Attachments to External Storage
  - t: 215
    title: Verifying Upload and Retention in Business Central
  - t: 250
    title: Storage Sync and Migration Features
features:
  - name: External Storage for Document Attachments
    status: unclear
    t: 5
    verified: false
    status_source: video
  - name: Scheduled Upload with Job Queue
    status: unclear
    t: 128
    verified: false
    status_source: video
  - name: Immediate Delete After Upload Policy
    status: unclear
    t: 113
    verified: false
    status_source: video
  - name: Delayed Delete with Date Formula
    status: unclear
    t: 113
    verified: false
    status_source: video
  - name: Delete External Files on Attachment Deletion
    status: unclear
    t: 161
    verified: false
    status_source: video
  - name: Storage Sync Feature
    status: unclear
    t: 250
    verified: false
    status_source: video
  - name: Restore Attachments from External Storage
    status: unclear
    t: 260
    verified: false
    status_source: video
objects_mentioned:
  - page External File Accounts
  - page File Scenarios
  - page Assign Scenarios
  - page Sales Orders
  - page Document Attachments External Storage
quotes:
  - t: 45
    text: you are using this feature as it is and on your own risk because once the files are offloaded it is your responsibility to
    check: exact
  - t: 65
    text: If files get deleted on external storage they will also not be available anymore for business central environment.
    check: exact
  - t: 90
    text: After enabling this feature, it is important that we set also root folder for the storage.
    check: exact
  - t: 145
    text: This option automatically offloads all your document attachments from your database by creating a job queue which will be run each night at 100
    check: exact
  - t: 260
    text: you can also bring them back just select from external storage and the system will download all those document attachments back to Business Central
    check: exact
---

# What's Cooking in Business Central: Storing Document Attachments outside the Database

> Offloading Business Central document attachments to external storage (blob storage, file share, SharePoint): setup with external file accounts and file scenarios, upload and delete policies, nightly job queue, and the backup risk the customer takes on.

[Watch on YouTube](https://www.youtube.com/watch?v=6sH2u4jt-ow) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-11-27 · 4:39 · tier official · reviewed (checked by Opus)

## Overview

The video walks through storing document attachments outside the Business Central database. It starts with setting up an external file account, then assigns it to the Document Attachments External Storage scenario, enables the feature and sets the required root folder.

It then covers upload and delete policies: a job queue that runs at 1:00 a.m. by default, immediate delete after upload, delayed delete with a date formula (7 days in the example), and whether external files are deleted when an attachment is removed in Business Central. An upload is demoed and checked in Business Central. The video closes with the storage sync feature for existing attachments and restoring attachments back from external storage. It warns that the feature is used at the customer's own risk, because backups of offloaded files become the customer's responsibility.

## Key points

- Setup uses the External File Accounts and File Scenarios pages, with the Document Attachments External Storage scenario assigned through Assign Scenarios.
- After enabling the feature in External Storage Setup (via Additional Scenario Setup), it is important to set a root folder for the storage.
- Scheduled upload should be enabled; it creates a job queue that runs each night at 1:00 a.m. by default to offload document attachments.
- Immediate delete after upload conflicts with delayed delete: enabling immediate delete makes the delayed delete option non-editable.
- Delayed delete keeps files in Business Central for a period set by a date formula; the example shows 7 days.
- An option controls whether external files are deleted when attachments are deleted, covering scenarios where you delete a file in Business Central but keep it on external storage.
- Uploaded attachments can be verified from the Document Attachments action in Additional Scenario Setup, where Uploaded to External is set to true.

## Chapters

- [0:00](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=0s) Introduction and External File Accounts Setup
- [0:32](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=32s) Configuring Document Attachments External Storage Scenario
- [1:05](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=65s) Enabling External Storage and Setting Root Folder
- [1:43](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=103s) Upload and Delete Policy Configuration
- [2:41](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=161s) Deletion Options and Feature Readiness
- [3:07](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=187s) Uploading Document Attachments to External Storage
- [3:35](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=215s) Verifying Upload and Retention in Business Central
- [4:10](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=250s) Storage Sync and Migration Features

## Features

| Feature | Status | At |
|---|---|---|
| External Storage for Document Attachments | status not stated, demoed | [0:05](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=5s) |
| Scheduled Upload with Job Queue | status not stated | [2:08](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=128s) |
| Immediate Delete After Upload Policy | status not stated | [1:53](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=113s) |
| Delayed Delete with Date Formula | status not stated, demoed | [1:53](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=113s) |
| Delete External Files on Attachment Deletion | status not stated | [2:41](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=161s) |
| Storage Sync Feature | status not stated | [4:10](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=250s) |
| Restore Attachments from External Storage | status not stated | [4:20](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=260s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "External File Accounts" at [0:16](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=16s)
- page "File Scenarios" at [0:32](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=32s)
- page "Assign Scenarios" at [0:32](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=32s)
- [page 48 "Sales Orders"](../objects/page/48.md) at [3:07](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=187s)
- page "Document Attachments External Storage" at [0:45](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=45s)

Not found in BC28-30: page "External File Accounts", page "File Scenarios", page "Assign Scenarios", page "Document Attachments External Storage".

## Quotes

- [0:45](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=45s) "you are using this feature as it is and on your own risk because once the files are offloaded it is your responsibility to"
- [1:05](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=65s) "If files get deleted on external storage they will also not be available anymore for business central environment."
- [1:30](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=90s) "After enabling this feature, it is important that we set also root folder for the storage."
- [2:25](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=145s) "This option automatically offloads all your document attachments from your database by creating a job queue which will be run each night at 100"
- [4:20](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=260s) "you can also bring them back just select from external storage and the system will download all those document attachments back to Business Central"

## Disclaimers in the video

- [0:45](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=45s) other: you are using this feature as it is and on your own risk because once the files are offloaded it is your responsibility to make proper backups and maintain those files
- [1:05](https://www.youtube.com/watch?v=6sH2u4jt-ow&t=65s) other: If files get deleted on external storage they will also not be available anymore for business central environment
