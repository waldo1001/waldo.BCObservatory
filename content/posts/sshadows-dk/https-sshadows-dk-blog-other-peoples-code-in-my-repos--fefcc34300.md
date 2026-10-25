---
id: post/sshadows-dk/https-sshadows-dk-blog-other-peoples-code-in-my-repos--fefcc34300
type: post
title: Other People's Code in My Repos, and Mine in Theirs
summary: This post chronicles summer contributions to AL and Business Central development tools from external developers and the author's own work across ten upstream projects. It covers SaaS support for the bc-mcp server, performance fixes in CentralGauge based on community bug reports, the new LethAL mutation testing tool for AL, expanded functionality in bc-dev-mcp driven mostly by community PRs, standardization of AL file support across developer tools, and improvements to tree-sitter-al grammar and al-perf analysis.
tier: community
language: en
tags:
  - al development
  - open source contributions
  - mutation testing
  - performance analysis
  - language tooling
  - devops
  - grammar parsing
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:09.296Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: c37766f87ae14b1c8df64a00716cc962b87171f6f3c8f5e37228f278a3ab72cd
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/other-peoples-code-in-my-repos/
    title: Other People's Code in My Repos, and Mine in Theirs
    date: "2026-08-17"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/other-peoples-code-in-my-repos/
    title: Other People's Code in My Repos, and Mine in Theirs
    date: "2026-08-17"
    commit: null
    t: null
    quote: take it whole, cherry-pick parts, ask for a rework, or close it. We're running it ourselves either way.
  - kind: blog
    url: https://sshadows.dk/blog/other-peoples-code-in-my-repos/
    title: Other People's Code in My Repos, and Mine in Theirs
    date: "2026-08-17"
    commit: null
    t: null
    quote: A six-task bench run took 67 minutes. After the fix, the same run took 7 minutes with identical results.
  - kind: blog
    url: https://sshadows.dk/blog/other-peoples-code-in-my-repos/
    title: Other People's Code in My Repos, and Mine in Theirs
    date: "2026-08-17"
    commit: null
    t: null
    quote: So we are testing the tests, not the code.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/other-peoples-code-in-my-repos/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/other-peoples-code-in-my-repos/
published_at: "2026-08-17T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1253
quotes:
  - text: take it whole, cherry-pick parts, ask for a rework, or close it. We're running it ourselves either way.
    why_it_matters: Demonstrates collaborative open source philosophy where contributions move forward regardless of upstream acceptance, enabling independent deployment
  - text: A six-task bench run took 67 minutes. After the fix, the same run took 7 minutes with identical results.
    why_it_matters: Shows concrete impact of community-reported performance issues, validating the value of external bug reports with measurements
  - text: So we are testing the tests, not the code.
    why_it_matters: "Explains the core insight of mutation testing for AL: detecting weak test coverage that misses real defects"
code_objects_mentioned:
  - other business-central-mcp
  - other CentralGauge
  - other LethAL
  - other bc-dev-mcp
  - other tree-sitter-al
  - other al-perf
  - other al-sem
  - other al-lsp-for-agents
  - other DevOpsWorker
systems:
  - development
  - platform
  - integration
versions_mentioned:
  - bc-mcp v1.3
  - bc-mcp v1.5
  - bc-mcp v1.6.0
  - tree-sitter-al v4
  - tree-sitter-al v4.0.1
  - al-perf v4
  - al-sem 1.0
  - BC28
---

# Other People's Code in My Repos, and Mine in Theirs

[Read the post](https://sshadows.dk/blog/other-peoples-code-in-my-repos/) · SShadowS (Torben Leth) · 2026-08-17 · 1253 words · tier community · **unreviewed** (model text not yet checked)

> This post chronicles summer contributions to AL and Business Central development tools from external developers and the author's own work across ten upstream projects. It covers SaaS support for the bc-mcp server, performance fixes in CentralGauge based on community bug reports, the new LethAL mutation testing tool for AL, expanded functionality in bc-dev-mcp driven mostly by community PRs, standardization of AL file support across developer tools, and improvements to tree-sitter-al grammar and al-perf analysis.

## Key points

- External developers contributed significant code to projects including 12,500 lines adding BC SaaS support to bc-mcp and nine merged PRs to bc-dev-mcp from Ian Ray
- Performance improvement of 67 minutes to 7 minutes achieved in CentralGauge after fixing a slow PowerShell path issue found through community bug reports
- LethAL mutation testing tool released to verify test quality by introducing deliberate code breakages and checking if tests detect them
- AL file format support standardized across ten upstream development tools including vim, neovim, GitHub linguist, and syntax highlighters to prevent confusion with Perl
- tree-sitter-al v4 fixed grammar losslessness issues and al-perf v4 replaced assumptions with measured performance data from BC28 containers

## Quotes

- "take it whole, cherry-pick parts, ask for a rework, or close it. We're running it ourselves either way." (Demonstrates collaborative open source philosophy where contributions move forward regardless of upstream acceptance, enabling independent deployment)
- "A six-task bench run took 67 minutes. After the fix, the same run took 7 minutes with identical results." (Shows concrete impact of community-reported performance issues, validating the value of external bug reports with measurements)
- "So we are testing the tests, not the code." (Explains the core insight of mutation testing for AL: detecting weak test coverage that misses real defects)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "business-central-mcp"
- other "CentralGauge"
- other "LethAL"
- other "bc-dev-mcp"
- other "tree-sitter-al"
- other "al-perf"
- other "al-sem"
- other "al-lsp-for-agents"
- other "DevOpsWorker"

## Context

- Features: BC SaaS support via MCP, mutation testing, OData query tool, performance profiling, debugger coverage analysis, AL syntax highlighting, grammar losslessness
- Versions: bc-mcp v1.3, bc-mcp v1.5, bc-mcp v1.6.0, tree-sitter-al v4, tree-sitter-al v4.0.1, al-perf v4, al-sem 1.0, BC28

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
