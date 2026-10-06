/** One uncached `claude -p` call: proves subscription auth (apiKeySource none) and the model family. Exit 1 otherwise. */
import { ping, type Role } from "../pipeline/lib/llm.js";

const role = (process.argv[2] ?? "smoke") as Role;
try {
  const r = await ping(role);
  console.log(JSON.stringify(r));
  process.exit(r.ok && r.api_key_source === "none" ? 0 : 1);
} catch (e) {
  console.error(`ping failed: ${(e as Error).name}: ${(e as Error).message}`);
  process.exit(1);
}
