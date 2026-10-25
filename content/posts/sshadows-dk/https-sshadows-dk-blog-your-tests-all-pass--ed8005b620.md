---
id: post/sshadows-dk/https-sshadows-dk-blog-your-tests-all-pass--ed8005b620
type: post
title: Your Tests All Pass. I Have Bad News.
summary: Mutation testing is a technique that validates test quality by intentionally breaking code to see if tests catch the failures. The post introduces LethAL, an open-source tool for AL that performs mutation testing efficiently by compiling once and running mutations as table writes, making it practical for finding gaps in test suites that code coverage alone misses.
tier: community
language: en
tags:
  - testing
  - mutation testing
  - test quality
  - code validation
  - lethal tool
  - al development
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:08.226Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 83c538b50e7e721a90dfa53f2e9fcd32c6965d316485e5a2b1bcd247d88848ff
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/your-tests-all-pass/
    title: Your Tests All Pass. I Have Bad News.
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/your-tests-all-pass/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/your-tests-all-pass/
published_at: "2026-08-24T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1732
quotes: []
code_objects_mentioned:
  - codeunit credit limit check (example in post)
systems:
  - development
  - administration
versions_mentioned: []
---

# Your Tests All Pass. I Have Bad News.

[Read the post](https://sshadows.dk/blog/your-tests-all-pass/) · SShadowS (Torben Leth) · 2026-08-24 · 1732 words · tier community · **unreviewed** (model text not yet checked)

> Mutation testing is a technique that validates test quality by intentionally breaking code to see if tests catch the failures. The post introduces LethAL, an open-source tool for AL that performs mutation testing efficiently by compiling once and running mutations as table writes, making it practical for finding gaps in test suites that code coverage alone misses.

## Key points

- Code coverage measures whether a line ran, but mutation testing checks whether a test would notice if that line broke, providing stronger validation of test quality
- LethAL avoids the impractical naive approach of recompiling for each mutant by shipping all mutants in a single build and switching between them via table writes, reducing test time from hours to seconds
- The tool found real gaps in a sample credit limit check: missing boundary tests (equality vs greater-than), missing data setup (unfetched balances), and insufficient isolation (single customer masking filter issues)
- LethAL is built for agent-driven workflows with JSON schemas, clear exit codes, and self-grading mutation kills, allowing AI agents to work from a ranked queue of survivors
- Survivors are leads, not verdicts; they indicate where tests went silent, and developers must decide correct behavior before agents write tests to avoid locking in wrong behavior

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "credit limit check (example in post)"

Not found in BC28-30: codeunit "credit limit check (example in post)".

## Context

- Features: Mutation testing, LethAL tool, Test quality validation, Code coverage analysis, Mutation scoring, Agent-driven testing workflow

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
