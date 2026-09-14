import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/render";
import DiaryEntryCard from "./DiaryEntryCard";
import type { DiaryEntry } from "@/diary/types";

const entry: DiaryEntry = {
  slug: "my-post",
  title: "My Post",
  date: "2026-01-15",
  excerpt: "A short excerpt.",
  tags: ["testing"],
  body: "Full body.",
};

describe("DiaryEntryCard", () => {
  it("renders the title, formatted date, excerpt, and tags", () => {
    render(<DiaryEntryCard entry={entry} />);

    expect(screen.getByText("My Post")).toBeInTheDocument();
    expect(screen.getByText("A short excerpt.")).toBeInTheDocument();
    expect(screen.getByText("January 15, 2026")).toBeInTheDocument();
    expect(screen.getByText("testing")).toBeInTheDocument();
  });

  it("links to the entry's detail page", () => {
    render(<DiaryEntryCard entry={entry} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/diary/my-post");
  });
});
