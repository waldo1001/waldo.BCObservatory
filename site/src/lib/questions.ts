/**
 * Question entries (design/HANDOFF.views.md, D66; in the header since D70): deep links into the galaxy (D) or the
 * neighbourhood explorer (C) with a lens preset. Galaxy links carry the home path so they work from every page; on the
 * home page only the hash changes and the galaxy applies the lens in place.
 */
export interface Question { ask: string; href: string; where: string }

export function questions(base: string): Question[] {
  return [
    { ask: "What is new this week?", href: `${base}#lens=landed`, where: "galaxy · this week" },
    { ask: "Where does this blog or channel touch Business Central?", href: `${base}#lens=pick:source`, where: "galaxy · source lens" },
    { ask: "What changed in BC29?", href: `${base}#lens=version:29`, where: "galaxy · version lens" },
    { ask: "What changes in BC30?", href: `${base}#lens=version:30`, where: "galaxy · version lens" },
    { ask: "What touches an object?", href: `${base}neighbourhood/?mode=relations`, where: "neighbourhood · relations" },
    { ask: "Who subscribes to an event?", href: `${base}neighbourhood/?mode=events`, where: "neighbourhood · events" },
    { ask: "What does a country change?", href: `${base}#lens=pick:localization`, where: "galaxy · country lens" },
    { ask: "What has no Learn page, video or post?", href: `${base}#lens=coverage`, where: "galaxy · coverage" },
  ];
}
