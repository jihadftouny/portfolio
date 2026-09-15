import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"writing">;

/* Drafts exist under `astro dev` only; see content.config.ts. Newest first,
   with undated drafts on top so they are easy to find while writing. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("writing", ({ data }) => import.meta.env.DEV || !data.draft);
  const time = (p: Post) => p.data.date?.getTime() ?? Number.MAX_SAFE_INTEGER;
  return posts.sort((a, b) => time(b) - time(a));
}

/* Words over 230 a minute, on the text a reader actually reads: markup and
   URLs stripped first, so a figure's alt text does not inflate the count. */
export function readingMinutes(body = ""): number {
  const words = body
    .replace(/<[^>]+>/g, " ")
    .replace(/\]\([^)]*\)/g, "]")
    .split(/\s+/)
    .filter((w) => /\w/.test(w)).length;
  return Math.max(1, Math.round(words / 230));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
