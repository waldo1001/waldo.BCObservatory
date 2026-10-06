// The design tokens as one cached stylesheet (design/tokens.json via lib/tokens), linked from every page.
import { tokenCss } from "../lib/tokens";

export const GET = () => new Response(tokenCss(), { headers: { "Content-Type": "text/css" } });
