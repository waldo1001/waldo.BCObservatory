/** npm run validate:content [-- --content-dir path] : exit 1 when any page or index fails (validate/content.ts). */
import { resolve } from "node:path";
import { CONTENT_DIR } from "../lib/paths.js";
import { validateContent } from "./content.js";

const i = process.argv.indexOf("--content-dir");
const dir = i >= 0 ? resolve(process.argv[i + 1]) : CONTENT_DIR;
const r = validateContent(dir);
const MAX = 200;
for (const e of r.errors.slice(0, MAX)) console.error(`error: ${e}`);
if (r.errors.length > MAX) console.error(`... and ${r.errors.length - MAX} more`);
console.log(`${r.pages} pages, ${r.indexes} llms.txt indexes`);
console.log(r.errors.length ? `content INVALID (${r.errors.length} errors)` : "content OK");
process.exit(r.errors.length ? 1 : 0);
