import { describe, expect, it } from "vitest";
import { parseEntries } from "./entries";

const rawEntry = (overrides: Partial<Record<string, string>> = {}) => {
  const frontmatter = {
    title: "A test entry",
    date: "2026-01-01",
    excerpt: "An excerpt.",
    ...overrides,
  };
  const lines = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return `---\n${lines}\n---\n\nBody text.`;
};

describe("parseEntries", () => {
  it("parses frontmatter and derives the slug from the filename", () => {
    const [entry] = parseEntries({
      "/src/content/diary/my-first-post.md": rawEntry(),
    });

    expect(entry).toMatchObject({
      slug: "my-first-post",
      title: "A test entry",
      date: "2026-01-01",
      excerpt: "An excerpt.",
      tags: [],
      body: "Body text.",
    });
  });

  it("sorts entries by date descending", () => {
    const entries = parseEntries({
      "/src/content/diary/older.md": rawEntry({ date: "2025-01-01" }),
      "/src/content/diary/newer.md": rawEntry({ date: "2026-06-01" }),
    });

    expect(entries.map((e) => e.slug)).toEqual(["newer", "older"]);
  });

  it("parses a tags list from frontmatter", () => {
    const [entry] = parseEntries({
      "/src/content/diary/tagged.md": rawEntry({ tags: "[foo, bar]" }),
    });

    expect(entry.tags).toEqual(["foo", "bar"]);
  });

  it("throws a clear error when required frontmatter is missing", () => {
    expect(() =>
      parseEntries({
        "/src/content/diary/broken.md": "---\ntitle: Missing fields\n---\n\nBody.",
      })
    ).toThrow(/Invalid diary entry frontmatter in "\/src\/content\/diary\/broken\.md"/);
  });

  it("throws when the date is not an ISO date string", () => {
    expect(() =>
      parseEntries({
        "/src/content/diary/bad-date.md": rawEntry({ date: "Jan 1st 2026" }),
      })
    ).toThrow(/Invalid diary entry frontmatter/);
  });
});
