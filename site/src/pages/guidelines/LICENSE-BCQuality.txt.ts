// microsoft/BCQuality's MIT licence (D126), written by the pipeline beside the rule pages; every page links it.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "content", "guidelines", "LICENSE-BCQuality.txt");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : "MIT License\n\nCopyright (c) Microsoft Corporation\n", { headers: { "content-type": "text/plain; charset=utf-8" } });
};
