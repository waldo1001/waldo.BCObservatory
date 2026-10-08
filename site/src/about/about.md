Written by waldo, not by the pipeline. The counts on this page come from the last nightly.

## Who

I'm waldo. Eric Wauters on paper, but nobody uses the paper.

I've been doing NAV, and then Business Central, since the version numbers had a dot in them. Microsoft has called me an MVP since 2007. My kids call me "the guy who's always typing".

Here's the thing: I'm lazy. Properly lazy. Every tool I ever built was so I wouldn't have to do something twice. The CRS extension, so I'd stop naming files. PowerShell modules, so I'd stop opening PowerShell. [BC Telemetry Buddy](https://github.com/waldo1001/waldo.BCTelemetryBuddy), so I'd stop writing the same KQL query for the fourth time and could just ask my agent what went wrong last night. You get the idea.

Then AI agents came along and I thought: finally, I can be lazy at scale. I asked one about a field on the Customer table. It answered with great confidence and a field number that does not exist. Hasn't existed. Will never exist.

So I did the thing I always do. I built something so I wouldn't have to check. A Mac Mini in my house now reads all of Business Central every night and writes it down, with receipts. This site is that. The agent still answers with confidence. Now it's also right.

I co-founded [iFacto](https://www.ifacto.be), a Business Central partner in Belgium. I blog at [waldo.be](https://www.waldo.be), mostly about what I broke that week. I'm Belgian, which explains both the stubbornness and the fact that this runs on a subscription instead of a budget.

It's unofficial. Microsoft didn't ask for this. They're welcome.

## Why

There is a shitload of information about Business Central out there. Learn alone is thousands of pages. The code is on GitHub, all of it, every version. The roadmap is a website. There are hundreds of hours of sessions on YouTube and more blogs than anyone can read. None of that is the problem.

The problem is that nothing ties it together. Nothing says: this Learn page is about that table, which that session explains at minute twelve, which Belgium changes, which Microsoft touched in a pull request last Tuesday, which this blog post warned you about. There is no map of the Business Central ecosystem. Everyone carries a piece of it in their head, and the agents carry nothing at all, so they make it up.

So this is a map. Not a mirror: Microsoft Learn stays the documentation, your blog stays your blog. The observatory only draws the lines between them, and every line says where it comes from.

Three rules I don't bend. **Agents first.** Every page has a markdown twin, every section an `llms.txt`, and one MCP server reads the same files the site does. **Evidence on everything.** A claim without a URL, a commit, a video second or a quote does not get on a page. **Honest about who wrote what.** Every page shows its trust tier (official is Microsoft, community is everyone else) and its review state, so you know whether a sentence was placed by code, written by a model, or checked by a bigger model.

## How

- Nightly on a Mac Mini in my house, as a self-hosted GitHub runner, on a Claude subscription. No API keys, anywhere.
- Deterministic first: the code is parsed, never summarised. Models only on what changed: Haiku for facts, Sonnet for prose, Opus to review. A page a model wrote says `unreviewed` until Opus has checked it.
- Community text stays yours: a summary in our words, at most three quotes under 25 words, and a link back. A leak scanner fails the build if more than that ever reaches the repository. See the [content notice](https://github.com/waldo1001/waldo.BCObservatory/blob/main/CONTENT-NOTICE.md).
- Procedure bodies and the call graph come from [bc-code-atlas](https://github.com/StefanMaron/bc-code-atlas) by Stefan Maron, which the plugin connects next to this server.

The galaxy on the home page is the data model drawn. Systems are domains. Stars are hubs: Learn topics, roadmap features, countries, sources and the most connected AL objects. Videos and posts orbit the hubs they link to. A country draws a constellation over the W1 sky. This week's additions light up.

## For who

Seven readers, seven questions, and the page that answers each.
