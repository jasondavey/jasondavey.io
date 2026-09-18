import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@/test/render";
import HeroDiaryTeaser from "./HeroDiaryTeaser";
import type { DiaryEntry } from "@/diary/types";

const entries: DiaryEntry[] = [
  {
    slug: "newest-post",
    title: "Newest Post",
    date: "2026-02-20",
    excerpt: "The most recent excerpt.",
    tags: ["testing"],
    body: "Full body.",
  },
];

vi.mock("@/diary/entries", () => ({
  getLatestEntries: (limit: number) => entries.slice(0, limit),
}));

describe("HeroDiaryTeaser", () => {
  it("labels the teaser 'Ink Still Drying'", () => {
    render(<HeroDiaryTeaser />);
    expect(screen.getByText("Ink Still Drying")).toBeInTheDocument();
  });

  it("renders the latest entry and links to its detail page", () => {
    render(<HeroDiaryTeaser />);

    expect(screen.getByText("The most recent excerpt.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Newest Post" })).toHaveAttribute(
      "href",
      "/diary/newest-post"
    );
  });
});
