// Which neighbour file holds an object (D66 phase 3): system -> keys, for explorer links that carry no system.
import type { APIRoute } from "astro";
import { neighbourIndex, relationMajors } from "../../../../lib/relations";

export const getStaticPaths = () => relationMajors().map((major) => ({ params: { major } }));

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(neighbourIndex(String(params.major))), { headers: { "content-type": "application/json; charset=utf-8" } });
