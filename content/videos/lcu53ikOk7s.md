---
id: video/lcu53ikOk7s
type: video
title: Safeguard G/L Accounts From Deletion
summary: "How to safeguard G/L accounts from deletion in Business Central using three fields on the General Ledger Setup page: Check G/L Account Usage, Check G/L Account Deletion After, and Block Deletion of G/L Account. Covers how a date set for data retention leads to a confirmation prompt, and how Block Deletion turns that prompt into an outright block."
tier: official
language: en
tags:
  - gl account deletion
  - general ledger setup
  - regulatory compliance
  - data retention
  - posting setup
  - deletion safeguards
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:13:27.741Z"
  flags: []
generated:
  at: "2026-10-07T23:13:27.784Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 87aff8da7ebbbc5a5ca48df1f696c7b7a3ee6b670349ad33dcdd0d40a05d0d61
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=lcu53ikOk7s&t=0s
    title: Safeguard G/L Accounts From Deletion
    date: "2023-12-18T13:27:05.000Z"
    commit: null
    t: 0
    quote: as long as it has no balance and the transactions do not belong to an income year that is still open.
  - kind: video
    url: https://www.youtube.com/watch?v=lcu53ikOk7s&t=18s
    title: Safeguard G/L Accounts From Deletion
    date: "2023-12-18T13:27:05.000Z"
    commit: null
    t: 18
    quote: We recommend that you change some settings to restrict when these deletions can occur. This is done on the general ledger setup page.
  - kind: video
    url: https://www.youtube.com/watch?v=lcu53ikOk7s&t=39s
    title: Safeguard G/L Accounts From Deletion
    date: "2023-12-18T13:27:05.000Z"
    commit: null
    t: 39
    quote: With the check GL account usage setting we can block any attempt to delete a GL account if the account is used in any
  - kind: video
    url: https://www.youtube.com/watch?v=lcu53ikOk7s&t=67s
    title: Safeguard G/L Accounts From Deletion
    date: "2023-12-18T13:27:05.000Z"
    commit: null
    t: 67
    quote: if you must store data for 5 years and your fiscal year follows the calendar year specify the date after which you don't want
  - kind: video
    url: https://www.youtube.com/watch?v=lcu53ikOk7s&t=100s
    title: Safeguard G/L Accounts From Deletion
    date: "2023-12-18T13:27:05.000Z"
    commit: null
    t: 100
    quote: I set the check GL account deletion after to December 31st, 2017. This means I can only delete the account if transactions has happened
  - kind: video
    url: https://www.youtube.com/watch?v=lcu53ikOk7s&t=113s
    title: Safeguard G/L Accounts From Deletion
    date: "2023-12-18T13:27:05.000Z"
    commit: null
    t: 113
    quote: the system will ask me if I really want to delete the account. I can still do so if I want to.
  - kind: video
    url: https://www.youtube.com/watch?v=lcu53ikOk7s&t=124s
    title: Safeguard G/L Accounts From Deletion
    date: "2023-12-18T13:27:05.000Z"
    commit: null
    t: 124
    quote: If I want to outright block the deletion of the account, I'll have to use the third setting called block deletion of GL account.
links:
  learn: []
  objects:
    - object/page/118
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: lcu53ikOk7s
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=lcu53ikOk7s
published_at: "2023-12-18T13:27:05.000Z"
duration_s: 163
captions: full
audience:
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Overview of GL account deletion risks
  - t: 18
    title: Accessing general ledger setup page
  - t: 39
    title: Check GL account usage setting
  - t: 57
    title: Check GL account deletion after field
  - t: 100
    title: Warning mechanism for account deletion
  - t: 124
    title: Block deletion of GL account setting
features:
  - name: Check GL account usage setting
    status: unclear
    t: 39
    verified: false
    status_source: video
  - name: Check GL account deletion after field
    status: unclear
    t: 57
    verified: false
    status_source: video
  - name: Block deletion of GL account setting
    status: unclear
    t: 124
    verified: false
    status_source: video
objects_mentioned:
  - page general ledger setup
quotes:
  - t: 0
    text: as long as it has no balance and the transactions do not belong to an income year that is still open.
    check: exact
  - t: 18
    text: We recommend that you change some settings to restrict when these deletions can occur. This is done on the general ledger setup page.
    check: exact
  - t: 39
    text: With the check GL account usage setting we can block any attempt to delete a GL account if the account is used in any
    check: exact
  - t: 67
    text: if you must store data for 5 years and your fiscal year follows the calendar year specify the date after which you don't want
    check: exact
  - t: 100
    text: I set the check GL account deletion after to December 31st, 2017. This means I can only delete the account if transactions has happened
    check: exact
  - t: 113
    text: the system will ask me if I really want to delete the account. I can still do so if I want to.
    check: exact
  - t: 124
    text: If I want to outright block the deletion of the account, I'll have to use the third setting called block deletion of GL account.
    check: exact
