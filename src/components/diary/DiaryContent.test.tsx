import { describe, expect, it } from "vitest";
import { render } from "@/test/render";
import DiaryContent from "./DiaryContent";

describe("DiaryContent", () => {
  it("renders markdown as HTML", () => {
    const { container } = render(<DiaryContent markdown="## Heading\n\nSome *text*." />);
    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(container.querySelector("em")).toBeInTheDocument();
  });

  it("sanitizes raw script tags out of the rendered output", () => {
    const { container } = render(
      <DiaryContent markdown={'Hello<script>window.__pwned = true;</script>'} />
    );
    expect(container.querySelector("script")).not.toBeInTheDocument();
  });
});
