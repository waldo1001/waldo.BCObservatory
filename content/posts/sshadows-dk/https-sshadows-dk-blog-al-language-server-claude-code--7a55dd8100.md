---
id: post/sshadows-dk/https-sshadows-dk-blog-al-language-server-claude-code--7a55dd8100
type: post
title: Native AL Language Server Support in Claude Code
summary: Claude Code now has native AL Language Server Protocol integration, enabling symbol-aware code navigation and structural understanding of AL projects. This provides capabilities like Go to Definition, Find References, and document symbols that treat AL files as structured code rather than plain text.
tier: community
language: en
tags:
  - al language server
  - claude code
  - code navigation
  - lsp integration
  - developer tools
  - symbol awareness
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:17.306Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: f6947da8aa7cef94a47bca78d74c525ce7ae454344a657f6f4cf2c98b6b36e44
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/al-language-server-claude-code/
    title: Native AL Language Server Support in Claude Code
    date: "2026-01-09"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/al-language-server-claude-code/
    title: Native AL Language Server Support in Claude Code
    date: "2026-01-09"
    commit: null
    t: null
    quote: This is the actual Microsoft AL compiler understanding your code.
  - kind: blog
    url: https://sshadows.dk/blog/al-language-server-claude-code/
    title: Native AL Language Server Support in Claude Code
    date: "2026-01-09"
    commit: null
    t: null
    quote: The difference is like asking someone to find a book in a library by reading every page versus using the catalog system.
  - kind: blog
    url: https://sshadows.dk/blog/al-language-server-claude-code/
    title: Native AL Language Server Support in Claude Code
    date: "2026-01-09"
    commit: null
    t: null
    quote: Claude can now navigate your code like a developer would.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/al-language-server-claude-code/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/al-language-server-claude-code/
published_at: "2026-01-09T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 904
quotes:
  - text: This is the actual Microsoft AL compiler understanding your code.
    why_it_matters: Emphasizes that LSP provides genuine code understanding, not pattern matching, enabling accurate navigation and relationship discovery
  - text: The difference is like asking someone to find a book in a library by reading every page versus using the catalog system.
    why_it_matters: Clarifies the fundamental advantage of LSP over text-based approaches for code navigation and reference finding
  - text: Claude can now navigate your code like a developer would.
    why_it_matters: "Demonstrates the practical outcome: AI assistants gain developer-level code comprehension for Business Central projects"
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned:
  - Claude Code 2.1.0
---

# Native AL Language Server Support in Claude Code

[Read the post](https://sshadows.dk/blog/al-language-server-claude-code/) · SShadowS (Torben Leth) · 2026-01-09 · 904 words · tier community · **unreviewed** (model text not yet checked)

> Claude Code now has native AL Language Server Protocol integration, enabling symbol-aware code navigation and structural understanding of AL projects. This provides capabilities like Go to Definition, Find References, and document symbols that treat AL files as structured code rather than plain text.

## Key points

- LSP integration gives Claude Code access to symbol awareness, navigation, and understanding of relationships between AL objects without regex pattern matching
- Provides features like Go to Definition, Find References, hover information, call hierarchy, and workspace symbol search across entire projects
- Native integration is Claude Code-specific with tighter integration and zero-config setup, complementing the universal Serena MCP approach for other AI assistants
- Requires Claude Code 2.1.0+, VS Code AL extension, Python 3.10+, and standard AL project structure with app.json
- Installation involves enabling LSP Tool environment variable and adding the al-language-server-python plugin via Claude Code marketplace

## Quotes

- "This is the actual Microsoft AL compiler understanding your code." (Emphasizes that LSP provides genuine code understanding, not pattern matching, enabling accurate navigation and relationship discovery)
- "The difference is like asking someone to find a book in a library by reading every page versus using the catalog system." (Clarifies the fundamental advantage of LSP over text-based approaches for code navigation and reference finding)
- "Claude can now navigate your code like a developer would." (Demonstrates the practical outcome: AI assistants gain developer-level code comprehension for Business Central projects)

## Context

- Features: Language Server Protocol integration, Go to Definition, Find References, Document symbols, Workspace symbols, Hover information, Call hierarchy, Multi-project support
- Versions: Claude Code 2.1.0

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