---

# Safeguard G/L Accounts From Deletion

> How to safeguard G/L accounts from deletion in Business Central using three fields on the General Ledger Setup page: Check G/L Account Usage, Check G/L Account Deletion After, and Block Deletion of G/L Account. Covers how a date set for data retention leads to a confirmation prompt, and how Block Deletion turns that prompt into an outright block.

[Watch on YouTube](https://www.youtube.com/watch?v=lcu53ikOk7s) · Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-18 · 2:43 · tier official · reviewed (checked by Opus)

## Overview

A G/L account can be deleted even if it has had transactions, as long as certain conditions hold. The video recommends changing settings on the General Ledger Setup page to restrict when deletions can occur.

It walks through three settings. Check G/L Account Usage blocks deletion of accounts used in setup tables such as posting setup. Check G/L Account Deletion After sets a date, which supports data retention requirements, and the demo sets it to December 31st, 2017. Block Deletion of G/L Account, used together with that date field, blocks deletion outright to enforce a mandatory retention period.

## Key points

- Settings are configured on the General Ledger Setup page (reachable via Alt+Q search).
- By default, an account can be deleted even if it has had transactions, as long as it has no balance and the transactions do not belong to an income year that is still open.
- Check G/L Account Usage blocks any attempt to delete an account that is used in setup tables, such as posting setup.
- Check G/L Account Deletion After takes a date after which you do not want deletions to occur, to support regulatory data retention requirements.
- Example: with fiscal year 2023 open and a 5-year retention (2018 through 2022), the date is set to December 31st, 2017, so deletion is only allowed if transactions happened before that date.
- Trying to delete an account with transactions after that date only triggers a confirmation prompt; the user can still delete.
- Block Deletion of G/L Account works in combination with the Check G/L Account Deletion After date to block deletion outright.

## Chapters

- [0:00](https://www.youtube.com/watch?v=lcu53ikOk7s&t=0s) Overview of GL account deletion risks
- [0:18](https://www.youtube.com/watch?v=lcu53ikOk7s&t=18s) Accessing general ledger setup page
- [0:39](https://www.youtube.com/watch?v=lcu53ikOk7s&t=39s) Check GL account usage setting
- [0:57](https://www.youtube.com/watch?v=lcu53ikOk7s&t=57s) Check GL account deletion after field
- [1:40](https://www.youtube.com/watch?v=lcu53ikOk7s&t=100s) Warning mechanism for account deletion
- [2:04](https://www.youtube.com/watch?v=lcu53ikOk7s&t=124s) Block deletion of GL account setting

## Features

| Feature | Status | At |
|---|---|---|
| Check GL account usage setting | status not stated | [0:39](https://www.youtube.com/watch?v=lcu53ikOk7s&t=39s) |
| Check GL account deletion after field | status not stated, demoed | [0:57](https://www.youtube.com/watch?v=lcu53ikOk7s&t=57s) |
| Block deletion of GL account setting | status not stated | [2:04](https://www.youtube.com/watch?v=lcu53ikOk7s&t=124s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- [page 118 "General Ledger Setup"](../objects/page/118.md) at [0:29](https://www.youtube.com/watch?v=lcu53ikOk7s&t=29s)

## Quotes

- [0:00](https://www.youtube.com/watch?v=lcu53ikOk7s&t=0s) "as long as it has no balance and the transactions do not belong to an income year that is still open."
- [0:18](https://www.youtube.com/watch?v=lcu53ikOk7s&t=18s) "We recommend that you change some settings to restrict when these deletions can occur. This is done on the general ledger setup page."
- [0:39](https://www.youtube.com/watch?v=lcu53ikOk7s&t=39s) "With the check GL account usage setting we can block any attempt to delete a GL account if the account is used in any"
- [1:07](https://www.youtube.com/watch?v=lcu53ikOk7s&t=67s) "if you must store data for 5 years and your fiscal year follows the calendar year specify the date after which you don't want"
- [1:40](https://www.youtube.com/watch?v=lcu53ikOk7s&t=100s) "I set the check GL account deletion after to December 31st, 2017. This means I can only delete the account if transactions has happened"
- [1:53](https://www.youtube.com/watch?v=lcu53ikOk7s&t=113s) "the system will ask me if I really want to delete the account. I can still do so if I want to."
- [2:04](https://www.youtube.com/watch?v=lcu53ikOk7s&t=124s) "If I want to outright block the deletion of the account, I'll have to use the third setting called block deletion of GL account."
