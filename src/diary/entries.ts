import fm from "front-matter";
import { frontmatterSchema } from "./frontmatterSchema";
import type { DiaryEntry } from "./types";

const slugFromPath = (path: string): string => {
  const file = path.split("/").pop() ?? path;
  return file.replace(/\.md$/, "");
};

export function parseEntries(rawFiles: Record<string, string>): DiaryEntry[] {
  const entries = Object.entries(rawFiles).map(([path, raw]) => {
    const { attributes, body } = fm<Record<string, unknown>>(raw);
    const parsed = frontmatterSchema.safeParse(attributes);

    if (!parsed.success) {
      throw new Error(`Invalid diary entry frontmatter in "${path}": ${parsed.error.message}`);
    }

    return {
      slug: slugFromPath(path),
      title: parsed.data.title,
      date: parsed.data.date,
      excerpt: parsed.data.excerpt,
      tags: parsed.data.tags,
      body: body.trim(),
    } satisfies DiaryEntry;
  });

  return entries.sort((a, b) => b.date.localeCompare(a.date));
}

const rawEntryFiles = import.meta.glob("/src/content/diary/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const allEntries = parseEntries(rawEntryFiles);

export function getAllEntries(): DiaryEntry[] {
  return allEntries;
}

export function getEntryBySlug(slug: string): DiaryEntry | undefined {
  return allEntries.find((entry) => entry.slug === slug);
}

export function getLatestEntry(): DiaryEntry | undefined {
  return allEntries[0];
}

export function getLatestEntries(limit: number): DiaryEntry[] {
  return allEntries.slice(0, limit);
}
