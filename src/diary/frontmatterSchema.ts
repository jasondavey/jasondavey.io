import { z } from "zod";

// YAML frontmatter parsers (e.g. front-matter/js-yaml) auto-parse an unquoted
// `date: 2026-09-13` value into a JS Date rather than leaving it as a string,
// so this normalizes either shape to a plain YYYY-MM-DD string before validating.
const isoDate = z.preprocess(
  (value) => {
    if (value instanceof Date) {
      return value.toISOString().slice(0, 10);
    }
    return value;
  },
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "date must be an ISO date string (YYYY-MM-DD)")
);

export const frontmatterSchema = z.object({
  title: z.string().min(1),
  date: isoDate,
  excerpt: z.string().min(1),
  tags: z.array(z.string()).optional().default([]),
});

export type DiaryFrontmatter = z.infer<typeof frontmatterSchema>;
